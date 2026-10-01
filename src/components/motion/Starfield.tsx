"use client";

import { useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";

// Loaded only where the field animates, so phones never download the engine.
const StarfieldLive = dynamic(
  () => import("./StarfieldLive").then((m) => m.StarfieldLive),
  { ssr: false },
);

type Props = {
  /** Stars per 1440x900, scaled to the actual size. */
  count?: number;
  /** Drift multiplier. */
  speed?: number;
  comets?: boolean;
  className?: string;
};

/** mulberry32: a tiny seeded generator, so the still field never reshuffles. */
function seeded(seed: number) {
  return () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** The same stars as the live field, drawn once and left alone. */
function StillStars({ count }: { count: number }) {
  const stars = useMemo(() => {
    const random = seeded(count);
    return Array.from({ length: Math.round(count / 8) }, () => ({
      x: random() * 100,
      y: random() * 100,
      r: 0.4 + random() * 1.4,
      opacity: 0.15 + random() * 0.75,
      lilac: random() < 1 / 3,
    }));
  }, [count]);

  return (
    <svg className="size-full">
      {stars.map((star, i) => (
        <circle
          key={i}
          cx={`${star.x}%`}
          cy={`${star.y}%`}
          r={star.r}
          fill={star.lilac ? "#d8b4fe" : "#fff"}
          opacity={star.opacity}
        />
      ))}
    </svg>
  );
}

/** Sits behind content as `absolute inset-0`. Drifts and twinkles on desktop.
 *  Phones and reduced motion get a still field: animating a full-screen canvas
 *  every frame is what made scrolling heavy on phones. */
export function Starfield({
  count = 220,
  speed = 1,
  comets = true,
  className,
}: Props) {
  const [mode, setMode] = useState<"live" | "still">();

  useEffect(() => {
    const still = window.matchMedia(
      "(max-width: 767px), (prefers-reduced-motion: reduce)",
    ).matches;
    setMode(still ? "still" : "live");
  }, []);

  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0", className)}
    >
      {mode === "still" && <StillStars count={count} />}
      {mode === "live" && (
        <StarfieldLive count={count} speed={speed} comets={comets} />
      )}
    </div>
  );
}
