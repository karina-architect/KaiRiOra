import type { Metadata } from "next"
import type { Locale } from "@/lib/i18n/config"
import { locales, SITE_URL, SITE_NAME } from "@/lib/i18n/config"

/**
 * Content model for the three core-service landing pages.
 *
 * Short, high-visibility strings (pillar name, hero title, intro, CTA labels,
 * section headings) are translated for all locales. Longer descriptive bodies
 * (individual service descriptions, benefit copy, FAQ answers) fall back to
 * English — consistent with the approach in lib/site-content.ts and acceptable
 * for these new marketing sections.
 */

type Localized = Partial<Record<Locale, string>> & { en: string }

function t(locale: Locale, m: Localized): string {
  return m[locale] ?? m.en
}

export type ServiceSlug = "workforce-business" | "data-ai-adoption" | "agile-transformation"

export type ServiceIcon =
  | "eor"
  | "payroll"
  | "accounting"
  | "contractor"
  | "recruitment"
  | "staffAug"
  | "hr"
  | "permits"
  | "strategy"
  | "readiness"
  | "dataStrategy"
  | "governance"
  | "engineering"
  | "analytics"
  | "automation"
  | "training"
  | "coaching"
  | "scrum"
  | "pmo"
  | "delivery"
  | "product"
  | "change"
  | "teamEnable"

export interface ServiceCardItem {
  icon: ServiceIcon
  title: string
  desc: string
  bullets?: string[]
}

export interface WhyPoint {
  icon: "europe" | "endToEnd" | "dataAi" | "agile" | "business" | "trusted" | "scalable" | "compliance"
  title: string
  desc: string
}

export interface FaqItem {
  q: string
  a: string
}

export interface ServicePageContent {
  slug: ServiceSlug
  eyebrow: string
  heroTitle: string
  intro: string
  servicesHeading: string
  servicesIntro: string
  services: ServiceCardItem[]
  benefitsHeading: string
  benefits: string[]
  whyHeading: string
  whySubheading: string
  whyPoints: WhyPoint[]
  ctaLabel: string
  ctaTitle: string
  ctaSubtitle: string
  contactHeading: string
  contactBody: string
  contactButton: string
  faqHeading: string
  faqs: FaqItem[]
  metaTitle: string
  metaDescription: string
  keywords: string[]
}

/* ---------- Shared, translated strings ---------- */

const pillarNames: Record<ServiceSlug, Localized> = {
  "workforce-business": {
    en: "Workforce & Business Services",
    es: "Servicios Laborales y Empresariales",
    pt: "Serviços de Força de Trabalho e Negócios",
    fr: "Services RH & Entreprise",
    de: "Personal- & Unternehmensdienste",
    ru: "Кадровые и бизнес-услуги",
    hu: "Munkaerő- és üzleti szolgáltatások",
  },
  "data-ai-adoption": {
    en: "Data & AI Adoption",
    es: "Adopción de Datos e IA",
    pt: "Adoção de Dados e IA",
    fr: "Adoption Data & IA",
    de: "Daten- & KI-Einführung",
    ru: "Внедрение данных и ИИ",
    hu: "Adat- és MI-bevezetés",
  },
  "agile-transformation": {
    en: "Agile Transformation",
    es: "Transformación Ágil",
    pt: "Transformação Ágil",
    fr: "Transformation Agile",
    de: "Agile Transformation",
    ru: "Agile-трансформация",
    hu: "Agilis átalakulás",
  },
}

const servicesHeadingByPillar: Record<ServiceSlug, Localized> = {
  "workforce-business": {
    en: "Our Workforce & Business Services",
    es: "Nuestros servicios laborales y empresariales",
    pt: "Os nossos serviços de força de trabalho e negócios",
    fr: "Nos services RH & entreprise",
    de: "Unsere Personal- & Unternehmensdienste",
    ru: "Наши кадровые и бизнес-услуги",
    hu: "Munkaerő- és üzleti szolgáltatásaink",
  },
  "data-ai-adoption": {
    en: "Our Data & AI Adoption Services",
    es: "Nuestros servicios de adopción de datos e IA",
    pt: "Os nossos serviços de adoção de dados e IA",
    fr: "Nos services d'adoption Data & IA",
    de: "Unsere Services zur Daten- & KI-Einführung",
    ru: "Наши услуги по внедрению данных и ИИ",
    hu: "Adat- és MI-bevezetési szolgáltatásaink",
  },
  "agile-transformation": {
    en: "Our Agile Transformation Services",
    es: "Nuestros servicios de transformación ágil",
    pt: "Os nossos serviços de transformação ágil",
    fr: "Nos services de transformation agile",
    de: "Unsere Agile-Transformation-Services",
    ru: "Наши услуги Agile-трансформации",
    hu: "Agilis átalakulási szolgáltatásaink",
  },
}

