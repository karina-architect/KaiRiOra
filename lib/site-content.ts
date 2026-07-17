import type { Locale } from "@/lib/i18n/config"

/**
 * Locale-aware content for the new navigation + homepage sections.
 *
 * This lives outside the strict `Dictionary` type so we can add brand-new
 * marketing content without rewriting all seven typed dictionaries. Short,
 * high-visibility strings are translated for every locale; longer descriptive
 * bodies fall back to English (acceptable for brand-new sections and it does
 * not remove any existing translations elsewhere on the site).
 */

type Localized = Partial<Record<Locale, string>> & { en: string }

function t(locale: Locale, m: Localized): string {
  return m[locale] ?? m.en
}

export interface NavLeaf {
  label: string
  href: string
}

export interface NavNode {
  label: string
  href: string
  children?: NavLeaf[]
}

/** Top-level nav labels (translated). */
const navLabels = {
  payroll: {
    en: "Payroll & Employment",
    es: "Nómina y Empleo",
    pt: "Folha e Emprego",
    fr: "Paie & Emploi",
    de: "Payroll & Personal",
    ru: "Зарплата и найм",
    hu: "Bér és foglalkoztatás",
  },
  dataAi: {
    en: "Data & AI",
    es: "Datos e IA",
    pt: "Dados e IA",
    fr: "Data & IA",
    de: "Daten & KI",
    ru: "Данные и ИИ",
    hu: "Adat & MI",
  },
  agile: {
    en: "Agile",
    es: "Ágil",
    pt: "Ágil",
    fr: "Agile",
    de: "Agile",
    ru: "Agile",
    hu: "Agilis",
  },
  forBusinesses: {
    en: "For Businesses",
    es: "Para Empresas",
    pt: "Para Empresas",
    fr: "Entreprises",
    de: "Für Unternehmen",
    ru: "Для бизнеса",
    hu: "Vállalatoknak",
  },
  forConsultants: {
    en: "For Consultants",
    es: "Para Consultores",
    pt: "Para Consultores",
    fr: "Consultants",
    de: "Für Berater",
    ru: "Для консультантов",
    hu: "Tanácsadóknak",
  },
  countries: {
    en: "Countries",
    es: "Países",
    pt: "Países",
    fr: "Pays",
    de: "Länder",
    ru: "Страны",
    hu: "Országok",
  },
  resources: {
    en: "Resources",
    es: "Recursos",
    pt: "Recursos",
    fr: "Ressources",
    de: "Ressourcen",
    ru: "Ресурсы",
    hu: "Erőforrások",
  },
  about: {
    en: "About",
    es: "Nosotros",
    pt: "Sobre",
    fr: "À Propos",
    de: "Über uns",
    ru: "О нас",
    hu: "Rólunk",
  },
  contact: {
    en: "Contact",
    es: "Contacto",
    pt: "Contacto",
    fr: "Contact",
    de: "Kontakt",
    ru: "Контакты",
    hu: "Kapcsolat",
  },
} satisfies Record<string, Localized>

/** Dropdown group titles (translated, full brand names). */
const groupTitles = {
  payroll: {
    en: "Payroll & Employment Services",
    es: "Nómina y Servicios de Empleo",
    pt: "Folha de Pagamento e Emprego",
    fr: "Paie & Services d'Emploi",
    de: "Payroll & Personaldienste",
    ru: "Зарплата и услуги по найму",
    hu: "Bérszámfejtés és foglalkoztatás",
  },
  dataAi: {
    en: "Data & AI Adoption",
    es: "Adopción de Datos e IA",
    pt: "Adoção de Dados e IA",
    fr: "Adoption Data & IA",
    de: "Daten- & KI-Einführung",
    ru: "Внедрение данных и ИИ",
    hu: "Adat- és MI-bevezetés",
  },
  agile: {
    en: "Agile Transformation",
    es: "Transformación Ágil",
    pt: "Transformação Ágil",
    fr: "Transformation Agile",
    de: "Agile Transformation",
    ru: "Agile-трансформация",
    hu: "Agilis átalakulás",
  },
  countries: {
    en: "Countries",
    es: "Países",
    pt: "Países",
    fr: "Pays",
    de: "Länder",
    ru: "Страны",
    hu: "Országok",
  },
  resources: {
    en: "Resources",
    es: "Recursos",
    pt: "Recursos",
    fr: "Ressources",
    de: "Ressourcen",
    ru: "Ресурсы",
    hu: "Erőforrások",
  },
} satisfies Record<string, Localized>

const CORE = "/#core-services"

