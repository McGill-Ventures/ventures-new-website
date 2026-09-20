import { Reveal } from "@/components/motion";

const MISSION =
  "McGill Ventures educates and connects students to the venture capital and startup ecosystem in Canada and beyond";

/** Words light up one after another while the heading travels from the
 *  bottom of the screen to the middle, in % of its view timeline. */
const LIT_FROM = 10;
const LIT_TO = 46;

export function Manifesto() {
  const words = MISSION.split(" ");
  const step = (LIT_TO - LIT_FROM) / words.length;

  // Clip, not hidden: a hidden overflow is a scroll container and would
  // capture the heading's view timeline, so the words would never light up.
  return (
    <section className="bg-grain relative overflow-clip bg-purple-950 text-white">
      <div
        aria-hidden
        className="about-contour pointer-events-none absolute -inset-x-[20%] -inset-y-[10%] text-purple-200 opacity-[0.14]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-0 size-[34rem] rounded-full bg-purple-600/30 blur-3xl"
      />
      <div className="relative z-10 flex min-h-[100dvh] items-center px-6 py-24 md:px-12 lg:px-24">
        <div className="mx-auto w-full max-w-7xl">
          <h2 className="about-lit max-w-[22ch] font-display text-[clamp(2.25rem,5vw,4.75rem)] leading-[1.04] text-balance">
            {words.map((word, i) => (
              <span
                key={i}
                className="about-lit-word"
                style={{
                  animationRange: `cover ${LIT_FROM + i * step}% cover ${LIT_FROM + (i + 2.5) * step}%`,
                }}
              >
                {word}{" "}
              </span>
            ))}
          </h2>
          {/* Two paragraphs at a ~65 character measure, full strength against
              the contour lines behind them. */}
          <Reveal
            delay={150}
            className="mt-10 max-w-xl space-y-5 font-body text-lg text-purple-100 md:text-xl"
          >
            <p className="leading-[1.75]">
              With innovation accelerating across industries, global uncertainty
              rising and AI progressing at frightening speed, it has never
              mattered more to stay plugged into emerging innovation, build a
              multidisciplinary skill set and cultivate an antifragile mindset.
            </p>
            <p className="leading-[1.75]">
              Venture capital and startups run on these qualities, and they will
              matter in whatever field you choose, from finance to engineering
              and everything in between.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
