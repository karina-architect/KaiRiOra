import { NextRequest, NextResponse } from "next/server"
import { locales, defaultLocale } from "@/lib/i18n/config"

function getLocale(request: NextRequest): string {
  const header = request.headers.get("accept-language")
  if (header) {
    const preferred = header
      .split(",")
      .map((part) => part.split(";")[0].trim().split("-")[0].toLowerCase())
    for (const code of preferred) {
      if ((locales as readonly string[]).includes(code)) return code
    }
  }
  return defaultLocale
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  )
  if (hasLocale) return NextResponse.next()

  const locale = getLocale(request)
  const url = request.nextUrl.clone()
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`
  return NextResponse.redirect(url)
}

export const config = {
  matcher: [
    // Skip Next internals, api routes and files with an extension
    "/((?!api|_next/static|_next/image|favicon.ico|icon.svg|og-image.png|robots.txt|sitemap.xml|site.webmanifest).*)",
  ],
}
