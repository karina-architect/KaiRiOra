import { services } from "@/lib/content";

export default function Services() {
 return (
  <section id="services" className="section">
   <p className="small-label text-center">Workforce + AI + consulting</p>
   <h2 className="mt-2 text-center text-3xl font-black">Our Solutions</h2>
   <div className="mt-7 grid gap-4 md:grid-cols-3 lg:grid-cols-4">
    {services.map((s) => <div className="card p-5 text-center" key={s}><div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-skysoft text-blue">✦</div><h3 className="font-black">{s}</h3><p className="mt-2 text-sm text-slate-600">Practical, compliant and AI-enabled support for European operations.</p></div>)}
   </div>
  </section>
 );
}
