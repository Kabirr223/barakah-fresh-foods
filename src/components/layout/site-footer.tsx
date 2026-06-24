"use client";

import { motion } from "framer-motion";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import { siteConfig, getWhatsAppOrderUrl } from "@/config/site";
import { useLenisScroll } from "@/components/providers/lenis-provider";
import type { SectionId } from "@/hooks/use-active-section";

const quickLinks: { id: SectionId; label: string }[] = [
  { id: "hero", label: "Home" },
  { id: "products", label: "Products" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export function SiteFooter() {
  const { scrollTo } = useLenisScroll();
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-bf-gold/15 bg-bf-charcoal pb-10 pt-16">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-bf-gold/40 to-transparent" />
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <motion.div
          className="lg:col-span-5"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3">
            <span className="flex size-11 items-center justify-center rounded-xl border border-bf-gold/30 bg-bf-gold/10">
              <span className="font-heading text-xl font-bold text-bf-gold">B</span>
            </span>
            <span className="font-heading text-xl font-semibold tracking-tight text-white">
              {siteConfig.name}
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/60">
            Fresh Quality Produce • Wholesale Supply • Daily Stock Updates
          </p>
          <div className="mt-6 rounded-2xl border border-bf-gold/20 bg-bf-gold/5 p-4">
            <p className="flex items-center gap-2 text-sm font-medium text-bf-gold">
              <Clock className="size-4" />
              Order Notice
            </p>
            <p className="mt-1 text-sm text-white/70">
              Please Forward Your Orders By {siteConfig.orderDeadline}
            </p>
          </div>
        </motion.div>

        <div className="grid gap-10 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-bf-gold">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-white/65">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => scrollTo(link.id)}
                    className="group inline-flex items-center gap-1 transition-colors hover:text-bf-gold"
                  >
                    <span className="h-px w-0 bg-bf-gold transition-all group-hover:w-3" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-bf-gold">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/65">
              <li className="flex gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0 text-bf-gold" />
                <span>
                  {siteConfig.addressLine1}
                  <br />
                  {siteConfig.addressLine2}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="size-4 text-bf-gold" />
                <a
                  className="hover:text-bf-gold"
                  href={`tel:${siteConfig.phoneE164}`}
                >
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="size-4 text-bf-gold" />
                <a
                  className="hover:text-bf-gold"
                  href={`mailto:${siteConfig.email}`}
                >
                  {siteConfig.email}
                </a>
              </li>
            </ul>

            <div className="mt-6 flex gap-3">
              <Link
                href={getWhatsAppOrderUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-10 items-center justify-center rounded-full border border-bf-gold/25 text-bf-gold transition hover:bg-bf-gold/10"
                aria-label="WhatsApp"
              >
                <MessageCircle className="size-5" />
              </Link>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex size-10 items-center justify-center rounded-full border border-bf-gold/25 text-bf-gold transition hover:bg-bf-gold/10"
                aria-label="Email"
              >
                <Mail className="size-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto mt-14 flex max-w-7xl flex-col items-center justify-between gap-3 border-t border-bf-gold/10 px-4 pt-8 text-xs text-white/45 sm:flex-row sm:px-6 lg:px-8">
        <p>
          © {year} {siteConfig.name}. All rights reserved.
        </p>
        <p>Wholesale Fruit &amp; Vegetable Supplier — Leicester</p>
      </div>
    </footer>
  );
}
