"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteConfig } from "@/config/site";

export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-bf-charcoal">
      <motion.div
        className="relative size-20 overflow-hidden rounded-full border-2 border-bf-gold/40 shadow-lg shadow-bf-gold/20"
        animate={{ scale: [1, 1.05, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src={siteConfig.logo}
          alt={siteConfig.name}
          fill
          className="object-cover"
          sizes="80px"
          priority
        />
      </motion.div>
      <motion.p
        className="mt-6 text-sm uppercase tracking-[0.3em] text-bf-gold/70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {siteConfig.name}
      </motion.p>
      <motion.div className="mt-4 h-0.5 w-32 overflow-hidden rounded-full bg-bf-gold/20">
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