const heroTitleByPillar: Record<ServiceSlug, Localized> = {
  "workforce-business": {
    en: "Helping Businesses Build, Manage and Grow Their Workforce Across Europe",
    es: "Ayudamos a las empresas a formar, gestionar y hacer crecer su plantilla en toda Europa",
    pt: "Ajudamos as empresas a formar, gerir e expandir a sua força de trabalho em toda a Europa",
    fr: "Aider les entreprises à constituer, gérer et développer leurs effectifs à travers l'Europe",
    de: "Wir helfen Unternehmen, ihre Belegschaft in ganz Europa aufzubauen, zu verwalten und auszubauen",
    ru: "Помогаем компаниям формировать, управлять и развивать персонал по всей Европе",
    hu: "Segítünk a vállalatoknak munkaerejük kiépítésében, kezelésében és bővítésében Európa-szerte",
  },
  "data-ai-adoption": {
    en: "Helping Organisations Transform Data into Business Value",
    es: "Ayudamos a las organizaciones a convertir los datos en valor empresarial",
    pt: "Ajudamos as organizações a transformar dados em valor de negócio",
    fr: "Aider les organisations à transformer les données en valeur commerciale",
    de: "Wir helfen Organisationen, Daten in Geschäftswert zu verwandeln",
    ru: "Помогаем организациям превращать данные в ценность для бизнеса",
    hu: "Segítünk a szervezeteknek az adatokat üzleti értékké alakítani",
  },
  "agile-transformation": {
    en: "Helping Organisations Deliver Faster and Better",
    es: "Ayudamos a las organizaciones a entregar más rápido y mejor",
    pt: "Ajudamos as organizações a entregar mais rápido e melhor",
    fr: "Aider les organisations à livrer plus vite et mieux",
    de: "Wir helfen Organisationen, schneller und besser zu liefern",
    ru: "Помогаем организациям работать быстрее и качественнее",
    hu: "Segítünk a szervezeteknek gyorsabban és jobban teljesíteni",
  },
}

const introByPillar: Record<ServiceSlug, Localized> = {
  "workforce-business": {
    en: "KaiRiOra provides complete workforce and business support services, helping organisations employ, manage, pay and support employees and contractors while ensuring compliance across Europe. We combine payroll, accounting, HR and workforce administration into one trusted business solution.",
    es: "KaiRiOra ofrece servicios completos de apoyo laboral y empresarial, ayudando a las organizaciones a contratar, gestionar, pagar y apoyar a empleados y contratistas garantizando el cumplimiento en toda Europa. Combinamos nómina, contabilidad, RR. HH. y administración de personal en una única solución empresarial de confianza.",
    pt: "A KaiRiOra oferece serviços completos de apoio à força de trabalho e ao negócio, ajudando as organizações a contratar, gerir, pagar e apoiar colaboradores e prestadores, garantindo conformidade em toda a Europa. Combinamos folha de pagamento, contabilidade, RH e administração de pessoal numa única solução de confiança.",
    fr: "KaiRiOra propose des services complets de support RH et d'entreprise, aidant les organisations à employer, gérer, payer et accompagner salariés et prestataires tout en assurant la conformité à travers l'Europe. Nous réunissons paie, comptabilité, RH et administration du personnel dans une seule solution de confiance.",
    de: "KaiRiOra bietet umfassende Personal- und Unternehmensdienste und hilft Organisationen, Mitarbeitende und Auftragnehmer europaweit einzustellen, zu verwalten, zu bezahlen und zu unterstützen – bei voller Compliance. Wir vereinen Payroll, Buchhaltung, HR und Personalverwaltung in einer vertrauenswürdigen Lösung.",
    ru: "KaiRiOra предоставляет полный спектр кадровых и бизнес-услуг, помогая организациям нанимать, управлять, оплачивать и поддерживать сотрудников и подрядчиков при полном соответствии требованиям по всей Европе. Мы объединяем расчёт зарплаты, бухгалтерию, HR и кадровое администрирование в одном надёжном решении.",
    hu: "A KaiRiOra teljes körű munkaerő- és üzleti támogatási szolgáltatásokat nyújt, segítve a szervezeteket a munkavállalók és vállalkozók foglalkoztatásában, kezelésében, kifizetésében és támogatásában, biztosítva a megfelelést Európa-szerte. A bérszámfejtést, könyvelést, HR-t és munkaerő-adminisztrációt egyetlen megbízható megoldásban egyesítjük.",
  },
  "data-ai-adoption": {
    en: "KaiRiOra helps organisations modernise data platforms, define AI strategies and successfully adopt Artificial Intelligence through practical, business-focused solutions.",
    es: "KaiRiOra ayuda a las organizaciones a modernizar plataformas de datos, definir estrategias de IA y adoptar con éxito la Inteligencia Artificial mediante soluciones prácticas y orientadas al negocio.",
    pt: "A KaiRiOra ajuda as organizações a modernizar plataformas de dados, definir estratégias de IA e adotar com sucesso a Inteligência Artificial através de soluções práticas e focadas no negócio.",
    fr: "KaiRiOra aide les organisations à moderniser leurs plateformes de données, à définir des stratégies d'IA et à adopter avec succès l'intelligence artificielle grâce à des solutions concrètes et orientées métier.",
    de: "KaiRiOra hilft Organisationen, Datenplattformen zu modernisieren, KI-Strategien zu definieren und künstliche Intelligenz mit praxisnahen, geschäftsorientierten Lösungen erfolgreich einzuführen.",
    ru: "KaiRiOra помогает организациям модернизировать платформы данных, определять стратегии ИИ и успешно внедрять искусственный интеллект с помощью практичных, ориентированных на бизнес решений.",
    hu: "A KaiRiOra segít a szervezeteknek korszerűsíteni az adatplatformokat, meghatározni az MI-stratégiákat és sikeresen bevezetni a mesterséges intelligenciát gyakorlati, üzletközpontú megoldásokkal.",
  },
  "agile-transformation": {
    en: "KaiRiOra enables organisations to improve delivery, collaboration and organisational agility through modern Agile practices.",
    es: "KaiRiOra permite a las organizaciones mejorar la entrega, la colaboración y la agilidad organizativa mediante prácticas ágiles modernas.",
    pt: "A KaiRiOra permite às organizações melhorar a entrega, a colaboração e a agilidade organizacional através de práticas ágeis modernas.",
    fr: "KaiRiOra permet aux organisations d'améliorer la livraison, la collaboration et l'agilité organisationnelle grâce à des pratiques agiles modernes.",
    de: "KaiRiOra befähigt Organisationen, Lieferung, Zusammenarbeit und organisatorische Agilität durch moderne agile Praktiken zu verbessern.",
    ru: "KaiRiOra помогает организациям улучшить поставку, сотрудничество и организационную гибкость с помощью современных Agile-практик.",
    hu: "A KaiRiOra lehetővé teszi a szervezetek számára, hogy modern agilis gyakorlatokkal javítsák a szállítást, az együttműködést és a szervezeti agilitást.",
  },
}

