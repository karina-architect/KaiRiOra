import type { Metadata } from "next"
import { getDictionary } from "@/lib/i18n"
import { isLocale, defaultLocale, type Locale } from "@/lib/i18n/config"
import { pageMetadata } from "@/lib/seo"
import { PageHeader } from "@/components/page-header"
import { AiAssistant } from "@/components/ai-assistant"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const loc = isLocale(locale) ? (locale as Locale) : defaultLocale
  const dict = await getDictionary(loc)
  return pageMetadata({
    locale: loc,
    path: "/tools/ai-assistant",
    title: `${dict.ai.title} — Ask About Hiring & Compliance in Europe`,
    description: dict.ai.subtitle,
    keywords: [
      "AI assistant European employment",
      "workforce compliance questions",
      "hiring in Europe help",
      "payroll questions Europe",
    ],
  })
}

export default async function AiAssistantPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const loc = isLocale(locale) ? (locale as Locale) : defaultLocale
  const dict = await getDictionary(loc)

  return (
    <>
      <PageHeader kicker={dict.ai.beta} title={dict.ai.title} subtitle={dict.ai.subtitle} />
      <section className="bg-muted">
        <div className="mx-auto max-w-4xl px-4 py-12 md:py-16">
          <div className="rounded-xl border border-border bg-white p-5 shadow-sm md:p-6">
            <AiAssistant dict={dict} variant="full" />
          </div>
          <p className="mt-4 text-center text-xs text-muted-foreground">{dict.ai.disclaimer}</p>
        </div>
      </section>
    </>
  )
}
