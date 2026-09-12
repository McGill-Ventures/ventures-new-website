"use client";

import { createElement, type CSSProperties } from "react";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/useInView";

type Props = {
  text: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  /** "view" animates when scrolled into view, "load" animates immediately on page load. */
  trigger?: "view" | "load";
  /** Milliseconds. */
  delay?: number;
  /** Milliseconds between words. */
  stagger?: number;
  /** Milliseconds per word. */
  duration?: number;
  className?: string;
};

/** Words rise out of a clipped line. Screen readers get `text` via aria-label. */
export function SplitText({
  text,
  as = "span",
  trigger = "view",
  delay = 0,
  stagger = 70,
  duration = 1000,
  className,
}: Props) {
  const { ref, inView } = useInView<HTMLElement>();
  const active = trigger === "load" || inView;
  return createElement(
    as,
    {
      ref,
      className: cn("split", className),
      "aria-label": text,
      "data-inview": active ? "" : undefined,
      style: {
        "--split-delay": `${delay}ms`,
        "--split-stagger": `${stagger}ms`,
        "--split-duration": `${duration}ms`,
      } as CSSProperties,
    },
    text.split(" ").map((word, i) => (
      <span key={i} aria-hidden>
        <span className="split-word">
          <span className="split-inner" style={{ "--i": i } as CSSProperties}>
            {word}
          </span>
        </span>{" "}
      </span>
    )),
  );
}
