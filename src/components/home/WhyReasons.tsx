import Image from "next/image";
import { at2x } from "@/lib/photoSizes";
import { Reveal } from "@/components/motion";

const REASONS = [
  {
    title: "Ambition is contagious",
    description:
      "You become the people you spend your time around. Here that is founders, investors and students who are all building something.",
    photo: "/events/northstar_2026/ns26_02.jpg",
  },
  {
    title: "You're in the room",
    description:
      "Close enough to how decisions actually get made that it stops being abstract.",
    photo: "/events/scarlet_pitch_2026/sp26_02.jpg",
  },
  {
    title: "A network that travels",
    description:
      "Members and alumni in Montreal, Toronto, New York and San Francisco who keep showing up for each other.",
    photo: "/community/members_group.jpg",
  },
];

export function WhyReasons() {
  return (
    <ul className="grid gap-12 md:grid-cols-3 md:gap-6 lg:gap-8">
      {REASONS.map((reason, i) => (
        <Reveal as="li" key={reason.title} delay={150 + i * 120} className="max-md:[--reveal-delay:0ms]!">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-white/5">
            <Image
              src={reason.photo}
              alt=""
              fill
              sizes={at2x("(max-width: 767px) 100vw, 33vw")}
              className="object-cover"
            />
          </div>
          <h3 className="mt-6 font-display text-2xl leading-tight">{reason.title}</h3>
          <p className="mt-3 max-w-md font-body text-purple-100/75">{reason.description}</p>
        </Reveal>
      ))}
    </ul>
  );
}
