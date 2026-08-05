import { NextResponse } from "next/server"
import { isEmailConfigured, sendAutoReply, sendEnquiryNotification, type Enquiry } from "@/lib/email"

interface ContactPayload {
  name?: string
  email?: string
  currentCountry?: string
  targetCountry?: string
  arrangement?: string
  services?: string[]
  message?: string
  consent?: boolean
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: Request) {
  let body: ContactPayload
  try {
    body = (await request.json()) as ContactPayload
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 })
  }

  const errors: Record<string, string> = {}
  if (!body.name?.trim()) errors.name = "required"
  if (!body.email?.trim()) errors.email = "required"
  else if (!EMAIL_RE.test(body.email.trim())) errors.email = "email"
  if (!body.consent) errors.consent = "consent"

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 422 })
  }

  const enquiry: Enquiry = {
    name: body.name!.trim(),
    email: body.email!.trim(),
    currentCountry: body.currentCountry?.trim() || undefined,
    targetCountry: body.targetCountry?.trim() || undefined,
    arrangement: body.arrangement?.trim() || undefined,
    services: body.services?.length ? body.services : undefined,
    message: body.message?.trim() || undefined,
  }

  if (!isEmailConfigured()) {
    console.error("[v0] contact: email is not configured (missing RESEND_API_KEY)")
    return NextResponse.json({ ok: false, error: "email_not_configured" }, { status: 503 })
  }

  // The notification to KaiRiOra must succeed for the submission to count.
  try {
    await sendEnquiryNotification(enquiry)
  } catch (error) {
    console.error("[v0] contact: failed to send notification:", error)
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 })
  }

  // The auto-reply is best-effort: never fail the submission because of it.
  try {
    await sendAutoReply(enquiry)
  } catch (error) {
    console.error("[v0] contact: failed to send auto-reply:", error)
  }

  return NextResponse.json({ ok: true })
}
