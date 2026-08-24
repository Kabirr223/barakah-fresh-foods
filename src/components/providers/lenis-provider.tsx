"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  type ReactNode,
} from "react";

type LenisContextValue = {
  scrollTo: (hash: string, options?: { offset?: number }) => void;
};

const LenisContext = createContext<LenisContextValue | null>(null);

export function LenisProvider({ children }: { children: ReactNode }) {
  const scrollTo = useCallback(
    (hash: string, options?: { offset?: number }) => {
      const id = hash.startsWith("#") ? hash.slice(1) : hash;
      const el = document.getElementById(id);
      if (!el) return;
      const offset = options?.offset ?? -88;
      const top = el.getBoundingClientRect().top + window.scrollY + offset;
      window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
    },
    [],
  );

  const value = useMemo(() => ({ scrollTo }), [scrollTo]);

  return (
    <LenisContext.Provider value={value}>{children}</LenisContext.Provider>
  );
}

export function useLenisScroll() {
  const ctx = useContext(LenisContext);

  const fallbackScroll = useCallback(
    (hash: string, options?: { offset?: number }) => {
      const id = hash.startsWith("#") ? hash.slice(1) : hash;
      const el = document.getElementById(id);
      if (!el) return;
      const offset = options?.offset ?? -88;
      const top = el.getBoundingClientRect().top + window.scrollY + offset;
      window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
    },
    [],
  );

  return useMemo(
    () => ctx ?? { scrollTo: fallbackScroll },
    [ctx, fallbackScroll],
  );
}
