"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  /** Pixels a depth-1 layer moves when the pointer reaches the edge. */
  strength?: number;
  className?: string;
};

/**
 * Tracks the pointer over its area and exposes it as `--mx` / `--my` (-1 to 1).
 * Wrap children in <ParallaxLayer depth={n}> to make them drift.
 */
export function MouseParallax({ children, strength = 24, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (
      !el ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      window.matchMedia("(hover: none)").matches
    )
      return;
    let raf = 0;
    let mx = 0;
    let my = 0;
    const apply = () => {
      raf = 0;
      el.style.setProperty("--mx", mx.toFixed(3));
      el.style.setProperty("--my", my.toFixed(3));
    };
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      mx = ((e.clientX - r.left) / r.width - 0.5) * 2;
      my = ((e.clientY - r.top) / r.height - 0.5) * 2;
      if (!raf) raf = requestAnimationFrame(apply);
    };
    const onLeave = () => {
      mx = 0;
      my = 0;
      if (!raf) raf = requestAnimationFrame(apply);
    };
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={ref} className={className} style={{ "--mp-strength": `${strength}px` } as CSSProperties}>
      {children}
    </div>
  );
}

/** A layer inside <MouseParallax>. Higher depth moves further. Negative moves against the pointer. */
export function ParallaxLayer({
  depth = 1,
  className,
  children,
}: {
  depth?: number;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div data-depth className={cn(className)} style={{ "--depth": depth } as CSSProperties}>
      {children}
    </div>
  );
}
