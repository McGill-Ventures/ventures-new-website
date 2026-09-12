"use client";

import { useId, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  /** Visible at rest. Clicking anywhere on it turns the card over. */
  front: ReactNode;
  /** Revealed on the back. Links inside stay clickable, the rest flips back. */
  back: ReactNode;
  /** Sizing for the card, usually an aspect ratio. */
  className?: string;
  /** Names the flip control for screen readers, e.g. the card's title. */
  label?: string;
};

/**
 * Card that turns over on click, either way. Styles live in globals.css under
 * `.flip`. The hidden face is inert so it stays out of the tab order, and
 * reduced motion turns the flip into a crossfade.
 */
export function FlipCard({ front, back, className, label }: Props) {
  const [flipped, setFlipped] = useState(false);
  const backId = useId();
  const name = label ? `${label}: ` : "";

  return (
    <div
      className={cn("flip", className)}
      data-flipped={flipped ? "" : undefined}
    >
      <div className="flip-inner">
        <div className="flip-face flip-front" inert={flipped}>
          <div className="flip-content">{front}</div>
          {/* Sits under the content so any link on a face still wins the click. */}
          <button
            type="button"
            onClick={() => setFlipped(true)}
            aria-expanded={flipped}
            aria-controls={backId}
            className="flip-hit"
          >
            <span className="sr-only">{name}show details</span>
          </button>
        </div>

        <div id={backId} className="flip-face flip-back" inert={!flipped}>
          <div className="flip-content">{back}</div>
          <button
            type="button"
            onClick={() => setFlipped(false)}
            className="flip-hit"
          >
            <span className="sr-only">{name}hide details</span>
          </button>
        </div>
      </div>
    </div>
  );
}
