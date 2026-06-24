import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

interface LogoProps {
  size?: "sm" | "md" | "lg" | "hero";
  showText?: boolean;
  className?: string;
}

const sizes = {
  sm: { box: "size-10 text-lg", name: "text-sm", tag: "text-[10px]" },
  md: { box: "size-12 text-xl", name: "text-base", tag: "text-[10px]" },
  lg: { box: "size-16 text-2xl", name: "text-lg", tag: "text-xs" },
  hero: { box: "size-24 text-4xl sm:size-28 sm:text-5xl", name: "text-2xl sm:text-3xl", tag: "text-sm" },
};

export function Logo({ size = "md", showText = true, className }: LogoProps) {
  const s = sizes[size];

  return (
    <div className={cn("flex flex-col items-center gap-3 text-center", className)}>
      <span
        className={cn(
          "flex items-center justify-center rounded-2xl border-2 border-bf-gold/40 bg-bf-gold/10 font-heading font-bold text-bf-gold shadow-lg shadow-bf-gold/15",
          s.box,
        )}
        aria-hidden
      >
        B
      </span>
      {showText ? (
        <div>
          <p className={cn("font-heading font-semibold tracking-wide text-white", s.name)}>
            {siteConfig.name}
          </p>
          {size === "hero" ? (
            <p className={cn("mt-1 text-bf-gold/80", s.tag)}>
              {siteConfig.tagline}
            </p>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
