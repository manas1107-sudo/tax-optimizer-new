import { useNavigate } from "react-router-dom";
import ProgressHeader from "../components/ProgressHeader";
import ScreenTransition from "../components/ScreenTransition";
import { useTaxData } from "../context/TaxContext";

export default function FinancialProfileScreen() {
  const navigate = useNavigate();
  const { form, updateField } = useTaxData();

  return (
    <ScreenTransition>
      <header className="mx-auto flex h-20 w-full max-w-page items-center justify-between border-b border-outline-variant px-6">
        <h2 className="font-heading text-2xl font-bold text-secondary">Tax Optimizer</h2>
      </header>

      <main className="mx-auto w-full max-w-lg px-6 pb-32 pt-8">
        <ProgressHeader
          step={2}
          percent={50}
          title="Financial Profile"
          subtitle="Please provide your annual earnings and tax status to optimize your projection."
        />

        <form className="space-y-stack-lg">
          <div className="space-y-2">
            <label className="block text-xs font-semibold uppercase tracking-[0.1em] text-on-surface-variant">
              Annual Gross Income
            </label>
            <input
              className="w-full rounded-lg border border-outline-variant bg-surface-container px-4 py-3 text-lg focus:border-secondary focus:outline-none"
              type="number"
              value={form.income}
              onChange={(e) => updateField("income", Number(e.target.value))}
            />
          </div>

          <div className="space-y-2">
            <label className="block text-xs font-semibold uppercase tracking-[0.1em] text-on-surface-variant">
              Employment Type
            </label>
            <select
              className="w-full rounded-lg border border-outline-variant bg-surface-container px-4 py-3 focus:border-secondary focus:outline-none"
              value={form.employmentType}
              onChange={(e) => updateField("employmentType", e.target.value)}
            >
              <option>Full-time Salaried</option>
              <option>Contract / Freelance</option>
              <option>Business Owner</option>
              <option>Retired</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-xs font-semibold uppercase tracking-[0.1em] text-on-surface-variant">
              Filing Status
            </label>
            <div className="grid gap-3">
              {["Single", "Married Filing Jointly"].map((status) => (
                <button
                  key={status}
                  type="button"
                  onClick={() => updateField("filingStatus", status)}
                  className={`w-full rounded-lg border px-4 py-4 text-left transition ${
                    form.filingStatus === status
                      ? "border-secondary bg-secondary-container text-secondary"
                      : "border-outline-variant bg-surface-container text-on-surface"
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-xs font-semibold uppercase tracking-[0.1em] text-on-surface-variant">
              Number of Dependents
            </label>
            <div className="flex items-center justify-between rounded-lg border border-outline-variant bg-surface-container p-3">
              <button
                type="button"
                className="h-10 w-10 rounded bg-surface-container-high"
                onClick={() => updateField("dependents", Math.max(0, form.dependents - 1))}
              >
                -
              </button>
              <span className="font-heading text-2xl">{form.dependents}</span>
              <button
                type="button"
                className="h-10 w-10 rounded bg-surface-container-high"
                onClick={() => updateField("dependents", form.dependents + 1)}
              >
                +
              </button>
            </div>
          </div>
        </form>
      </main>

      <footer className="fixed bottom-0 left-0 right-0 border-t border-outline-variant bg-surface/90 p-6 backdrop-blur">
        <div className="mx-auto flex w-full max-w-lg gap-4">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="flex-1 rounded-lg border border-secondary py-3 font-semibold text-secondary"
          >
            Back
          </button>
          <button
            type="button"
            onClick={() => navigate("/investment-tracker")}
            className="flex-[2] rounded-lg bg-secondary py-3 font-semibold text-[#412d00]"
          >
            Next Step
          </button>
        </div>
      </footer>
    </ScreenTransition>
  );
}
