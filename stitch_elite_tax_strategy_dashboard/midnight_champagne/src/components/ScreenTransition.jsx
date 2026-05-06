import { motion } from "framer-motion";

export default function ScreenTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -18 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="min-h-screen bg-background text-on-background"
    >
      {children}
    </motion.div>
  );
}
