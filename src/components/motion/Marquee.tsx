import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  direction?: "left" | "right" | "up" | "down";
  /** Seconds for one full loop. Larger is slower. */
  duration?: number;
  /** Space between items, any CSS length. */
  gap?: string;
  pauseOnHover?: boolean;
  /** Fade the edges into the background. */
  fade?: boolean;
  className?: string;
};

/**
 * Infinite CSS scroller. Children are rendered twice so the loop is seamless.
 * Give it enough children to fill the container or the loop will show gaps.
 */
export function Marquee({
  children,
  direction = "left",
  duration = 40,
  gap = "1rem",
  pauseOnHover = true,
  fade = false,
  className,
}: Props) {
  const vertical = direction === "up" || direction === "down";
  return (
    <div
      className={cn("marquee", vertical ? "marquee-y" : "marquee-x", fade && "marquee-fade", className)}
      data-direction={direction}
      data-pause={pauseOnHover ? "" : undefined}
      style={{ "--marquee-duration": `${duration}s`, "--marquee-gap": gap } as CSSProperties}
    >
      <div className="marquee-track">{children}</div>
      <div className="marquee-track" aria-hidden>
        {children}
      </div>
    </div>
  );
}
