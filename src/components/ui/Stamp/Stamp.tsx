import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  /** Colour, size and blend: ink reads differently on paper and on a photo. */
  className?: string;
};

/** Double-ruled rubber stamp with an ink texture. Decorative, so callers state
 *  the same fact in text. */
export function Stamp({ children, className }: Props) {
  return (
    <div
      aria-hidden
      className={cn(
        "stamp-ink -rotate-12 rounded-lg border-[5px] border-double px-5 py-1.5 font-display tracking-[0.06em] uppercase",
        className,
      )}
    >
      {children}
    </div>
  );
}
