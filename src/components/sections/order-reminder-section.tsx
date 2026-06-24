"use client";

import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { useLenisScroll } from "@/components/providers/lenis-provider";
import { siteConfig } from "@/config/site";

export function OrderReminderSection() {
  const { scrollTo } = useLenisScroll();

  return (
    <section
      id="order-reminder"
      className="relative scroll-mt-28 overflow-hidden py-24 sm:py-32"
    >
      <motion.div
        className="pointer-events-none absolute inset-0"
        animate={{
          background: [
            "radial-gradient(800px circle at 30% 50%, rgba(198, 168, 106, 0.15), transparent 60%)",
            "radial-gradient(800px circle at 70% 50%, rgba(76, 175, 80, 0.12), transparent 60%)",
            "radial-gradient(800px circle at 30% 50%, rgba(198, 168, 106, 0.15), transparent 60%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          className="glass-panel-gold mx-auto rounded-3xl p-10 sm:p-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <motion.div
            className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-bf-gold/15 text-bf-gold ring-1 ring-bf-gold/30"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Clock className="size-7" />
          </motion.div>

          <h2 className="mt-6 font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Please Forward Your Orders By {siteConfig.orderDeadline}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/65">
            Place your wholesale orders before {siteConfig.orderDeadline} to ensure
            efficient stock allocation and order processing.
          </p>

          <motion.div
            className="mt-8"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <MagneticButton
              onClick={() => scrollTo("contact")}
              className="inline-flex h-13 items-center rounded-full bg-bf-gold px-10 text-base font-semibold text-bf-charcoal gold-glow"
            >
              Contact Us Today
            </MagneticButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
