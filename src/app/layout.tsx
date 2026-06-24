import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { AppProviders } from "@/components/providers/app-providers";
import { CursorGlow } from "@/components/layout/cursor-glow";
import { MobileContactBar } from "@/components/layout/mobile-contact-bar";
import { OrderDeadlineBanner } from "@/components/layout/order-deadline-banner";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { ScrollToTop } from "@/components/layout/scroll-to-top";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { WhatsAppFab } from "@/components/layout/whatsapp-fab";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/config/site";

const bodySans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const displaySerif = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Wholesale Fruit & Vegetable Supplier Leicester`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Wholesale Fruit Supplier Leicester",
    "Wholesale Vegetables Leicester",
    "Fresh Produce Leicester",
    "Fruit & Vegetable Wholesaler Leicester",
    "Barakah Fresh Foods Leicester",
    "Fresh Produce Supplier Leicester",
    "Barakah Fresh Foods",
    "wholesale produce Leicester",
    "fresh fruit wholesale Leicester",
    "vegetable supplier Leicester",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Premium Wholesale Produce Leicester`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Premium Wholesale Produce Leicester`,
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#2F3A37",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className="dark">
      <body
        className={`${bodySans.variable} ${displaySerif.variable} ${geistMono.variable} min-h-screen bg-background pb-[4.25rem] font-sans antialiased lg:pb-0`}
      >
        <JsonLd />
        <AppProviders>
          <CursorGlow />
          <ScrollProgress />
          <OrderDeadlineBanner />
          <SiteHeader />
          <main className="relative">{children}</main>
          <SiteFooter />
          <ScrollToTop />
          <WhatsAppFab />
          <MobileContactBar />
        </AppProviders>
      </body>
    </html>
  );
}
