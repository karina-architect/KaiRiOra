import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight, Check } from "lucide-react"
import { getDictionary } from "@/lib/i18n"
import { isLocale, defaultLocale, locales, type Locale } from "@/lib/i18n/config"
import { localizedPath } from "@/lib/i18n/navigation"
import { pageMetadata } from "@/lib/seo"
import { countries, getCountry } from "@/lib/countries"
import { PageHeader } from "@/components/page-header"

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    countries.map((c) => ({ locale, country: c.slug })),
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; country: string }>
}): Promise<Metadata> {
  const { locale, country } = await params
  const data = getCountry(country)
  if (!data) return {}
  const loc = isLocale(locale) ? (locale as Locale) : defaultLocale
  return pageMetadata({
    locale: loc,
    path: `/countries/${data.slug}`,
    // Lead with the services people actually search for, then the country.
    title: `Payroll, EOR & Employment Compliance in ${data.name}`,
    description: `${data.summary} Guidance on payroll, Employer of Record, contractor compliance, employer registration and residence in ${data.name}.`,
    keywords: [
      `payroll ${data.name}`,
      `employer of record ${data.name}`,
      `hire employees in ${data.name}`,
      `contractor compliance ${data.name}`,
      `employer registration ${data.name}`,
      `social security contributions ${data.name}`,
    ],
  })
}

export default async function CountryPage({
  params,
}: {
  params: Promise<{ locale: string; country: string }>
}) {
  const { locale, country } = await params
  const loc = isLocale(locale) ? (locale as Locale) : defaultLocale
  const dict = await getDictionary(loc)
  const data = getCountry(country)
  if (!data) notFound()

  const cp = dict.countryPage
  const sections: { title: string; items: string[] }[] = [
    { title: cp.sections.employment, items: data.employment },
    { title: cp.sections.payroll, items: data.payroll },
    { title: cp.sections.contractor, items: data.contractor },
    { title: cp.sections.registration, items: data.registration },
    { title: cp.sections.socialSecurity, items: data.socialSecurity },
    { title: cp.sections.residence, items: data.residence },
  ]

  return (
    <>
      <PageHeader kicker={cp.heroKicker} title={data.name} subtitle={data.summary} />

      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
          <Link
            href={localizedPath(loc, "/countries")}
            className="mb-6 inline-flex items-center gap-1 text-sm font-semibold text-blue hover:underline"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            {cp.backToCountries}
          </Link>

          <p className="mb-8 max-w-3xl text-pretty leading-relaxed text-muted-foreground">
            {cp.intro} {data.name}.
          </p>

          <div className="grid gap-6 lg:grid-cols-2">
            {sections.map((section) => (
              <div
                key={section.title}
                className="rounded-xl border border-border bg-white p-6 shadow-sm"
              >
                <h2 className="mb-3 font-heading text-lg font-bold text-navy">{section.title}</h2>
                <ul className="space-y-2">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex gap-2 text-sm leading-relaxed text-charcoal">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-border bg-softblue p-6">
            <h2 className="mb-4 font-heading text-lg font-bold text-navy">{cp.checklist}</h2>
            <ul className="grid gap-2 sm:grid-cols-2">
              {data.checklist.map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-charcoal">
                  <Check className="h-4 w-4 shrink-0 text-green-600" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-6 text-xs leading-relaxed text-muted-foreground">{cp.disclaimer}</p>
        </div>
      </section>

      <section className="bg-navy">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 px-4 py-12 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-heading text-xl font-bold text-white md:text-2xl">{cp.ctaTitle}</h2>
            <p className="mt-1 text-white/70">{cp.ctaSubtitle}</p>
          </div>
          <Link
            href={localizedPath(loc, "/contact")}
            className="inline-flex shrink-0 items-center gap-2 rounded-md bg-gold px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-gold-600"
          >
            {cp.ctaButton}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  )
}
