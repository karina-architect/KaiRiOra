import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { localizedPath } from "@/lib/i18n/navigation"
import type { Locale } from "@/lib/i18n/config"
import type { Dictionary } from "@/lib/i18n/dictionaries/en"

export function CtaBand({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const cta = dict.ctaBand
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-gradient-to-r from-navy to-navy-700 px-6 py-8 sm:flex-row sm:items-center sm:px-10">
          <div>
            <h2 className="text-balance font-heading text-xl font-bold text-white sm:text-2xl">
              {cta.title}
            </h2>
            <p className="mt-1.5 text-pretty text-sm text-white/70">{cta.subtitle}</p>
          </div>
          <Link
            href={localizedPath(locale, "/contact")}
            className="inline-flex shrink-0 items-center gap-2 rounded-md bg-gold px-6 py-3 text-sm font-semibold text-navy shadow-sm transition-colors hover:bg-gold-600"
          >
            {cta.button}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  )
}
