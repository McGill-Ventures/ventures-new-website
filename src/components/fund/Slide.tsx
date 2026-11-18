import type { ReactNode } from "react";
import { Reveal } from "@/components/motion";
import { Tag } from "@/components/ui";
import { cn } from "@/lib/utils";

type Tone = "black" | "purple" | "white" | "lilac";

type HeaderProps = {
  id: string;
  title: string;
  dark: boolean;
};

/** The section's name as a small pill. */
export function SlideHeader({ id, title, dark }: HeaderProps) {
  return (
    <Reveal>
      <h2 id={`${id}-title`}>
        <Tag tone={dark ? "dark" : "light"}>{title}</Tag>
      </h2>
    </Reveal>
  );
}

const TONE: Record<Tone, string> = {
  black: "bg-black text-white",
  purple: "bg-grain bg-purple-950 text-white",
  white: "bg-white text-black",
  // The About term sheet's wash, made opaque so it reads the same over this black page.
  lilac: "bg-[color-mix(in_oklab,var(--color-purple-50)_60%,white)] text-black",
};

type Props = Omit<HeaderProps, "dark"> & { tone: Tone; children: ReactNode };

/** One section of the fund's pitch, sized to its content. */
export function Slide({ tone, children, ...header }: Props) {
  const dark = tone === "black" || tone === "purple";
  return (
    <section
      id={header.id}
      aria-labelledby={`${header.id}-title`}
      className={cn(
        "relative overflow-clip px-6 py-20 md:px-12 md:py-28 lg:px-24 lg:py-32",
        TONE[tone],
      )}
    >
      {tone === "purple" && (
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 -left-40 size-[34rem] rounded-full bg-purple-600/30 blur-3xl"
        />
      )}
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <SlideHeader {...header} dark={dark} />
        <div className="mt-8 md:mt-10">{children}</div>
      </div>
    </section>
  );
}
