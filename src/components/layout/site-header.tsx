"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Leaf, Menu, MessageCircle, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLenisScroll } from "@/components/providers/lenis-provider";
import { siteConfig, getWhatsAppOrderUrl } from "@/config/site";
import { useActiveSection, type SectionId } from "@/hooks/use-active-section";
import { ThemeToggle } from "@/components/layout/theme-toggle";

const links: { id: SectionId; label: string }[] = [
  { id: "hero", label: "Home" },
  { id: "categories", label: "Range" },
  { id: "products", label: "Products" },
  { id: "why", label: "Why Us" },
  { id: "experience", label: "Experience" },
  { id: "clients", label: "Clients" },
  { id: "testimonials", label: "Stories" },
  { id: "contact", label: "Contact" },
];

export function SiteHeader() {
  const { scrollTo } = useLenisScroll();
  const active = useActiveSection();
  const [open, setOpen] = useState(false);

  const go = (id: SectionId) => {
    scrollTo(id);
    setOpen(false);
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto max-w-7xl px-4 pt-3 sm:px-6 lg:px-8">
          <div
            className={cn(
              "glass-panel flex items-center justify-between gap-3 rounded-2xl px-3 py-2.5 sm:px-4",
              "border-white/20 dark:border-white/10",
            )}
          >
            <button
              type="button"
              onClick={() => go("hero")}
              className="group flex items-center gap-2 rounded-xl px-1 py-1 text-left transition-transform active:scale-[0.98]"
            >
              <span className="flex size-9 items-center justify-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/25">
                <Leaf className="size-5" aria-hidden />
              </span>
              <span className="leading-tight">
                <span className="block font-heading text-sm font-semibold tracking-tight sm:text-base">
                  {siteConfig.name}
                </span>
                <span className="hidden text-[11px] text-muted-foreground sm:block">
                  Wholesale · UK-wide
                </span>
              </span>
            </button>

            <nav
              className="hidden items-center gap-0.5 lg:flex"
              aria-label="Primary"
            >
              {links.map((l) => (
                <button
                  key={l.id}
                  type="button"
                  onClick={() => go(l.id)}
                  className={cn(
                    "relative rounded-full px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
                    active === l.id && "text-foreground",
                  )}
                >
                  {active === l.id ? (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-foreground/10 ring-1 ring-foreground/10"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 32,
                      }}
                    />
                  ) : null}
                  {l.label}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-1.5 sm:gap-2">
              <ThemeToggle />
              <Link
                href={getWhatsAppOrderUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({
                    variant: "outline",
                    size: "sm",
                  }),
                  "hidden rounded-full border-primary/25 sm:inline-flex",
                )}
              >
                <MessageCircle className="size-3.5" />
                WhatsApp
              </Link>
              <Button
                type="button"
                size="sm"
                className="hidden rounded-full bg-primary text-primary-foreground shadow-md shadow-primary/25 md:inline-flex"
                onClick={() => go("contact")}
              >
                Enquire
              </Button>
              <Button
                type="button"
                size="icon"
                variant="ghost"
                className="rounded-full lg:hidden"
                aria-label={open ? "Close menu" : "Open menu"}
                onClick={() => setOpen((v) => !v)}
              >
                {open ? <X className="size-5" /> : <Menu className="size-5" />}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              aria-label="Close menu overlay"
              onClick={() => setOpen(false)}
            />
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 34 }}
              className="absolute right-0 top-0 flex h-full w-[min(100%,380px)] flex-col gap-2 border-l border-white/15 bg-background/95 p-6 pt-24 shadow-2xl backdrop-blur-xl"
              aria-label="Mobile primary"
            >
              {links.map((l, i) => (
                <motion.button
                  key={l.id}
                  type="button"
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i }}
                  onClick={() => go(l.id)}
                  className={cn(
                    "flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-base font-medium",
                    active === l.id
                      ? "bg-primary/15 text-primary"
                      : "hover:bg-muted",
                  )}
                >
                  {l.label}
                  {active === l.id ? (
                    <span className="size-2 rounded-full bg-primary" />
                  ) : null}
                </motion.button>
              ))}
              <div className="mt-auto flex flex-col gap-2 border-t border-border pt-4">
                <Button
                  className="w-full rounded-xl"
                  onClick={() => go("products")}
                >
                  Explore products
                </Button>
                <Link
                  href={getWhatsAppOrderUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "w-full rounded-xl",
                  )}
                >
                  WhatsApp orders
                </Link>
              </div>
            </motion.nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
