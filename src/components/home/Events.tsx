import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui";
import { Marquee, Reveal, SplitText, Starfield } from "@/components/motion";

/** Top row is 2026, bottom row 2025, each interleaving its events so no two
 *  neighbours come from the same one. */
const STRIP_TOP = [
  "/events/northstar_2026/ns26_01.jpg",
  "/events/women_in_vc2026/winvc_2026_01.JPG",
  "/events/scarlet_pitch_2026/sp26_11.jpg",
  "/events/northstar_2026/ns26_09.jpg",
  "/events/women_in_vc2026/winvc_2026_04.JPG",
  "/events/scarlet_pitch_2026/sp26_08.jpeg",
  "/events/northstar_2026/ns26_03.jpg",
  "/events/women_in_vc2026/winvc_2026_06.JPG",
];

const STRIP_BOTTOM = [
  "/events/scarlet_pitch2025/sp2025_02.jpg",
  "/events/technova2025/tn2025_09.jpg",
  "/events/women_in_vc2025/winvc2025_09.jpg",
  "/events/clipxhealthtech_2026/clipxhealthtech_2026_01.jpg",
  "/events/startup_showcase2025/startup_showcase2025_hero.jpg",
  "/events/women_5a7_cocktail2026/women_5a7_cocktail2025_01.JPG",
  "/events/scarlet_pitch2025/sp2025_06.jpg",
  "/events/technova2025/tn2025_01.jpg",
];

function StripPhoto({ src }: { src: string }) {
  return (
    <div className="relative h-40 w-60 overflow-hidden rounded-2xl md:h-48 md:w-72">
      <Image
        src={src}
        alt=""
        fill
        sizes="(max-width: 768px) 240px, 288px"
        className="object-cover transition-transform duration-700 ease-out hover:scale-105"
      />
    </div>
  );
}

export function Events() {
  return (
    <section className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden bg-black py-10 text-white">
      <Starfield
        count={170}
        className="[mask-image:linear-gradient(to_bottom,#000_38%,transparent_62%)]"
      />
      <div className="relative px-6 md:px-12 lg:px-24">
        <div className="mx-auto flex max-w-7xl flex-wrap items-end justify-between gap-x-12 gap-y-6">
          <div>
            <h2 className="section-heading">
              <SplitText text="Open to all students" />
            </h2>
            <Reveal
              as="p"
              delay={200}
              className="mt-4 max-w-2xl font-body text-lg text-purple-100/75 md:text-xl"
            >
              Built by students, for students. Talks, panels and pitch nights
              with investors and founders in the room, whether you come for an
              internship, funding, a cofounder, or just people worth knowing.
            </Reveal>
          </div>
          <Reveal delay={300}>
            <Button href="/events" variant="secondary" size="sm">
              See all events
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Reveal>
        </div>
      </div>

      <Reveal variant="fade" duration={1400} className="mt-10 lg:mt-12">
        <Marquee duration={75} pauseOnHover={false}>
          {STRIP_TOP.map((src) => (
            <StripPhoto key={src} src={src} />
          ))}
        </Marquee>
        <Marquee
          direction="right"
          duration={85}
          pauseOnHover={false}
          className="mt-4"
        >
          {STRIP_BOTTOM.map((src) => (
            <StripPhoto key={src} src={src} />
          ))}
        </Marquee>
      </Reveal>
    </section>
  );
}
