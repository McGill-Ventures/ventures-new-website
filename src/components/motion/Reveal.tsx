"use client";

import { createElement, type CSSProperties, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/useInView";

export type RevealVariant =
  "up" | "down" | "left" | "right" | "fade" | "scale" | "blur" | "clip";

type Props = {
  children: ReactNode;
  as?:
    | "div"
    | "section"
    | "span"
    | "p"
    | "li"
    | "ul"
    | "figure"
    | "h1"
    | "h2"
    | "h3"
    | "article";
  /** Styles live in globals.css under `[data-reveal]`. */
  variant?: RevealVariant;
  /** "view" animates when scrolled into view, "load" animates immediately on page load. */
  trigger?: "view" | "load";
  /** Milliseconds. Stagger siblings with `index * 80`. */
  delay?: number;
  /** Milliseconds. */
  duration?: number;
  /** False replays every time it re-enters the viewport. */
  once?: boolean;
  /** Fraction of the element that must be visible before it reveals. */
  amount?: number;
  className?: string;
  style?: CSSProperties;
};

/** The hidden state only applies when scripting is enabled, so content
 *  stays visible without JS. */
export function Reveal({
  children,
  as = "div",
  variant = "up",
  trigger = "view",
  delay = 0,
  duration = 900,
  once = true,
  amount,
  className,
  style,
}: Props) {
  const { ref, inView } = useInView<HTMLElement>({ once, amount });
  const active = trigger === "load" || inView;
  // Clip lives on an inner wrapper: a clip-path on the observed element
  // reports zero intersection, so it would never reveal.
  const content =
    variant === "clip" ? (
      <div className="reveal-clip">{children}</div>
    ) : (
      children
    );
  return createElement(
    as,
    {
      ref,
      className: cn("reveal", className),
      "data-reveal": variant,
      "data-trigger": trigger,
      "data-inview": active ? "" : undefined,
      style: {
        "--reveal-delay": `${delay}ms`,
        "--reveal-duration": `${duration}ms`,
        ...style,
      } as CSSProperties,
    },
    content,
  );
}
