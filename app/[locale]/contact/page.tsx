import type { Metadata } from "next"
import { getDictionary } from "@/lib/i18n"
import { isLocale, defaultLocale, type Locale } from "@/lib/i18n/config"
import { PageHeader } from "@/components/page-header"
import { ContactForm } from "@/components/contact-form"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const dict = await getDictionary(isLocale(locale) ? (locale as Locale) : defaultLocale)
  return {
    title: dict.meta.contactTitle,
    description: dict.meta.contactDescription,
  }
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
