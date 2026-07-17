import { cn } from "@/lib/utils"

interface LogoProps {
  variant?: "light" | "dark"
  showTagline?: boolean
  className?: string
}

/**
 * KaiRiOra "KRo" monogram: a bold K whose upper arm sweeps up in a navy→blue
 * gradient, resolving into a gold "o" ring at the lower right.
 * "light" is for light backgrounds (navy strokes); "dark" is for navy
 * backgrounds (white strokes). The gold accent is constant in both.
 */
export function LogoMark({
  variant = "light",
  className,
}: {
  variant?: "light" | "dark"
  className?: string
}) {
  const isDark = variant === "dark"
  const stroke = isDark ? "#ffffff" : "#0a1d3a"
  const gradId = `kro-sweep-${variant}`
  const sweepStart = isDark ? "#ffffff" : "#0a1d3a"
  const sweepEnd = isDark ? "#5b93f6" : "#1558d6"

  return (
    <svg
      viewBox="0 0 64 64"
      className={cn("h-9 w-9", className)}
      role="img"
      aria-label="KaiRiOra"
      fill="none"
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor={sweepStart} />
          <stop offset="1" stopColor={sweepEnd} />
        </linearGradient>
      </defs>

      {/* K spine */}
      <path d="M14 9V55" stroke={stroke} strokeWidth="6" strokeLinecap="round" />

      {/* Upper arm — tall elegant sweep in the navy→blue gradient */}
      <path
        d="M14 33C25 27 35 19 41 7"
        stroke={`url(#${gradId})`}
        strokeWidth="6"
        strokeLinecap="round"
      />

      {/* Lower arm flowing toward the gold o */}
      <path d="M14 33L31 51" stroke={stroke} strokeWidth="6" strokeLinecap="round" />

      {/* Gold "o" ring */}
      <circle cx="45" cy="46" r="9" stroke="#d4a24c" strokeWidth="5" />
    </svg>
  )
}

export function Logo({ variant = "light", showTagline = true, className }: LogoProps) {
  const isDark = variant === "dark"
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <LogoMark variant={variant} />
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
