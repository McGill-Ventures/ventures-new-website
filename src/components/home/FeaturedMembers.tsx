import Image from "next/image";
import { Marquee, Reveal, SplitText } from "@/components/motion";

const FOUNDERS = [
  {
    name: "Anthony Azrak",
    role: "Founder & CEO",
    company: "General Magic",
    photo: "/headshots/founders/anthony_azrak.jpg",
    // White mark on a black plate, so it melts into the card and reads as
    // type rather than as a pasted-on logo.
    backer: {
      src: "/logos/companies/a16z_speedrun.png",
      width: 600,
      height: 83,
    },
    backerClass: "w-[94%] max-w-none",
  },
  {
    name: "Aditya Ranjan",
    role: "Founder & CEO",
    company: "GrayPass",
    photo: "/headshots/founders/aditya_ranjan.jpg",
    backer: {
      src: "/logos/companies/y_combinator_badge.png",
      width: 340,
      height: 104,
    },
    backerClass: "w-[66%] max-w-none",
  },
];

const WALL = [
  "inovia",
  "white_star_capital",
  "brightspark",
  "bdc",
  "framework_ventures",
  "triptyq_capital",
  "boreal_ventures",
  "front_row_ventures",
  "dorm_room_fund",
  "beta_kit",
  "nationgraph",
  "next_ai",
  "afterquery",
  "optionality",
  "carbon6",
  "mckinsey",
  "rbc",
  "ubs",
  "td",
  "citi",
  "bmo",
  "ey_parthenon",
  "bank_of_america",
  "bnp_paribas",
  "cibc",
];

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
            Members who left and started their own companies.
          </Reveal>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {FOUNDERS.map((founder, i) => (
              <Reveal
                as="article"
                key={founder.name}
                delay={300 + i * 130}
                className="relative flex flex-col overflow-hidden rounded-3xl bg-black text-white"
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
                      className="object-cover"
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
                <div className="relative mt-auto flex min-h-[5.5rem] items-center justify-center overflow-hidden px-6 pb-7 md:min-h-24">
                  <Image
                    src={founder.backer.src}
                    alt=""
                    width={founder.backer.width}
                    height={founder.backer.height}
                    className={`h-auto object-contain ${founder.backerClass}`}
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <Reveal delay={200} className="mt-12">
        <p className="px-6 font-heading text-sm text-purple-900/60 md:px-12 lg:px-24">
          <span className="mx-auto block max-w-7xl">
            Where the rest of them landed
          </span>
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
