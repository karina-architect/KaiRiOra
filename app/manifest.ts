import type { MetadataRoute } from "next"
import { SITE_NAME } from "@/lib/i18n/config"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_NAME} — European Payroll, Workforce & Compliance`,
    short_name: SITE_NAME,
    description:
      "Payroll, workforce and compliance solutions for professionals and businesses across Europe.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0a1d3a",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  }
}
