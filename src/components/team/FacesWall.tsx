import Image from "next/image";
import { Marquee } from "@/components/motion";

type Props = {
  /** Headshot paths. Spread round-robin across the rows. */
  faces: string[];
  rows?: number;
  perRow?: number;
};

/** Decorative rows of greyscale headshots drifting in alternate directions,
 *  meant to sit behind the hero text under a dark scrim. Rows share the
 *  height, so the wall fills the hero at any screen size. */
export function FacesWall({ faces, rows = 5, perRow = 12 }: Props) {
  const lines = Array.from({ length: rows }, (_, r) =>
    faces.filter((_, i) => i % rows === r).slice(0, perRow),
  );

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 flex -rotate-3 scale-110 flex-col gap-3 opacity-70">
        {lines.map((line, r) => (
          <Marquee
            key={r}
            direction={r % 2 ? "right" : "left"}
            duration={[90, 110, 100, 120, 105][r % 5]}
            gap="0.75rem"
            pauseOnHover={false}
            className="min-h-0 flex-1"
          >
            {line.map((src) => (
              <div key={src} className="relative aspect-[4/5] h-full overflow-hidden bg-white/5 max-md:[&:nth-child(n+6)]:hidden">
                <Image src={src} alt="" fill sizes="180px" className="object-cover grayscale" />
              </div>
            ))}
          </Marquee>
        ))}
      </div>
    </div>
  );
}
