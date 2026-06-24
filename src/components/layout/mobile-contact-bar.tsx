"use client";

import { Mail, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import { getWhatsAppOrderUrl, siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function MobileContactBar() {
  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-50 border-t border-bf-gold/20 bg-bf-charcoal/95 backdrop-blur-xl lg:hidden"
      aria-label="Quick contact"
    >
      <div className="grid grid-cols-3 divide-x divide-bf-gold/15">
        <a
          href={`tel:${siteConfig.phoneE164}`}
          className={cn(
            "flex flex-col items-center gap-1 py-3 text-xs font-medium text-white/80 transition active:bg-white/5",
          )}
        >
          <Phone className="size-5 text-bf-leaf" />
          Call
        </a>
        <Link
          href={getWhatsAppOrderUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 py-3 text-xs font-medium text-white/80 transition active:bg-white/5"
        >
          <MessageCircle className="size-5 text-[#25D366]" />
          WhatsApp
        </Link>
        <a
          href={`mailto:${siteConfig.email}`}
          className="flex flex-col items-center gap-1 py-3 text-xs font-medium text-white/80 transition active:bg-white/5"
        >
          <Mail className="size-5 text-bf-gold" />
          Email
        </a>
      </div>
    </nav>
  );
}