const ctaLabelByPillar: Record<ServiceSlug, Localized> = {
  "workforce-business": {
    en: "Talk to Our Experts",
    es: "Hable con nuestros expertos",
    pt: "Fale com os nossos especialistas",
    fr: "Parlez à nos experts",
    de: "Sprechen Sie mit unseren Experten",
    ru: "Поговорите с экспертами",
    hu: "Beszéljen szakértőinkkel",
  },
  "data-ai-adoption": {
    en: "Start Your AI Journey",
    es: "Comience su viaje de IA",
    pt: "Inicie a sua jornada de IA",
    fr: "Commencez votre parcours IA",
    de: "Starten Sie Ihre KI-Reise",
    ru: "Начните свой путь в ИИ",
    hu: "Kezdje el MI-útját",
  },
  "agile-transformation": {
    en: "Accelerate Your Transformation",
    es: "Acelere su transformación",
    pt: "Acelere a sua transformação",
    fr: "Accélérez votre transformation",
    de: "Beschleunigen Sie Ihre Transformation",
    ru: "Ускорьте свою трансформацию",
    hu: "Gyorsítsa fel az átalakulását",
  },
}

const genericHeadings = {
  servicesIntro: {
    en: "Practical, end-to-end services delivered by specialists who understand European business.",
    es: "Servicios prácticos e integrales prestados por especialistas que entienden el negocio europeo.",
    pt: "Serviços práticos e integrais prestados por especialistas que entendem o negócio europeu.",
    fr: "Des services concrets et de bout en bout, assurés par des spécialistes du marché européen.",
    de: "Praxisnahe End-to-End-Services von Spezialisten, die das europäische Geschäft verstehen.",
    ru: "Практичные, комплексные услуги от специалистов, понимающих европейский бизнес.",
    hu: "Gyakorlati, teljes körű szolgáltatások olyan szakértőktől, akik értik az európai üzletet.",
  },
  benefits: {
    en: "Key Benefits",
    es: "Beneficios clave",
    pt: "Principais benefícios",
    fr: "Avantages clés",
    de: "Wichtigste Vorteile",
    ru: "Ключевые преимущества",
    hu: "Fő előnyök",
  },
  why: {
    en: "Why KaiRiOra",
    es: "Por qué KaiRiOra",
    pt: "Porquê a KaiRiOra",
    fr: "Pourquoi KaiRiOra",
    de: "Warum KaiRiOra",
    ru: "Почему KaiRiOra",
    hu: "Miért a KaiRiOra",
  },
  whySub: {
    en: "A single trusted partner delivering three integrated service pillars across Europe.",
    es: "Un único socio de confianza que ofrece tres pilares de servicio integrados en toda Europa.",
    pt: "Um único parceiro de confiança que oferece três pilares de serviço integrados em toda a Europa.",
    fr: "Un seul partenaire de confiance, trois piliers de services intégrés à travers l'Europe.",
    de: "Ein vertrauensvoller Partner mit drei integrierten Leistungssäulen in ganz Europa.",
    ru: "Один надёжный партнёр с тремя интегрированными направлениями услуг по всей Европе.",
    hu: "Egyetlen megbízható partner három integrált szolgáltatási pillérrel Európa-szerte.",
  },
  faq: {
    en: "Frequently Asked Questions",
    es: "Preguntas frecuentes",
    pt: "Perguntas frequentes",
    fr: "Questions fréquentes",
    de: "Häufig gestellte Fragen",
    ru: "Частые вопросы",
    hu: "Gyakran ismételt kérdések",
  },
  contactHeading: {
    en: "Let's Talk About Your Goals",
    es: "Hablemos de sus objetivos",
    pt: "Vamos falar dos seus objetivos",
    fr: "Parlons de vos objectifs",
    de: "Sprechen wir über Ihre Ziele",
    ru: "Давайте обсудим ваши цели",
    hu: "Beszéljünk a céljairól",
  },
  contactBody: {
    en: "Tell us about your business and we'll show you how KaiRiOra can help you hire, build and grow across Europe.",
    es: "Cuéntenos sobre su empresa y le mostraremos cómo KaiRiOra puede ayudarle a contratar, construir y crecer en toda Europa.",
    pt: "Fale-nos do seu negócio e mostramos-lhe como a KaiRiOra o pode ajudar a contratar, construir e crescer em toda a Europa.",
    fr: "Parlez-nous de votre entreprise et nous vous montrerons comment KaiRiOra peut vous aider à recruter, bâtir et croître en Europe.",
    de: "Erzählen Sie uns von Ihrem Unternehmen und wir zeigen Ihnen, wie KaiRiOra Sie beim Einstellen, Aufbauen und Wachsen in Europa unterstützt.",
    ru: "Расскажите о своём бизнесе, и мы покажем, как KaiRiOra поможет нанимать, строить и расти по всей Европе.",
    hu: "Meséljen a vállalkozásáról, és megmutatjuk, hogyan segíthet a KaiRiOra a felvételben, építkezésben és növekedésben Európa-szerte.",
  },
  contactButton: {
    en: "Contact Us",
    es: "Contáctenos",
    pt: "Fale connosco",
    fr: "Nous contacter",
    de: "Kontakt aufnehmen",
    ru: "Связаться с нами",
    hu: "Kapcsolatfelvétel",
  },
  ctaSubtitle: {
    en: "Book a free consultation with our European specialists.",
    es: "Reserve una consulta gratuita con nuestros especialistas europeos.",
    pt: "Agende uma consulta gratuita com os nossos especialistas europeus.",
    fr: "Réservez une consultation gratuite avec nos spécialistes européens.",
    de: "Buchen Sie eine kostenlose Beratung mit unseren europäischen Spezialisten.",
    ru: "Запишитесь на бесплатную консультацию с нашими европейскими специалистами.",
    hu: "Foglaljon ingyenes konzultációt európai szakértőinkkel.",
  },
} satisfies Record<string, Localized>

