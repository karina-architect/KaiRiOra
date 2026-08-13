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
  workforce: {
    en: "Workforce & Business Services",
    es: "Servicios Laborales y Empresariales",
    pt: "Serviços de Força de Trabalho e Negócios",
    fr: "Services RH & Entreprise",
    de: "Personal- & Unternehmensdienste",
    ru: "Кадровые и бизнес-услуги",
    hu: "Munkaerő- és üzleti szolgáltatások",
  },
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

const learnMoreLabel: Localized = {
  en: "Learn More",
  es: "Saber más",
  pt: "Saiba mais",
  fr: "En savoir plus",
  de: "Mehr erfahren",
  ru: "Подробнее",
  hu: "Tudjon meg többet",
}

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

/**
 * Simplified, always-visible primary navigation: the three core services
 * (each links directly to its service page) plus Contact. No dropdowns.
 */
export function getPrimaryNav(locale: Locale): NavLeaf[] {
  return [
    { label: t(locale, groupTitles.dataAi), href: "/services/data-ai-adoption" },
    { label: t(locale, groupTitles.workforce), href: "/services/workforce-business" },
    { label: t(locale, groupTitles.agile), href: "/services/agile-transformation" },
    { label: t(locale, navLabels.contact), href: "/contact" },
  ]
}

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
      en: "KaiRiOra helps organisations grow through Data & AI Adoption, Workforce & Business Services and Agile Transformation, delivering practical business solutions across Europe.",
      es: "KaiRiOra ayuda a las organizaciones a crecer mediante Adopción de Datos e IA, Servicios Laborales y Empresariales y Transformación Ágil, ofreciendo soluciones empresariales prácticas en toda Europa.",
      pt: "A KaiRiOra ajuda as organizações a crescer através de Adoção de Dados e IA, Serviços de Força de Trabalho e Negócios e Transformação Ágil, oferecendo soluções empresariais práticas em toda a Europa.",
      fr: "KaiRiOra aide les organisations à croître grâce à l'Adoption des Données et de l'IA, aux Services RH & Entreprise et à la Transformation Agile, en proposant des solutions concrètes à travers l'Europe.",
      de: "KaiRiOra unterstützt Organisationen beim Wachstum durch Daten- & KI-Einführung, Personal- & Unternehmensdienste und Agile Transformation – mit praxisnahen Geschäftslösungen in ganz Europa.",
      ru: "KaiRiOra помогает организациям расти с помощью внедрения данных и ИИ, кадровых и бизнес-услуг и Agile-трансформации, предоставляя практичные бизнес-решения по всей Европе.",
      hu: "A KaiRiOra az adat- és MI-bevezetés, a munkaerő- és üzleti szolgáltatások, valamint az agilis átalakulás révén segíti a szervezetek növekedését, gyakorlati üzleti megoldásokat nyújtva Európa-szerte.",
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
      t(locale, groupTitles.dataAi),
      t(locale, groupTitles.workforce),
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
        title: t(locale, groupTitles.dataAi),
        desc: "AI Strategy, Data Strategy, Data Governance, Data Engineering, Analytics, AI Automation and AI Training.",
        button: t(locale, learnMoreLabel),
        href: "/services/data-ai-adoption",
        items: [
          "AI & Data Strategy",
          "Data Engineering & Platforms",
          "Data Governance",
          "BI & Analytics",
          "AI Automation & Training",
        ],
      },
      {
        title: t(locale, groupTitles.workforce),
        desc: "Payroll, Employer of Record, Accounting, HR, Recruitment, Staff Augmentation, Contractor Management and Workforce Administration.",
        button: t(locale, learnMoreLabel),
        href: "/services/workforce-business",
        items: [
          "Payroll Administration & EOR",
          "Accounting & Bookkeeping",
          "Contractor Management",
          "Recruitment & Staff Augmentation",
          "HR & Work Permit Support",
        ],
      },
      {
        title: t(locale, groupTitles.agile),
        desc: "Agile Coaching, Scrum, PMO Transformation, Delivery Management, Product Management and Change Management.",
        button: t(locale, learnMoreLabel),
        href: "/services/agile-transformation",
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

export type DataAiIcon =
  | "strategy"
  | "readiness"
  | "dataStrategy"
  | "governance"
  | "engineering"
  | "analytics"
  | "automation"
  | "training"

export interface DataAiService {
  icon: DataAiIcon
  title: string
  desc: string
}

export interface DataAiPageContent {
  title: string
  hero: string
  supporting: string
  ctaPrimary: string
  ctaSecondary: string
  sectionHeading: string
  learnMore: string
  services: DataAiService[]
}

export function getDataAiPage(locale: Locale): DataAiPageContent {
  return {
    title: t(locale, groupTitles.dataAi),
    hero: t(locale, {
      en: "Turn data into practical business value and adopt artificial intelligence with a clear, responsible and scalable approach.",
      es: "Convierta los datos en valor empresarial práctico y adopte la inteligencia artificial con un enfoque claro, responsable y escalable.",
      pt: "Transforme dados em valor prático para o negócio e adote inteligência artificial com uma abordagem clara, responsável e escalável.",
      fr: "Transformez vos données en valeur concrète et adoptez l'intelligence artificielle avec une approche claire, responsable et évolutive.",
      de: "Verwandeln Sie Daten in praktischen Geschäftswert und führen Sie künstliche Intelligenz mit einem klaren, verantwortungsvollen und skalierbaren Ansatz ein.",
      ru: "Превратите данные в практическую ценность для бизнеса и внедряйте искусственный интеллект с чётким, ответственным и масштабируемым подходом.",
      hu: "Alakítsa az adatokat gyakorlati üzleti értékké, és vezesse be a mesterséges intelligenciát világos, felelős és skálázható megközelítéssel.",
    }),
    supporting: t(locale, {
      en: "KaiRiOra helps organisations define their data and AI strategy, modernise data platforms, improve governance, automate processes and build the capabilities required for successful AI adoption.",
      es: "KaiRiOra ayuda a las organizaciones a definir su estrategia de datos e IA, modernizar plataformas de datos, mejorar la gobernanza, automatizar procesos y desarrollar las capacidades necesarias para una adopción exitosa de la IA.",
      pt: "A KaiRiOra ajuda as organizações a definir a sua estratégia de dados e IA, modernizar plataformas de dados, melhorar a governança, automatizar processos e desenvolver as capacidades necessárias para uma adoção bem-sucedida da IA.",
      fr: "KaiRiOra aide les organisations à définir leur stratégie data et IA, à moderniser leurs plateformes de données, à améliorer la gouvernance, à automatiser les processus et à développer les compétences nécessaires à une adoption réussie de l'IA.",
      de: "KaiRiOra unterstützt Organisationen dabei, ihre Daten- und KI-Strategie zu definieren, Datenplattformen zu modernisieren, Governance zu verbessern, Prozesse zu automatisieren und die für eine erfolgreiche KI-Einführung erforderlichen Fähigkeiten aufzubauen.",
      ru: "KaiRiOra помогает организациям определить стратегию данных и ИИ, модернизировать платформы данных, улучшить управление, автоматизировать процессы и развить возможности, необходимые для успешного внедрения ИИ.",
      hu: "A KaiRiOra segít a szervezeteknek meghatározni adat- és MI-stratégiájukat, korszerűsíteni az adatplatformokat, javítani az irányítást, automatizálni a folyamatokat és kiépíteni a sikeres MI-bevezetéshez szükséges képességeket.",
    }),
    ctaPrimary: t(locale, {
      en: "Book a Consultation",
      es: "Reservar consulta",
      pt: "Agendar consulta",
      fr: "Réserver une consultation",
      de: "Beratung buchen",
      ru: "Записаться на консультацию",
      hu: "Konzultáció foglalása",
    }),
    ctaSecondary: t(locale, {
      en: "Contact Us",
      es: "Contáctenos",
      pt: "Fale connosco",
      fr: "Nous contacter",
      de: "Kontakt aufnehmen",
      ru: "Связаться с нами",
      hu: "Kapcsolatfelvétel",
    }),
    sectionHeading: t(locale, {
      en: "Our Data & AI Adoption Services",
      es: "Nuestros servicios de adopción de datos e IA",
      pt: "Os nossos serviços de adoção de dados e IA",
      fr: "Nos services d'adoption Data & IA",
      de: "Unsere Services zur Daten- & KI-Einführung",
      ru: "Наши услуги по внедрению данных и ИИ",
      hu: "Adat- és MI-bevezetési szolgáltatásaink",
    }),
    learnMore: t(locale, {
      en: "Learn more",
      es: "Saber más",
      pt: "Saiba mais",
      fr: "En savoir plus",
      de: "Mehr erfahren",
      ru: "Подробнее",
      hu: "Tudjon meg többet",
    }),
    services: [
      {
        icon: "strategy",
        title: "AI Strategy",
        desc: "Define a practical AI roadmap aligned with business priorities, available data, organisational readiness and measurable outcomes.",
      },
      {
        icon: "readiness",
        title: "AI Readiness Assessment",
        desc: "Assess data quality, technology, governance, skills, processes and operating models to identify the organisation's readiness for AI adoption.",
      },
      {
        icon: "dataStrategy",
        title: "Data Strategy",
        desc: "Create a clear data strategy covering business objectives, target architecture, governance, analytics priorities and implementation planning.",
      },
      {
        icon: "governance",
        title: "Data Governance",
        desc: "Establish ownership, policies, standards, data quality controls, metadata management and responsible data usage across the organisation.",
      },
      {
        icon: "engineering",
        title: "Data Engineering",
        desc: "Design and build reliable data pipelines, integrations, lakehouses, warehouses and modern cloud-based data platforms.",
      },
      {
        icon: "analytics",
        title: "Business Intelligence & Analytics",
        desc: "Transform business data into useful dashboards, reports, performance indicators and decision-support insights.",
      },
      {
        icon: "automation",
        title: "AI Automation",
        desc: "Identify and implement AI-powered workflow automation, document processing, intelligent assistants and operational efficiency solutions.",
      },
      {
        icon: "training",
        title: "AI Training & Workshops",
        desc: "Deliver practical training, executive briefings and hands-on workshops covering AI fundamentals, generative AI, data literacy and business use cases.",
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

export interface HeroFlowStep {
  /** Stable key so the component can map its own icon and accent colour. */
  key: "dataAi" | "workforce" | "agile"
  title: string
  outcome: string
  href: string
}

export interface HeroInfographicContent {
  eyebrow: string
  imageAlt: string
  startLabel: string
  startValue: string
  steps: HeroFlowStep[]
  outcomeLabel: string
  outcomeValue: string
  footnote: string
}

/**
 * Content for the hero value-flow infographic.
 *
 * Deliberately makes only structural claims (three pillars, Europe-wide
 * delivery, single point of accountability) — all of which the site already
 * states elsewhere. No client counts, percentages or savings figures, since
 * inventing metrics for a real consultancy would be misleading.
 */
export function getHeroInfographic(locale: Locale): HeroInfographicContent {
  return {
    eyebrow: t(locale, {
      en: "How we create value",
      es: "Cómo creamos valor",
      pt: "Como criamos valor",
      fr: "Comment nous créons de la valeur",
      de: "Wie wir Wert schaffen",
      ru: "Как мы создаём ценность",
      hu: "Hogyan teremtünk értéket",
    }),
    imageAlt: t(locale, {
      en: "Diagram: starting from your business challenge, Data and AI adoption, workforce and business services, and agile transformation lead to sustainable business growth",
      es: "Diagrama: partiendo de su desafío empresarial, la adopción de datos e IA, los servicios de personal y negocio y la transformación ágil conducen a un crecimiento empresarial sostenible",
      pt: "Diagrama: a partir do seu desafio de negócio, a adoção de dados e IA, os serviços de pessoal e negócio e a transformação ágil conduzem a um crescimento sustentável",
      fr: "Schéma : en partant de votre défi commercial, l'adoption des données et de l'IA, les services RH et métiers et la transformation agile mènent à une croissance durable",
      de: "Diagramm: Ausgehend von Ihrer Geschäftsherausforderung führen Daten- und KI-Einführung, Personal- und Business-Services sowie agile Transformation zu nachhaltigem Unternehmenswachstum",
      ru: "Схема: начиная с вашей бизнес-задачи, внедрение данных и ИИ, кадровые и бизнес-услуги и гибкая трансформация ведут к устойчивому росту бизнеса",
      hu: "Diagram: az üzleti kihívásából kiindulva az adat- és MI-bevezetés, a munkaerő- és üzleti szolgáltatások, valamint az agilis transzformáció fenntartható üzleti növekedéshez vezet",
    }),
    startLabel: t(locale, {
      en: "Start with",
      es: "Empieza con",
      pt: "Comece com",
      fr: "Commencez par",
      de: "Beginnen mit",
      ru: "Начните с",
      hu: "Kezdje ezzel",
    }),
    startValue: t(locale, {
      en: "Your business challenge",
      es: "Tu reto empresarial",
      pt: "O seu desafio de negócio",
      fr: "Votre enjeu métier",
      de: "Ihre unternehmerische Herausforderung",
      ru: "Ваша бизнес-задача",
      hu: "Az Ön üzleti kihívása",
    }),
    steps: [
      {
        key: "dataAi",
        title: t(locale, groupTitles.dataAi),
        outcome: t(locale, {
          en: "Turn data into decisions and automate manual work",
          es: "Convierte los datos en decisiones y automatiza el trabajo manual",
          pt: "Transforme dados em decisões e automatize o trabalho manual",
          fr: "Transformez les données en décisions et automatisez les tâches manuelles",
          de: "Daten in Entscheidungen verwandeln und manuelle Arbeit automatisieren",
          ru: "Превращайте данные в решения и автоматизируйте ручную работу",
          hu: "Változtassa az adatokat döntésekké, és automatizálja a kézi munkát",
        }),
        href: "/services/data-ai-adoption",
      },
      {
        key: "workforce",
        title: t(locale, groupTitles.workforce),
        outcome: t(locale, {
          en: "Hire, pay and stay compliant across Europe",
          es: "Contrata, paga y cumple la normativa en toda Europa",
          pt: "Contrate, pague e cumpra a legislação em toda a Europa",
          fr: "Recrutez, payez et restez conforme partout en Europe",
          de: "Einstellen, bezahlen und europaweit rechtssicher bleiben",
          ru: "Найм, выплаты и соответствие требованиям по всей Европе",
          hu: "Alkalmazzon, fizessen és feleljen meg a szabályoknak Európa-szerte",
        }),
        href: "/services/workforce-business",
      },
      {
        key: "agile",
        title: t(locale, groupTitles.agile),
        outcome: t(locale, {
          en: "Deliver faster with teams that adapt to change",
          es: "Entrega más rápido con equipos que se adaptan al cambio",
          pt: "Entregue mais rápido com equipas que se adaptam à mudança",
          fr: "Livrez plus vite avec des équipes qui s'adaptent",
          de: "Schneller liefern mit Teams, die sich anpassen",
          ru: "Работайте быстрее с командами, готовыми к переменам",
          hu: "Szállítson gyorsabban a változásra reagáló csapatokkal",
        }),
        href: "/services/agile-transformation",
      },
    ],
    outcomeLabel: t(locale, {
      en: "The result",
      es: "El resultado",
      pt: "O resultado",
      fr: "Le résultat",
      de: "Das Ergebnis",
      ru: "Результат",
      hu: "Az eredmény",
    }),
    outcomeValue: t(locale, {
      en: "Sustainable business growth",
      es: "Crecimiento empresarial sostenible",
      pt: "Crescimento sustentável do negócio",
      fr: "Une croissance durable",
      de: "Nachhaltiges Unternehmenswachstum",
      ru: "Устойчивый рост бизнеса",
      hu: "Fenntartható üzleti növekedés",
    }),
    footnote: t(locale, {
      en: "Europe-wide delivery · one accountable partner",
      es: "Entrega en toda Europa · un único socio responsable",
      pt: "Entrega em toda a Europa · um único parceiro responsável",
      fr: "Livraison partout en Europe · un seul partenaire responsable",
      de: "Europaweite Umsetzung · ein verantwortlicher Partner",
      ru: "Работа по всей Европе · один ответственный партнёр",
      hu: "Európa-szerte · egyetlen felelős partner",
    }),
  }
}
