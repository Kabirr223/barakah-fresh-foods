"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type FruitType = "apple" | "pear" | "grapes" | "leaf";

const paths: Record<FruitType, string> = {
  apple:
    "M50 8 C42 8 38 14 36 20 C30 18 22 22 20 32 C18 44 24 58 36 68 C42 72 50 74 58 68 C70 58 76 44 74 32 C72 22 64 18 58 20 C56 14 52 8 50 8 Z M50 8 C50 4 52 2 54 2",
  pear: "M50 6 C46 6 42 10 40 18 C34 16 26 22 24 34 C22 48 28 64 40 72 C46 76 54 76 60 72 C72 64 78 48 76 34 C74 22 66 16 60 18 C58 10 54 6 50 6 Z",
  grapes:
    "M50 10 C44 10 40 16 40 22 C34 22 28 28 28 36 C28 44 34 50 40 50 C40 58 44 64 50 64 C56 64 60 58 60 50 C66 50 72 44 72 36 C72 28 66 22 60 22 C60 16 56 10 50 10 Z M38 54 C34 56 32 60 32 64 C32 68 36 72 40 72 M62 54 C66 56 68 60 68 64 C68 68 64 72 60 72",
  leaf: "M50 80 C30 70 20 50 24 30 C28 14 42 8 50 12 C58 8 72 14 76 30 C80 50 70 70 50 80 Z M50 12 L50 80",
};

interface FruitOutlineProps {
  type: FruitType;
  className?: string;
  size?: number;
  animate?: boolean;
}

export function FruitOutline({
  type,
  className,
  size = 80,
  animate = true,
}: FruitOutlineProps) {
  const Wrapper = animate ? motion.svg : "svg";
  const animProps = animate
    ? {
        initial: { opacity: 0, scale: 0.9 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.8, ease: "easeOut" as const },
      }
    : {};

  return (
    <Wrapper
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={cn("pointer-events-none", className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      {...animProps}
    >
      <path
        d={paths[type]}
        stroke="#C6A86A"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.7"
      />
    </Wrapper>
  );
}

interface FruitDecorationsProps {
  className?: string;
}

export function FruitDecorations({ className }: FruitDecorationsProps) {
  const items = [
    { type: "apple" as const, className: "left-[4%] top-[12%] opacity-30", size: 72, delay: 0 },
    { type: "pear" as const, className: "right-[6%] top-[18%] opacity-25", size: 64, delay: 0.5 },
    { type: "grapes" as const, className: "left-[8%] bottom-[20%] opacity-20", size: 56, delay: 1 },
    { type: "leaf" as const, className: "right-[10%] bottom-[15%] opacity-30", size: 48, delay: 1.5 },
    { type: "apple" as const, className: "right-[20%] top-[45%] opacity-15", size: 40, delay: 2 },
    { type: "grapes" as const, className: "left-[15%] top-[40%] opacity-15", size: 44, delay: 2.5 },
  ];

  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      {items.map((item, i) => (
        <motion.div
          key={i}
          className={cn("absolute bf-float", item.className)}
          style={{ animationDelay: `${item.delay}s` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: item.delay, duration: 1 }}
        >
          <FruitOutline type={item.type} size={item.size} animate={false} />
        </motion.div>
      ))}
    </div>
  );
}
