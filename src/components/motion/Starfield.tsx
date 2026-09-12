"use client";

import { useEffect, useId, useMemo, useState } from "react";
import { Particles, ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { loadEmittersPlugin } from "@tsparticles/plugin-emitters";
import { loadEmittersShapeSquare } from "@tsparticles/plugin-emitters-shape-square";
import { loadTrailEffect } from "@tsparticles/effect-trail";
import type { Engine, ISourceOptions } from "@tsparticles/engine";
import { cn } from "@/lib/utils";

type Props = {
  /** Stars for a 1440 by 900 area, scaled with the actual size. */
  count?: number;
  /** Drift multiplier. 1 is a slow ambient drift. */
  speed?: number;
  /** A comet crosses the field every few seconds. */
  comets?: boolean;
  className?: string;
};

const init = async (engine: Engine) => {
  await loadSlim(engine);
  await loadEmittersPlugin(engine);
  await loadEmittersShapeSquare(engine);
  await loadTrailEffect(engine);
};

// One comet at a time, spawned in the upper middle and flying down-left
// until it leaves through the left edge. It never fades mid-flight: only the
// trail tapers, and the particle is destroyed once it is off the canvas.
const COMETS = {
  position: { x: 55, y: 12 },
  size: { width: 40, height: 24, mode: "percent" },
  rate: { delay: { min: 5, max: 12 }, quantity: 1 },
  life: { wait: false },
  particles: {
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    size: { value: { min: 1.4, max: 2.1 } },
    opacity: { value: 1 },
    shadow: { enable: true, color: "#ffffff", blur: 12 },
    effect: {
      type: "trail",
      options: {
        // Width ramps up over the buffer, so keep it close to the visible streak.
        trail: { length: 16, fade: true, minWidth: 0.6, maxWidth: 3 },
      },
    },
    move: {
      enable: true,
      // Degrees, 0 is right and 90 is down: a shallow dive to the left corner.
      direction: 155,
      angle: { value: 10, offset: 0 },
      straight: true,
      speed: { min: 14, max: 22 },
      outModes: { default: "destroy" },
    },
  },
};

/**
 * Ambient starfield on tsParticles. Sits behind content as `absolute inset-0`.
 * Still under reduced motion, and the engine pauses it while off screen.
 */
export function Starfield({
  count = 220,
  speed = 1,
  comets = true,
  className,
}: Props) {
  const id = useId();
  const [still, setStill] = useState(false);

  useEffect(() => {
    setStill(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  const options = useMemo(
    () =>
      ({
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
        // Plugin options are not part of the engine's types.
        emitters: comets && !still ? COMETS : [],
      }) as ISourceOptions,
    [count, speed, comets, still],
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
