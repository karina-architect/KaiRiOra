import { SITE_URL, SITE_NAME, type Locale } from "@/lib/i18n/config"
import type { CountryData } from "@/lib/countries"

/**
 * BreadcrumbList + WebPage JSON-LD for a country guide.
 *
 * Deliberately no FAQPage here: these pages present prose sections rather than
 * a visible question-and-answer list, and marking them up as FAQs would be
 * mismatched structured data.
 */
export function CountrySchema({
  locale,
  country,
  countriesLabel,
}: {
  locale: Locale
  country: CountryData
  countriesLabel: string
}) {
  const base = `${SITE_URL}/${locale}`
  const pageUrl = `${base}/countries/${country.slug}`

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: SITE_NAME, item: base },
          { "@type": "ListItem", position: 2, name: countriesLabel, item: `${base}/countries` },
          { "@type": "ListItem", position: 3, name: country.name, item: pageUrl },
        ],
      },
      {
        "@type": "WebPage",
        "@id": pageUrl,
        url: pageUrl,
        name: `Payroll, EOR & Employment Compliance in ${country.name}`,
        description: country.summary,
        inLanguage: locale,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        publisher: { "@id": `${SITE_URL}/#organization` },
        about: {
          "@type": "Thing",
          name: `Employment and payroll compliance in ${country.name}`,
        },
        spatialCoverage: {
          "@type": "Country",
          name: country.name,
        },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  )
}
