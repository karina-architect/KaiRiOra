import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, MapPin } from "lucide-react"
import { getDictionary } from "@/lib/i18n"
import { isLocale, defaultLocale, type Locale } from "@/lib/i18n/config"
import { pageMetadata } from "@/lib/seo"
import { localizedPath } from "@/lib/i18n/navigation"
import { countries } from "@/lib/countries"
import { PageHeader } from "@/components/page-header"

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
    path: "/countries",
    title: dict.meta.countriesTitle,
    description: dict.meta.countriesDescription,
    keywords: [
      "European payroll by country",
      "employer of record Europe",
      "contractor compliance Europe",
      "employer registration requirements",
      "hiring in Europe guide",
    ],
  })
}

export default async function CountriesPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const loc = isLocale(locale) ? (locale as Locale) : defaultLocale
  const dict = await getDictionary(loc)

  const regions = Array.from(new Set(countries.map((c) => c.region)))

  return (
    <>
      <PageHeader
        kicker="Europe"
        title={dict.countriesPage.title}
        subtitle={dict.countriesPage.subtitle}
      />
      <section className="bg-muted">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          {regions.map((region) => (
            <div key={region} className="mb-10 last:mb-0">
              <h2 className="mb-4 flex items-center gap-2 font-heading text-lg font-bold text-charcoal">
                <MapPin className="h-5 w-5 text-blue" aria-hidden="true" />
                {region}
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {countries
                  .filter((c) => c.region === region)
                  .map((country) => (
                    <Link
                      key={country.slug}
                      href={localizedPath(loc, `/countries/${country.slug}`)}
                      className="group flex flex-col rounded-xl border border-border bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
                    >
                      <div className="mb-2 flex items-center justify-between">
                        <span className="font-heading text-base font-bold text-navy">
                          {country.name}
                        </span>
                        <span className="rounded bg-muted px-2 py-0.5 text-xs font-semibold text-muted-foreground">
                          {country.code}
                        </span>
                      </div>
                      <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                        {country.summary}
                      </p>
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-blue">
                        {dict.countriesPage.viewCountry}
                        <ArrowRight
                          className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                          aria-hidden="true"
                        />
                      </span>
                    </Link>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
