"use client";

import { useState } from "react";
import { Check, Mail } from "lucide-react";
import { Button } from "@/components/ui";

const CRITERIA = [
  "We have a McGill connection",
  "We're raising at pre-seed",
  "A $10K-$50K check on a SAFE fits our round",
];

// A fixed subject line keeps pitches easy to find in the inbox.
const PITCH_EMAIL = `mailto:mcgillventuresclub@gmail.com?subject=${encodeURIComponent(
  "Pitch: [Company name]",
)}&body=${encodeURIComponent("Company:\nMcGill connection:\nRaising:\nDeck:\n")}`;

/** Founders tick the criteria. The deck button works at any point and only
 *  lights up once everything is ticked. */
export function FitChecklist() {
  const [ticked, setTicked] = useState(() => CRITERIA.map(() => false));
  const count = ticked.filter(Boolean).length;
  const fit = count === CRITERIA.length;

  return (
    <div>
      <fieldset>
        <legend className="sr-only">Is your startup a fit?</legend>
        {CRITERIA.map((criterion, i) => (
          <label
            key={criterion}
            className="group flex cursor-pointer items-start gap-4 border-t border-white/10 py-5 last-of-type:border-b"
          >
            <span className="relative grid size-7 shrink-0 place-items-center">
              <input
                type="checkbox"
                checked={ticked[i]}
                onChange={() => setTicked((t) => t.map((v, j) => (j === i ? !v : v)))}
                className="peer size-7 cursor-pointer appearance-none rounded-lg border border-white/30 transition-colors group-hover:not-checked:border-white/60 checked:border-purple-400 checked:bg-purple-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-400"
              />
              <Check
                aria-hidden
                className="pointer-events-none absolute size-4 text-white opacity-0 transition-opacity peer-checked:opacity-100"
              />
            </span>
            <span className="font-display text-xl leading-snug md:text-2xl">{criterion}</span>
          </label>
        ))}
      </fieldset>

      <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
        <Button href={PITCH_EMAIL} variant={fit ? "primary" : "secondary"}>
          Send us your deck
          <Mail className="size-5" />
        </Button>
        <p aria-live="polite" className="font-body text-purple-100/75">
          {fit ? "You're a fit. We'd love to see it." : `${count} of ${CRITERIA.length} ticked`}
        </p>
      </div>
    </div>
  );
}
