import type { MetadataRoute } from "next"
import { locales, SITE_URL } from "@/lib/i18n/config"
import { languageAlternates } from "@/lib/seo"
import { countries } from "@/lib/countries"

/**
 * Indexable routes with a crawl priority reflecting commercial value.
 * Legal pages are deliberately excluded: they are set to noindex, and listing
 * noindex URLs in a sitemap sends search engines contradictory instructions.
 */
const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/services/data-ai-adoption", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/workforce-business", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/agile-transformation", priority: 0.9, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.8, changeFrequency: "yearly" },
  { path: "/countries", priority: 0.7, changeFrequency: "monthly" },
  { path: "/tools/salary-calculator", priority: 0.6, changeFrequency: "monthly" },
  { path: "/tools/ai-assistant", priority: 0.6, changeFrequency: "monthly" },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const entries: MetadataRoute.Sitemap = []

  const allRoutes = [
    ...routes,
    ...countries.map((c) => ({
      path: `/countries/${c.slug}`,
      priority: 0.7,
      changeFrequency: "monthly" as const,
    })),
  ]

  for (const route of allRoutes) {
    for (const locale of locales) {
      entries.push({
        url: `${SITE_URL}/${locale}${route.path}`,
        lastModified: now,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
        alternates: { languages: languageAlternates(route.path) },
      })
    }
  }

  return entries
}
