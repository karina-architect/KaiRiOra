export const translations = {
  "en": {
    "home": "Home",
    "services": "Services",
    "countries": "Countries",
    "comparison": "Comparison",
    "dataAI": "Data & AI",
    "contact": "Contact Us",
    "hero1": "Work Anywhere in Europe.",
    "hero2": "Keep More of What You Earn.",
    "subtitle": "Payroll, relocation, AI-powered workforce solutions, advanced salary calculators, and Data & AI consulting for IT professionals, consultants, freelancers and businesses across Europe.",
    "calc": "Calculate My Net Income",
    "quote": "Get My Personal Quote",
    "why": "Why KaiRiOra?"
  },
  "fr": {
    "home": "Accueil",
    "services": "Services",
    "countries": "Pays",
    "comparison": "Comparaison",
    "dataAI": "Data & IA",
    "contact": "Contact",
    "hero1": "Travaillez partout en Europe.",
    "hero2": "Gardez davantage de vos revenus.",
    "subtitle": "Paie, relocation, solutions workforce basées sur l’IA, calculateurs de salaire avancés et conseil Data & IA pour professionnels IT, consultants, freelances et entreprises en Europe.",
    "calc": "Calculer mon revenu net",
    "quote": "Obtenir mon devis",
    "why": "Pourquoi KaiRiOra?"
  },
  "nl": {
    "home": "Home",
    "services": "Diensten",
    "countries": "Landen",
    "comparison": "Vergelijking",
    "dataAI": "Data & AI",
    "contact": "Contact",
    "hero1": "Werk overal in Europa.",
    "hero2": "Houd meer over van wat u verdient.",
    "subtitle": "Payroll, relocatie, AI-gedreven workforce oplossingen, geavanceerde salariscalculators en Data & AI consulting voor IT-professionals, consultants, freelancers en bedrijven in Europa.",
    "calc": "Bereken mijn netto inkomen",
    "quote": "Vraag mijn offerte aan",
    "why": "Waarom KaiRiOra?"
  },
  "es": {
    "home": "Inicio",
    "services": "Servicios",
    "countries": "Países",
    "comparison": "Comparación",
    "dataAI": "Data & IA",
    "contact": "Contacto",
    "hero1": "Trabaja desde cualquier lugar de Europa.",
    "hero2": "Conserva más de lo que ganas.",
    "subtitle": "Nómina, relocación, soluciones laborales con IA, calculadoras salariales avanzadas y consultoría Data & AI para profesionales IT, consultores, freelancers y empresas en Europa.",
    "calc": "Calcular mi ingreso neto",
    "quote": "Solicitar presupuesto",
    "why": "Por qué KaiRiOra?"
  },
  "pt": {
    "home": "Início",
    "services": "Serviços",
    "countries": "Países",
    "comparison": "Comparação",
    "dataAI": "Data & IA",
    "contact": "Contacto",
    "hero1": "Trabalhe em qualquer lugar da Europa.",
    "hero2": "Fique com mais do que ganha.",
    "subtitle": "Payroll, relocalização, soluções de força de trabalho com IA, calculadoras salariais avançadas e consultoria Data & AI para profissionais de TI, consultores, freelancers e empresas na Europa.",
    "calc": "Calcular rendimento líquido",
    "quote": "Pedir proposta",
    "why": "Porquê KaiRiOra?"
  },
  "ru": {
    "home": "Главная",
    "services": "Услуги",
    "countries": "Страны",
    "comparison": "Сравнение",
    "dataAI": "Data & AI",
    "contact": "Связаться",
    "hero1": "Работайте в любой стране Европы.",
    "hero2": "Сохраняйте больше из заработанного.",
    "subtitle": "Payroll, релокация, AI‑решения для работы, расширенные калькуляторы зарплаты и Data & AI консалтинг для IT‑специалистов, консультантов, фрилансеров и компаний в Европе.",
    "calc": "Рассчитать чистый доход",
    "quote": "Получить персональный расчёт",
    "why": "Почему KaiRiOra?"
  }
} as const;
export type Lang = keyof typeof translations;
export const languages = ["en","fr","nl","es","pt","ru"] as const;
export const countries = [
  "spain",
  "portugal",
  "belgium",
  "netherlands",
  "germany",
  "france",
  "ireland",
  "luxembourg",
  "switzerland",
  "italy",
  "austria",
  "poland",
  "sweden",
  "denmark",
  "finland",
  "czechia",
  "estonia",
  "malta"
] as const;
export const countryNames = {
  "spain": "Spain",
  "portugal": "Portugal",
  "belgium": "Belgium",
  "netherlands": "Netherlands",
  "germany": "Germany",
  "france": "France",
  "ireland": "Ireland",
  "luxembourg": "Luxembourg",
  "switzerland": "Switzerland",
  "italy": "Italy",
  "austria": "Austria",
  "poland": "Poland",
  "sweden": "Sweden",
  "denmark": "Denmark",
  "finland": "Finland",
  "czechia": "Czechia",
  "estonia": "Estonia",
  "malta": "Malta"
} as const;
export const countryData = {
  "spain": {
    "flag": "🇪🇸",
    "net": 58124,
    "tax": 27.3,
    "adv": "Spain is a priority KaiRiOra destination. For eligible inbound professionals, the Beckham Law may offer a simplified 24% flat tax regime on Spanish employment income up to the legal threshold, with strong lifestyle, schools and tech hubs."
  },
  "portugal": {
    "flag": "🇵🇹",
    "net": 56231,
    "tax": 29.7,
    "adv": "Portugal is a priority KaiRiOra destination. It is attractive for digital professionals through residence pathways, international communities and potential NHR 2.0 eligibility for qualifying high-value activities."
  },
  "belgium": {
    "flag": "🇧🇪",
    "net": 39370,
    "tax": 50.8,
    "adv": "Belgium has strong rates and demand for IT consultants, but the employee tax and social contribution burden is high compared with Spain and Portugal scenarios."
  },
  "netherlands": {
    "flag": "🇳🇱",
    "net": 41011,
    "tax": 48.7,
    "adv": "The Netherlands has a strong tech economy and may offer the 30% ruling for eligible employees, but standard taxation remains high."
  },
  "germany": {
    "flag": "🇩🇪",
    "net": 37143,
    "tax": 53.6,
    "adv": "Germany has a major tech market and enterprise demand, but employment costs and tax burden can be higher than Spain and Portugal."
  },
  "france": {
    "flag": "🇫🇷",
    "net": 32205,
    "tax": 59.7,
    "adv": "France has strong business opportunities, but payroll costs and administrative complexity can be significant."
  },
  "ireland": {
    "flag": "🇮🇪",
    "net": 48800,
    "tax": 39.0,
    "adv": "Ireland is a strong tech hub with international employers, but housing and living costs can be high."
  },
  "luxembourg": {
    "flag": "🇱🇺",
    "net": 51200,
    "tax": 36.0,
    "adv": "Luxembourg can offer strong compensation and financial-sector opportunities, but costs are high and cross-border planning matters."
  },
  "switzerland": {
    "flag": "🇨🇭",
    "net": 55200,
    "tax": 31.0,
    "adv": "Switzerland can provide high salaries and lower tax in some cantons, but it is outside the EU and requires separate residence and permit analysis."
  },
  "italy": {
    "flag": "🇮🇹",
    "net": 42400,
    "tax": 47.0,
    "adv": "Italy may offer special inbound regimes, but standard payroll complexity requires careful planning."
  },
  "austria": {
    "flag": "🇦🇹",
    "net": 40800,
    "tax": 49.0,
    "adv": "Austria has high quality of life and strong employment protections, with a higher tax and contribution burden."
  },
  "poland": {
    "flag": "🇵🇱",
    "net": 52800,
    "tax": 34.0,
    "adv": "Poland can be cost-effective for technology delivery, outsourcing and contractor models."
  },
  "sweden": {
    "flag": "🇸🇪",
    "net": 45600,
    "tax": 43.0,
    "adv": "Sweden has a mature digital economy and strong labour protections, with higher costs than Southern Europe."
  },
  "denmark": {
    "flag": "🇩🇰",
    "net": 44000,
    "tax": 45.0,
    "adv": "Denmark is attractive for quality of life and high-value roles, with significant tax levels."
  },
  "finland": {
    "flag": "🇫🇮",
    "net": 44800,
    "tax": 44.0,
    "adv": "Finland offers strong digital capability and stable institutions, with moderate-to-high taxation."
  },
  "czechia": {
    "flag": "🇨🇿",
    "net": 54400,
    "tax": 32.0,
    "adv": "Czechia can be attractive for tech delivery, moderate costs and central European access."
  },
  "estonia": {
    "flag": "🇪🇪",
    "net": 57600,
    "tax": 28.0,
    "adv": "Estonia is digitally advanced and founder-friendly, with strong e-residency reputation."
  },
  "malta": {
    "flag": "🇲🇹",
    "net": 60000,
    "tax": 25.0,
    "adv": "Malta can be attractive for international professionals, but eligibility and substance rules matter."
  }
} as const;
export const services = [
  "Payroll & EOR",
  "Contractor Management",
  "Recruitment",
  "Staff Augmentation",
  "Workforce Administration",
  "IT Consulting",
  "Data Consulting",
  "AI Consulting",
  "AI Training & Workshops"
] as const;
