import type { Metadata } from "next"
import { Poppins, Montserrat } from "next/font/google"
import { notFound } from "next/navigation"
import "../globals.css"
import { locales, isLocale, type Locale, SITE_URL, SITE_NAME } from "@/lib/i18n/config"
import { languageAlternates } from "@/lib/seo"
import { getDictionary } from "@/lib/i18n"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { StructuredData } from "@/components/structured-data"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
})

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
})

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const loc: Locale = isLocale(locale) ? locale : "en"
  const dict = await getDictionary(loc)
  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: dict.meta.homeTitle,
      template: `%s | ${SITE_NAME}`,
    },
    description: dict.meta.homeDescription,
    applicationName: SITE_NAME,
    keywords: dict.meta.homeKeywords,
    alternates: {
      canonical: `${SITE_URL}/${loc}`,
      languages: languageAlternates(),
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      title: dict.meta.homeTitle,
      description: dict.meta.homeDescription,
      url: `${SITE_URL}/${loc}`,
      locale: loc,
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: SITE_NAME }],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.homeTitle,
      description: dict.meta.homeDescription,
      images: ["/og-image.png"],
    },
    icons: {
      icon: [
        { url: "/icon.svg", type: "image/svg+xml" },
        { url: "/icon.png", type: "image/png", sizes: "512x512" },
      ],
      shortcut: "/icon.png",
      apple: "/icon.png",
    },
    manifest: "/manifest.webmanifest",
  }
}

export const viewport = {
  themeColor: "#0a1d3a",
  width: "device-width",
  initialScale: 1,
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const dict = await getDictionary(locale)

  return (
    <html lang={locale} className={`${poppins.variable} ${montserrat.variable} bg-background`}>
      <body className="font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-navy focus:px-4 focus:py-2 focus:text-white"
        >
          {dict.common.skipToContent}
        </a>
        <StructuredData locale={locale} />
        <SiteHeader locale={locale} dict={dict} />
        <main id="main">{children}</main>
        <SiteFooter locale={locale} dict={dict} />
      </body>
    </html>
  )
}
