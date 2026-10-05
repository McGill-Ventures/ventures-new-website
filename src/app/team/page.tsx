import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { MemberCard } from "@/components/team/MemberCard";
import { TeamIndex } from "@/components/team/TeamIndex";
import { Reveal, SplitText, Starfield } from "@/components/motion";
import type { TeamMember } from "@/types";
import {
  FOUNDERS,
  EXECUTIVE_TEAM,
  FUND_TEAM,
  ANALYST_TEAM,
  DEVELOPMENT_TEAM,
  HEAD_OF_ENGINEERING,
  HTIL_TEAM,
} from "@/constants";

export const metadata: Metadata = {
  title: "Team | McGill Ventures",
};

interface Group {
  title?: string;
  members: TeamMember[];
}

/** Each member joins the first group with a role keyword theirs contains,
 *  ignoring case, and everyone left over joins `rest`. Empty groups are dropped. */
function groupByRole(
  members: TeamMember[],
  groups: [title: string, keywords: string[]][],
  rest: string,
): Group[] {
  const placed = new Set<TeamMember>();
  const result: Group[] = groups.map(([title, keywords]) => {
    const matches = members.filter(
      (m) => !placed.has(m) && keywords.some((k) => m.role.toLowerCase().includes(k.toLowerCase())),
    );
    matches.forEach((m) => placed.add(m));
    return { title, members: matches };
  });
  result.push({ title: rest, members: members.filter((m) => !placed.has(m)) });
  return result.filter((g) => g.members.length > 0);
}

/** `id` is also the section's anchor, e.g. `/team#fund`. */
const TEAMS: { id: string; name: string; intro?: string; groups: Group[] }[] = [
  {
    id: "executive",
    name: "Executive Team",
    groups: groupByRole(
      EXECUTIVE_TEAM,
      [
        ["Co-Presidents", ["Co-President"]],
        ["Events", ["Event"]],
        ["Finance", ["Finance"]],
        ["Partnerships", ["Partnerships", "Sponsorship"]],
        ["Marketing", ["Marketing", "Creative"]],
      ],
      "Operations",
    ),
  },
  {
    id: "fund",
    name: "Fund Team",
    groups: groupByRole(
      FUND_TEAM,
      [
        ["Managing Directors", ["Founder & IC", "Managing Director"]],
        ["Fund Principals", ["Fund Principal"]],
      ],
      "Senior Analysts",
    ),
  },
  {
    id: "analysts",
    name: "Analyst Team",
    groups: groupByRole(ANALYST_TEAM, [["Program Managers", ["Program Manager"]]], "Analysts"),
  },
  {
    id: "development",
    name: "Development Team",
    groups: [{ members: [HEAD_OF_ENGINEERING, ...DEVELOPMENT_TEAM] }],
  },
  {
    id: "htil",
    name: "Health Tech & Innovation Lab",
    groups: groupByRole(
      HTIL_TEAM,
      [
        ["Program Leaders", ["Program Leader"]],
        ["Program Managers", ["Program Manager"]],
      ],
      "Innovation Strategists",
    ),
  },
  // Last, since they have graduated: the alumni who started it, not a current team.
  {
    id: "founders",
    name: "Founders",
    intro: "Aaron, Woo and Zach started McGill Ventures in 2020. Everyone above is building on it.",
    groups: [{ members: FOUNDERS }],
  },
];

const GRID = "grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:gap-x-6 xl:grid-cols-4";

export default function Team() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation currentPage="/team" darkOver="#team" />

      {/* Pulled up under the transparent header, so `-mt-20` tracks its height. */}
      <main id="team" className="relative -mt-20 overflow-clip bg-black text-white">
        <section className="relative flex min-h-[44dvh] flex-col justify-end px-6 pt-28 pb-20 md:px-12 lg:px-24">
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
            <h1 className="font-display text-[clamp(3rem,9vw,7.5rem)] leading-[1.05]">
              <SplitText text="Team" trigger="load" delay={150} />
            </h1>
            <Reveal
              as="p"
              trigger="load"
              delay={450}
              className="mt-6 max-w-2xl font-body text-lg text-purple-100/75 md:text-xl"
            >
              We&apos;re kind, we&apos;re open, and we work with conviction. Every cohort builds on the work of the last.
            </Reveal>
          </div>
        </section>

        <div className="relative px-6 pb-24 md:px-12 lg:px-24 lg:pb-32">
          <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)] gap-10 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-16">
            <TeamIndex teams={TEAMS.map(({ id, name }) => ({ id, name }))} />
            <div className="flex min-w-0 flex-col gap-24">
              {TEAMS.map((team) => (
                <section key={team.id} id={team.id} aria-labelledby={`${team.id}-heading`} className="max-lg:scroll-mt-14">
                  <h2 id={`${team.id}-heading`} className="section-heading">
                    <SplitText text={team.name} />
                  </h2>
                  {team.intro && (
                    <Reveal as="p" delay={200} className="mt-4 max-w-xl font-body text-lg text-white/60 md:text-xl">
                      {team.intro}
                    </Reveal>
                  )}
                  {team.groups.map((group, g) =>
                    group.title ? (
                      <div key={group.title} className="mt-12 border-t border-white/10 pt-6">
                        <h3 className="font-display text-2xl text-white/90 md:text-3xl">{group.title}</h3>
                        <ul className={`mt-8 ${GRID}`}>
                          {group.members.map((member, i) => (
                            <MemberCard key={member.name} member={member} delay={(i % 4) * 80} headingAs="h4" />
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <ul key={g} className={`mt-10 ${GRID}`}>
                        {group.members.map((member, i) => (
                          <MemberCard key={member.name} member={member} delay={(i % 4) * 80} />
                        ))}
                      </ul>
                    ),
                  )}
                </section>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
