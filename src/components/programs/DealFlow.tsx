import { Reveal } from "@/components/motion";
import { APPLICATION_STEPS } from "@/constants";

/** How to apply, framed as the stages of a deal pipeline. */
export function DealFlow() {
  return (
    <ol className="mt-14 grid gap-10 lg:grid-cols-4 lg:gap-6">
      {APPLICATION_STEPS.map((step, i) => (
        <Reveal as="li" key={step.step} delay={i * 100}>
          <p className="flex items-baseline gap-3 border-b border-white/10 pb-3 font-heading text-sm tracking-wider uppercase">
            <span className="text-white/40">{step.step}</span>
            <span className="text-purple-300">{step.stage}</span>
          </p>
          <h3 className="mt-5 font-heading text-xl">{step.title}</h3>
          <p className="mt-2 font-body text-purple-100/75">{step.description}</p>
        </Reveal>
      ))}
    </ol>
  );
}
