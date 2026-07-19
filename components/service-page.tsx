import Link from "next/link"
import {
  Globe,
  Receipt,
  Calculator,
  Briefcase,
  UserSearch,
  UsersRound,
  ClipboardList,
  Plane,
  Target,
  ClipboardCheck,
  Database,
  ShieldCheck,
  Server,
  BarChart3,
  Bot,
  GraduationCap,
  Compass,
  SquareKanban,
  LayoutDashboard,
  GitBranch,
  Package,
  RefreshCw,
  ArrowRight,
  Check,
  ChevronDown,
  Home,
  type LucideIcon,
} from "lucide-react"
import { localizedPath } from "@/lib/i18n/navigation"
import type { Locale } from "@/lib/i18n/config"
import type { ServiceIcon, ServicePageContent } from "@/lib/service-pages"
import { WhyKaiRiOra } from "@/components/why-kairiora"
import { ServiceSchema } from "@/components/service-schema"

const serviceIcons: Record<ServiceIcon, LucideIcon> = {
  eor: Globe,
  payroll: Receipt,
  accounting: Calculator,
  contractor: Briefcase,
  recruitment: UserSearch,
  staffAug: UsersRound,
  hr: ClipboardList,
  permits: Plane,
  strategy: Target,
  readiness: ClipboardCheck,
  dataStrategy: Database,
  governance: ShieldCheck,
  engineering: Server,
  analytics: BarChart3,
  automation: Bot,
  training: GraduationCap,
  coaching: Compass,
  scrum: SquareKanban,
  pmo: LayoutDashboard,
  delivery: GitBranch,
  product: Package,
  change: RefreshCw,
  teamEnable: UsersRound,
}

export function ServicePage({
  locale,
  content,
}: {
  locale: Locale
  content: ServicePageContent
}) {
  return (
    <>
      <ServiceSchema locale={locale} page={content} />

      {/* Hero */}
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6 text-xs text-white/60">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li>
                <Link
                  href={localizedPath(locale, "/")}
                  className="inline-flex items-center gap-1 transition-colors hover:text-white"
                >
                  <Home className="h-3.5 w-3.5" aria-hidden />
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="font-medium text-white/90" aria-current="page">
                {content.eyebrow}
              </li>
            </ol>
          </nav>

          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-gold">
            {content.eyebrow}
          </p>
          <h1 className="max-w-4xl text-balance font-heading text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
            {content.heroTitle}
          </h1>
          <p className="mt-5 max-w-2xl text-pretty leading-relaxed text-white/75">
            {content.intro}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={localizedPath(locale, "/contact")}
              className="inline-flex items-center gap-2 rounded-md bg-blue px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-600"
            >
              {content.ctaLabel}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link
              href={localizedPath(locale, "/contact")}
              className="inline-flex items-center rounded-md border border-white/30 bg-transparent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              {content.contactButton}
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance font-heading text-2xl font-bold text-navy sm:text-3xl">
              {content.servicesHeading}
            </h2>
            <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
              {content.servicesIntro}
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {content.services.map((service) => {
              const Icon = serviceIcons[service.icon]
              return (
                <article
                  key={service.title}
                  className="flex flex-col rounded-2xl border border-border bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-softblue text-blue">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="mt-5 font-heading text-lg font-bold text-navy">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.desc}</p>
                  {service.bullets ? (
                    <ul className="mt-4 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                      {service.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-1.5 text-xs text-foreground/80">
                          <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-green-600" aria-hidden />
                          {b}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-background">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:py-20">
          <h2 className="text-balance font-heading text-2xl font-bold text-navy sm:text-3xl">
            {content.benefitsHeading}
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {content.benefits.map((benefit) => (
              <li
                key={benefit}
                className="flex items-start gap-3 rounded-xl border border-border bg-white p-4 shadow-sm"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-softgreen text-green-600">
                  <Check className="h-3.5 w-3.5" aria-hidden />
                </span>
                <span className="text-sm leading-relaxed text-foreground/80">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why KaiRiOra */}
      <WhyKaiRiOra locale={locale} variant="dark" />

      {/* FAQ */}
      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-20">
          <h2 className="text-balance font-heading text-2xl font-bold text-navy sm:text-3xl">
            {content.faqHeading}
          </h2>
          <div className="mt-8 flex flex-col gap-3">
            {content.faqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-xl border border-border bg-white px-5 py-4 shadow-sm"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-heading text-base font-semibold text-navy [&::-webkit-details-marker]:hidden">
                  {faq.q}
                  <ChevronDown
                    className="h-5 w-5 shrink-0 text-brand-blue transition-transform group-open:rotate-180"
                    aria-hidden
                  />
                </summary>
                <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 pb-8 sm:px-6">
          <div className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-gradient-to-r from-navy to-navy-700 px-6 py-8 sm:flex-row sm:items-center sm:px-10">
            <div>
              <h2 className="text-balance font-heading text-xl font-bold text-white sm:text-2xl">
                {content.ctaTitle}
              </h2>
              <p className="mt-1.5 text-pretty text-sm text-white/70">{content.ctaSubtitle}</p>
            </div>
            <Link
              href={localizedPath(locale, "/contact")}
              className="inline-flex shrink-0 items-center gap-2 rounded-md bg-gold px-6 py-3 text-sm font-semibold text-navy shadow-sm transition-colors hover:bg-gold-600"
            >
              {content.ctaLabel}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-muted/40">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
          <h2 className="text-balance font-heading text-2xl font-bold text-navy sm:text-3xl">
            {content.contactHeading}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
            {content.contactBody}
          </p>
          <Link
            href={localizedPath(locale, "/contact")}
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-blue px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-600"
          >
            {content.contactButton}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </section>
    </>
  )
}
