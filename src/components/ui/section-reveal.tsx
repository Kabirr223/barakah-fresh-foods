"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { easePremium, fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface SectionRevealProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function SectionReveal({ children, className, id }: SectionRevealProps) {
  const reduced = useReducedMotion();

  return (
    <motion.section
      id={id}
      className={cn("scroll-mt-28", className)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={reduced ? fadeUp : staggerContainer(0.1)}
    >
      {children}
    </motion.section>
  );
}

export function RevealItem({
  children,
  className,
  variant = "fadeUp",
}: {
  children: ReactNode;
  className?: string;
  variant?: "fadeUp" | "scaleIn";
}) {
  const reduced = useReducedMotion();
  const variants: Variants = reduced
    ? fadeUp
    : variant === "scaleIn"
      ? {
          hidden: { opacity: 0, scale: 0.96 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.55, ease: easePremium },
          },
        }
      : fadeUp;

  return (
    <motion.div variants={variants} className={className}>
      {children}
    </motion.div>
  );
}
