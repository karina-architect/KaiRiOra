"use client";
import { useState } from "react";
import { calculateSalary, formatEUR } from "@/lib/calculator";
import { countryNames } from "@/lib/content";

export default function SalaryCalculator() {
  const [gross, setGross] = useState(80000);
  const [country, setCountry] = useState("spain");
  const [regime, setRegime] = useState("beckham");
  const [employmentType, setEmploymentType] = useState<"employee" | "self-employed" | "company-owner">("employee");
  const result = calculateSalary({ gross, country, regime, employmentType });
  const belgium = calculateSalary({ gross, country: "belgium" });
  const germany = calculateSalary({ gross, country: "germany" });
  const france = calculateSalary({ gross, country: "france" });

  return (
    <section id="calculator" className="section">
      <div className="card grid gap-6 p-6 lg:grid-cols-[1fr_2.25fr]">
        <div>
          <p className="small-label">Advanced interactive calculator</p>
          <h2 className="mt-2 text-3xl font-black">Salary, Tax & Employer Cost Calculator</h2>
          <p className="mt-4 text-slate-600">Compare net income, estimated taxes, employer costs and KaiRiOra service flow across Europe.</p>
          <ul className="mt-5 space-y-2 text-sm text-slate-700">
            <li>✓ Gross to net salary</li>
            <li>✓ Employee, freelancer or company-owner view</li>
            <li>✓ Spain and Portugal regime highlights</li>
            <li>✓ Compare against higher-tax EU countries</li>
            <li>✓ Lead capture for an individual quote</li>
          </ul>
        </div>
        <div className="grid gap-5">
          <div className="grid gap-4 md:grid-cols-4">
            <label className="text-sm font-bold">Annual Gross Salary
              <input className="input mt-2" type="number" value={gross} onChange={(e)=>setGross(Number(e.target.value))}/>
            </label>
            <label className="text-sm font-bold">Country
              <select className="input mt-2" value={country} onChange={(e)=>setCountry(e.target.value)}>
                {Object.entries(countryNames).map(([key,name]) => <option key={key} value={key}>{name}</option>)}
              </select>
            </label>
            <label className="text-sm font-bold">Tax Regime
              <select className="input mt-2" value={regime} onChange={(e)=>setRegime(e.target.value)}>
                <option value="standard">Standard</option>
                <option value="beckham">Spain Beckham Law</option>
                <option value="nhr">Portugal NHR 2.0</option>
              </select>
            </label>
            <label className="text-sm font-bold">I am
              <select className="input mt-2" value={employmentType} onChange={(e)=>setEmploymentType(e.target.value as any)}>
                <option value="employee">Employee</option>
                <option value="self-employed">Self-employed</option>
                <option value="company-owner">Company owner</option>
              </select>
            </label>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            <div className="rounded-2xl border border-slate-200 p-5"><p className="text-sm">Net Annual Income</p><p className="mt-2 text-3xl font-black text-green">{formatEUR(result.net)}</p><p className="text-xs text-slate-500">{Math.round((result.net/gross)*100)}% of gross</p></div>
            <div className="rounded-2xl border border-slate-200 p-5"><p className="text-sm">Total Taxes</p><p className="mt-2 text-3xl font-black">{formatEUR(result.taxes)}</p><p className="text-xs text-slate-500">{Math.round(result.taxRate*1000)/10}% of gross</p></div>
            <div className="rounded-2xl border border-slate-200 p-5"><p className="text-sm">Employer Cost</p><p className="mt-2 text-3xl font-black text-blue">{formatEUR(result.employerCost)}</p><p className="text-xs text-slate-500">Indicative estimate</p></div>
            <div className="rounded-2xl border border-slate-200 p-5"><p className="text-sm">KaiRiOra Fee</p><p className="mt-2 text-3xl font-black text-gold">{formatEUR(result.serviceFee)}</p><p className="text-xs text-slate-500">Placeholder %</p></div>
          </div>

          <div className="rounded-2xl border border-gold bg-gold/5 p-5">
            <p className="font-bold">You keep <span className="text-2xl text-green">{formatEUR(result.net)}</span> / year</p>
            <div className="mt-2 grid gap-3 text-sm md:grid-cols-3">
              <span>vs. Belgium: <b className="text-gold">+{formatEUR(result.net - belgium.net)}</b></span>
              <span>vs. Germany: <b className="text-green">+{formatEUR(result.net - germany.net)}</b></span>
              <span>vs. France: <b className="text-green">+{formatEUR(result.net - france.net)}</b></span>
            </div>
            <p className="mt-3 text-xs text-slate-500">Indicative only. Actual outcomes depend on personal circumstances, local rules, regime eligibility and professional advice.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
