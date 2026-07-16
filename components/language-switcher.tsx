"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { locales, localeNames, localeShort, type Locale } from "@/lib/i18n/config"
import { switchLocalePath } from "@/lib/i18n/navigation"
import { cn } from "@/lib/utils"

export function LanguageSwitcher({
  locale,
  tone = "light",
}: {
  locale: Locale
  tone?: "light" | "dark"
}) {
  const pathname = usePathname() || `/${locale}`
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener("mousedown", onClick)
    return () => document.removeEventListener("mousedown", onClick)
  }, [])

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Select language"
        className={cn(
          "flex items-center gap-1 rounded-md px-2 py-1 text-xs font-semibold transition-colors",
          tone === "dark"
            ? "text-white/80 hover:text-white"
            : "text-charcoal hover:text-blue",
        )}
      >
        <GlobeIcon className="h-3.5 w-3.5" />
        {localeShort[locale]}
        <ChevronDown className="h-3 w-3" />
      </button>
      {open ? (
        <ul
          role="listbox"
          className="absolute right-0 z-50 mt-1 min-w-[9rem] overflow-hidden rounded-md border border-border bg-white py-1 shadow-lg"
        >
          {locales.map((l) => (
            <li key={l}>
              <Link
                role="option"
                aria-selected={l === locale}
                href={switchLocalePath(pathname, l as Locale, locales)}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex items-center justify-between px-3 py-1.5 text-xs text-charcoal hover:bg-softblue",
                  l === locale && "font-semibold text-blue",
                )}
              >
                {localeNames[l]}
                <span className="text-muted-foreground">{localeShort[l]}</span>
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" />
    </svg>
  )
}

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}