/* ---------- Why KaiRiOra (shared across homepage + service pages) ---------- */

const whyTitles = {
  europe: {
    en: "European Expertise",
    es: "Experiencia europea",
    pt: "Experiência europeia",
    fr: "Expertise européenne",
    de: "Europäische Expertise",
    ru: "Европейская экспертиза",
    hu: "Európai szakértelem",
  },
  endToEnd: {
    en: "End-to-End Workforce Solutions",
    es: "Soluciones laborales integrales",
    pt: "Soluções de força de trabalho integrais",
    fr: "Solutions RH de bout en bout",
    de: "End-to-End-Personallösungen",
    ru: "Комплексные кадровые решения",
    hu: "Teljes körű munkaerő-megoldások",
  },
  dataAi: {
    en: "Data & AI Specialists",
    es: "Especialistas en Datos e IA",
    pt: "Especialistas em Dados e IA",
    fr: "Spécialistes Data & IA",
    de: "Daten- & KI-Spezialisten",
    ru: "Специалисты по данным и ИИ",
    hu: "Adat- és MI-szakértők",
  },
  agile: {
    en: "Agile Transformation Experts",
    es: "Expertos en transformación ágil",
    pt: "Especialistas em transformação ágil",
    fr: "Experts en transformation agile",
    de: "Experten für agile Transformation",
    ru: "Эксперты по Agile-трансформации",
    hu: "Agilis átalakulási szakértők",
  },
  business: {
    en: "Business-Focused Delivery",
    es: "Entrega orientada al negocio",
    pt: "Entrega focada no negócio",
    fr: "Livraison orientée métier",
    de: "Geschäftsorientierte Umsetzung",
    ru: "Ориентация на бизнес-результат",
    hu: "Üzletközpontú megvalósítás",
  },
  trusted: {
    en: "Trusted Consulting Partner",
    es: "Socio de consultoría de confianza",
    pt: "Parceiro de consultoria de confiança",
    fr: "Partenaire de conseil de confiance",
    de: "Vertrauensvoller Beratungspartner",
    ru: "Надёжный партнёр-консультант",
    hu: "Megbízható tanácsadó partner",
  },
  scalable: {
    en: "Scalable Solutions",
    es: "Soluciones escalables",
    pt: "Soluções escaláveis",
    fr: "Solutions évolutives",
    de: "Skalierbare Lösungen",
    ru: "Масштабируемые решения",
    hu: "Skálázható megoldások",
  },
  compliance: {
    en: "Compliance-First Approach",
    es: "Enfoque centrado en el cumplimiento",
    pt: "Abordagem centrada na conformidade",
    fr: "Approche axée sur la conformité",
    de: "Compliance-First-Ansatz",
    ru: "Приоритет соответствия требованиям",
    hu: "Megfelelőség-központú megközelítés",
  },
} satisfies Record<string, Localized>

