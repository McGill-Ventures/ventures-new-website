"use client";

import { useEffect, useMemo, useRef } from "react";
import { Reveal } from "@/components/motion";
import { cn } from "@/lib/utils";
import { useActiveSection } from "@/hooks/useActiveSection";

type Props = {
  teams: { id: string; name: string }[];
};

/** Team names pinned beside the team being read: a column on desktop, a bar
 *  under the header that scrolls sideways on smaller screens. */
export function TeamIndex({ teams }: Props) {
  const ids = useMemo(() => teams.map((t) => t.id), [teams]);
  const active = useActiveSection(ids);
  const list = useRef<HTMLOListElement>(null);

  // Keeps the current team in view on the sideways bar; a no-op on desktop.
  useEffect(() => {
    const item = list.current?.children[active] as HTMLElement | undefined;
    if (item) list.current!.scrollTo({ left: item.offsetLeft - 24, behavior: "smooth" });
  }, [active]);

  return (
    <Reveal
      delay={100}
      className="sticky top-16 z-30 -mx-6 self-start border-b border-white/10 bg-black/95 md:-mx-12 lg:top-28 lg:mx-0 lg:border-0 lg:bg-transparent"
    >
      <nav aria-label="Teams">
        <ol
          ref={list}
          className="flex gap-6 overflow-x-auto px-6 [scrollbar-width:none] md:px-12 lg:block lg:space-y-3 lg:overflow-visible lg:px-0"
        >
          {teams.map((team, i) => {
            const on = i === active;
            return (
              <li key={team.id} className="shrink-0">
                <a
                  href={`#${team.id}`}
                  aria-current={on ? "true" : undefined}
                  className={cn(
                    "block origin-left py-3 font-display text-base whitespace-nowrap transition-[color,translate,scale] duration-500 lg:py-0 lg:text-2xl lg:leading-tight lg:whitespace-normal",
                    on ? "text-white lg:translate-x-1.5 lg:scale-110" : "text-white/30 hover:text-white/60",
                  )}
                >
                  {team.name}
                </a>
              </li>
            );
          })}
        </ol>
      </nav>
    </Reveal>
  );
}
