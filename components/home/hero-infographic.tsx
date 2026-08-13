import Link from "next/link"
import { DatabaseZap, Users, Workflow, Target, TrendingUp, ArrowRight } from "lucide-react"
import { localizedPath } from "@/lib/i18n/navigation"
import type { Locale } from "@/lib/i18n/config"
import { getHeroInfographic, type HeroFlowStep } from "@/lib/site-content"

/**
 * Icon + accent per pillar, keyed so each step keeps its own styling
 * regardless of render order. Accents follow the same navy -> blue -> teal
 * ramp as the hero headline so the two halves read as one composition.
 */
const stepStyles: Record<HeroFlowStep["key"], { Icon: typeof Users; icon: string }> = {
  dataAi: { Icon: DatabaseZap, icon: "bg-blue text-white" },
  workforce: { Icon: Users, icon: "bg-blue-400 text-white" },
  agile: { Icon: Workflow, icon: "bg-teal text-white" },
}

export function HeroInfographic({ locale }: { locale: Locale }) {
  const g = getHeroInfographic(locale)

  return (
    // Capped and centred while stacked so it does not stretch to full width on
    // tablet; fills its own grid column from md up.
    <figure className="relative mx-auto w-full max-w-md md:max-w-none">
      {/* Abstract data-architecture visual signals the AI capability without
          dating the way stock photography of people does. */}
      <div className="relative overflow-hidden rounded-t-3xl bg-navy">
        <img
          src="/images/hero-tech.webp"
          alt={g.imageAlt}
          width={1024}
          height={1024}
          className="aspect-[16/10] w-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
        />
        {/* Fades the render into the navy panel so the two read as one card. */}
        <div
          className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-navy to-transparent"
          aria-hidden
        />
      </div>

      <div className="rounded-b-3xl bg-navy p-6 shadow-xl ring-1 ring-navy-700 sm:p-7">
      <figcaption className="text-xs font-semibold uppercase tracking-wider text-gold">
        {g.eyebrow}
      </figcaption>

      {/* Entry point of the journey */}
      <div className="mt-5 flex items-center gap-3 rounded-xl border border-dashed border-white/20 px-4 py-3">
        <Target className="h-4 w-4 shrink-0 text-white/50" aria-hidden />
        <div className="min-w-0">
          <p className="text-[11px] font-medium uppercase tracking-wide text-white/45">
            {g.startLabel}
          </p>
          <p className="text-pretty text-sm font-semibold leading-snug text-white/90">
            {g.startValue}
          </p>
        </div>
      </div>

      {/* The three pillars and the outcome share one continuous spine, so the
          line always terminates on an icon centre rather than in mid-air. */}
      <div className="relative mt-4">
        <span
          className="absolute left-9 top-7 bottom-9 w-px bg-gradient-to-b from-blue via-blue-400 to-teal"
          aria-hidden
        />
        <ol className="flex flex-col gap-3">
        {g.steps.map((step) => {
          const { Icon, icon } = stepStyles[step.key]
          return (
            <li key={step.key}>
              <Link
                href={localizedPath(locale, step.href)}
                className="group flex items-start gap-4 rounded-xl px-4 py-2 transition-colors hover:bg-white/5"
              >
                <span
                  className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ring-4 ring-navy ${icon}`}
                >
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex items-center gap-1.5 font-heading text-sm font-bold text-white">
                    {step.title}
                    <ArrowRight
                      className="h-3.5 w-3.5 shrink-0 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-70"
                      aria-hidden
                    />
                  </span>
                  <span className="mt-1 block text-xs leading-relaxed text-white/60">
                    {step.outcome}
                  </span>
                </span>
              </Link>
            </li>
          )
        })}
        </ol>

        {/* Where the three pillars converge — the one signature element */}
        <div className="mt-3 flex items-center gap-4 rounded-xl bg-teal/15 px-4 py-4 ring-1 ring-teal/30">
          <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal text-white">
            <TrendingUp className="h-5 w-5" aria-hidden />
          </span>
          <div className="min-w-0">
            <p className="text-[11px] font-medium uppercase tracking-wide text-teal">
              {g.outcomeLabel}
            </p>
            <p className="text-pretty font-heading text-base font-bold text-white">
              {g.outcomeValue}
            </p>
          </div>
        </div>
      </div>

      <p className="mt-5 border-t border-white/10 pt-4 text-center text-[11px] font-medium text-white/45">
        {g.footnote}
      </p>
      </div>
    </figure>
  )
}
