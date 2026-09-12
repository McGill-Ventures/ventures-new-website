import Link from "next/link";
import Image from "next/image";
import { ArrowDown, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Marquee, Parallax, Reveal, SplitText } from "@/components/motion";

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

const PROGRAMS = [
  {
    name: "Analyst Program",
    href: "/programs",
    external: false,
    photo: "/events/image_carousel_pic2.jpg",
    blurb:
      "Weekly classes taught by leading VCs. Deal flow, due diligence, valuation and investment memos, with founders pitching directly to analysts.",
  },
  {
    name: "McGill Venture Fund",
    href: "/fund",
    external: false,
    photo: "/events/scarlet_pitch_2026/sp26_02.jpg",
    blurb:
      "A student-led fund backed by McGill alumni and faculty, investing in pre-seed startups from the McGill community.",
  },
  {
    name: "Growth Studio",
    href: "/growth-studio",
    external: false,
    photo: "/events/startup_showcase2025/startup_showcase2025_03.jpg",
    blurb:
      "Startup consulting that gets pre-seed and seed founders investor-ready: pitch decks, investor CRM, go-to-market and AI adoption.",
  },
  {
    name: "HealthTech Innovation Lab",
    href: "/programs",
    external: false,
    photo: "/events/clipxhealthtech_2026/clipxhealthtech_2026_05.jpg",
    blurb:
      "A selective fellowship where interdisciplinary teams tackle real challenges from health ventures and clinical innovators.",
  },
  {
    name: "Project Atlas",
    href: "https://www.project-atlas.ca/",
    external: true,
    photo: "/events/technova2025/tn2025_04.jpg",
    blurb:
      "Montreal's young builders, connected to the wider Canadian ecosystem through year-round events and a 30-person cohort sent to Toronto Tech Week.",
  },
];

const ALUMNI = [
  {
    // Placeholder card. Drop the real headshot into /public/headshots/alumni/
    // and swap the gradient block below for an <Image fill />.
    initial: "A",
    name: "Person A",
    role: "Founder, General Magic",
    detail: "Backed by a16z.",
  },
  {
    initial: "B",
    name: "Person B",
    role: "Co-founder, GrayPass",
    detail: "Y Combinator, F26 batch.",
  },
];

// Placeholder pills. Swap each for the firm's logo once we have the assets.
const FIRMS = Array.from(
  { length: 8 },
  (_, i) => `Firm ${String.fromCharCode(65 + i)}`,
);

type StripItem = { src: string; caption?: string };

const STRIP_TOP: StripItem[] = [
  { src: "/events/northstar_2026/ns26_01.jpg", caption: "North Star 2026" },
  {
    src: "/events/scarlet_pitch2025/sp2025_02.jpg",
    caption: "Scarlet Pitch 2025",
  },
  { src: "/events/image_carousel_pic3.jpg" },
  {
    src: "/events/clipxhealthtech_2026/clipxhealthtech_2026_01.jpg",
    caption: "The Clip x HealthTech 2026",
  },
  { src: "/events/northstar_2026/ns26_09.jpg", caption: "North Star 2026" },
  {
    src: "/events/scarlet_pitch_2026/sp26_11.jpg",
    caption: "Scarlet Pitch 2026",
  },
  { src: "/events/technova2025/tn2025_09.jpg", caption: "TechNova 2025" },
  { src: "/events/pizza.jpg" },
];

const STRIP_BOTTOM: StripItem[] = [
  { src: "/events/contact_us_photo.jpg" },
  { src: "/events/northstar_2026/ns26_03.jpg", caption: "North Star 2026" },
  {
    src: "/events/scarlet_pitch2025/sp2025_06.jpg",
    caption: "Scarlet Pitch 2025",
  },
  {
    src: "/events/scarlet_pitch_2026/sp26_08.jpeg",
    caption: "Scarlet Pitch 2026",
  },
  {
    src: "/events/women_in_vc2026/winvc_2026_01.JPG",
    caption: "Women in VC 2026",
  },
  {
    src: "/events/startup_showcase2025/startup_showcase2025_hero.jpg",
    caption: "Startup Showcase 2025",
  },
  { src: "/events/technova2025/tn2025_01.jpg", caption: "TechNova 2025" },
  {
    src: "/events/scarlet_pitch_2024/sp24_01.jpg",
    caption: "Scarlet Pitch 2024",
  },
];

