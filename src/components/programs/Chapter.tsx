import Image from "next/image";
import { Plus } from "lucide-react";
import { Reveal } from "@/components/motion";
import { cn } from "@/lib/utils";
import { at2x } from "@/lib/photoSizes";
import { Cta } from "./Cta";
import { Terms } from "./Terms";
import type { Program } from "@/app/programs/page";

export const LEDE =
  "font-medium [font-family:var(--font-plus-jakarta)] leading-[1.22] tracking-[-0.02em] text-pretty text-white";

type BandProps = {
  program: Program;
  /** Aspect ratio of the photo. */
  frame: string;
  /** Padding that lines the name up with the text below. */
  gutter: string;
  sizes: string;
  className?: string;
};

/** Photo with the name straddling its bottom edge, sized by `--title` on an ancestor. */
export function TitleBand({ program, frame, gutter, sizes, className }: BandProps) {
  const { id, name, photo } = program;
  return (
    <div className={cn("relative", className)}>
      <div className={cn("relative overflow-hidden bg-neutral-900", frame)}>
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes={at2x(sizes)}
          className="object-cover"
          style={{ objectPosition: photo.position }}
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 via-40% to-transparent" />
      </div>
      <div className={cn("absolute inset-x-0 bottom-0", gutter)}>
        <h2
          id={`${id}-title`}
          className="mx-auto max-w-7xl translate-y-[0.33em] font-display text-[length:var(--title)] leading-[0.9] tracking-[-0.045em] text-balance"
        >
          {name}
        </h2>
      </div>
    </div>
  );
}

const RAIL_HEADING = "font-heading text-lg lg:col-span-3 lg:border-t lg:border-white/15 lg:pt-4";

export function Chapter({ program }: { program: Program }) {
  const { id, description, features, curriculum, links } = program;

  return (
    <article
      id={id}
      aria-labelledby={`${id}-title`}
      // Lands a link with the photo at the top, or where it is taller than the screen, with the name still in view.
      className="-scroll-mt-4 [--title:clamp(2.75rem,9vw,9.5rem)] lg:[scroll-margin-top:calc(min(4rem,100svh_-_56.25vw_-_var(--title)*0.5_-_2rem)_-_5rem)]"
    >
      <TitleBand
        program={program}
        frame="aspect-[3/2] lg:aspect-video"
        gutter="px-6 md:px-12 lg:px-24"
        sizes="100vw"
      />

      <div className="px-6 pt-[calc(var(--title)*0.33+3rem)] md:px-12 lg:px-24 lg:pt-[calc(var(--title)*0.33+5.5rem)]">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-x-6 lg:grid-cols-12">
            <Reveal as="p" className={`${LEDE} text-[clamp(1.375rem,2.3vw,2.125rem)] lg:col-span-8 lg:col-start-4`}>
              {description}
            </Reveal>
            <Reveal delay={100} className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4 lg:col-span-8 lg:col-start-4 lg:mt-10">
              {links.map((link, i) => (
                <Cta key={link.label} href={link.href} disabled={link.disabled} variant={i === 0 ? "solid" : "line"}>
                  {link.label}
                </Cta>
              ))}
            </Reveal>
            <Reveal delay={150} className="mt-14 lg:col-span-3 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:mt-0">
              <Terms program={program} className="grid grid-cols-2 gap-x-6 gap-y-5 lg:grid-cols-1" />
            </Reveal>
          </div>

          <div className="mt-20 grid gap-x-6 lg:mt-28 lg:grid-cols-12">
            <Reveal as="h3" className={RAIL_HEADING}>
              What you’ll do
            </Reveal>
            <Reveal as="ul" delay={100} className="mt-4 grid gap-x-6 sm:grid-cols-2 lg:col-span-9 lg:mt-0">
              {features.map((feature) => (
                <li key={feature} className="border-t border-white/15 pt-4 pb-6 font-body text-lg leading-snug text-white/80">
                  {feature}
                </li>
              ))}
            </Reveal>
          </div>

          {curriculum && (
            <div className="mt-12 grid gap-x-6 lg:mt-16 lg:grid-cols-12">
              <Reveal as="h3" className={RAIL_HEADING}>
                Curriculum
              </Reveal>
              <Reveal delay={100} className="mt-4 lg:col-span-9 lg:mt-0">
                <details className="group border-y border-white/15">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-4 font-heading text-lg transition-colors hover:text-purple-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-400 [&::-webkit-details-marker]:hidden">
                    {curriculum.summary}
                    <Plus aria-hidden className="size-5 shrink-0 transition-transform duration-300 group-open:rotate-45" />
                  </summary>
                  <div className="grid gap-10 pt-2 pb-10 md:grid-cols-2 md:gap-x-6">
                    {curriculum.groups.map((group) => (
                      <div key={group.title}>
                        <h4 className="font-heading text-sm text-white/50">{group.title}</h4>
                        <ol className="mt-3">
                          {group.items.map((item) => (
                            <li key={item.title} className="border-t border-white/10 py-3">
                              {item.label && <p className="font-heading text-sm text-purple-300">{item.label}</p>}
                              <p className="font-heading text-white">{item.title}</p>
                              {item.body && <p className="mt-1 font-body text-sm text-white/60">{item.body}</p>}
                            </li>
                          ))}
                        </ol>
                      </div>
                    ))}
                  </div>
                </details>
              </Reveal>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
