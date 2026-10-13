import { Reveal } from "@/components/motion";
import { LEDE, TitleBand } from "./Chapter";
import { Cta } from "./Cta";
import { Terms } from "./Terms";
import type { Program } from "@/app/programs/page";

/** A program that runs its own site: the essentials, then a way there. */
export function CompactChapter({ program }: { program: Program }) {
  const { id, description, features, links } = program;

  return (
    <article
      id={id}
      aria-labelledby={`${id}-title`}
      className="max-lg:-scroll-mt-4 [--title:clamp(2.75rem,9vw,9.5rem)] lg:[--title:clamp(3rem,4.4vw,4.5rem)]"
    >
      <TitleBand
        program={program}
        frame="aspect-[3/2]"
        gutter="px-6 md:px-12 lg:px-0"
        sizes="(min-width: 1472px) 616px, (min-width: 1024px) 42vw, 100vw"
        className="-mx-6 md:-mx-12 lg:mx-0"
      />

      <div className="pt-[calc(var(--title)*0.33+3rem)] lg:pt-[calc(var(--title)*0.33+3.5rem)]">
        <Reveal
          as="p"
          className={`${LEDE} text-[clamp(1.375rem,2.3vw,2.125rem)] lg:text-[clamp(1.25rem,1.6vw,1.5rem)]`}
        >
          {description}
        </Reveal>
        <Reveal delay={100}>
          <Terms program={program} className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5 [&>:last-child:nth-child(odd)]:col-span-2" />
        </Reveal>
        <Reveal delay={150} className="mt-12">
          <h3 className="font-heading text-lg">What you’ll do</h3>
          <ul className="mt-4 border-b border-white/15">
            {features.map((feature) => (
              <li key={feature} className="border-t border-white/15 py-3.5 font-body text-lg leading-snug text-white/80 lg:text-base">
                {feature}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={200} className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
          {links.map((link, i) => (
            <Cta key={link.href} href={link.href} variant={i === 0 ? "solid" : "line"}>
              {link.label}
            </Cta>
          ))}
        </Reveal>
      </div>
    </article>
  );
}
