"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ReactNode } from "react";
import { LenisProvider } from "@/components/providers/lenis-provider";
import { CatalogProvider } from "@/context/catalog-context";
import { Toaster } from "sonner";

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <LenisProvider>
        <CatalogProvider>
          {children}
          <Toaster richColors position="top-center" />
        </CatalogProvider>
      </LenisProvider>
    </NextThemesProvider>
  );
}
