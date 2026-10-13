"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import { Reveal } from "@/components/motion";
import { Stamp } from "@/components/ui";
import { cn } from "@/lib/utils";
import type { Program } from "@/app/programs/page";

type Row = Pick<Program, "id" | "name" | "photo" | "length" | "hours" | "applications">;

// Name, length, time per week, applications, then a thumbnail where there is no hover.
const COLS =
  "lg:grid-cols-[minmax(0,1fr)_6.5rem_7.5rem_9rem] lg:pointer-coarse:grid-cols-[minmax(0,1fr)_6.5rem_7.5rem_9rem_9rem]";

function Status({ row, delay }: { row: Row; delay: number }) {
  if (row.applications !== "Open") {
    return <span className="font-heading text-white/55">{row.applications}</span>;
  }
  return (
    <>
      <span className="sr-only">Applications open</span>
      <span className="animate-stamp ml-1 inline-block" style={{ animationDelay: `${delay}ms` }}>
        <Stamp className="border-[4px] border-purple-300 px-4 py-1 text-lg text-purple-200 md:border-[5px] md:px-5 md:py-1.5 md:text-2xl lg:text-[1.75rem]">
          Open
        </Stamp>
      </span>
    </>
  );
}

/** Hovering or focusing a row brings its photo up behind the board. Touch gets thumbnails. */
export function ProgramBoard({ programs, children }: { programs: Row[]; children: ReactNode }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 hidden aspect-video [mask-image:linear-gradient(to_bottom,transparent,#000_30%,#000_80%,transparent)] pointer-fine:block"
      >
        {programs.map((row) => (
          <Image
            key={row.id}
            src={row.photo.src}
            alt=""
            fill
            sizes="100vw"
            fetchPriority="low"
            // The outgoing photo lingers a beat, so moving between rows never dips to black.
            className={cn(
              "object-cover transition-[opacity,scale] duration-700 ease-out",
              row.id === active ? "opacity-100" : "opacity-0 delay-150 motion-safe:scale-[1.04]",
            )}
            style={{ objectPosition: row.photo.position }}
          />
        ))}
        <div
          className={cn(
            "absolute inset-0 bg-black/60 transition-opacity duration-700",
            active ? "opacity-100" : "opacity-0",
          )}
        />
      </div>

      <div className="relative mx-auto w-full max-w-7xl">
        {children}

        <Reveal trigger="load" variant="fade" delay={350} className="mt-14 lg:mt-20">
          <div
            aria-hidden
            className={cn("hidden gap-x-8 border-b border-white/15 pb-3 font-heading text-sm text-white/45 lg:grid", COLS)}
          >
            <span />
            <span>Length</span>
            <span>Time per week</span>
            <span>Applications</span>
          </div>
        </Reveal>

        <ul onPointerLeave={() => setActive(null)} className="max-lg:border-t max-lg:border-white/15">
          {programs.map((row, i) => (
            <Reveal as="li" key={row.id} trigger="load" delay={400 + i * 80} className="border-b border-white/15">
              <a
                href={`#${row.id}`}
                onPointerEnter={(e) => e.pointerType === "mouse" && setActive(row.id)}
                onFocus={(e) => e.currentTarget.matches(":focus-visible") && setActive(row.id)}
                onBlur={() => setActive(null)}
                className={cn(
                  "grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-4 py-5 transition-opacity duration-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-400 md:gap-x-8 md:py-6 lg:items-baseline lg:py-7",
                  COLS,
                  active && active !== row.id && "opacity-30",
                )}
              >
                <span className="min-w-0">
                  <span className="block font-display text-[clamp(1.75rem,5vw,2.75rem)] leading-[1.02] tracking-[-0.035em] text-balance lg:text-[clamp(2rem,3.7vw,3.75rem)]">
                    {row.name}
                  </span>
                  <span className="mt-2 block font-heading text-[0.9375rem] text-white/60 md:text-base lg:hidden">
                    {row.length}
                    <span aria-hidden> · </span>
                    <span className="sr-only">, </span>
                    <span className="whitespace-nowrap">{row.hours} a week</span>
                  </span>
                  <span className="mt-3 block lg:hidden">
                    <Status row={row} delay={900 + i * 150} />
                  </span>
                </span>
                <span className="hidden font-heading text-xl tabular-nums lg:block">{row.length}</span>
                <span className="hidden font-heading text-xl tabular-nums lg:block">
                  {row.hours}
                  <span className="sr-only"> a week</span>
                </span>
                <span className="hidden lg:block">
                  <Status row={row} delay={900 + i * 150} />
                </span>
                <span className="relative aspect-[3/2] w-24 self-center overflow-hidden bg-neutral-900 md:w-36 pointer-fine:hidden">
                  <Image
                    src={row.photo.src}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 144px, 96px"
                    className="object-cover"
                    style={{ objectPosition: row.photo.position }}
                  />
                </span>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </>
  );
}
