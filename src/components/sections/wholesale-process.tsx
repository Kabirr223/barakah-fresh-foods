"use client";

import { motion } from "framer-motion";
import { PackageSearch, Send, Truck } from "lucide-react";
import { RevealItem, SectionReveal } from "@/components/ui/section-reveal";

const steps = [
  {
    step: 1,
    title: "Browse Products",
    body: "Explore our full catalogue of vegetables, fruits, and herbs. Search and filter to find exactly what your kitchen needs.",
    icon: PackageSearch,
  },
  {
    step: 2,
    title: "Send Order Before 8PM",
    body: "Place your wholesale order before 8PM to ensure efficient stock allocation and smooth order processing.",
    icon: Send,
  },
  {
    step: 3,
    title: "Receive Fresh Produce",
    body: "Your order arrives fresh, graded, and ready for service — delivered to your door across Leicester.",
    icon: Truck,
  },
];

export function WholesaleProcess() {
  return (
    <SectionReveal id="process" className="relative overflow-hidden py-24 sm:py-32">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealItem className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-bf-gold">
            Wholesale Process
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Three simple steps to{" "}
            <span className="text-gradient-gold">fresh supply</span>
          </h2>
        </RevealItem>

        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-16 hidden h-px bg-linear-to-r from-transparent via-bf-gold/40 to-transparent lg:block" />
          <motion.ol
            className="grid gap-8 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
          >
            {steps.map((s, i) => (
              <motion.li
                key={s.step}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
                }}
                className="relative text-center"
              >
                <motion.div
                  className="relative mx-auto flex size-16 items-center justify-center rounded-2xl border border-bf-gold/30 bg-bf-gold/10 text-bf-gold shadow-lg shadow-bf-gold/10"
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <s.icon className="size-7" />
                  <span className="absolute -right-2 -top-2 flex size-7 items-center justify-center rounded-full bg-bf-leaf text-xs font-bold text-white">
                    {s.step}
                  </span>
                </motion.div>

                {i < steps.length - 1 ? (
                  <motion.div
                    className="mx-auto my-4 h-8 w-px bg-bf-gold/30 lg:hidden"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.15, duration: 0.4 }}
                  />
                ) : null}

                <h3 className="mt-6 font-heading text-xl font-semibold text-white">
                  {s.title}
                </h3>
                <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-white/60">
                  {s.body}
                </p>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </SectionReveal>
  );
}
