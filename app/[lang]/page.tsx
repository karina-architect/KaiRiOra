import Header from "@/components/Header";
import WorldGraphic from "@/components/WorldGraphic";
import SalaryCalculator from "@/components/SalaryCalculator";
import SpainPortugal from "@/components/SpainPortugal";
import ComparisonTable from "@/components/ComparisonTable";
import EuropeCoverage from "@/components/EuropeCoverage";
import Services from "@/components/Services";
import AIAssistant from "@/components/AIAssistant";
import QuoteForm from "@/components/QuoteForm";
import { translations, type Lang } from "@/lib/content";

export default function Home({ params }: { params: { lang: Lang } }) {
 const lang = params.lang || "en";
 const t = translations[lang] || translations.en;
 return (
  <main>
   <Header lang={lang}/>
   <section className="section grid items-center gap-8 lg:grid-cols-[1.1fr_1fr]">
    <div>
     <p className="small-label">AI-powered European workforce platform</p>
     <h1 className="mt-3 text-5xl font-black leading-tight md:text-6xl">{t.hero1}<br/><span className="text-blue">Keep More</span> <span className="text-gold">of What You Earn.</span></h1>
     <p className="mt-6 max-w-xl text-lg text-slate-600">{t.subtitle}</p>
     <ul className="mt-6 grid gap-2 text-sm font-semibold">
      <li>✓ Spain & Portugal priority guidance for lower-tax eligible routes</li>
      <li>✓ Europe-wide payroll, EOR, contractor and recruitment coverage</li>
      <li>✓ Advanced salary, employer cost and country comparison calculators</li>
      <li>✓ AI labour-law assistant with human expert follow-up</li>
     </ul>
     <div className="mt-7 flex flex-wrap gap-3"><a className="btn-primary" href="#calculator">{t.calc}</a><a className="btn-gold" href="#quote">{t.quote}</a><a className="btn-secondary" href="#comparison">{t.why}</a></div>
    </div>
    <div>
     <WorldGraphic/>
     <div className="mt-4 card p-5">
      <h3 className="text-xl font-black">Why Spain or Portugal?</h3>
      <div className="mt-4 grid gap-3 text-sm">
       <p><b className="text-blue">Potentially stronger net income</b> vs. higher-tax EU countries, where eligible.</p>
       <p>Favorable regimes and residency pathways for digital professionals.</p>
       <p>High quality of life, international communities and growing tech hubs.</p>
      </div>
     </div>
    </div>
   </section>
   <SalaryCalculator/>
   <SpainPortugal lang={lang}/>
   <ComparisonTable/>
   <Services/>
   <EuropeCoverage lang={lang}/>
   <AIAssistant/>
   <QuoteForm/>
   <footer className="border-t bg-white"><div className="section flex flex-col justify-between gap-4 py-8 md:flex-row"><b>KaiRiOra</b><span className="text-sm text-slate-500">AI-powered workforce, payroll, relocation and Data & AI solutions across Europe.</span></div></footer>
  </main>
 );
}
