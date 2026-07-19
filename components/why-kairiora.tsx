import {
  Globe,
  Layers,
  Sparkles,
  Workflow,
  Target,
  Handshake,
  TrendingUp,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react"
import type { Locale } from "@/lib/i18n/config"
import { getWhyPoints, type WhyPoint } from "@/lib/service-pages"

const icons: Record<WhyPoint["icon"], LucideIcon> = {
  europe: Globe,
  endToEnd: Layers,
  dataAi: Sparkles,
  agile: Workflow,
  business: Target,
  trusted: Handshake,
  scalable: TrendingUp,
  compliance: ShieldCheck,
}

export function WhyKaiRiOra({
  locale,
  variant = "light",
}: {
  locale: Locale
  variant?: "light" | "dark"
}) {
  const { heading, subheading, points } = getWhyPoints(locale)
  const dark = variant === "dark"

  return (
    <section className={dark ? "bg-navy text-white" : "bg-background"}>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            className={`text-balance font-heading text-2xl font-bold sm:text-3xl ${
              dark ? "text-white" : "text-navy"
            }`}
          >
            {heading}
          </h2>
          <p
            className={`mt-3 text-pretty text-sm leading-relaxed sm:text-base ${
              dark ? "text-white/70" : "text-muted-foreground"
            }`}
          >
            {subheading}
          </p>
        </div>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((point) => {
            const Icon = icons[point.icon]
            return (
              <li
                key={point.title}
                className={`flex flex-col rounded-xl border p-5 ${
                  dark
                    ? "border-white/10 bg-navy-700"
                    : "border-border bg-white shadow-sm"
                }`}
              >
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-lg ${
                    dark ? "bg-white/10 text-gold" : "bg-softblue text-blue"
                  }`}
                >
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3
                  className={`mt-4 font-heading text-base font-bold ${
                    dark ? "text-white" : "text-navy"
                  }`}
                >
                  {point.title}
                </h3>
                <p
                  className={`mt-1.5 text-sm leading-relaxed ${
                    dark ? "text-white/70" : "text-muted-foreground"
                  }`}
                >
                  {point.desc}
                </p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
