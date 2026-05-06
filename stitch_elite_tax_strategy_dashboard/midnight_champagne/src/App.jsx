import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import WelcomeScreen from "./pages/WelcomeScreen";
import FinancialProfileScreen from "./pages/FinancialProfileScreen";
import InvestmentTrackerScreen from "./pages/InvestmentTrackerScreen";
import SavingsAnalysisScreen from "./pages/SavingsAnalysisScreen";

export default function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/financial-profile" element={<FinancialProfileScreen />} />
        <Route path="/investment-tracker" element={<InvestmentTrackerScreen />} />
        <Route path="/savings-analysis" element={<SavingsAnalysisScreen />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
}
