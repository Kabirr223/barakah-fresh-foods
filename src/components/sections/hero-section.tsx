"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { FruitDecorations } from "@/components/decor/fruit-outlines";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { Logo } from "@/components/ui/logo";
import { useLenisScroll } from "@/components/providers/lenis-provider";
import { useCatalog } from "@/context/catalog-context";
import { siteConfig } from "@/config/site";

export function HeroSection() {
  const { scrollTo } = useLenisScroll();
  const { setActiveCategory } = useCatalog();
  const ref = useRef<HTMLElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const spotlight = useMotionTemplate`radial-gradient(520px circle at ${mx}px ${my}px, rgba(198, 168, 106, 0.15), transparent 65%)`;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      mx.set(e.clientX - r.left);
      my.set(e.clientY - r.top);
    };
    el.addEventListener("pointermove", onMove);
    return () => el.removeEventListener("pointermove", onMove);
  }, [mx, my]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative flex min-h-[100svh] items-center overflow-hidden scroll-mt-24"
    >
      <div className="absolute inset-0 bg-luxury-mesh" />
      <FruitDecorations />
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{ background: spotlight }}
      />
      <div className="absolute inset-0 bg-linear-to-b from-bf-charcoal/40 via-transparent to-bf-charcoal" />

      <div className="relative mx-auto w-full max-w-7xl px-4 py-28 sm:px-6 sm:py-32 lg:px-8 lg:py-36">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <Logo size="hero" />
          </motion.div>

          <motion.div
            className="mx-auto mt-8 inline-flex items-center gap-2 rounded-full border border-bf-leaf/40 bg-bf-leaf/15 px-5 py-2 text-sm font-semibold text-bf-leaf shadow-[0_0_24px_-4px_rgba(76,175,80,0.45)]"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-bf-leaf opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-bf-leaf" />
            </span>
            Daily Stock Updates Available
          </motion.div>

          <motion.p
            className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3 }}
          >
            Supplying quality fresh produce to restaurants, takeaways, caterers,
            retailers and businesses throughout Leicester.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.38 }}
          >
            <MagneticButton
              onClick={() => {
                setActiveCategory("all");
                scrollTo("products");
              }}
              className="inline-flex h-13 items-center gap-2 rounded-full bg-bf-leaf px-8 text-base font-semibold text-white shadow-lg shadow-bf-leaf/25"
            >
              Browse Products
              <ArrowRight className="size-4" />
            </MagneticButton>
            <MagneticButton
              onClick={() => scrollTo("contact")}
              className="inline-flex h-13 items-center gap-2 rounded-full border border-bf-gold/40 bg-bf-gold/10 px-8 text-base font-semibold text-bf-gold backdrop-blur-sm"
            >
              Contact Us
            </MagneticButton>
          </motion.div>

          <motion.div
            className="mt-10 flex flex-wrap items-center justify-center gap-4 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
          >
            <a
              href={`tel:${siteConfig.phoneE164}`}
              className="text-white/70 underline-offset-4 transition hover:text-bf-gold hover:underline"
            >
              {siteConfig.phoneDisplay}
            </a>
            <span className="text-white/30">·</span>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-white/70 underline-offset-4 transition hover:text-bf-gold hover:underline"
            >
              {siteConfig.email}
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-20 left-1/2 -translate-x-1/2 lg:bottom-8"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="h-10 w-6 rounded-full border-2 border-bf-gold/40 p-1">
          <motion.div
            className="mx-auto h-2 w-1 rounded-full bg-bf-gold"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
