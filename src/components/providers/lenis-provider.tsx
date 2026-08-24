"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  type ReactNode,
} from "react";
import Lenis from "lenis";

type LenisContextValue = {
  scrollTo: (hash: string, options?: { offset?: number }) => void;
};

const LenisContext = createContext<LenisContextValue | null>(null);

export function LenisProvider({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) return;

    const lenis = new Lenis({
      duration: 1.15,
      smoothWheel: true,
      touchMultiplier: 1.35,
    });
    lenisRef.current = lenis;

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  const scrollTo = useCallback(
    (hash: string, options?: { offset?: number }) => {
      const id = hash.startsWith("#") ? hash.slice(1) : hash;
      const el = document.getElementById(id);
      if (!el) return;
      const offset = options?.offset ?? -88;
      const lenis = lenisRef.current;
      if (lenis) {
        lenis.scrollTo(el, { offset, lerp: 0.12 });
      } else {
        const top =
          el.getBoundingClientRect().top + window.scrollY + offset;
        window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
      }
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
