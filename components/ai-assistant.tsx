"use client"

import { useRef, useState } from "react"
import { Bot, Send, Loader2, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Dictionary } from "@/lib/i18n/dictionaries/en"

interface Msg {
  role: "user" | "assistant"
  content: string
}

export function AiAssistant({
  dict,
  variant = "card",
}: {
  dict: Dictionary
  variant?: "card" | "full"
}) {
  const a = dict.ai
  const [messages, setMessages] = useState<Msg[]>([{ role: "assistant", content: a.greeting }])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  async function send(text: string) {
    const content = text.trim()
    if (!content || loading) return
    const next: Msg[] = [...messages, { role: "user", content }]
    setMessages(next)
    setInput("")
    setLoading(true)

    // Placeholder assistant message we stream into
    setMessages((m) => [...m, { role: "assistant", content: "" }])

    try {
      const res = await fetch("/api/assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      })

      if (!res.ok || !res.body) {
        throw new Error("Request failed")
      }

      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      let acc = ""
      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        acc += decoder.decode(value, { stream: true })
        setMessages((m) => {
          const copy = [...m]
          copy[copy.length - 1] = { role: "assistant", content: acc }
          return copy
        })
        requestAnimationFrame(() => {
          scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight })
        })
      }
    } catch {
      setMessages((m) => {
        const copy = [...m]
        copy[copy.length - 1] = { role: "assistant", content: dict.ai.disclaimer }
        return copy
      })
    } finally {
      setLoading(false)
    }
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && !e.nativeEvent.isComposing && e.keyCode !== 229) {
      e.preventDefault()
      send(input)
    }
  }

  return (
    <div className="flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-sm">
      <div className="flex items-center gap-2">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy text-white">
          <Bot className="h-5 w-5" aria-hidden />
        </span>
        <h3 className="font-heading text-lg font-bold text-navy">{a.title}</h3>
        <span className="rounded-full bg-softgold px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-gold-600">
          {a.beta}
        </span>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">{a.subtitle}</p>

      {/* Category chips */}
      <div className="mt-4 flex flex-wrap gap-2">
        {a.categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => send(`Tell me about ${cat.toLowerCase()} in Europe.`)}
            className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-charcoal transition-colors hover:border-blue/40 hover:bg-softblue hover:text-blue"
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Chat window */}
      <div
        ref={scrollRef}
        className={cn(
          "mt-4 flex-1 space-y-3 overflow-y-auto rounded-lg bg-muted/40 p-3",
          variant === "card" ? "max-h-56 min-h-40" : "max-h-[28rem] min-h-72",
        )}
      >
        {messages.map((m, i) => (
          <div
            key={i}
            className={cn("flex", m.role === "user" ? "justify-end" : "justify-start")}
          >
            <div
              className={cn(
                "max-w-[85%] whitespace-pre-wrap rounded-2xl px-3.5 py-2 text-sm leading-relaxed",
                m.role === "user"
                  ? "rounded-br-sm bg-blue text-white"
                  : "rounded-bl-sm border border-border bg-white text-foreground/90",
              )}
            >
              {m.content || (loading ? <span className="opacity-60">{a.thinking}</span> : "")}
            </div>
          </div>
        ))}
      </div>

      {/* Suggested question */}
      {messages.length <= 1 ? (
        <button
          type="button"
          onClick={() => send(a.exampleQuestion)}
          className="mt-3 flex items-center gap-1.5 self-start rounded-md bg-softblue px-3 py-1.5 text-left text-xs font-medium text-blue transition-opacity hover:opacity-80"
        >
          <ArrowRight className="h-3.5 w-3.5" aria-hidden />
          {a.exampleQuestion}
        </button>
      ) : null}

      {/* Input */}
      <form
        className="mt-3 flex items-center gap-2"
        onSubmit={(e) => {
          e.preventDefault()
          send(input)
        }}
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={onKeyDown}
          placeholder={a.placeholder}
          aria-label={a.placeholder}
          className="flex-1 rounded-md border border-border bg-white px-3 py-2.5 text-sm outline-none focus:border-blue focus:ring-2 focus:ring-blue/20"
        />
        <button
          type="submit"
          disabled={loading || !input.trim()}
          className="inline-flex items-center gap-1.5 rounded-md bg-blue px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? (
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
          ) : (
            <Send className="h-4 w-4" aria-hidden />
          )}
          <span className="hidden sm:inline">{a.send}</span>
        </button>
      </form>

      <p className="mt-3 text-center text-[11px] text-muted-foreground">{a.disclaimer}</p>
    </div>
  )
}
