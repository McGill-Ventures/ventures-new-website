import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { MemberCard } from "@/components/team/MemberCard";
import { TeamIndex } from "@/components/team/TeamIndex";
import { Reveal, SplitText, Starfield } from "@/components/motion";
import { TEAMS } from "@/constants";

export const metadata: Metadata = {
  title: "Team | McGill Ventures",
};

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
