"use client";

import { MotionConfig } from "motion/react";

/**
 * Motion animates through JS, so the prefers-reduced-motion rules in
 * globals.css do not reach it. reducedMotion="user" is what honours the OS
 * setting for anything animated with motion/react.
 *
 * Children stay Server Components; only this wrapper is client-side.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
