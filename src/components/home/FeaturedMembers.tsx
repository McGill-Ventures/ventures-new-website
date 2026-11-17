import Image from "next/image";
import { Quote } from "lucide-react";
import { Reveal, SplitText } from "@/components/motion";
import { at2x } from "@/lib/photoSizes";
import { cn } from "@/lib/utils";

const FOUNDERS = [
  {
    name: "Anthony Azrak",
    role: "Founder & CEO",
    company: "General Magic",
    site: "https://generalmagic.inc/",
    logo: <GeneralMagicLogo />,
    photo: "/headshots/founders/anthony_azrak.jpg",
    linkedin: "https://www.linkedin.com/in/anthony-azrak/",
    quote:
      "Sitting on the investor side of the table at MVC taught me what great founders do differently, and I've been trying to live up to it ever since.",
    news: {
      source: "BetaKit",
      title: "General Magic raises $7.2M USD, led by Radical Ventures",
      href: "https://betakit.com/a16z-speedrun-alum-general-magic-secures-7-2-million-usd-to-make-calling-your-insurance-company-less-of-a-slog/",
    },
    // BetaKit calls General Magic an a16z speedrun alum. Radical Ventures led its raise.
    backerVerb: "Alum of",
    backer: {
      src: "/logos/companies/a16z_speedrun.png",
      width: 600,
      height: 83,
      label: "a16z speedrun",
    } as const,
  },
  {
    name: "Aditya Ranjan",
    // YC's company page lists Aditya as Founder/COO.
    role: "Founder & COO",
    company: "GrayPass",
    site: "https://graypass.com/",
    logo: <GrayPassLogo />,
    photo: "/headshots/founders/aditya_ranjan.jpg",
    linkedin: "https://www.linkedin.com/in/ad1tyaranjan/",
    quote:
      "McGill's entrepreneurial culture can feel quite scattered, and MVC does a great job of bringing the builders and ambitious people on campus into one place. It makes the startup scene feel much more solidified, personal, and like an actual community.",
    news: {
      source: "LinkedIn",
      title: "Aditya on GrayPass and Y Combinator",
      href: "https://www.linkedin.com/feed/update/urn:li:activity:7521322611729932288/",
    },
    backerVerb: "Backed by",
    // Inline: the only bitmap of this mark is 69px square and visibly blurs.
    backer: { mark: "yc" as const, label: "Y Combinator" },
  },
];

function YCombinatorMark() {
  return (
    <svg viewBox="0 0 100 100" role="img" aria-label="Y Combinator" className="size-6 rounded-[4px]">
      <rect width="100" height="100" fill="#FC651E" />
      <path d="M29.7 25 L50 48.5 L70.3 25 M50 48.5 L50 73.5" fill="none" stroke="#fff" strokeWidth="7.4" />
    </svg>
  );
}

/** GrayPass's own mark (graypass.com/logo.svg), set beside its name as on their site. */
function GrayPassLogo() {
  return (
    // Hidden: the link around it carries the company name for screen readers.
    <span aria-hidden className="flex items-center gap-1.5 text-[#242323]">
      <svg viewBox="0 0 224 224" aria-hidden className="size-6">
        <path
          d="M110 25C159 18 204 44 210 83C218 126 189 150 153 164C132 173 112 184 103 206C100 215 88 215 88 203C89 185 83 178 68 176C32 172 13 153 13 124C13 80 52 34 110 25Z"
          fill="#ef334f"
        />
        <path
          d="M109 42C150 35 180 51 186 77C192 105 173 118 146 121C127 123 115 128 105 142C93 158 78 164 60 158C38 152 30 138 31 120C32 83 63 50 109 42Z"
          fill="#242323"
        />
      </svg>
      <span className="font-sans text-lg font-semibold tracking-[-0.035em]">GrayPass</span>
    </span>
  );
}