const whyDescs: Record<keyof typeof whyTitles, string> = {
  europe: "Deep knowledge of employment law, tax, payroll and compliance across European markets.",
  endToEnd: "Hire, pay, manage and support your entire workforce through one accountable partner.",
  dataAi: "Practical data engineering, governance and AI adoption led by experienced specialists.",
  agile: "Coaching, delivery and transformation expertise that improves how your teams work.",
  business: "Every engagement is measured by real business outcomes, not activity or output.",
  trusted: "A reliable long-term partner that businesses and consultants rely on across Europe.",
  scalable: "Solutions that flex from a single hire to enterprise-wide programmes and platforms.",
  compliance: "Compliance and risk are built into everything we deliver, from day one.",
}

export function getWhyPoints(locale: Locale): { heading: string; subheading: string; points: WhyPoint[] } {
  const order = Object.keys(whyTitles) as (keyof typeof whyTitles)[]
  return {
    heading: t(locale, genericHeadings.why),
    subheading: t(locale, genericHeadings.whySub),
    points: order.map((key) => ({
      icon: key,
      title: t(locale, whyTitles[key]),
      desc: whyDescs[key],
    })),
  }
}

/* ---------- Service catalogues (English descriptions) ---------- */

const workforceServices: ServiceCardItem[] = [
  {
    icon: "eor",
    title: "Employer of Record (EOR)",
    desc: "Hire employees internationally without opening a local legal entity while remaining fully compliant with local employment legislation.",
  },
  {
    icon: "payroll",
    title: "Payroll Administration",
    desc: "Complete payroll processing including salary calculations, payslips, tax reporting, social security, statutory filings and ongoing payroll compliance.",
  },
  {
    icon: "accounting",
    title: "Accounting Services",
    desc: "Professional accounting services for businesses and self-employed professionals, from day-to-day bookkeeping to statutory reporting.",
    bullets: [
      "Bookkeeping",
      "Financial Reporting",
      "VAT Returns",
      "Corporate Tax Support",
      "Annual Accounts",
      "Management Reporting",
      "Financial Statements",
      "Expense Management",
      "Compliance Reporting",
      "Business Financial Advisory",
    ],
  },
  {
    icon: "contractor",
    title: "Contractor Management",
    desc: "Manage contractors and freelancers including onboarding, contracts, invoicing, compliance and administration.",
  },
  {
    icon: "recruitment",
    title: "Recruitment",
    desc: "Find and recruit experienced professionals across Europe.",
  },
  {
    icon: "staffAug",
    title: "Staff Augmentation",
    desc: "Rapidly scale delivery teams with highly qualified consultants and specialists.",
  },
  {
    icon: "hr",
    title: "HR Administration",
    desc: "Employment contracts, onboarding, employee lifecycle management, documentation, leave management and HR compliance.",
  },
  {
    icon: "permits",
    title: "Work & Residence Permit Support",
    desc: "Support international hiring, immigration, relocation and work permit processes across Europe.",
  },
]

