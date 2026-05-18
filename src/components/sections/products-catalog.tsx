"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  Grid3x3,
  LayoutList,
  MessageCircle,
  Search,
  Sparkles,
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
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getWhatsAppProductUrl } from "@/config/site";
import { useCatalog } from "@/context/catalog-context";
import {
  allCategories,
  categoryLabels,
  products,
} from "@/data/products";
import type { Product, ProductCategory } from "@/types/catalog";
import { cn } from "@/lib/utils";

export function ProductsCatalog() {
  const { activeCategory, setActiveCategory, search, setSearch } =
    useCatalog();
  const deferredSearch = useDeferredValue(search);
  const [view, setView] = useState<"grid" | "list">("grid");
  const [selected, setSelected] = useState<Product | null>(null);
  const [pending, startTransition] = useTransition();

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<{ category: ProductCategory }>).detail;
      if (detail?.category) {
        startTransition(() => setActiveCategory(detail.category));
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
      const blob = `${p.name} ${p.description} ${p.brand ?? ""}`.toLowerCase();
      return blob.includes(q);
    });
  }, [activeCategory, deferredSearch]);

  return (
    <section
      id="products"
      className="relative scroll-mt-28 border-y border-border/70 bg-muted/25 py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-mesh opacity-40" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Live catalogue
            </p>
            <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
              Search, filter, and{" "}
              <span className="text-gradient-brand">preview instantly</span>
            </h2>
            <p className="mt-3 max-w-xl text-sm text-muted-foreground sm:text-base">
              Pricing shown as a guide — final wholesale quotes depend on volume,
              seasonality, and delivery windows.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center lg:w-auto">
            <div className="relative flex-1 lg:min-w-[280px]">
              <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search produce, brands, cuts…"
                className="h-11 rounded-full border-primary/20 pl-10"
                aria-label="Search products"
              />
            </div>
            <div className="flex gap-2">
              <Button
                type="button"
                size="icon"
                variant={view === "grid" ? "default" : "outline"}
                className="rounded-full"
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
                className="rounded-full"
                onClick={() => setView("list")}
                aria-pressed={view === "list"}
                aria-label="List view"
              >
                <LayoutList className="size-4" />
              </Button>
            </div>
          </div>
        </div>

        <Tabs
          value={activeCategory}
          onValueChange={(v) =>
            startTransition(() =>
              setActiveCategory(v as ProductCategory | "all"),
            )
          }
          className="mt-8"
        >
          <TabsList className="no-scrollbar flex h-auto w-full flex-wrap justify-start gap-2 overflow-x-auto bg-transparent p-0">
            <TabsTrigger
              value="all"
              className="rounded-full border border-border bg-background/80 px-4 py-2 text-xs data-[state=active]:border-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground sm:text-sm"
            >
              All products
            </TabsTrigger>
            {allCategories.map((slug) => (
              <TabsTrigger
                key={slug}
                value={slug}
                className="rounded-full border border-border bg-background/80 px-4 py-2 text-xs data-[state=active]:border-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground sm:text-sm"
              >
                {categoryLabels[slug]}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
          <Sparkles className="size-3.5 text-accent" />
          {pending ? "Updating results…" : `${filtered.length} results`}
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
                className={cn(
                  "group overflow-hidden rounded-3xl border border-border/80 bg-card/70 shadow-sm backdrop-blur-md",
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
                      "relative overflow-hidden bg-muted",
                      view === "grid" ? "aspect-[5/4]" : "aspect-square w-36 shrink-0 rounded-2xl sm:w-44",
                    )}
                  >
                    <Image
                      src={p.image}
                      alt=""
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes="(max-width:768px) 100vw, 33vw"
                    />
                    <div className="absolute left-3 top-3 flex flex-wrap gap-1">
                      <Badge className="rounded-full bg-background/80 text-foreground backdrop-blur">
                        {categoryLabels[p.category]}
                      </Badge>
                      {p.brand ? (
                        <Badge
                          variant="secondary"
                          className="rounded-full bg-accent/90 text-accent-foreground"
                        >
                          {p.brand}
                        </Badge>
                      ) : null}
                    </div>
                  </div>
                  <div className={cn("p-4", view === "list" && "flex flex-1 flex-col justify-center py-2")}>
                    <h3 className="font-heading text-lg font-semibold tracking-tight">
                      {p.name}
                    </h3>
                    <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                      {p.description}
                    </p>
                    <p className="mt-3 text-sm font-semibold text-primary">
                      {p.price}
                    </p>
                  </div>
                </button>
                <div
                  className={cn(
                    "flex gap-2 border-t border-border/60 p-3",
                    view === "list" && "w-40 flex-col border-l border-t-0 p-3",
                  )}
                >
                  <Link
                    href={getWhatsAppProductUrl(p.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants({
                        size: "sm",
                        variant: "outline",
                      }),
                      "flex-1 rounded-full border-primary/25",
                    )}
                  >
                    <MessageCircle className="size-3.5" />
                    WhatsApp
                  </Link>
                  <Button
                    type="button"
                    size="sm"
                    className="flex-1 rounded-full"
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
          <p className="mt-10 text-center text-sm text-muted-foreground">
            No matches — try a different search or category.
          </p>
        ) : null}
      </div>

      <Dialog open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
        <DialogContent className="max-w-lg overflow-hidden border-border/80 bg-background/95 p-0 sm:rounded-3xl">
          {selected ? (
            <>
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={selected.image}
                  alt={selected.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent" />
              </div>
              <div className="space-y-3 p-6 pt-2">
                <DialogHeader>
                  <DialogTitle className="font-heading text-2xl">
                    {selected.name}
                  </DialogTitle>
                  <DialogDescription className="text-base leading-relaxed">
                    {selected.description}
                  </DialogDescription>
                </DialogHeader>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">{categoryLabels[selected.category]}</Badge>
                  {selected.brand ? (
                    <Badge className="bg-accent text-accent-foreground">
                      {selected.brand}
                    </Badge>
                  ) : null}
                  <Badge variant="outline" className="font-semibold">
                    {selected.price}
                  </Badge>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <Link
                    href={getWhatsAppProductUrl(selected.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants({ className: "flex-1 rounded-full" }),
                    )}
                  >
                    <MessageCircle className="size-4" />
                    Enquire on WhatsApp
                  </Link>
                  <Button
                    type="button"
                    variant="outline"
                    className="flex-1 rounded-full"
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
