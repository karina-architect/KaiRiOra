"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Phone, ChevronDown } from "lucide-react"
import { Logo } from "@/components/logo"
import { LanguageSwitcher } from "@/components/language-switcher"
import { localizedPath } from "@/lib/i18n/navigation"
import type { Locale } from "@/lib/i18n/config"
import type { Dictionary } from "@/lib/i18n/dictionaries/en"

const NAV_WITH_MENUS = ["services", "solutions", "countries", "resources"] as const

export function SiteHeader({
  locale,
  dict,
}: {
  locale: Locale
  dict: Dictionary
}) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinks: { key: keyof Dictionary["nav"]; href: string; hasMenu?: boolean }[] = [
    { key: "home", href: "/" },
    { key: "services", href: "/#services", hasMenu: true },
    { key: "solutions", href: "/#solutions", hasMenu: true },
    { key: "countries", href: "/countries", hasMenu: true },
    { key: "resources", href: "/#resources", hasMenu: true },
    { key: "about", href: "/#about" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Brand strip */}
      <div className="bg-brand-navy text-primary-foreground/90">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1.5 text-xs sm:px-6">
          <p className="flex items-center gap-1.5">
            <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-brand-gold" />
            <span className="font-medium">
              {dict.brandStrip.tagline.split("AI Driven")[0]}
              <span className="text-brand-gold">AI Driven</span>
              {dict.brandStrip.tagline.split("AI Driven")[1]}
            </span>
          </p>
          <div className="flex items-center gap-4">
            <LanguageSwitcher locale={locale} variant="dark" />
            <Link
              href={localizedPath(locale, "/contact")}
              className="flex items-center gap-1.5 transition-opacity hover:opacity-80"
            >
              <Phone className="h-3 w-3" aria-hidden />
              {dict.brandStrip.contact}
            </Link>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <Link href={localizedPath(locale, "/")} aria-label="KaiRiOra home">
            <Logo className="h-8 w-auto" />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {navLinks.map((item) => (
              <Link
                key={item.key}
                href={localizedPath(locale, item.href)}
                className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-brand-blue"
              >
                {dict.nav[item.key]}
                {item.hasMenu && <ChevronDown className="h-3.5 w-3.5 opacity-60" aria-hidden />}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href={localizedPath(locale, "/contact")}
              className="rounded-md bg-brand-gold px-4 py-2 text-sm font-semibold text-brand-navy shadow-sm transition-colors hover:bg-brand-gold-dark"
            >
              {dict.nav.requestAssessment}
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-foreground lg:hidden"
            onClick={() => setMobileOpen((o) => !o)}
            aria-expanded={mobileOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="border-t border-border bg-background lg:hidden">
            <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3 sm:px-6" aria-label="Mobile">
              {navLinks.map((item) => (
                <Link
                  key={item.key}
                  href={localizedPath(locale, item.href)}
                  className="rounded-md px-3 py-2.5 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-brand-blue"
                  onClick={() => setMobileOpen(false)}
                >
                  {dict.nav[item.key]}
                </Link>
              ))}
              <Link
                href={localizedPath(locale, "/contact")}
                className="mt-2 rounded-md bg-brand-gold px-4 py-2.5 text-center text-sm font-semibold text-brand-navy"
                onClick={() => setMobileOpen(false)}
              >
                {dict.nav.requestAssessment}
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
