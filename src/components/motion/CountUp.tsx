"use client";

import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/useInView";

type Props = {
  /** Any string with one number in it: "2.6K+", "$40M", "2nd", "70+". */
  value: string;
  /** Milliseconds. */
  duration?: number;
  /** Milliseconds. */
  delay?: number;
  className?: string;
};

function parse(value: string) {
  const m = value.match(/^([^\d]*)(\d+(?:\.\d+)?)(.*)$/);
  if (!m) return null;
  const [, prefix, num, suffix] = m;
  return { prefix, suffix, target: parseFloat(num), decimals: (num.split(".")[1] ?? "").length };
}

/** Counts from zero to the number inside `value` once scrolled into view. */
export function CountUp({ value, duration = 1600, delay = 0, className }: Props) {
  const { ref, inView } = useInView<HTMLSpanElement>();
  const parsed = useMemo(() => parse(value), [value]);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!parsed || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const { prefix, suffix, target, decimals } = parsed;
    const format = (n: number) => `${prefix}${n.toFixed(decimals)}${suffix}`;
    if (!inView) {
      setDisplay(format(0));
      return;
    }
    let raf = 0;
    let start = 0;
    const tick = (now: number) => {
      if (!start) start = now;
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 4);
      setDisplay(format(target * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    const timer = setTimeout(() => (raf = requestAnimationFrame(tick)), delay);
    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(raf);
    };
  }, [inView, parsed, duration, delay]);

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {display}
    </span>
  );
}
