import Link from "next/link"
import { Logo } from "@/components/logo"
import { localizedPath } from "@/lib/i18n/navigation"
import { aiFirst } from "@/lib/services-order"
import { countries } from "@/lib/countries"
import type { Locale } from "@/lib/i18n/config"
import type { Dictionary } from "@/lib/i18n/dictionaries/en"

export function SiteFooter({
  locale,
  dict,
}: {
  locale: Locale
  dict: Dictionary
}) {
  const year = new Date().getFullYear()
  const cols = dict.footer.columns

  return (
    <footer className="bg-brand-navy text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-6">
          <div className="lg:col-span-1">
            <Logo className="h-8 w-auto" variant="dark" />
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70">
              {dict.footer.description}
            </p>
          </div>

          <FooterColumn
            title={cols.services.title}
            links={aiFirst(cols.services.links).map((label) => ({
              label,
              href: localizedPath(locale, "/#services"),
            }))}
          />
          <FooterColumn
            title={cols.solutions.title}
            links={cols.solutions.links.map((label) => ({
              label,
              href: localizedPath(locale, "/#solutions"),
            }))}
          />
          <div>
            <h3 className="text-sm font-semibold">{cols.countries.title}</h3>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm text-primary-foreground/70">
              {countries.slice(0, 5).map((c) => (
                <li key={c.slug}>
                  <Link
                    href={localizedPath(locale, `/countries/${c.slug}`)}
                    className="transition-colors hover:text-brand-gold"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={localizedPath(locale, "/countries")}
                  className="font-medium text-brand-gold transition-opacity hover:opacity-80"
                >
                  {cols.countries.viewAll}
                </Link>
              </li>
            </ul>
          </div>
          <FooterColumn
            title={cols.resources.title}
            links={cols.resources.links.map((label) => ({
              label,
              href: localizedPath(locale, "/#resources"),
            }))}
          />
          <FooterColumn
            title={cols.company.title}
            links={cols.company.links.map((label) => ({
              label,
              href: localizedPath(locale, "/#about"),
            }))}
          />
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            {"\u00A9"} {year} {dict.footer.rights}
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link href={localizedPath(locale, "/legal/privacy")} className="hover:text-brand-gold">
              {dict.footer.legal.privacy}
            </Link>
            <Link href={localizedPath(locale, "/legal/terms")} className="hover:text-brand-gold">
              {dict.footer.legal.terms}
            </Link>
            <Link href={localizedPath(locale, "/legal/notice")} className="hover:text-brand-gold">
              {dict.footer.legal.notice}
            </Link>
            <Link href={localizedPath(locale, "/legal/cookies")} className="hover:text-brand-gold">
              {dict.footer.legal.cookie}
            </Link>
          </div>
          <p>{dict.footer.builtIn}</p>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({
  title,
  links,
}: {
  title: string
  links: { label: string; href: string }[]
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold">{title}</h3>
      <ul className="mt-4 flex flex-col gap-2.5 text-sm text-primary-foreground/70">
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.href} className="transition-colors hover:text-brand-gold">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
