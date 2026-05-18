"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { getWhatsAppOrderUrl } from "@/config/site";

export function WhatsAppFab() {
  return (
    <motion.div
      className="fixed bottom-5 right-5 z-50 md:bottom-8 md:right-8"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.4 }}
    >
      <Link
        href={getWhatsAppOrderUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_40px_-8px_rgba(37,211,102,0.65)] ring-2 ring-white/30 transition-transform hover:scale-105 active:scale-95"
        aria-label="Message on WhatsApp"
      >
        <MessageCircle className="size-7" />
        <span className="pointer-events-none absolute -top-10 right-0 whitespace-nowrap rounded-lg bg-foreground px-2 py-1 text-[10px] font-medium text-background opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
          WhatsApp orders
        </span>
      </Link>
    </motion.div>
  );
}
