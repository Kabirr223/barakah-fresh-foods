"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";
import type { MotionValue } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { FruitDecorations } from "@/components/decor/fruit-outlines";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { useLenisScroll } from "@/components/providers/lenis-provider";
import { useCatalog } from "@/context/catalog-context";
const trustBadges = [
  "Fresh Daily Stock",
  "Wholesale Supply",
  "Quality Produce",
  "Reliable Service",
];

function useCountUp(target: number, durationMs = 1600) {
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.round(v));
  useEffect(() => {
    mv.set(0);
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / durationMs);
      const eased = 1 - (1 - t) ** 3;
      mv.set(target * eased);
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [durationMs, mv, target]);
  return rounded;
}

function StatNumber({ mv }: { mv: MotionValue<number> }) {
  const [n, setN] = useState(() => Math.round(mv.get()));
  useMotionValueEvent(mv, "change", (v) => setN(Math.round(v)));
  return <span>{n}</span>;
}

export function HeroSection() {
  const { scrollTo } = useLenisScroll();
  const { setActiveCategory } = useCatalog();
  const ref = useRef<HTMLElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const spotlight = useMotionTemplate`radial-gradient(520px circle at ${mx}px ${my}px, rgba(198, 168, 106, 0.15), transparent 65%)`;

  const productsCount = useCountUp(31);
  const yearsCount = useCountUp(15);
  const clientsCount = useCountUp(200);

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

      <div className="relative mx-auto w-full max-w-7xl px-4 py-32 sm:px-6 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="inline-flex items-center gap-2 rounded-full border border-bf-gold/30 bg-bf-gold/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-bf-gold"
          >
            Premium Wholesale · Leicester
          </motion.div>

          <motion.h1
            className="mt-8 font-heading text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-7xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            Fresh Wholesale{" "}
            <span className="text-gradient-gold">Fruit &amp; Vegetables</span>
          </motion.h1>

          <motion.p
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
          >
            Supplying quality fresh produce to restaurants, takeaways, caterers,
            retailers and businesses throughout Leicester.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
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

          <motion.ul
            className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {trustBadges.map((badge, i) => (
              <motion.li
                key={badge}
                className="flex items-center gap-2 text-sm text-white/80"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.35 + i * 0.08 }}
              >
                <span className="flex size-5 items-center justify-center rounded-full bg-bf-leaf/20 text-bf-leaf">
                  <Check className="size-3" strokeWidth={3} />
                </span>
                {badge}
              </motion.li>
            ))}
          </motion.ul>

          <motion.dl
            className="mx-auto mt-16 grid max-w-lg grid-cols-3 gap-6 border-t border-bf-gold/20 pt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.5 }}
          >
            <div>
              <dt className="text-[10px] font-medium uppercase tracking-wider text-bf-gold/70">
                Products
              </dt>
              <dd className="mt-1 font-heading text-2xl font-semibold tabular-nums text-white sm:text-3xl">
                <StatNumber mv={productsCount} />+
              </dd>
            </div>
            <div>
              <dt className="text-[10px] font-medium uppercase tracking-wider text-bf-gold/70">
                Years Serving
              </dt>
              <dd className="mt-1 font-heading text-2xl font-semibold tabular-nums text-white sm:text-3xl">
                <StatNumber mv={yearsCount} />+
              </dd>
            </div>
            <div>
              <dt className="text-[10px] font-medium uppercase tracking-wider text-bf-gold/70">
                Business Clients
              </dt>
              <dd className="mt-1 font-heading text-2xl font-semibold tabular-nums text-white sm:text-3xl">
                <StatNumber mv={clientsCount} />+
              </dd>
            </div>
          </motion.dl>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
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
