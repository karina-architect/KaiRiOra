"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Phone, ChevronDown } from "lucide-react"
import { Logo } from "@/components/logo"
import { LanguageSwitcher } from "@/components/language-switcher"
import { localizedPath } from "@/lib/i18n/navigation"
import type { Locale } from "@/lib/i18n/config"
import type { Dictionary } from "@/lib/i18n/dictionaries/en"
import { getNav, getNavBarLabels } from "@/lib/site-content"

export function SiteHeader({
  locale,
  dict,
}: {
  locale: Locale
  dict: Dictionary
}) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openGroup, setOpenGroup] = useState<number | null>(null)

  const nav = getNav(locale)
  const barLabels = getNavBarLabels(locale)

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Brand strip */}
      <div className="bg-brand-navy text-primary-foreground/90">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-4 py-1.5 text-xs sm:px-6">
          <p className="flex items-center gap-1.5">
            <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-brand-gold" />
            <span className="font-medium">
              {dict.brandStrip.tagline.split("AI Driven")[0]}
              <span className="text-brand-gold">AI Driven</span>
              {dict.brandStrip.tagline.split("AI Driven")[1]}
            </span>
          </p>
          <Link
            href={localizedPath(locale, "/contact")}
            className="flex items-center gap-1.5 transition-opacity hover:opacity-80"
          >
            <Phone className="h-3 w-3" aria-hidden />
            {dict.brandStrip.contact}
          </Link>
        </div>
      </div>

      {/* Main nav */}
      <div className="border-b border-border bg-background/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between gap-4 px-4 sm:px-6">
          <Link href={localizedPath(locale, "/")} aria-label="KaiRiOra home" className="shrink-0">
            <Logo className="h-9 w-auto" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center lg:flex" aria-label="Primary">
            {nav.items.map((item, i) => (
              <div key={item.label} className="group relative">
                <Link
                  href={localizedPath(locale, item.href)}
                  className="flex items-center gap-0.5 whitespace-nowrap rounded-md px-2.5 py-2 text-[13px] font-medium text-foreground/80 transition-colors hover:text-brand-blue"
                >
                  {barLabels[i]}
                  {item.children && (
                    <ChevronDown
                      className="h-3.5 w-3.5 opacity-60 transition-transform group-hover:rotate-180"
                      aria-hidden
                    />
                  )}
                </Link>

                {item.children && (
                  <div className="invisible absolute left-0 top-full z-50 pt-2 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <div className="w-72 rounded-xl border border-border bg-white p-2 shadow-xl">
                      <p className="px-3 pb-1.5 pt-1 text-[11px] font-semibold uppercase tracking-wider text-brand-gold">
                        {item.label}
                      </p>
                      <ul className="flex flex-col">
                        {item.children.map((child) => (
                          <li key={child.label}>
                            <Link
                              href={localizedPath(locale, child.href)}
                              className="block rounded-md px-3 py-2 text-sm text-foreground/80 transition-colors hover:bg-softblue hover:text-brand-blue"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop right cluster */}
          <div className="hidden items-center gap-3 lg:flex">
            <LanguageSwitcher locale={locale} />
            <Link
              href={localizedPath(locale, "/contact")}
              className="whitespace-nowrap text-[13px] font-semibold text-foreground/80 transition-colors hover:text-brand-blue"
            >
              {nav.login}
            </Link>
            <Link
              href={localizedPath(locale, "/contact")}
              className="whitespace-nowrap rounded-full bg-brand-blue px-4 py-2 text-[13px] font-semibold text-white shadow-sm transition-colors hover:bg-blue-600"
            >
              {nav.getStarted}
            </Link>
          </div>

          {/* Mobile toggles */}
          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSwitcher locale={locale} />
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-foreground"
              onClick={() => setMobileOpen((o) => !o)}
              aria-expanded={mobileOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="max-h-[calc(100vh-120px)] overflow-y-auto border-t border-border bg-background lg:hidden">
            <nav className="mx-auto flex max-w-[1440px] flex-col gap-0.5 px-4 py-3 sm:px-6" aria-label="Mobile">
              {nav.items.map((item, i) => {
                if (!item.children) {
                  return (
                    <Link
                      key={item.label}
                      href={localizedPath(locale, item.href)}
                      className="rounded-md px-3 py-2.5 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-brand-blue"
                      onClick={() => setMobileOpen(false)}
                    >
                      {barLabels[i]}
                    </Link>
                  )
                }
                const isOpen = openGroup === i
                return (
                  <div key={item.label}>
                    <button
                      type="button"
                      className="flex w-full items-center justify-between rounded-md px-3 py-2.5 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted"
                      onClick={() => setOpenGroup(isOpen ? null : i)}
                      aria-expanded={isOpen}
                    >
                      {item.label}
                      <ChevronDown
                        className={`h-4 w-4 opacity-60 transition-transform ${isOpen ? "rotate-180" : ""}`}
                        aria-hidden
                      />
                    </button>
                    {isOpen && (
                      <ul className="mb-1 ml-3 flex flex-col border-l border-border pl-3">
                        {item.children.map((child) => (
                          <li key={child.label}>
                            <Link
                              href={localizedPath(locale, child.href)}
                              className="block rounded-md px-3 py-2 text-sm text-foreground/70 transition-colors hover:bg-muted hover:text-brand-blue"
                              onClick={() => setMobileOpen(false)}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )
              })}

              <div className="mt-3 flex flex-col gap-2 border-t border-border pt-3">
                <Link
                  href={localizedPath(locale, "/contact")}
                  className="rounded-full border border-border px-4 py-2.5 text-center text-sm font-semibold text-foreground/80"
                  onClick={() => setMobileOpen(false)}
                >
                  {nav.login}
                </Link>
                <Link
                  href={localizedPath(locale, "/contact")}
                  className="rounded-full bg-brand-blue px-4 py-2.5 text-center text-sm font-semibold text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  {nav.getStarted}
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
