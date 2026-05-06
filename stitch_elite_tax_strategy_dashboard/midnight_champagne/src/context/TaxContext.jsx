import { createContext, useContext, useMemo, useState } from "react";
import { calculateTaxComparison } from "../utils/taxCalculator";

const TaxContext = createContext(null);

const initialForm = {
  income: 3200000,
  employmentType: "Full-time Salaried",
  filingStatus: "Married Filing Jointly",
  dependents: 2,
  rentPaid: 450000,
  homeLoanInterest: 200000,
  npsContribution: 50000,
  healthInsurance: 75000,
  equityInvestment: 800000,
  debtInvestment: 540000,
};

export function TaxProvider({ children }) {
  const [form, setForm] = useState(initialForm);

  const results = useMemo(() => calculateTaxComparison(form), [form]);

  const updateField = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <TaxContext.Provider value={{ form, results, updateField }}>
      {children}
    </TaxContext.Provider>
  );
}

export function useTaxData() {
  const value = useContext(TaxContext);
  if (!value) {
    throw new Error("useTaxData must be used inside TaxProvider.");
  }
  return value;
}
