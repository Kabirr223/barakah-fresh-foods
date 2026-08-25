"use client";

import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { Logo } from "@/components/ui/logo";
import { cn } from "@/lib/utils";
import { useLenisScroll } from "@/components/providers/lenis-provider";
import { useBanner } from "@/context/banner-context";
import { useActiveSection, type SectionId } from "@/hooks/use-active-section";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { easePremium } from "@/lib/motion";
import { siteConfig } from "@/config/site";

const links: { id: SectionId; label: string }[] = [
  { id: "hero", label: "Home" },
  { id: "products", label: "Products" },
  { id: "about", label: "About" },
  { id: "why", label: "Why Choose Us" },
  { id: "contact", label: "Contact" },
];

export function SiteHeader() {
  const { scrollTo } = useLenisScroll();
  const active = useActiveSection();
  const { dismissed, bannerHeight } = useBanner();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const reduced = useReducedMotion();

  useMotionValueEvent(scrollY, "change", (v) => {
    setScrolled(v > 40);
  });

  const go = (id: SectionId) => {
    scrollTo(id);
    setOpen(false);
  };

  const topOffset = dismissed ? 0 : bannerHeight;

  return (
    <>
      <header
        className="fixed inset-x-0 z-50 transition-[top] duration-300"
        style={{ top: topOffset }}
      >
        <motion.div
          className={cn(
            "mx-auto max-w-7xl px-4 pt-4 transition-all sm:px-6 lg:px-8",
            scrolled && "pt-2",
          )}
          initial={reduced ? false : { opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: easePremium, delay: 0.1 }}
        >
          <motion.div
            className={cn(
              "flex items-center justify-between gap-3 rounded-2xl px-4 py-3 transition-all duration-500 sm:px-5",
              scrolled
                ? "glass-panel-gold border-bf-gold/20 shadow-lg backdrop-blur-xl"
                : "bg-transparent",
            )}
            animate={{
              paddingTop: scrolled ? 10 : 12,
              paddingBottom: scrolled ? 10 : 12,
            }}
            transition={{ duration: 0.35, ease: easePremium }}
          >
            <button
              type="button"
              onClick={() => go("hero")}
              className="group flex items-center gap-3 text-left"
            >
              <Logo size="sm" showText={false} className="gap-0" />
              <span className="leading-tight">
                <span className="block font-heading text-sm font-semibold tracking-wide text-white sm:text-base">
                  {siteConfig.name}
                </span>
                <span className="hidden text-[10px] uppercase tracking-[0.15em] text-bf-gold/80 sm:block">
                  Wholesale · Leicester
                </span>
              </span>
            </button>

            <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
              {links.map((l) => (
                <button
                  key={l.id}
                  type="button"
                  onClick={() => go(l.id)}
                  className={cn(
                    "nav-link-underline relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    active === l.id
                      ? "text-bf-gold"
                      : "text-white/70 hover:text-white",
                  )}
                >
                  {active === l.id ? (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-bf-gold/10 ring-1 ring-bf-gold/25"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  ) : null}
                  {l.label}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <MagneticButton
                onClick={() => go("contact")}
                className="hidden h-10 items-center gap-2 rounded-full bg-bf-gold px-5 text-sm font-semibold text-bf-charcoal shadow-lg shadow-bf-gold/20 transition-transform hover:-translate-y-0.5 active:scale-[0.98] md:inline-flex"
              >
                Contact Us
              </MagneticButton>
              <button
                type="button"
                className="relative flex size-10 items-center justify-center rounded-full border border-white/15 text-white lg:hidden"
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
              >
                <motion.span
                  animate={open ? { rotate: 90, opacity: 0 } : { rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="absolute"
                >
                  <Menu className="size-5" />
                </motion.span>
                <motion.span
                  animate={open ? { rotate: 0, opacity: 1 } : { rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute"
                >
                  <X className="size-5" />
                </motion.span>
              </button>
            </div>
          </motion.div>
        </motion.div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            style={{ top: topOffset }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <button
              type="button"
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            />
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 34 }}
              className="absolute right-0 top-0 flex h-full w-[min(100%,360px)] flex-col gap-1 border-l border-bf-gold/20 bg-bf-charcoal/98 p-6 pt-20 backdrop-blur-xl"
              aria-label="Mobile primary"
            >
              <div className="mb-4 flex justify-center border-b border-bf-gold/15 pb-4">
                <Logo size="md" showText={false} />
              </div>
              {links.map((l, i) => (
                <motion.button
                  key={l.id}
                  type="button"
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.05, duration: 0.3 }}
                  onClick={() => go(l.id)}
                  className={cn(
                    "rounded-xl px-4 py-3.5 text-left text-base font-medium transition-colors active:scale-[0.99]",
                    active === l.id
                      ? "bg-bf-gold/15 text-bf-gold"
                      : "text-white/80 hover:bg-white/5",
                  )}
                >
                  {l.label}
                </motion.button>
              ))}
              <div className="mt-auto border-t border-bf-gold/20 pt-4">
                <MagneticButton
                  onClick={() => go("contact")}
                  className="flex h-12 w-full items-center justify-center rounded-full bg-bf-gold text-sm font-semibold text-bf-charcoal active:scale-[0.98]"
                >
                  Contact Us
                </MagneticButton>
              </div>
            </motion.nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
