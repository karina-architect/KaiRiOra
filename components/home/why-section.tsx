import Image from "next/image"
import Link from "next/link"
import { Check, ArrowRight, ShieldCheck, Scale, Lock, Handshake } from "lucide-react"
import { localizedPath } from "@/lib/i18n/navigation"
import type { Locale } from "@/lib/i18n/config"
import type { Dictionary } from "@/lib/i18n/dictionaries/en"

const commitmentIcons = [ShieldCheck, Scale, Lock, Handshake]

export function WhySection({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const w = dict.whyDark
  const cards = [
    { data: w.spain, img: "/spain.png", slug: "spain" },
    { data: w.portugal, img: "/portugal.png", slug: "portugal" },
  ]

  return (
    <section id="about" className="scroll-mt-28 bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <h2 className="text-balance font-heading text-2xl font-bold sm:text-3xl">{w.heading}</h2>
        <p className="mt-2 max-w-2xl text-pretty text-sm text-white/70">{w.subheading}</p>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {/* Country cards */}
          {cards.map(({ data, img, slug }) => (
            <div
              key={slug}
              className="overflow-hidden rounded-xl bg-navy-700 shadow-lg ring-1 ring-white/10"
            >
              <div className="relative h-40 w-full">
                <Image
                  src={img || "/placeholder.svg"}
                  alt={`${data.name} cityscape`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-700 to-transparent" />
                <h3 className="absolute bottom-3 left-4 font-heading text-xl font-bold">
                  {data.name}
                </h3>
              </div>
              <div className="p-5">
                <ul className="flex flex-col gap-2">
                  {data.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-white/80">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
                      {p}
                    </li>
                  ))}
                </ul>
                <Link
                  href={localizedPath(locale, `/countries/${slug}`)}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gold transition-opacity hover:opacity-80"
                >
                  {data.explore}
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </div>
          ))}

          {/* Commitment card */}
          <div className="rounded-xl bg-navy-700 p-6 shadow-lg ring-1 ring-white/10">
            <h3 className="font-heading text-lg font-bold text-gold">{w.commitment.title}</h3>
            <ul className="mt-4 flex flex-col gap-4">
              {w.commitment.points.map((p, i) => {
                const Icon = commitmentIcons[i] ?? ShieldCheck
                return (
                  <li key={p} className="flex items-start gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10 text-gold">
                      <Icon className="h-4 w-4" aria-hidden />
                    </span>
                    <span className="text-sm leading-relaxed text-white/80">{p}</span>
                  </li>
                )
              })}
            </ul>
            <Link
              href={localizedPath(locale, "/#about")}
              className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-white underline-offset-4 hover:underline"
            >
              {w.commitment.learn}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
