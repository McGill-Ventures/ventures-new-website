import { getImageProps } from "next/image";
import { ArrowDown } from "lucide-react";
import { SplitText } from "@/components/motion";

const ALT = "The judges’ table at Scarlet Pitch 2026";

function RoomPhoto() {
  const shared = { alt: ALT, fill: true, priority: true } as const;
  const { props: portrait } = getImageProps({
    ...shared,
    src: "/events/scarlet_pitch_2026/sp26_04_portrait.jpg",
    sizes: "(max-aspect-ratio: 2/3) 67vh, 100vw",
  });
  const { props: landscape } = getImageProps({
    ...shared,
    src: "/events/scarlet_pitch_2026/sp26_04.jpg",
    sizes: "100vw",
  });

  return (
    <picture>
      <source
        media="(max-aspect-ratio: 3/2)"
        srcSet={portrait.srcSet}
        sizes={portrait.sizes}
      />
      <img {...landscape} alt={ALT} className="object-cover" />
    </picture>
  );
}

export function Hero() {
  return (
    <section
      id="hero"
      className="about-hero relative -mt-20 bg-black text-white"
    >
      <div className="about-hero-stage relative h-[100dvh] overflow-hidden">
        <div className="about-hero-photo absolute inset-0 origin-[50%_42%]">
          <RoomPhoto />
        </div>

        <div className="about-hero-mask absolute inset-0 flex items-center justify-center bg-black px-4 pb-[10vh] mix-blend-multiply">
          <h1 className="w-min text-center [font-family:var(--font-plus-jakarta)] text-[min(22vw,30vh)] leading-[0.82] font-extrabold tracking-[-0.055em] text-white">
            <SplitText
              text="McGill Ventures"
              trigger="load"
              delay={200}
              stagger={110}
            />
          </h1>
        </div>

        <div
          aria-hidden
          className="about-hero-scrim pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"
        />

        <div className="about-hero-copy absolute inset-x-0 bottom-0 px-6 pb-10 sm:px-10 lg:px-16 lg:pb-14 xl:px-24">
          <div className="flex flex-wrap items-end justify-between gap-x-12 gap-y-4">
            <p className="max-w-2xl font-body text-lg text-pretty text-white md:text-2xl md:leading-snug">
              A student-run organization that puts McGill students{" "}
              <span className="about-hero-hl">in the room</span> with investors
              and founders, and prepares them to become the next generation of
              venture leaders.
            </p>
            <p className="font-heading text-sm text-white/70">
              Scarlet Pitch 2026
            </p>
          </div>
        </div>

        <p
          aria-hidden
          className="about-hero-cue absolute inset-x-0 bottom-8 flex items-center justify-center gap-2 font-heading text-sm text-white/70"
        >
          Scroll
          <ArrowDown className="size-4" />
        </p>
      </div>
    </section>
  );
}
