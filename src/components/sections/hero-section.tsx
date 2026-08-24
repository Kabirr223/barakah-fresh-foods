"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { FruitDecorations } from "@/components/decor/fruit-outlines";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { Logo } from "@/components/ui/logo";
import { useLenisScroll } from "@/components/providers/lenis-provider";
import {
  getWhatsAppStockListUrl,
  siteConfig,
} from "@/config/site";

export function HeroSection() {
  const { scrollTo } = useLenisScroll();

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden scroll-mt-24"
    >
      <div className="absolute inset-0 bg-luxury-mesh" />
      <FruitDecorations />
      <div className="absolute inset-0 bg-linear-to-b from-bf-charcoal/40 via-transparent to-bf-charcoal" />

      <div className="relative mx-auto flex w-full max-w-3xl flex-col items-center justify-center px-4 py-28 text-center sm:px-6 sm:py-32 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="pointer-events-none absolute -inset-6 rounded-full bg-bf-gold/10" />
          <Logo size="hero" showText={false} />
        </motion.div>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1 className="font-heading text-2xl font-semibold tracking-wide text-white sm:text-4xl">
            {siteConfig.name}
          </h1>
          <p className="mt-2 text-base text-bf-gold/90 sm:text-xl">
            {siteConfig.tagline}
          </p>
        </motion.div>

        <motion.div
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-bf-leaf/40 bg-bf-leaf/15 px-5 py-2 text-sm font-semibold text-bf-leaf"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <span className="inline-flex size-2 rounded-full bg-bf-leaf" />
          Daily Stock Updates Available
        </motion.div>

        <motion.p
          className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Supplying quality fresh produce to restaurants, takeaways, caterers,
          retailers and businesses throughout Leicester and surrounding areas.
        </motion.p>

        <motion.div
          className="mt-10 flex w-full max-w-xl flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:justify-center"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.25 }}
        >
          <MagneticButton
            onClick={() => window.open(getWhatsAppStockListUrl(), "_blank")}
            className="inline-flex h-13 w-full items-center justify-center gap-2 rounded-full bg-bf-leaf px-8 text-base font-semibold text-white shadow-lg shadow-bf-leaf/25 sm:w-auto"
          >
            Request Today&apos;s Stock List
          </MagneticButton>
          <MagneticButton
            onClick={() => scrollTo("contact")}
            className="inline-flex h-13 w-full items-center justify-center gap-2 rounded-full border border-bf-gold/40 bg-bf-gold/10 px-8 text-base font-semibold text-bf-gold sm:w-auto"
          >
            Contact Us
          </MagneticButton>
          <MagneticButton
            onClick={() => window.open(getWhatsAppStockListUrl(), "_blank")}
            className="inline-flex h-13 w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-8 text-base font-semibold text-white shadow-lg shadow-[#25D366]/30 sm:w-auto"
          >
            <MessageCircle className="size-4" />
            WhatsApp Order Now
          </MagneticButton>
        </motion.div>

        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-4 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
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
      </div>
    </section>
  );
}
