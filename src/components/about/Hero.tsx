import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { SplitText } from "@/components/motion";

/** Pulled up under the transparent header, so `-mt-20` tracks its height.
 *  The photo shows through the headline, then scrolling zooms through the
 *  type into the room. Styles live in globals.css under `.room`. */
export function Hero() {
  return (
    <section id="hero" className="room relative -mt-20 bg-black text-white">
      <div className="room-stage relative h-[100dvh] overflow-hidden">
        {/* Zooms around the judges' faces, so they stay inside the letters. */}
        <div className="room-photo absolute inset-0 origin-[50%_42%]">
          <Image
            src="/events/scarlet_pitch_2026/sp26_04.jpg"
            alt="The judges’ table at Scarlet Pitch 2026"
            fill
            priority
            // Cover paints it 1.5x the screen height wide on anything taller than 3:2.
            sizes="(max-aspect-ratio: 3/2) 150vh, 100vw"
            className="object-cover"
          />
        </div>

        {/* Multiply keeps the photo only where the white type is. */}
        <div className="room-mask absolute inset-0 flex items-center justify-center bg-black px-4 pb-[10vh] mix-blend-multiply">
          {/* w-min stacks one word per line, sized by whichever runs out first. */}
          <h1 className="w-min text-center [font-family:var(--font-plus-jakarta)] text-[min(22vw,30vh)] leading-[0.82] font-extrabold tracking-[-0.055em] text-white">
            <SplitText text="McGill Ventures" trigger="load" delay={200} stagger={110} />
          </h1>
        </div>

        <div
          aria-hidden
          className="room-scrim pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"
        />

        <div className="room-copy absolute inset-x-0 bottom-0 px-6 pb-10 sm:px-10 lg:px-16 lg:pb-14 xl:px-24">
          <div className="flex flex-wrap items-end justify-between gap-x-12 gap-y-4">
            <p className="max-w-2xl font-body text-lg text-pretty text-white md:text-2xl md:leading-snug">
              A student-run organization that puts McGill students{" "}
              <span className="room-hl">in the room</span> with
              investors and founders, and prepares
              them to become the next generation of venture leaders.
            </p>
            <p className="font-heading text-sm text-white/70">
              Scarlet Pitch 2026
            </p>
          </div>
        </div>

        <p className="room-cue absolute inset-x-0 bottom-8 flex items-center justify-center gap-2 font-heading text-sm text-white/70">
          Scroll
          <ArrowDown aria-hidden className="size-4" />
        </p>
      </div>
    </section>
  );
}
