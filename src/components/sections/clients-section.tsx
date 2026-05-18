"use client";

import { motion } from "framer-motion";
import {
  ChefHat,
  PartyPopper,
  ShoppingBasket,
  Store,
  UtensilsCrossed,
  Warehouse,
} from "lucide-react";

const clients = [
  { label: "Restaurants", icon: UtensilsCrossed },
  { label: "Retail shops", icon: Store },
  { label: "Caterers", icon: ChefHat },
  { label: "Supermarkets", icon: ShoppingBasket },
  { label: "Takeaways", icon: Warehouse },
  { label: "Event suppliers", icon: PartyPopper },
];

export function ClientsSection() {
  return (
    <section
      id="clients"
      className="scroll-mt-28 border-y border-border/70 bg-muted/20 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Wholesale clients
            </p>
            <h2 className="mt-2 max-w-xl font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
              Supplying teams who move{" "}
              <span className="text-gradient-brand">serious volume</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground md:text-right">
            One relationship, many categories — from walk-in retail to multi-site
            restaurant groups with tight service windows.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {clients.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * i }}
              whileHover={{ y: -4 }}
              className="flex items-center gap-4 rounded-3xl border border-border/80 bg-card/70 p-5 shadow-sm backdrop-blur-md transition hover:border-primary/35 hover:shadow-lg"
            >
              <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/12 text-primary ring-1 ring-primary/20">
                <c.icon className="size-6" />
              </span>
              <div>
                <p className="font-heading text-lg font-semibold">{c.label}</p>
                <p className="text-xs text-muted-foreground">
                  Dedicated picking &amp; pack styles
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
