"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"
import { Logo } from "@/components/logo"
import { LanguageSwitcher } from "@/components/language-switcher"
import { localizedPath } from "@/lib/i18n/navigation"
import type { Locale } from "@/lib/i18n/config"
import type { Dictionary } from "@/lib/i18n/dictionaries/en"
import { getPrimaryNav } from "@/lib/site-content"

/**
 * Splits the three-part brand tagline ("People First. AI Driven. Growth
 * Focused.") and accents the middle sentence.
 *
 * Matching on sentence position rather than the literal string "AI Driven"
 * keeps this working for every locale — the previous implementation hardcoded
 * the English token, so translated taglines rendered a stray English
 * "AI Driven" appended to the end. Falls back to the plain tagline whenever the
 * translation is not three sentences.
 */
function taglineParts(tagline: string): { text: string; accent: boolean }[] {
  const sentences = tagline.match(/[^.]+\.?/g)?.filter((s) => s.trim()) ?? []
  if (sentences.length !== 3) return [{ text: tagline, accent: false }]
  return sentences.map((text, i) => ({ text, accent: i === 1 }))
}

export function SiteHeader({
  locale,
  dict,
}: {
  locale: Locale
  dict: Dictionary
}) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const nav = getPrimaryNav(locale)


  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Brand strip */}
      <div className="bg-brand-navy text-primary-foreground/90">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-4 py-1.5 text-xs sm:px-6">
          <p className="flex items-center gap-1.5">
            <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-brand-gold" />
            <span className="font-medium">
              {taglineParts(dict.brandStrip.tagline).map((part, i) => (
                <span key={i} className={part.accent ? "text-brand-gold" : undefined}>
                  {part.text}
                </span>
              ))}
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
      <div className="border-b border-border bg-background shadow-sm">
        <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between gap-6 px-4 sm:px-6">
          <Link href={localizedPath(locale, "/")} aria-label="KaiRiOra home" className="shrink-0">
            <Logo className="h-9 w-auto" />
          </Link>

          {/* Desktop nav — always visible, horizontal */}
          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
            {nav.map((item) => (
              <Link
                key={item.label}
                href={localizedPath(locale, item.href)}
                className="whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-softblue hover:text-brand-blue"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop right cluster — language selector only */}
          <div className="hidden shrink-0 items-center md:flex">
            <LanguageSwitcher locale={locale} />
          </div>

          {/* Mobile toggles */}
          <div className="flex items-center gap-2 md:hidden">
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
          <div className="border-t border-border bg-background md:hidden">
            <nav
              className="mx-auto flex max-w-[1440px] flex-col gap-0.5 px-4 py-3 sm:px-6"
              aria-label="Mobile"
            >
              {nav.map((item) => (
                <Link
                  key={item.label}
                  href={localizedPath(locale, item.href)}
                  className="rounded-md px-3 py-2.5 text-sm font-medium text-foreground/80 transition-colors hover:bg-softblue hover:text-brand-blue"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
