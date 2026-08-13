import type { Widen } from "../types"

const en = {
  brandStrip: {
    tagline: "People First. AI Driven. Growth Focused.",
    contact: "Contact",
  },
  nav: {
    home: "Home",
    services: "Services",
    solutions: "Solutions",
    countries: "Countries",
    resources: "Resources",
    about: "About Us",
    requestAssessment: "Request Assessment",
    contactUs: "Contact Us",
  },
  hero: {
    titleLine1: "Work Across Europe.",
    titleLine2: "Comply with Confidence.",
    titleLine3Prefix: "Grow Your ",
    titleLine3Highlight: "Future.",
    paragraph:
      "KaiRiOra provides payroll, workforce and compliance solutions so professionals and businesses can work, hire and expand across Europe — legally, efficiently and confidently.",
    bullets: [
      "Workforce and payroll administration",
      "Contractor management",
      "Employer of Record coordination",
      "Recruitment and staff augmentation",
      "Relocation and mobility support",
      "Data & AI consulting",
    ],
    requestAssessment: "Request Assessment",
    salaryCalculator: "Salary Calculator",
    askAi: "Ask AI Assistant",
    complianceNote:
      "We promote legal compliance and responsible business practices in all countries where we operate.",
    whyCard: {
      title: "Why Spain or Portugal?",
      points: [
        "Attractive destinations for international professionals",
        "High quality of life and strong infrastructure",
        "Support for lawful residency and business setup",
      ],
      learnMore: "Learn more",
    },
  },
  trust: {
    heading: "Trusted by professionals and companies across Europe",
    labels: [
      "Technology",
      "Life Sciences",
      "Financial Services",
      "Professional Services",
      "Consulting",
      "Digital Transformation",
    ],
  },
  calculator: {
    title: "Salary Calculator",
    subtitle:
      "Get an illustrative estimate of net income after taxes and social security contributions.",
    country: "Country",
    employmentType: "Employment Type",
    employmentTypes: {
      employee: "Employee",
      contractor: "Contractor",
    },
    grossSalary: "Annual Gross Salary",
    taxRegime: "Tax / Deduction Assumption",
    maritalStatus: "Marital Status",
    maritalStatuses: {
      single: "Single",
      married: "Married",
    },
    dependants: "Dependants",
    calculate: "Calculate",
    netAnnual: "Net Annual Income",
    totalContributions: "Total Taxes & Contributions",
    employerCost: "Employer Cost (est.)",
    monthlyNet: "Estimated Monthly Net",
    ofGross: "of gross",
    aboveGross: "above gross",
    comparisonVs: "vs.",
    perYear: "/ year",
    disclaimer:
      "This calculator provides illustrative estimates based on user-selected assumptions and general information. Actual tax, payroll and social-security obligations depend on individual circumstances, residence status, applicable legislation and professional advice.",
  },
  ai: {
    title: "AI Labour Law Assistant",
    beta: "BETA",
    subtitle:
      "Get clear, general information about employment, payroll, taxes, visas and compliance across Europe.",
    categories: [
      "Payroll",
      "Employment",
      "Visas",
      "Contractors",
      "Social Security",
      "Compliance",
    ],
    greeting:
      "Hello! I can help you understand workforce and compliance rules in Europe. How can I help you today?",
    exampleQuestion: "Can I live in Spain and work for a foreign company?",
    exampleAnswer:
      "Potentially. The appropriate structure depends on residence, tax status, employer setup, social-security coverage and contract type. A qualified local adviser should confirm the applicable requirements.",
    placeholder: "Ask about payroll, visas, contracts…",
    send: "Send",
    ask: "Ask KaiRiOra AI",
    disclaimer: "General information only. Not legal, tax or immigration advice.",
    thinking: "Thinking…",
  },
  whyDark: {
    heading: "Why Professionals Choose Spain & Portugal",
    subheading:
      "Dynamic economies, international communities and an excellent quality of life.",
    spain: {
      name: "Spain",
      points: [
        "Thriving business ecosystem",
        "International talent community",
        "Residence pathways for eligible professionals",
        "Strong infrastructure",
        "Excellent quality of life",
      ],
      explore: "Explore Spain",
    },
    portugal: {
      name: "Portugal",
      points: [
        "Growing technology and startup ecosystem",
        "International professional community",
        "Residence pathways for eligible professionals",
        "Stable environment",
        "Excellent quality of life",
      ],
      explore: "Explore Portugal",
    },
    commitment: {
      title: "Our Commitment",
      points: [
        "We operate with integrity and transparency",
        "We follow local laws and regulations",
        "We protect data and privacy",
        "We support compliant cross-border work",
      ],
      learn: "Learn about our values",
    },
  },
  services: {
    heading: "Our Services",
    subheading: "End-to-end solutions for a borderless workforce.",
    exploreAll: "Explore All Services",
    items: [
      {
        title: "Payroll Administration",
        desc: "Accurate and compliant payroll in local currencies.",
      },
      {
        title: "Contractor Management",
        desc: "Onboard, pay and manage independent professionals.",
      },
      {
        title: "Recruitment & Staff Augmentation",
        desc: "Find top talent and scale your teams quickly.",
      },
      {
        title: "Employer of Record Coordination",
        desc: "Hire in multiple countries without setting up entities.",
      },
      {
        title: "Relocation & Mobility",
        desc: "Visa support, moving assistance and settling-in services.",
      },
      {
        title: "Data & AI Consulting",
        desc: "Data strategy, AI solutions and advanced analytics.",
      },
      {
        title: "AI Training & Workshops",
        desc: "Upskill your team with practical AI and data training.",
      },
    ],
  },
  ctaBand: {
    title: "Ready to Work Across Europe?",
    subtitle: "Let's discuss your goals and identify the appropriate solution.",
    button: "Request Your Assessment",
  },
  footer: {
    description:
      "We help professionals and businesses work, hire and grow across Europe with compliant technology and workforce solutions.",
    columns: {
      services: {
        title: "Services",
        links: [
          "Payroll Administration",
          "Contractor Management",
          "Recruitment",
          "Employer of Record",
          "Relocation Support",
          "Data & AI Consulting",
          "AI Training",
        ],
      },
      solutions: {
        title: "Solutions",
        links: [
          "For Professionals",
          "For Companies",
          "Startups",
          "IT & Tech",
          "Consulting Firms",
        ],
      },
      countries: {
        title: "Countries",
        links: ["Spain", "Portugal", "France", "Germany", "Netherlands"],
        viewAll: "View all countries",
      },
      resources: {
        title: "Resources",
        links: [
          "Knowledge Hub",
          "Guides & Articles",
          "Calculators",
          "FAQ",
          "News & Updates",
        ],
      },
      company: {
        title: "Company",
        links: ["About Us", "Careers", "Partners", "Contact Us"],
      },
    },
    legal: {
      privacy: "Privacy Policy",
      terms: "Terms of Use",
      notice: "Legal Notice",
      cookie: "Cookie Policy",
    },
    rights: "KaiRiOra. All rights reserved.",
    builtIn: "Built in Europe",
  },
  countriesPage: {
    title: "Countries We Cover",
    subtitle:
      "Country-specific workforce guidance for professionals and businesses across Europe.",
    viewCountry: "View country",
  },
  countryPage: {
    heroKicker: "Country Guide",
    intro:
      "General workforce, payroll and compliance considerations for working and hiring in",
    sections: {
      employment: "Employment considerations",
      payroll: "Payroll considerations",
      contractor: "Contractor considerations",
      registration: "Employer-registration considerations",
      socialSecurity: "Social-security considerations",
      residence: "Residence and work-permit considerations",
    },
    checklist: "Getting-started checklist",
    ctaTitle: "Request an individual assessment",
    ctaSubtitle:
      "Every situation is different. Let's review your specific circumstances together.",
    ctaButton: "Request Assessment",
    disclaimer:
      "This page provides general information only and does not constitute legal, tax or immigration advice. Requirements depend on individual circumstances and applicable law. Qualified professional advice should be obtained.",
    backToCountries: "All countries",
  },
  contact: {
    title: "Request Your Free Assessment",
    subtitle:
      "Tell us about your goals and we will identify the appropriate compliant solution.",
    name: "Full Name",
    email: "Email",
    currentCountry: "Current Country",
    targetCountry: "Target Country",
    arrangement: "Employment or Business Arrangement",
    arrangements: [
      "Employee",
      "Contractor / Freelancer",
      "Employer of Record",
      "Company hiring talent",
      "Other",
    ],
    services: "Required Services",
    servicesOptions: [
      "Payroll Administration",
      "Contractor Management",
      "Employer of Record",
      "Recruitment",
      "Relocation",
      "Data & AI Consulting",
    ],
    message: "Message",
    consent:
      "I have read the Privacy Policy and consent to the processing of my data.",
    submit: "Submit Request",
    submitting: "Submitting…",
    successTitle: "Request received",
    successMsg:
      "Thank you. We have received your request and will get back to you shortly.",
    errorTitle: "Something went wrong",
    errorMsg: "We could not submit your request. Please try again.",
    validation: {
      required: "This field is required.",
      email: "Please enter a valid email address.",
      consent: "Please provide your consent to continue.",
    },
  },
  common: {
    learnMore: "Learn more",
    readMore: "Read more",
    selectPlaceholder: "Select…",
    home: "Home",
    contact: "Contact",
    skipToContent: "Skip to content",
  },
  legal: {
    lastUpdated: "Last updated",
    privacy: {
      title: "Privacy Policy",
      body: "KaiRiOra processes personal data in accordance with applicable data-protection law. We collect only the information necessary to provide our services and respond to enquiries. You may request access, correction or deletion of your data at any time. Replace this text with your finalised privacy policy before launch.",
    },
    terms: {
      title: "Terms of Use",
      body: "These terms govern the use of the KaiRiOra website. Content is provided for general information only and may change without notice. By using this website you agree to use it lawfully and responsibly. Replace this text with your finalised terms before launch.",
    },
    notice: {
      title: "Legal Notice",
      body: "KaiRiOra provides workforce administration, project coordination, technology consulting and general information. Unless expressly agreed and delivered by an appropriately qualified professional, KaiRiOra does not provide legal, tax, accounting, immigration or investment advice. Calculators and examples are illustrative only.",
    },
    cookie: {
      title: "Cookie Policy",
      body: "This website may use essential and analytics cookies to operate and improve the service. You can control cookies through your browser settings. Replace this text with your finalised cookie policy before launch.",
    },
  },
  meta: {
    homeTitle: "KaiRiOra — Data & AI, Payroll and EOR Services in Europe",
    homeDescription:
      "Data & AI adoption, payroll administration, Employer of Record, recruitment and agile transformation across Europe. Book a free, no-obligation assessment.",
    homeKeywords: [
      "Data and AI consulting Europe",
      "AI adoption services",
      "European payroll services",
      "Employer of Record Europe",
      "contractor management Europe",
      "agile transformation consulting",
      "workforce compliance Europe",
      "recruitment and staff augmentation Europe",
    ],
    countriesTitle: "European Payroll & Employment Guides by Country",
    countriesDescription:
      "Country guides to payroll, Employer of Record, contractor compliance, employer registration, social security and residence across Europe.",
    contactTitle: "Contact KaiRiOra — Free Assessment",
    contactDescription:
      "Request a free, no-obligation assessment of your workforce, data or AI adoption needs in Europe. We reply within one business day.",
  },
} as const

export default en
export type Dictionary = Widen<typeof en>
