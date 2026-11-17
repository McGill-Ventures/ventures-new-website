"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { at2x } from "@/lib/photoSizes";
import { Reveal } from "@/components/motion";

const REASONS = [
  {
    title: "Ambition is contagious",
    description:
      "You become the people you spend your time around. Here that is founders, investors and students who are all building something.",
    photo: "/events/northstar_2026/ns26_02.jpg",
    caption: "North Star 2026",
  },
  {
    title: "You're in the room",
    description:
      "Close enough to how decisions actually get made that it stops being abstract.",
    photo: "/events/scarlet_pitch_2026/sp26_02.jpg",
    caption: "Scarlet Pitch 2026",
  },
  {
    title: "A network that travels",
    description:
      "Members and alumni in Montreal, Toronto, New York and San Francisco who keep showing up for each other.",
    photo: "/community/members_group.jpg",
    caption: "The McGill Ventures community",
  },
];

function Showcase({ heading }: { heading: ReactNode }) {
  const [active, setActive] = useState(0);
  return (
    <div className="hidden lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-16 xl:gap-24">
      <div className="flex flex-col justify-between gap-14">
        {heading}
        <ul className="group/list">
          {REASONS.map((reason, i) => {
            const open = i === active;
            return (
              <li
                key={reason.title}
                onMouseEnter={() => setActive(i)}
                className="relative border-t border-white/15 last:border-b"
              >
                {open && (
                  <span
                    aria-hidden
                    onAnimationEnd={() => setActive((i + 1) % REASONS.length)}
                    className="animate-why-progress absolute -top-px left-0 h-0.5 bg-purple-300 group-hover/list:[animation-play-state:paused] motion-reduce:hidden"
                  />
                )}
                <h3>
                  <button
                    type="button"
                    aria-expanded={open}
                    onClick={() => setActive(i)}
                    className={cn(
                      "w-full py-6 text-left font-display text-3xl leading-tight transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-300 xl:text-4xl",
                      open ? "text-white" : "text-white/35 hover:text-white/70",
                    )}
                  >
                    {reason.title}
                  </button>
                </h3>
                <div
                  className={cn(
                    "grid transition-[grid-template-rows,opacity] duration-500 ease-out motion-reduce:transition-none",
                    open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-md pb-7 font-body text-lg leading-relaxed text-purple-100/75">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <figure className="relative min-h-[34rem] overflow-hidden rounded-2xl bg-purple-900 shadow-[0_40px_80px_-32px_rgba(0,0,0,0.7)] ring-1 ring-white/10">
        {REASONS.map((reason, i) => (
          <Image
            key={reason.photo}
            src={reason.photo}
            alt=""
            fill
            sizes={at2x("(max-width: 1279px) 55vw, 700px")}
            className={cn(
              "object-cover transition-[opacity,scale] [transition-duration:1s,8s] ease-out motion-reduce:transition-none",
              i === active ? "scale-100 opacity-100" : "scale-110 opacity-0",
            )}
          />
        ))}
        <div aria-hidden className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/60 to-transparent" />
        <figcaption className="absolute bottom-0 left-0 p-6 font-body text-sm text-white/85">
          {REASONS[active].caption}
        </figcaption>
      </figure>
    </div>
  );
}

function Stack({ heading }: { heading: ReactNode }) {
  return (
    <div className="lg:hidden">
    {heading}
    <ul className="mt-12 grid gap-12 sm:grid-cols-2 sm:gap-x-8">
      {REASONS.map((reason) => (
        <Reveal as="li" key={reason.title} duration={1000}>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-purple-900 ring-1 ring-white/10">
            <Image
              src={reason.photo}
              alt=""
              fill
              sizes={at2x("(max-width: 639px) 100vw, 50vw")}
              className="object-cover"
            />
          </div>
          <h3 className="mt-5 font-display text-2xl leading-tight">{reason.title}</h3>
          <p className="mt-2 font-body leading-relaxed text-purple-100/75">{reason.description}</p>
        </Reveal>
      ))}
    </ul>
    </div>
  );
}

export function WhyReasons({ heading }: { heading: ReactNode }) {
  return (
    <>
      <Showcase heading={heading} />
      <Stack heading={heading} />
    </>
  );
}
