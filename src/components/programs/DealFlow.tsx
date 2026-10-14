import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion";
import { APPLICATION_STEPS } from "@/constants";

/** How to apply, framed as the stages of a deal pipeline. */
export function DealFlow() {
  return (
    <ol className="mt-14 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
      {APPLICATION_STEPS.map((step, i) => (
        <Reveal as="li" key={step.stage} delay={i * 100} className="border-t border-white/15 pt-4">
          <p className="flex items-center justify-between font-heading text-purple-300">
            {step.stage}
            {i < APPLICATION_STEPS.length - 1 && (
              <ArrowRight aria-hidden className="hidden size-4 text-white/30 lg:block" />
            )}
          </p>
          <h3 className="mt-8 font-heading text-xl">{step.title}</h3>
          <p className="mt-2 font-body text-purple-100/70">{step.description}</p>
        </Reveal>
      ))}
    </ol>
  );
}
