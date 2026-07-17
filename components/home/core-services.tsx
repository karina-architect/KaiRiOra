import Link from "next/link"
import { Users, DatabaseZap, Workflow, ArrowRight, Check } from "lucide-react"
import { localizedPath } from "@/lib/i18n/navigation"
import type { Locale } from "@/lib/i18n/config"
import { getCoreServices } from "@/lib/site-content"

const cardIcons = [Users, DatabaseZap, Workflow]

export function CoreServices({ locale }: { locale: Locale }) {
  const c = getCoreServices(locale)

  return (
    <section id="core-services" className="scroll-mt-28 bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-heading text-2xl font-bold text-navy sm:text-3xl">
            {c.heading}
          </h2>
          <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
            {c.subheading}
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {c.cards.map((card, i) => {
            const Icon = cardIcons[i] ?? Users
            return (
              <article
                key={card.title}
                className="group flex flex-col rounded-2xl border border-border bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-softblue text-blue transition-colors group-hover:bg-blue group-hover:text-white">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="mt-5 font-heading text-lg font-bold text-navy">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.desc}</p>

                <ul className="mt-4 flex flex-1 flex-col gap-2">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-foreground/80">
                      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-softgreen text-green-600">
                        <Check className="h-3 w-3" aria-hidden />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  href={localizedPath(locale, card.href)}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-blue transition-opacity hover:opacity-80"
                >
                  {card.button}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                </Link>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
