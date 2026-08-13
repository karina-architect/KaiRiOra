export const locales = ["en", "es", "pt", "fr", "de", "ru", "hu"] as const

export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = "en"

export const localeNames: Record<Locale, string> = {
  en: "English",
  es: "Español",
  pt: "Português",
  fr: "Français",
  de: "Deutsch",
  ru: "Русский",
  hu: "Magyar",
}

export const localeShort: Record<Locale, string> = {
  en: "EN",
  es: "ES",
  pt: "PT",
  fr: "FR",
  de: "DE",
  ru: "RU",
  hu: "HU",
}

export const localeHreflang: Record<Locale, string> = {
  en: "en",
  es: "es",
  pt: "pt",
  fr: "fr",
  de: "de",
  ru: "ru",
  hu: "hu",
}

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value)
}

/**
 * Apex host, no `www`. The `www.` subdomain 307-redirects here, so canonical
 * URLs, hreflang and sitemap entries must use the apex form — pointing them at
 * a redirecting host sends search engines a conflicting signal.
 */
export const SITE_URL = "https://kairiora.com"
export const SITE_NAME = "KaiRiOra"
