import Image from "next/image";
import { Reveal, SplitText } from "@/components/motion";
import { FOUNDERS } from "@/constants";

// By name, not by index: the quote below is his, and FOUNDERS is ordered
// for the team page.
const AARON = FOUNDERS.find((f) => f.name.startsWith("Aaron"))!;

export function Letter() {
  return (
    <section className="flex min-h-[100dvh] items-center px-6 py-24 md:px-12 lg:px-24">
      <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:gap-16">
        <h2 className="section-heading text-black">
          <SplitText text="Where we come from" />
        </h2>

        <Reveal as="figure" delay={200} duration={1100}>
          {/* Hung quote mark, so the text edge stays flush with the heading. */}
          <blockquote className="relative [font-family:var(--font-plus-jakarta)] text-[clamp(1.5rem,2.6vw,2.4rem)] leading-[1.2] font-medium tracking-[-0.02em] text-pretty text-black">
            <span
              aria-hidden
              className="absolute top-0 right-full pr-[0.08em]"
            >
              “
            </span>
            Founded in 2020 by Aaron, Woo and Zach, McGill Ventures was born
            out of the idea to bring structure to venture- and startup-related
            activity at McGill University. What started as a small team of
            three has since grown into a 65+ student organization with a strong
            influence beyond our campus, carried forward by each cohort that
            builds on the work of the last.”
          </blockquote>

          <figcaption className="mt-10 flex items-center gap-4">
            <div className="relative size-14 shrink-0 overflow-hidden rounded-full ring-1 ring-purple-950/10">
              <Image
                src={AARON.image}
                alt=""
                fill
                sizes="56px"
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-heading text-lg text-black">{AARON.name}</p>
              <p className="font-body text-purple-900/70">{AARON.role}</p>
            </div>
          </figcaption>
        </Reveal>
      </div>
    </section>
  );
}
