"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useLenisScroll } from "@/components/providers/lenis-provider";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const { scrollTo } = useLenisScroll();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 560);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed bottom-24 right-5 z-50 md:bottom-28 md:right-8"
          initial={{ opacity: 0, y: 16, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.92 }}
          transition={{ type: "spring", stiffness: 320, damping: 26 }}
        >
          <Button
            type="button"
            size="icon-lg"
            variant="secondary"
            className="glass-panel size-12 rounded-full border-white/25 shadow-lg shadow-primary/15"
            onClick={() => scrollTo("hero")}
            aria-label="Back to top"
          >
            <ArrowUp className="size-5" />
          </Button>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
