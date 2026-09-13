import { SplitText, Starfield } from "@/components/motion";
import { WhyReasons } from "@/components/home/WhyReasons";

export function Why() {
  return (
    <section className="bg-grain relative overflow-hidden bg-purple-950 text-white">
      <div
        aria-hidden
        className="animate-orb pointer-events-none absolute -top-40 right-0 size-[34rem] rounded-full bg-purple-600/35 blur-3xl"
      />
      <div
        aria-hidden
        className="animate-orb pointer-events-none absolute -bottom-56 -left-40 size-[38rem] rounded-full bg-fuchsia-700/20 blur-3xl [animation-delay:-11s] [animation-duration:22s]"
      />
      <Starfield
        count={110}
        comets={false}
        className="[mask-image:radial-gradient(120%_90%_at_20%_35%,#000_35%,transparent_75%)]"
      />
      <div className="relative z-10 flex min-h-[100dvh] items-center px-6 py-8 md:px-12 lg:px-24">
        <div className="mx-auto w-full max-w-7xl">
          <h2 className="section-heading">
            <SplitText text="Why McGill Ventures" />
          </h2>
          <div className="mt-10">
            <WhyReasons />
          </div>
        </div>
      </div>
    </section>
  );
}
