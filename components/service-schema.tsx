import { SITE_URL, SITE_NAME, type Locale } from "@/lib/i18n/config"
import type { ServicePageContent } from "@/lib/service-pages"

/**
 * Emits ProfessionalService, BreadcrumbList and FAQPage JSON-LD for a
 * core-service landing page.
 */
export function ServiceSchema({
  locale,
  page,
}: {
  locale: Locale
  page: ServicePageContent
}) {
  const base = `${SITE_URL}/${locale}`
  const pageUrl = `${base}/services/${page.slug}`

  const professionalService = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${SITE_NAME} — ${page.eyebrow}`,
    url: pageUrl,
    description: page.metaDescription,
    areaServed: "Europe",
    inLanguage: locale,
    // Point at the site-wide Organization node instead of restating it, so
    // search engines consolidate everything onto one entity.
    provider: { "@id": `${SITE_URL}/#organization` },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: page.eyebrow,
      itemListElement: page.services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.title, description: s.desc },
      })),
    },
  }

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: base },
      { "@type": "ListItem", position: 2, name: page.eyebrow, item: pageUrl },
    ],
  }

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalService) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
    </>
  )
}
