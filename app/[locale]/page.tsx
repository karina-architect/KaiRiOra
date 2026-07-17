import { isLocale, type Locale } from "@/lib/i18n/config"
import { getDictionary } from "@/lib/i18n"
import { HeroSection } from "@/components/home/hero-section"
import { CoreServices } from "@/components/home/core-services"
import { StatsSection } from "@/components/home/stats-section"
import { TrustStrip } from "@/components/home/trust-strip"
import { ToolsSection } from "@/components/home/tools-section"
import { WhySection } from "@/components/home/why-section"
import { ServicesSection } from "@/components/home/services-section"
import { CtaBand } from "@/components/home/cta-band"

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const loc: Locale = isLocale(locale) ? locale : "en"
  const dict = await getDictionary(loc)

  return (
    <>
      <HeroSection locale={loc} dict={dict} />
      <CoreServices locale={loc} />
      <StatsSection locale={loc} />
      <TrustStrip dict={dict} />
      <ToolsSection dict={dict} />
      <WhySection locale={loc} dict={dict} />
      <ServicesSection locale={loc} dict={dict} />
      <CtaBand locale={loc} dict={dict} />
    </>
  )
}
