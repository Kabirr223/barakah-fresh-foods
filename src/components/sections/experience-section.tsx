"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import { localImage } from "@/lib/image-catalog";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function ExperienceSection() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = root.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const ctx = gsap.context(() => {
      gsap.from(".bf-exp-panel", {
        y: 70,
        opacity: 0,
        rotateX: 8,
        transformOrigin: "50% 100%",
        duration: 1,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: el,
          start: "top 75%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });
      gsap.from(".bf-exp-hero", {
        scale: 1.06,
        opacity: 0,
        duration: 1.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      id="experience"
      className="relative scroll-mt-28 overflow-hidden py-24 sm:py-32"
      style={{ perspective: "1200px" }}
    >
      <div className="absolute inset-0 bg-linear-to-b from-muted/40 via-background to-background" />
      <div className="pointer-events-none absolute inset-0 bg-mesh opacity-50" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            The experience
          </p>
          <h2 className="bf-exp-panel mt-3 font-heading text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Cinematic freshness.
            <br />
            <span className="text-gradient-brand">Industrial reliability.</span>
          </h2>
          <p className="bf-exp-panel mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
            We choreograph intake, grading, and dispatch like a premium SaaS
            operations stack — except the “servers” are cold rooms and the uptime
            is measured in crunch, colour, and shelf-life.
          </p>
          <div className="bf-exp-panel mt-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-border/70 bg-card/50 p-4 backdrop-blur-md">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Throughput
              </p>
              <p className="mt-2 font-heading text-3xl font-semibold">24/6</p>
              <p className="text-sm text-muted-foreground">
                Pick windows aligned to your kitchen cadence.
              </p>
            </div>
            <div className="rounded-2xl border border-border/70 bg-card/50 p-4 backdrop-blur-md">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Traceability
              </p>
              <p className="mt-2 font-heading text-3xl font-semibold">Lot-level</p>
              <p className="text-sm text-muted-foreground">
                Batch notes available for key lines on request.
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="bf-exp-hero relative aspect-[4/5] overflow-hidden rounded-[2.25rem] border border-white/15 shadow-2xl shadow-primary/15 ring-1 ring-white/20">
            <Image
              src={localImage("chefPrep")}
              alt="Chef preparing fresh ingredients"
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-linear-to-tr from-primary/35 via-transparent to-accent/25" />
          </div>

          <div className="bf-exp-panel glass-panel absolute -left-6 bottom-10 max-w-xs rounded-2xl p-4 shadow-xl sm:-left-10">
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Motion grade
            </p>
            <p className="mt-1 font-heading text-lg font-semibold">
              Produce that photographs like retail, performs like wholesale.
            </p>
          </div>

          <div className="bf-exp-panel absolute -right-4 top-10 hidden w-44 overflow-hidden rounded-2xl border border-white/20 shadow-xl sm:block">
            <div className="relative aspect-[3/4]">
              <Image
                src={localImage("fruitBowl")}
                alt="Colourful fresh fruit arrangement"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
