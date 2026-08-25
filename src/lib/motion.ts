import type { Transition, Variants } from "framer-motion";

/** Premium easing curve used across the site. */
export const easePremium = [0.22, 1, 0.36, 1] as const;

export const viewportOnce = {
  once: true,
  margin: "-60px" as const,
  amount: 0.2 as const,
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easePremium },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: easePremium },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: easePremium },
  },
};

export const staggerContainer = (stagger = 0.1, delayChildren = 0): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren },
  },
});

export const productGridItem: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.98 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.35,
      ease: easePremium,
      delay: Math.min(i * 0.04, 0.32),
    },
  }),
  exit: {
    opacity: 0,
    scale: 0.98,
    transition: { duration: 0.2 },
  },
};

export const floatTransition = (reduced: boolean): Transition =>
  reduced
    ? { duration: 0 }
    : { duration: 5, repeat: Infinity, ease: "easeInOut" };
