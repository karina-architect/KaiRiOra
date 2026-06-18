"use client";

import Link from "next/link";
import { languages, translations, type Lang } from "@/lib/content";

export default function Header({ lang }: { lang: Lang }) {
  const t = translations[lang] || translations.en;
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href={`/${lang}`} className="text-3xl font-black tracking-tight">
          <span className="text-navy">Kai</span><span className="text-blue">Ri</span><span className="text-gold">Ora</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-semibold md:flex">
          <Link href={`/${lang}`}>{t.home}</Link>
          <Link href={`/${lang}#services`}>{t.services}</Link>
          <Link href={`/${lang}/countries`}>{t.countries}</Link>
          <Link href={`/${lang}/comparison`}>{t.comparison}</Link>
          <Link href={`/${lang}/data-ai-consulting`}>{t.dataAI}</Link>
          <Link href={`/${lang}/contact`} className="btn-primary py-2">{t.contact}</Link>
          <select className="rounded-lg border border-slate-200 px-2 py-1" defaultValue={lang} onChange={(e) => { window.location.href = `/${e.target.value}`; }}>
            {languages.map((l) => <option key={l} value={l}>{l.toUpperCase()}</option>)}
          </select>
        </nav>
      </div>
    </header>
  );
}
