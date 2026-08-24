"use client";

import { motion } from "framer-motion";
import { Apple, Leaf, Sprout } from "lucide-react";
import { useEffect, useState } from "react";
import { useCatalog } from "@/context/catalog-context";
import {
  allCategories,
  categoryDisplayCounts,
  categoryLabels,
} from "@/data/products";
import type { ProductCategory } from "@/types/catalog";
import { cn } from "@/lib/utils";

const icons: Record<ProductCategory, typeof Leaf> = {
  vegetables: Sprout,
  fruits: Apple,
  herbs: Leaf,
};

export function CategoryStickyNav() {
  const { activeCategory, setActiveCategory } = useCatalog();
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const section = document.getElementById("products");
    if (!section) return;

    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      setStuck(rect.top <= 120 && rect.bottom > 200);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const filterTo = (cat: ProductCategory) => {
    setActiveCategory(cat);
    window.dispatchEvent(
      new CustomEvent("bf:set-category", { detail: { category: cat } }),
    );
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      className={cn(
        "sticky z-40 -mx-4 px-4 py-3 transition-all sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8",
        stuck ? "top-[72px] glass-panel-gold shadow-lg" : "top-0 bg-transparent",
      )}
      initial={false}
      animate={{ opacity: stuck ? 1 : 0.95 }}
    >
      <div className="flex flex-wrap justify-center gap-2">
        {allCategories.map((slug) => {
          const Icon = icons[slug];
          const short =
            slug === "vegetables"
              ? "Vegetables"
              : slug === "fruits"
                ? "Fruits"
                : "Herbs & Speciality";
          return (
            <button
              key={slug}
              type="button"
              onClick={() => filterTo(slug)}
              className={cn(
                "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-medium transition sm:text-sm",
                activeCategory === slug
                  ? "border-bf-leaf bg-bf-leaf text-white"
                  : "border-bf-gold/25 text-white/70 hover:border-bf-gold/50 hover:text-white",
              )}
            >
              <Icon className="size-3.5" />
              {short} ({categoryDisplayCounts[slug]})
            </button>
          );
        })}
      </div>
      <p className="mt-2 text-center text-[10px] text-white/40 sm:hidden">
        {categoryLabels.vegetables} · {categoryLabels.fruits} ·{" "}
        {categoryLabels.herbs}
      </p>
    </motion.div>
  );
}
