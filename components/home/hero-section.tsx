import Link from "next/link"
import { Check, ArrowRight, ShieldQuestion } from "lucide-react"
import { localizedPath } from "@/lib/i18n/navigation"
import type { Locale } from "@/lib/i18n/config"
import type { Dictionary } from "@/lib/i18n/dictionaries/en"
import { getHero } from "@/lib/site-content"

/**
 * Headline colour ramp: deep navy -> brand blue -> teal.
 * Mirrors the brand tokens in globals.css (navy, navy-700, blue, blue-400, teal).
 */
const RAMP = ["#0a1d3a", "#143a7a", "#1558d6", "#3d8ae8", "#2fb0ad"] as const

function mix(from: string, to: string, amount: number) {
  const channels = [1, 3, 5].map((i) => {
    const a = Number.parseInt(from.slice(i, i + 2), 16)
    const b = Number.parseInt(to.slice(i, i + 2), 16)
    return Math.round(a + (b - a) * amount)
  })
  return `rgb(${channels.join(" ")})`
}

/**
 * Interpolates a colour for each word so the gradient spans the whole
 * headline regardless of how many words the active locale produces.
 */
function wordColor(index: number, total: number) {
  if (total <= 1) return RAMP[0]
  const position = (index / (total - 1)) * (RAMP.length - 1)
  const step = Math.min(Math.floor(position), RAMP.length - 2)
  return mix(RAMP[step], RAMP[step + 1], position - step)
}

export function HeroSection({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const h = dict.hero
  const hero = getHero(locale)

  // Split the two headline sentences into words while keeping one continuous
  // colour sequence across both lines.
  const rawLines = [hero.line1, hero.line2].map((line) => line.split(/\s+/).filter(Boolean))
  const totalWords = rawLines.reduce((sum, words) => sum + words.length, 0)
  let cursor = 0
  const lines = rawLines.map((words) => words.map((word) => ({ word, index: cursor++ })))

  return (
    <section className="relative overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-28">
        <div className="max-w-3xl">
          <h1 className="text-balance font-heading text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            {lines.map((words, lineIndex) => (
              <span key={lineIndex} className="block">
                {words.map(({ word, index }) => (
                  <span key={`${index}-${word}`} style={{ color: wordColor(index, totalWords) }}>
                    {word}{" "}
                  </span>
                ))}
              </span>
            ))}
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

      </div>
    </section>
  )
}
