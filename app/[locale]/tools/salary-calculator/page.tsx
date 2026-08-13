import type { Metadata } from "next"
import { getDictionary } from "@/lib/i18n"
import { isLocale, defaultLocale, SITE_URL, type Locale } from "@/lib/i18n/config"
import { pageMetadata } from "@/lib/seo"
import { PageHeader } from "@/components/page-header"
import { SalaryCalculator } from "@/components/salary-calculator"

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
    path: "/tools/salary-calculator",
    title: `${dict.calculator.title} — Employer Cost Estimator for Europe`,
    description: dict.calculator.subtitle,
    keywords: [
      "European salary calculator",
      "employer cost calculator Europe",
      "employment cost estimator",
      "gross to net salary Europe",
      "cost of hiring in Europe",
    ],
  })
}

export default async function SalaryCalculatorPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const loc = isLocale(locale) ? (locale as Locale) : defaultLocale
  const dict = await getDictionary(loc)

  // Free, no-login tool: WebApplication markup makes it eligible to surface
  // for "employer cost calculator" style queries.
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: dict.calculator.title,
    url: `${SITE_URL}/${loc}/tools/salary-calculator`,
    description: dict.calculator.subtitle,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Any",
    inLanguage: loc,
    isAccessibleForFree: true,
    offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
    publisher: { "@id": `${SITE_URL}/#organization` },
  }

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
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
