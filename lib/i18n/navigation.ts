import type { Locale } from "./config"

/** Builds a locale-prefixed path, e.g. localePath("es", "/countries") => "/es/countries". */
export function localePath(locale: Locale, path = "/"): string {
  const clean = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`
  return `/${locale}${clean}`
}

/** Swaps the leading locale segment of a pathname to a new locale, preserving the rest. */
export function switchLocalePath(
  pathname: string,
  nextLocale: Locale,
  locales: readonly string[],
): string {
  const segments = pathname.split("/")
  // segments[0] is empty, segments[1] is current locale
  if (segments.length > 1 && locales.includes(segments[1])) {
    segments[1] = nextLocale
    return segments.join("/") || `/${nextLocale}`
  }
  return `/${nextLocale}${pathname}`
}
