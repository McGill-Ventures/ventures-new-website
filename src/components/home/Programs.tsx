import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Reveal, SplitText } from "@/components/motion";

const PROGRAMS = [
  {
    name: "Analyst Program",
    href: "/programs#analyst",
    external: false,
    photo: "/events/image_carousel_pic2.jpg",
  },
  {
    name: "McGill Venture Fund",
    href: "/fund",
    external: false,
    photo: "/events/scarlet_pitch_2026/sp26_02.jpg",
  },
  {
    name: "Growth Studio",
    href: "/growth-studio",
    external: false,
    photo: "/growth-studio/hero-founders.webp",
  },
  {
    name: "HealthTech Innovation Lab",
    href: "/programs#htil",
    external: false,
    photo: "/events/clipxhealthtech_2026/clipxhealthtech_2026_hero.jpg",
  },
  {
    name: "Project Atlas",
    href: "https://www.project-atlas.ca/",
    external: true,
    photo: "/events/project_atlas/atlas_02.jpg",
  },
];

type Program = (typeof PROGRAMS)[number];

function ProgramCard({ program }: { program: Program }) {
  return (
    <>
      <Image
        src={program.photo}
        alt=""
        fill
        sizes="(max-width: 639px) 100vw, (max-width: 1023px) 60vw, 480px"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"
      />
      <h3 className="absolute inset-x-4 bottom-4 font-display text-xl leading-tight text-white text-balance transition-transform duration-500 ease-out group-hover:-translate-y-1">
        {program.name}
        <ArrowRight
          aria-hidden
          className="ml-2 inline size-5 align-[-0.125em]"
        />
      </h3>
    </>
  );
}

/** The hero's "Discover more" lands here; the negative scroll margin cancels
 *  the global scroll-padding so the hero is fully out of view. */
export function Programs() {
  return (
    <section
      id="programs"
      className="flex min-h-[100dvh] -scroll-mt-20 flex-col justify-center px-6 py-16 md:px-12 lg:px-24"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="max-w-3xl">
          <h2 className="section-heading text-black">
            <SplitText text="Five programs, from VC to STEM" />
          </h2>
          <Reveal
            as="p"
            delay={200}
            className="mt-6 max-w-xl font-body text-lg text-purple-900/75 md:text-xl"
          >
            Weekly classes, a student-led fund, a startup consulting studio, a
            health tech lab and a builders&apos; community.
          </Reveal>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-3 lg:mt-14 lg:grid-cols-5">
          {PROGRAMS.map((program, i) => (
            <Reveal as="li" key={program.name} delay={i * 90}>
              <Link
                href={program.href}
                {...(program.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group relative block aspect-[16/10] w-full overflow-hidden rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500 sm:aspect-[3/4]"
              >
                <ProgramCard program={program} />
                {program.external && (
                  <span className="sr-only">(opens in a new tab)</span>
                )}
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
