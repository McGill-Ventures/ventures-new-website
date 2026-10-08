import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion";
import type { TeamMember } from "@/types";

type Props = {
  member: TeamMember;
  /** Milliseconds, for staggering a grid. */
  delay?: number;
  /** Keeps the outline intact when the card sits under a group heading. */
  headingAs?: "h3" | "h4";
};

function initials(name: string) {
  const words = name.trim().split(/\s+/);
  return words[0][0] + (words.length > 1 ? words[words.length - 1][0] : "");
}

/** Portrait tile with name and role over a scrim along the bottom. Photos sit
 *  in greyscale until hovered on devices with a pointer. */
export function MemberCard({ member, delay = 0, headingAs: Heading = "h3" }: Props) {
  const body = (
    <div className="relative aspect-[4/5] overflow-hidden bg-white/5">
      {member.image ? (
        <Image
          src={member.image}
          alt=""
          fill
          sizes="(max-width: 639px) 50vw, (max-width: 1023px) 33vw, (max-width: 1279px) 20vw, 240px"
          className="object-cover transition-[scale,filter] duration-700 ease-out pointer-fine:grayscale group-hover:scale-[1.06] group-hover:grayscale-0 group-focus-visible:grayscale-0"
        />
      ) : (
        <span
          aria-hidden
          className="absolute inset-0 flex items-center justify-center pb-16 font-display text-5xl text-white/25"
        >
          {initials(member.name)}
        </span>
      )}
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 via-35% to-transparent" />
      {member.linkedinUrl && (
        <span
          aria-hidden
          className="absolute top-3 right-3 flex size-8 items-center justify-center rounded-full bg-black/60 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
        >
          <ArrowUpRight className="size-4" />
        </span>
      )}
      <div className="absolute inset-x-0 bottom-0 p-3 transition-transform duration-500 ease-out group-hover:-translate-y-1 md:p-4">
        <Heading className="font-display text-base leading-[1.05] text-balance md:text-xl">{member.name}</Heading>
        <p className="mt-1 font-heading text-xs text-purple-200 md:text-sm">{member.role}</p>
      </div>
    </div>
  );

  return (
    <Reveal as="li" delay={delay}>
      {member.linkedinUrl ? (
        <a
          href={member.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-400"
        >
          {body}
          <span className="sr-only">on LinkedIn (opens in a new tab)</span>
        </a>
      ) : (
        <div className="group">{body}</div>
      )}
    </Reveal>
  );
}
