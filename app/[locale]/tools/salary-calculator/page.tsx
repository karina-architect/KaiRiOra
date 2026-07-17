import type { Metadata } from "next"
import { getDictionary } from "@/lib/i18n"
import { isLocale, defaultLocale, type Locale } from "@/lib/i18n/config"
import { PageHeader } from "@/components/page-header"
import { SalaryCalculator } from "@/components/salary-calculator"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const dict = await getDictionary(isLocale(locale) ? (locale as Locale) : defaultLocale)
  return {
    title: `${dict.calculator.title} — KaiRiOra`,
    description: dict.calculator.subtitle,
  }
}

export default async function SalaryCalculatorPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const loc = isLocale(locale) ? (locale as Locale) : defaultLocale
  const dict = await getDictionary(loc)

  return (
    <>
      <PageHeader title={dict.calculator.title} subtitle={dict.calculator.subtitle} />
      <section className="bg-muted">
        <div className="mx-auto max-w-4xl px-4 py-12 md:py-16">
          <div className="rounded-xl border border-border bg-white p-5 shadow-sm md:p-8">
            <SalaryCalculator dict={dict} />
          </div>
        </div>
      </section>
    </>
  )
}
