// Illustrative salary model. Figures are simplified approximations for
// demonstration only and must not be relied upon for real tax decisions.

export interface TaxBracket {
  upTo: number // upper bound of bracket (Infinity for the top)
  rate: number // marginal rate (0-1)
}

export interface TaxRegime {
  id: string
  label: string
  /** If set, a flat rate applies to all employment income instead of brackets. */
  flatRate?: number
  brackets?: TaxBracket[]
  /** Personal allowance deducted before tax. */
  allowance?: number
}

export interface CountryTax {
  code: string
  slug: string
  name: string
  currency: string
  currencySymbol: string
  employeeSocialRate: number // share of gross paid by employee
  employeeSocialCap?: number // cap on the base used for employee contributions
  employerSocialRate: number // share of gross paid by employer (on top)
  employerSocialCap?: number
  regimes: TaxRegime[]
  /** Per-dependant tax reduction (annual). */
  dependantRelief: number
  /** Additional allowance for married single-earner households. */
  marriedAllowance: number
}

const standardBrackets = (a: number, b: number, c: number, d: number): TaxBracket[] => [
  { upTo: 12000, rate: a },
  { upTo: 30000, rate: b },
  { upTo: 60000, rate: c },
  { upTo: Number.POSITIVE_INFINITY, rate: d },
]

export const countryTax: CountryTax[] = [
  {
    code: "ES",
    slug: "spain",
    name: "Spain",
    currency: "EUR",
    currencySymbol: "€",
    employeeSocialRate: 0.0635,
    employeeSocialCap: 56646,
    employerSocialRate: 0.305,
    employerSocialCap: 56646,
    dependantRelief: 600,
    marriedAllowance: 3400,
    regimes: [
      {
        id: "standard",
        label: "Standard (IRPF)",
        allowance: 5550,
        brackets: [
          { upTo: 12450, rate: 0.19 },
          { upTo: 20200, rate: 0.24 },
          { upTo: 35200, rate: 0.3 },
          { upTo: 60000, rate: 0.37 },
          { upTo: 300000, rate: 0.45 },
          { upTo: Number.POSITIVE_INFINITY, rate: 0.47 },
        ],
      },
      { id: "beckham", label: "Beckham Law (24%)", flatRate: 0.24 },
    ],
  },
  {
    code: "PT",
    slug: "portugal",
    name: "Portugal",
    currency: "EUR",
    currencySymbol: "€",
    employeeSocialRate: 0.11,
    employerSocialRate: 0.2375,
    dependantRelief: 600,
    marriedAllowance: 2800,
    regimes: [
      {
        id: "standard",
        label: "Standard (IRS)",
        allowance: 4104,
        brackets: [
          { upTo: 7703, rate: 0.1325 },
          { upTo: 11623, rate: 0.18 },
          { upTo: 16472, rate: 0.23 },
          { upTo: 21321, rate: 0.26 },
          { upTo: 27146, rate: 0.3275 },
          { upTo: 39791, rate: 0.37 },
          { upTo: 51997, rate: 0.435 },
          { upTo: 81199, rate: 0.45 },
          { upTo: Number.POSITIVE_INFINITY, rate: 0.48 },
        ],
      },
      { id: "nhr", label: "IFICI / flat (20%)", flatRate: 0.2 },
    ],
  },
  {
    code: "DE",
    slug: "germany",
    name: "Germany",
    currency: "EUR",
    currencySymbol: "€",
    employeeSocialRate: 0.205,
    employeeSocialCap: 62100,
    employerSocialRate: 0.205,
    employerSocialCap: 62100,
    dependantRelief: 900,
    marriedAllowance: 11604,
    regimes: [
      {
        id: "standard",
        label: "Standard (Lohnsteuer)",
        allowance: 11604,
        brackets: standardBrackets(0.14, 0.24, 0.35, 0.42),
      },
    ],
  },
  {
    code: "FR",
    slug: "france",
    name: "France",
    currency: "EUR",
    currencySymbol: "€",
    employeeSocialRate: 0.22,
    employerSocialRate: 0.42,
    dependantRelief: 1500,
    marriedAllowance: 5000,
    regimes: [
      {
        id: "standard",
        label: "Standard (IR)",
        allowance: 11294,
        brackets: [
          { upTo: 28797, rate: 0.11 },
          { upTo: 82341, rate: 0.3 },
          { upTo: 177106, rate: 0.41 },
          { upTo: Number.POSITIVE_INFINITY, rate: 0.45 },
        ],
      },
    ],
  },
  {
    code: "NL",
    slug: "netherlands",
    name: "Netherlands",
    currency: "EUR",
    currencySymbol: "€",
    employeeSocialRate: 0.275,
    employeeSocialCap: 38098,
    employerSocialRate: 0.18,
    dependantRelief: 0,
    marriedAllowance: 0,
    regimes: [
      {
        id: "standard",
        label: "Standard (Box 1)",
        allowance: 0,
        brackets: [
          { upTo: 38098, rate: 0.0932 },
          { upTo: 75518, rate: 0.3697 },
          { upTo: Number.POSITIVE_INFINITY, rate: 0.495 },
        ],
      },
      { id: "ruling30", label: "30% ruling (approx.)", flatRate: 0.3 },
    ],
  },
  {
    code: "BE",
    slug: "belgium",
    name: "Belgium",
    currency: "EUR",
    currencySymbol: "€",
    employeeSocialRate: 0.1307,
    employerSocialRate: 0.25,
    dependantRelief: 1800,
    marriedAllowance: 2000,
    regimes: [
      {
        id: "standard",
        label: "Standard (PB/IPP)",
        allowance: 10160,
        brackets: [
          { upTo: 15820, rate: 0.25 },
          { upTo: 27920, rate: 0.4 },
          { upTo: 48320, rate: 0.45 },
          { upTo: Number.POSITIVE_INFINITY, rate: 0.5 },
        ],
      },
    ],
  },
  {
    code: "IE",
    slug: "ireland",
    name: "Ireland",
    currency: "EUR",
    currencySymbol: "€",
    employeeSocialRate: 0.04,
    employerSocialRate: 0.1115,
    dependantRelief: 0,
    marriedAllowance: 5000,
    regimes: [
      {
        id: "standard",
        label: "Standard (PAYE)",
        allowance: 0,
        brackets: [
          { upTo: 42000, rate: 0.2 },
          { upTo: Number.POSITIVE_INFINITY, rate: 0.4 },
        ],
      },
    ],
  },
  {
    code: "IT",
    slug: "italy",
    name: "Italy",
    currency: "EUR",
    currencySymbol: "€",
    employeeSocialRate: 0.0949,
    employerSocialRate: 0.3,
    dependantRelief: 950,
    marriedAllowance: 800,
    regimes: [
      {
        id: "standard",
        label: "Standard (IRPEF)",
        allowance: 0,
        brackets: [
          { upTo: 28000, rate: 0.23 },
          { upTo: 50000, rate: 0.35 },
          { upTo: Number.POSITIVE_INFINITY, rate: 0.43 },
        ],
      },
      { id: "impatriati", label: "Impatriati (approx. 50%)", flatRate: 0.215 },
    ],
  },
]

