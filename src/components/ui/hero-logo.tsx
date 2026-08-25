"use client";

import { motion } from "framer-motion";
import { Logo } from "@/components/ui/logo";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { easePremium } from "@/lib/motion";

export function HeroLogo() {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, scale: 0.88, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.85, ease: easePremium, delay: 0.35 }}
    >
      <div className="pointer-events-none absolute -inset-8 rounded-full bg-bf-gold/20 blur-3xl bf-pulse-gold" />
      <motion.div
        animate={reduced ? undefined : { y: [0, -8, 0] }}
        transition={
          reduced
            ? undefined
            : { duration: 6, repeat: Infinity, ease: "easeInOut" }
        }
        className="relative"
      >
        <div className="relative overflow-hidden rounded-full">
          <Logo size="hero" showText={false} />
          {!reduced ? (
            <div
              className="pointer-events-none absolute inset-0 overflow-hidden rounded-full"
              aria-hidden
            >
              <div className="bf-logo-sweep absolute inset-0" />
            </div>
          ) : null}
        </div>
      </motion.div>
    </motion.div>
  );
}
