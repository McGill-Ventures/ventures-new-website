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
  fade?: boolean;
  className?: string;
};

/** Children render twice to close the loop, so pass enough to fill the
 *  container or the seam shows. */
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
      className={cn(
        "marquee",
        vertical ? "marquee-y" : "marquee-x",
        fade && "marquee-fade",
        className,
      )}
      data-direction={direction}
      data-pause={pauseOnHover ? "" : undefined}
      style={
        {
          "--marquee-duration": `${duration}s`,
          "--marquee-gap": gap,
        } as CSSProperties
      }
    >
      <div className="marquee-track">{children}</div>
      <div className="marquee-track" aria-hidden>
        {children}
      </div>
    </div>
  );
}
