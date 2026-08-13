import { SITE_URL, SITE_NAME, locales } from "@/lib/i18n/config"

/**
 * Site-wide Organization + WebSite JSON-LD.
 *
 * Both nodes carry a stable `@id` so every other schema on the site
 * (ProfessionalService, BreadcrumbList, FAQPage) resolves to the same
 * organisation entity rather than creating duplicates.
 */
export function StructuredData({ locale }: { locale: string }) {
  const organisation = {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/icon-512.png`,
      width: 512,
      height: 512,
    },
    image: `${SITE_URL}/og-image.png`,
    description:
      "KaiRiOra delivers Data & AI Adoption, Workforce & Business Services and Agile Transformation across Europe, including payroll administration, Employer of Record, contractor management and recruitment.",
    slogan: "People First. AI Driven. Growth Focused.",
    email: "consult@kairiora.com",
    areaServed: {
      "@type": "Place",
      name: "Europe",
    },
    knowsLanguage: [...locales],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: "consult@kairiora.com",
        availableLanguage: ["English", "Spanish", "Portuguese", "French", "German", "Russian", "Hungarian"],
        areaServed: "Europe",
      },
    ],
    knowsAbout: [
      "Data and AI adoption",
      "AI strategy",
      "Data governance",
      "Data engineering",
      "Business intelligence and analytics",
      "Payroll administration",
      "Employer of Record",
      "Contractor management",
      "Recruitment and staff augmentation",
      "Workforce compliance",
      "Agile transformation",
    ],
  }

  const website = {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: `${SITE_URL}/${locale}`,
    name: SITE_NAME,
    inLanguage: locale,
    publisher: { "@id": `${SITE_URL}/#organization` },
  }

  const graph = {
    "@context": "https://schema.org",
    "@graph": [organisation, website],
  }

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  )
}
