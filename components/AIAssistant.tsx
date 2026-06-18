export default function AIAssistant() {
 return (
  <section className="section">
   <div className="grid gap-6 lg:grid-cols-2">
    <div className="card p-8">
     <p className="small-label">Beta API-ready</p>
     <h2 className="mt-2 text-3xl font-black">AI Labour Law Information Assistant</h2>
     <p className="mt-4 text-slate-600">Prepared API connection point for guidance on employment rules, contractor compliance, visas, payroll, relocation and residency across Europe.</p>
     <div className="mt-6 rounded-2xl bg-skysoft p-4 text-sm">Can I work in Spain or Portugal for a US company?</div>
     <div className="mt-3 rounded-2xl border p-4 text-sm">Yes, but the best route depends on residency, tax status, employer setup, contract type and local rules. KaiRiOra can guide the options and prepare an individual quote.</div>
     <a className="btn-primary mt-5" href="#quote">Ask AI Assistant</a>
    </div>
    <div className="card bg-gradient-to-br from-navy to-blue p-8 text-white">
     <h2 className="text-3xl font-black">Compliance-first disclaimer</h2>
     <p className="mt-4 text-white/80">Calculators and AI responses provide general information only. Final decisions should be validated by qualified local tax, payroll, immigration and legal professionals.</p>
    </div>
   </div>
  </section>
 );
}
