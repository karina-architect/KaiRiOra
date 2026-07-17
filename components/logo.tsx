import { cn } from "@/lib/utils"

interface LogoProps {
  variant?: "light" | "dark"
  showTagline?: boolean
  className?: string
}

/**
 * KaiRiOra "KRo" monogram, cropped directly from the official brand artwork
 * (public/kairiora-logo.png) via a CSS sprite crop so it always matches the
 * guidelines exactly. `mix-blend-multiply` drops the light artwork backing so
 * the mark sits cleanly on white (header) or on a white chip (dark footer).
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <span
      role="img"
      aria-label="KaiRiOra"
      className={cn("block h-9 mix-blend-multiply", className)}
      style={{
        aspectRatio: "1.23 / 1",
        backgroundImage: "url(/kairiora-logo.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "297%",
        backgroundPosition: "50% 27%",
      }}
    />
  )
}

export function Logo({ variant = "light", showTagline = true, className }: LogoProps) {
  const isDark = variant === "dark"
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      {isDark ? (
        <span className="flex items-center justify-center rounded-md bg-white p-1">
          <LogoMark className="h-7" />
        </span>
      ) : (
        <LogoMark className="h-8" />
      )}
      <span className="flex flex-col leading-none">
        <span className="font-heading text-xl font-bold tracking-tight">
          <span className={isDark ? "text-white" : "text-navy"}>Kai</span>
          <span className="text-blue">Ri</span>
          <span className="text-gold">Ora</span>
        </span>
        {showTagline ? (
          <span className="mt-1 flex items-center gap-1.5">
            <span className="h-px w-3 bg-blue" aria-hidden />
            <span
              className={cn(
                "text-[9px] font-semibold uppercase tracking-[0.18em]",
                isDark ? "text-white/80" : "text-charcoal",
              )}
            >
              People. AI. Growth.
            </span>
            <span className="h-px w-3 bg-gold" aria-hidden />
          </span>
        ) : null}
      </span>
    </span>
  )
}
