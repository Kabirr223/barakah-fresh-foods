"use client";

import { motion } from "framer-motion";
import { Award, MapPin, Users } from "lucide-react";
import { FruitOutline } from "@/components/decor/fruit-outlines";
import { RevealItem, SectionReveal } from "@/components/ui/section-reveal";
import { siteConfig } from "@/config/site";

const highlights = [
  {
    icon: Award,
    title: "Quality First",
    body: "Every delivery is hand-selected for freshness, colour, and shelf-life — the standards your kitchen depends on.",
  },
  {
    icon: Users,
    title: "Built for Business",
    body: "From independent takeaways to busy restaurant groups, we tailor supply to your volume and schedule.",
  },
  {
    icon: MapPin,
    title: "Leicester Local",
    body: "Based on Myrtle Road, we serve businesses across Leicester and the surrounding area with daily deliveries.",
  },
];

export function AboutSection() {
  return (
    <SectionReveal id="about" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute -right-20 top-20 opacity-20">
        <FruitOutline type="pear" size={200} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <RevealItem>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-bf-gold">
                About Us
              </p>
              <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Leicester&apos;s trusted{" "}
                <span className="text-gradient-gold">wholesale partner</span>
              </h2>
            </RevealItem>
            <RevealItem>
              <p className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg">
                {siteConfig.name} is a premium wholesale fresh produce supplier
                dedicated to bringing the finest fruit, vegetables, and herbs to
                businesses across Leicester. We understand that your reputation
                depends on the quality of every ingredient — that&apos;s why
                freshness isn&apos;t just our promise, it&apos;s our standard.
              </p>
            </RevealItem>
            <RevealItem>
              <p className="mt-4 text-base leading-relaxed text-white/60">
                Whether you run a restaurant, takeaway, catering operation, or
                retail outlet, we provide competitive wholesale pricing, reliable
                daily stock, and a personal service that larger distributors
                simply cannot match.
              </p>
            </RevealItem>
          </div>

          <motion.ul
            className="space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12 } },
            }}
          >
            {highlights.map((h) => (
              <motion.li
                key={h.title}
                variants={{
                  hidden: { opacity: 0, x: 24 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                }}
                className="glass-panel-gold group rounded-2xl p-6 transition hover:border-bf-gold/40"
              >
                <div className="flex gap-4">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-bf-gold/15 text-bf-gold ring-1 ring-bf-gold/25 transition group-hover:scale-105">
                    <h.icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-white">
                      {h.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/65">
                      {h.body}
                    </p>
                  </div>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </SectionReveal>
  );
}
