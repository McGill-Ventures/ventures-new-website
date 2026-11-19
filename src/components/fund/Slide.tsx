import type { ReactNode } from "react";
import { SplitText } from "@/components/motion";
import { cn } from "@/lib/utils";

type Tone = "black" | "purple" | "white" | "lilac";

const TONE: Record<Tone, string> = {
  black: "bg-black text-white",
  purple: "bg-grain bg-purple-950 text-white",
  white: "bg-white text-black",
  // The About term sheet's wash, made opaque so it reads the same over this black page.
  lilac: "bg-[color-mix(in_oklab,var(--color-purple-50)_60%,white)] text-black",
};

type Props = { id: string; title: string; tone: Tone; children: ReactNode };

/** One section of the fund page: a single headline, then its content, in the landing page's column. */
export function Slide({ id, title, tone, children }: Props) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={cn("relative overflow-clip px-6 py-24 md:px-12 md:py-32 lg:px-24", TONE[tone])}
    >
      {tone === "purple" && (
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 -left-40 size-[34rem] rounded-full bg-purple-600/30 blur-3xl"
        />
      )}
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <h2 id={`${id}-title`} className="section-heading max-w-[24ch]">
          <SplitText text={title} />
        </h2>
        <div className="mt-12 md:mt-16">{children}</div>
      </div>
    </section>
  );
}
