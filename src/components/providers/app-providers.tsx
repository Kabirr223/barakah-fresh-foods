"use client";

import { LenisProvider } from "@/components/providers/lenis-provider";
import { BannerProvider } from "@/context/banner-context";
import { CatalogProvider } from "@/context/catalog-context";
import { Toaster } from "sonner";
import type { ReactNode } from "react";

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <BannerProvider>
      <LenisProvider>
        <CatalogProvider>
          {children}
          <Toaster
            richColors
            position="top-center"
            toastOptions={{
              style: {
                background: "#35423e",
                color: "#ffffff",
                border: "1px solid rgba(198, 168, 106, 0.25)",
              },
            }}
          />
        </CatalogProvider>
      </LenisProvider>
    </BannerProvider>
  );
}
