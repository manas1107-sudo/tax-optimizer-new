import { useNavigate } from "react-router-dom";
import ScreenTransition from "../components/ScreenTransition";
import { useTaxData } from "../context/TaxContext";

function formatINR(value) {
  return `Rs ${Math.round(value).toLocaleString("en-IN")}`;
}

export default function SavingsAnalysisScreen() {
  const navigate = useNavigate();
  const { form, updateField, results } = useTaxData();

  return (
    <ScreenTransition>
      <header className="sticky top-0 z-20 border-b border-outline-variant bg-surface/90 backdrop-blur">
        <div className="mx-auto flex h-20 w-full max-w-page items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <button type="button" onClick={() => navigate("/investment-tracker")} className="text-on-surface-variant">
              Back
            </button>
            <h1 className="font-heading text-2xl font-bold text-secondary">Tax Optimizer</h1>
          </div>
          <button type="button" className="rounded border border-secondary px-4 py-2 text-sm text-secondary">
            Contact Advisor
          </button>
        </div>
      </header>

      <main className="mx-auto w-full max-w-page space-y-stack-md px-6 pb-28 pt-8">
        <section className="rounded-lg border-t-2 border-secondary bg-secondary-container p-6">
          <p className="text-xs uppercase tracking-[0.1em] text-secondary">Total Optimized Savings</p>
          <h2 className="mt-2 font-heading text-4xl font-bold text-secondary">{formatINR(results.savings)}</h2>
          <p className="mt-1 text-on-surface-variant">Recommended path: {results.recommended}</p>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-lg border border-outline-variant bg-primary-container p-6">
            <h3 className="font-heading text-xl">Regime Comparison</h3>
            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-on-surface-variant">Old Regime Tax</span>
                <strong>{formatINR(results.oldTax)}</strong>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-on-surface-variant">New Regime Tax</span>
                <strong className="text-secondary">{formatINR(results.newTax)}</strong>
              </div>
              <div className="flex items-center justify-between border-t border-outline-variant pt-3">
                <span className="text-on-surface-variant">Potential Extra Saving</span>
                <strong className="text-tertiary">{formatINR(results.potentialExtraSaving)}</strong>
              </div>
            </div>
          </article>

          <article className="rounded-lg border border-outline-variant bg-primary-container p-6">
            <h3 className="font-heading text-xl">Liability Inputs</h3>
            <div className="mt-4 space-y-3">
              <label className="block">
                <span className="mb-1 block text-xs uppercase tracking-[0.1em] text-on-surface-variant">Equity Allocation</span>
                <input
                  className="w-full rounded border border-outline-variant bg-surface-container px-3 py-2"
                  type="number"
                  value={form.equityInvestment}
                  onChange={(e) => updateField("equityInvestment", Number(e.target.value))}
                />
              </label>
              <label className="block">
                <span className="mb-1 block text-xs uppercase tracking-[0.1em] text-on-surface-variant">Debt Allocation</span>
                <input
                  className="w-full rounded border border-outline-variant bg-surface-container px-3 py-2"
                  type="number"
                  value={form.debtInvestment}
                  onChange={(e) => updateField("debtInvestment", Number(e.target.value))}
                />
              </label>
              <button type="button" className="w-full rounded-lg border border-secondary px-4 py-3 font-semibold text-secondary">
                Recalculate Projection
              </button>
            </div>
          </article>
        </section>

        <section className="rounded-lg border border-outline-variant bg-primary-container p-6">
          <h3 className="font-heading text-xl">Recommended Actions</h3>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <button type="button" className="rounded-lg border border-secondary px-4 py-3 text-left hover:bg-secondary/10">
              Maximize Section 80D Coverage
            </button>
            <button type="button" className="rounded-lg border border-secondary px-4 py-3 text-left hover:bg-secondary/10">
              Submit Pending HRA Receipts
            </button>
            <button type="button" className="rounded-lg border border-secondary px-4 py-3 text-left hover:bg-secondary/10">
              Increase NPS 80CCD(1B) Utilization
            </button>
            <button type="button" className="rounded-lg border border-secondary px-4 py-3 text-left hover:bg-secondary/10">
              Optimize Capital Gains Harvesting
            </button>
          </div>
        </section>
      </main>
    </ScreenTransition>
  );
}
