import Image from "next/image";
import { ArrowUpRight, CalendarDays, MapPin } from "lucide-react";
import { Reveal } from "@/components/motion";
import { Button, Tag } from "@/components/ui";
import type { EventData } from "@/app/events/page";

const DATE_FORMAT = new Intl.DateTimeFormat("en-US", {
  weekday: "long",
  month: "long",
  day: "numeric",
  year: "numeric",
  timeZone: "UTC",
});

/** Upcoming covers are usually posters with their own type, so the image
 *  stays clean and the details sit beside it rather than over it. */
export function UpcomingEvent({ event }: { event: EventData }) {
  return (
    <article className="grid items-center gap-8 md:grid-cols-2 lg:gap-16">
      <Reveal variant="clip" duration={1300} className="aspect-square">
        <div className="relative h-full overflow-hidden bg-purple-950">
          <Image
            src={event.coverImage}
            alt=""
            fill
            sizes="(max-width: 767px) 100vw, 50vw"
            className="object-cover"
            style={{ objectPosition: event.imagePosition ?? "center" }}
          />
        </div>
      </Reveal>

      <div>
        <Reveal>
          <Tag>{event.category}</Tag>
        </Reveal>
        <Reveal as="h3" delay={100} className="mt-5 font-display text-3xl leading-[1.05] text-balance md:text-5xl">
          {event.title}
        </Reveal>
        <Reveal
          delay={200}
          className="mt-5 flex flex-col gap-2 font-heading text-base text-white/75"
        >
          <span className="inline-flex items-start gap-2">
            <CalendarDays aria-hidden className="mt-0.5 size-5 shrink-0" />
            <time dateTime={event.date}>
              {DATE_FORMAT.format(new Date(event.date))}
            </time>
          </span>
          <span className="inline-flex items-start gap-2">
            <MapPin aria-hidden className="mt-0.5 size-5 shrink-0" />
            {event.location}
          </span>
        </Reveal>
        <Reveal
          as="p"
          delay={300}
          className="mt-6 max-w-lg font-body text-lg text-purple-100/75"
        >
          {event.description}
        </Reveal>
        {event.ticketsUrl && (
          <Reveal delay={400} className="mt-8">
            <Button href={event.ticketsUrl} variant="secondary" external>
              Get tickets
              <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>
          </Reveal>
        )}
      </div>
    </article>
  );
}
