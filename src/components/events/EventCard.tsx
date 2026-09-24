import Image from "next/image";
import { Camera, CalendarDays, MapPin } from "lucide-react";
import EventPhotoGallery from "@/components/EventPhotoGallery";
import { Reveal } from "@/components/motion";
import { Tag } from "@/components/ui";
import type { EventData } from "@/app/events/page";

// A bare `YYYY-MM-DD` parses as UTC midnight, so format in UTC too or the
// date slips back a day west of Greenwich.
const DATE_FORMAT = new Intl.DateTimeFormat("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
  timeZone: "UTC",
});

type Props = {
  event: EventData;
  /** Milliseconds, for staggering a grid. */
  delay?: number;
  /** Passed to the cover image; match it to the tile's width in the grid. */
  sizes?: string;
  /** Keeps the outline intact when the tile sits under a year heading. */
  headingAs?: "h3" | "h4";
  className?: string;
};

/** Square photo tile: category over the top-left corner, title and details
 *  over a scrim along the bottom. Clicking anywhere opens the photos. */
export function EventCard({
  event,
  delay = 0,
  sizes = "(max-width: 767px) 100vw, 50vw",
  headingAs: Heading = "h3",
  className,
}: Props) {
  const hasPhotos = event.photos.length > 0;
  return (
    <Reveal
      as="article"
      variant="up"
      trigger="view"
      delay={delay}
      className={className}
    >
      <div className="group relative aspect-square overflow-hidden bg-purple-950 text-white">
        <Image
          src={event.coverImage}
          alt=""
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
          style={{
            objectPosition: event.imagePosition ?? "center",
            scale: event.imageScale,
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"
        />

        <div className="absolute inset-x-5 top-5 flex items-start justify-between gap-4 sm:inset-x-6 sm:top-6">
          <Tag>{event.category}</Tag>
          {hasPhotos && (
            <span
              aria-hidden
              className="inline-flex items-center gap-1.5 py-1 font-heading text-xs font-semibold tracking-wider text-white/80 uppercase transition-colors duration-300 group-hover:text-white"
            >
              <Camera className="size-4" />
              Photos
            </span>
          )}
        </div>

        <div className="absolute inset-x-0 bottom-0 p-5 transition-transform duration-500 ease-out group-hover:-translate-y-1 sm:p-6">
          <Heading className="font-display text-2xl leading-[1.05] text-balance md:text-3xl">
            {event.title}
          </Heading>
          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5 font-heading text-sm text-white/75">
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays aria-hidden className="size-4 shrink-0" />
              <time dateTime={event.date}>
                {DATE_FORMAT.format(new Date(event.date))}
              </time>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin aria-hidden className="size-4 shrink-0" />
              {event.location}
            </span>
          </div>
        </div>

        <EventPhotoGallery photos={event.photos} label={event.title} />
      </div>
    </Reveal>
  );
}
