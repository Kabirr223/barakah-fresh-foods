"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

const STORAGE_KEY = "bf-order-banner-dismissed";

type BannerContextValue = {
  dismissed: boolean;
  dismiss: () => void;
  bannerHeight: number;
};

const BannerContext = createContext<BannerContextValue | null>(null);

export function BannerProvider({ children }: { children: ReactNode }) {
  const [dismissed, setDismissed] = useState(false);
  const bannerHeight = dismissed ? 0 : 44;

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "1") setDismissed(true);
  }, []);

  const dismiss = () => {
    setDismissed(true);
    localStorage.setItem(STORAGE_KEY, "1");
  };

  return (
    <BannerContext.Provider value={{ dismissed, dismiss, bannerHeight }}>
      {children}
    </BannerContext.Provider>
  );
}

export function useBanner() {
  const ctx = useContext(BannerContext);
  if (!ctx) {
    throw new Error("useBanner must be used within BannerProvider");
  }
  return ctx;
}
