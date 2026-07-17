import { streamText } from "ai"

export const maxDuration = 30

interface ChatMessage {
  role: "user" | "assistant"
  content: string
}

const SYSTEM_PROMPT = `You are the KaiRiOra AI Labour Law Assistant, a helpful guide that provides clear, general information about working, hiring, payroll, taxes, social security, visas and compliance across Europe (with particular focus on Spain and Portugal).

Rules you must always follow:
- Provide general, educational information only. You do NOT provide legal, tax, accounting or immigration advice.
- Be concise, structured and easy to read. Prefer short paragraphs and bullet points.
- When a question depends on individual circumstances (residence, nationality, employer setup, contract type), say so and explain the main factors involved.
- Always recommend confirming specifics with a qualified professional, and mention that KaiRiOra can help with an individual assessment.
- Never invent specific numbers, deadlines or legal citations. If unsure, describe the general principle instead.
- If asked something outside European workforce/compliance topics, politely steer back to what you can help with.
- Keep answers under ~180 words unless the user asks for more detail.`

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const messages: ChatMessage[] = Array.isArray(body?.messages) ? body.messages : []

    const sanitized = messages
      .filter((m) => (m.role === "user" || m.role === "assistant") && typeof m.content === "string")
      .slice(-12)
      .map((m) => ({ role: m.role, content: m.content.slice(0, 2000) }))

    if (sanitized.length === 0) {
      return new Response("No messages provided.", { status: 400 })
    }

    const result = streamText({
      model: "openai/gpt-5.4-mini",
      system: SYSTEM_PROMPT,
      messages: sanitized,
      temperature: 0.3,
    })

    return result.toTextStreamResponse()
  } catch (error) {
    console.error("[v0] assistant route error:", error)
    return new Response("The assistant is temporarily unavailable. Please try again.", {
      status: 500,
    })
  }
}
