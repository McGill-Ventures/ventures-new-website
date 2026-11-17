import type { CSSProperties } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { at2x } from "@/lib/photoSizes";
import { Reveal } from "@/components/motion";

const REASONS = [
  {
    title: "Ambition is contagious",
    description:
      "You become the people you spend your time around. Here that is founders, investors and students who are all building something.",
    photo: "/events/northstar_2026/ns26_02.jpg",
    tilt: "-3deg",
    tape: "-3deg",
    // Desktop stagger, so the prints read as laid down by hand rather than gridded.
    offset: "lg:mt-4",
    side: "max-lg:mr-auto",
  },
  {
    title: "You're in the room",
    description:
      "Close enough to how decisions actually get made that it stops being abstract.",
    photo: "/events/scarlet_pitch_2026/sp26_02.jpg",
    tilt: "3deg",
    tape: "4deg",
    offset: "lg:mt-20",
    side: "max-lg:ml-auto",
  },
  {
    title: "A network that travels",
    description:
      "Members and alumni in Montreal, Toronto, New York and San Francisco who keep showing up for each other.",
    photo: "/community/members_group.jpg",
    tilt: "-1.5deg",
    tape: "-6deg",
    offset: "",
    side: "max-lg:mr-auto",
  },
];

/** The reasons as prints in a photo album: tilted, taped, and straightened on hover. */
export function WhyReasons() {
  return (
    <ul className="grid w-full gap-12 sm:gap-14 lg:grid-cols-3 lg:gap-8 xl:gap-12">
      {REASONS.map((reason, i) => (
        <Reveal
          as="li"
          key={reason.title}
          delay={200 + i * 140}
          duration={1000}
          // Phones reveal one print at a time as it scrolls in, so the stagger would only add a wait.
          className={cn(
            "w-full max-w-[19rem] max-lg:[--reveal-delay:0ms]! sm:max-w-sm lg:max-w-none",
            reason.offset,
            reason.side,
          )}
        >
          <div
            style={{ "--tilt": reason.tilt, "--tape": reason.tape } as CSSProperties}
            className="group relative"
          >
            {/* A print peeking out below. A sibling, as the rotated print would paint over it. */}
            <span
              aria-hidden
              className="absolute inset-0 rotate-[calc(var(--tilt)*-1.5)] rounded-[3px] bg-purple-100/90 shadow-[0_12px_24px_-12px_rgba(0,0,0,0.6)] transition-[rotate] duration-500 ease-out group-hover:rotate-[calc(var(--tilt)*-2.5)] motion-reduce:transition-none"
            />
            <figure
              className="relative rotate-(--tilt) rounded-[3px] bg-white p-3 pb-6 text-purple-950 shadow-[0_24px_48px_-20px_rgba(0,0,0,0.75),0_2px_6px_rgba(0,0,0,0.25)] transition-[rotate,translate,box-shadow] duration-500 ease-out group-hover:-translate-y-2 group-hover:rotate-0 group-hover:shadow-[0_36px_64px_-24px_rgba(0,0,0,0.85),0_2px_6px_rgba(0,0,0,0.25)] motion-reduce:transition-none sm:p-4 sm:pb-7"
            >
              <span
                aria-hidden
                className="absolute -top-3.5 left-1/2 z-10 h-7 w-28 -translate-x-1/2 rotate-(--tape) bg-purple-200/55 shadow-[0_1px_2px_rgba(0,0,0,0.15)] backdrop-blur-[1px] [clip-path:polygon(3%_0,97%_4%,100%_50%,96%_100%,2%_96%,0_48%)]"
              />
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2px] bg-purple-100">
                <Image
                  src={reason.photo}
                  alt=""
                  fill
                  sizes={at2x("(max-width: 1023px) 384px, 33vw")}
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] motion-reduce:transition-none"
                />
              </div>
              <figcaption className="px-1 pt-5">
                <h3 className="font-display text-xl leading-tight md:text-2xl">{reason.title}</h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-purple-950/70">
                  {reason.description}
                </p>
              </figcaption>
            </figure>
          </div>
        </Reveal>
      ))}
    </ul>
  );
}
