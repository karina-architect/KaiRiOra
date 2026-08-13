import type { Metadata } from "next"
import { locales, defaultLocale, SITE_URL, SITE_NAME, type Locale } from "@/lib/i18n/config"

/**
 * Central metadata builder.
 *
 * Every page MUST call this (or a wrapper around it) so it emits its own
 * self-referencing canonical. Next.js merges metadata from the parent layout,
 * so a page that omits `alternates.canonical` silently inherits the layout's
 * canonical and tells Google it is a duplicate of the homepage.
 */
export interface PageMetaInput {
  locale: Locale
  /** Route path after the locale segment, e.g. "/contact". Empty string = home. */
  path: string
  title: string
  description: string
  keywords?: string[]
  /** Set for pages that should stay out of the index (thin or legal pages). */
  noIndex?: boolean
}

export function absoluteUrl(locale: Locale, path = ""): string {
  return `${SITE_URL}/${locale}${path}`
}

/**
 * Builds the hreflang cluster for a path. Includes `x-default` pointing at the
 * English URL so Google knows which version to serve for unmatched languages.
 */
export function languageAlternates(path = ""): Record<string, string> {
  const languages: Record<string, string> = {}
  for (const l of locales) languages[l] = absoluteUrl(l, path)
  languages["x-default"] = absoluteUrl(defaultLocale, path)
  return languages
}

export function pageMetadata({
  locale,
  path,
  title,
  description,
  keywords,
  noIndex,
}: PageMetaInput): Metadata {
  const url = absoluteUrl(locale, path)

  return {
    title,
    description,
    ...(keywords?.length ? { keywords } : {}),
    alternates: {
      canonical: url,
      languages: languageAlternates(path),
    },
    ...(noIndex ? { robots: { index: false, follow: true } } : {}),
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      title,
      description,
      url,
      locale,
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: SITE_NAME }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.png"],
    },
  }
}
