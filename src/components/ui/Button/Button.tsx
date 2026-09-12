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

const BASE =
  "group inline-flex items-center gap-3 rounded-full font-heading whitespace-nowrap transition-[transform,box-shadow,border-color,background-color,color] duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-400";

const VARIANT = {
  // Same family as the Project ATLAS pill in the nav: deep purple to black,
  // a hairline highlight on top, purple glow on hover.
  primary:
    "animate-gradient border border-white/15 bg-gradient-to-br from-purple-800 via-purple-950 to-black text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_10px_30px_-12px_rgba(88,28,135,0.9)] hover:border-purple-400/60 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_14px_36px_-10px_rgba(139,92,246,0.7)]",
  secondary:
    "border border-white/30 text-white hover:border-white hover:bg-white hover:text-black",
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
  const classes = cn(BASE, VARIANT[variant], SIZE[size], className);
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
        <span className="sr-only">(opens in a new tab)</span>
      </a>
    );
  }
  // Plain anchors for in-page targets keep the browser's smooth scrolling.
  if (href.startsWith("#")) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
