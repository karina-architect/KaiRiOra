import type { MetadataRoute } from "next"
import { locales, SITE_URL } from "@/lib/i18n/config"
import { countries } from "@/lib/countries"

const staticPaths = [
  "",
  "/contact",
  "/services/workforce-business",
  "/services/data-ai-adoption",
  "/services/agile-transformation",
  "/countries",
  "/tools/salary-calculator",
  "/tools/ai-assistant",
  "/legal/privacy",
  "/legal/terms",
  "/legal/notice",
  "/legal/cookies",
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const entries: MetadataRoute.Sitemap = []

  const allPaths = [...staticPaths, ...countries.map((c) => `/countries/${c.slug}`)]

  for (const path of allPaths) {
    for (const locale of locales) {
      const languages: Record<string, string> = {}
      for (const l of locales) languages[l] = `${SITE_URL}/${l}${path}`
      entries.push({
        url: `${SITE_URL}/${locale}${path}`,
        lastModified: now,
        changeFrequency: path === "" ? "weekly" : "monthly",
        priority: path === "" ? 1 : 0.7,
        alternates: { languages },
      })
    }
  }

  return entries
}
