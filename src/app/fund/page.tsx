import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Mail } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Constellation } from "@/components/fund/Constellation";
import { FitChecklist } from "@/components/fund/FitChecklist";
import { Slide, SlideHeader } from "@/components/fund/Slide";
import { Reveal, SplitText, Starfield } from "@/components/motion";
import { Button, Tag } from "@/components/ui";
import { cn } from "@/lib/utils";
import { at2x } from "@/lib/photoSizes";

export const metadata: Metadata = {
  title: "Fund | McGill Ventures",
};

const PROBLEMS = [
  {
    side: "Founders",
    problem: "McGill founders often struggle to secure early funding and mentorship.",
    photo: "/events/scarlet_pitch2025/sp2025_04.jpg",
    position: "80% center",
  },
  {
    side: "Students",
    problem: "Students interested in VC rarely get hands-on investment experience.",
    photo: "/events/image_carousel_pic3.jpg",
    position: "15% center",
  },
];

const SIDES = [
  { side: "Founders", gets: "Capital, $10K-$50K at pre-seed" },
  { side: "Students", gets: "Real responsibility, not simulations" },
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

const STAGES = [
  { label: "Now", items: NOW, live: true },
  { label: "Once the fund is active", items: NEXT, live: false },
];

const SECTORS = ["Software", "AI", "Health tech", "Climate", "Deep tech", "Fintech"];

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
      <Navigation currentPage="/fund" />

      {/* Pulled up under the transparent header, so `-mt-20` tracks its height. */}
      <main className="relative -mt-20 overflow-clip bg-black text-white">
        <section
          className="relative flex min-h-[100dvh] flex-col justify-end px-6 pt-28 pb-16 md:px-12 lg:px-24"
        >
          <div
            aria-hidden
            className="animate-orb pointer-events-none absolute -top-48 -left-48 size-[36rem] rounded-full bg-purple-600/40 blur-3xl"
          />
          <div
            aria-hidden
            className="animate-orb pointer-events-none absolute -right-24 -bottom-40 size-[32rem] rounded-full bg-purple-800/40 blur-3xl [animation-delay:-8s]"
          />
          <Starfield className="[mask-image:linear-gradient(to_bottom,#000_60%,transparent)]" />

          <div className="relative mx-auto w-full max-w-7xl">
            <Reveal
              trigger="load"
              variant="blur"
              delay={600}
              duration={1600}
              className="mb-12 ml-auto w-full max-w-[52rem] md:mb-16"
            >
              <Constellation className="h-auto w-full" />
            </Reveal>
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
              A student-run pre-seed fund backed by McGill alumni.
            </Reveal>
          </div>
        </section>

        <section
          id="problem"
          aria-labelledby="problem-title"
          className="relative grid md:min-h-[85dvh] md:grid-cols-2"
        >
          {PROBLEMS.map((item, i) => (
            <figure
              key={item.side}
              className="relative flex min-h-[30rem] flex-col justify-end md:min-h-0"
            >
              <Image
                src={item.photo}
                alt=""
                fill
                sizes={at2x("(max-width: 767px) 100vw, 50vw")}
                className="object-cover"
                style={{ objectPosition: item.position }}
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/45"
              />
              {/* The outer edge follows the page container, so these captions
                  line up with every other slide however wide the screen is. */}
              <figcaption
                className={cn(
                  "relative px-6 pt-40 pb-14 md:pb-20",
                  i === 0
                    ? "md:pr-10 md:pl-12 lg:pl-[max(6rem,calc(50vw-40rem))]"
                    : "md:pr-12 md:pl-10 lg:pr-[max(6rem,calc(50vw-40rem))]",
                )}
              >
                <Reveal delay={i * 150}>
                  <Tag>{item.side}</Tag>
                  <p className="mt-4 max-w-xl font-display text-3xl leading-tight text-balance md:text-4xl">
                    {item.problem}
                  </p>
                </Reveal>
              </figcaption>
            </figure>
          ))}
          <div className="absolute inset-x-0 top-0 z-10 px-6 pt-24 md:px-12 lg:px-24">
            <div className="mx-auto max-w-7xl">
              <SlideHeader id="problem" title="Problem" dark />
            </div>
          </div>
        </section>

        <Slide id="solution" title="Solution" tone="white">
          <Reveal
            as="p"
            className="max-w-4xl font-display text-[clamp(2.25rem,5.5vw,4.75rem)] leading-[1.04] text-balance"
          >
            A student-run fund that fixes <span className="text-purple-600">both sides</span> of
            the problem.
          </Reveal>
          <dl className="mt-12 grid gap-4 md:mt-16 md:grid-cols-2 md:gap-6">
            {SIDES.map(({ side, gets }, i) => (
              <Reveal
                key={side}
                delay={150 + i * 100}
                className="rounded-3xl border border-purple-950/10 bg-purple-50/60 p-7 md:p-9"
              >
                <dt>
                  <Tag tone="light">{side} get</Tag>
                </dt>
                <dd className="mt-6 font-display text-2xl leading-tight md:text-3xl">{gets}</dd>
              </Reveal>
            ))}
          </dl>
        </Slide>

        <Slide id="progress" title="Where we are" tone="purple">
          <Reveal
            as="p"
            className="max-w-3xl font-display text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.05] text-balance"
          >
            Building the $500K pilot fund.
          </Reveal>
          <div className="mt-12 grid gap-4 md:mt-16 md:grid-cols-2 md:gap-6">
            {STAGES.map((stage, c) => (
              <Reveal
                key={stage.label}
                delay={150 + c * 150}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm md:p-9"
              >
                <h3>
                  <Tag className={stage.live ? "border-purple-300/50 bg-purple-500/25 text-white" : undefined}>
                    {stage.live && (
                      <span aria-hidden className="relative flex size-1.5">
                        <span className="absolute inline-flex size-full animate-ping rounded-full bg-purple-200 opacity-75" />
                        <span className="relative inline-flex size-1.5 rounded-full bg-purple-200" />
                      </span>
                    )}
                    {stage.label}
                  </Tag>
                </h3>
                <ul className="mt-6 space-y-4">
                  {stage.items.map((item) => (
                    <li key={item} className="flex gap-3 font-body text-base text-white/85 md:text-lg">
                      <span
                        aria-hidden
                        className={cn(
                          "mt-[0.6em] size-1.5 shrink-0 rounded-full",
                          stage.live ? "bg-purple-300" : "border border-white/40",
                        )}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </Slide>

        <Slide id="terms" title="The fund" tone="lilac">
          <Reveal>
            <dl className="grid grid-cols-2 border-t border-purple-950/10 xl:grid-cols-4">
              {TERMS.map(([value, label], i) => (
                <div
                  key={label}
                  className={cn(
                    "flex flex-col-reverse justify-end gap-3 border-b border-purple-950/10 py-8 xl:border-b-0 xl:py-10",
                    i % 2 === 0 ? "pr-4" : "border-l pl-4 sm:pl-8",
                    "xl:border-l xl:px-8 xl:first:border-l-0 xl:first:pl-0",
                  )}
                >
                  <dt className="font-heading text-sm text-purple-900/70 md:text-base">{label}</dt>
                  <dd className="font-display text-[clamp(1.625rem,7.5vw,3rem)] leading-none whitespace-nowrap text-purple-950 xl:text-[clamp(2.75rem,3.5vw,3.75rem)]">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </Slide>

        <Slide id="criteria" title="What we invest in" tone="black">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
            <Reveal>
              <p className="font-display text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.05] text-balance">
                Tick all three, then pitch us.
              </p>
              <p className="mt-6 max-w-md font-body text-lg text-purple-100/75">
                Any sector works. We often see:
              </p>
              <ul className="mt-4 flex max-w-md flex-wrap gap-2">
                {SECTORS.map((sector) => (
                  <li key={sector}>
                    <Tag>{sector}</Tag>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={150}>
              <FitChecklist />
            </Reveal>
          </div>
        </Slide>

        <Slide id="ask" title="The ask" tone="white">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:gap-6">
            <Reveal className="flex flex-col rounded-3xl border border-purple-950/10 bg-purple-50/60 p-6 md:p-10">
              <h3 className="font-display text-3xl md:text-4xl">Alumni and sponsors</h3>
              <p className="mt-4 font-body text-lg text-purple-900/75">
                An alumni-driven initiative supported by University Advancement.
              </p>
              <h4 className="mt-8">
                <Tag tone="light">What backers get</Tag>
              </h4>
              <ul className="mt-4 space-y-3">
                {BACKER_PERKS.map((perk) => (
                  <li key={perk} className="flex items-start gap-3 font-body text-purple-950/85">
                    <Check aria-hidden className="mt-1 size-4 shrink-0 text-purple-600" />
                    {perk}
                  </li>
                ))}
              </ul>
              <Button href={DECK_EMAIL} size="sm" className="mt-10 self-start">
                Request the fund deck
                <Mail className="size-5" />
              </Button>
            </Reveal>
            <Reveal
              delay={150}
              className="flex flex-col rounded-3xl bg-purple-950 p-6 text-white md:p-10"
            >
              <h3 className="font-display text-3xl md:text-4xl">Students</h3>
              <p className="mt-4 font-body text-lg text-purple-100/75">
                Join the Analyst Program. No experience needed, we train you. Top analysts move
                onto the investment team and work directly on deals.
              </p>
              <Link
                href="/programs#analyst"
                className="group mt-10 inline-flex items-center gap-2 self-start font-heading text-lg text-purple-200 transition-colors hover:text-white lg:mt-auto lg:pt-10"
              >
                Explore the Analyst Program
                <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
        </Slide>
      </main>

      <Footer />
    </div>
  );
}
