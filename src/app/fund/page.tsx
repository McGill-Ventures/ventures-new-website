import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Check, Mail } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { FitChecklist } from "@/components/fund/FitChecklist";
import { Slide } from "@/components/fund/Slide";
import { Reveal, SplitText, Starfield } from "@/components/motion";
import { Button, Tag } from "@/components/ui";

export const metadata: Metadata = {
  title: "Fund | McGill Ventures",
};

const SLIDES = 6;

const PROBLEMS = [
  {
    side: "Founders",
    problem: "McGill founders often struggle to secure early funding and mentorship.",
    photo: "/events/scarlet_pitch2025/sp2025_04.jpg",
  },
  {
    side: "Students",
    problem: "Students interested in VC rarely get hands-on investment experience.",
    photo: "/events/image_carousel_pic3.jpg",
  },
];

const NOW = [
  "Raising the $500K pilot fund with support from McGill alumni and partners",
  "Identifying McGill-founded startups, faculties and research groups at the earliest stage",
  "Training student analysts in sourcing, evaluating founders, market research and diligence",
  "Assembling an Investment Committee and Board of experienced alumni, founders and investors",
];

const NEXT = [
  "Run full due diligence on every company we consider",
  "Write an investment memo for every deal",
  "Deploy capital responsibly and support founders through the early stages",
];

const TERMS = [
  ["$500K", "Pilot fund"],
  ["12-18", "Investments over 3 years"],
  ["$10-50K", "Per company, via SAFE"],
  ["Pre-seed", "Stage"],
];

const BACKER_PERKS = [
  "Mentor and advise students",
  "A talent pipeline for internships and hiring",
  "Curated visibility into early-stage deal flow (no investing, under policy)",
  "Quarterly updates on pipeline and progress",
  "Access to the McGill founder ecosystem",
];

const DECK_EMAIL = `mailto:mcgillventuresfund@gmail.com?subject=${encodeURIComponent("Fund deck request")}`;

