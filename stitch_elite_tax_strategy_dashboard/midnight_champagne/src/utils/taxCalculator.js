const oldRegimeSlabs = [
  { limit: 250000, rate: 0 },
  { limit: 500000, rate: 0.05 },
  { limit: 1000000, rate: 0.2 },
  { limit: Infinity, rate: 0.3 },
];

const newRegimeSlabs = [
  { limit: 300000, rate: 0 },
  { limit: 700000, rate: 0.05 },
  { limit: 1000000, rate: 0.1 },
  { limit: 1200000, rate: 0.15 },
  { limit: 1500000, rate: 0.2 },
  { limit: Infinity, rate: 0.3 },
];

function computeBySlabs(income, slabs) {
  let remaining = Math.max(income, 0);
  let previousLimit = 0;
  let tax = 0;

  for (const slab of slabs) {
    if (remaining <= 0) break;
    const taxableAtThisSlab = Math.min(remaining, slab.limit - previousLimit);
    tax += taxableAtThisSlab * slab.rate;
    remaining -= taxableAtThisSlab;
    previousLimit = slab.limit;
  }

  return tax;
}

export function calculateTaxComparison(form) {
  const income = Number(form.income || 0);
  const rentPaid = Number(form.rentPaid || 0);
  const homeLoanInterest = Number(form.homeLoanInterest || 0);
  const npsContribution = Number(form.npsContribution || 0);
  const healthInsurance = Number(form.healthInsurance || 0);
  const equityInvestment = Number(form.equityInvestment || 0);
  const debtInvestment = Number(form.debtInvestment || 0);

  const oldRegimeDeductions =
    Math.min(rentPaid * 0.4, 300000) +
    Math.min(homeLoanInterest, 200000) +
    Math.min(npsContribution, 50000) +
    Math.min(healthInsurance, 100000);

  const newRegimeDeductions = Math.min(npsContribution * 0.6, 50000);

  const oldTaxableIncome = Math.max(0, income - oldRegimeDeductions);
  const newTaxableIncome = Math.max(0, income - newRegimeDeductions);

  const oldTax = computeBySlabs(oldTaxableIncome, oldRegimeSlabs);
  const newTax = computeBySlabs(newTaxableIncome, newRegimeSlabs);

  const oldWithCess = oldTax * 1.04;
  const newWithCess = newTax * 1.04;
  const recommended = newWithCess < oldWithCess ? "New Regime" : "Old Regime";

  const investmentsTotal = equityInvestment + debtInvestment;
  const potentialExtraSaving = Math.max(0, 150000 - investmentsTotal * 0.1);

  return {
    oldTax: Math.round(oldWithCess),
    newTax: Math.round(newWithCess),
    savings: Math.max(0, Math.round(oldWithCess - newWithCess)),
    recommended,
    potentialExtraSaving: Math.round(potentialExtraSaving),
  };
}
