"use client";

const items = [
  "BRC-minded operations",
  "Daily exotic & core lines",
  "Frozen Rupa · Shana · Taj",
  "Leicester dispatch from 4am",
  "WhatsApp trade desk",
  "Retail-ready grocery",
];

export function TrustMarquee() {
  const row = [...items, ...items];
  return (
    <div className="relative border-y border-border/60 bg-muted/30 py-3">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-background to-transparent" />
      <div className="bf-marquee-track flex w-max gap-10 pr-10">
        {row.map((t, i) => (
          <span
            key={`${t}-${i}`}
            className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
