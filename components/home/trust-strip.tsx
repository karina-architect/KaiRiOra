import { Cpu, FlaskConical, Landmark, Briefcase, Lightbulb, Rocket } from "lucide-react"
import type { Dictionary } from "@/lib/i18n/dictionaries/en"

const icons = [Cpu, FlaskConical, Landmark, Briefcase, Lightbulb, Rocket]

export function TrustStrip({ dict }: { dict: Dictionary }) {
  const t = dict.trust
  return (
    <section aria-label={t.heading} className="border-y border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <p className="text-center text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
          {t.heading}
        </p>
        <ul className="mt-6 grid grid-cols-2 items-center justify-items-center gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {t.labels.map((label, i) => {
            const Icon = icons[i % icons.length]
            return (
              <li
                key={label}
                className="flex items-center gap-2 text-sm font-semibold text-charcoal/60"
              >
                <Icon className="h-5 w-5 text-navy/50" aria-hidden />
                <span className="hidden sm:inline">{label}</span>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
