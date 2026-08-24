"use client";

import { type MouseEvent, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit";
  disabled?: boolean;
}

/** Lightweight button — magnetic spring effect removed for smoother scrolling. */
export function MagneticButton({
  children,
  className,
  onClick,
  type = "button",
  disabled,
}: MagneticButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]",
        className,
      )}
    >
      {children}
    </button>
  );
}
