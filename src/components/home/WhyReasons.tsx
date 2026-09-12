"use client";

import { useState } from "react";
import Image from "next/image";
import { Sparkle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion";

const REASONS = [
  {
    title: "Ambition is contagious",
    description:
      "You become the people you spend your time around. Here that is founders, investors and students who are all building something.",
    photo: "/events/northstar_2026/ns26_02.jpg",
  },
  {
    title: "You are in the room",
    description:
      "Close enough to how decisions actually get made that it stops being abstract.",
    photo: "/events/scarlet_pitch_2026/sp26_02.jpg",
  },
  {
    title: "A network that travels",
    description:
      "Members and alumni in Montreal, Toronto, New York and San Francisco who keep showing up for each other.",
    photo: "/community/members_01.jpg",
  },
];

/**
 * Reasons on the left, a photo on the right that follows whichever reason the
 * pointer is on. Every reason stays readable at once, so the photo is pure
 * enhancement and nothing is hidden behind the interaction.
 */
export function WhyReasons() {
  const [active, setActive] = useState(0);

  return (
    <div className="grid w-full gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:items-center lg:gap-16">
      <ul onMouseLeave={() => setActive(0)}>
        {REASONS.map((reason, i) => {
          const on = i === active;
          return (
            <Reveal
              as="li"
              key={reason.title}
              delay={200 + i * 110}
              className="border-t border-white/12 last:border-b"
            >
              <div
                onMouseEnter={() => setActive(i)}
                className={cn(
                  "py-6 transition-all duration-500",
                  on ? "translate-x-1.5 opacity-100" : "reason-dim",
                )}
              >
                <h3 className="flex items-center gap-3 font-display text-xl text-white md:text-2xl">
                  <Sparkle
                    aria-hidden
                    className="size-4 shrink-0 fill-purple-300 text-purple-300"
                  />
                  {reason.title}
                </h3>
                <p className="mt-2 max-w-md pl-7 font-body text-sm leading-relaxed text-purple-200">
                  {reason.description}
                </p>
              </div>
            </Reveal>
          );
        })}
      </ul>

      <Reveal
        variant="clip"
        delay={260}
        duration={1300}
        className="relative mx-auto aspect-[4/5] w-full max-w-[24rem] lg:mx-0 lg:ml-auto"
      >
        <div className="relative size-full overflow-hidden rounded-3xl">
          {REASONS.map((reason, i) => (
            <Image
              key={reason.photo}
              src={reason.photo}
              alt=""
              fill
              sizes="(max-width: 1024px) 80vw, 384px"
              className={cn(
                "object-cover transition-[opacity,transform] duration-700 ease-out",
                i === active ? "scale-100 opacity-100" : "scale-105 opacity-0",
              )}
            />
          ))}
          <div
            aria-hidden
            className="absolute inset-0 rounded-3xl ring-1 ring-white/15 ring-inset"
          />
        </div>
      </Reveal>
    </div>
  );
}
