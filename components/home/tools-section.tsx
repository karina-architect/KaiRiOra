import { SalaryCalculator } from "@/components/salary-calculator"
import { AiAssistant } from "@/components/ai-assistant"
import type { Dictionary } from "@/lib/i18n/dictionaries/en"

export function ToolsSection({ dict }: { dict: Dictionary }) {
  return (
    <section id="tools" className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-16">
        <div className="grid items-start gap-6 lg:grid-cols-2">
          <SalaryCalculator dict={dict} />
          <AiAssistant dict={dict} variant="card" />
        </div>
      </div>
    </section>
  )
}
