"use client"

import { useState } from "react"
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react"
import type { Dictionary } from "@/lib/i18n/dictionaries/en"
import { countries } from "@/lib/countries"

type Status = "idle" | "submitting" | "success" | "error"

export function ContactForm({ dict }: { dict: Dictionary }) {
  const c = dict.contact
  const [status, setStatus] = useState<Status>("idle")
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [services, setServices] = useState<string[]>([])

  function errorText(key: string) {
    const code = errors[key]
    if (!code) return null
    if (code === "email") return c.validation.email
    if (code === "consent") return c.validation.consent
    return c.validation.required
  }

  function toggleService(value: string) {
    setServices((prev) =>
      prev.includes(value) ? prev.filter((s) => s !== value) : [...prev, value],
    )
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("submitting")
    setErrors({})
    const form = e.currentTarget
    const data = new FormData(form)
    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      currentCountry: String(data.get("currentCountry") ?? ""),
      targetCountry: String(data.get("targetCountry") ?? ""),
      arrangement: String(data.get("arrangement") ?? ""),
      services,
      message: String(data.get("message") ?? ""),
      consent: data.get("consent") === "on",
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      if (res.ok) {
        setStatus("success")
        form.reset()
        setServices([])
        return
      }
      const json = (await res.json().catch(() => null)) as
        | { errors?: Record<string, string> }
        | null
      if (json?.errors) {
        setErrors(json.errors)
        setStatus("idle")
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex flex-col items-center gap-3 rounded-xl border border-border bg-white p-10 text-center shadow-sm"
      >
        <CheckCircle2 className="h-12 w-12 text-success" aria-hidden="true" />
        <h2 className="font-heading text-xl font-bold text-charcoal">{c.successTitle}</h2>
        <p className="max-w-md text-pretty leading-relaxed text-muted-foreground">{c.successMsg}</p>
      </div>
    )
  }

  const labelCls = "mb-1.5 block text-sm font-medium text-charcoal"

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-xl border border-border bg-white p-5 shadow-sm md:p-8"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelCls}>
            {c.name}
          </label>
          <input id="name" name="name" type="text" className="calc-input" autoComplete="name" />
          {errorText("name") ? (
            <p className="mt-1 text-xs text-red-600">{errorText("name")}</p>
          ) : null}
        </div>
        <div>
          <label htmlFor="email" className={labelCls}>
            {c.email}
          </label>
          <input id="email" name="email" type="email" className="calc-input" autoComplete="email" />
          {errorText("email") ? (
            <p className="mt-1 text-xs text-red-600">{errorText("email")}</p>
          ) : null}
        </div>
        <div>
          <label htmlFor="currentCountry" className={labelCls}>
            {c.currentCountry}
          </label>
          <select id="currentCountry" name="currentCountry" className="calc-input" defaultValue="">
            <option value="" disabled>
              {dict.common.selectPlaceholder}
            </option>
            {countries.map((country) => (
              <option key={country.slug} value={country.name}>
                {country.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="targetCountry" className={labelCls}>
            {c.targetCountry}
          </label>
          <select id="targetCountry" name="targetCountry" className="calc-input" defaultValue="">
            <option value="" disabled>
              {dict.common.selectPlaceholder}
            </option>
            {countries.map((country) => (
              <option key={country.slug} value={country.name}>
                {country.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="arrangement" className={labelCls}>
          {c.arrangement}
        </label>
        <select id="arrangement" name="arrangement" className="calc-input" defaultValue="">
          <option value="" disabled>
            {dict.common.selectPlaceholder}
          </option>
          {c.arrangements.map((a) => (
            <option key={a} value={a}>
              {a}
            </option>
          ))}
        </select>
      </div>

      <fieldset className="mt-5">
        <legend className={labelCls}>{c.services}</legend>
        <div className="grid gap-2 sm:grid-cols-2">
          {c.servicesOptions.map((opt) => (
            <label
              key={opt}
              className="flex items-center gap-2 rounded-md border border-border px-3 py-2 text-sm text-charcoal"
            >
              <input
                type="checkbox"
                checked={services.includes(opt)}
                onChange={() => toggleService(opt)}
                className="h-4 w-4 accent-[var(--color-blue)]"
              />
              {opt}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="mt-5">
        <label htmlFor="message" className={labelCls}>
          {c.message}
        </label>
        <textarea id="message" name="message" rows={4} className="calc-input resize-y" />
      </div>

      <label className="mt-5 flex items-start gap-2 text-sm text-muted-foreground">
        <input type="checkbox" name="consent" className="mt-0.5 h-4 w-4 accent-[var(--color-blue)]" />
        <span>{c.consent}</span>
      </label>
      {errorText("consent") ? (
        <p className="mt-1 text-xs text-red-600">{errorText("consent")}</p>
      ) : null}

      {status === "error" ? (
        <div
          role="alert"
          className="mt-5 flex items-start gap-2 rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          <span>
            <strong className="font-semibold">{c.errorTitle}. </strong>
            {c.errorMsg}
          </span>
        </div>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-blue px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-600 disabled:opacity-70 sm:w-auto"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            {c.submitting}
          </>
        ) : (
          c.submit
        )}
      </button>
    </form>
  )
}
