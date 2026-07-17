import { cn } from "@/lib/utils"

export function PageHeader({
  kicker,
  title,
  subtitle,
  className,
}: {
  kicker?: string
  title: string
  subtitle?: string
  className?: string
}) {
  return (
    <section className={cn("bg-navy text-white", className)}>
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        {kicker ? (
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-gold">
            {kicker}
          </p>
        ) : null}
        <h1 className="font-heading text-3xl font-bold leading-tight text-balance md:text-4xl lg:text-5xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-white/75">
            {subtitle}
          </p>
        ) : null}
      </div>
    </section>
  )
}
