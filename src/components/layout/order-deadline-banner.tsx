"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Clock, X } from "lucide-react";
import { useBanner } from "@/context/banner-context";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { siteConfig } from "@/config/site";

export function OrderDeadlineBanner() {
  const { dismissed, dismiss } = useBanner();
  const reduced = useReducedMotion();

  return (
    <AnimatePresence>
      {!dismissed ? (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="bf-shimmer fixed inset-x-0 top-0 z-[70] overflow-hidden border-b border-bf-gold/30 bg-linear-to-r from-bf-gold/20 via-bf-gold/10 to-bf-gold/20 backdrop-blur-md"
        >
          <div className="relative flex items-center justify-center gap-2 px-10 py-2.5 sm:gap-3 sm:px-12">
            <motion.div
              animate={reduced ? undefined : { rotate: [0, 8, -8, 0] }}
              transition={
                reduced
                  ? undefined
                  : { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }
            >
              <Clock className="size-4 shrink-0 text-bf-gold" aria-hidden />
            </motion.div>
            <p className="text-center text-xs font-medium tracking-wide text-white sm:text-sm">
              {siteConfig.orderBannerText}
            </p>
            <button
              type="button"
              onClick={dismiss}
              className="absolute right-2 top-1/2 flex size-8 -translate-y-1/2 items-center justify-center rounded-full text-white/70 transition hover:bg-white/10 hover:text-white active:scale-95"
              aria-label="Dismiss announcement"
            >
              <X className="size-4" />
            </button>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
