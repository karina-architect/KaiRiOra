import type { Locale } from "@/lib/i18n/config"
import { getStats } from "@/lib/site-content"

export function StatsSection({ locale }: { locale: Locale }) {
  const s = getStats(locale)

  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <p className="text-center text-xs font-semibold uppercase tracking-wider text-brand-gold">
          {s.eyebrow}
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {s.items.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center justify-center rounded-2xl border border-border bg-white px-5 py-8 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <p className="text-balance font-heading text-xl font-extrabold leading-tight text-navy sm:text-2xl">
                {item.value}
              </p>
              <p className="mt-2 text-sm font-medium text-muted-foreground">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
