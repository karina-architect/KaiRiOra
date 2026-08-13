import Link from "next/link"
import { DatabaseZap, Users, Workflow, Target, ArrowRight } from "lucide-react"
import { localizedPath } from "@/lib/i18n/navigation"
import type { Locale } from "@/lib/i18n/config"
import { getHeroInfographic, type HeroFlowStep } from "@/lib/site-content"

/**
 * Icon + illustration per pillar, keyed so each step keeps its own pairing
 * regardless of render order. The illustrations are cropped from the brand
 * "how we create value" artwork; the copy stays as real markup so all seven
 * locales translate (baking text into the image would freeze it to English).
 */
const stepStyles: Record<HeroFlowStep["key"], { Icon: typeof Users; art: string }> = {
  dataAi: { Icon: DatabaseZap, art: "/images/value/data-ai.webp" },
  workforce: { Icon: Users, art: "/images/value/workforce.webp" },
  agile: { Icon: Workflow, art: "/images/value/agile.webp" },
}

export function HeroInfographic({ locale }: { locale: Locale }) {
  const g = getHeroInfographic(locale)

  return (
    // Capped and centred while stacked so it does not stretch to full width on
    // tablet; fills its own grid column from md up.
    <figure className="relative mx-auto w-full max-w-md md:max-w-none">
      <div className="overflow-hidden rounded-3xl bg-cream p-6 shadow-xl ring-1 ring-gold/30 sm:p-7">
        <figcaption className="text-center font-heading text-sm font-bold uppercase tracking-[0.14em] text-navy">
          {g.eyebrow}
        </figcaption>
        {/* Slim gold rule echoes the divider in the brand artwork */}
        <div className="mx-auto mt-3 flex items-center justify-center gap-2" aria-hidden>
          <span className="h-px w-14 bg-gradient-to-r from-transparent to-gold/60" />
          <span className="h-1 w-1 rotate-45 bg-gold" />
          <span className="h-px w-14 bg-gradient-to-l from-transparent to-gold/60" />
        </div>

        {/* Entry point of the journey */}
        <div className="mt-5 flex items-center gap-3 rounded-xl border border-gold/40 bg-white/55 px-4 py-3">
          <Target className="h-4 w-4 shrink-0 text-teal" aria-hidden />
          <div className="min-w-0">
            <p className="text-[11px] font-medium uppercase tracking-wide text-navy/55">
              {g.startLabel}
            </p>
            <p className="text-pretty text-sm font-semibold leading-snug text-navy">
              {g.startValue}
            </p>
          </div>
        </div>

        {/* The three pillars share one continuous gold spine, so the line always
            terminates on an icon centre rather than in mid-air. */}
        <div className="relative mt-4">
          <span
            className="absolute left-[31px] top-7 bottom-9 w-px bg-gold/45"
            aria-hidden
          />
          <ol className="flex flex-col gap-2">
            {g.steps.map((step) => {
              const { Icon, art } = stepStyles[step.key]
              return (
                <li key={step.key}>
                  <Link
                    href={localizedPath(locale, step.href)}
                    className="group flex items-center gap-3 rounded-xl px-3 py-2 transition-colors hover:bg-white/60"
                  >
                    <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-navy ring-1 ring-gold/60 ring-offset-2 ring-offset-cream">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="flex items-center gap-1.5 font-heading text-sm font-bold text-navy">
                        {step.title}
                        <ArrowRight
                          className="h-3.5 w-3.5 shrink-0 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-60"
                          aria-hidden
                        />
                      </span>
                      <span className="mt-0.5 block text-xs leading-relaxed text-navy/65">
                        {step.outcome}
                      </span>
                    </span>
                    {/* Decorative: the adjacent title and outcome already name
                        the pillar, so alt is empty to avoid repetition. Hidden
                        on the narrowest columns where it would squeeze the copy
                        into two- and three-word lines. */}
                    <img
                      src={art || "/placeholder.svg"}
                      alt=""
                      width={320}
                      height={320}
                      loading="lazy"
                      className="hidden h-16 w-16 shrink-0 rounded-lg object-cover mix-blend-multiply sm:block lg:h-20 lg:w-20"
                    />
                  </Link>
                </li>
              )
            })}
          </ol>

          {/* Where the three pillars converge — the one signature element */}
          <div className="mt-3 flex items-center gap-4 overflow-hidden rounded-xl bg-gradient-to-r from-cream-deep to-cream px-4 py-4 ring-1 ring-gold/45">
            <div className="min-w-0 flex-1">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-teal">
                {g.outcomeLabel}
              </p>
              <p className="text-pretty font-heading text-base font-bold text-navy">
                {g.outcomeValue}
              </p>
            </div>
            <img
              src="/images/value/growth.webp"
              alt=""
              width={320}
              height={320}
              loading="lazy"
              className="h-16 w-16 shrink-0 object-cover mix-blend-multiply sm:h-20 sm:w-20"
            />
          </div>
        </div>

        <p className="mt-5 border-t border-gold/30 pt-4 text-center text-[11px] font-medium text-navy/55">
          {g.footnote}
        </p>
      </div>
    </figure>
  )
}
