import Image from "next/image";
import type { CSSProperties } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui";
import { Reveal, SplitText } from "@/components/motion";

const PARTIES = [
  ["Company", "McGill Ventures"],
  ["Investor", "You"],
  ["Investment", "Your time, curiosity and ambition"],
  ["Return", "The skills and network to back or build what comes next"],
];

const TERMS = [
  {
    title: "Innovation focus",
    body: "Members study the technologies and business models that could reshape whole industries, from AI and biotech to fintech and beyond.",
  },
  {
    title: "Learning and development",
    body: "Members build the skills to guide and mentor founders, with hands-on support through every stage of a company’s growth.",
  },
  {
    title: "Network building",
    body: "Members build relationships with investors, advisors and partners across major markets and emerging ecosystems.",
  },
];

export function TermSheet() {
  return (
    <section className="flex min-h-[100dvh] items-center overflow-hidden bg-purple-50/60 px-6 py-24 md:px-12 lg:px-24">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
        <div>
          <h2 className="section-heading text-black">
            <SplitText text="What we believe" />
          </h2>
          <Reveal
            as="p"
            delay={200}
            className="mt-6 max-w-md font-body text-lg text-purple-900/75 md:text-xl"
          >
            Every member signs on to the same three terms.
          </Reveal>
          <Reveal delay={300} className="mt-10">
            <Button href="/team">
              Meet the team
              <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Reveal>
        </div>

        <Reveal variant="up" duration={1100} className="relative">
          <article className="relative rounded-md bg-white p-7 shadow-[0_40px_80px_-40px_rgba(59,7,100,0.45),0_2px_6px_rgba(59,7,100,0.06)] ring-1 ring-purple-950/8 md:p-12 lg:-rotate-1">
            <header className="flex flex-wrap items-end justify-between gap-4 border-b-2 border-black pb-5">
              <h3 className="font-display text-3xl text-black md:text-4xl">
                Term sheet
              </h3>
              <Image
                src="/logos/main_logo_wordmark.png"
                alt="McGill Ventures"
                width={2576}
                height={302}
                className="h-5 w-auto md:h-6"
              />
            </header>

            <dl className="grid grid-cols-[auto_minmax(0,1fr)] gap-x-8 border-b border-black/15 py-5 font-body text-[0.95rem] md:text-base">
              {PARTIES.map(([term, value]) => (
                <div key={term} className="contents">
                  <dt className="py-1 text-purple-900/60">{term}</dt>
                  <dd className="py-1 text-black">{value}</dd>
                </div>
              ))}
            </dl>

            <ol className="mt-6 space-y-5">
              {TERMS.map((term, i) => (
                <li key={term.title} className="grid grid-cols-[2rem_minmax(0,1fr)]">
                  <span className="font-heading text-purple-600">{i + 1}.</span>
                  <div>
                    <h4 className="font-heading text-lg text-black">
                      {term.title}
                    </h4>
                    <p className="mt-1 font-body leading-relaxed text-purple-950/75">
                      {term.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </article>

          <Reveal
            variant="scale"
            delay={900}
            duration={450}
            className="pointer-events-none absolute -right-2 -bottom-8 md:right-10 md:-bottom-6"
            style={{ "--reveal-from": "scale(2.6)" } as CSSProperties}
          >
            <div
              aria-hidden
              className="stamp -rotate-12 rounded-lg border-[5px] border-double border-purple-700 px-5 py-1.5 font-display text-4xl tracking-[0.06em] text-purple-700 uppercase mix-blend-multiply md:text-5xl"
            >
              Backed
            </div>
          </Reveal>
        </Reveal>
      </div>
    </section>
  );
}
