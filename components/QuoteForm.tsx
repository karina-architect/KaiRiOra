"use client";
import { useState } from "react";

export default function QuoteForm() {
 const [sent, setSent] = useState(false);
 return (
  <section id="quote" className="section">
   <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr]">
    <div className="card bg-gradient-to-br from-skysoft to-white p-8">
     <p className="small-label">Easy personal quote access</p>
     <h2 className="mt-2 text-3xl font-black">Get Your Individual Quote</h2>
     <p className="mt-4 text-slate-600">Tell us your current country, target country, salary, client/employer setup and whether you prefer Spain, Portugal or another European country.</p>
     <ul className="mt-6 space-y-3 text-sm"><li>✓ Response in 24h</li><li>✓ No obligation</li><li>✓ Confidential</li><li>✓ Tailored to IT consultants, freelancers and companies</li></ul>
    </div>
    <form className="card grid gap-4 p-8" onSubmit={(e)=>{e.preventDefault();setSent(true)}}>
     <div className="grid gap-4 md:grid-cols-2"><input className="input" placeholder="Full name"/><input className="input" placeholder="Email address"/></div>
     <div className="grid gap-4 md:grid-cols-2"><select className="input"><option>Current country</option><option>USA</option><option>Spain</option><option>Portugal</option><option>Belgium</option><option>Germany</option><option>France</option><option>Netherlands</option></select><select className="input"><option>Target country</option><option>Spain</option><option>Portugal</option><option>Any EU country</option></select></div>
     <div className="grid gap-4 md:grid-cols-2"><select className="input"><option>I am a...</option><option>IT freelancer</option><option>Employee</option><option>US consultant relocating to Europe</option><option>Company founder</option><option>Hiring company</option></select><input className="input" placeholder="Annual income / salary"/></div>
     <textarea className="input min-h-[120px]" placeholder="Tell us what you need: salary comparison, Spain/Portugal residency, payroll, EOR, contractor setup, labour law, Data & AI consulting..." />
     <button className="btn-gold">Get My Free Quote</button>
     {sent && <p className="rounded-xl bg-green/10 p-3 font-bold text-green">Thank you — demo form ready to connect to CRM, email or automation API.</p>}
    </form>
   </div>
  </section>
 );
}
