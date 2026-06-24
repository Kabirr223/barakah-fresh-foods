"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  Clock,
  Leaf,
  MapPin,
  Package,
  Zap,
} from "lucide-react";

const badges = [
  { label: "Fresh Daily Stock", icon: Leaf },
  { label: "Wholesale Supply", icon: Package },
  { label: "Quality Produce", icon: BadgeCheck },
  { label: "Reliable Service", icon: Clock },
  { label: "Leicester Based", icon: MapPin },
  { label: "Fast Response", icon: Zap },
];

export function TrustSection() {
  return (
    <section
      id="trust"
      className="relative scroll-mt-28 border-b border-bf-gold/10 py-10 sm:py-12"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.ul
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.07 } },
          }}
        >
          {badges.map((b) => (
            <motion.li
              key={b.label}
              variants={{
                hidden: { opacity: 0, y: 14 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
              }}
              whileHover={{ y: -3 }}
              className="glass-panel flex flex-col items-center gap-2 rounded-2xl px-3 py-4 text-center transition hover:border-bf-gold/30"
            >
              <span className="flex size-9 items-center justify-center rounded-xl bg-bf-leaf/15 text-bf-leaf ring-1 ring-bf-leaf/25">
                <b.icon className="size-4" />
              </span>
              <span className="text-xs font-medium leading-tight text-white/85 sm:text-sm">
                {b.label}
              </span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
