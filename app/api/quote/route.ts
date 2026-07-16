import { failure, success } from "@/src/lib/api-response";
import { getClientIp, rateLimit } from "@/src/lib/rate-limit";
import { QuoteRequestSchema } from "@/src/lib/validation";

export async function POST(request: Request): Promise<Response> {
  try {
    const ip = getClientIp(request);
    const rl = rateLimit(`quote:${ip}`, 20, 60_000);

    if (!rl.allowed) {
      return failure("RATE_LIMITED", "Too many requests. Please try again shortly.", 429);
    }

    const json = await request.json().catch(() => null);
    const parsed = QuoteRequestSchema.safeParse(json);

    if (!parsed.success) {
      return failure("BAD_REQUEST", "Invalid request payload.", 400, parsed.error.format());
    }

    const payload = parsed.data;

    // TODO: integrate your quote backend/provider here
    // e.g. await quoteService.submit(payload)

    return success(
      {
        message: "Quote request received.",
        received: {
          name: payload.name,
          email: payload.email,
          country: payload.country,
        },
      },
      200
    );
  } catch (err) {
    console.error("[/api/quote] Unexpected error:", err);
    return failure("INTERNAL_ERROR", "Unexpected server error.", 500);
  }
}
