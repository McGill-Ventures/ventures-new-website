import type { ReactNode } from "react";
import { Reveal } from "@/components/motion";

type Props = {
  id: string;
  /** 1-based position in the deck. */
  number: number;
  total: number;
  title: string;
  children: ReactNode;
};

const pad = (n: number) => String(n).padStart(2, "0");

/** One slide of the fund's pitch deck: a 16:9 frame on wide screens with its
 *  title and number along the top. It grows past 16:9 rather than clip. */
export function Slide({ id, number, total, title, children }: Props) {
  return (
    <section id={id} aria-labelledby={`${id}-title`}>
      <Reveal
        amount={0.05}
        className="flex flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-10 lg:aspect-video lg:p-14"
      >
        <header className="flex items-baseline justify-between gap-4 font-heading text-sm tracking-wider uppercase">
          <h2 id={`${id}-title`} className="text-purple-300">
            {title}
          </h2>
          <span aria-hidden className="text-white/40">
            {pad(number)} / {pad(total)}
          </span>
        </header>
        <div className="mt-8 flex flex-1 flex-col lg:mt-10">{children}</div>
      </Reveal>
    </section>
  );
}
