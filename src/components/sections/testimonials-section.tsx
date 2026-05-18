"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    quote:
      "Barakah elevated our prep consistency — fewer surprises, tighter specs, and a team that actually answers before service.",
    name: "Amelia Chen",
    role: "Head Chef, Ember & Ash",
    rating: 5,
  },
  {
    quote:
      "We run twelve stores — their consolidated range cut our supplier admin in half while improving fill rates.",
    name: "Jordan Mensah",
    role: "Operations Director, FreshCart Retail",
    rating: 5,
  },
  {
    quote:
      "Frozen and exotic lines arrive labelled and temp-checked. That discipline is rare at wholesale price points.",
    name: "Priya Kulkarni",
    role: "Procurement, Saffron Catering Co.",
    rating: 5,
  },
  {
    quote:
      "Their morning drops sync with our line — it feels like an internal logistics arm, not a vendor.",
    name: "Leo Ortiz",
    role: "Kitchen Lead, Norte Taqueria",
    rating: 5,
  },
];

export function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5200, stopOnInteraction: false }),
  ]);
  const [selected, setSelected] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section id="testimonials" className="scroll-mt-28 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Proof, not promises
            </p>
            <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
              Teams who switched to{" "}
              <span className="text-gradient-brand">Barakah</span>
            </h2>
          </div>
          <div className="flex gap-2">
            <Button
              type="button"
              size="icon"
              variant="outline"
              className="rounded-full"
              onClick={scrollPrev}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="size-4" />
            </Button>
            <Button
              type="button"
              size="icon"
              variant="outline"
              className="rounded-full"
              onClick={scrollNext}
              aria-label="Next testimonial"
            >
              <ChevronRight className="size-4" />
            </Button>
          </div>
        </div>

        <div className="mt-10 overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className="min-w-0 flex-[0_0_100%] px-1 md:flex-[0_0_85%] lg:flex-[0_0_70%]"
              >
                <motion.figure
                  initial={{ opacity: 0.4, scale: 0.98 }}
                  animate={{
                    opacity: selected === i ? 1 : 0.55,
                    scale: selected === i ? 1 : 0.98,
                  }}
                  transition={{ duration: 0.35 }}
                  className="glass-panel h-full rounded-[2rem] border border-white/20 p-8 shadow-xl"
                >
                  <div className="flex gap-1 text-accent">
                    {Array.from({ length: t.rating }).map((_, si) => (
                      <Star
                        key={si}
                        className="size-4 fill-current text-accent"
                      />
                    ))}
                  </div>
                  <blockquote className="mt-5 font-heading text-xl font-medium leading-relaxed tracking-tight sm:text-2xl">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-6 text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">{t.name}</span>
                    <span className="mx-2 text-border">·</span>
                    {t.role}
                  </figcaption>
                </motion.figure>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-1.5">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => emblaApi?.scrollTo(i)}
              className="h-2 rounded-full bg-border transition-all"
              style={{
                width: selected === i ? 28 : 8,
                opacity: selected === i ? 1 : 0.45,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
