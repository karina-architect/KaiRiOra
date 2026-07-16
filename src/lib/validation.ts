import { z } from "zod";

export const QuoteRequestSchema = z.object({
  name: z.string().min(1).max(120),
  email: z.string().email().max(254),
  company: z.string().min(1).max(160).optional(),
  country: z.string().min(2).max(100),
  message: z.string().min(1).max(5000),
  assumptions: z.record(z.string(), z.union([z.string(), z.number(), z.boolean()])).optional(),
});

export type QuoteRequest = z.infer<typeof QuoteRequestSchema>;

export const LabourLawAssistantRequestSchema = z.object({
  question: z.string().min(3).max(4000),
  locale: z.string().min(2).max(10).optional(),
  country: z.string().min(2).max(100).optional(),
  context: z.record(z.string(), z.union([z.string(), z.number(), z.boolean()])).optional(),
});

export type LabourLawAssistantRequest = z.infer<typeof LabourLawAssistantRequestSchema>;
