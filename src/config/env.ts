import { z } from "zod";

const EnvSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),

  // Public
  NEXT_PUBLIC_SITE_URL: z.string().url().optional(),

  // Server-only examples (adjust to your real integrations)
  QUOTE_API_KEY: z.string().min(1).optional(),
  LABOUR_LAW_ASSISTANT_API_KEY: z.string().min(1).optional(),

  // Optional observability
  SENTRY_DSN: z.string().url().optional(),
});

const parsed = EnvSchema.safeParse(process.env);

if (!parsed.success) {
  const formatted = parsed.error.issues
    .map((i) => `- ${i.path.join(".")}: ${i.message}`)
    .join("\n");

  throw new Error(`Invalid environment variables:\n${formatted}`);
}

export const env = parsed.data;
