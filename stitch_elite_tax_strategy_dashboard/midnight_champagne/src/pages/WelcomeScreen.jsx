import { useNavigate } from "react-router-dom";
import ScreenTransition from "../components/ScreenTransition";

export default function WelcomeScreen() {
  const navigate = useNavigate();

  return (
    <ScreenTransition>
      <header className="mx-auto flex h-20 w-full max-w-page items-center justify-between px-6">
        <h1 className="font-heading text-2xl font-bold text-secondary">Tax Optimizer</h1>
        <button className="text-sm text-primary">help_outline</button>
      </header>

      <main className="mx-auto flex min-h-[calc(100vh-80px)] w-full max-w-page flex-col items-center px-6 pb-12 pt-6">
        <div className="w-full max-w-md space-y-stack-lg text-center">
          <div className="overflow-hidden rounded-lg border border-outline-variant">
            <div className="h-56 bg-gradient-to-br from-primary-container via-surface-container-high to-secondary-container" />
          </div>
          <h2 className="font-heading text-4xl font-bold leading-tight">
            Optimize Your Wealth.
            <br />
            Minimize Your Tax.
          </h2>
          <p className="text-lg text-on-surface-variant">
            Secure your financial legacy with institutional-grade tax strategies tailored for high-net-worth portfolios.
          </p>
          <div className="space-y-3">
            <button
              type="button"
              onClick={() => navigate("/financial-profile")}
              className="h-14 w-full rounded-lg bg-secondary px-6 font-semibold text-[#412d00] transition hover:brightness-105"
            >
              Start Analysis
            </button>
            <button
              type="button"
              className="h-14 w-full rounded-lg border border-secondary bg-transparent px-6 font-semibold text-secondary transition hover:bg-secondary/10"
            >
              View Sample Report
            </button>
          </div>
        </div>
      </main>
    </ScreenTransition>
  );
}
