import "server-only"
import type { Locale } from "./config"
import type { Dictionary } from "./dictionaries/en"

const dictionaries: Record<Locale, () => Promise<{ default: Dictionary }>> = {
  en: () => import("./dictionaries/en"),
  es: () => import("./dictionaries/es"),
  pt: () => import("./dictionaries/pt"),
  fr: () => import("./dictionaries/fr"),
  de: () => import("./dictionaries/de"),
  ru: () => import("./dictionaries/ru"),
  hu: () => import("./dictionaries/hu"),
}

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  const load = dictionaries[locale] ?? dictionaries.en
  const mod = await load()
  return mod.default
}

export type { Dictionary } from "./dictionaries/en"
