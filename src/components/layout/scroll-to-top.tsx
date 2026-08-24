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
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setVisible(window.scrollY > 560);
        ticking = false;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed bottom-36 right-4 z-50 md:bottom-28 md:right-8"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.2 }}
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
