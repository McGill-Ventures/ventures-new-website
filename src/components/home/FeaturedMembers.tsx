import { readFileSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";
import { Reveal, SplitText } from "@/components/motion";

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
      ["inovia", "Inovia"],
      ["bdc", "BDC"],
      ["brightspark", "Brightspark"],
      ["framework", "Framework Venture Partners"],
      ["novateur", "Novateur Ventures"],
      ["triptyq", "Triptyq Capital"],
      ["boreal_ventures", "Boreal Ventures"],
      ["boxone", "BoxOne Ventures"],
      ["front_row_ventures", "Front Row Ventures"],
      ["dorm_room_fund", "Dorm Room Fund"],
      ["white_star_capital", "White Star Capital"],
      ["northside_ventures", "Northside Ventures"],
    ],
  },
  {
    label: "Startups",
    logos: [
      ["checksammy", "CheckSammy"],
      ["betakit", "BetaKit"],
      ["attain", "Attain"],
      ["afterquery", "AfterQuery"],
      ["z_fellows", "Z Fellows"],
      ["nationgraph", "NationGraph"],
      ["next", "NEXT Canada"],
      ["carbon6", "Carbon6"],
      ["optionality", "Optionality"],
      ["brio", "Brio"],
      ["planned", "Planned"],
      ["botpress", "Botpress"],
    ],
  },
  {
    label: "Traditional careers",
    logos: [
      ["mckinsey", "McKinsey & Company"],
      ["rbc", "RBC"],
      ["ubs", "UBS"],
      ["td", "TD"],
      ["lightspeed", "Lightspeed"],
      ["citi", "Citi"],
      ["bmo", "BMO"],
      ["ey_parthenon", "EY-Parthenon"],
      ["bank_of_america", "Bank of America"],
      ["bnp_paribas", "BNP Paribas"],
      ["cibc", "CIBC"],
      ["pwc", "PwC"],
    ],
  },
] satisfies { label: string; logos: [string, string][] }[];

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

function pngSize(file: string) {
  const png = readFileSync(
    join(process.cwd(), "public/logos/companies", `${file}.png`),
  );
  if (png.toString("latin1", 12, 16) !== "IHDR") {
    throw new Error(`public/logos/companies/${file}.png is not a PNG`);
  }
  return { width: png.readUInt32BE(16), height: png.readUInt32BE(20) };
}

// Same area for every logo so wide wordmarks and square marks read at equal weight.
const LOGO_AREA = 2200;

function WallLogo({ file, name }: { file: string; name: string }) {
  const { width, height } = pngSize(file);
  const ratio = width / height;
  const w = Math.min(Math.sqrt(LOGO_AREA * ratio), 140, 36 * ratio);
  return (
    <div className="flex h-20 items-center justify-center border-r border-b border-white/10 px-3 md:h-24">
      <Image
        src={`/logos/companies/${file}.png`}
        alt={name}
        title={name}
        width={width}
        height={height}
        sizes="160px"
        style={{ "--w": `${w}px` } as React.CSSProperties}
        className="h-auto w-[calc(var(--w)*0.8)] max-w-full object-contain opacity-70 transition-opacity duration-300 hover:opacity-100 md:w-(--w)"
      />
    </div>
  );
}

// Cells the label spans so every row closes at 3, 4 and 7 columns.
const labelSpan = (logos: number, cols: number) => cols - (logos % cols);

export function FeaturedMembers() {
  return (
    <section className="flex min-h-[100dvh] flex-col justify-center overflow-hidden bg-black py-16 text-white">
      <div className="px-6 md:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="section-heading">
            <SplitText text="Featured members" />
          </h2>
          <Reveal
            as="p"
            delay={200}
            className="mt-4 max-w-xl font-body text-lg text-white/60 md:text-xl"
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
                  <span className="relative flex w-full flex-col overflow-hidden rounded-3xl bg-black text-white ring-1 ring-white/10 ring-inset transition-transform duration-500 group-hover:-translate-y-1">
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

      <div className="mt-12 px-6 md:mt-16 md:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <Reveal
            as="p"
            delay={120}
            className="font-heading text-sm text-white/50"
          >
            And the rest of us landed opportunities here
          </Reveal>
          <div className="mt-4 space-y-6">
            {GROUPS.map((group, i) => {
              const fromLeft = i % 2 === 1;
              return (
                <Reveal
                  key={group.label}
                  variant={fromLeft ? "left" : "right"}
                  delay={200 + i * 140}
                  duration={1100}
                  className="grid grid-cols-3 border-t border-l border-white/10 sm:grid-cols-4 lg:grid-cols-7"
                  style={
                    {
                      "--reveal-from": fromLeft
                        ? "translateX(-120px)"
                        : "translateX(120px)",
                    } as React.CSSProperties
                  }
                >
                  <div
                    className="col-span-(--span-3) flex items-center justify-center border-r border-b border-white/10 p-4 sm:col-span-(--span-4) lg:col-span-(--span-7)"
                    style={
                      {
                        "--span-3": labelSpan(group.logos.length, 3),
                        "--span-4": labelSpan(group.logos.length, 4),
                        "--span-7": labelSpan(group.logos.length, 7),
                      } as React.CSSProperties
                    }
                  >
                    <h3 className="text-center font-heading text-sm text-purple-300 md:text-base">
                      {group.label}
                    </h3>
                  </div>
                  {group.logos.map(([file, name]) => (
                    <WallLogo key={file} file={file} name={name} />
                  ))}
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
