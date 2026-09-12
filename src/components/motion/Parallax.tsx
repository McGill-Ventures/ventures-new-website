"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  /**
   * Fraction of scroll distance the element lags behind by.
   * Positive drifts slower than the page (background), negative drifts faster (foreground).
   */
  speed?: number;
  className?: string;
};

/** Shifts its children vertically as the page scrolls. */
export function Parallax({ children, speed = 0.15, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    let y = 0;
    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // Subtract the current offset so we measure the untransformed position.
      const top = r.top - y;
      if (top + r.height < -vh || top > vh * 2) return;
      const centerOffset = top + r.height / 2 - vh / 2;
      y = -centerOffset * speed;
      el.style.transform = `translate3d(0, ${y.toFixed(1)}px, 0)`;
    };
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      cancelAnimationFrame(raf);
    };
  }, [speed]);

  return (
    <div ref={ref} className={cn("will-change-transform", className)}>
      {children}
    </div>
  );
}
