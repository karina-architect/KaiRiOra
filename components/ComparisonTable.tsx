const rows = [
 ["Freelancer-first approach","✓ Yes","Partial","Partial","No","No","No"],
 ["Bring your own client","✓ Yes","Partial","No","No","No","No"],
 ["Fast onboarding","✓ 1–3 days","3–7 days","3–7 days","3–10 days","7–14 days","3–7 days"],
 ["Work permit / relocation flow","✓ Coordinated","Add-on","Add-on","Add-on","Limited","Add-on"],
 ["Spain & Portugal expertise","✓ Specialized","General","General","General","General","General"],
 ["All EU country coverage","✓ Yes","Partial","Partial","Partial","Partial","Partial"],
 ["Advanced salary calculator","✓ Included","Limited","Limited","Limited","Limited","Limited"],
 ["Employer cost calculator","✓ Included","Limited","Limited","Limited","Limited","Limited"],
 ["AI labour-law assistant","✓ Included","No","No","No","No","No"],
 ["Data & AI consulting","✓ Included","No","No","No","No","No"],
 ["Individual quote access","✓ Easy contact","Sales form","Sales form","Sales form","Sales form","Sales form"],
 ["Strategic guidance","✓ Human + AI","Add-on","Add-on","Add-on","Limited","Add-on"]
];

export default function ComparisonTable() {
 return (
  <section className="section" id="comparison">
   <div className="card overflow-hidden p-6">
    <p className="small-label">Europe-wide competitor view</p>
    <h2 className="mt-2 text-3xl font-black">KaiRiOra vs Generic EOR Providers vs Setting Up Alone</h2>
    <p className="mt-3 text-slate-600">A clear comparison table inspired by your Workora concept, expanded for all Europe and focused on IT freelancers, consultants, US professionals relocating to Spain/Portugal, and companies hiring across Europe.</p>
    <div className="mt-6 overflow-x-auto">
     <table className="w-full min-w-[1000px] text-left text-sm">
      <thead><tr className="bg-navy text-white">{["Feature","⭐ KaiRiOra","Deel","Remote","Oyster","Papaya Global","Multiplier"].map(h => <th key={h} className="p-4 font-black">{h}</th>)}</tr></thead>
      <tbody>{rows.map((r,i)=><tr key={i} className="border-b border-slate-200"><td className="p-4 font-bold">{r[0]}</td>{r.slice(1).map((c,j)=><td key={j} className={`p-4 ${j===0 ? "bg-blue/5 font-bold text-green" : ""}`}>{c}</td>)}</tr>)}</tbody>
     </table>
    </div>
    <div className="mt-6 flex flex-wrap gap-3"><a className="btn-gold" href="#quote">Get Individual Quote</a><a className="btn-secondary" href="#calculator">Use Salary Calculator</a></div>
   </div>
  </section>
 );
}
