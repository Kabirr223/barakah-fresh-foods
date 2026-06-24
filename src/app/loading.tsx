"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-bf-charcoal">
      <motion.div
        className="flex size-16 items-center justify-center rounded-2xl border border-bf-gold/30 bg-bf-gold/10"
        animate={{ scale: [1, 1.05, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="font-heading text-2xl font-bold text-bf-gold">B</span>
      </motion.div>
      <motion.p
        className="mt-6 text-sm uppercase tracking-[0.3em] text-bf-gold/70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Barakah Fresh Foods
      </motion.p>
      <motion.div
        className="mt-4 h-0.5 w-32 overflow-hidden rounded-full bg-bf-gold/20"
      >
        <motion.div
          className="h-full bg-bf-gold"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
          style={{ width: "40%" }}
        />
      </motion.div>
    </div>
  );
}
