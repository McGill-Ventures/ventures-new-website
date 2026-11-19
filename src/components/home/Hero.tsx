import Image from "next/image";
import { at2x } from "@/lib/photoSizes";

const STATEMENTS = [
  "We are Montreal’s leading student-run venture community.",
  "We get students into venture and startups, and give founders hands-on support.",
  "We bring investors the deals, and startups the talent, coming out of campus.",
];

/** Pulled up under the transparent header, so `-mt-20` tracks its height.
 *  The photo pins while the statements scroll over it. */
export function Hero() {
  return (
    <section id="hero" className="relative -mt-20 bg-black text-white">
      <div className="sticky top-0 h-[100lvh] overflow-hidden">
        <div className="hero-push absolute inset-0">
          <Image
            src="/events/demo_day_2026/dd26_10.webp"
            alt="Investors on the panel at Demo Day 2026, seen from the audience"
            fill
            priority
            // A portrait screen crops this 3:2 photo to fill its height, so it shows 150vh wide.
            sizes={at2x("(max-aspect-ratio: 3/2) 150vh, 100vw")}
            className="object-cover object-[50%_25%]"
          />
        </div>
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/25 md:via-black/55"
        />
      </div>

      <div className="relative -mt-[100lvh]">
        {/* The nav stays away until the page scrolls, so the hero carries the name. */}
        <h1 className="absolute inset-x-0 top-0 px-6 pt-6 md:px-12 md:pt-8 lg:px-16">
          <Image
            src="/logos/white_logo_transparent.png"
            alt="McGill Ventures"
            width={2592}
            height={340}
            sizes="100vw"
            priority
            className="h-auto w-full"
          />
        </h1>
        <div aria-hidden className="h-[100svh]" />

        {/* Same column as the sections below, so the statements share their left edge. */}
        <div className="flex min-h-[100svh] items-center bg-gradient-to-b from-transparent to-black/70 to-25% px-6 py-28 md:px-12 lg:px-24">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 lg:gap-14">
            {STATEMENTS.map((statement) => (
              <p
                key={statement}
                className="scroll-fill-track max-w-[21em] text-[clamp(1.6rem,3.5vw,3.5rem)] leading-[1.12] font-medium tracking-[-0.025em] text-balance"
              >
                {/* Inline, so the fill runs through the lines in reading order. */}
                <span className="scroll-fill">{statement}</span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
