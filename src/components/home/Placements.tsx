import { readFileSync } from "node:fs";
import { join } from "node:path";
import type { CSSProperties } from "react";
import Image from "next/image";
import { Marquee, Reveal, SplitText } from "@/components/motion";

const GROUPS = [
  {
    label: "Venture capital",
    duration: 55,
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
    duration: 65,
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
    duration: 60,
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
] satisfies { label: string; duration: number; logos: [string, string][] }[];

function pngSize(file: string) {
  const png = readFileSync(join(process.cwd(), "public/logos/companies", `${file}.png`));
  if (png.toString("latin1", 12, 16) !== "IHDR") {
    throw new Error(`public/logos/companies/${file}.png is not a PNG`);
  }
  return { width: png.readUInt32BE(16), height: png.readUInt32BE(20) };
}

// Same area for every logo so wide wordmarks and square marks read at equal weight.
const LOGO_AREA = 2200;

function Logo({ file, name }: { file: string; name: string }) {
  const { width, height } = pngSize(file);
  const ratio = width / height;
  const w = Math.min(Math.sqrt(LOGO_AREA * ratio), 140, 36 * ratio);
  return (
    <div className="flex h-16 items-center md:h-20">
      <Image
        src={`/logos/companies/${file}.png`}
        alt={name}
        title={name}
        width={width}
        height={height}
        sizes="160px"
        style={{ "--w": `${w}px` } as CSSProperties}
        // The files are white marks, so brightness-0 turns them dark for the white page.
        className="h-auto w-[calc(var(--w)*0.8)] object-contain opacity-55 brightness-0 transition-opacity duration-300 hover:opacity-90 md:w-(--w)"
      />
    </div>
  );
}

/** Where members and alumni went on to work, one scrolling row per kind of career. */
export function Placements() {
  return (
    <section className="bg-white px-6 pt-8 pb-24 md:px-12 md:pb-32 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="section-heading text-black">
          <SplitText text="Where members land" />
        </h2>
        <Reveal
          as="p"
          delay={200}
          className="mt-6 max-w-xl font-body text-lg text-purple-900/75 md:text-xl"
        >
          Members and alumni have gone on to venture funds, startups and the
          firms below.
        </Reveal>

        <div className="mt-12 border-b border-purple-950/10">
          {GROUPS.map((group, i) => (
            <Reveal
              key={group.label}
              delay={200 + i * 120}
              className="grid items-center gap-2 border-t border-purple-950/10 py-5 lg:grid-cols-[13rem_minmax(0,1fr)] lg:gap-8 lg:py-6"
            >
              <h3 className="font-heading text-sm text-purple-700 md:text-base">{group.label}</h3>
              <Marquee
                direction={i % 2 ? "right" : "left"}
                duration={group.duration}
                gap="3.5rem"
                fade
              >
                {group.logos.map(([file, name]) => (
                  <Logo key={file} file={file} name={name} />
                ))}
              </Marquee>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