/** Sub-items are product/service names kept in English across locales (common B2B practice). */
const payrollChildren: NavLeaf[] = [
  { label: "Employer of Record (EOR)", href: CORE },
  { label: "Payroll Administration", href: CORE },
  { label: "Contractor Management", href: CORE },
  { label: "Recruitment", href: CORE },
  { label: "Staff Augmentation", href: CORE },
  { label: "HR Administration", href: CORE },
  { label: "Work & Residence Permit Support", href: CORE },
]

const dataAiChildren: NavLeaf[] = [
  { label: "AI Strategy", href: CORE },
  { label: "AI Readiness Assessment", href: CORE },
  { label: "Data Strategy", href: CORE },
  { label: "Data Governance", href: CORE },
  { label: "Data Engineering", href: CORE },
  { label: "Business Intelligence & Analytics", href: CORE },
  { label: "AI Automation", href: CORE },
  { label: "AI Training & Workshops", href: CORE },
]

const agileChildren: NavLeaf[] = [
  { label: "Agile Coaching", href: CORE },
  { label: "Scrum & Kanban", href: CORE },
  { label: "PMO Transformation", href: CORE },
  { label: "Delivery Management", href: CORE },
  { label: "Product Management", href: CORE },
  { label: "Change Management", href: CORE },
  { label: "Team Enablement", href: CORE },
]

const countryChildren: NavLeaf[] = [
  { label: "Spain", href: "/countries/spain" },
  { label: "Portugal", href: "/countries/portugal" },
  { label: "Belgium", href: "/countries/belgium" },
  { label: "France", href: "/countries/france" },
  { label: "Germany", href: "/countries/germany" },
  { label: "Netherlands", href: "/countries/netherlands" },
  { label: "Hungary", href: "/countries/hungary" },
  { label: "Other European Countries", href: "/countries" },
]

const resourceChildren: NavLeaf[] = [
  { label: "Salary Calculator", href: "/tools/salary-calculator" },
  { label: "Employer Cost Calculator", href: "/tools/salary-calculator" },
  { label: "Labour Law Guide", href: "/tools/ai-assistant" },
  { label: "Blog", href: "/#core-services" },
  { label: "FAQs", href: "/tools/ai-assistant" },
]

export interface NavContent {
  items: NavNode[]
  login: string
  getStarted: string
}

export function getNav(locale: Locale): NavContent {
  return {
    items: [
      { label: t(locale, groupTitles.payroll), href: CORE, children: payrollChildren },
      { label: t(locale, groupTitles.dataAi), href: CORE, children: dataAiChildren },
      { label: t(locale, groupTitles.agile), href: CORE, children: agileChildren },
      { label: t(locale, navLabels.forBusinesses), href: CORE },
      { label: t(locale, navLabels.forConsultants), href: CORE },
      { label: t(locale, groupTitles.countries), href: "/countries", children: countryChildren },
      { label: t(locale, groupTitles.resources), href: CORE, children: resourceChildren },
      { label: t(locale, navLabels.about), href: "/#about" },
      { label: t(locale, navLabels.contact), href: "/contact" },
    ],
    login: t(locale, {
      en: "Log In",
      es: "Iniciar sesión",
      pt: "Entrar",
      fr: "Connexion",
      de: "Anmelden",
      ru: "Войти",
      hu: "Belépés",
    }),
    getStarted: t(locale, {
      en: "Get Started",
      es: "Empezar",
      pt: "Começar",
      fr: "Commencer",
      de: "Loslegen",
      ru: "Начать",
      hu: "Kezdés",
    }),
  }
}

/** Compact top-level labels used in the desktop bar (translated). */
export function getNavBarLabels(locale: Locale): string[] {
  return [
    t(locale, navLabels.payroll),
    t(locale, navLabels.dataAi),
    t(locale, navLabels.agile),
    t(locale, navLabels.forBusinesses),
    t(locale, navLabels.forConsultants),
    t(locale, navLabels.countries),
    t(locale, navLabels.resources),
    t(locale, navLabels.about),
    t(locale, navLabels.contact),
  ]
}

export interface HeroContent {
  line1: string
  line2: string
  paragraph: string
  ctaPrimary: string
  ctaSecondary: string
  pillars: string[]
}

