import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { isLocale, defaultLocale, type Locale } from "@/lib/i18n/config"
import { localizedPath } from "@/lib/i18n/navigation"
import { getDataAiPage } from "@/lib/site-content"
import { DataAiServices } from "@/components/data-ai-services"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const loc = isLocale(locale) ? (locale as Locale) : defaultLocale
  const page = getDataAiPage(loc)
  return {
    title: `${page.title} — KaiRiOra`,
    description: page.hero,
  }
}

export default async function DataAiAdoptionPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const loc = isLocale(locale) ? (locale as Locale) : defaultLocale
  const page = getDataAiPage(loc)

  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-gold">
            {page.title}
          </p>
          <h1 className="max-w-4xl text-balance font-heading text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
            {page.hero}
          </h1>
          <p className="mt-5 max-w-2xl text-pretty leading-relaxed text-white/75">
            {page.supporting}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={localizedPath(loc, "/contact")}
              className="inline-flex items-center gap-2 rounded-md bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-600"
            >
              {page.ctaPrimary}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link
              href={localizedPath(loc, "/contact")}
              className="inline-flex items-center rounded-md border border-white/30 bg-transparent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              {page.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-muted">
        <div className="mx-auto max-w-4xl px-4 py-14 md:py-20">
          <h2 className="text-balance font-heading text-2xl font-bold text-navy md:text-3xl">
            {page.sectionHeading}
          </h2>
          <div className="mt-8">
            <DataAiServices services={page.services} learnMore={page.learnMore} />
          </div>
        </div>
      </section>
    </>
  )
}
