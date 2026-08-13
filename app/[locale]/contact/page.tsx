import type { Metadata } from "next"
import { getDictionary } from "@/lib/i18n"
import { isLocale, defaultLocale, type Locale } from "@/lib/i18n/config"
import { pageMetadata } from "@/lib/seo"
import { PageHeader } from "@/components/page-header"
import { ContactForm } from "@/components/contact-form"

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
    path: "/contact",
    title: dict.meta.contactTitle,
    description: dict.meta.contactDescription,
    keywords: [
      "contact KaiRiOra",
      "European payroll consultation",
      "Employer of Record enquiry",
      "AI adoption consultation Europe",
      "free workforce assessment",
    ],
  })
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const loc = isLocale(locale) ? (locale as Locale) : defaultLocale
  const dict = await getDictionary(loc)

  return (
    <>
      <PageHeader title={dict.contact.title} subtitle={dict.contact.subtitle} />
      <section className="bg-muted">
        <div className="mx-auto max-w-3xl px-4 py-12 md:py-16">
          <ContactForm dict={dict} />
        </div>
      </section>
    </>
  )
}
