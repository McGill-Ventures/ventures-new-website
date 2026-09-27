import { User } from "lucide-react";
import { Reveal } from "@/components/motion";
import { APPLICATION_STEPS } from "@/constants";

/** How to apply, drawn as a deal pipeline. On wide screens the reader's own
 *  deal card waits in the first slot and advances with scroll (programs.css). */
export function DealFlow() {
  return (
    <ol className="mt-14 grid gap-10 [--deal-gap:1.5rem] lg:grid-cols-4 lg:gap-(--deal-gap)">
      {APPLICATION_STEPS.map((step, i) => (
        <Reveal as="li" key={step.step} delay={i * 100}>
          <p className="flex items-baseline gap-3 border-b border-white/10 pb-3 font-heading text-sm tracking-wider uppercase">
            <span className="text-white/40">{step.step}</span>
            <span className="text-purple-300">{step.stage}</span>
          </p>
          <div
            aria-hidden
            className="relative mt-4 hidden h-20 rounded-xl border border-dashed border-white/15 lg:block"
          >
            {i === 0 && (
              <div className="deal-card absolute -inset-px z-10 flex items-center gap-3 rounded-xl border border-purple-400/50 bg-purple-950 px-4 shadow-[0_10px_30px_-12px_rgba(88,28,135,0.9)]">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-purple-500 to-purple-800">
                  <User className="size-5" />
                </span>
                <span className="min-w-0">
                  <span className="block font-heading">You</span>
                  <span className="block truncate font-body text-xs text-purple-200/80">
                    Pre-seed · McGill
                  </span>
                </span>
              </div>
            )}
          </div>
          <h3 className="mt-5 font-heading text-xl">{step.title}</h3>
          <p className="mt-2 font-body text-purple-100/75">{step.description}</p>
        </Reveal>
      ))}
    </ol>
  );
}
