import Image from "next/image";
import { Marquee } from "@/components/motion";

type Props = {
  /** Headshot paths. Spread round-robin across the rows. */
  faces: string[];
  rows?: number;
  perRow?: number;
};

/** Decorative rows of greyscale headshots drifting in alternate directions,
 *  meant to sit behind the hero text under a dark scrim. */
export function FacesWall({ faces, rows = 4, perRow = 12 }: Props) {
  const lines = Array.from({ length: rows }, (_, r) =>
    faces.filter((_, i) => i % rows === r).slice(0, perRow),
  );

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 flex -rotate-3 scale-110 flex-col justify-center gap-3 opacity-70">
        {lines.map((line, r) => (
          <Marquee
            key={r}
            direction={r % 2 ? "right" : "left"}
            duration={[90, 110, 100, 120][r % 4]}
            gap="0.75rem"
            pauseOnHover={false}
          >
            {line.map((src) => (
              <div key={src} className="relative aspect-[4/5] w-24 overflow-hidden bg-white/5 md:w-32">
                <Image src={src} alt="" fill sizes="128px" className="object-cover grayscale" />
              </div>
            ))}
          </Marquee>
        ))}
      </div>
    </div>
  );
}