const WHY_FEATURES = [
  {
    title: "Learn from investors",
    description:
      "Weekly Analyst Program classes taught by practising VCs, with founder pitches and real cases.",
  },
  {
    title: "Work on real deals",
    description:
      "Source and diligence startups for the Venture Fund, or advise founders through Growth Studio client projects.",
  },
  {
    title: "Build the ecosystem",
    description:
      "18 events last year, from North Star to Scarlet Pitch, plus a builders' cohort at Toronto Tech Week with Project Atlas.",
  },
];

const SECTION_HEADING =
  "font-display text-[clamp(2.25rem,4.5vw,4.25rem)] leading-[1] text-balance";

function StripPhoto({ src, caption }: StripItem) {
  return (
    <div className="relative h-40 w-60 overflow-hidden rounded-2xl md:h-48 md:w-72">
      <Image
        src={src}
        alt=""
        fill
        sizes="(max-width: 768px) 240px, 288px"
        className="object-cover transition-transform duration-700 ease-out hover:scale-105"
      />
      {caption && (
        <>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent"
          />
          <span className="pointer-events-none absolute bottom-3 left-4 font-heading text-sm text-white">
            {caption}
          </span>
        </>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage="/" darkOver="#hero" />

      {/* Hero: full-bleed, pulled up under the transparent nav. */}
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
            href="#programs"
            className="group inline-flex items-center gap-3 rounded-full border border-white/30 px-5 py-2.5 font-heading text-sm text-white transition-colors duration-300 hover:border-white hover:bg-white hover:text-black"
          >
            Discover more
            <ArrowDown className="size-4 transition-transform duration-300 group-hover:translate-y-0.5" />
          </a>
        </Reveal>
      </section>

      {/* Programs. The hero's "Discover more" anchor lands here; the negative
          scroll margin cancels the global scroll-padding so the hero is fully
          out of view. */}
      <section
        id="programs"
        className="flex min-h-[100dvh] -scroll-mt-20 items-center px-6 py-16 md:px-12 lg:px-24"
      >
        <div className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-20">
          <div className="lg:self-center">
            <h2 className={`${SECTION_HEADING} text-black`}>
              <SplitText text="Five programs, from VC to STEM" />
            </h2>
            <Reveal
              as="p"
              delay={200}
              className="mt-6 max-w-md font-body text-lg text-purple-900/75 md:text-xl"
            >
              Weekly classes, a student-led fund, a startup consulting studio, a
              health tech lab and a builders&apos; community. Pick your entry
              point.
            </Reveal>
          </div>

          <ul className="border-b border-black/10 lg:self-center">
            {PROGRAMS.map((program, i) => (
              <Reveal
                as="li"
                key={program.name}
                delay={i * 90}
                className="border-t border-black/10"
              >
                <Link
                  href={program.href}
                  {...(program.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group flex items-center gap-5 py-3.5 lg:py-4"
                >
                  <div className="relative size-14 shrink-0 overflow-hidden rounded-xl md:size-16">
                    <Image
                      src={program.photo}
                      alt=""
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-xl text-black md:text-2xl">
                      {program.name}
                    </h3>
                    <p className="mt-1 font-body text-sm text-purple-900/70">
                      {program.blurb}
                    </p>
                  </div>
                  <ArrowRight className="size-5 shrink-0 text-purple-700 transition-transform duration-300 group-hover:translate-x-1" />
                  {program.external && (
                    <span className="sr-only">(opens in a new tab)</span>
                  )}
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Events */}
      <section className="flex min-h-[100dvh] flex-col justify-center overflow-hidden bg-black py-14 text-white">
        <div className="px-6 md:px-12 lg:px-24">
          <div className="mx-auto flex max-w-7xl flex-wrap items-end justify-between gap-x-12 gap-y-6">
            <div>
              <h2 className={SECTION_HEADING}>
                <SplitText text="18 events last year" />
              </h2>
              <Reveal
                as="p"
                delay={200}
                className="mt-4 max-w-xl font-body text-lg text-purple-100/75 md:text-xl"
              >
                North Star, Scarlet Pitch, Women in VC, Startup Showcase and
                more.
              </Reveal>
            </div>
            <Reveal delay={300}>
              <Link
                href="/events"
                className="group inline-flex items-center gap-3 rounded-full border border-white/30 px-6 py-3 font-heading text-base text-white transition-colors duration-300 hover:border-white hover:bg-white hover:text-black"
              >
                See all events
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
        </div>

        <Reveal variant="fade" duration={1400} className="mt-10 lg:mt-12">
          <Marquee duration={75} pauseOnHover={false}>
            {STRIP_TOP.map((photo) => (
              <StripPhoto key={photo.src} {...photo} />
            ))}
          </Marquee>
          <Marquee
            direction="right"
            duration={85}
            pauseOnHover={false}
            className="mt-4"
          >
            {STRIP_BOTTOM.map((photo) => (
              <StripPhoto key={photo.src} {...photo} />
            ))}
          </Marquee>
        </Reveal>
      </section>

      {/* Why McGill Ventures */}
      <section className="relative overflow-hidden bg-purple-950 text-white">
        <div
          aria-hidden
          className="animate-orb pointer-events-none absolute -top-40 right-0 size-[34rem] rounded-full bg-purple-600/35 blur-3xl"
        />
        <div className="relative flex min-h-[100dvh] items-center px-6 py-10 md:px-12 lg:px-24">
          <div className="mx-auto grid w-full max-w-7xl gap-14 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center">
              <h2 className={SECTION_HEADING}>
                <SplitText text="Why McGill Ventures" />
              </h2>
              <Reveal
                as="p"
                delay={200}
                className="mt-6 max-w-xl font-body text-lg text-purple-100/85 md:text-xl"
              >
                McGill Ventures educates and connects students to the venture
                capital and startup ecosystem in Canada and beyond.
              </Reveal>
              {/* Stacked, not columned: three columns inside this half-width block
                squeeze each blurb to five ragged lines. */}
              <div className="mt-8 grid gap-5">
                {WHY_FEATURES.map((feature, i) => (
                  <Reveal
                    key={feature.title}
                    delay={350 + i * 120}
                    className="border-t border-white/15 pt-4"
                  >
                    <h3 className="font-heading text-xl text-purple-200">
                      {feature.title}
                    </h3>
                    <p className="mt-2 font-body text-purple-300">
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
        </div>
      </section>

      {/* Outcomes: credibility strip, deliberately compact. */}
      <section className="flex min-h-[100dvh] items-center px-6 py-16 md:px-12 lg:px-24">
        <div className="mx-auto w-full max-w-7xl">
          <h2 className={`${SECTION_HEADING} max-w-3xl text-black`}>
            <SplitText text="Where our members go" />
          </h2>
          <Reveal
            as="p"
            delay={200}
            className="mt-6 max-w-2xl font-body text-lg text-purple-900/75 md:text-xl"
          >
            Team members go on to venture capital, startups and traditional
            careers. Two founders from our team each raised millions in the past
            year.
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:max-w-4xl">
            {ALUMNI.map((person, i) => (
              <Reveal
                as="article"
                key={person.name}
                delay={350 + i * 120}
                className="flex items-center gap-5 rounded-2xl border border-black/10 p-5"
              >
                {/* Headshot placeholder. Replace this block with an <Image fill /> once we have the photo. */}
                <div className="flex aspect-[4/5] w-24 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-purple-900 font-display text-4xl text-white">
                  {person.initial}
                </div>
                <div>
                  <h3 className="font-display text-2xl text-black">
                    {person.name}
                  </h3>
                  <p className="mt-2 font-heading text-purple-700">
                    {person.role}
                  </p>
                  <p className="mt-1 font-body text-sm text-purple-900/70">
                    {person.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={600} className="mt-12 border-t border-black/10 pt-8">
            <p className="font-heading text-sm text-purple-900/70">
              Members and alumni have landed at
            </p>
            <ul className="mt-5 flex flex-wrap gap-3">
              {FIRMS.map((firm) => (
                <li
                  key={firm}
                  className="rounded-full border border-black/15 px-5 py-2 font-heading text-sm text-purple-900/80"
                >
                  {firm}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <Footer fullHeight />
    </div>
  );
}
