import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  href: string;
  children: ReactNode;
  /** Both variants are designed for dark surfaces. */
  variant?: "primary" | "secondary";
  size?: "md" | "sm";
  /** Opens in a new tab with the right rel. */
  external?: boolean;
  className?: string;
};

/* The link itself never moves. Only the inner face lifts.
   A hover lift on the element that owns :hover moves it out from under the
   pointer, so hover drops, it falls back, and it bounces forever. Growing
   the hit area only relocates that edge. Keeping the hover target still is
   the only version with no bad pixel anywhere. */
const OUTER =
  "group relative inline-flex rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-400";

const FACE =
  "inline-flex w-full items-center justify-center gap-3 rounded-full font-heading whitespace-nowrap transition-[transform,box-shadow,border-color,background-color,color] duration-300 group-hover:-translate-y-0.5";

const VARIANT = {
  // Same family as the Project ATLAS pill in the nav: deep purple to black,
  // a hairline highlight on top, purple glow on hover.
  primary:
    "animate-gradient border border-white/15 bg-gradient-to-br from-purple-800 via-purple-950 to-black text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_10px_30px_-12px_rgba(88,28,135,0.9)] group-hover:border-purple-400/60 group-hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_14px_36px_-10px_rgba(139,92,246,0.7)]",
  secondary:
    "border border-white/30 text-white group-hover:border-white group-hover:bg-white group-hover:text-black",
};

const SIZE = {
  md: "px-7 py-4 text-lg",
  sm: "px-6 py-3 text-base",
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  external = false,
  className,
}: Props) {
  const face = (
    <span className={cn(FACE, VARIANT[variant], SIZE[size])}>{children}</span>
  );
  const outer = cn(OUTER, className);

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={outer}
      >
        {face}
        <span className="sr-only">(opens in a new tab)</span>
      </a>
    );
  }
  // Plain anchors for in-page targets keep the browser's smooth scrolling.
  if (href.startsWith("#")) {
    return (
      <a href={href} className={outer}>
        {face}
      </a>
    );
  }
  return (
    <Link href={href} className={outer}>
      {face}
    </Link>
  );
}
