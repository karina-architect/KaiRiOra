import { failure, success } from "@/src/lib/api-response";
import { getClientIp, rateLimit } from "@/src/lib/rate-limit";
import { LabourLawAssistantRequestSchema } from "@/src/lib/validation";

export async function POST(request: Request): Promise<Response> {
  try {
    const ip = getClientIp(request);
    const rl = rateLimit(`labour-law:${ip}`, 30, 60_000);

    if (!rl.allowed) {
      return failure("RATE_LIMITED", "Too many requests. Please try again shortly.", 429);
    }

    const json = await request.json().catch(() => null);
    const parsed = LabourLawAssistantRequestSchema.safeParse(json);

    if (!parsed.success) {
      return failure("BAD_REQUEST", "Invalid request payload.", 400, parsed.error.format());
    }

    const payload = parsed.data;

    // TODO: integrate your labour law assistant backend/provider here
    // e.g. const answer = await labourLawService.ask(payload)

    return success(
      {
        answer: "This is a placeholder response. Connect your labour law assistant provider.",
        input: {
          question: payload.question,
          locale: payload.locale ?? null,
          country: payload.country ?? null,
        },
      },
      200
    );
  } catch (err) {
    console.error("[/api/labour-law-assistant] Unexpected error:", err);
    return failure("INTERNAL_ERROR", "Unexpected server error.", 500);
  }
}
