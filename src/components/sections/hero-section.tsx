"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { FruitDecorations } from "@/components/decor/fruit-outlines";
import { HeroLogo } from "@/components/ui/hero-logo";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { useLenisScroll } from "@/components/providers/lenis-provider";
import { useFinePointer, useReducedMotion } from "@/hooks/use-reduced-motion";
import { easePremium, staggerContainer } from "@/lib/motion";
import {
  getWhatsAppStockListUrl,
  siteConfig,
} from "@/config/site";

const item = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easePremium },
  },
};

export function HeroSection() {
  const { scrollTo } = useLenisScroll();
  const reduced = useReducedMotion();
  const finePointer = useFinePointer();

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden scroll-mt-24"
    >
      <motion.div
        className="absolute inset-0 bg-hero-animated"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: easePremium }}
      />
      <div className="absolute inset-0 bg-luxury-mesh" />
      <FruitDecorations />

      {!finePointer && !reduced ? (
        <div
          className="pointer-events-none absolute inset-0 bf-ambient-glow"
          aria-hidden
        >
          <div className="absolute left-1/4 top-1/4 size-64 rounded-full bg-bf-gold/10 blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 size-72 rounded-full bg-bf-leaf/10 blur-3xl" />
        </div>
      ) : null}

      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        {!reduced
          ? Array.from({ length: 6 }).map((_, i) => (
              <span
                key={i}
                className="bf-float absolute size-1 rounded-full bg-bf-gold/30"
                style={{
                  left: `${12 + i * 14}%`,
                  top: `${20 + (i % 3) * 22}%`,
                  animationDelay: `${i * 0.8}s`,
                }}
              />
            ))
          : null}
      </div>

      <div className="absolute inset-0 bg-linear-to-b from-bf-charcoal/40 via-transparent to-bf-charcoal" />

      <motion.div
        className="relative mx-auto flex w-full max-w-3xl flex-col items-center justify-center px-4 py-28 text-center sm:px-6 sm:py-32 lg:px-8"
        variants={reduced ? undefined : staggerContainer(0.12, 0.15)}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={item}>
          <HeroLogo />
        </motion.div>

        <motion.div className="mt-8" variants={item}>
          <h1 className="font-heading text-2xl font-semibold tracking-wide text-white sm:text-4xl">
            {siteConfig.name}
          </h1>
          <p className="mt-2 text-base text-bf-gold/90 sm:text-xl">
            {siteConfig.tagline}
          </p>
        </motion.div>

        <motion.div
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-bf-leaf/40 bg-bf-leaf/15 px-5 py-2 text-sm font-semibold text-bf-leaf shadow-[0_0_24px_-4px_rgba(76,175,80,0.45)]"
          variants={item}
        >
          <span className="relative flex size-2">
            {!reduced ? (
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-bf-leaf opacity-50 motion-reduce:animate-none" />
            ) : null}
            <span className="relative inline-flex size-2 rounded-full bg-bf-leaf" />
          </span>
          Daily Stock Updates Available
        </motion.div>

        <motion.p
          className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg"
          variants={item}
        >
          Supplying quality fresh produce to restaurants, takeaways, caterers,
          retailers and businesses throughout Leicester and surrounding areas.
        </motion.p>

        <motion.div
          className="mt-10 flex w-full max-w-xl flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:justify-center"
          variants={item}
        >
          <MagneticButton
            onClick={() => window.open(getWhatsAppStockListUrl(), "_blank")}
            className="inline-flex h-13 w-full items-center justify-center gap-2 rounded-full bg-bf-leaf px-8 text-base font-semibold text-white shadow-lg shadow-bf-leaf/25 transition-transform hover:-translate-y-0.5 active:scale-[0.98] sm:w-auto"
          >
            Request Today&apos;s Stock List
          </MagneticButton>
          <MagneticButton
            onClick={() => scrollTo("contact")}
            className="inline-flex h-13 w-full items-center justify-center gap-2 rounded-full border border-bf-gold/40 bg-bf-gold/10 px-8 text-base font-semibold text-bf-gold backdrop-blur-sm transition-transform hover:-translate-y-0.5 active:scale-[0.98] sm:w-auto"
          >
            Contact Us
          </MagneticButton>
          <MagneticButton
            onClick={() => window.open(getWhatsAppStockListUrl(), "_blank")}
            className="inline-flex h-13 w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-8 text-base font-semibold text-white shadow-lg shadow-[#25D366]/30 transition-transform hover:-translate-y-0.5 active:scale-[0.98] sm:w-auto"
          >
            <MessageCircle className="size-4" />
            WhatsApp Order Now
          </MagneticButton>
        </motion.div>

        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-4 text-sm"
          variants={item}
        >
          <a
            href={`tel:${siteConfig.phoneE164}`}
            className="text-white/70 underline-offset-4 transition hover:text-bf-gold hover:underline"
          >
            {siteConfig.phoneDisplay}
          </a>
          <span className="text-white/30" aria-hidden>
            ·
          </span>
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-white/70 underline-offset-4 transition hover:text-bf-gold hover:underline"
          >
            {siteConfig.email}
          </a>
        </motion.div>
      </motion.div>

      {!reduced ? (
        <motion.div
          className="absolute bottom-20 left-1/2 -translate-x-1/2 lg:bottom-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          aria-hidden
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="h-10 w-6 rounded-full border-2 border-bf-gold/40 p-1">
              <motion.div
                className="mx-auto h-2 w-1 rounded-full bg-bf-gold"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </section>
  );
}
