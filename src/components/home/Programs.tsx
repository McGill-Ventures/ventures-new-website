"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Reveal, SplitText } from "@/components/motion";
import { at2x } from "@/lib/photoSizes";
import { cn } from "@/lib/utils";

const PROGRAMS = [
  {
    role: "Learn",
    name: "Analyst Program",
    description: "A crash course in venture capital, from sourcing deals to writing the investment memo.",
    href: "/programs#analyst",
    external: false,
    photo: "/events/image_carousel_pic2.jpg",
    position: "50% 70%",
  },
  {
    role: "Invest",
    name: "McGill Venture Fund",
    description: "Source, diligence and model real startups as an analyst on the student-run fund.",
    href: "/fund",
    external: false,
    photo: "/events/scarlet_pitch_2026/sp26_02.jpg",
    position: "50% 35%",
  },
  {
    role: "Advise",
    name: "Growth Studio",
    description: "Consult for early-stage startups on go-to-market and fundraising, side by side with their founders.",
    href: "/growth-studio",
    external: false,
    photo: "/growth-studio/hero-founders.webp",
    position: "50% 30%",
  },
  {
    role: "Build",
    name: "HealthTech Innovation Lab",
    description: "A fellowship building solutions to real healthcare challenges with startups and industry partners.",
    href: "/programs#htil",
    external: false,
    photo: "/events/clipxhealthtech_2026/clipxhealthtech_2026_program.jpg",
    position: "40% 50%",
  },
  {
    role: "Explore",
    name: "Project Atlas",
    description: "Connects Montreal's young builders to Canadian and international startup hubs, with San Francisco next.",
    href: "https://www.project-atlas.ca/",
    external: true,
    photo: "/events/project_atlas/atlas_02.jpg",
    position: "72% 50%",
  },
];

type Program = (typeof PROGRAMS)[number];

function linkProps(program: Program) {
  return program.external ? { target: "_blank", rel: "noopener noreferrer" } : {};
}

function NewTab({ program }: { program: Program }) {
  return program.external ? <span className="sr-only"> (opens in a new tab)</span> : null;
}

function Panels() {
  const [active, setActive] = useState(0);
  return (
    <ul className="hidden h-[36rem] gap-3 xl:flex">
      {PROGRAMS.map((program, i) => {
        const open = i === active;
        return (
          <li
            key={program.name}
            onMouseEnter={() => setActive(i)}
            className={cn(
              "min-w-0 basis-0 transition-[flex-grow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none",
              open ? "grow-[3.4]" : "grow",
            )}
          >
            <Link
              href={program.href}
              {...linkProps(program)}
              onFocus={() => setActive(i)}
              className="group relative block size-full overflow-hidden rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500"
            >
              <Image
                src={program.photo}
                alt=""
                fill
                sizes={at2x("(max-width: 1279px) 60vw, 760px")}
                style={{ objectPosition: program.position }}
                className={cn(
                  "object-cover transition-[scale,filter] duration-700 ease-out motion-reduce:transition-none",
                  open ? "scale-100 brightness-100" : "scale-105 brightness-75",
                )}
              />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/5" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white xl:p-7">
                <p className="font-heading text-sm text-purple-200">{program.role}</p>
                <h3
                  className={cn(
                    "mt-1 font-display leading-tight text-balance transition-[font-size] duration-500",
                    open ? "text-3xl" : "text-xl",
                  )}
                >
                  {program.name}
                  <NewTab program={program} />
                </h3>
                <div
                  className={cn(
                    "grid w-[24rem] max-w-full transition-[grid-template-rows,opacity] duration-500 ease-out motion-reduce:transition-none",
                    open ? "grid-rows-[1fr] opacity-100 delay-200" : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="mt-3 font-body text-white/80">{program.description}</p>
                  </div>
                </div>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

function List() {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 xl:hidden">
      {PROGRAMS.map((program, i) => (
        <Reveal as="li" key={program.name} delay={i * 60}>
          <Link
            href={program.href}
            {...linkProps(program)}
            className="group block h-full overflow-hidden rounded-2xl bg-purple-50 ring-1 ring-purple-950/5 ring-inset focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500"
          >
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image
                src={program.photo}
                alt=""
                fill
                sizes={at2x("(max-width: 639px) 100vw, 50vw")}
                style={{ objectPosition: program.position }}
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
            </div>
            <div className="p-5">
              <p className="font-heading text-sm text-purple-700">{program.role}</p>
              <h3 className="mt-1 font-display text-xl leading-tight text-purple-950">
                {program.name}
                <NewTab program={program} />
              </h3>
              <p className="mt-2 font-body text-purple-900/75">{program.description}</p>
            </div>
          </Link>
        </Reveal>
      ))}
    </ul>
  );
}

/** The negative scroll margin cancels the global scroll-padding so the hero's "Discover more" clears it fully. */
export function Programs() {
  return (
    <section
      id="programs"
      className="flex min-h-[100dvh] -scroll-mt-20 flex-col justify-center px-6 py-20 md:px-12 lg:px-24"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="max-w-3xl">
          <h2 className="section-heading text-black">
            <SplitText text="Find your place" />
          </h2>
          <Reveal
            as="p"
            delay={200}
            className="mt-6 max-w-xl font-body text-lg text-purple-900/75 md:text-xl"
          >
            Learn venture capital, invest from a student-run fund, advise
            startups, build health tech, or take Montreal&apos;s builders
            abroad.
          </Reveal>
        </div>

        <Reveal delay={250} className="mt-12 xl:mt-14">
          <Panels />
          <List />
        </Reveal>
      </div>
    </section>
  );
}
