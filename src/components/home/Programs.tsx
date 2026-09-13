import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { FlipCard, Reveal, SplitText } from "@/components/motion";

const PROGRAMS = [
  {
    name: "Analyst Program",
    href: "/programs",
    external: false,
    photo: "/events/image_carousel_pic2.jpg",
    blurb:
      "Weekly classes taught by leading VCs. Deal flow, due diligence, valuation and investment memos, with founders pitching directly to analysts.",
  },
  {
    name: "McGill Venture Fund",
    href: "/fund",
    external: false,
    photo: "/events/scarlet_pitch_2026/sp26_02.jpg",
    blurb:
      "A student-led fund backed by McGill alumni and faculty, investing in pre-seed startups from the McGill community.",
  },
  {
    name: "Growth Studio",
    href: "/growth-studio",
    external: false,
    photo: "/growth-studio/hero-founders.webp",
    blurb:
      "Startup consulting that gets pre-seed and seed founders investor-ready: pitch decks, investor CRM, go-to-market and AI adoption.",
  },
  {
    name: "HealthTech Innovation Lab",
    href: "/programs",
    external: false,
    photo: "/events/clipxhealthtech_2026/clipxhealthtech_2026_hero.jpg",
    blurb:
      "A selective fellowship where interdisciplinary teams tackle real challenges from health ventures and clinical innovators.",
  },
  {
    name: "Project Atlas",
    href: "https://www.project-atlas.ca/",
    external: true,
    photo: "/events/project_atlas/atlas_02.jpg",
    blurb:
      "Montreal's young builders, connected to the wider Canadian ecosystem through year-round events and a 30-person cohort sent to Toronto Tech Week.",
  },
];

type Program = (typeof PROGRAMS)[number];

/* Each face is its own component: an element built inline in one component
   and handed to another as a prop trips React's key validation. */
function ProgramFront({ program }: { program: Program }) {
  return (
    <div className="absolute inset-0">
      <Image
        src={program.photo}
        alt=""
        fill
        sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 240px"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"
      />
      <h3 className="absolute inset-x-4 bottom-4 font-display text-xl leading-tight text-white text-balance transition-transform duration-500 ease-out group-hover:-translate-y-1">
        {program.name}
      </h3>
    </div>
  );
}

function ProgramBack({ program }: { program: Program }) {
  return (
    <div className="flex h-full flex-col bg-purple-950 p-4 text-white">
      <h3 className="font-display text-lg leading-tight text-balance">
        {program.name}
      </h3>
      <p className="mt-3 font-body text-sm leading-snug text-purple-200">
        {program.blurb}
      </p>
      <Link
        href={program.href}
        {...(program.external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
        className="group/link mt-auto inline-flex w-fit items-center gap-2 font-heading text-sm text-purple-300 transition-colors hover:text-white"
      >
        {program.external ? "Visit site" : "Learn more"}
        <ArrowRight className="size-4 transition-transform duration-300 group-hover/link:translate-x-1" />
        {program.external && (
          <span className="sr-only">(opens in a new tab)</span>
        )}
      </Link>
    </div>
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
              <FlipCard
                className="group aspect-[16/10] w-full rounded-2xl sm:aspect-[3/4]"
                label={program.name}
                front={<ProgramFront program={program} />}
                back={<ProgramBack program={program} />}
              />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
