import { useNavigate } from "react-router-dom";
import ProgressHeader from "../components/ProgressHeader";
import ScreenTransition from "../components/ScreenTransition";
import { useTaxData } from "../context/TaxContext";

function AmountField({ label, value, onChange }) {
  return (
    <div className="space-y-2">
      <label className="block text-xs font-semibold uppercase tracking-[0.1em] text-on-surface-variant">{label}</label>
      <input
        className="w-full rounded-lg border border-outline-variant bg-surface-container-lowest px-4 py-3 text-on-surface focus:border-secondary focus:outline-none"
        type="number"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </div>
  );
}

export default function InvestmentTrackerScreen() {
  const navigate = useNavigate();
  const { form, updateField, results } = useTaxData();

  return (
    <ScreenTransition>
      <header className="mx-auto flex h-20 w-full max-w-page items-center justify-between border-b border-outline-variant px-6">
        <h2 className="font-heading text-2xl font-bold text-secondary">Tax Optimizer</h2>
      </header>

      <main className="mx-auto w-full max-w-lg px-6 pb-44 pt-8">
        <ProgressHeader step={3} percent={75} title="Investment Tracker" subtitle="Capture deduction-ready annual values." />

        <section className="space-y-4">
          <div className="rounded-lg border border-outline-variant bg-surface-container p-4">
            <AmountField label="Annual Rent Paid (HRA)" value={form.rentPaid} onChange={(value) => updateField("rentPaid", value)} />
          </div>
          <div className="rounded-lg border border-outline-variant bg-surface-container p-4">
            <AmountField
              label="Home Loan Interest - Section 24(b)"
              value={form.homeLoanInterest}
              onChange={(value) => updateField("homeLoanInterest", value)}
            />
          </div>
          <div className="rounded-lg border border-outline-variant bg-surface-container p-4">
            <AmountField
              label="NPS Contribution - Section 80CCD"
              value={form.npsContribution}
              onChange={(value) => updateField("npsContribution", value)}
            />
          </div>
          <div className="rounded-lg border border-outline-variant bg-surface-container p-4">
            <AmountField
              label="Health Insurance Premium - Section 80D"
              value={form.healthInsurance}
              onChange={(value) => updateField("healthInsurance", value)}
            />
          </div>
        </section>
      </main>

      <footer className="fixed bottom-0 left-0 right-0 border-t border-outline-variant bg-surface-container p-6 shadow-ambient">
        <div className="mx-auto flex w-full max-w-lg items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.1em] text-on-surface-variant">Estimated Total Deduction</p>
            <p className="font-heading text-2xl text-secondary">
              Rs {(form.rentPaid + form.homeLoanInterest + form.npsContribution + form.healthInsurance).toLocaleString("en-IN")}
            </p>
          </div>
          <button
            type="button"
            onClick={() => navigate("/savings-analysis")}
            className="rounded-lg bg-secondary px-5 py-3 font-semibold text-[#412d00]"
          >
            Continue to Analysis
          </button>
        </div>
        <div className="mx-auto mt-2 w-full max-w-lg">
          <p className="text-sm text-on-surface-variant">Current optimized savings estimate: Rs {results.savings.toLocaleString("en-IN")}</p>
        </div>
      </footer>
    </ScreenTransition>
  );
}
