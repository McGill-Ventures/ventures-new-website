import type { ReactNode } from "react";
import { Reveal } from "@/components/motion";
import { cn } from "@/lib/utils";

type Tone = "black" | "purple" | "white" | "lilac";

type HeaderProps = {
  id: string;
  title: string;
  dark: boolean;
};

/** The slide's title over a hairline, like the title bar of a deck slide. */
export function SlideHeader({ id, title, dark }: HeaderProps) {
  return (
    <Reveal className={cn("border-b pb-4", dark ? "border-white/15" : "border-purple-950/10")}>
      <h2
        id={`${id}-title`}
        className={cn(
          "font-heading text-sm tracking-wider uppercase",
          dark ? "text-purple-300" : "text-purple-700",
        )}
      >
        {title}
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

/** One slide of the deck as a full-screen section. Dark slides carry
 *  `data-dark` so the nav bar turns dark over them. */
export function Slide({ tone, children, ...header }: Props) {
  const dark = tone === "black" || tone === "purple";
  return (
    <section
      id={header.id}
      aria-labelledby={`${header.id}-title`}
      data-dark={dark || undefined}
      className={cn(
        "relative flex min-h-[100dvh] flex-col overflow-clip px-6 pt-24 pb-16 md:px-12 lg:px-24",
        TONE[tone],
      )}
    >
      {tone === "purple" && (
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 -left-40 size-[34rem] rounded-full bg-purple-600/30 blur-3xl"
        />
      )}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col">
        <SlideHeader {...header} dark={dark} />
        <div className="flex flex-1 flex-col justify-center py-12">{children}</div>
      </div>
    </section>
  );
}
