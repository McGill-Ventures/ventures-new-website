import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  /** `dark` sits on black, purple and photos. `light` sits on white and lilac. */
  tone?: "dark" | "light";
  className?: string;
};

const TONE = {
  // The blur keeps it legible over a busy image.
  dark: "border-purple-300/30 bg-purple-950/50 text-purple-100 backdrop-blur-md",
  light: "border-purple-700/15 bg-purple-100/70 text-purple-800",
};

/** Small category pill. */
export function Tag({ children, tone = "dark", className }: Props) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 font-heading text-xs font-semibold tracking-wider uppercase",
        TONE[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
