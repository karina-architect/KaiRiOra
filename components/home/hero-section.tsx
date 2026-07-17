import Image from "next/image"
import Link from "next/link"
import { Check, ArrowRight, Users, Building2, ShieldCheck, ShieldQuestion } from "lucide-react"
import { localizedPath } from "@/lib/i18n/navigation"
import type { Locale } from "@/lib/i18n/config"
import type { Dictionary } from "@/lib/i18n/dictionaries/en"
import { getHero } from "@/lib/site-content"

const whyIcons = [Users, Building2, ShieldCheck]

export function HeroSection({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const h = dict.hero
  const hero = getHero(locale)

  return (
    <section className="relative overflow-hidden bg-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:py-28">
        {/* Left: copy */}
        <div className="lg:col-span-6">
          <h1 className="text-balance font-heading text-4xl font-extrabold leading-[1.1] tracking-tight text-navy sm:text-5xl">
            {hero.line1}
            <br />
            <span className="text-blue">{hero.line2}</span>
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
            {hero.paragraph}
          </p>

          <ul className="mt-6 grid max-w-xl gap-x-6 gap-y-2.5 sm:grid-cols-2">
            {hero.pillars.map((b) => (
              <li key={b} className="flex items-start gap-2 text-sm font-medium text-foreground/80">
                <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-softgreen text-green-600">
                  <Check className="h-3 w-3" aria-hidden />
                </span>
                {b}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={localizedPath(locale, "/#core-services")}
              className="inline-flex items-center gap-2 rounded-md bg-blue px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-600"
            >
              {hero.ctaPrimary}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link
              href={localizedPath(locale, "/contact")}
              className="inline-flex items-center rounded-md border border-blue/30 bg-white px-5 py-2.5 text-sm font-semibold text-blue transition-colors hover:bg-softblue"
            >
              {hero.ctaSecondary}
            </Link>
          </div>

          <p className="mt-6 flex items-start gap-2 text-xs text-muted-foreground">
            <ShieldQuestion className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
            {h.complianceNote}
          </p>
        </div>

        {/* Right: map + why card */}
        <div className="relative lg:col-span-6">
          <div className="relative mx-auto aspect-[4/3] w-full max-w-lg">
            <Image
              src="/europe-map.png"
              alt="Map of Europe with Spain and Portugal highlighted"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-contain"
            />
          </div>

          {/* Why card */}
          <div className="mx-auto mt-6 max-w-sm rounded-xl border border-border bg-white p-5 shadow-lg lg:absolute lg:right-0 lg:top-4 lg:mt-0">
            <h2 className="font-heading text-base font-bold text-navy">{h.whyCard.title}</h2>
            <ul className="mt-4 flex flex-col gap-4">
              {h.whyCard.points.map((point, i) => {
                const Icon = whyIcons[i] ?? Users
                return (
                  <li key={point} className="flex items-start gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-softblue text-blue">
                      <Icon className="h-4 w-4" aria-hidden />
                    </span>
                    <span className="text-xs leading-relaxed text-foreground/80">{point}</span>
                  </li>
                )
              })}
            </ul>
            <Link
              href={localizedPath(locale, "/countries/spain")}
              className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-blue transition-opacity hover:opacity-80"
            >
              {h.whyCard.learnMore}
              <ArrowRight className="h-3.5 w-3.5" aria-hidden />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
