"use client"

import { useMemo, useState } from "react"
import { Calculator, Info } from "lucide-react"
import { countryTax, calculateSalary, getCountryTax } from "@/lib/salary"
import type { Dictionary } from "@/lib/i18n/dictionaries/en"

function useFormatter(currency: string) {
  return useMemo(
    () =>
      new Intl.NumberFormat("en-IE", {
        style: "currency",
        currency,
        maximumFractionDigits: 0,
      }),
    [currency],
  )
}

export function SalaryCalculator({ dict }: { dict: Dictionary }) {
  const c = dict.calculator
  const [countryCode, setCountryCode] = useState("ES")
  const [employmentType, setEmploymentType] = useState<"employee" | "contractor">("employee")
  const [gross, setGross] = useState(80000)
  const [regimeId, setRegimeId] = useState("beckham")
  const [married, setMarried] = useState(false)
  const [dependants, setDependants] = useState(0)
  const [submitted, setSubmitted] = useState(true)

  const country = getCountryTax(countryCode)
  const fmt = useFormatter(country.currency)

  const result = useMemo(
    () =>
      calculateSalary({
        gross,
        countryCode,
        regimeId,
        employmentType,
        married,
        dependants,
      }),
    [gross, countryCode, regimeId, employmentType, married, dependants],
  )

  // Comparison: net income in two other countries under standard regime
  const comparisons = useMemo(() => {
    return countryTax
      .filter((cc) => cc.code !== countryCode)
      .slice(0, 2)
      .map((cc) => {
        const r = calculateSalary({
          gross,
          countryCode: cc.code,
          regimeId: cc.regimes[0].id,
          employmentType,
          married,
          dependants,
        })
        return { name: cc.name, diff: result.net - r.net, symbol: cc.currencySymbol }
      })
  }, [countryCode, gross, employmentType, married, dependants, result.net])

  function onCountryChange(code: string) {
    setCountryCode(code)
    const next = getCountryTax(code)
    setRegimeId(next.regimes[0].id)
  }

  return (
    <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
      <div className="flex items-center gap-2">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-softblue text-blue">
          <Calculator className="h-5 w-5" aria-hidden />
        </span>
        <h3 className="font-heading text-lg font-bold text-navy">{c.title}</h3>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">{c.subtitle}</p>

      <form
        className="mt-5 grid gap-4"
        onSubmit={(e) => {
          e.preventDefault()
          setSubmitted(true)
        }}
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label={c.country}>
            <select
              value={countryCode}
              onChange={(e) => onCountryChange(e.target.value)}
              className="calc-input"
            >
              {countryTax.map((cc) => (
                <option key={cc.code} value={cc.code}>
                  {cc.name}
                </option>
              ))}
            </select>
          </Field>
          <Field label={c.employmentType}>
            <select
              value={employmentType}
              onChange={(e) => setEmploymentType(e.target.value as "employee" | "contractor")}
              className="calc-input"
            >
              <option value="employee">{c.employmentTypes.employee}</option>
              <option value="contractor">{c.employmentTypes.contractor}</option>
            </select>
          </Field>
          <Field label={c.grossSalary}>
            <div className="flex items-center rounded-md border border-border bg-white focus-within:ring-2 focus-within:ring-blue/30">
              <span className="pl-3 text-sm text-muted-foreground">{country.currencySymbol}</span>
              <input
                type="number"
                min={0}
                step={1000}
                value={gross}
                onChange={(e) => setGross(Number(e.target.value) || 0)}
                className="w-full rounded-md bg-transparent px-2 py-2 text-sm outline-none"
              />
            </div>
          </Field>
          <Field label={c.taxRegime}>
            <select
              value={regimeId}
              onChange={(e) => setRegimeId(e.target.value)}
              className="calc-input"
            >
              {country.regimes.map((r) => (
                <option key={r.id} value={r.id}>
                  {r.label}
                </option>
              ))}
            </select>
          </Field>
          <Field label={c.maritalStatus}>
            <select
              value={married ? "married" : "single"}
              onChange={(e) => setMarried(e.target.value === "married")}
              className="calc-input"
            >
              <option value="single">{c.maritalStatuses.single}</option>
              <option value="married">{c.maritalStatuses.married}</option>
            </select>
          </Field>
          <Field label={c.dependants}>
            <select
              value={dependants}
              onChange={(e) => setDependants(Number(e.target.value))}
              className="calc-input"
            >
              {[0, 1, 2, 3, 4].map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </Field>
        </div>

        <button
          type="submit"
          className="w-full rounded-md bg-blue px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-600"
        >
          {c.calculate}
        </button>
      </form>

      {submitted ? (
        <div className="mt-5 grid gap-4">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <ResultCard
              label={c.netAnnual}
              value={fmt.format(result.net)}
              hint={`${Math.round((result.net / result.gross) * 100)}% ${c.ofGross}`}
              tone="success"
            />
            <ResultCard
              label={c.totalContributions}
              value={fmt.format(result.totalDeductions)}
              hint={`${Math.round(result.effectiveRate * 100)}% ${c.ofGross}`}
              tone="gold"
            />
            <ResultCard
              label={c.employerCost}
              value={fmt.format(result.employerCost)}
              hint={`${Math.round(((result.employerCost - result.gross) / result.gross) * 100)}% ${c.aboveGross}`}
              tone="blue"
            />
          </div>

          {comparisons.length > 0 ? (
            <div className="grid grid-cols-2 gap-3 rounded-lg bg-softgold/60 p-3">
              {comparisons.map((cmp) => (
                <div key={cmp.name} className="text-center">
                  <p className="text-xs text-muted-foreground">
                    {c.comparisonVs} {cmp.name}
                  </p>
                  <p
                    className={
                      cmp.diff >= 0
                        ? "text-sm font-semibold text-success"
                        : "text-sm font-semibold text-gold-600"
                    }
                  >
                    {cmp.diff >= 0 ? "+ " : "− "}
                    {fmt.format(Math.abs(cmp.diff))} {c.perYear}
                  </p>
                </div>
              ))}
            </div>
          ) : null}

          <p className="flex items-start gap-2 rounded-md bg-muted/60 p-3 text-[11px] leading-relaxed text-muted-foreground">
            <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden />
            {c.disclaimer}
          </p>
        </div>
      ) : null}
    </div>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs font-medium text-charcoal">{label}</span>
      {children}
    </label>
  )
}

function ResultCard({
  label,
  value,
  hint,
  tone,
}: {
  label: string
  value: string
  hint: string
  tone: "success" | "gold" | "blue"
}) {
  const toneClass =
    tone === "success" ? "text-success" : tone === "gold" ? "text-gold-600" : "text-blue"
  return (
    <div className="rounded-lg border border-border bg-background p-3 text-center">
      <p className="text-[11px] leading-tight text-muted-foreground">{label}</p>
      <p className={`mt-1 font-heading text-lg font-bold ${toneClass}`}>{value}</p>
      <p className="text-[10px] text-muted-foreground">{hint}</p>
    </div>
  )
}
