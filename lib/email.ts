import nodemailer from "nodemailer"

/**
 * SMTP transport.
 *
 * Defaults target Microsoft Outlook/Hotmail, but any SMTP provider works by
 * overriding SMTP_HOST / SMTP_PORT (e.g. a kairiora.com mailbox at your
 * domain host, which is what allows a real noreply@kairiora.com sender).
 *
 * Required env vars:
 *   SMTP_USER  - full mailbox address used to authenticate
 *   SMTP_PASS  - app password (NOT the normal account password)
 * Optional:
 *   SMTP_HOST  - default smtp-mail.outlook.com
 *   SMTP_PORT  - default 587 (STARTTLS)
 *   SMTP_FROM  - sender address; must be the authenticated mailbox or a
 *                verified alias of it, otherwise the provider rejects the send
 *   CONTACT_TO - inbox that receives enquiries (default SMTP_USER)
 */

const SMTP_HOST = process.env.SMTP_HOST ?? "smtp-mail.outlook.com"
const SMTP_PORT = Number(process.env.SMTP_PORT ?? 587)
const SMTP_USER = process.env.SMTP_USER
const SMTP_PASS = process.env.SMTP_PASS

/** Where enquiries are delivered. */
export const CONTACT_TO = process.env.CONTACT_TO ?? SMTP_USER ?? ""

/**
 * Envelope sender. Falls back to the authenticated mailbox because most
 * providers (Outlook included) refuse to send as an unrelated address.
 */
const FROM_ADDRESS = process.env.SMTP_FROM ?? SMTP_USER ?? ""
const FROM = `"KaiRiOra Website" <${FROM_ADDRESS}>`

export function isEmailConfigured() {
  return Boolean(SMTP_USER && SMTP_PASS)
}

let cached: nodemailer.Transporter | null = null

function getTransporter() {
  if (!cached) {
    cached = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_PORT === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    })
  }
  return cached
}

export interface Enquiry {
  name: string
  email: string
  currentCountry?: string
  targetCountry?: string
  arrangement?: string
  services?: string[]
  message?: string
}

function esc(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
}

const BRAND_NAVY = "#0f2544"
const BRAND_GOLD = "#c8a44d"

function shell(title: string, body: string) {
  return `<!doctype html>
<html><body style="margin:0;padding:24px;background:#f4f6f9;font-family:Segoe UI,Helvetica,Arial,sans-serif;color:#1f2937;">
  <table role="presentation" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:10px;overflow:hidden;border:1px solid #e5e7eb;">
    <tr><td style="background:${BRAND_NAVY};padding:20px 28px;">
      <div style="color:#ffffff;font-size:18px;font-weight:700;letter-spacing:.3px;">KaiRiOra</div>
      <div style="color:${BRAND_GOLD};font-size:12px;margin-top:2px;">${esc(title)}</div>
    </td></tr>
    <tr><td style="padding:28px;">${body}</td></tr>
    <tr><td style="background:#f9fafb;padding:16px 28px;border-top:1px solid #e5e7eb;color:#6b7280;font-size:12px;">
      KaiRiOra &middot; Workforce &amp; Business Services, Data &amp; AI Adoption, Agile Transformation
    </td></tr>
  </table>
</body></html>`
}

function row(label: string, value?: string) {
  if (!value) return ""
  return `<tr>
    <td style="padding:8px 0;width:150px;vertical-align:top;color:#6b7280;font-size:13px;">${esc(label)}</td>
    <td style="padding:8px 0;font-size:14px;font-weight:600;">${esc(value)}</td>
  </tr>`
}

/** Notification sent to the KaiRiOra inbox. */
export async function sendEnquiryNotification(e: Enquiry) {
  const services = e.services?.length ? e.services.join(", ") : undefined
  const message = e.message?.trim()

  const html = shell(
    "New website enquiry",
    `<table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse;">
      ${row("Name", e.name)}
      ${row("Email", e.email)}
      ${row("Current country", e.currentCountry)}
      ${row("Target country", e.targetCountry)}
      ${row("Arrangement", e.arrangement)}
      ${row("Services", services)}
    </table>
    ${
      message
        ? `<div style="margin-top:20px;padding-top:16px;border-top:1px solid #e5e7eb;">
             <div style="color:#6b7280;font-size:13px;margin-bottom:6px;">Message</div>
             <div style="font-size:14px;line-height:1.6;white-space:pre-wrap;">${esc(message)}</div>
           </div>`
        : ""
    }
    <p style="margin:22px 0 0;font-size:13px;color:#6b7280;">Reply directly to this email to respond to ${esc(e.name)}.</p>`,
  )

  return getTransporter().sendMail({
    from: FROM,
    to: CONTACT_TO,
    replyTo: `"${e.name}" <${e.email}>`,
    subject: `New enquiry: ${e.name}${e.targetCountry ? ` - ${e.targetCountry}` : ""}`,
    html,
    text: [
      `Name: ${e.name}`,
      `Email: ${e.email}`,
      e.currentCountry ? `Current country: ${e.currentCountry}` : "",
      e.targetCountry ? `Target country: ${e.targetCountry}` : "",
      e.arrangement ? `Arrangement: ${e.arrangement}` : "",
      services ? `Services: ${services}` : "",
      message ? `\n${message}` : "",
    ]
      .filter(Boolean)
      .join("\n"),
  })
}

/** Branded confirmation sent to the person who submitted the form. */
export async function sendAutoReply(e: Enquiry) {
  const html = shell(
    "We have received your enquiry",
    `<p style="margin:0 0 14px;font-size:15px;">Dear ${esc(e.name)},</p>
     <p style="margin:0 0 14px;font-size:14px;line-height:1.6;">
       Thank you for contacting KaiRiOra. We have received your enquiry and a member of
       our team will get back to you shortly, usually within one business day.
     </p>
     ${
       e.message?.trim()
         ? `<div style="margin:20px 0;padding:14px 16px;background:#f9fafb;border-left:3px solid ${BRAND_GOLD};border-radius:4px;">
              <div style="color:#6b7280;font-size:12px;margin-bottom:6px;">Your message</div>
              <div style="font-size:14px;line-height:1.6;white-space:pre-wrap;">${esc(e.message.trim())}</div>
            </div>`
         : ""
     }
     <p style="margin:0 0 14px;font-size:14px;line-height:1.6;">
       In the meantime, you are welcome to explore our services across payroll and employment,
       data and AI adoption, and agile transformation.
     </p>
     <p style="margin:22px 0 0;font-size:14px;">Kind regards,<br /><strong>The KaiRiOra Team</strong></p>`,
  )

  return getTransporter().sendMail({
    from: FROM,
    to: e.email,
    replyTo: CONTACT_TO,
    subject: "We have received your enquiry - KaiRiOra",
    html,
    text:
      `Dear ${e.name},\n\n` +
      `Thank you for contacting KaiRiOra. We have received your enquiry and a member of our team ` +
      `will get back to you shortly, usually within one business day.\n\n` +
      (e.message?.trim() ? `Your message:\n${e.message.trim()}\n\n` : "") +
      `Kind regards,\nThe KaiRiOra Team`,
  })
}
