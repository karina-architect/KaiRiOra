import type { Metadata } from "next"
import { isLocale, defaultLocale, type Locale } from "@/lib/i18n/config"
import { getServicePage, getServiceMetadata } from "@/lib/service-pages"
import { ServicePage } from "@/components/service-page"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const loc = isLocale(locale) ? (locale as Locale) : defaultLocale
  return getServiceMetadata("agile-transformation", loc)
}

export default async function AgileTransformationPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const loc = isLocale(locale) ? (locale as Locale) : defaultLocale
  return <ServicePage locale={loc} content={getServicePage("agile-transformation", loc)} />
}