export function getHero(locale: Locale): HeroContent {
  return {
    line1: t(locale, {
      en: "Three Core Services.",
      es: "Tres servicios esenciales.",
      pt: "Três serviços essenciais.",
      fr: "Trois services essentiels.",
      de: "Drei Kernleistungen.",
      ru: "Три ключевые услуги.",
      hu: "Három alapszolgáltatás.",
    }),
    line2: t(locale, {
      en: "One Trusted Partner for European Business Growth.",
      es: "Un socio de confianza para el crecimiento empresarial en Europa.",
      pt: "Um parceiro de confiança para o crescimento empresarial na Europa.",
      fr: "Un partenaire de confiance pour la croissance des entreprises en Europe.",
      de: "Ein vertrauensvoller Partner für Unternehmenswachstum in Europa.",
      ru: "Надёжный партнёр для роста бизнеса в Европе.",
      hu: "Egy megbízható partner az európai üzleti növekedéshez.",
    }),
    paragraph: t(locale, {
      en: "KaiRiOra helps businesses grow through Payroll & Employment Services, Data & AI Adoption, and Agile Transformation, delivering practical workforce, technology and transformation solutions across Europe.",
      es: "KaiRiOra ayuda a las empresas a crecer mediante Nómina y Servicios de Empleo, Adopción de Datos e IA y Transformación Ágil, ofreciendo soluciones prácticas de personal, tecnología y transformación en toda Europa.",
      pt: "A KaiRiOra ajuda as empresas a crescer através de Folha de Pagamento e Emprego, Adoção de Dados e IA e Transformação Ágil, oferecendo soluções práticas de força de trabalho, tecnologia e transformação em toda a Europa.",
      fr: "KaiRiOra aide les entreprises à croître grâce à la Paie et aux Services d'Emploi, à l'Adoption des Données et de l'IA et à la Transformation Agile, en proposant des solutions concrètes de main-d'œuvre, de technologie et de transformation à travers l'Europe.",
      de: "KaiRiOra unterstützt Unternehmen beim Wachstum durch Payroll- & Personaldienste, Daten- & KI-Einführung und Agile Transformation – mit praxisnahen Lösungen für Personal, Technologie und Transformation in ganz Europa.",
      ru: "KaiRiOra помогает компаниям расти с помощью услуг по расчёту зарплаты и найму, внедрению данных и ИИ и Agile-трансформации, предоставляя практичные решения для персонала, технологий и преобразований по всей Европе.",
      hu: "A KaiRiOra a bérszámfejtés és foglalkoztatás, az adat- és MI-bevezetés, valamint az agilis átalakulás révén segíti a vállalatok növekedését, gyakorlati munkaerő-, technológiai és átalakulási megoldásokat nyújtva Európa-szerte.",
    }),
    ctaPrimary: t(locale, {
      en: "Explore Our Services",
      es: "Explorar servicios",
      pt: "Explorar serviços",
      fr: "Découvrir nos services",
      de: "Leistungen entdecken",
      ru: "Наши услуги",
      hu: "Szolgáltatásaink",
    }),
    ctaSecondary: t(locale, {
      en: "Book a Consultation",
      es: "Reservar consulta",
      pt: "Agendar consulta",
      fr: "Réserver une consultation",
      de: "Beratung buchen",
      ru: "Записаться на консультацию",
      hu: "Konzultáció foglalása",
    }),
    pillars: [
      t(locale, groupTitles.payroll),
      t(locale, groupTitles.dataAi),
      t(locale, groupTitles.agile),
    ],
  }
}

export interface CoreCard {
  title: string
  desc: string
  button: string
  href: string
  items: string[]
}

export interface CoreContent {
  heading: string
  subheading: string
  cards: CoreCard[]
}

