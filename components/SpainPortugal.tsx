import Link from "next/link";
import { countryData, countryNames, type Lang } from "@/lib/content";

export default function SpainPortugal({ lang }: { lang: Lang }) {
  return (
    <section className="section">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="card p-6">
          <p className="small-label">Priority destinations</p>
          <h2 className="mt-2 text-3xl font-black">Why Spain & Portugal First?</h2>
          <p className="mt-3 text-slate-600">KaiRiOra highlights Spain and Portugal because they are attractive for US and European IT consultants, AI specialists and freelancers seeking better lifestyle, simpler relocation paths and potentially improved net income compared with high-tax EU countries.</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border p-5"><div className="text-3xl">🇪🇸</div><h3 className="font-black">Spain</h3><p className="text-sm text-slate-600">Beckham Law potential, international schools, strong lifestyle, Barcelona/Madrid/Valencia/Canary Islands tech communities.</p><Link href={`/${lang}/countries/spain`} className="mt-4 inline-block font-bold text-blue">Learn Spain →</Link></div>
            <div className="rounded-2xl border p-5"><div className="text-3xl">🇵🇹</div><h3 className="font-black">Portugal</h3><p className="text-sm text-slate-600">Digital nomad routes, international community, Lisbon/Porto tech hubs, attractive lifestyle and remote-work appeal.</p><Link href={`/${lang}/countries/portugal`} className="mt-4 inline-block font-bold text-blue">Learn Portugal →</Link></div>
          </div>
        </div>
        <div className="card p-6">
          <h3 className="text-xl font-black">Example: €80,000 Gross Salary Comparison</h3>
          <table className="mt-5 w-full text-sm">
            <thead><tr className="border-b text-left"><th className="py-3">Country</th><th>Net Income</th><th>Taxes</th></tr></thead>
            <tbody>
              {["spain","portugal","belgium","germany","france","netherlands"].map((c) => (
                <tr className="border-b" key={c}>
                  <td className="py-3 font-bold">{countryNames[c as keyof typeof countryNames]}</td>
                  <td>€ {countryData[c as keyof typeof countryData]?.net.toLocaleString()}</td>
                  <td>{countryData[c as keyof typeof countryData]?.tax}%</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-4 text-xs text-slate-500">Figures are approximate demo estimates and must be validated by tax/payroll professionals.</p>
        </div>
      </div>
    </section>
  );
}
