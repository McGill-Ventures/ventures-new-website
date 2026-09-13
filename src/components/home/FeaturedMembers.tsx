import Image from "next/image";
import { Marquee, Reveal, SplitText } from "@/components/motion";

const FOUNDERS = [
  {
    name: "Anthony Azrak",
    role: "Founder & CEO",
    company: "General Magic",
    photo: "/headshots/founders/anthony_azrak.jpg",
    linkedin: "https://www.linkedin.com/in/anthony-azrak/",
    backer: {
      src: "/logos/companies/a16z_speedrun.png",
      width: 600,
      height: 83,
      className: "w-[104%] max-w-none",
      label: "a16z speedrun",
    } as const,
  },
  {
    name: "Aditya Ranjan",
    role: "Founder & CEO",
    company: "GrayPass",
    photo: "/headshots/founders/aditya_ranjan.jpg",
    linkedin: "https://www.linkedin.com/in/ad1tyaranjan/",
    // Inline: the only bitmap of this mark is 69px square and visibly blurs.
    backer: { mark: "yc" as const, label: "Y Combinator" },
  },
];

const GROUPS = [
  {
    label: "Venture capital",
    logos: [
      "inovia",
      "bdc",
      "brightspark",
      "framework",
      "novateur",
      "triptyq",
      "quantacet",
      "boreal_ventures",
      "boxone",
      "front_row_ventures",
      "dorm_room_fund",
      "white_star_capital",
    ],
  },
  {
    label: "Startups",
    logos: [
      "checksammy",
      "betakit",
      "attain",
      "afterquery",
      "z_fellows",
      "nationgraph",
      "next",
      "carbon6",
      "optionality",
      "brio",
    ],
  },
  {
    label: "Traditional careers",
    logos: [
      "mckinsey",
      "rbc",
      "ubs",
      "td",
      "lightspeed",
      "citi",
      "bmo",
      "ey_parthenon",
      "bank_of_america",
      "bnp_paribas",
      "cibc",
    ],
  },
];

function YCombinatorMark() {
  return (
    <svg
      viewBox="0 0 100 100"
      role="img"
      aria-label="Y Combinator"
      className="h-[5.5rem] w-[5.5rem] rounded-md"
    >
      <rect width="100" height="100" fill="#FC651E" />
      <path
        d="M29.7 25 L50 48.5 L70.3 25 M50 48.5 L50 73.5"
        fill="none"
        stroke="#fff"
        strokeWidth="7.4"
      />
    </svg>
  );
}

function WallLogo({ name }: { name: string }) {
  return (
    <div className="flex h-11 w-32 items-center justify-center md:h-12 md:w-40">
      <Image
        src={`/logos/companies/${name}.png`}
        alt=""
        width={220}
        height={64}
        className="max-h-8 w-auto object-contain md:max-h-9"
      />
    </div>
  );
}

export function FeaturedMembers() {
  return (
    <section className="flex min-h-[100dvh] flex-col justify-center overflow-hidden py-6">
      <div className="px-6 md:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="section-heading text-black">
            <SplitText text="Featured members" />
          </h2>
          <Reveal
            as="p"
            delay={200}
            className="mt-4 max-w-xl font-body text-lg text-purple-900/75 md:text-xl"
          >
            Our alumni are ambitious builders, backed by some of the best
            accelerators and funds in the world.
          </Reveal>

          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {FOUNDERS.map((founder, i) => (
              <Reveal key={founder.name} delay={300 + i * 130}>
                <a
                  href={founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex h-full rounded-3xl"
                >
                  <span className="relative flex w-full flex-col overflow-hidden rounded-3xl bg-black text-white transition-transform duration-500 group-hover:-translate-y-1">
                    <div
                      aria-hidden
                      className="animate-orb pointer-events-none absolute -top-24 -right-16 size-72 rounded-full bg-purple-700/40 blur-3xl"
                    />
                    <div className="relative flex items-center gap-5 p-5 md:gap-6 md:p-6">
                      <div className="relative size-[4.5rem] shrink-0 overflow-hidden rounded-2xl md:size-20">
                        <Image
                          src={founder.photo}
                          alt={founder.name}
                          fill
                          sizes="96px"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-display text-2xl leading-tight md:text-3xl">
                          {founder.name}
                        </h3>
                        <p className="mt-1.5 font-heading text-purple-300">
                          {founder.role}
                        </p>
                        <p className="font-body text-purple-100/70">
                          {founder.company}
                        </p>
                      </div>
                    </div>

                    <div className="relative mt-auto flex min-h-24 items-center justify-center overflow-hidden px-6 pb-5">
                      {"mark" in founder.backer ? (
                        <YCombinatorMark />
                      ) : (
                        <Image
                          src={founder.backer.src}
                          alt={founder.backer.label}
                          width={founder.backer.width}
                          height={founder.backer.height}
                          className={`object-contain ${founder.backer.className}`}
                        />
                      )}
                    </div>
                    <span className="sr-only">
                      {founder.name} on LinkedIn (opens in a new tab)
                    </span>
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 px-6 md:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <Reveal
            as="p"
            delay={120}
            className="font-heading text-sm text-purple-900/60"
          >
            And the rest of us landed internships and full-time roles here
          </Reveal>
          <div className="mt-3 space-y-1.5">
            {GROUPS.map((group, i) => {
              const fromLeft = i % 2 === 1;
              return (
                <Reveal
                  key={group.label}
                  variant={fromLeft ? "left" : "right"}
                  delay={200 + i * 140}
                  duration={1100}
                  className="flex items-center gap-4 border-t border-black/8 pt-2 md:gap-8"
                  style={
                    {
                      "--reveal-from": fromLeft
                        ? "translateX(-120px)"
                        : "translateX(120px)",
                    } as React.CSSProperties
                  }
                >
                  <p className="w-24 shrink-0 font-heading text-xs text-purple-900/45 md:w-40 md:text-sm">
                    {group.label}
                  </p>
                  <Marquee
                    direction={fromLeft ? "right" : "left"}
                    duration={56 + i * 8}
                    gap="0.25rem"
                    fade
                    className="min-w-0 flex-1"
                  >
                    {group.logos.map((name) => (
                      <WallLogo key={name} name={name} />
                    ))}
                  </Marquee>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
