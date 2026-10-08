import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Instagram, Linkedin, Mail, MapPin } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ContactForm } from "@/components/ui/ContactForm/ContactForm";
import { Reveal, SplitText, Starfield } from "@/components/motion";

export const metadata: Metadata = {
  title: "Contact | McGill Ventures",
};

const EMAIL = "mcgillventuresclub@gmail.com";
const GROWTH_STUDIO_EMAIL = "hello.growthstudio@gmail.com";

const SOCIALS = [
  {
    label: "Instagram",
    handle: "@mcgillvc",
    href: "https://www.instagram.com/mcgillvc/",
    Icon: Instagram,
  },
  {
    label: "LinkedIn",
    handle: "McGill VC",
    href: "https://www.linkedin.com/company/mcgillvc/",
    Icon: Linkedin,
  },
];

const ROW = "border-t border-white/10 py-6";
const ROW_LABEL = "font-heading text-xs tracking-wider text-purple-300 uppercase";
const ROW_LINK =
  "inline-flex items-center gap-3 font-body text-lg text-white/85 transition-colors hover:text-white";

export default function Contact() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation currentPage="/contact" darkOver="#contact" />

      {/* Pulled up under the transparent header, so `-mt-20` tracks its height. */}
      <main id="contact" className="relative -mt-20 overflow-clip bg-black text-white">
        <section className="relative flex flex-col px-6 pt-[clamp(8rem,25.5dvh,16rem)] pb-16 md:px-12 lg:px-24">
          <div
            aria-hidden
            className="animate-orb pointer-events-none absolute -top-48 -left-48 size-[36rem] rounded-full bg-purple-600/40 blur-3xl"
          />
          <div
            aria-hidden
            className="animate-orb pointer-events-none absolute -right-24 -bottom-40 size-[32rem] rounded-full bg-purple-800/40 blur-3xl [animation-delay:-8s]"
          />
          <Starfield className="[mask-image:linear-gradient(to_bottom,#000_60%,transparent)]" />

          <div className="relative mx-auto w-full max-w-7xl">
            <h1 className="font-display text-[clamp(3rem,9vw,7.5rem)] leading-[0.95]">
              <SplitText text="Contact" trigger="load" delay={150} />
            </h1>
            <Reveal
              as="p"
              trigger="load"
              delay={450}
              className="mt-6 max-w-2xl font-body text-lg text-purple-100/75 md:text-xl"
            >
              Questions about the club, our programs or partnering with us.
            </Reveal>
          </div>
        </section>

        <section className="relative px-6 md:px-12 lg:px-24">
          <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:gap-24">
            <div>
              <h2 className="section-heading">
                <SplitText text="Write to us" />
              </h2>
              <Reveal delay={200} className="mt-10">
                <ContactForm />
              </Reveal>
            </div>

            <Reveal delay={150} className="lg:pt-3">
              <h2 className="sr-only">Contact details</h2>
              <div className={ROW}>
                <h3 className={ROW_LABEL}>Email</h3>
                <a href={`mailto:${EMAIL}`} className={`${ROW_LINK} mt-3 break-all`}>
                  <Mail aria-hidden className="size-5 shrink-0 text-purple-300" />
                  {EMAIL}
                </a>
              </div>

              <div className={ROW}>
                <h3 className={ROW_LABEL}>Address</h3>
                <address className="mt-3 flex items-start gap-3 font-body text-lg text-white/85 not-italic">
                  <MapPin aria-hidden className="mt-1 size-5 shrink-0 text-purple-300" />
                  <span>
                    McGill Ventures
                    <br />
                    1001 Sherbrooke St W
                    <br />
                    Montreal, QC H3A 1G5
                    <br />
                    Canada
                  </span>
                </address>
              </div>

              <div className={ROW}>
                <h3 className={ROW_LABEL}>Follow</h3>
                <ul className="mt-3 space-y-3">
                  {SOCIALS.map(({ label, handle, href, Icon }) => (
                    <li key={label}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={ROW_LINK}
                      >
                        <Icon aria-hidden className="size-5 shrink-0 text-purple-300" />
                        <span>
                          <span className="sr-only">{label}: </span>
                          {handle}
                          <span className="sr-only"> (opens in a new tab)</span>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`${ROW} border-b`}>
                <h3 className={ROW_LABEL}>Founders</h3>
                <p className="mt-3 max-w-md font-body text-lg text-purple-100/75">
                  Founder looking to get investor-ready? Growth Studio is our free consulting
                  studio for pre-seed and seed founders.
                </p>
                <a href={`mailto:${GROWTH_STUDIO_EMAIL}`} className={`${ROW_LINK} mt-4 break-all`}>
                  <Mail aria-hidden className="size-5 shrink-0 text-purple-300" />
                  {GROWTH_STUDIO_EMAIL}
                </a>
                <Link
                  href="/growth-studio"
                  className="group mt-4 flex w-fit items-center gap-2 font-heading text-lg text-purple-300 transition-colors hover:text-white"
                >
                  Visit Growth Studio
                  <ArrowRight
                    aria-hidden
                    className="size-5 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="mx-auto mt-16 max-w-7xl lg:mt-20">
            <Reveal as="figure" variant="clip" duration={1300} className="aspect-[4/3] md:aspect-[16/9]">
              <div className="group relative h-full overflow-hidden bg-purple-950">
                <Image
                  src="/events/contact_us_photo.jpg"
                  alt="The McGill Ventures community after a fireside chat"
                  fill
                  sizes="(max-width: 1279px) 100vw, 1280px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  style={{ objectPosition: "50% 55%" }}
                />
                {/* Fades into the page's black so the photo runs straight into the footer heading. */}
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent"
                />
                <figcaption className="absolute bottom-0 left-0 px-6 pb-6 font-heading text-sm tracking-wider text-purple-300 uppercase md:px-8 md:pb-8">
                  The McGill Ventures community
                </figcaption>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer hideContactCta />
    </div>
  );
}
