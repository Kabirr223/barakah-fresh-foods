"use client";

import { motion } from "framer-motion";
import { MessageCircle, PhoneCall } from "lucide-react";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLenisScroll } from "@/components/providers/lenis-provider";
import { getWhatsAppOrderUrl } from "@/config/site";

export function CtaSection() {
  const { scrollTo } = useLenisScroll();

  return (
    <section
      id="cta"
      className="relative scroll-mt-28 overflow-hidden py-24 sm:py-32"
    >
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-90"
        animate={{
          background: [
            "radial-gradient(900px circle at 20% 30%, oklch(0.45 0.1 155 / 0.35), transparent 55%), radial-gradient(700px circle at 80% 20%, oklch(0.72 0.17 55 / 0.25), transparent 50%)",
            "radial-gradient(900px circle at 30% 40%, oklch(0.45 0.1 155 / 0.4), transparent 55%), radial-gradient(700px circle at 70% 30%, oklch(0.72 0.17 55 / 0.3), transparent 50%)",
            "radial-gradient(900px circle at 20% 30%, oklch(0.45 0.1 155 / 0.35), transparent 55%), radial-gradient(700px circle at 80% 20%, oklch(0.72 0.17 55 / 0.25), transparent 50%)",
          ],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-background/55 backdrop-blur-[2px]" />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.p
          className="text-xs font-semibold uppercase tracking-[0.25em] text-primary"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Next dispatch window
        </motion.p>
        <motion.h2
          className="mt-4 font-heading text-4xl font-semibold leading-tight tracking-tight sm:text-5xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
        >
          Ready to order fresh stock?
        </motion.h2>
        <motion.p
          className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Tell us what you move weekly — we will align grades, cuts, and delivery
          cadence to your kitchen or shop floor.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          <Button
            type="button"
            size="lg"
            className="h-12 min-w-[200px] rounded-full px-8 text-base shadow-lg shadow-primary/30 transition hover:shadow-xl hover:shadow-primary/40"
            onClick={() => scrollTo("contact")}
          >
            <PhoneCall className="size-4" />
            Contact us
          </Button>
          <Link
            href={getWhatsAppOrderUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({
                variant: "outline",
                size: "lg",
              }),
              "h-12 min-w-[200px] rounded-full border-primary/30 bg-background/60 px-8 text-base backdrop-blur-md transition hover:border-accent hover:bg-accent/10",
            )}
          >
            <MessageCircle className="size-4" />
            WhatsApp orders
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
