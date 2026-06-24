import { cn } from "@/lib/utils";

export function ProductCardSkeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-3xl border border-bf-gold/10 bg-white/[0.04] p-0",
        className,
      )}
    >
      <div className="aspect-[5/4] animate-pulse bg-white/5" />
      <div className="space-y-3 p-4">
        <div className="h-5 w-2/3 animate-pulse rounded-lg bg-white/10" />
        <div className="h-4 w-full animate-pulse rounded bg-white/5" />
        <div className="h-4 w-4/5 animate-pulse rounded bg-white/5" />
        <div className="h-4 w-1/2 animate-pulse rounded-full bg-bf-leaf/20" />
      </div>
    </div>
  );
}

export function ProductGridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
  );
}
