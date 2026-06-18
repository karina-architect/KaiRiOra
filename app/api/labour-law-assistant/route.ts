import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  return NextResponse.json({
    answer: "KaiRiOra AI Labour Law Assistant placeholder. Connect this endpoint to OpenAI, your labour-law knowledge base, CRM and country-specific compliance workflow.",
    received: body,
    disclaimer: "General information only. Not legal, tax, payroll or immigration advice."
  });
}
