"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type Props = {
  /** Stars per 10,000 square pixels. */
  density?: number;
  /** Drift multiplier. 1 is a slow ambient drift. */
  speed?: number;
  shootingStars?: boolean;
  className?: string;
};

type Star = {
  x: number;
  y: number;
  /** Depth 0-1: deeper stars are smaller, dimmer and slower. */
  z: number;
  r: number;
  phase: number;
  period: number;
  tint: boolean;
};

type Streak = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  age: number;
};

/**
 * Ambient starfield on a canvas. Sits behind content as `absolute inset-0`.
 * Static under reduced motion, and it stops drawing while scrolled off screen.
 */
export function Starfield({
  density = 2.4,
  speed = 1,
  shootingStars = true,
  className,
}: Props) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let w = 0;
    let h = 0;
    let stars: Star[] = [];
    let streak: Streak | null = null;
    let nextStreakAt = 0;
    let raf = 0;
    let visible = true;

    const makeStar = (): Star => {
      const z = Math.random();
      return {
        x: Math.random() * w,
        y: Math.random() * h,
        z,
        r: 0.5 + z * 1.3 + (Math.random() < 0.07 ? 1.2 : 0),
        phase: Math.random() * Math.PI * 2,
        period: 1200 + Math.random() * 2600,
        tint: Math.random() < 0.3,
      };
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      stars = Array.from(
        { length: Math.round(((w * h) / 10000) * density) },
        makeStar,
      );
      if (reduce) draw(0);
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h);
      for (const s of stars) {
        if (!reduce) {
          // Drift up and to the right, deeper stars slower: a slow glide forward.
          s.x += (0.02 + s.z * 0.06) * speed;
          s.y -= (0.012 + s.z * 0.04) * speed;
          if (s.x > w + 2) s.x = -2;
          if (s.y < -2) s.y = h + 2;
        }
        const twinkle = reduce
          ? 0.8
          : 0.55 + 0.45 * Math.sin(t / s.period + s.phase);
        const color = s.tint ? "#d8b4fe" : "#ffffff";
        if (s.r > 1.7) {
          // Halo on the few bright stars.
          ctx.globalAlpha = 0.18 * twinkle;
          ctx.fillStyle = color;
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.r * 3.5, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.globalAlpha = (0.35 + 0.65 * s.z) * twinkle;
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }

      if (shootingStars && !reduce) {
        if (!streak && t > nextStreakAt) {
          const speedPx = 9 + Math.random() * 5;
          streak = {
            x: w * (0.3 + Math.random() * 0.7),
            y: h * Math.random() * 0.4,
            vx: -speedPx,
            vy: speedPx * (0.35 + Math.random() * 0.3),
            life: 28 + Math.random() * 14,
            age: 0,
          };
        }
        if (streak) {
          streak.age += 1;
          streak.x += streak.vx;
          streak.y += streak.vy;
          const fade = Math.sin((streak.age / streak.life) * Math.PI);
          const tail = 8;
          const grad = ctx.createLinearGradient(
            streak.x,
            streak.y,
            streak.x - streak.vx * tail,
            streak.y - streak.vy * tail,
          );
          grad.addColorStop(0, `rgba(255,255,255,${0.9 * fade})`);
          grad.addColorStop(1, "rgba(216,180,254,0)");
          ctx.globalAlpha = 1;
          ctx.strokeStyle = grad;
          ctx.lineWidth = 1.5;
          ctx.lineCap = "round";
          ctx.beginPath();
          ctx.moveTo(streak.x, streak.y);
          ctx.lineTo(streak.x - streak.vx * tail, streak.y - streak.vy * tail);
          ctx.stroke();
          if (streak.age >= streak.life) {
            streak = null;
            nextStreakAt = t + 4000 + Math.random() * 7000;
          }
        }
      }
      ctx.globalAlpha = 1;
    };

    const loop = (t: number) => {
      draw(t);
      raf = requestAnimationFrame(loop);
    };
    const start = () => {
      if (reduce || raf) return;
      raf = requestAnimationFrame(loop);
    };
    const stop = () => {
      cancelAnimationFrame(raf);
      raf = 0;
    };

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) start();
      else stop();
    });
    io.observe(canvas);
    resize();
    nextStreakAt = performance.now() + 2500;
    if (visible) start();

    return () => {
      stop();
      ro.disconnect();
      io.disconnect();
    };
  }, [density, speed, shootingStars]);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 size-full",
        className,
      )}
    />
  );
}