export function getCoreServices(locale: Locale): CoreContent {
  return {
    heading: t(locale, {
      en: "Our Core Services",
      es: "Nuestros servicios esenciales",
      pt: "Os nossos serviços essenciais",
      fr: "Nos services essentiels",
      de: "Unsere Kernleistungen",
      ru: "Наши ключевые услуги",
      hu: "Alapszolgáltatásaink",
    }),
    subheading: t(locale, {
      en: "Three specialised practices, one accountable partner across Europe.",
      es: "Tres áreas especializadas, un único socio responsable en toda Europa.",
      pt: "Três áreas especializadas, um único parceiro responsável em toda a Europa.",
      fr: "Trois expertises spécialisées, un seul partenaire responsable à travers l'Europe.",
      de: "Drei spezialisierte Bereiche, ein verantwortlicher Partner in ganz Europa.",
      ru: "Три специализированных направления, один ответственный партнёр по всей Европе.",
      hu: "Három szakterület, egyetlen felelős partner Európa-szerte.",
    }),
    cards: [
      {
        title: t(locale, groupTitles.payroll),
        desc: "Helping businesses hire, manage and pay employees and contractors across Europe through Payroll Administration, Employer of Record (EOR), Contractor Management, Recruitment, Staff Augmentation and Work & Residence Permit Support.",
        button: t(locale, {
          en: "Explore Payroll Services",
          es: "Explorar servicios de nómina",
          pt: "Explorar serviços de folha",
          fr: "Découvrir la paie",
          de: "Payroll-Services entdecken",
          ru: "Услуги по зарплате",
          hu: "Bérszámfejtés",
        }),
        href: "/#services",
        items: [
          "Payroll Administration",
          "Employer of Record (EOR)",
          "Contractor Management",
          "Recruitment & Staff Augmentation",
          "Work & Residence Permit Support",
        ],
      },
      {
        title: t(locale, groupTitles.dataAi),
        desc: "Helping organisations define their data strategy, build modern data platforms, adopt AI responsibly and automate business processes through Data Strategy, Data Engineering, Data Governance, Analytics, AI Consulting and AI Training.",
        button: t(locale, {
          en: "Explore Data & AI",
          es: "Explorar Datos e IA",
          pt: "Explorar Dados e IA",
          fr: "Découvrir Data & IA",
          de: "Daten & KI entdecken",
          ru: "Данные и ИИ",
          hu: "Adat & MI",
        }),
        href: "/#services",
        items: [
          "Data & AI Strategy",
          "Data Engineering & Platforms",
          "Data Governance",
          "BI & Analytics",
          "AI Automation & Training",
        ],
      },
      {
        title: t(locale, groupTitles.agile),
        desc: "Helping organisations improve business delivery through Agile Coaching, Scrum & Kanban, PMO Transformation, Product Management, Delivery Management, Change Management and Team Enablement.",
        button: t(locale, {
          en: "Explore Agile Services",
          es: "Explorar servicios ágiles",
          pt: "Explorar serviços ágeis",
          fr: "Découvrir l'agilité",
          de: "Agile Services entdecken",
          ru: "Agile-услуги",
          hu: "Agilis szolgáltatások",
        }),
        href: "/#services",
        items: [
          "Agile Coaching",
          "Scrum & Kanban",
          "PMO Transformation",
          "Product & Delivery Management",
          "Change Management & Team Enablement",
        ],
      },
    ],
  }
}

export interface StatItem {
  value: string
  label: string
}

export interface StatsContent {
  eyebrow: string
  items: StatItem[]
}

export function getStats(locale: Locale): StatsContent {
  return {
    eyebrow: t(locale, {
      en: "KaiRiOra at a glance",
      es: "KaiRiOra de un vistazo",
      pt: "KaiRiOra num relance",
      fr: "KaiRiOra en un coup d'œil",
      de: "KaiRiOra auf einen Blick",
      ru: "KaiRiOra кратко",
      hu: "KaiRiOra röviden",
    }),
    items: [
      {
        value: "3",
        label: t(locale, {
          en: "Core Service Areas",
          es: "Áreas de servicio principales",
          pt: "Áreas de serviço principais",
          fr: "Domaines de services clés",
          de: "Kern-Leistungsbereiche",
          ru: "Ключевые направления",
          hu: "Fő szolgáltatási területek",
        }),
      },
      {
        value: t(locale, {
          en: "Europe-wide",
          es: "Toda Europa",
          pt: "Toda a Europa",
          fr: "Toute l'Europe",
          de: "Europaweit",
          ru: "По всей Европе",
          hu: "Európa-szerte",
        }),
        label: t(locale, {
          en: "Delivery Coverage",
          es: "Cobertura de entrega",
          pt: "Cobertura de entrega",
          fr: "Couverture de service",
          de: "Leistungsabdeckung",
          ru: "Охват услуг",
          hu: "Szolgáltatási lefedettség",
        }),
      },
      {
        value: "Payroll · Data & AI · Agile",
        label: t(locale, {
          en: "Our Three Pillars",
          es: "Nuestros tres pilares",
          pt: "Os nossos três pilares",
          fr: "Nos trois piliers",
          de: "Unsere drei Säulen",
          ru: "Наши три опоры",
          hu: "Három pillérünk",
        }),
      },
      {
        value: t(locale, {
          en: "Businesses & Consultants",
          es: "Empresas y consultores",
          pt: "Empresas e consultores",
          fr: "Entreprises & consultants",
          de: "Unternehmen & Berater",
          ru: "Бизнес и консультанты",
          hu: "Vállalatok és tanácsadók",
        }),
        label: t(locale, {
          en: "Who We Serve",
          es: "A quién servimos",
          pt: "Quem servimos",
          fr: "Qui nous servons",
          de: "Wen wir betreuen",
          ru: "Кого мы обслуживаем",
          hu: "Kiket szolgálunk",
        }),
      },
    ],
  }
}
