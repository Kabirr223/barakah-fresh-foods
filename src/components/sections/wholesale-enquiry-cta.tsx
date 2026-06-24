"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { getWhatsAppOrderUrl, siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function WholesaleEnquiryCta() {
  return (
    <section
      id="enquiry"
      className="relative scroll-mt-28 overflow-hidden py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-luxury-mesh opacity-50" />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          className="glass-panel-gold rounded-3xl p-10 sm:p-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-bf-gold">
            Wholesale Enquiries
          </p>
          <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Need Wholesale Supply?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/65">
            Contact {siteConfig.name} for current availability, daily stock
            updates and wholesale enquiries.
          </p>

          <motion.div
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <a
              href={`tel:${siteConfig.phoneE164}`}
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-12 min-w-[160px] rounded-full bg-bf-leaf px-6 text-base font-semibold shadow-lg shadow-bf-leaf/25",
              )}
            >
              <Phone className="size-4" />
              Call Now
            </a>
            <Link
              href={getWhatsAppOrderUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "h-12 min-w-[160px] rounded-full border-[#25D366]/50 bg-[#25D366]/10 px-6 text-base font-semibold text-[#25D366] hover:bg-[#25D366]/20",
              )}
            >
              <MessageCircle className="size-4" />
              WhatsApp Us
            </Link>
            <a
              href={`mailto:${siteConfig.email}`}
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "h-12 min-w-[160px] rounded-full border-bf-gold/40 px-6 text-base font-semibold text-bf-gold",
              )}
            >
              <Mail className="size-4" />
              Email Us
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
