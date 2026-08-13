import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getDictionary } from "@/lib/i18n"
import { isLocale, defaultLocale, locales, type Locale } from "@/lib/i18n/config"
import { pageMetadata } from "@/lib/seo"
import { PageHeader } from "@/components/page-header"

const SLUGS = ["privacy", "terms", "notice", "cookies"] as const
type Slug = (typeof SLUGS)[number]

function dictKey(slug: Slug): "privacy" | "terms" | "notice" | "cookie" {
  return slug === "cookies" ? "cookie" : slug
}

export function generateStaticParams() {
  return locales.flatMap((locale) => SLUGS.map((slug) => ({ locale, slug })))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
  const { locale, slug } = await params
  if (!SLUGS.includes(slug as Slug)) return {}
  const loc = isLocale(locale) ? (locale as Locale) : defaultLocale
  const dict = await getDictionary(loc)
  const content = dict.legal[dictKey(slug as Slug)]
  return pageMetadata({
    locale: loc,
    path: `/legal/${slug}`,
    title: content.title,
    description: content.body.slice(0, 155),
    // Boilerplate pages carry no search value and the copy is still
    // placeholder, so keep them out of the index while staying crawlable.
    noIndex: true,
  })
}

export default async function LegalPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  if (!SLUGS.includes(slug as Slug)) notFound()
  const loc = isLocale(locale) ? (locale as Locale) : defaultLocale
  const dict = await getDictionary(loc)
  const content = dict.legal[dictKey(slug as Slug)]

  const today = new Date().toLocaleDateString(loc === "en" ? "en-GB" : loc, {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <>
      <PageHeader title={content.title} />
      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-4 py-12 md:py-16">
          <p className="mb-6 text-sm text-muted-foreground">
            {dict.legal.lastUpdated}: {today}
          </p>
          <div className="space-y-4 text-pretty leading-relaxed text-charcoal">
            {content.body.split("\n\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
