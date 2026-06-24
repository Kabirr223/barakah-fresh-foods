"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  Apple,
  ChevronDown,
  Grid3x3,
  LayoutList,
  Leaf,
  MessageCircle,
  Search,
  Sparkles,
  Sprout,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  useDeferredValue,
  useEffect,
  useMemo,
  useState,
  useTransition,
} from "react";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { getWhatsAppProductUrl } from "@/config/site";
import { useCatalog } from "@/context/catalog-context";
import {
  allCategories,
  categoryLabels,
  featuredProducts,
  getCategoryCount,
  products,
} from "@/data/products";
import type { Product, ProductCategory } from "@/types/catalog";
import { cn } from "@/lib/utils";

const categoryIcons: Record<ProductCategory, typeof Leaf> = {
  vegetables: Sprout,
  fruits: Apple,
  herbs: Leaf,
};

export function ProductsCatalog() {
  const { activeCategory, setActiveCategory, search, setSearch } =
    useCatalog();
  const deferredSearch = useDeferredValue(search);
  const [view, setView] = useState<"grid" | "list">("grid");
  const [selected, setSelected] = useState<Product | null>(null);
  const [expanded, setExpanded] = useState<ProductCategory | "all">("all");
  const [pending, startTransition] = useTransition();

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<{ category: ProductCategory }>).detail;
      if (detail?.category) {
        startTransition(() => {
          setActiveCategory(detail.category);
          setExpanded(detail.category);
        });
      }
    };
    window.addEventListener("bf:set-category", handler as EventListener);
    return () =>
      window.removeEventListener("bf:set-category", handler as EventListener);
  }, [setActiveCategory]);

  const filtered = useMemo(() => {
    const q = deferredSearch.trim().toLowerCase();
    return products.filter((p) => {
      const catOk = activeCategory === "all" || p.category === activeCategory;
      if (!catOk) return false;
      if (!q) return true;
      return `${p.name} ${p.description}`.toLowerCase().includes(q);
    });
  }, [activeCategory, deferredSearch]);

  const toggleCategory = (cat: ProductCategory) => {
    startTransition(() => {
      setActiveCategory(cat);
      setExpanded((prev) => (prev === cat ? "all" : cat));
    });
  };

  return (
    <section
      id="products"
      className="relative scroll-mt-28 border-y border-bf-gold/10 py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-luxury-mesh opacity-40" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-bf-gold">
              Product Catalogue
            </p>
            <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Browse our{" "}
              <span className="text-gradient-gold">fresh range</span>
            </h2>
            <p className="mt-3 max-w-xl text-sm text-white/60 sm:text-base">
              Search, filter by category, and enquire on any line. Pricing shown
              as a guide — final quotes depend on volume and seasonality.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center lg:w-auto">
            <div className="relative flex-1 lg:min-w-[280px]">
              <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-bf-gold/60" />
              <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search products…"
                className="h-11 rounded-full border-bf-gold/25 bg-white/5 pl-10 text-white placeholder:text-white/40"
                aria-label="Search products"
              />
            </div>
            <div className="flex gap-2">
              <Button
                type="button"
                size="icon"
                variant={view === "grid" ? "default" : "outline"}
                className="rounded-full border-bf-gold/25"
                onClick={() => setView("grid")}
                aria-pressed={view === "grid"}
                aria-label="Grid view"
              >
                <Grid3x3 className="size-4" />
              </Button>
              <Button
                type="button"
                size="icon"
                variant={view === "list" ? "default" : "outline"}
                className="rounded-full border-bf-gold/25"
                onClick={() => setView("list")}
                aria-pressed={view === "list"}
                aria-label="List view"
              >
                <LayoutList className="size-4" />
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Category tabs with expandable panels */}
        <div className="mt-10 space-y-3">
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => {
                startTransition(() => {
                  setActiveCategory("all");
                  setExpanded("all");
                });
              }}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition",
                activeCategory === "all"
                  ? "border-bf-gold bg-bf-gold text-bf-charcoal"
                  : "border-bf-gold/25 text-white/70 hover:border-bf-gold/50 hover:text-white",
              )}
            >
              All Products ({products.length})
            </button>
            {allCategories.map((slug) => {
              const Icon = categoryIcons[slug];
              return (
                <button
                  key={slug}
                  type="button"
                  onClick={() => toggleCategory(slug)}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition",
                    activeCategory === slug
                      ? "border-bf-leaf bg-bf-leaf text-white"
                      : "border-bf-gold/25 text-white/70 hover:border-bf-gold/50 hover:text-white",
                  )}
                >
                  <Icon className="size-4" />
                  {categoryLabels[slug]} ({getCategoryCount(slug)})
                  <ChevronDown
                    className={cn(
                      "size-3.5 transition-transform",
                      expanded === slug && "rotate-180",
                    )}
                  />
                </button>
              );
            })}
          </div>

          <AnimatePresence>
            {expanded !== "all" && activeCategory === expanded ? (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="glass-panel rounded-2xl p-4">
                  <p className="text-sm text-white/60">
                    Showing {getCategoryCount(expanded)} products in{" "}
                    <span className="font-medium text-bf-gold">
                      {categoryLabels[expanded]}
                    </span>
                    . Use search to narrow results within this category.
                  </p>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>

        {/* Featured products */}
        {activeCategory === "all" && !deferredSearch ? (
          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-5 flex items-center gap-2">
              <Sparkles className="size-4 text-bf-gold" />
              <h3 className="font-heading text-lg font-semibold text-white">
                Featured Products
              </h3>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {featuredProducts.slice(0, 4).map((p, i) => (
                <motion.button
                  key={p.id}
                  type="button"
                  onClick={() => setSelected(p)}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="glass-panel-gold group overflow-hidden rounded-2xl text-left"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes="(max-width:768px) 50vw, 25vw"
                    />
                    <Badge className="absolute left-3 top-3 rounded-full bg-bf-gold text-bf-charcoal">
                      Featured
                    </Badge>
                  </div>
                  <div className="p-4">
                    <h4 className="font-heading font-semibold text-white">
                      {p.name}
                    </h4>
                    <p className="mt-1 text-sm font-medium text-bf-leaf">
                      {p.price}
                    </p>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        ) : null}

        <div className="mt-6 flex items-center gap-2 text-xs text-white/50">
          <Sparkles className="size-3.5 text-bf-gold" />
          {pending ? "Updating results…" : `${filtered.length} products`}
        </div>

        <motion.div
          layout
          className={cn(
            "mt-8 gap-4",
            view === "grid"
              ? "grid sm:grid-cols-2 lg:grid-cols-3"
              : "flex flex-col",
          )}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.article
                layout
                key={p.id}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.22 }}
                whileHover={{ y: -4 }}
                className={cn(
                  "group overflow-hidden rounded-3xl border border-bf-gold/15 bg-white/[0.04] shadow-sm backdrop-blur-md",
                  view === "list" && "flex flex-row items-stretch",
                )}
              >
                <button
                  type="button"
                  onClick={() => setSelected(p)}
                  className={cn(
                    "relative block w-full text-left",
                    view === "list" ? "flex flex-1 flex-row gap-4 p-3" : "",
                  )}
                >
                  <div
                    className={cn(
                      "relative overflow-hidden bg-white/5",
                      view === "grid"
                        ? "aspect-[5/4]"
                        : "aspect-square w-36 shrink-0 rounded-2xl sm:w-44",
                    )}
                  >
                    <Image
                      src={p.image}
                      alt=""
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes="(max-width:768px) 100vw, 33vw"
                    />
                    <div className="absolute left-3 top-3">
                      <Badge className="rounded-full bg-bf-charcoal/80 text-white/90 backdrop-blur">
                        {categoryLabels[p.category]}
                      </Badge>
                    </div>
                  </div>
                  <div
                    className={cn(
                      "p-4",
                      view === "list" && "flex flex-1 flex-col justify-center py-2",
                    )}
                  >
                    <h3 className="font-heading text-lg font-semibold text-white">
                      {p.name}
                    </h3>
                    <p className="mt-1 line-clamp-2 text-sm text-white/55">
                      {p.description}
                    </p>
                    <p className="mt-3 text-sm font-semibold text-bf-gold">
                      {p.price}
                    </p>
                  </div>
                </button>
                <div
                  className={cn(
                    "flex gap-2 border-t border-bf-gold/10 p-3",
                    view === "list" && "w-40 flex-col border-l border-t-0 p-3",
                  )}
                >
                  <Link
                    href={getWhatsAppProductUrl(p.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants({ size: "sm", variant: "outline" }),
                      "flex-1 rounded-full border-bf-gold/30 text-bf-gold",
                    )}
                  >
                    <MessageCircle className="size-3.5" />
                    WhatsApp
                  </Link>
                  <Button
                    type="button"
                    size="sm"
                    className="flex-1 rounded-full bg-bf-leaf"
                    onClick={() => setSelected(p)}
                  >
                    Quick view
                  </Button>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 ? (
          <p className="mt-10 text-center text-sm text-white/50">
            No matches — try a different search or category.
          </p>
        ) : null}
      </div>

      <Dialog open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
        <DialogContent className="max-w-lg overflow-hidden border-bf-gold/20 bg-bf-charcoal p-0 sm:rounded-3xl">
          {selected ? (
            <>
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={selected.image}
                  alt={selected.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-bf-charcoal via-transparent to-transparent" />
              </div>
              <div className="space-y-3 p-6 pt-2">
                <DialogHeader>
                  <DialogTitle className="font-heading text-2xl text-white">
                    {selected.name}
                  </DialogTitle>
                  <DialogDescription className="text-base leading-relaxed text-white/65">
                    {selected.description}
                  </DialogDescription>
                </DialogHeader>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-bf-leaf/20 text-bf-leaf">
                    {categoryLabels[selected.category]}
                  </Badge>
                  <Badge className="border-bf-gold/30 bg-bf-gold/15 font-semibold text-bf-gold">
                    {selected.price}
                  </Badge>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <Link
                    href={getWhatsAppProductUrl(selected.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants({ className: "flex-1 rounded-full bg-bf-leaf" }),
                    )}
                  >
                    <MessageCircle className="size-4" />
                    Enquire on WhatsApp
                  </Link>
                  <Button
                    type="button"
                    variant="outline"
                    className="flex-1 rounded-full border-bf-gold/30 text-bf-gold"
                    onClick={() => setSelected(null)}
                  >
                    Close
                  </Button>
                </div>
              </div>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  );
}