export default function Fund() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation currentPage="/fund" darkOver="#fund" />

      {/* Pulled up under the transparent header, so `-mt-20` tracks its height. */}
      <main id="fund" className="relative -mt-20 overflow-clip bg-black text-white">
        <section className="relative flex min-h-[80dvh] flex-col justify-end px-6 pt-28 pb-20 md:px-12 lg:px-24">
          <div
            aria-hidden
            className="animate-orb pointer-events-none absolute -top-48 -left-48 size-[36rem] rounded-full bg-purple-600/40 blur-3xl"
          />
          <div
            aria-hidden
            className="animate-orb pointer-events-none absolute -right-24 -bottom-40 size-[32rem] rounded-full bg-purple-800/40 blur-3xl [animation-delay:-8s]"
          />
          <Starfield className="[mask-image:linear-gradient(to_bottom,#000_60%,transparent)]" />
          <p
            aria-hidden
            className="pointer-events-none absolute top-20 -right-[0.04em] font-display text-[clamp(5rem,26vw,20rem)] leading-none text-transparent select-none [-webkit-text-stroke:1.5px_rgb(216_180_254/0.28)]"
          >
            $500K
          </p>

          <div className="relative mx-auto w-full max-w-7xl">
            <Reveal trigger="load">
              <Tag>Raising the pilot fund</Tag>
            </Reveal>
            <h1 className="mt-6 max-w-5xl font-display text-[clamp(3rem,8vw,7rem)] leading-[0.95]">
              <SplitText text="McGill Venture Fund" trigger="load" delay={150} />
            </h1>
            <Reveal
              as="p"
              trigger="load"
              delay={450}
              className="mt-6 max-w-2xl font-body text-lg text-pretty text-purple-100/75 md:text-xl"
            >
              A student-run pre-seed fund backed by McGill alumni. Here is our pitch, in six
              slides.
            </Reveal>
          </div>
        </section>

        <div className="px-6 pb-24 md:px-12 lg:px-24 lg:pb-32">
          <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:gap-12">
            <Slide id="problem" number={1} total={SLIDES} title="Problem">
              <div className="grid flex-1 gap-4 md:grid-cols-2">
                {PROBLEMS.map((item) => (
                  <figure
                    key={item.side}
                    className="relative min-h-80 overflow-hidden rounded-2xl bg-purple-950"
                  >
                    <Image
                      src={item.photo}
                      alt=""
                      fill
                      sizes="(max-width: 767px) 100vw, 600px"
                      className="object-cover"
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent"
                    />
                    <figcaption className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                      <span className="font-heading text-sm tracking-wider text-purple-300 uppercase">
                        {item.side}
                      </span>
                      <p className="mt-2 font-display text-2xl leading-snug text-balance md:text-3xl">
                        {item.problem}
                      </p>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </Slide>

            <Slide id="solution" number={2} total={SLIDES} title="Solution">
              <div className="flex flex-1 flex-col justify-between gap-12">
                <p className="max-w-4xl font-display text-[clamp(2.25rem,5.5vw,5rem)] leading-[1.02] text-balance">
                  A student-run fund that fixes <span className="text-purple-300">both sides</span>{" "}
                  of the problem.
                </p>
                <dl className="grid gap-8 border-t border-white/10 pt-8 md:grid-cols-2">
                  {[
                    ["Founders get", "Capital, $10K-$50K at pre-seed"],
                    ["Students get", "Real responsibility, not simulations"],
                  ].map(([term, value]) => (
                    <div key={term}>
                      <dt className="font-heading text-sm tracking-wider text-purple-300 uppercase">
                        {term}
                      </dt>
                      <dd className="mt-2 font-display text-2xl md:text-3xl">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Slide>

            <Slide id="progress" number={3} total={SLIDES} title="Where we are">
              <p className="font-display text-3xl md:text-5xl">Building the $500K pilot fund.</p>
              <div className="mt-10 grid gap-10 md:grid-cols-2 lg:mt-auto lg:gap-16">
                {[
                  { label: "Now", items: NOW },
                  { label: "Once the fund is active", items: NEXT },
                ].map((column) => (
                  <div key={column.label}>
                    <h3 className="font-heading text-sm tracking-wider text-purple-300 uppercase">
                      {column.label}
                    </h3>
                    <ol className="mt-4">
                      {column.items.map((item, i) => (
                        <li
                          key={item}
                          className="grid grid-cols-[2.5rem_minmax(0,1fr)] border-t border-white/10 py-3 font-body text-white/85"
                        >
                          <span className="font-heading text-purple-400">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          {item}
                        </li>
                      ))}
                    </ol>
                  </div>
                ))}
              </div>
            </Slide>

            <Slide id="terms" number={4} total={SLIDES} title="The fund">
              <dl className="grid flex-1 content-center gap-x-8 gap-y-10 sm:grid-cols-2 sm:gap-y-12">
                {TERMS.map(([value, label]) => (
                  <div key={label} className="flex flex-col-reverse">
                    <dt className="mt-2 font-heading text-purple-200/80 md:text-lg">{label}</dt>
                    <dd className="font-display text-[clamp(2.75rem,6vw,5.5rem)] leading-none whitespace-nowrap">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Slide>

            <Slide id="criteria" number={5} total={SLIDES} title="What we invest in">
              <div className="grid flex-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
                <div>
                  <p className="font-display text-3xl leading-tight text-balance md:text-5xl">
                    Tick all three, then pitch us.
                  </p>
                  <p className="mt-6 max-w-md font-body text-lg text-purple-100/75">
                    Any sector works. We often see software, AI, health tech, climate, deep
                    tech and fintech.
                  </p>
                </div>
                <FitChecklist />
              </div>
            </Slide>

            <Slide id="ask" number={6} total={SLIDES} title="The ask">
              <div className="grid flex-1 gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:gap-0">
                <div className="flex flex-col lg:pr-16">
                  <h3 className="font-display text-3xl md:text-4xl">Alumni and sponsors</h3>
                  <p className="mt-4 font-body text-lg text-purple-100/75">
                    An alumni-driven initiative supported by University Advancement. Backers get:
                  </p>
                  <ul className="mt-5 space-y-2.5">
                    {BACKER_PERKS.map((perk) => (
                      <li key={perk} className="flex items-start gap-3 font-body text-white/85">
                        <Check aria-hidden className="mt-1 size-4 shrink-0 text-purple-400" />
                        {perk}
                      </li>
                    ))}
                  </ul>
                  <Button href={DECK_EMAIL} className="mt-8 self-start lg:mt-auto">
                    Request the fund deck
                    <Mail className="size-5" />
                  </Button>
                </div>
                <div className="flex flex-col border-t border-white/10 pt-10 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-16">
                  <h3 className="font-display text-3xl md:text-4xl">Students</h3>
                  <p className="mt-4 font-body text-lg text-purple-100/75">
                    Join the Analyst Program. No experience needed, we train you. Top analysts
                    move onto the investment team and work directly on deals.
                  </p>
                  <Button
                    href="/programs#analyst"
                    variant="secondary"
                    className="mt-8 self-start lg:mt-auto"
                  >
                    Explore the Analyst Program
                    <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </Slide>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
