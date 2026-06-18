import Header from "@/components/Header";
import SalaryCalculator from "@/components/SalaryCalculator";
import QuoteForm from "@/components/QuoteForm";
import { type Lang } from "@/lib/content";

export default function Page({ params }: { params: { lang: Lang } }) {
  return <main><Header lang={params.lang}/><section className="section"><div className="card p-8"><p className="small-label">Calculator</p><h1 className="text-4xl font-black">Employer Cost Calculator</h1><p className="mt-4 text-slate-600">Estimate gross salary, employer social contributions, payroll administration and KaiRiOra service costs across Europe.</p></div></section><SalaryCalculator/><QuoteForm/></main>;
}
