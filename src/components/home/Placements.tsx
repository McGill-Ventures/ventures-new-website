import { readFileSync } from "node:fs";
import { join } from "node:path";
import type { CSSProperties } from "react";
import Image from "next/image";
import { Reveal, SplitText } from "@/components/motion";
import { cn } from "@/lib/utils";

// ring is the orbit radius as a percentage of the diagram's width, duration its seconds per turn.
const GROUPS = [
  {
    label: "Venture capital",
    ring: 22,
    duration: 80,
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
    ring: 34.5,
    duration: 110,
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
    ring: 47,
    duration: 140,
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
] satisfies { label: string; ring: number; duration: number; logos: [string, string][] }[];

function pngSize(file: string) {
  const png = readFileSync(join(process.cwd(), "public/logos/companies", `${file}.png`));
  if (png.toString("latin1", 12, 16) !== "IHDR") {
    throw new Error(`public/logos/companies/${file}.png is not a PNG`);
  }
  return { width: png.readUInt32BE(16), height: png.readUInt32BE(20) };
}

// Same area for every logo so wide wordmarks and square marks read at equal weight, sized
// in cqw so the whole orbit scales with its container.
function logoWidth(file: string) {
  const { width, height } = pngSize(file);
  const ratio = width / height;
  return { width, height, cqw: Math.min(Math.sqrt(820 * ratio), 62, 30 * ratio) / 7 };
}

const SPIN = "animate-[spin_var(--turn)_linear_infinite] group-hover:[animation-play-state:paused] motion-reduce:animate-none";

function Orbit() {
  return (
    <div className="group @container relative aspect-square w-[150%] max-w-none shrink-0 sm:w-full sm:max-w-[44rem]">
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 size-[46%] -translate-1/2 rounded-full bg-purple-600/30 blur-3xl"
      />
      <Image
        src="/logos/main_logo_wordmark.png"
        alt="McGill Ventures"
        width={2576}
        height={302}
        sizes="(max-width: 639px) 40vw, 180px"
        className="absolute top-1/2 left-1/2 w-[26%] -translate-1/2 brightness-0 invert"
      />
      {GROUPS.map((group, ringIndex) => {
        const reverse = ringIndex % 2 === 1;
        return (
          <div key={group.label}>
            <div
              aria-hidden
              style={{ width: `${group.ring * 2}cqw` }}
              className="absolute top-1/2 left-1/2 aspect-square -translate-1/2 rounded-full border border-white/10"
            />
            {/* The ring turns one way and each logo the other, so the logos stay upright. */}
            <ul
              aria-label={group.label}
              style={{ "--turn": `${group.duration}s` } as CSSProperties}
              className={cn("absolute inset-0", SPIN, reverse && "[animation-direction:reverse]")}
            >
              {group.logos.map(([file, name], i) => {
                const { width, height, cqw } = logoWidth(file);
                const angle = (360 / group.logos.length) * i + ringIndex * 15;
                return (
                  <li
                    key={file}
                    style={{
                      transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-${group.ring}cqw) rotate(${-angle}deg)`,
                    }}
                    className="absolute top-1/2 left-1/2"
                  >
                    <div
                      style={{ "--turn": `${group.duration}s` } as CSSProperties}
                      className={cn(SPIN, !reverse && "[animation-direction:reverse]")}
                    >
                      <Image
                        src={`/logos/companies/${file}.png`}
                        alt={name}
                        title={name}
                        width={width}
                        height={height}
                        sizes="120px"
                        style={{ width: `${cqw}cqw` }}
                        className="h-auto max-w-none object-contain opacity-80 transition-opacity duration-300 hover:opacity-100"
                      />
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

function RingIcon({ ring }: { ring: number }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden className="size-7 shrink-0">
      {[5, 10, 15].map((r, i) => (
        <circle
          key={r}
          cx="16"
          cy="16"
          r={r}
          fill="none"
          strokeWidth={i === ring ? 2 : 1}
          className={i === ring ? "stroke-purple-300" : "stroke-white/20"}
        />
      ))}
    </svg>
  );
}

/** Where members and alumni went on to work, as three orbiting rings around MVC. */
export function Placements() {
  return (
    <section className="bg-grain relative overflow-hidden bg-purple-950 px-6 py-24 text-white md:px-12 md:py-32 lg:px-24">
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:gap-16">
        <div>
          <h2 className="section-heading">
            <SplitText text="Where members land" />
          </h2>
          <Reveal
            as="p"
            delay={200}
            className="mt-6 max-w-md font-body text-lg text-purple-200 md:text-xl"
          >
            Members and alumni have gone on to venture funds, startups and the
            firms in orbit here.
          </Reveal>
          <Reveal as="ul" delay={320} className="mt-10 space-y-4">
            {GROUPS.map((group, i) => (
              <li key={group.label} className="flex items-center gap-3 font-heading text-purple-100">
                <RingIcon ring={i} />
                {group.label}
              </li>
            ))}
          </Reveal>
        </div>
        <Reveal variant="scale" delay={200} duration={1200} className="flex justify-center">
          <Orbit />
        </Reveal>
      </div>
    </section>
  );
}
