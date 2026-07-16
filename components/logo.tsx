import { cn } from "@/lib/utils"

interface LogoProps {
  variant?: "light" | "dark"
  showTagline?: boolean
  className?: string
}

/**
 * KaiRiOra brand mark: an orbit monogram "K" with the wordmark and tagline.
 * "light" variant is for light backgrounds (navy text); "dark" for navy backgrounds (white text).
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={cn("h-9 w-9", className)}
      role="img"
      aria-label="KaiRiOra"
      fill="none"
    >
      {/* Orbit ring */}
      <ellipse
        cx="24"
        cy="24"
        rx="21"
        ry="14"
        transform="rotate(-30 24 24)"
        stroke="#d4a24c"
        strokeWidth="2.5"
      />
      {/* K strokes */}
      <path d="M16 12v24" stroke="#1558d6" strokeWidth="4" strokeLinecap="round" />
      <path
        d="M32 12 18 24l14 12"
        stroke="#0a1d3a"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Accent dots on the orbit */}
      <circle cx="42" cy="17" r="3" fill="#d4a24c" />
      <circle cx="6" cy="31" r="2.5" fill="#1558d6" />
    </svg>
  )
}

export function Logo({ variant = "light", showTagline = true, className }: LogoProps) {
  const isDark = variant === "dark"
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <LogoMark />
      <span className="flex flex-col leading-none">
        <span className="font-heading text-xl font-bold tracking-tight">
          <span className={isDark ? "text-white" : "text-navy"}>Kai</span>
          <span className="text-gold">Ri</span>
          <span className={isDark ? "text-white" : "text-navy"}>Ora</span>
        </span>
        {showTagline ? (
          <span
            className={cn(
              "mt-0.5 text-[9px] font-semibold uppercase tracking-[0.18em]",
              isDark ? "text-gold/90" : "text-gold",
            )}
          >
            People. AI. Growth.
          </span>
        ) : null}
      </span>
    </span>
  )
}
