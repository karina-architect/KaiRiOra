import { NextResponse } from "next/server"

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

  // In production this would persist to a database and/or notify the team.
  // For now we log the sanitised request server-side and acknowledge receipt.
  console.log("[v0] contact request received:", {
    name: body.name?.trim(),
    email: body.email?.trim(),
    currentCountry: body.currentCountry,
    targetCountry: body.targetCountry,
    arrangement: body.arrangement,
    services: body.services,
    hasMessage: Boolean(body.message?.trim()),
  })

  return NextResponse.json({ ok: true })
}
