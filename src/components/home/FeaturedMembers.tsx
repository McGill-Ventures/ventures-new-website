import { readFileSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";
import { ArrowUpRight, Quote } from "lucide-react";
import { Reveal, SplitText } from "@/components/motion";
import { at2x } from "@/lib/photoSizes";

const FOUNDERS = [
  {
    name: "Anthony Azrak",
    role: "Founder & CEO",
    company: "General Magic",
    photo: "/headshots/founders/anthony_azrak.jpg",
    linkedin: "https://www.linkedin.com/in/anthony-azrak/",
    quote:
      "Sitting on the investor side of the table at MVC taught me what great founders do differently, and I've been trying to live up to it ever since.",
    news: {
      source: "BetaKit",
      title: "General Magic raises $7.2M USD, led by Radical Ventures",
      href: "https://betakit.com/a16z-speedrun-alum-general-magic-secures-7-2-million-usd-to-make-calling-your-insurance-company-less-of-a-slog/",
    },
    backer: {
      src: "/logos/companies/a16z_speedrun.png",
      width: 600,
      height: 83,
      className: "h-4 w-auto md:h-5",
      label: "a16z speedrun",
    } as const,
  },
  {
    name: "Aditya Ranjan",
    role: "Founder & CEO",
    company: "GrayPass",
    photo: "/headshots/founders/aditya_ranjan.jpg",
    linkedin: "https://www.linkedin.com/in/ad1tyaranjan/",
    quote:
      "McGill's entrepreneurial culture can feel quite scattered, and MVC does a great job of bringing the builders and ambitious people on campus into one place. It makes the startup scene feel much more solidified, personal, and like an actual community.",
    news: {
      source: "LinkedIn",
      title: "Aditya on GrayPass and Y Combinator",
      href: "https://www.linkedin.com/feed/update/urn:li:activity:7521322611729932288/",
    },
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
      className="size-9 rounded-md md:size-10"
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
    <div className="flex h-20 items-center justify-center border-r border-b border-purple-950/10 px-3 md:h-24">
      <Image
        src={`/logos/companies/${file}.png`}
        alt={name}
        title={name}
        width={width}
        height={height}
        sizes="160px"
        style={{ "--w": `${w}px` } as React.CSSProperties}
        className="h-auto w-[calc(var(--w)*0.8)] max-w-full object-contain opacity-55 brightness-0 transition-opacity duration-300 hover:opacity-90 md:w-(--w)"
      />
    </div>
  );
}

// Cells the label spans so every row closes at 3, 4 and 7 columns.
const labelSpan = (logos: number, cols: number) => cols - (logos % cols);

export function FeaturedMembers() {
  return (
    <section className="flex min-h-[100dvh] flex-col justify-center overflow-hidden bg-white py-20 text-purple-950">
      <div className="px-6 md:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="section-heading text-black">
            <SplitText text="Featured members" />
          </h2>
          <Reveal
            as="p"
            delay={200}
            className="mt-6 max-w-xl font-body text-lg text-purple-900/75 md:text-xl"
          >
            Our alumni are ambitious builders, backed by some of the best
            accelerators and funds in the world.
          </Reveal>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {FOUNDERS.map((founder, i) => (
              <Reveal key={founder.name} delay={300 + i * 130}>
                <figure className="flex h-full flex-col rounded-3xl bg-purple-50 p-6 ring-1 ring-purple-950/5 ring-inset md:p-8">
                  <div className="flex h-10 items-center justify-between gap-4">
                    <Quote aria-hidden className="size-8 fill-purple-300 text-purple-300" />
                    <div className="shrink-0">
                      {"mark" in founder.backer ? (
                        <YCombinatorMark />
                      ) : (
                        <Image
                          src={founder.backer.src}
                          alt={founder.backer.label}
                          width={founder.backer.width}
                          height={founder.backer.height}
                          className={`object-contain brightness-0 ${founder.backer.className}`}
                        />
                      )}
                    </div>
                  </div>
                  <blockquote className="mt-4 font-display text-xl leading-snug text-purple-950 md:text-2xl">
                    {founder.quote}
                  </blockquote>

                  <figcaption className="mt-auto flex items-center gap-4 pt-8">
                    <div className="relative size-14 shrink-0 overflow-hidden rounded-2xl md:size-16">
                      <Image
                        src={founder.photo}
                        alt=""
                        fill
                        sizes={at2x("64px")}
                        className="object-cover"
                      />
                    </div>
                    <div className="min-w-0">
                      <a
                        href={founder.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-display text-lg leading-tight text-purple-950 underline-offset-4 hover:underline md:text-xl"
                      >
                        {founder.name}
                        <span className="sr-only"> on LinkedIn (opens in a new tab)</span>
                      </a>
                      <p className="font-body text-sm text-purple-900/70 md:text-base">
                        {founder.role}, {founder.company}
                      </p>
                    </div>
                  </figcaption>

                  <a
                    href={founder.news.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-6 flex items-center justify-between gap-4 rounded-2xl bg-white px-5 py-4 ring-1 ring-purple-950/5 transition-shadow duration-300 hover:ring-purple-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500"
                  >
                    <span className="min-w-0">
                      <span className="block font-heading text-xs text-purple-700">
                        Latest · {founder.news.source}
                      </span>
                      <span className="mt-0.5 block font-heading text-purple-950">
                        {founder.news.title}
                      </span>
                    </span>
                    <ArrowUpRight
                      aria-hidden
                      className="size-5 shrink-0 text-purple-700 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                </figure>
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
            className="font-heading text-sm text-purple-900/60"
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
                  className="grid grid-cols-3 border-t border-l border-purple-950/10 sm:grid-cols-4 lg:grid-cols-7"
                  style={
                    {
                      "--reveal-from": fromLeft
                        ? "translateX(-120px)"
                        : "translateX(120px)",
                    } as React.CSSProperties
                  }
                >
                  <div
                    className="col-span-(--span-3) flex items-center justify-center border-r border-b border-purple-950/10 p-4 sm:col-span-(--span-4) lg:col-span-(--span-7)"
                    style={
                      {
                        "--span-3": labelSpan(group.logos.length, 3),
                        "--span-4": labelSpan(group.logos.length, 4),
                        "--span-7": labelSpan(group.logos.length, 7),
                      } as React.CSSProperties
                    }
                  >
                    <h3 className="text-center font-heading text-sm text-purple-700 md:text-base">
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
