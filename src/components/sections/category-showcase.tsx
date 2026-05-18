"use client";

import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useLenisScroll } from "@/components/providers/lenis-provider";
import { useCatalog } from "@/context/catalog-context";
import { categoryShowcase, frozenBrandCards } from "@/data/products";
import type { ProductCategory } from "@/types/catalog";
import { cn } from "@/lib/utils";

export function CategoryShowcase() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    skipSnaps: false,
    dragFree: true,
  });
  const { scrollTo } = useLenisScroll();
  const { setActiveCategory } = useCatalog();
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  const filterTo = (slug: ProductCategory) => {
    setActiveCategory(slug);
    scrollTo("products");
  };

  return (
    <section
      id="categories"
      className="relative scroll-mt-28 overflow-hidden py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-mesh opacity-60" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <motion.p
              className="text-xs font-semibold uppercase tracking-[0.2em] text-primary"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Premium range
            </motion.p>
            <motion.h2
              className="mt-2 max-w-xl font-heading text-3xl font-semibold tracking-tight sm:text-4xl"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
            >
              A wholesale pantry built for{" "}
              <span className="text-gradient-brand">volume and finesse</span>
            </motion.h2>
          </div>
          <div className="flex gap-2">
            <Button
              type="button"
              size="icon"
              variant="outline"
              className="rounded-full"
              onClick={scrollPrev}
              disabled={!canPrev}
              aria-label="Previous categories"
            >
              <ChevronLeft className="size-4" />
            </Button>
            <Button
              type="button"
              size="icon"
              variant="outline"
              className="rounded-full"
              onClick={scrollNext}
              disabled={!canNext}
              aria-label="Next categories"
            >
              <ChevronRight className="size-4" />
            </Button>
          </div>
        </div>

        <div className="mt-10 overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4 pr-4">
            {categoryShowcase.map((c, i) => (
              <motion.button
                type="button"
                key={c.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: 0.04 * i }}
                onClick={() => filterTo(c.slug)}
                className="group relative min-w-[min(100%,320px)] max-w-sm flex-[0_0_85%] overflow-hidden rounded-3xl border border-white/15 text-left sm:flex-[0_0_55%] lg:flex-[0_0_40%]"
              >
                <div className="relative aspect-[5/6] w-full">
                  <Image
                    src={c.image}
                    alt=""
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width:768px) 85vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-background via-background/40 to-transparent" />
                  <div className="absolute inset-0 bg-linear-to-br from-primary/25 via-transparent to-accent/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <div className="glass-panel rounded-2xl p-4 ring-1 ring-white/20">
                      <h3 className="font-heading text-xl font-semibold tracking-tight">
                        {c.title}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {c.subtitle}
                      </p>
                      <span className="mt-3 inline-flex items-center text-xs font-semibold uppercase tracking-wide text-primary">
                        View in catalogue →
                      </span>
                    </div>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {frozenBrandCards.map((b, i) => (
            <motion.div
              key={b.brand}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.06 * i }}
              className={cn(
                "group relative overflow-hidden rounded-3xl border border-border/80 bg-card/60 p-1 shadow-lg backdrop-blur-md",
                "hover:border-primary/35 hover:shadow-primary/10",
              )}
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-[1.35rem]">
                <Image
                  src={b.image}
                  alt={`${b.brand} frozen range`}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(max-width:768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-background/90 via-background/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-2">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-accent">
                      {b.brand}
                    </p>
                    <p className="font-heading text-lg font-semibold">{b.headline}</p>
                  </div>
                  <Button
                    type="button"
                    size="sm"
                    variant="secondary"
                    className="shrink-0 rounded-full"
                    onClick={() => filterTo("frozen")}
                  >
                    Shop frozen
                  </Button>
                </div>
              </div>
              <p className="px-4 pb-4 pt-3 text-sm text-muted-foreground">{b.copy}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
