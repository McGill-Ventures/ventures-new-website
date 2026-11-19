import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Mail } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { FitChecklist } from "@/components/fund/FitChecklist";
import { Slide } from "@/components/fund/Slide";
import { MemberCard } from "@/components/team/MemberCard";
import { Reveal, SplitText } from "@/components/motion";
import { Button } from "@/components/ui";
import { TEAMS } from "@/constants";
import { cn } from "@/lib/utils";
import { at2x } from "@/lib/photoSizes";

export const metadata: Metadata = {
  title: "Fund | McGill Ventures",
};

const FUND_TEAM = TEAMS.find((team) => team.id === "fund")!.groups.flatMap((group) => group.members);

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

const LABEL = "font-heading text-lg";

export default function Fund() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation currentPage="/fund" />

      {/* Pulled up under the transparent header, so `-mt-20` tracks its height. */}
      <main className="relative -mt-20 overflow-clip bg-black text-white">
        <section className="relative flex min-h-[100dvh] items-end overflow-hidden">
          <Image
            src="/events/polytechniquexventures_2026/fi26_01.webp"
            alt="A packed atrium at the Financing Innovation fireside chat, seen from above"
            fill
            priority
            sizes={at2x("(max-aspect-ratio: 3/2) 150vh, 100vw")}
            className="object-cover object-center"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/30"
          />
          <div className="relative w-full px-6 pb-16 md:px-12 lg:px-24 lg:pb-24">
            <h1 className="mx-auto max-w-7xl font-display text-[clamp(3rem,8vw,7rem)] leading-[0.95]">
              <SplitText text="McGill Venture Fund" trigger="load" delay={150} />
            </h1>
          </div>
        </section>

        <section aria-labelledby="problem-title" className="grid md:grid-cols-2">
          <h2 id="problem-title" className="sr-only">
            The problem
          </h2>
          {PROBLEMS.map((item, i) => (
            <figure
              key={item.side}
              className="relative flex min-h-[75dvh] flex-col justify-end md:min-h-[85dvh]"
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
              <figcaption
                className={cn(
                  "relative px-6 pt-40 pb-14 md:pb-20",
                  i === 0
                    ? "md:pr-10 md:pl-12 lg:pl-[max(6rem,calc(50vw-40rem))]"
                    : "md:pr-12 md:pl-10 lg:pr-[max(6rem,calc(50vw-40rem))]",
                )}
              >
                <Reveal delay={i * 150}>
                  <p className={cn(LABEL, "text-purple-200")}>{item.side}</p>
                  <p className="mt-3 max-w-xl font-display text-3xl leading-tight text-balance md:text-4xl">
                    {item.problem}
                  </p>
                </Reveal>
              </figcaption>
            </figure>
          ))}
        </section>

        <Slide id="solution" title="A student-run fund that fixes both sides of the problem" tone="white">
          <Reveal>
            <dl className="grid gap-8 border-t border-purple-950/10 pt-8 md:grid-cols-2">
              {[
                ["Founders get", "Capital, $10K-$50K at pre-seed"],
                ["Students get", "Real responsibility, not simulations"],
              ].map(([term, value]) => (
                <div key={term}>
                  <dt className={cn(LABEL, "text-purple-700")}>{term}</dt>
                  <dd className="mt-2 font-display text-2xl md:text-3xl">{value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </Slide>

        <Slide id="progress" title="Building the $500K pilot fund" tone="purple">
          <div className="grid gap-10 md:grid-cols-2 lg:gap-16">
            {[
              { label: "Now", items: NOW },
              { label: "Once the fund is active", items: NEXT },
            ].map((column, c) => (
              <Reveal key={column.label} delay={c * 150}>
                <h3 className={cn(LABEL, "text-purple-200")}>{column.label}</h3>
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

        <Slide id="team" title="The team behind the fund" tone="black">
          <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:gap-x-6 xl:grid-cols-5">
            {FUND_TEAM.map((member, i) => (
              <MemberCard key={member.name} member={member} delay={(i % 5) * 80} />
            ))}
          </ul>
        </Slide>

        <Slide id="criteria" title="Tick all three, then pitch us" tone="purple">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <FitChecklist />
            </Reveal>
            <Reveal delay={150} as="p" className="max-w-md font-body text-lg text-purple-100/75 lg:pt-5">
              Any sector works. We often see software, AI, health tech, climate, deep tech and
              fintech.
            </Reveal>
          </div>
        </Slide>

        <Slide id="ask" title="Get involved" tone="white">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:gap-0">
            <Reveal className="lg:pr-16">
              <h3 className="font-display text-3xl md:text-4xl">Alumni and sponsors</h3>
              <p className="mt-5 font-body text-lg text-purple-900/75">
                An alumni-driven initiative supported by University Advancement.
              </p>
              <h4 className={cn(LABEL, "mt-8 text-purple-700")}>What backers get</h4>
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
              <h3 className="font-display text-3xl md:text-4xl">Students</h3>
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
