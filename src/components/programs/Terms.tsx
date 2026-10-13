import Image from "next/image";
import type { ReactNode } from "react";
import type { Program } from "@/app/programs/page";

/** The program's terms as a spec list. Lay it out with `className`. */
export function Terms({ program, className }: { program: Program; className?: string }) {
  const { reopens, length, hours, seats, where, sponsor } = program;
  const terms: [string, ReactNode][] = [
    ["Applications", reopens ? `Reopens ${reopens}` : <span key="a" className="text-purple-200">Open</span>],
    ["Length", length],
    ["Time", `${hours} a week`],
  ];
  if (seats) terms.push(["Seats", seats]);
  if (where) terms.push(["Where", where]);
  if (sponsor) {
    terms.push([
      "Backed by",
      <a key="s" href={sponsor.href} target="_blank" rel="noopener noreferrer" className="inline-block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-400">
        {/* Grey on an opaque white box: invert and brighten it, then screen away the black. */}
        <Image
          src={sponsor.logo}
          alt={sponsor.name}
          className="mt-1 h-9 w-auto opacity-90 mix-blend-screen transition-opacity [filter:invert(1)_brightness(1.6)] hover:opacity-100"
        />
        <span className="sr-only">(opens in a new tab)</span>
      </a>,
    ]);
  }

  return (
    <dl className={className}>
      {terms.map(([term, value]) => (
        <div key={term} className="border-t border-white/15 pt-3">
          <dt className="font-heading text-sm text-white/50">{term}</dt>
          <dd className="mt-1 font-heading text-lg text-white">{value}</dd>
        </div>
      ))}
    </dl>
  );
}
