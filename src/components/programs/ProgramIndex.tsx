"use client";

import { useEffect, useState, type CSSProperties } from "react";
import Image from "next/image";
import { Reveal } from "@/components/motion";
import { Stamp } from "@/components/ui";
import { cn } from "@/lib/utils";
import type { ProgramData } from "@/app/programs/page";

type Props = {
  programs: Pick<ProgramData, "id" | "name" | "photo" | "photoPosition" | "status">[];
};

/** Desktop only: names pinned beside the program being read, which is the
 *  last section to have reached the middle of the viewport. Measured on every
 *  scroll rather than observed, so a jump past a whole section still lands on
 *  the right one. */
export function ProgramIndex({ programs }: Props) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const sections = programs.map((p) => document.getElementById(p.id));
    const update = () => {
      const middle = window.innerHeight / 2;
      setActive(Math.max(0, sections.findLastIndex((s) => s && s.getBoundingClientRect().top <= middle)));
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [programs]);

  const [kicker, headline] = programs[active].status;

  return (
    <div className="sticky top-24 hidden h-[calc(100dvh-10rem)] flex-col lg:flex">
      <Reveal delay={100}>
        <nav aria-label="Programs">
          <ol className="space-y-2">
            {programs.map((program, i) => {
              const on = i === active;
              return (
                <li key={program.id}>
                  <a
                    href={`#${program.id}`}
                    aria-current={on ? "true" : undefined}
                    className={cn(
                      "flex items-baseline gap-4 font-display text-[clamp(1.75rem,2.6vw,2.625rem)] leading-[1.1] transition-[color,translate] duration-500",
                      on ? "translate-x-1.5 text-white" : "text-white/30 hover:text-white/60",
                    )}
                  >
                    <span
                      className={cn(
                        "font-heading text-base transition-colors duration-500",
                        on ? "text-purple-400" : "text-white/30",
                      )}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {program.name}
                  </a>
                </li>
              );
            })}
          </ol>
        </nav>
      </Reveal>

      <div className="relative mt-8 min-h-0 flex-1">
        <Reveal variant="clip" duration={1300} className="h-full">
          <div className="relative h-full overflow-hidden bg-purple-950">
            {programs.map((program, i) => (
              <Image
                key={program.id}
                src={program.photo}
                alt=""
                fill
                sizes="(max-width: 1279px) 45vw, 600px"
                className={cn(
                  "object-cover transition-[opacity,scale] duration-700 ease-out",
                  i === active ? "opacity-100" : "scale-105 opacity-0",
                )}
                style={{ objectPosition: program.photoPosition }}
              />
            ))}
          </div>
        </Reveal>
        <Reveal
          variant="scale"
          delay={900}
          duration={450}
          className="pointer-events-none absolute -right-3 -bottom-6"
          style={{ "--reveal-from": "scale(2.6)" } as CSSProperties}
        >
          {/* Keyed so a new program stamps down afresh. */}
          <Stamp
            key={programs[active].id}
            className="animate-stamp border-purple-300 bg-black/40 text-center text-purple-200 backdrop-blur-sm"
          >
            <span className="block text-xs tracking-[0.2em]">{kicker}</span>
            <span className="block text-3xl">{headline}</span>
          </Stamp>
        </Reveal>
      </div>
    </div>
  );
}
