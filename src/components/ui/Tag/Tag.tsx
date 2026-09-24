import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  className?: string;
};

/** Category pill for dark surfaces and photos. The blur keeps it legible
 *  over a busy image. */
export function Tag({ children, className }: Props) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-purple-300/30 bg-purple-950/50 px-3 py-1 font-heading text-xs font-semibold tracking-wider text-purple-100 uppercase backdrop-blur-md",
        className,
      )}
    >
      {children}
    </span>
  );
}
