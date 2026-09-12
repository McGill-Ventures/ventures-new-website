import Image from "next/image";
import { Marquee, Reveal, SplitText } from "@/components/motion";

const FOUNDERS = [
  {
    name: "Anthony Azrak",
    role: "Founder & CEO",
    company: "General Magic",
    photo: "/headshots/founders/anthony_azrak.jpg",
    linkedin: "https://www.linkedin.com/in/anthony-azrak/",
    // White mark on a black plate, so it melts into the card and reads as
    // type rather than as a pasted-on logo.
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
    // Inline, not the extracted bitmap: the only copy in the deck is 69px
    // square, which visibly blurs at the size this card wants.
    backer: { mark: "yc" as const, label: "Y Combinator" },
  },
];

// Interleaved so the handful of black-only marks never sit side by side.
const WALL = [
  "inovia",
  "bdc",
  "brightspark",
  "framework",
  "rbc",
  "betakit",
  "triptyq",
  "td",
  "mckinsey",
  "checksammy",
  "ubs",
  "front_row_ventures",
  "boxone",
  "citi",
  "afterquery",
  "dorm_room_fund",
  "bmo",
  "carbon6",
  "nationgraph",
  "lightspeed",
  "attain",
  "optionality",
  "bank_of_america",
  "next",
  "quantacet",
  "cibc",
  "boreal_ventures",
  "novateur",
  "bnp_paribas",
  "z_fellows",
  "white_star_capital",
  "ey_parthenon",
  "brio",
];

/* Redrawn from the deck's badge: same orange and the same Y proportions,
   but sharp at any size. */
function YCombinatorMark() {
  return (
    <svg
      viewBox="0 0 100 100"
      role="img"
      aria-label="Y Combinator"
      className="h-28 w-28 rounded-md"
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
    <div className="flex h-14 w-36 items-center justify-center md:h-16 md:w-44">
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
    <section className="flex min-h-[100dvh] flex-col justify-center overflow-hidden py-12">
      <div className="px-6 md:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-display text-[clamp(2.25rem,4.5vw,4.25rem)] leading-[1] text-black text-balance">
            <SplitText text="Featured members" />
          </h2>
          <Reveal
            as="p"
            delay={200}
            className="mt-4 max-w-xl font-body text-lg text-purple-900/75 md:text-xl"
          >
            Some of them did not wait for a job offer. They left and started the
            company themselves.
          </Reveal>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {FOUNDERS.map((founder, i) => (
              <Reveal key={founder.name} delay={300 + i * 130}>
                <a
                  href={founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-black text-white transition-transform duration-500 hover:-translate-y-1"
                >
                  <div
                    aria-hidden
                    className="animate-orb pointer-events-none absolute -top-24 -right-16 size-72 rounded-full bg-purple-700/40 blur-3xl"
                  />
                  <div className="relative flex items-center gap-5 p-6 md:gap-6 md:p-7">
                    <div className="relative size-20 shrink-0 overflow-hidden rounded-2xl md:size-24">
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

                  {/* The backer, given the room the name deserves. */}
                  <div className="relative mt-auto flex min-h-32 items-center justify-center overflow-hidden px-6 pb-7">
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
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <Reveal delay={200} className="mt-12">
        <p className="px-6 font-heading text-sm text-purple-900/60 md:px-12 lg:px-24">
          <span className="mx-auto block max-w-7xl">And the rest are at</span>
        </p>
        <Marquee duration={70} gap="0.5rem" fade className="mt-5">
          {WALL.map((name) => (
            <WallLogo key={name} name={name} />
          ))}
        </Marquee>
      </Reveal>
    </section>
  );
}