const dataAiServices: ServiceCardItem[] = [
  { icon: "strategy", title: "AI Strategy", desc: "Develop an enterprise AI roadmap aligned with business objectives." },
  { icon: "readiness", title: "AI Readiness Assessment", desc: "Assess technology, governance, people and data maturity before AI adoption." },
  { icon: "dataStrategy", title: "Data Strategy", desc: "Create a modern enterprise data strategy supporting long-term business growth." },
  { icon: "governance", title: "Data Governance", desc: "Improve data quality, ownership, security and regulatory compliance." },
  { icon: "engineering", title: "Data Engineering", desc: "Build modern cloud-based data platforms, pipelines and integrations." },
  { icon: "analytics", title: "Business Intelligence & Analytics", desc: "Create dashboards, KPIs and actionable business insights." },
  { icon: "automation", title: "AI Automation", desc: "Automate repetitive business processes using Artificial Intelligence." },
  { icon: "training", title: "AI Training & Workshops", desc: "Executive AI awareness, business workshops and technical AI training." },
]

const agileServices: ServiceCardItem[] = [
  { icon: "coaching", title: "Agile Coaching", desc: "Coach leadership and delivery teams throughout Agile transformation." },
  { icon: "scrum", title: "Scrum & Kanban", desc: "Implement Agile delivery frameworks tailored to organisational needs." },
  { icon: "pmo", title: "PMO Transformation", desc: "Modernise Project and Portfolio Management Offices." },
  { icon: "delivery", title: "Delivery Management", desc: "Improve planning, governance and execution." },
  { icon: "product", title: "Product Management", desc: "Build customer-centric digital products." },
  { icon: "change", title: "Change Management", desc: "Support organisational change and transformation." },
  { icon: "teamEnable", title: "Team Enablement", desc: "Develop high-performing Agile delivery teams." },
]

const benefitsByPillar: Record<ServiceSlug, string[]> = {
  "workforce-business": [
    "One partner for payroll, accounting, HR and workforce administration",
    "Full employment and tax compliance in every European market",
    "Hire without setting up a local legal entity",
    "Faster onboarding for employees and contractors",
    "Reduced administrative burden and operational risk",
    "Transparent, predictable pricing",
  ],
  "data-ai-adoption": [
    "A clear, practical roadmap from data to AI value",
    "Modern, scalable and well-governed data platforms",
    "Responsible, compliant AI adoption",
    "Automation that reduces cost and manual effort",
    "Better decisions through trusted analytics",
    "Upskilled teams ready to work with AI",
  ],
  "agile-transformation": [
    "Faster, more predictable delivery",
    "Improved collaboration across teams and leadership",
    "Modern, value-driven PMO and portfolio management",
    "Customer-centric product development",
    "Sustainable organisational agility",
    "High-performing, self-sufficient teams",
  ],
}

const faqsByPillar: Record<ServiceSlug, FaqItem[]> = {
  "workforce-business": [
    {
      q: "What is an Employer of Record (EOR)?",
      a: "An Employer of Record lets you hire employees in a European country without setting up your own legal entity. KaiRiOra becomes the legal employer, handling payroll, taxes, benefits and compliance, while you manage the employee's day-to-day work.",
    },
    {
      q: "Which European countries do you cover?",
      a: "We support hiring, payroll and workforce administration across major European markets. Contact us with your target countries and we'll confirm coverage and requirements.",
    },
    {
      q: "Can you manage both employees and contractors?",
      a: "Yes. We manage the full workforce lifecycle for both employees and contractors, including onboarding, contracts, invoicing, payroll and compliance.",
    },
    {
      q: "Do you provide accounting services too?",
      a: "Yes. Alongside payroll and HR we offer bookkeeping, VAT returns, corporate tax support, financial reporting and business financial advisory.",
    },
  ],
  "data-ai-adoption": [
    {
      q: "Where should we start with AI adoption?",
      a: "Most organisations start with an AI Readiness Assessment and a practical AI strategy, ensuring data, governance and skills are in place before investing in specific solutions.",
    },
    {
      q: "Do we need a modern data platform before adopting AI?",
      a: "Reliable, well-governed data is the foundation of successful AI. We help modernise data platforms and governance in parallel with AI initiatives so value is delivered incrementally.",
    },
    {
      q: "Is your AI adoption approach compliant and responsible?",
      a: "Yes. We build governance, security and regulatory compliance into every engagement, following a responsible and scalable approach to AI.",
    },
    {
      q: "Can you train our teams?",
      a: "We deliver executive AI awareness sessions, business workshops and technical training so your teams can confidently work with data and AI.",
    },
  ],
  "agile-transformation": [
    {
      q: "What does an Agile transformation involve?",
      a: "It combines coaching, delivery frameworks such as Scrum and Kanban, PMO modernisation and change management to improve how your organisation plans, delivers and adapts.",
    },
    {
      q: "Do you work with leadership as well as teams?",
      a: "Yes. Sustainable agility requires leadership alignment, so we coach executives and delivery teams together throughout the transformation.",
    },
    {
      q: "Can you modernise our existing PMO?",
      a: "We help transform traditional Project and Portfolio Management Offices into modern, value-driven functions that support agile delivery.",
    },
    {
      q: "How do you measure success?",
      a: "We focus on business outcomes such as faster, more predictable delivery, improved collaboration and higher-performing teams.",
    },
  ],
}

