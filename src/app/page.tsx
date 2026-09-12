import Link from "next/link";
import Image from "next/image";
import { ArrowDown, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { HOME_STATS } from "@/constants";
import {
  CountUp,
  Marquee,
  Parallax,
  Reveal,
  SplitText,
} from "@/components/motion";

// Three vertical rails in the hero. Middle one scrolls the other way.
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

const STRIP_TOP = [
  "/events/northstar_2026/ns26_01.jpg",
  "/events/scarlet_pitch2025/sp2025_02.jpg",
  "/events/image_carousel_pic3.jpg",
  "/events/clipxhealthtech_2026/clipxhealthtech_2026_01.jpg",
  "/events/northstar_2026/ns26_09.jpg",
  "/events/scarlet_pitch_2026/sp26_11.jpg",
  "/events/technova2025/tn2025_09.jpg",
  "/events/pizza.jpg",
];

const STRIP_BOTTOM = [
  "/events/contact_us_photo.jpg",
  "/events/northstar_2026/ns26_03.jpg",
  "/events/scarlet_pitch2025/sp2025_06.jpg",
  "/events/scarlet_pitch_2026/sp26_08.jpeg",
  "/events/women_in_vc2026/winvc_2026_01.JPG",
  "/events/startup_showcase2025/startup_showcase2025_hero.jpg",
  "/events/technova2025/tn2025_01.jpg",
  "/events/scarlet_pitch_2024/sp24_01.jpg",
];

const WHY_FEATURES = [
  {
    title: "Real Experience",
    description:
      "Work directly with startups, conduct due diligence, and participate in investment decisions.",
  },
  {
    title: "Expert Network",
    description:
      "Connect with industry professionals, successful entrepreneurs, and leading investors.",
  },
];

function StripPhoto({ src }: { src: string }) {
  return (
    <div className="relative h-52 w-[19.5rem] overflow-hidden rounded-2xl md:h-64 md:w-96">
      <Image
        src={src}
        alt=""
        fill
        sizes="(max-width: 768px) 312px, 384px"
        className="object-cover transition-transform duration-700 ease-out hover:scale-105"
      />
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage="/" variant="dark" />

      {/* Hero: full-bleed, pulled up under the transparent nav. */}
      <section className="relative -mt-20 overflow-hidden bg-black text-white">
        <div
          aria-hidden
          className="animate-orb pointer-events-none absolute -top-48 -left-48 size-[36rem] rounded-full bg-purple-600/40 blur-3xl"
        />
        <div
          aria-hidden
          className="animate-orb pointer-events-none absolute -right-24 -bottom-56 size-[32rem] rounded-full bg-purple-800/50 blur-3xl [animation-delay:-8s]"
        />

        <div className="relative grid min-h-[100dvh] lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)]">
          <div className="flex flex-col justify-center px-6 pt-28 pb-12 sm:px-10 lg:py-24 lg:pl-16 xl:pl-24">
            <h1 className="font-display text-[clamp(2.75rem,min(6.4vw,10vh),6.5rem)] leading-[0.95]">
              <SplitText
                text="Building the Future of Venture Capital"
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
              capital organization, connecting ambitious students with the
              startup ecosystem through hands-on experience and mentorship.
            </Reveal>
            <Reveal
              trigger="load"
              delay={850}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link
                href="/programs"
                className="group inline-flex items-center gap-3 rounded-full bg-purple-600 px-7 py-4 font-heading text-lg text-white transition-colors duration-300 hover:bg-purple-500"
              >
                Explore Programs
                <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center rounded-full border border-white/30 px-7 py-4 font-heading text-lg text-white transition-colors duration-300 hover:border-white hover:bg-white hover:text-black"
              >
                Learn More
              </Link>
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
          <a
            href="#stats"
            className="group inline-flex items-center gap-3 rounded-full border border-white/30 px-5 py-2.5 font-heading text-sm text-white transition-colors duration-300 hover:border-white hover:bg-white hover:text-black"
          >
            Discover more
            <ArrowDown className="size-4 transition-transform duration-300 group-hover:translate-y-0.5" />
          </a>
        </Reveal>
      </section>

      {/* Stats */}
      <section id="stats" className="px-6 py-20 md:px-12 lg:px-24 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-x-6 gap-y-12 border-t border-black/10 pt-12 lg:grid-cols-4 lg:gap-0">
            {HOME_STATS.map((stat, i) => (
              <Reveal
                key={stat.label}
                delay={i * 110}
                className="lg:border-l lg:border-black/10 lg:px-8 lg:first:border-l-0 lg:first:pl-0"
              >
                <div className="font-display text-5xl text-black sm:text-6xl md:text-7xl">
                  <CountUp value={stat.value} delay={i * 110} />
                </div>
                <p className="mt-4 max-w-[16rem] font-body text-purple-900/80">
                  {stat.label}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Photo strip */}
      <Reveal
        as="section"
        variant="fade"
        duration={1400}
        className="overflow-hidden pb-24 lg:pb-32"
      >
        <Marquee duration={75} pauseOnHover={false}>
          {STRIP_TOP.map((src) => (
            <StripPhoto key={src} src={src} />
          ))}
        </Marquee>
        <Marquee
          direction="right"
          duration={85}
          pauseOnHover={false}
          className="mt-4"
        >
          {STRIP_BOTTOM.map((src) => (
            <StripPhoto key={src} src={src} />
          ))}
        </Marquee>
      </Reveal>

      {/* Why Choose McGill Ventures */}
      <section className="relative overflow-hidden bg-purple-950 text-white">
        <div
          aria-hidden
          className="animate-orb pointer-events-none absolute -top-40 right-0 size-[34rem] rounded-full bg-purple-600/35 blur-3xl"
        />
        <div className="relative mx-auto grid max-w-7xl gap-16 px-6 py-24 md:px-12 lg:grid-cols-2 lg:gap-16 lg:px-24 lg:py-32">
          <div className="flex flex-col justify-center">
            <h2 className="font-display text-[clamp(2.25rem,4.5vw,4.25rem)] leading-[1]">
              <SplitText text="Why Choose McGill Ventures" />
            </h2>
            <Reveal
              as="p"
              delay={200}
              className="mt-8 max-w-xl font-body text-lg text-purple-100/85 md:text-xl"
            >
              Join Montreal&apos;s most dynamic student venture capital
              community. Gain real-world experience, build lasting connections,
              and develop the skills to shape the future of entrepreneurship.
            </Reveal>
            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              {WHY_FEATURES.map((feature, i) => (
                <Reveal
                  key={feature.title}
                  delay={350 + i * 120}
                  className="border-t border-white/15 pt-6"
                >
                  <h3 className="font-heading text-xl text-purple-200">
                    {feature.title}
                  </h3>
                  <p className="mt-3 font-body text-purple-300">
                    {feature.description}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="relative mx-auto aspect-[10/9] w-full max-w-[36rem] lg:self-center">
            <Parallax speed={0.06} className="absolute top-0 left-0 w-[70%]">
              <Reveal variant="clip" duration={1300}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                  <Image
                    src="/events/homeLanding.jpg"
                    alt="McGill Ventures Community Event"
                    fill
                    sizes="(max-width: 1024px) 70vw, 520px"
                    className="object-cover object-[75%_center]"
                  />
                </div>
              </Reveal>
            </Parallax>
            <Parallax
              speed={-0.05}
              className="absolute top-[26%] right-0 w-[44%]"
            >
              <Reveal variant="clip" delay={200} duration={1300}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl ring-8 ring-purple-950">
                  <Image
                    src="/events/scarlet_pitch_2026/sp26_07.jpeg"
                    alt=""
                    fill
                    sizes="(max-width: 1024px) 45vw, 330px"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            </Parallax>
            <Parallax
              speed={0.1}
              className="absolute top-[48%] left-[4%] w-[40%]"
            >
              <Reveal variant="clip" delay={350} duration={1300}>
                <div className="relative aspect-square overflow-hidden rounded-3xl ring-8 ring-purple-950">
                  <Image
                    src="/events/pizza.jpg"
                    alt=""
                    fill
                    sizes="(max-width: 1024px) 40vw, 290px"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            </Parallax>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
