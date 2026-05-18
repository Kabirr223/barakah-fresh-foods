"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  Globe2,
  PackageSearch,
  ShieldCheck,
  Timer,
  Truck,
} from "lucide-react";

const points = [
  {
    title: "Daily fresh stock",
    body: "Morning picks, rapid rotation, and disciplined cold-chain handling.",
    icon: Timer,
  },
  {
    title: "Wholesale pricing",
    body: "Transparent tiers that reward volume and predictable weekly orders.",
    icon: PackageSearch,
  },
  {
    title: "Reliable delivery",
    body: "Time-windowed drops across London and scheduled UK-wide freight.",
    icon: Truck,
  },
  {
    title: "Massive product range",
    body: "Produce, freezer, grocery, and drinks — consolidated sourcing.",
    icon: Globe2,
  },
  {
    title: "Quality checked produce",
    body: "Line-side checks for defects, maturity, and temperature on intake.",
    icon: BadgeCheck,
  },
  {
    title: "Trusted supplier network",
    body: "Long-standing growers and importers with audited consistency.",
    icon: ShieldCheck,
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export function WhyBarakah() {
  return (
    <section id="why" className="scroll-mt-28 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Why Barakah
          </p>
          <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            Built for operators who cannot afford{" "}
            <span className="text-gradient-brand">variance</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            From prep-heavy restaurants to high-footfall retail, we keep the
            supply rhythm tight — so your team can focus on service, not chasing
            stock.
          </p>
        </div>

        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {points.map((p) => (
            <motion.li
              key={p.title}
              variants={item}
              className="group relative overflow-hidden rounded-3xl border border-border/80 bg-card/60 p-6 shadow-sm backdrop-blur-md transition hover:border-primary/35 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="flex size-11 items-center justify-center rounded-2xl bg-primary/12 text-primary ring-1 ring-primary/20 transition group-hover:scale-105">
                <p.icon className="size-5" />
              </div>
              <h3 className="mt-4 font-heading text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {p.body}
              </p>
              <div className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-accent/10 blur-3xl transition group-hover:bg-accent/20" />
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
