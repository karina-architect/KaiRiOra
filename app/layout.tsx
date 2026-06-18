import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KaiRiOra | AI Workforce, Payroll & Data Solutions",
  description: "AI-powered workforce, payroll, EOR, relocation, salary calculators and Data & AI consulting platform across Europe."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
