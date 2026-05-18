"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";
import type { MotionValue } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { useLenisScroll } from "@/components/providers/lenis-provider";
import { useCatalog } from "@/context/catalog-context";
import { products } from "@/data/products";

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

const floaters = [
  { src: "photo-1592841200221-a6898f307baa", label: "Tomatoes", className: "left-[6%] top-[18%] w-24 sm:w-32" },
  { src: "photo-1619566636858-adf3ef46400b", label: "Citrus", className: "right-[8%] top-[22%] w-28 sm:w-36" },
  { src: "photo-1597362925123-77861d3fbac7", label: "Greens", className: "left-[12%] bottom-[18%] w-24 sm:w-30" },
  { src: "photo-1603833665858-e61d17a86224", label: "Tropical", className: "right-[14%] bottom-[20%] w-28 sm:w-36" },
];

export function HeroSection() {
  const { scrollTo } = useLenisScroll();
  const { setActiveCategory } = useCatalog();
  const ref = useRef<HTMLElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const spotlight = useMotionTemplate`radial-gradient(520px circle at ${mx}px ${my}px, oklch(0.72 0.17 55 / 0.18), transparent 65%)`;

  const lines = products.length;
  const skus = 120;
  const clients = 480;

  const linesSpring = useCountUp(lines);
  const skusSpring = useCountUp(skus);
  const clientsSpring = useCountUp(clients);

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
      className="relative min-h-[100svh] overflow-hidden scroll-mt-24"
    >
      <div className="absolute inset-0 bg-mesh" />
      <motion.div
        className="pointer-events-none absolute inset-0 mix-blend-screen dark:mix-blend-normal"
        style={{ background: spotlight }}
      />

      <div className="absolute inset-0 bg-linear-to-b from-background/25 via-transparent to-background" />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-10 px-4 pb-24 pt-28 sm:px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8 lg:pb-32 lg:pt-32">
        <div className="relative z-10 max-w-2xl flex-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
          >
            <Sparkles className="size-3.5" />
            UK wholesale · Daily replenishment
          </motion.div>

          <motion.h1
            className="mt-6 font-heading text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            Premium fresh produce{" "}
            <span className="text-gradient-brand">delivered daily</span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
          >
            Wholesale fruit, vegetables, exotic produce, frozen foods, and
            groceries supplied to restaurants, retailers, caterers, and businesses
            across the UK.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
          >
            <Button
              size="lg"
              className="h-12 rounded-full px-7 text-base shadow-lg shadow-primary/25"
              onClick={() => {
                setActiveCategory("all");
                scrollTo("products");
              }}
            >
              Explore products
              <ArrowRight className="size-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 rounded-full border-primary/25 px-7 text-base backdrop-blur-sm"
              onClick={() => scrollTo("contact")}
            >
              Get wholesale pricing
            </Button>
          </motion.div>

          <motion.dl
            className="mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-border/70 pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.5 }}
          >
            <div>
              <dt className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                Catalogue lines
              </dt>
              <dd className="mt-1 font-heading text-2xl font-semibold tabular-nums sm:text-3xl">
                <StatNumber mv={linesSpring} />+
              </dd>
            </div>
            <div>
              <dt className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                SKUs managed
              </dt>
              <dd className="mt-1 font-heading text-2xl font-semibold tabular-nums sm:text-3xl">
                <StatNumber mv={skusSpring} />+
              </dd>
            </div>
            <div>
              <dt className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                Partner sites
              </dt>
              <dd className="mt-1 font-heading text-2xl font-semibold tabular-nums sm:text-3xl">
                <StatNumber mv={clientsSpring} />+
              </dd>
            </div>
          </motion.dl>
        </div>

        <div className="relative z-10 mt-4 flex flex-1 justify-center lg:mt-0 lg:justify-end">
          <div className="relative aspect-square w-full max-w-md">
            <motion.div
              className="absolute inset-6 rounded-[2rem] bg-linear-to-br from-primary/25 via-accent/15 to-bf-lime/20 blur-3xl"
              animate={{ scale: [1, 1.05, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="glass-panel relative overflow-hidden rounded-[2rem] ring-1 ring-white/30"
              initial={{ opacity: 0, y: 30, rotate: -2 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ type: "spring", stiffness: 120, damping: 18 }}
            >
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80"
                  alt="Premium wholesale produce display"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 480px"
                />
                <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 rounded-2xl border border-white/20 bg-black/35 p-3 text-white backdrop-blur-md">
                  <div>
                    <p className="text-xs text-white/80">Cold chain confidence</p>
                    <p className="text-sm font-semibold">Dispatch from 4am</p>
                  </div>
                  <div className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium ring-1 ring-white/25">
                    BRC-minded ops
                  </div>
                </div>
              </div>
            </motion.div>

            {floaters.map((f, i) => (
              <motion.div
                key={f.src}
                className={`glass-panel absolute ${f.className} overflow-hidden rounded-2xl shadow-xl ring-1 ring-white/25`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 + i * 0.08, duration: 0.5 }}
                style={{ rotate: i % 2 === 0 ? -4 : 5 }}
                whileHover={{ scale: 1.04, rotate: 0 }}
              >
                <div className="relative aspect-square w-full">
                  <Image
                    src={`https://images.unsplash.com/${f.src}?auto=format&fit=crop&w=400&q=80`}
                    alt={f.label}
                    fill
                    className="object-cover"
                    sizes="160px"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
