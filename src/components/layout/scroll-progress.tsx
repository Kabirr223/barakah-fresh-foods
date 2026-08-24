"use client";

import { motion, useScroll } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-linear-to-r from-bf-leaf via-bf-gold to-bf-leaf"
      style={{ scaleX: scrollYProgress }}
      aria-hidden
    />
  );
}
