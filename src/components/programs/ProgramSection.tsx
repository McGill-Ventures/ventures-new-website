import Image from "next/image";
import type { CSSProperties } from "react";
import { ArrowRight, ArrowUpRight, Check, ChevronDown } from "lucide-react";
import { Reveal } from "@/components/motion";
import { Button, Stamp } from "@/components/ui";
import type { ProgramData } from "@/app/programs/page";

/** The program's details. Below `lg` it also carries its own photo and stamp,
 *  which the pinned ProgramIndex shows on wider screens. */
export function ProgramSection({ program }: { program: ProgramData }) {
  const [kicker, headline] = program.status;

  return (
    <article
      id={program.id}
      aria-labelledby={`${program.id}-title`}
      className="border-t border-white/10 pt-12 first:border-0 first:pt-0 lg:min-h-[calc(100dvh-10rem)] lg:scroll-mt-4 lg:border-0 lg:pt-0"
    >
      <div className="relative mb-10 lg:hidden">
        <Reveal variant="clip" duration={1300} className="aspect-[4/3]">
          <div className="relative h-full overflow-hidden bg-purple-950">
            <Image
              src={program.photo}
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
              style={{ objectPosition: program.photoPosition }}
            />
          </div>
        </Reveal>
        <Reveal
          variant="scale"
          delay={700}
          duration={450}
          className="pointer-events-none absolute right-3 -bottom-5"
          style={{ "--reveal-from": "scale(2.6)" } as CSSProperties}
        >
          <Stamp className="border-purple-300 bg-black/40 text-center text-purple-200 backdrop-blur-sm">
            <span className="block text-[0.625rem] tracking-[0.2em]">{kicker}</span>
            <span className="block text-2xl">{headline}</span>
          </Stamp>
        </Reveal>
      </div>

      <Reveal
        as="h2"
        className="font-display text-4xl leading-[1.05] text-balance md:text-5xl lg:sr-only"
      >
        <span id={`${program.id}-title`}>{program.name}</span>
      </Reveal>
      <p className="sr-only">
        {kicker} {headline}
      </p>
      <Reveal
        as="p"
        delay={100}
        className="mt-5 max-w-xl font-body text-lg text-purple-100/75 lg:mt-0 lg:text-2xl lg:leading-snug lg:text-white/85"
      >
        {program.description}
      </Reveal>

      <Reveal delay={150}>
        <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 border-y border-white/10 py-5 sm:grid-cols-3">
          {program.facts.map(([term, value]) => (
            <div key={term}>
              <dt className="font-heading text-xs tracking-wider text-purple-300 uppercase">{term}</dt>
              <dd className="mt-1 font-display text-xl">{value}</dd>
            </div>
          ))}
        </dl>
      </Reveal>

      <Reveal as="ul" delay={200} className="mt-8 space-y-3">
        {program.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 font-body text-white/85">
            <Check aria-hidden className="mt-1 size-4 shrink-0 text-purple-400" />
            {feature}
          </li>
        ))}
      </Reveal>

      {program.sponsor && (
        <Reveal delay={250} className="mt-8 flex items-center gap-5">
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
        <Reveal delay={300} className="mt-8">
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
        <Reveal delay={350} className="mt-10 flex flex-wrap gap-4">
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
    </article>
  );
}
