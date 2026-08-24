"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { Logo } from "@/components/ui/logo";
import { cn } from "@/lib/utils";
import { useLenisScroll } from "@/components/providers/lenis-provider";
import { useBanner } from "@/context/banner-context";
import { useActiveSection, type SectionId } from "@/hooks/use-active-section";
import { useScrolledPast } from "@/hooks/use-scrolled-past";
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
  const scrolled = useScrolledPast(40);

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
        <div
          className={cn(
            "mx-auto max-w-7xl px-4 pt-4 transition-all sm:px-6 lg:px-8",
            scrolled && "pt-2",
          )}
        >
          <div
            className={cn(
              "flex items-center justify-between gap-3 rounded-2xl px-4 py-3 transition-all duration-300 sm:px-5",
              scrolled
                ? "glass-panel-gold border-bf-gold/20 shadow-lg"
                : "bg-transparent",
            )}
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
                    "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    active === l.id
                      ? "bg-bf-gold/10 text-bf-gold ring-1 ring-bf-gold/25"
                      : "text-white/70 hover:text-white",
                  )}
                >
                  {l.label}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <MagneticButton
                onClick={() => go("contact")}
                className="hidden h-10 items-center gap-2 rounded-full bg-bf-gold px-5 text-sm font-semibold text-bf-charcoal shadow-lg shadow-bf-gold/20 md:inline-flex"
              >
                Contact Us
              </MagneticButton>
              <button
                type="button"
                className="flex size-10 items-center justify-center rounded-full border border-white/15 text-white lg:hidden"
                aria-label={open ? "Close menu" : "Open menu"}
                onClick={() => setOpen((v) => !v)}
              >
                {open ? <X className="size-5" /> : <Menu className="size-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            style={{ top: topOffset }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              className="absolute inset-0 bg-black/70"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            />
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.25 }}
              className="absolute right-0 top-0 flex h-full w-[min(100%,360px)] flex-col gap-1 border-l border-bf-gold/20 bg-bf-charcoal p-6 pt-20"
              aria-label="Mobile primary"
            >
              <div className="mb-4 flex justify-center border-b border-bf-gold/15 pb-4">
                <Logo size="md" showText={false} />
              </div>
              {links.map((l) => (
                <button
                  key={l.id}
                  type="button"
                  onClick={() => go(l.id)}
                  className={cn(
                    "rounded-xl px-4 py-3.5 text-left text-base font-medium",
                    active === l.id
                      ? "bg-bf-gold/15 text-bf-gold"
                      : "text-white/80 hover:bg-white/5",
                  )}
                >
                  {l.label}
                </button>
              ))}
              <div className="mt-auto border-t border-bf-gold/20 pt-4">
                <MagneticButton
                  onClick={() => go("contact")}
                  className="flex h-12 w-full items-center justify-center rounded-full bg-bf-gold text-sm font-semibold text-bf-charcoal"
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
