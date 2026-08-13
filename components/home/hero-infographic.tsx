import Link from "next/link"
import { localizedPath } from "@/lib/i18n/navigation"
import type { Locale } from "@/lib/i18n/config"
import { getHeroInfographic } from "@/lib/site-content"

/**
 * The brand "how we create value" artwork, used exactly as supplied.
 *
 * The artwork is a tall portrait (940x1670), so it is height-capped rather than
 * width-driven: left to fill the grid column it would tower over the hero copy
 * beside it. Capping the height and letting width follow keeps it proportional
 * and vertically balanced against the headline block.
 *
 * The step copy is baked into the pixels, so the three pillar links that used to
 * live here are kept as screen-reader-only anchors: the visual is unchanged, but
 * keyboard users, screen readers and crawlers keep the routes into the service
 * pages.
 */
export function HeroInfographic({ locale }: { locale: Locale }) {
  const g = getHeroInfographic(locale)

  return (
    <figure className="mx-auto w-full max-w-sm md:max-w-none">
      <img
        src="/images/how-we-create-value.webp"
        alt={g.imageAlt}
        width={940}
        height={1670}
        loading="eager"
        fetchPriority="high"
        className="mx-auto h-auto w-full rounded-2xl shadow-xl ring-1 ring-blue/10 md:max-h-[34rem] md:w-auto lg:max-h-[40rem]"
      />

      <figcaption className="sr-only">
        {g.eyebrow}
        <ul>
          {g.steps.map((step) => (
            <li key={step.key}>
              <Link href={localizedPath(locale, step.href)}>
                {step.title} — {step.outcome}
              </Link>
            </li>
          ))}
        </ul>
        {g.outcomeLabel}: {g.outcomeValue}. {g.footnote}
      </figcaption>
    </figure>
  )
}
