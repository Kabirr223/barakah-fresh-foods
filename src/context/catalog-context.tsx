"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { ProductCategory } from "@/types/catalog";

export type CatalogCategory = ProductCategory | "all";

type CatalogContextValue = {
  activeCategory: CatalogCategory;
  setActiveCategory: (c: CatalogCategory) => void;
  search: string;
  setSearch: (s: string) => void;
};

const CatalogContext = createContext<CatalogContextValue | null>(null);

export function CatalogProvider({ children }: { children: ReactNode }) {
  const [activeCategory, setActiveCategory] =
    useState<CatalogCategory>("all");
  const [search, setSearch] = useState("");

  const value = useMemo(
    () => ({
      activeCategory,
      setActiveCategory,
      search,
      setSearch,
    }),
    [activeCategory, search],
  );

  return (
    <CatalogContext.Provider value={value}>
      {children}
    </CatalogContext.Provider>
  );
}

export function useCatalog() {
  const ctx = useContext(CatalogContext);
  if (!ctx) {
    throw new Error("useCatalog must be used within CatalogProvider");
  }
  return ctx;
}