export interface SalaryInput {
  gross: number
  countryCode: string
  regimeId: string
  employmentType: "employee" | "contractor"
  married: boolean
  dependants: number
}

export interface SalaryResult {
  gross: number
  incomeTax: number
  employeeSocial: number
  employerSocial: number
  net: number
  totalDeductions: number
  employerCost: number
  currencySymbol: string
  netMonthly: number
  effectiveRate: number
}

function progressiveTax(taxable: number, brackets: TaxBracket[]): number {
  let tax = 0
  let lower = 0
  for (const b of brackets) {
    if (taxable <= lower) break
    const slice = Math.min(taxable, b.upTo) - lower
    if (slice > 0) tax += slice * b.rate
    lower = b.upTo
  }
  return tax
}

export function getCountryTax(code: string): CountryTax {
  return countryTax.find((c) => c.code === code) ?? countryTax[0]
}

export function calculateSalary(input: SalaryInput): SalaryResult {
  const country = getCountryTax(input.countryCode)
  const regime = country.regimes.find((r) => r.id === input.regimeId) ?? country.regimes[0]
  const gross = Math.max(0, input.gross)

  // Social security
  const empBase = country.employeeSocialCap ? Math.min(gross, country.employeeSocialCap) : gross
  const employeeSocial =
    input.employmentType === "contractor"
      ? empBase * (country.employeeSocialRate * 1.2) // contractors bear a higher share
      : empBase * country.employeeSocialRate

  const erBase = country.employerSocialCap ? Math.min(gross, country.employerSocialCap) : gross
  const employerSocial =
    input.employmentType === "contractor" ? 0 : erBase * country.employerSocialRate

  // Taxable income
  let allowance = regime.allowance ?? 0
  if (input.married) allowance += country.marriedAllowance
  const dependantRelief = input.dependants * country.dependantRelief

  let incomeTax: number
  if (regime.flatRate != null) {
    incomeTax = Math.max(0, gross - employeeSocial) * regime.flatRate
  } else {
    const taxable = Math.max(0, gross - employeeSocial - allowance)
    incomeTax = Math.max(0, progressiveTax(taxable, regime.brackets ?? []) - dependantRelief)
  }

  const totalDeductions = incomeTax + employeeSocial
  const net = Math.max(0, gross - totalDeductions)
  const employerCost = gross + employerSocial

  return {
    gross,
    incomeTax,
    employeeSocial,
    employerSocial,
    net,
    totalDeductions,
    employerCost,
    currencySymbol: country.currencySymbol,
    netMonthly: net / 12,
    effectiveRate: gross > 0 ? totalDeductions / gross : 0,
  }
}
