"use client"

import { useState } from "react"
import {
  ChevronDown,
  Target,
  ClipboardCheck,
  Database,
  ShieldCheck,
  Server,
  BarChart3,
  Bot,
  GraduationCap,
  type LucideIcon,
} from "lucide-react"
import type { DataAiIcon, DataAiService } from "@/lib/site-content"

const icons: Record<DataAiIcon, LucideIcon> = {
  strategy: Target,
  readiness: ClipboardCheck,
  dataStrategy: Database,
  governance: ShieldCheck,
  engineering: Server,
  analytics: BarChart3,
  automation: Bot,
  training: GraduationCap,
}

export function DataAiServices({
  services,
  learnMore,
}: {
  services: DataAiService[]
  learnMore: string
}) {
  const [open, setOpen] = useState(0)

  return (
    <div className="flex flex-col gap-3">
      {services.map((service, i) => {
        const Icon = icons[service.icon]
        const isOpen = open === i
        const panelId = `data-ai-panel-${i}`
        const buttonId = `data-ai-button-${i}`
        return (
          <div
            key={service.title}
            className={`overflow-hidden rounded-xl border bg-white transition-colors ${
              isOpen ? "border-brand-blue/40 shadow-sm" : "border-border"
            }`}
          >
            <button
              type="button"
              id={buttonId}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="flex w-full items-center gap-4 px-5 py-4 text-left transition-colors hover:bg-softblue/50"
            >
              <span
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg transition-colors ${
                  isOpen ? "bg-brand-blue text-white" : "bg-softblue text-brand-blue"
                }`}
              >
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <span className="flex-1 font-heading text-base font-semibold text-navy sm:text-lg">
                {service.title}
              </span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-brand-blue transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
                aria-hidden
              />
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="px-5 pb-5 pl-20"
            >
              <p className="text-pretty leading-relaxed text-muted-foreground">{service.desc}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand-blue">
                {learnMore}
                <ChevronDown className="h-4 w-4 -rotate-90" aria-hidden />
              </span>
            </div>
          </div>
        )
      })}
    </div>
  )
}
