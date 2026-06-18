export type CalculatorInput = {
  gross: number;
  country: string;
  regime?: string;
  employmentType?: "employee" | "self-employed" | "company-owner";
  employerFeePercent?: number;
  serviceFeePercent?: number;
};

const taxRates: Record<string, number> = {
  spain: 0.273, portugal: 0.297, belgium: 0.508, netherlands: 0.487, germany: 0.536, france: 0.597,
  ireland: 0.39, luxembourg: 0.36, switzerland: 0.31, italy: 0.47, austria: 0.49, poland: 0.34,
  sweden: 0.43, denmark: 0.45, finland: 0.44, czechia: 0.32, estonia: 0.28, malta: 0.25
};

export function calculateSalary(input: CalculatorInput) {
  let taxRate = taxRates[input.country] ?? 0.42;
  if (input.country === "spain" && input.regime === "beckham") taxRate = 0.273;
  if (input.country === "portugal" && input.regime === "nhr") taxRate = 0.297;
  if (input.employmentType === "self-employed") taxRate = Math.max(0.22, taxRate - 0.06);
  if (input.employmentType === "company-owner") taxRate = Math.max(0.20, taxRate - 0.08);

  const taxes = Math.round(input.gross * taxRate);
  const net = Math.round(input.gross - taxes);
  const employerMultiplier = input.country === "spain" || input.country === "portugal" ? 1.21 : 1.30;
  const employerCost = Math.round(input.gross * employerMultiplier);
  const serviceFee = Math.round(input.gross * ((input.serviceFeePercent ?? 3) / 100));
  const totalKaiRiOraCost = employerCost + serviceFee;
  return { net, taxes, taxRate, employerCost, serviceFee, totalKaiRiOraCost };
}

export function formatEUR(value: number) {
  return new Intl.NumberFormat("en-IE", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(value);
}
