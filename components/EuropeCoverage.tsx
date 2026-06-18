import Link from "next/link";
import { countries, countryNames, countryData, type Lang } from "@/lib/content";

export default function EuropeCoverage({ lang }: { lang: Lang }) {
 return (
  <section className="section">
   <div className="card p-6">
    <p className="small-label">All Europe coverage</p>
    <h2 className="mt-2 text-3xl font-black">Spain & Portugal First — But We Cover Europe</h2>
    <p className="mt-3 text-slate-600">KaiRiOra supports professionals and companies across EU, EEA and key European jurisdictions with payroll, contractors, EOR, recruitment, AI guidance and country-specific salary estimates.</p>
    <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
     {countries.map((c) => <Link key={c} className="rounded-2xl border border-slate-200 bg-white p-4 font-bold hover:border-blue" href={`/${lang}/countries/${c}`}>{countryData[c as keyof typeof countryData]?.flag || "🌍"} {countryNames[c as keyof typeof countryNames]}</Link>)}
    </div>
   </div>
  </section>
 );
}