const metaByPillar: Record<ServiceSlug, { title: Localized; desc: Localized; keywords: string[] }> = {
  "workforce-business": {
    title: {
      en: "Workforce & Business Services in Europe | Payroll, EOR & Accounting",
      es: "Servicios laborales y empresariales en Europa | Nómina, EOR y contabilidad",
      pt: "Serviços de força de trabalho e negócios na Europa | Folha, EOR e contabilidade",
      fr: "Services RH & entreprise en Europe | Paie, EOR et comptabilité",
      de: "Personal- & Unternehmensdienste in Europa | Payroll, EOR & Buchhaltung",
      ru: "Кадровые и бизнес-услуги в Европе | Зарплата, EOR и бухгалтерия",
      hu: "Munkaerő- és üzleti szolgáltatások Európában | Bér, EOR és könyvelés",
    },
    desc: {
      en: "Payroll, Employer of Record, accounting, HR, recruitment, staff augmentation, contractor management and work permit support across Europe.",
      es: "Nómina, Employer of Record, contabilidad, RR. HH., reclutamiento, staff augmentation, gestión de contratistas y permisos de trabajo en toda Europa.",
      pt: "Folha de pagamento, Employer of Record, contabilidade, RH, recrutamento, staff augmentation, gestão de prestadores e apoio a autorizações de trabalho em toda a Europa.",
      fr: "Paie, Employer of Record, comptabilité, RH, recrutement, staff augmentation, gestion des prestataires et permis de travail à travers l'Europe.",
      de: "Payroll, Employer of Record, Buchhaltung, HR, Recruiting, Staff Augmentation, Contractor Management und Arbeitserlaubnis-Support in ganz Europa.",
      ru: "Зарплата, Employer of Record, бухгалтерия, HR, подбор персонала, staff augmentation, управление подрядчиками и поддержка разрешений на работу по всей Европе.",
      hu: "Bérszámfejtés, Employer of Record, könyvelés, HR, toborzás, staff augmentation, vállalkozókezelés és munkavállalási engedély támogatás Európa-szerte.",
    },
    keywords: [
      "Workforce Solutions Europe",
      "Employer of Record Europe",
      "Payroll Administration",
      "Accounting Services Europe",
      "Business Accounting",
      "Bookkeeping Services",
      "Contractor Management",
      "Recruitment Services",
      "HR Administration",
      "Staff Augmentation",
      "Work Permit Support",
      "Residence Permit Support",
    ],
  },
  "data-ai-adoption": {
    title: {
      en: "Data & AI Adoption Consulting in Europe | Strategy, Governance & Engineering",
      es: "Consultoría de adopción de datos e IA en Europa | Estrategia, gobernanza e ingeniería",
      pt: "Consultoria de adoção de dados e IA na Europa | Estratégia, governança e engenharia",
      fr: "Conseil en adoption Data & IA en Europe | Stratégie, gouvernance et ingénierie",
      de: "Daten- & KI-Adoption-Beratung in Europa | Strategie, Governance & Engineering",
      ru: "Консалтинг по внедрению данных и ИИ в Европе | Стратегия, управление и инженерия",
      hu: "Adat- és MI-bevezetési tanácsadás Európában | Stratégia, irányítás és mérnökség",
    },
    desc: {
      en: "AI strategy, AI readiness, data strategy, data governance, data engineering, business intelligence, AI automation and AI training across Europe.",
      es: "Estrategia de IA, madurez de IA, estrategia de datos, gobernanza de datos, ingeniería de datos, inteligencia de negocio, automatización con IA y formación en IA en toda Europa.",
      pt: "Estratégia de IA, maturidade de IA, estratégia de dados, governança de dados, engenharia de dados, business intelligence, automação com IA e formação em IA em toda a Europa.",
      fr: "Stratégie IA, maturité IA, stratégie data, gouvernance des données, ingénierie des données, business intelligence, automatisation IA et formation IA à travers l'Europe.",
      de: "KI-Strategie, KI-Reife, Datenstrategie, Data Governance, Data Engineering, Business Intelligence, KI-Automatisierung und KI-Training in ganz Europa.",
      ru: "Стратегия ИИ, готовность к ИИ, стратегия данных, управление данными, инженерия данных, бизнес-аналитика, автоматизация ИИ и обучение ИИ по всей Европе.",
      hu: "MI-stratégia, MI-érettség, adatstratégia, adatirányítás, adatmérnökség, üzleti intelligencia, MI-automatizálás és MI-képzés Európa-szerte.",
    },
    keywords: [
      "AI Consulting",
      "Artificial Intelligence Adoption",
      "Data Strategy",
      "Data Governance",
      "Data Engineering",
      "Business Intelligence",
      "Analytics",
      "AI Automation",
      "AI Workshops",
    ],
  },
  "agile-transformation": {
    title: {
      en: "Agile Transformation Consulting in Europe | Coaching, Scrum & PMO",
      es: "Consultoría de transformación ágil en Europa | Coaching, Scrum y PMO",
      pt: "Consultoria de transformação ágil na Europa | Coaching, Scrum e PMO",
      fr: "Conseil en transformation agile en Europe | Coaching, Scrum et PMO",
      de: "Agile-Transformation-Beratung in Europa | Coaching, Scrum & PMO",
      ru: "Консалтинг по Agile-трансформации в Европе | Коучинг, Scrum и PMO",
      hu: "Agilis átalakulási tanácsadás Európában | Coaching, Scrum és PMO",
    },
    desc: {
      en: "Agile coaching, Scrum and Kanban, PMO transformation, delivery management, product management and change management across Europe.",
      es: "Coaching ágil, Scrum y Kanban, transformación de PMO, gestión de entrega, gestión de producto y gestión del cambio en toda Europa.",
      pt: "Coaching ágil, Scrum e Kanban, transformação de PMO, gestão de entrega, gestão de produto e gestão da mudança em toda a Europa.",
      fr: "Coaching agile, Scrum et Kanban, transformation PMO, gestion de la livraison, gestion de produit et gestion du changement à travers l'Europe.",
      de: "Agile Coaching, Scrum und Kanban, PMO-Transformation, Delivery Management, Produktmanagement und Change Management in ganz Europa.",
      ru: "Agile-коучинг, Scrum и Kanban, трансформация PMO, управление поставками, продуктовый менеджмент и управление изменениями по всей Европе.",
      hu: "Agilis coaching, Scrum és Kanban, PMO-átalakítás, szállításkezelés, termékmenedzsment és változáskezelés Európa-szerte.",
    },
    keywords: [
      "Agile Transformation",
      "Agile Coaching",
      "Scrum Consulting",
      "PMO Transformation",
      "Digital Transformation Consulting",
      "Business Consulting Europe",
    ],
  },
}

