export interface CountryData {
  slug: string
  name: string
  code: string
  region: string
  summary: string
  employment: string[]
  payroll: string[]
  contractor: string[]
  registration: string[]
  socialSecurity: string[]
  residence: string[]
  checklist: string[]
}

function base(
  name: string,
  specifics: Partial<Omit<CountryData, "slug" | "name" | "code" | "region" | "summary">>,
): Omit<CountryData, "slug" | "name" | "code" | "region" | "summary"> {
  return {
    employment: [
      `Employment relationships in ${name} are governed by national labour law and applicable collective agreements.`,
      "Written contracts, working-time rules and minimum-notice provisions typically apply.",
      "Terms should be reviewed against current legislation before hiring.",
      ...(specifics.employment ?? []),
    ],
    payroll: [
      `Payroll in ${name} generally involves income-tax withholding and mandatory contributions.`,
      "Reporting cycles, payslip requirements and filing deadlines vary by jurisdiction.",
      "Local registration and compliant payslips are usually required.",
      ...(specifics.payroll ?? []),
    ],
    contractor: [
      "Independent contractors are responsible for their own tax and social-security status.",
      "Misclassification can carry significant consequences, so arrangements should be structured carefully.",
      "Contract scope, autonomy and invoicing practices should reflect genuine self-employment.",
      ...(specifics.contractor ?? []),
    ],
    registration: [
      `Employers typically need to register with relevant authorities before operating in ${name}.`,
      "An Employer of Record can enable compliant hiring without establishing a local entity.",
      "Entity setup timelines and obligations depend on the chosen structure.",
      ...(specifics.registration ?? []),
    ],
    socialSecurity: [
      "Employers and employees usually contribute to the national social-security system.",
      "Cross-border workers may be covered by EU coordination rules or bilateral agreements.",
      "Coverage should be confirmed for each individual situation.",
      ...(specifics.socialSecurity ?? []),
    ],
    residence: [
      `Residence and work-authorisation requirements in ${name} depend on nationality and circumstances.`,
      "EU/EEA nationals generally enjoy freedom of movement; other nationals may need permits.",
      "Available regimes should be assessed for each eligible individual.",
      ...(specifics.residence ?? []),
    ],
    checklist: specifics.checklist ?? [
      "Confirm the appropriate engagement model",
      "Review employment or contractor terms",
      "Assess payroll and social-security obligations",
      "Check residence and work-permit requirements",
      "Obtain qualified professional advice",
    ],
  }
}

export const countries: CountryData[] = [
  {
    slug: "spain",
    name: "Spain",
    code: "ES",
    region: "Southern Europe",
    summary:
      "A dynamic economy with an international talent community, strong infrastructure and residence pathways for eligible professionals.",
    ...base("Spain", {
      residence: [
        "Certain regimes may be available to eligible new residents, subject to conditions.",
      ],
    }),
  },
  {
    slug: "portugal",
    name: "Portugal",
    code: "PT",
    region: "Southern Europe",
    summary:
      "A growing technology and startup ecosystem with an international community and a stable, welcoming environment.",
    ...base("Portugal", {
      residence: [
        "Several residence programmes may be available to eligible applicants, subject to conditions.",
      ],
    }),
  },
  {
    slug: "belgium",
    name: "Belgium",
    code: "BE",
    region: "Western Europe",
    summary:
      "A central European hub hosting many international institutions and businesses.",
    ...base("Belgium", {}),
  },
  {
    slug: "netherlands",
    name: "Netherlands",
    code: "NL",
    region: "Western Europe",
    summary:
      "A highly connected economy with a strong international business environment.",
    ...base("Netherlands", {
      payroll: ["Specific expat facilities may apply to eligible employees, subject to conditions."],
    }),
  },
  {
    slug: "germany",
    name: "Germany",
    code: "DE",
    region: "Central Europe",
    summary:
      "Europe's largest economy with a robust industrial and technology base.",
    ...base("Germany", {}),
  },
  {
    slug: "france",
    name: "France",
    code: "FR",
    region: "Western Europe",
    summary:
      "A major European economy with a diverse services and technology sector.",
    ...base("France", {}),
  },
  {
    slug: "ireland",
    name: "Ireland",
    code: "IE",
    region: "Northern Europe",
    summary:
      "An English-speaking hub for technology and international services.",
    ...base("Ireland", {}),
  },
  {
    slug: "luxembourg",
    name: "Luxembourg",
    code: "LU",
    region: "Western Europe",
    summary:
      "A compact, international financial and professional-services centre.",
    ...base("Luxembourg", {}),
  },
  {
    slug: "switzerland",
    name: "Switzerland",
    code: "CH",
    region: "Central Europe",
    summary:
      "A stable, high-value economy with a strong international workforce.",
    ...base("Switzerland", {
      socialSecurity: [
        "Switzerland is outside the EU; bilateral agreements may affect coverage.",
      ],
    }),
  },
  {
    slug: "italy",
    name: "Italy",
    code: "IT",
    region: "Southern Europe",
    summary:
      "A large economy with growing interest from international professionals.",
    ...base("Italy", {
      residence: ["Certain regimes may be available to eligible new residents, subject to conditions."],
    }),
  },
  {
    slug: "austria",
    name: "Austria",
    code: "AT",
    region: "Central Europe",
    summary: "A stable Central European economy with high quality of life.",
    ...base("Austria", {}),
  },
  {
    slug: "poland",
    name: "Poland",
    code: "PL",
    region: "Central Europe",
    summary:
      "A fast-growing economy and a leading destination for technology talent.",
    ...base("Poland", {}),
  },
  {
    slug: "sweden",
    name: "Sweden",
    code: "SE",
    region: "Northern Europe",
    summary: "An innovation-driven Nordic economy with a strong tech sector.",
    ...base("Sweden", {}),
  },
  {
    slug: "denmark",
    name: "Denmark",
    code: "DK",
    region: "Northern Europe",
    summary: "A flexible Nordic labour market with a high standard of living.",
    ...base("Denmark", {}),
  },
  {
    slug: "finland",
    name: "Finland",
    code: "FI",
    region: "Northern Europe",
    summary: "A technology-forward Nordic economy with strong public services.",
    ...base("Finland", {}),
  },
  {
    slug: "czechia",
    name: "Czechia",
    code: "CZ",
    region: "Central Europe",
    summary: "A Central European manufacturing and technology hub.",
    ...base("Czechia", {}),
  },
  {
    slug: "estonia",
    name: "Estonia",
    code: "EE",
    region: "Northern Europe",
    summary:
      "A digital-first economy known for e-government and startup activity.",
    ...base("Estonia", {}),
  },
  {
    slug: "malta",
    name: "Malta",
    code: "MT",
    region: "Southern Europe",
    summary:
      "An English-speaking Mediterranean hub for services and technology.",
    ...base("Malta", {}),
  },
  {
    slug: "hungary",
    name: "Hungary",
    code: "HU",
    region: "Central Europe",
    summary:
      "A Central European economy with a growing services and technology base.",
    ...base("Hungary", {}),
  },
]

export function getCountry(slug: string): CountryData | undefined {
  return countries.find((c) => c.slug === slug)
}

export const featuredCountrySlugs = ["spain", "portugal"] as const
