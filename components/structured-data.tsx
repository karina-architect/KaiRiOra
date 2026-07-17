import { SITE_URL, SITE_NAME } from "@/lib/i18n/config"

export function StructuredData({ locale }: { locale: string }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: `${SITE_URL}/${locale}`,
    logo: `${SITE_URL}/icon-512.png`,
    description:
      "Payroll administration, contractor management, Employer of Record coordination, recruitment, relocation and Data & AI consulting across Europe.",
    slogan: "People First. AI Driven. Growth Focused.",
    areaServed: "Europe",
    knowsAbout: [
      "Payroll administration",
      "Employer of Record",
      "Contractor management",
      "Workforce compliance",
      "Relocation and mobility",
      "Data and AI consulting",
    ],
  }

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
