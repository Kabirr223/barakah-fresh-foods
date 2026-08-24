"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  Clock,
  HeartHandshake,
  Leaf,
  Package,
  PoundSterling,
} from "lucide-react";
import { RevealItem, SectionReveal } from "@/components/ui/section-reveal";

const points = [
  {
    title: "Fresh Quality Produce",
    body: "Hand-selected daily for colour, ripeness, and shelf-life your kitchen can depend on.",
    icon: Leaf,
  },
  {
    title: "Wholesale Supply",
    body: "Volume supply and consistent grades designed for restaurants, retailers, and caterers.",
    icon: Package,
  },
  {
    title: "Reliable Service",
    body: "Dependable delivery windows and a team that knows your order before you call.",
    icon: BadgeCheck,
  },
  {
    title: "Daily Stock Updates",
    body: "Fresh arrivals every day — seasonal lines and premium varietals as they land.",
    icon: Clock,
  },
  {
    title: "Daily Availability",
    body: "Fair wholesale rates with daily stock updates for loyal, regular weekly ordering.",
    icon: PoundSterling,
  },
  {
    title: "Excellent Customer Service",
    body: "Direct contact, fast responses, and a personal approach to every account.",
    icon: HeartHandshake,
  },
];

export function WhyBarakah() {
  return (
    <SectionReveal id="why" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-luxury-mesh opacity-50" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealItem className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-bf-gold">
            Why Choose Barakah
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            The wholesale difference{" "}
            <span className="text-gradient-brand">your business deserves</span>
          </h2>
          <p className="mt-4 text-white/65">
            Premium produce, personal service, and daily availability for
            operators who move volume every week.
          </p>
        </RevealItem>

        <motion.ul
          className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {points.map((p) => (
            <motion.li
              key={p.title}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
              }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="glass-panel group relative rounded-3xl p-7 transition-shadow hover:shadow-lg hover:shadow-bf-gold/10"
            >
              <div className="flex size-12 items-center justify-center rounded-2xl bg-bf-leaf/15 text-bf-leaf ring-1 ring-bf-leaf/25 transition group-hover:scale-105">
                <p.icon className="size-5" />
              </div>
              <h3 className="mt-5 font-heading text-lg font-semibold text-white">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                {p.body}
              </p>
              <div className="pointer-events-none absolute -right-8 -top-8 size-32 rounded-full bg-bf-gold/5 blur-3xl" />
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </SectionReveal>
  );
}
