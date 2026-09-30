"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import { Particles, ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { loadEmittersPlugin } from "@tsparticles/plugin-emitters";
import { loadEmittersShapeSquare } from "@tsparticles/plugin-emitters-shape-square";
import { loadTrailEffect } from "@tsparticles/effect-trail";
import type { Container, Engine, ISourceOptions } from "@tsparticles/engine";

type Props = {
  count: number;
  speed: number;
  comets: boolean;
};

const init = async (engine: Engine) => {
  await loadSlim(engine);
  await loadEmittersPlugin(engine);
  await loadEmittersShapeSquare(engine);
  await loadTrailEffect(engine);
};

// A comet never fades mid-flight: it is destroyed only once off canvas.
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
        // Trail width ramps up over the buffer, so keep it near the visible streak.
        trail: { length: 16, fade: true, minWidth: 0.6, maxWidth: 3 },
      },
    },
    move: {
      enable: true,
      // Degrees, 0 is right and 90 is down.
      direction: 155,
      angle: { value: 10, offset: 0 },
      straight: true,
      speed: { min: 14, max: 22 },
      outModes: { default: "destroy" },
    },
  },
};

/** tsParticles v4 ignores `pauseOnOutsideViewport`, so this pauses the loop off screen. */
export function StarfieldLive({ count, speed, comets }: Props) {
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);
  const [container, setContainer] = useState<Container>();

  useEffect(() => {
    const field = ref.current;
    if (!field || !container) return;
    const io = new IntersectionObserver(([entry]) =>
      entry.isIntersecting ? container.play() : container.pause(),
    );
    io.observe(field);
    return () => io.disconnect();
  }, [container]);

  const options = useMemo(
    () =>
      ({
        fullScreen: { enable: false },
        fpsLimit: 60,
        detectRetina: true,
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
              enable: true,
              speed: 0.5,
              sync: false,
              startValue: "random",
              mode: "auto",
            },
          },
          move: {
            enable: true,
            direction: "top-right",
            straight: true,
            speed: { min: 0.05 * speed, max: 0.3 * speed },
            outModes: { default: "out" },
          },
        },
        // Plugin options are not part of the engine's types.
        emitters: comets ? COMETS : [],
      }) as ISourceOptions,
    [count, speed, comets],
  );

  return (
    <div ref={ref} className="size-full">
      <ParticlesProvider init={init}>
        {/* Must stay stable: the wrapper reloads the field whenever this prop changes. */}
        <Particles
          id={id}
          className="size-full"
          options={options}
          particlesLoaded={setContainer}
        />
      </ParticlesProvider>
    </div>
  );
}
