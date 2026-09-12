"use client";

import { useEffect, useId, useMemo, useState } from "react";
import { Particles, ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine, ISourceOptions } from "@tsparticles/engine";
import { cn } from "@/lib/utils";

type Props = {
  /** Stars for a 1440 by 900 area, scaled with the actual size. */
  count?: number;
  /** Drift multiplier. 1 is a slow ambient drift. */
  speed?: number;
  className?: string;
};

const init = async (engine: Engine) => {
  await loadSlim(engine);
};

/**
 * Ambient starfield on tsParticles. Sits behind content as `absolute inset-0`.
 * Still under reduced motion, and the engine pauses it while off screen.
 */
export function Starfield({ count = 220, speed = 1, className }: Props) {
  const id = useId();
  const [still, setStill] = useState(false);

  useEffect(() => {
    setStill(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  const options = useMemo<ISourceOptions>(
    () => ({
      fullScreen: { enable: false },
      fpsLimit: 60,
      detectRetina: true,
      pauseOnOutsideViewport: true,
      background: { color: "transparent" },
      interactivity: {
        events: { onHover: { enable: false }, onClick: { enable: false } },
      },
      particles: {
        number: {
          value: count,
          density: { enable: true, width: 1440, height: 900 },
        },
        color: { value: ["#ffffff", "#ffffff", "#d8b4fe"] },
        shape: { type: "circle" },
        size: { value: { min: 0.4, max: 1.8 } },
        opacity: {
          value: { min: 0.15, max: 0.9 },
          animation: {
            enable: !still,
            speed: 0.5,
            sync: false,
            startValue: "random",
            mode: "auto",
          },
        },
        move: {
          enable: !still,
          direction: "top-right",
          straight: true,
          speed: { min: 0.05 * speed, max: 0.3 * speed },
          outModes: { default: "out" },
        },
      },
    }),
    [count, speed, still],
  );

  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0", className)}
    >
      <ParticlesProvider init={init}>
        <Particles id={id} className="size-full" options={options} />
      </ParticlesProvider>
    </div>
  );
}
