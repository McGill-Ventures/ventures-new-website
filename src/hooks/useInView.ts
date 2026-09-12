"use client";

import { useEffect, useRef, useState } from "react";

type Options = {
  /** Stop observing after the first intersection. */
  once?: boolean;
  /** Fraction of the element that must be visible (0-1). */
  amount?: number;
  /** IntersectionObserver rootMargin. Negative bottom margin delays the trigger until the element is well inside the viewport. */
  margin?: string;
};

export function useInView<T extends HTMLElement>({
  once = true,
  amount = 0.15,
  margin = "0px 0px -8% 0px",
}: Options = {}) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) io.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold: amount, rootMargin: margin }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once, amount, margin]);

  return { ref, inView };
}
