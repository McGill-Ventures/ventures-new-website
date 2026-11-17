import { readFileSync } from "node:fs";
import { join } from "node:path";
import type { CSSProperties } from "react";
import Image from "next/image";
import { Reveal, SplitText, Starfield } from "@/components/motion";
import { cn } from "@/lib/utils";

// ring is the orbit radius as a percentage of the diagram's width, duration its seconds per turn.
const GROUPS = [
  {
    label: "Venture capital",
    ring: 24,
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
    ring: 36,
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
    ring: 47.5,
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

// Light rim, body and night side of each planet, cycled so neighbours differ.
const PALETTE = [
  ["#c4b5fd", "#5b21b6", "#160b2e"],
  ["#f9a8d4", "#9d174d", "#24081a"],
  ["#93c5fd", "#1d4ed8", "#0a1230"],
  ["#99f6e4", "#0f766e", "#05201d"],
  ["#fcd34d", "#a16207", "#241505"],
  ["#d8b4fe", "#7e22ce", "#1a0a2e"],
];

// Planet diameters per ring in cqw, so the whole system scales with its container.
const PLANET = [8, 8.5, 9];

// Same area for every logo so wordmarks and square marks read at equal weight, kept inside the planet.
function logoWidth(file: string, planet: number) {
  const { width, height } = pngSize(file);
  const ratio = width / height;
  return { width, height, cqw: Math.min(Math.sqrt(820 * ratio) / 7, 30 * ratio / 7, planet * 0.7) };
}

const SPIN = "animate-[spin_var(--turn)_linear_infinite] group-hover:[animation-play-state:paused] motion-reduce:animate-none";

function Orbit() {
  return (
    <div className="group @container relative aspect-square w-[165%] max-w-none shrink-0 sm:w-full sm:max-w-[48rem]">
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 size-[62%] -translate-1/2 animate-[pulse_7s_ease-in-out_infinite] rounded-full bg-[radial-gradient(circle,rgba(216,180,254,0.4),rgba(147,51,234,0.14)_45%,transparent_70%)] motion-reduce:animate-none"
      />
      <div className="absolute top-1/2 left-1/2 grid size-[30%] -translate-1/2 place-items-center rounded-full bg-[radial-gradient(circle_at_50%_42%,#ffffff_0%,#fbf7ff_52%,#ead8ff_78%,#c48cff_100%)] shadow-[0_0_5cqw_1.5cqw_rgba(216,180,254,0.55),0_0_14cqw_5cqw_rgba(147,51,234,0.35)]">
        <Image
          src="/logos/main_logo_wordmark.png"
          alt="McGill Ventures"
          width={2576}
          height={302}
          sizes="(max-width: 639px) 40vw, 200px"
          className="w-[74%]"
        />
      </div>
      {GROUPS.map((group, ringIndex) => {
        const reverse = ringIndex % 2 === 1;
        return (
          <div key={group.label}>
            <div
              aria-hidden
              style={{ width: `${group.ring * 2}cqw` }}
              className="absolute top-1/2 left-1/2 aspect-square -translate-1/2 rounded-full border border-white/[0.08]"
            />
            {/* The orbit turns one way and each logo the other, so logos stay upright while the planet's lit side keeps facing the star. */}
            <ul
              aria-label={group.label}
              style={{ "--turn": `${group.duration}s` } as CSSProperties}
              className={cn("absolute inset-0", SPIN, reverse && "[animation-direction:reverse]")}
            >
              {group.logos.map(([file, name], i) => {
                const angle = (360 / group.logos.length) * i + ringIndex * 15;
                const size = PLANET[ringIndex] * (0.92 + ((i * 37 + ringIndex * 11) % 17) / 100);
                const [rim, body, night] = PALETTE[(i + ringIndex * 2) % PALETTE.length];
                const { width, height, cqw } = logoWidth(file, size);
                return (
                  <li
                    key={file}
                    style={{
                      transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-${group.ring}cqw) rotate(${-angle}deg)`,
                    }}
                    className="absolute top-1/2 left-1/2"
                  >
                    <div className="relative transition-transform duration-500 hover:scale-110">
                      <span
                        aria-hidden
                        style={{
                          width: `${size}cqw`,
                          rotate: `${angle}deg`,
                          background: `radial-gradient(circle at 50% 118%, ${rim} 0%, ${body} 40%, ${night} 82%)`,
                          boxShadow: `0 0 2cqw ${body}80, inset 0 -0.3cqw 0.6cqw rgba(255,255,255,0.18)`,
                        }}
                        className="block aspect-square rounded-full"
                      />
                      <div
                        style={{ "--turn": `${group.duration}s` } as CSSProperties}
                        className={cn("absolute inset-0 grid place-items-center", SPIN, !reverse && "[animation-direction:reverse]")}
                      >
                        <Image
                          src={`/logos/companies/${file}.png`}
                          alt={name}
                          title={name}
                          width={width}
                          height={height}
                          sizes="120px"
                          style={{ width: `${cqw}cqw` }}
                          className="h-auto max-w-none object-contain drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]"
                        />
                      </div>
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

/** Where members and alumni went on to work: firms as planets orbiting MVC as the star. */
export function Placements() {
  return (
    <section className="relative overflow-hidden bg-purple-950 bg-[radial-gradient(ellipse_at_68%_50%,rgba(126,34,206,0.35),transparent_60%),radial-gradient(ellipse_at_10%_90%,rgba(190,24,93,0.15),transparent_50%)] px-6 py-24 text-white md:px-12 md:py-32 lg:px-24">
      <Starfield count={160} comets={false} />
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:gap-12">
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
