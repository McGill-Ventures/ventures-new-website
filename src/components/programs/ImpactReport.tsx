import Image from "next/image";
import { Reveal } from "@/components/motion";
import { at2x } from "@/lib/photoSizes";
import { Cta } from "./Cta";
import type { Program } from "@/app/programs/page";

export function ImpactReport({ report }: { report: NonNullable<Program["report"]> }) {
  const { title, blurb, href, cover, size } = report;

  return (
    <div className="grid gap-8 sm:grid-cols-[14rem_minmax(0,1fr)] sm:gap-10">
      <Reveal delay={100}>
        <Image
          src={cover.src}
          alt={cover.alt}
          width={cover.width}
          height={cover.height}
          sizes={at2x("(min-width: 640px) 224px, 192px")}
          className="h-auto w-48 border border-white/15 sm:w-full"
        />
      </Reveal>
      <Reveal delay={150} className="flex flex-col items-start justify-center">
        <h4 className="font-heading text-xl text-white">{title}</h4>
        <p className="mt-3 max-w-xl font-body text-lg leading-snug text-white/80">{blurb}</p>
        <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
          <Cta href={href} newTab>
            View the report
          </Cta>
          <Cta href={href} variant="line" download>
            Download PDF ({size})
          </Cta>
        </div>
      </Reveal>
    </div>
  );
}