const servicesBySlug: Record<ServiceSlug, ServiceCardItem[]> = {
  "workforce-business": workforceServices,
  "data-ai-adoption": dataAiServices,
  "agile-transformation": agileServices,
}

export const serviceSlugs: ServiceSlug[] = ["workforce-business", "data-ai-adoption", "agile-transformation"]

export function getServicePage(slug: ServiceSlug, locale: Locale): ServicePageContent {
  return {
    slug,
    eyebrow: t(locale, pillarNames[slug]),
    heroTitle: t(locale, heroTitleByPillar[slug]),
    intro: t(locale, introByPillar[slug]),
    servicesHeading: t(locale, servicesHeadingByPillar[slug]),
    servicesIntro: t(locale, genericHeadings.servicesIntro),
    services: servicesBySlug[slug],
    benefitsHeading: t(locale, genericHeadings.benefits),
    benefits: benefitsByPillar[slug],
    whyHeading: t(locale, genericHeadings.why),
    whySubheading: t(locale, genericHeadings.whySub),
    whyPoints: getWhyPoints(locale).points,
    ctaLabel: t(locale, ctaLabelByPillar[slug]),
    ctaTitle: t(locale, heroTitleByPillar[slug]),
    ctaSubtitle: t(locale, genericHeadings.ctaSubtitle),
    contactHeading: t(locale, genericHeadings.contactHeading),
    contactBody: t(locale, genericHeadings.contactBody),
    contactButton: t(locale, genericHeadings.contactButton),
    faqHeading: t(locale, genericHeadings.faq),
    faqs: faqsByPillar[slug],
    metaTitle: t(locale, metaByPillar[slug].title),
    metaDescription: t(locale, metaByPillar[slug].desc),
    keywords: metaByPillar[slug].keywords,
  }
}

export function getServiceMetadata(slug: ServiceSlug, locale: Locale): Metadata {
  const page = getServicePage(slug, locale)
  const path = `/services/${slug}`
  const languages: Record<string, string> = {}
  for (const l of locales) languages[l] = `${SITE_URL}/${l}${path}`
  const url = `${SITE_URL}/${locale}${path}`
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: page.keywords,
    alternates: { canonical: url, languages },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      title: page.metaTitle,
      description: page.metaDescription,
      url,
      locale,
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: SITE_NAME }],
    },
    twitter: {
      card: "summary_large_image",
      title: page.metaTitle,
      description: page.metaDescription,
      images: ["/og-image.png"],
    },
  }
}
