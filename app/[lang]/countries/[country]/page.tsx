import Header from "@/components/Header";
import SalaryCalculator from "@/components/SalaryCalculator";
import QuoteForm from "@/components/QuoteForm";
import ComparisonTable from "@/components/ComparisonTable";
import { countryNames, countryData, type Lang } from "@/lib/content";

export default function CountryPage({ params }: { params: { lang: Lang; country: string } }) {
 const name = countryNames[params.country as keyof typeof countryNames] || params.country;
 const data = countryData[params.country as keyof typeof countryData];
 const isPriority = params.country === "spain" || params.country === "portugal";
 return (
  <main>
   <Header lang={params.lang}/>
   <section className="section">
    <div className="card p-8">
     <p className="small-label">{isPriority ? "Priority KaiRiOra destination" : "Europe coverage"}</p>
     <h1 className="mt-2 text-5xl font-black">{data?.flag || "🌍"} {name} Workforce, Payroll & Residency Guide</h1>
     <p className="mt-5 max-w-3xl text-lg text-slate-600">{data?.adv || "KaiRiOra provides workforce, payroll, contractor, recruitment and compliance guidance for this country as part of its Europe-wide platform."}</p>
     <div className="mt-8 grid gap-4 md:grid-cols-4">
      <div className="rounded-2xl bg-skysoft p-5"><b>Payroll</b><p className="text-sm text-slate-600">Local payroll and workforce administration.</p></div>
      <div className="rounded-2xl bg-skysoft p-5"><b>Contractors</b><p className="text-sm text-slate-600">Contractor setup and compliant engagement.</p></div>
      <div className="rounded-2xl bg-skysoft p-5"><b>Tax Estimate</b><p className="text-sm text-slate-600">{data?.tax ? `${data.tax}% indicative burden in sample scenario.` : "Country-specific estimate ready."}</p></div>
      <div className="rounded-2xl bg-skysoft p-5"><b>Quote</b><p className="text-sm text-slate-600">Get an individual country assessment.</p></div>
     </div>
    </div>
   </section>
   <SalaryCalculator/>
   <ComparisonTable/>
   <QuoteForm/>
  </main>
 );
}
