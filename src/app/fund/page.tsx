import type { Metadata } from "next";
import { ArrowRight, Mail } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Reveal, SplitText, Starfield } from "@/components/motion";
import { Button, Tag } from "@/components/ui";

export const metadata: Metadata = {
  title: "Fund | McGill Ventures",
};

const TERMS = [
  ["$500K", "Pilot fund"],
  ["12-18", "Investments over 3 years"],
  ["$10-50K", "Per company, via SAFE"],
  ["Pre-seed", "Stage"],
];

const PROBLEMS = [
  {
    side: "Founders",
    problem: "McGill founders often struggle to secure early funding and mentorship.",
    answer: "The fund gives them capital.",
  },
  {
    side: "Students",
    problem: "Students interested in VC rarely get hands-on investment experience.",
    answer: "The fund gives them real responsibility, not simulations.",
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

const CRITERIA = [
  ["Founders", "Must have a McGill connection"],
  ["Stage", "Pre-seed"],
  ["Check size", "$10K-$50K, via SAFE"],
  ["Sectors", "Open to all. Often software, AI, health tech, climate, deep tech and fintech"],
];

const AUDIENCES = [
  {
    who: "Students",
    body: "Join the Analyst Program. No experience needed, we train you. Top analysts move onto the investment team and work directly on deals.",
    cta: { label: "Explore the Analyst Program", href: "/programs#analyst" },
  },
  {
    who: "Startups",
    body: "McGill-connected and building something at pre-seed? We invest $10K-$50K per company.",
    cta: { label: "Send us your deck", href: "mailto:mcgillventuresclub@gmail.com" },
  },
  {
    who: "Alumni and sponsors",
    body: "An alumni-driven initiative supported by University Advancement. Mentor and advise students, meet a talent pipeline for internships and hiring, see curated early-stage deal flow (no investing, under policy) and get quarterly updates.",
    cta: { label: "Request the fund deck", href: "mailto:mcgillventuresfund@gmail.com" },
  },
];

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
              className="mt-6 max-w-2xl font-body text-lg text-purple-100/75 md:text-xl"
            >
              A student-run pre-seed fund backed by McGill alumni. Founders get capital, and
              students get real investment responsibility.
            </Reveal>
            <Reveal trigger="load" delay={650}>
              <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-white/10 pt-8 md:grid-cols-4">
                {TERMS.map(([value, label]) => (
                  <div key={label} className="flex flex-col-reverse">
                    <dt className="mt-2 font-heading text-sm text-purple-200/80">{label}</dt>
                    <dd className="font-display text-4xl md:text-5xl">{value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </section>

        <section aria-labelledby="why" className="px-6 pb-24 md:px-12 lg:px-24 lg:pb-32">
          <div className="mx-auto grid max-w-7xl gap-12 border-t border-white/10 pt-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20 lg:pt-16">
            <div>
              <h2 id="why" className="section-heading">
                <SplitText text="Why we exist" />
              </h2>
              <Reveal as="p" delay={200} className="mt-6 font-display text-2xl text-purple-300 md:text-3xl">
                We fix both sides of the problem.
              </Reveal>
            </div>
            <ol className="space-y-10">
              {PROBLEMS.map((item, i) => (
                <Reveal as="li" key={item.side} delay={i * 120} className="border-t border-white/10 pt-6 first:border-0 first:pt-0">
                  <h3 className="font-heading text-sm tracking-wider text-purple-300 uppercase">
                    {item.side}
                  </h3>
                  <p className="mt-3 font-display text-2xl leading-snug md:text-3xl">{item.problem}</p>
                  <p className="mt-3 font-body text-lg text-purple-100/75">{item.answer}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        <section aria-labelledby="now" className="px-6 pb-24 md:px-12 lg:px-24 lg:pb-32">
          <div className="mx-auto max-w-7xl border-t border-white/10 pt-12 lg:pt-16">
            <h2 id="now" className="section-heading">
              <SplitText text="Where we are" />
            </h2>
            <div className="mt-12 grid gap-12 md:grid-cols-2 lg:gap-20">
              {[
                { label: "Now", items: NOW },
                { label: "Once the fund is active", items: NEXT },
              ].map((column, c) => (
                <Reveal key={column.label} delay={c * 150}>
                  <h3 className="font-heading text-sm tracking-wider text-purple-300 uppercase">
                    {column.label}
                  </h3>
                  <ol className="mt-4">
                    {column.items.map((item, i) => (
                      <li
                        key={item}
                        className="grid grid-cols-[2.5rem_minmax(0,1fr)] border-t border-white/10 py-4 font-body text-lg text-white/85"
                      >
                        <span className="font-heading text-base text-purple-400">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {item}
                      </li>
                    ))}
                  </ol>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="criteria" className="px-6 pb-24 md:px-12 lg:px-24 lg:pb-32">
          <div className="mx-auto grid max-w-7xl gap-12 border-t border-white/10 pt-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20 lg:pt-16">
            <h2 id="criteria" className="section-heading">
              <SplitText text="What we invest in" />
            </h2>
            <Reveal delay={150}>
              <dl>
                {CRITERIA.map(([term, value]) => (
                  <div
                    key={term}
                    className="grid gap-2 border-t border-white/10 py-5 last:border-b sm:grid-cols-[10rem_minmax(0,1fr)] sm:gap-6"
                  >
                    <dt className="font-heading text-sm tracking-wider text-purple-300 uppercase sm:pt-1">
                      {term}
                    </dt>
                    <dd className="font-display text-xl md:text-2xl">{value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </section>

        <section aria-labelledby="involved" className="px-6 pb-24 md:px-12 lg:px-24 lg:pb-32">
          <div className="mx-auto max-w-7xl border-t border-white/10 pt-12 lg:pt-16">
            <h2 id="involved" className="section-heading">
              <SplitText text="Get involved" />
            </h2>
            <div className="mt-12 grid gap-12 lg:grid-cols-3 lg:gap-10">
              {AUDIENCES.map((audience, i) => {
                const email = audience.cta.href.startsWith("mailto:");
                return (
                  <Reveal key={audience.who} delay={i * 120} className="flex flex-col">
                    <h3 className="font-display text-3xl">{audience.who}</h3>
                    <p className="mt-4 mb-8 font-body text-lg text-purple-100/75">{audience.body}</p>
                    <Button
                      href={audience.cta.href}
                      variant={i === 0 ? "primary" : "secondary"}
                      size="sm"
                      className="mt-auto self-start"
                    >
                      {audience.cta.label}
                      {email ? (
                        <Mail className="size-4" />
                      ) : (
                        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                      )}
                    </Button>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
