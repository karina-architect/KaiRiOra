import Link from "next/link"
import {
  Receipt,
  UserCog,
  UserPlus,
  Globe2,
  Plane,
  BrainCircuit,
  GraduationCap,
  ArrowRight,
} from "lucide-react"
import { localizedPath } from "@/lib/i18n/navigation"
import { aiFirst } from "@/lib/services-order"
import type { Locale } from "@/lib/i18n/config"
import type { Dictionary } from "@/lib/i18n/dictionaries/en"

/** Aligned with the canonical dictionary order, not the display order. */
const serviceIcons = [Receipt, UserCog, UserPlus, Globe2, Plane, BrainCircuit, GraduationCap]

export function ServicesSection({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const s = dict.services
  /* Pair each icon with its own service before reordering, so an icon can never
     end up on the wrong card. */
  const cards = aiFirst(s.items.map((item, i) => ({ item, Icon: serviceIcons[i] ?? Receipt })))

  return (
    <section id="services" className="scroll-mt-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-balance font-heading text-2xl font-bold text-navy sm:text-3xl">
            {s.heading}
          </h2>
          <p className="mt-2 text-pretty text-sm text-muted-foreground">{s.subheading}</p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(({ item, Icon }) => {
            return (
              <div
                key={item.title}
                className="group flex flex-col rounded-xl border border-border bg-white p-5 transition-shadow hover:shadow-md"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-softblue text-blue transition-colors group-hover:bg-blue group-hover:text-white">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-4 font-heading text-base font-bold text-navy">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            href={localizedPath(locale, "/contact")}
            className="inline-flex items-center gap-2 rounded-md border border-blue/30 bg-white px-6 py-2.5 text-sm font-semibold text-blue transition-colors hover:bg-softblue"
          >
            {s.exploreAll}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  )
}
