import type { EventData } from "@/app/events/page";
import { cn } from "@/lib/utils";
import { EventCard } from "./EventCard";

type Props = {
  events: EventData[];
  headingAs?: "h3" | "h4";
  className?: string;
};

const BIG_SIZES = "(max-width: 1023px) 100vw, (max-width: 1279px) 66vw, 850px";
const SMALL_SIZES =
  "(max-width: 767px) 100vw, (max-width: 1023px) 50vw, (max-width: 1279px) 33vw, 420px";

/** Runs of three: one big square beside two small ones stacked, the big one
 *  swapping sides each run. Every tile is square, so a big tile spanning two
 *  columns is exactly as tall as two small rows plus the gap. Leftovers that
 *  can't make a full run stay small. */
export function EventGrid({ events, headingAs, className }: Props) {
  const fullRuns = Math.floor(events.length / 3) * 3;
  return (
    <div
      className={cn(
        "grid grid-flow-dense gap-3 md:grid-cols-2 lg:grid-cols-3",
        className,
      )}
    >
      {events.map((event, i) => {
        const big = i < fullRuns && i % 3 === 0;
        const flipped = big && i % 6 === 3;
        return (
          <EventCard
            key={event.id}
            event={event}
            headingAs={headingAs}
            delay={(i % 3) * 110}
            sizes={big ? BIG_SIZES : SMALL_SIZES}
            className={cn(
              big && "md:col-span-2 lg:row-span-2",
              flipped && "lg:col-start-2",
            )}
          />
        );
      })}
    </div>
  );
}
