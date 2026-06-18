import Header from "@/components/Header";
import QuoteForm from "@/components/QuoteForm";
import { type Lang } from "@/lib/content";

export default function Page({ params }: { params: { lang: Lang } }) {
 const items = ["AI Strategy","GenAI Use Cases","Workflow Automation","Data Platforms","Microsoft Fabric","Databricks","Snowflake","Power BI","AI Governance","AI Training & Workshops","Data Architecture","Analytics & BI"];
 return <main><Header lang={params.lang}/><section className="section"><div className="card p-8"><p className="small-label">Modern AI consultancy</p><h1 className="text-5xl font-black">Data & AI Consulting</h1><p className="mt-5 max-w-3xl text-slate-600">KaiRiOra helps companies design and implement practical Data & AI solutions, including AI strategy, automation, data platforms, analytics, AI governance, GenAI use cases, workflow automation, and AI training for business teams.</p><div className="mt-8 grid gap-4 md:grid-cols-3">{items.map(i=><div className="rounded-2xl border p-5 font-bold" key={i}>{i}</div>)}</div></div></section><QuoteForm/></main>;
}
