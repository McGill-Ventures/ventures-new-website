import type { Variants } from "motion/react";

/**
 * Shared motion tokens. Import these instead of writing per-component
 * durations and curves, so the site animates as one piece.
 */

/** The curve already used by the reveal keyframes in globals.css. */
export const EASE = [0.4, 0, 0.2, 1] as const;

export const DURATION = { fast: 0.2, base: 0.3, slow: 0.5 } as const;

export const transition = { duration: DURATION.base, ease: EASE };

/** Reveal once. Replaying on every scroll-past reads as a glitch. */
export const viewport = { once: true, amount: 0.2 } as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition },
};

/**
 * Motion-native replacement for the .hover-lift class. Never put a CSS class
 * with `transition: all` on a motion element: it intercepts the inline
 * transform Motion writes, which double-animates it and silently defeats
 * reducedMotion.
 */
export const hoverLift = {
  whileHover: {
    y: -8,
    scale: 1.02,
    boxShadow: "0 25px 50px -12px rgba(147,51,234,0.25), 0 0 30px rgba(147,51,234,0.1)",
    transition: { duration: DURATION.fast, ease: EASE },
  },
} as const;

/** Spread onto a motion element to reveal it when it scrolls into view. */
export const revealOnScroll = {
  initial: "hidden",
  whileInView: "show",
  viewport,
} as const;