/** General Magic's white lockup from their site, darkened for the light card. */
function GeneralMagicLogo() {
  return (
    <Image
      src="/logos/companies/general_magic.png"
      alt=""
      width={1866}
      height={246}
      className="h-[1.125rem] w-auto object-contain brightness-0"
    />
  );
}

/** Two founder spreads, portrait and quote side by side, alternating sides. */
export function FeaturedMembers() {
  return (
    <section className="bg-white px-6 py-20 text-purple-950 md:px-12 md:py-28 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="section-heading text-black">
          <SplitText text="Featured members" />
        </h2>
        <Reveal
          as="p"
          delay={200}
          className="mt-6 max-w-xl font-body text-lg text-purple-900/75 md:text-xl"
        >
          Our alumni are ambitious builders, backed by some of the best
          accelerators and funds in the world.
        </Reveal>

        <div className="mt-12 space-y-6 md:mt-16 md:space-y-8">
          {FOUNDERS.map((founder, i) => (
            <Reveal key={founder.name} delay={200}>
              <article
                className={cn(
                  "group grid overflow-hidden rounded-3xl bg-purple-50 ring-1 ring-purple-950/5 ring-inset",
                  i % 2 === 0
                    ? "md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]"
                    : "md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]",
                )}
              >
                <div
                  className={cn(
                    "relative aspect-[4/3] overflow-hidden md:aspect-auto md:min-h-[28rem]",
                    i % 2 === 1 && "md:order-last",
                  )}
                >
                  <Image
                    src={founder.photo}
                    alt={founder.name}
                    fill
                    sizes={at2x("(max-width: 767px) 100vw, 40vw")}
                    className="object-cover object-[50%_30%] grayscale transition-[scale] duration-700 ease-out group-hover:scale-[1.03] motion-reduce:transition-none"
                  />
                  <div className="absolute top-4 left-4 flex h-10 items-center gap-2.5 rounded-xl bg-white/90 px-3.5 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.5)] backdrop-blur-md">
                    <span className="font-heading text-xs text-purple-900/70">{founder.backerVerb}</span>
                    {"mark" in founder.backer ? (
                      <YCombinatorMark />
                    ) : (
                      <Image
                        src={founder.backer.src}
                        alt={founder.backer.label}
                        width={founder.backer.width}
                        height={founder.backer.height}
                        className="h-3.5 w-auto object-contain brightness-0"
                      />
                    )}
                  </div>
                </div>

                <div className="flex flex-col p-6 md:p-10 lg:p-12">
                  <figure className="flex flex-1 flex-col">
                    <Quote aria-hidden className="size-9 fill-purple-300 text-purple-300" />
                    <blockquote className="mt-5 font-display text-xl leading-snug text-purple-950 md:text-2xl lg:text-[1.75rem]">
                      {founder.quote}
                    </blockquote>

                    <figcaption className="mt-8 md:mt-auto md:pt-10">
                      <h3 className="font-display text-xl leading-tight">
                        <a
                          href={founder.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-950 underline-offset-4 hover:underline"
                        >
                          {founder.name}
                          <span className="sr-only"> on LinkedIn (opens in a new tab)</span>
                        </a>
                      </h3>
                      <p className="mt-2 flex flex-wrap items-center gap-x-2.5 gap-y-1 font-body text-purple-900/70">
                        {founder.role}
                        <span aria-hidden>at</span>
                        <a
                          href={founder.site}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center rounded-md transition-opacity duration-300 hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-500"
                        >
                          {founder.logo}
                          <span className="sr-only">at {founder.company} (opens its website in a new tab)</span>
                        </a>
                      </p>
                    </figcaption>
                  </figure>

                  <p className="mt-6 border-t border-purple-950/10 pt-5 font-body text-sm text-purple-900/70">
                    {founder.news.source}:{" "}
                    <a
                      href={founder.news.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-heading text-purple-950 underline decoration-purple-300 underline-offset-4 transition-colors duration-300 hover:decoration-purple-700"
                    >
                      {founder.news.title}
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
