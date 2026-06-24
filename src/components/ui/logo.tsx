import Image from "next/image";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

interface LogoProps {
  size?: "sm" | "md" | "lg" | "hero";
  showText?: boolean;
  className?: string;
}

const imageSizes = {
  sm: 40,
  md: 48,
  lg: 64,
  hero: 256,
};

const containerClasses = {
  sm: "size-10",
  md: "size-12",
  lg: "size-16",
  hero: "size-48 sm:size-56 lg:size-64",
};

export function Logo({ size = "md", showText = true, className }: LogoProps) {
  const px = imageSizes[size];

  return (
    <div className={cn("flex flex-col items-center gap-3 text-center", className)}>
      <span
        className={cn(
          "relative shrink-0 overflow-hidden rounded-full border-2 border-bf-gold/50 bg-white shadow-lg shadow-bf-gold/20 ring-2 ring-bf-gold/15",
          containerClasses[size],
        )}
      >
        <Image
          src={siteConfig.logo}
          alt={`${siteConfig.name} logo`}
          width={px}
          height={px}
          className="size-full object-cover"
          priority={size === "hero"}
          sizes={
            size === "hero"
              ? "(max-width: 640px) 192px, (max-width: 1024px) 224px, 256px"
              : `${px}px`
          }
        />
      </span>
      {showText ? (
        <div>
          <p
            className={cn(
              "font-heading font-semibold tracking-wide text-white",
              size === "sm" && "text-sm",
              size === "md" && "text-base",
              size === "lg" && "text-lg",
              size === "hero" && "text-2xl sm:text-3xl",
            )}
          >
            {siteConfig.name}
          </p>
          {size === "hero" ? (
            <p className="mt-1 text-sm text-bf-gold/80 sm:text-base">
              {siteConfig.tagline}
            </p>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
