"use client";

import { useId, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  /** Clicking anywhere on it turns the card over. */
  front: ReactNode;
  /** Links inside stay clickable, the rest of the face flips back. */
  back: ReactNode;
  className?: string;
  /** Names the flip control for screen readers. */
  label?: string;
};

/** Styles live in globals.css under `.flip`. The hidden face is inert so it
 *  stays out of the tab order. */
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
