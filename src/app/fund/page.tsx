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
      <Navigation currentPage="/fund" darkOver="[data-dark]" />

      {/* Pulled up under the transparent header, so `-mt-20` tracks its height. */}
      <main className="relative -mt-20 overflow-clip bg-black text-white">
        <section
          data-dark
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
          data-dark
          className="relative grid min-h-[100dvh] md:grid-cols-2"
        >
          {PROBLEMS.map((item, i) => (
            <figure
              key={item.side}
              className="relative flex min-h-[75dvh] flex-col justify-end md:min-h-0"
            >
              <Image
                src={item.photo}
                alt=""
                fill
                sizes="(max-width: 767px) 100vw, 50vw"
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
                  <span className="font-heading text-sm tracking-wider text-purple-300 uppercase">
                    {item.side}
                  </span>
                  <p className="mt-3 max-w-xl font-display text-3xl leading-tight text-balance md:text-4xl">
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
            className="max-w-5xl font-display text-[clamp(2.5rem,6.5vw,6rem)] leading-[1.02] text-balance"
          >
            A student-run fund that fixes <span className="text-purple-600">both sides</span> of
            the problem.
          </Reveal>
          <Reveal delay={200}>
            <dl className="mt-16 grid gap-8 border-t border-purple-950/10 pt-8 md:grid-cols-2">
              {[
                ["Founders get", "Capital, $10K-$50K at pre-seed"],
                ["Students get", "Real responsibility, not simulations"],
              ].map(([term, value]) => (
                <div key={term}>
                  <dt className="font-heading text-sm tracking-wider text-purple-700 uppercase">
                    {term}
                  </dt>
                  <dd className="mt-2 font-display text-2xl md:text-3xl">{value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </Slide>

        <Slide id="progress" title="Where we are" tone="purple">
          <Reveal as="p" className="font-display text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.05]">
            Building the $500K pilot fund.
          </Reveal>
          <div className="mt-14 grid gap-10 md:grid-cols-2 lg:gap-16">
            {[
              { label: "Now", items: NOW },
              { label: "Once the fund is active", items: NEXT },
            ].map((column, c) => (
              <Reveal key={column.label} delay={150 + c * 150}>
                <h3 className="font-heading text-sm tracking-wider text-purple-300 uppercase">
                  {column.label}
                </h3>
                <ul className="mt-4">
                  {column.items.map((item) => (
                    <li
                      key={item}
                      className="border-t border-white/15 py-4 font-body text-lg text-white/85"
                    >
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
            <dl className="grid gap-x-8 gap-y-14 sm:grid-cols-2">
              {TERMS.map(([value, label]) => (
                <div key={label} className="flex flex-col-reverse">
                  <dt className="mt-3 font-heading text-purple-900/70 md:text-lg">{label}</dt>
                  <dd className="font-display text-[clamp(3rem,8vw,7.5rem)] leading-none whitespace-nowrap text-purple-950">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </Slide>

        <Slide id="criteria" title="What we invest in" tone="black">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <p className="font-display text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.05] text-balance">
                Tick all three, then pitch us.
              </p>
              <p className="mt-6 max-w-md font-body text-lg text-purple-100/75">
                Any sector works. We often see software, AI, health tech, climate, deep tech
                and fintech.
              </p>
            </Reveal>
            <Reveal delay={150}>
              <FitChecklist />
            </Reveal>
          </div>
        </Slide>

        <Slide id="ask" title="The ask" tone="white">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:gap-0">
            <Reveal className="lg:pr-16">
              <h3 className="font-display text-4xl md:text-5xl">Alumni and sponsors</h3>
              <p className="mt-5 font-body text-lg text-purple-900/75">
                An alumni-driven initiative supported by University Advancement.
              </p>
              <h4 className="mt-8 font-heading text-sm tracking-wider text-purple-700 uppercase">
                What backers get
              </h4>
              <ul className="mt-4 space-y-2.5">
                {BACKER_PERKS.map((perk) => (
                  <li key={perk} className="flex items-start gap-3 font-body text-purple-950/85">
                    <Check aria-hidden className="mt-1 size-4 shrink-0 text-purple-600" />
                    {perk}
                  </li>
                ))}
              </ul>
              <Button href={DECK_EMAIL} className="mt-10">
                Request the fund deck
                <Mail className="size-5" />
              </Button>
            </Reveal>
            <Reveal
              delay={150}
              className="border-t border-purple-950/10 pt-12 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-16"
            >
              <h3 className="font-display text-4xl md:text-5xl">Students</h3>
              <p className="mt-5 font-body text-lg text-purple-900/75">
                Join the Analyst Program. No experience needed, we train you. Top analysts move
                onto the investment team and work directly on deals.
              </p>
              <Link
                href="/programs#analyst"
                className="group mt-10 inline-flex items-center gap-2 font-heading text-lg text-purple-700 transition-colors hover:text-purple-950"
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
