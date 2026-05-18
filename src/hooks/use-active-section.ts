"use client";

import { useEffect, useState } from "react";

const sectionIds = [
  "hero",
  "categories",
  "products",
  "why",
  "experience",
  "clients",
  "testimonials",
  "cta",
  "contact",
] as const;

export type SectionId = (typeof sectionIds)[number];

export function useActiveSection() {
  const [active, setActive] = useState<SectionId>("hero");

  useEffect(() => {
    const els = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const first = visible[0];
        if (first?.target.id) {
          setActive(first.target.id as SectionId);
        }
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: [0.01, 0.12, 0.25, 0.4, 0.55],
      },
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return active;
}
