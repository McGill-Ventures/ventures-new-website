import Image from "next/image";
import { ArrowRight, ArrowUpRight, Check, ChevronDown } from "lucide-react";
import { Reveal } from "@/components/motion";
import { Button, Tag } from "@/components/ui";
import { cn } from "@/lib/utils";
import type { ProgramData } from "@/app/programs/page";

type Props = {
  program: ProgramData;
  /** Puts the photo on the right, so the page alternates. */
  flip?: boolean;
};

export function ProgramSection({ program, flip = false }: Props) {
  return (
    <article
      id={program.id}
      aria-labelledby={`${program.id}-title`}
      className="grid items-start gap-10 md:grid-cols-2 lg:gap-16"
    >
      <Reveal
        variant="clip"
        duration={1300}
        className={cn("aspect-[4/3] md:sticky md:top-28 md:aspect-[4/5]", flip && "md:order-last")}
      >
        <div className="relative h-full overflow-hidden bg-purple-950">
          <Image
            src={program.photo}
            alt=""
            fill
            sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 600px"
            className="object-cover"
          />
        </div>
      </Reveal>

      <div>
        <Reveal>
          <Tag>{program.status}</Tag>
        </Reveal>
        <Reveal
          as="h2"
          delay={100}
          className="mt-5 font-display text-4xl leading-[1.05] text-balance md:text-5xl"
        >
          <span id={`${program.id}-title`}>{program.name}</span>
        </Reveal>
        <Reveal as="p" delay={200} className="mt-5 max-w-xl font-body text-lg text-purple-100/75">
          {program.description}
        </Reveal>

        <Reveal delay={250}>
          <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 border-y border-white/10 py-5 sm:grid-cols-3">
            {program.facts.map(([term, value]) => (
              <div key={term}>
                <dt className="font-heading text-xs tracking-wider text-purple-300 uppercase">{term}</dt>
                <dd className="mt-1 font-display text-xl">{value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal as="ul" delay={300} className="mt-8 space-y-3">
          {program.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3 font-body text-white/85">
              <Check aria-hidden className="mt-1 size-4 shrink-0 text-purple-400" />
              {feature}
            </li>
          ))}
        </Reveal>

        {program.sponsor && (
          <Reveal delay={350} className="mt-8 flex items-center gap-5">
            <span className="font-heading text-sm text-white/60">Supported by</span>
            <a href={program.sponsor.href} target="_blank" rel="noopener noreferrer">
              {/* The logo is grey on an opaque white box: invert it, then screen away the black. */}
              <Image
                src={program.sponsor.logo}
                alt={program.sponsor.name}
                className="h-9 w-auto opacity-80 mix-blend-screen invert transition-opacity hover:opacity-100"
              />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </Reveal>
        )}

        {program.curriculum && (
          <Reveal delay={400} className="mt-8">
            <details className="group border-b border-white/10">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 border-t border-white/10 py-4 font-heading text-lg transition-colors hover:text-purple-300 [&::-webkit-details-marker]:hidden">
                {program.curriculum.label}
                <ChevronDown aria-hidden className="size-5 transition-transform duration-300 group-open:rotate-180" />
              </summary>
              <div className="space-y-8 pb-6">
                {program.curriculum.groups.map((group) => (
                  <div key={group.title}>
                    <h3 className="font-heading text-sm tracking-wider text-purple-300 uppercase">
                      {group.title}
                    </h3>
                    <ol className="mt-4 space-y-3">
                      {group.items.map((item, i) => (
                        <li key={item.title} className="grid grid-cols-[4.5rem_minmax(0,1fr)] gap-3 font-body text-sm">
                          <span className="font-heading text-purple-400">{item.label ?? String(i + 1).padStart(2, "0")}</span>
                          <span className="text-white/75">
                            <span className="text-white">{item.title}</span>
                            {item.body && <>. {item.body}</>}
                          </span>
                        </li>
                      ))}
                    </ol>
                  </div>
                ))}
              </div>
            </details>
          </Reveal>
        )}

        {program.links.length > 0 && (
          <Reveal delay={450} className="mt-10 flex flex-wrap gap-4">
            {program.links.map((link, i) => (
              <Button
                key={link.href}
                href={link.href}
                variant={i === 0 ? "primary" : "secondary"}
                external={link.href.startsWith("http")}
              >
                {link.label}
                {link.href.startsWith("http") ? (
                  <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                ) : (
                  <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
                )}
              </Button>
            ))}
          </Reveal>
        )}
      </div>
    </article>
  );
}
