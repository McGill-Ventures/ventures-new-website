import Image from "next/image";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui";
import { Marquee, Reveal, SplitText, Starfield } from "@/components/motion";

const RAILS = [
  [
    "/events/northstar_2026/ns26_07.jpg",
    "/events/image_carousel_pic5.jpg",
    "/events/scarlet_pitch_2026/sp26_04.jpg",
    "/events/clipxhealthtech_2026/clipxhealthtech_2026_03.jpg",
    "/events/technova2025/tn2025_03.jpg",
  ],
  [
    "/events/northstar_2026/ns26_02.jpg",
    "/events/image_carousel_pic4.jpg",
    "/events/scarlet_pitch2025/sp2025_01.jpg",
    "/events/homeLanding.jpg",
    "/events/northstar_2026/ns26_08.jpg",
  ],
  [
    "/events/image_carousel_pic1.jpg",
    "/events/scarlet_pitch_2026/sp26_10.jpeg",
    "/events/northstar_2026/ns26_05.jpg",
    "/events/women_5a7_cocktail2026/women_5a7_cocktail2025_02.JPG",
    "/events/clipxhealthtech_2026/clipxhealthtech_2026_hero.jpg",
  ],
];

/** Pulled up under the transparent header, so `-mt-20` tracks its height. */
export function Hero() {
  return (
    <section
      id="hero"
      className="relative -mt-20 overflow-hidden bg-black text-white"
    >
      <div
        aria-hidden
        className="animate-orb pointer-events-none absolute -top-48 -left-48 size-[36rem] rounded-full bg-purple-600/40 blur-3xl"
      />
      <div
        aria-hidden
        className="animate-orb pointer-events-none absolute -right-24 -bottom-56 size-[32rem] rounded-full bg-purple-800/50 blur-3xl [animation-delay:-8s]"
      />
      <Starfield className="[mask-image:linear-gradient(to_bottom,#000_55%,transparent_80%)] lg:[mask-image:linear-gradient(to_right,#000_42%,transparent_62%)]" />

      <div className="relative grid min-h-[100dvh] lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)]">
        <div className="flex flex-col justify-center px-6 pt-28 pb-12 sm:px-10 lg:py-24 lg:pl-16 xl:pl-24">
          <h1 className="font-display text-[clamp(2.5rem,min(5vw,8vh),5rem)] leading-[0.98] text-balance">
            <SplitText
              text="Shaping the Next Generation of Builders and Backers"
              trigger="load"
              delay={150}
            />
          </h1>
          <Reveal
            as="p"
            trigger="load"
            delay={650}
            className="mt-6 max-w-xl font-body text-lg text-purple-100/80 md:text-xl"
          >
            McGill Ventures is Montreal&apos;s premier student-run venture
            capital organization, connecting ambitious students with the startup
            ecosystem through hands-on experience and mentorship.
          </Reveal>
          <Reveal
            trigger="load"
            delay={850}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Button href="/programs">
              Explore Programs
              <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <Button href="/about" variant="secondary">
              Learn More
            </Button>
          </Reveal>
        </div>

        <div className="relative h-[54vh] min-h-[24rem] overflow-hidden lg:h-auto">
          <div
            aria-hidden
            className="absolute inset-0 flex justify-center gap-3 px-5 [transform:perspective(1400px)_rotateY(-12deg)_rotateX(4deg)_rotateZ(3deg)_scale(1.15)] lg:px-0"
          >
            {RAILS.map((column, i) => (
              <div key={i} className="h-full w-1/3 max-w-[15rem]">
                <Reveal
                  trigger="load"
                  delay={200 + i * 160}
                  duration={1500}
                  className="h-full"
                  style={
                    {
                      "--reveal-from": "translateY(160px)",
                    } as React.CSSProperties
                  }
                >
                  <Marquee
                    direction={i === 1 ? "down" : "up"}
                    duration={[46, 58, 52][i]}
                    gap="0.75rem"
                    fade
                    pauseOnHover={false}
                    className="h-full"
                  >
                    {column.map((src, j) => (
                      <div
                        key={src}
                        className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl"
                      >
                        <Image
                          src={src}
                          alt=""
                          fill
                          sizes="240px"
                          className="object-cover"
                          priority={j < 2}
                          loading={j < 2 ? undefined : "eager"}
                        />
                      </div>
                    ))}
                  </Marquee>
                </Reveal>
              </div>
            ))}
          </div>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-black to-transparent"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black to-transparent"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 hidden w-40 bg-gradient-to-r from-black to-transparent lg:block"
          />
        </div>
      </div>

      <Reveal
        trigger="load"
        variant="fade"
        delay={1500}
        duration={1000}
        className="absolute bottom-8 left-6 hidden sm:left-10 lg:block lg:left-16 xl:left-24"
      >
        <Button href="#programs" variant="secondary" size="sm">
          Discover more
          <ArrowDown className="size-4 transition-transform duration-300 group-hover:translate-y-0.5" />
        </Button>
      </Reveal>
    </section>
  );
}
