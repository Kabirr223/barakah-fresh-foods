"use client";

import { motion } from "framer-motion";
import { Leaf, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { siteConfig, getWhatsAppOrderUrl } from "@/config/site";
import { useLenisScroll } from "@/components/providers/lenis-provider";
import { categoryLabels, allCategories } from "@/data/products";
import type { ProductCategory } from "@/types/catalog";

const social = [
  { label: "Instagram", href: siteConfig.social.instagram },
  { label: "LinkedIn", href: siteConfig.social.linkedin },
  { label: "Facebook", href: siteConfig.social.facebook },
];

export function SiteFooter() {
  const { scrollTo } = useLenisScroll();
  const year = new Date().getFullYear();

  const productAnchor = (slug: ProductCategory) => {
    scrollTo("products");
    window.dispatchEvent(
      new CustomEvent("bf:set-category", { detail: { category: slug } }),
    );
  };

  return (
    <footer className="relative border-t border-border/80 bg-background/80 pb-10 pt-16 backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary/40 to-transparent" />
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <motion.div
          className="lg:col-span-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2">
            <span className="flex size-10 items-center justify-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/25">
              <Leaf className="size-5" />
            </span>
            <span className="font-heading text-lg font-semibold tracking-tight">
              {siteConfig.name}
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            {siteConfig.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {social.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
              >
                {s.label}
              </Link>
            ))}
          </div>
        </motion.div>

        <div className="grid gap-10 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            <h3 className="text-sm font-semibold tracking-wide text-foreground">
              Product range
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {allCategories.map((slug) => (
                <li key={slug}>
                  <button
                    type="button"
                    onClick={() => productAnchor(slug)}
                    className="group inline-flex items-center gap-1 transition-colors hover:text-primary"
                  >
                    <span className="h-px w-0 bg-primary transition-all group-hover:w-3" />
                    {categoryLabels[slug]}
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
            <h3 className="text-sm font-semibold tracking-wide text-foreground">
              Company
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <button
                  type="button"
                  className="hover:text-primary"
                  onClick={() => scrollTo("why")}
                >
                  Why Barakah
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="hover:text-primary"
                  onClick={() => scrollTo("clients")}
                >
                  Industries served
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="hover:text-primary"
                  onClick={() => scrollTo("testimonials")}
                >
                  Testimonials
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="hover:text-primary"
                  onClick={() => scrollTo("contact")}
                >
                  Contact &amp; hours
                </button>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <h3 className="text-sm font-semibold tracking-wide text-foreground">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>
                  {siteConfig.addressLine1}
                  <br />
                  {siteConfig.addressLine2}
                  <br />
                  {siteConfig.country}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="size-4 text-primary" />
                <a
                  className="hover:text-primary"
                  href={`tel:${siteConfig.phoneE164.replace(/\s/g, "")}`}
                >
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="size-4 text-primary" />
                <a
                  className="hover:text-primary"
                  href={`mailto:${siteConfig.email}`}
                >
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto mt-14 flex max-w-7xl flex-col items-center justify-between gap-3 border-t border-border/60 px-4 pt-8 text-xs text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
        <p>© {year} {siteConfig.name}. All rights reserved.</p>
        <div className="flex gap-4">
          <Link
            className="hover:text-primary"
            href={getWhatsAppOrderUrl()}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </Link>
          <button
            type="button"
            className="hover:text-primary"
            onClick={() => scrollTo("contact")}
          >
            Enquiry form
          </button>
        </div>
      </div>
    </footer>
  );
}
