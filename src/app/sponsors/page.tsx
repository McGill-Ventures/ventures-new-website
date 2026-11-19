import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Reveal, SplitText } from "@/components/motion";
import { at2x } from "@/lib/photoSizes";

import bdcLogo from "./bdc.png";
import eyLogo from "./ey.png";
import deloitteLogo from "./Deloitte-Black-Logo.png";
import oslerLogo from "./osler.png";
import investissementQuebecLogo from "./investissement_quebec.png";
import nationgraphLogo from "./nationgraph.png";
import generalMagicLogo from "./general_magic.png";
import gowlingLogo from "./gowling.png";
import panacheVenturesLogo from "./panache_ventures.png";
import inoviaLogo from "./inovia.png";
import dobsonCentreLogo from "./dobson_centre.png";
import standupVenturesLogo from "./standup_ventures.png";
import polyfinancesLogo from "./polyfinances.png";
import torontoTechWeekLogo from "./toronto_tech_week.png";
import nextAILogo from "./next_ai.png";
import frontRowVenturesLogo from "./front_row_ventures.png";
import realVenturesLogo from "./realventures.png";
import cycleCapitalLogo from "./cycle_capital.png";
import d3Logo from "./d3.png";
import laBaseHECLogo from "./la_base_hec.png";
import betaKitLogo from "./beta_kit.png";
import diagramVenturesLogo from "./diagram_ventures.png";
import espaceCDPQLogo from "./escape_cdpq.png";
import brightsparkLogo from "./brightspark.png";
import axLogo from "./ax.png";
import elanchTechLogo from "./elanch_tech.png";
import mcgillEngineLogo from "./mcgill_engine.png";
import theClipLogo from "./the_clip.png";
import amiralVenturesLogo from "./amiral_ventures.png";
import northStarLogo from "./north_star.png";
import finchlyVenturesLogo from "./finchley_ventures.png";
import cdlLogo from "./cdl.png";
import zuLogo from "./zu.png";
import cvcaLogo from "./cvca.png";
import startupfestLogo from "./startupfest.png";
import claudeBuilderClubLogo from "./claude_builder_club.png";
import graphiteVenturesLogo from "./graphite_ventures.png";
import ascentLogo from "./ascent.png";
import borealVenturesLogo from "./boreal_ventures.png";
import mayoClinicLogo from "./mayo_clinic.png";
import perplexityLogo from "./perplexity.png";
import penderVenturesLogo from "./pender_ventures.png";
import blueVisionCapitalLogo from "./blue_vision_capital.png";
import aqcCapitalLogo from "./aqc_capital.png";
import telusLogo from "./telus.png";
import triptyqCapitalLogo from "./triptyq_capital.png";

export const metadata: Metadata = {
  title: "Sponsors | McGill Ventures",
};

type Logo = { src: StaticImageData; alt: string; href: string };

const SPONSORS: Logo[] = [
  { src: bdcLogo, alt: "BDC", href: "https://www.bdc.ca" },
  { src: eyLogo, alt: "EY", href: "https://www.ey.com" },
  { src: oslerLogo, alt: "Osler", href: "https://www.osler.com" },
];

const PARTNERS: Logo[] = [
  { src: nationgraphLogo, alt: "Nation Graph", href: "https://www.nationgraph.com/" },
  { src: generalMagicLogo, alt: "General Magic", href: "https://generalmagic.inc/" },
  { src: gowlingLogo, alt: "Gowling WLG", href: "https://gowlingwlg.com/en" },
  { src: panacheVenturesLogo, alt: "Panache Ventures", href: "https://www.panache.vc" },
  { src: inoviaLogo, alt: "Inovia", href: "https://inovia.vc" },
  { src: dobsonCentreLogo, alt: "McGill Dobson Centre", href: "https://www.mcgill.ca/dobson" },
  { src: standupVenturesLogo, alt: "Standup Ventures", href: "https://www.standupvc.com/" },
  { src: polyfinancesLogo, alt: "Polyfinances", href: "https://www.polyfinances.ca/en" },
  { src: torontoTechWeekLogo, alt: "Toronto Tech Week", href: "https://www.torontotechweek.com" },
  { src: nextAILogo, alt: "Next AI", href: "https://www.nextcanada.com/next-ai" },
  { src: frontRowVenturesLogo, alt: "Front Row Ventures", href: "https://frontrow.ventures" },
  { src: realVenturesLogo, alt: "Real Ventures", href: "https://realventures.com" },
  { src: cycleCapitalLogo, alt: "Cycle Momentum", href: "https://cyclemomentum.com" },
  { src: d3Logo, alt: "D3", href: "https://d3.ventures" },
  { src: laBaseHECLogo, alt: "La Base HEC", href: "https://labase.hec.ca" },
  { src: betaKitLogo, alt: "BetaKit", href: "https://betakit.com" },
  { src: diagramVenturesLogo, alt: "Diagram Ventures", href: "https://diagram.ca" },
  { src: espaceCDPQLogo, alt: "Espace CDPQ", href: "https://www.cdpq.com" },
  { src: brightsparkLogo, alt: "Brightspark", href: "https://www.brightspark.com" },
  { src: axLogo, alt: "AX", href: "https://ax.co" },
  { src: elanchTechLogo, alt: "Elanch Tech", href: "https://www.elantech.co/home" },
  { src: mcgillEngineLogo, alt: "McGill Engine", href: "https://mcgillengine.com" },
  { src: theClipLogo, alt: "The Clip", href: "https://theclip.ca" },
  { src: amiralVenturesLogo, alt: "Amiral Ventures", href: "https://amiral.ventures" },
  { src: northStarLogo, alt: "North Star", href: "https://northstar.vc" },
  { src: finchlyVenturesLogo, alt: "Finchly Ventures", href: "https://finchly.com" },
  { src: cdlLogo, alt: "CDL", href: "https://creativedestructionlab.com" },
  { src: zuLogo, alt: "Zu", href: "https://zu.com" },
  { src: cvcaLogo, alt: "CVCA", href: "https://www.cvca.ca" },
  { src: startupfestLogo, alt: "Startupfest", href: "https://www.startupfest.com" },
  { src: claudeBuilderClubLogo, alt: "Claude Builder Club", href: "https://www.claudebuildersmcgill.ca/" },
  { src: graphiteVenturesLogo, alt: "Graphite Ventures", href: "https://graphitevc.com/" },
  { src: investissementQuebecLogo, alt: "Investissement Québec", href: "https://www.investquebec.com/fr" },
];

const PAST: Logo[] = [
  { src: ascentLogo, alt: "Ascent by McMillan", href: "https://www.mcmillan.ca" },
  { src: borealVenturesLogo, alt: "Boreal Ventures", href: "https://boreal.vc/" },
  { src: mayoClinicLogo, alt: "Mayo Clinic", href: "https://www.mayoclinic.org" },
  { src: perplexityLogo, alt: "Perplexity", href: "https://www.perplexity.ai/" },
  { src: penderVenturesLogo, alt: "Pender Ventures", href: "https://penderventures.com" },
  { src: blueVisionCapitalLogo, alt: "Blue Vision Capital", href: "https://bluevisioncapital.com" },
  { src: aqcCapitalLogo, alt: "AQC Capital", href: "https://aqccapital.com" },
  { src: telusLogo, alt: "Telus", href: "https://www.telus.com" },
  { src: triptyqCapitalLogo, alt: "Triptyq Capital", href: "https://triptyqcapital.com" },
];

const BENEFITS = [
  {
    title: "Hire top talent",
    description:
      "Meet McGill's brightest students across business, engineering and science for internships and full-time roles.",
  },
  {
    title: "See startups first",
    description:
      "Get early access to student startups and new technology coming out of McGill's entrepreneurship ecosystem.",
  },
  {
    title: "Be seen by builders",
    description:
      "Put your name in front of Montreal's entrepreneurial community at our events, workshops and online.",
  },
];

const EMAIL = "mcgillventuresclub@gmail.com";

const COLUMN = "px-6 md:px-12 lg:px-24";

const byName = (a: Logo, b: Logo) => a.alt.localeCompare(b.alt);

const DELOITTE: Logo = { src: deloitteLogo, alt: "Deloitte", href: "https://www.deloitte.com" };

const CARD =
  "group block rounded-2xl bg-white ring-1 ring-purple-950/5 transition-[box-shadow,translate] duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-24px_rgba(59,7,100,0.35)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-500 motion-reduce:transition-none";

function SponsorCard({ logo }: { logo: Logo }) {
  return (
    <a href={logo.href} target="_blank" rel="noopener noreferrer" className={CARD}>
      <div className="flex aspect-[16/9] items-center justify-center p-10 sm:aspect-[4/3]">
        <Image src={logo.src} alt={logo.alt} sizes="240px" className="max-h-24 w-auto max-w-[70%] object-contain" />
      </div>
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

function NameIndex({ logos, quiet = false }: { logos: Logo[]; quiet?: boolean }) {
  return (
    <ul className="grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
      {[...logos].sort(byName).map((logo) => (
        <li key={logo.alt} className="border-t border-purple-950/10">
          <a
            href={logo.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex min-h-16 items-center justify-between gap-4 py-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500"
          >
            <span
              className={`font-display leading-tight transition-colors duration-300 group-hover:text-purple-700 ${
                quiet ? "text-lg text-purple-950/55 md:text-xl" : "text-xl md:text-2xl"
              }`}
            >
              {logo.alt}
              <span className="sr-only"> (opens in a new tab)</span>
            </span>
            <Image
              src={logo.src}
              alt=""
              sizes="64px"
              className="h-9 w-auto max-w-16 shrink-0 object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
            />
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function Sponsors() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage="/sponsors" />

      <main className="text-purple-950">
        <section className="relative -mt-20 flex min-h-[100dvh] items-end overflow-hidden bg-black text-white">
          <Image
            src="/community/members_group.jpg"
            alt="McGill Ventures members together"
            fill
            priority
            sizes={at2x("(max-aspect-ratio: 3/2) 150vh, 100vw")}
            className="object-cover object-[50%_30%]"
          />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/30" />
          <div className={`${COLUMN} relative w-full pb-16 lg:pb-24`}>
            <div className="mx-auto max-w-7xl">
              <h1 className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.95]">
                <SplitText text="Our sponsors" trigger="load" delay={150} />
              </h1>
              <Reveal
                as="p"
                trigger="load"
                delay={500}
                className="mt-6 max-w-2xl font-body text-lg text-pretty text-white/80 md:text-xl"
              >
                Meet the partners who support McGill Ventures and help us build the future of student
                entrepreneurship.
              </Reveal>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="sponsors-title"
          className={`${COLUMN} bg-[color-mix(in_oklab,var(--color-purple-50)_60%,white)] py-24 md:py-32`}
        >
          <div className="mx-auto max-w-7xl">
            <h2 id="sponsors-title" className="section-heading">
              <SplitText text="Top sponsors" />
            </h2>
            <Reveal className="mt-12 md:mt-16">
              <a href={DELOITTE.href} target="_blank" rel="noopener noreferrer" className={CARD}>
                <div className="flex aspect-[16/9] items-center justify-center p-10 sm:aspect-auto sm:h-80">
                  <Image
                    src={DELOITTE.src}
                    alt={DELOITTE.alt}
                    sizes="360px"
                    className="max-h-40 w-auto max-w-[70%] object-contain"
                  />
                </div>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </Reveal>
            <ul className="mt-6 grid gap-6 sm:grid-cols-3">
              {SPONSORS.map((logo, i) => (
                <Reveal as="li" key={logo.alt} delay={120 + i * 100}>
                  <SponsorCard logo={logo} />
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        <section className={`${COLUMN} py-24 md:py-32`}>
          <div className="mx-auto max-w-7xl">
            <h2 className="section-heading">
              <SplitText text="Partners" />
            </h2>
            <Reveal className="mt-12 md:mt-16">
              <NameIndex logos={PARTNERS} />
            </Reveal>

            <h2 className="mt-24 font-display text-3xl md:mt-32 md:text-4xl">Past sponsors and partners</h2>
            <Reveal className="mt-8 md:mt-10">
              <NameIndex logos={PAST} quiet />
            </Reveal>
          </div>
        </section>

        <section className={`${COLUMN} bg-grain relative overflow-clip bg-purple-950 py-28 text-white md:py-40`}>
          <div
            aria-hidden
            className="pointer-events-none absolute -top-40 -left-40 size-[38rem] rounded-full bg-purple-600/35 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-40 -bottom-56 size-[34rem] rounded-full bg-fuchsia-700/20 blur-3xl"
          />
          <div className="relative z-10 mx-auto grid max-w-7xl gap-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-24">
            <div className="lg:sticky lg:top-32 lg:self-start">
              <h2 className="section-heading">
                <SplitText text="Partner with us" />
              </h2>
              <Reveal
                as="p"
                delay={200}
                className="mt-6 max-w-md font-body text-lg text-pretty text-purple-100/80 md:text-xl"
              >
                Reach McGill&apos;s most ambitious students, and the startups they build, all year
                round.
              </Reveal>
              <Reveal delay={300} className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 rounded-xl bg-white px-7 py-4 font-heading text-lg text-purple-950 transition-colors duration-300 hover:bg-purple-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-300"
                >
                  Become a sponsor
                  <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <a
                  href={`mailto:${EMAIL}?subject=${encodeURIComponent("Sponsorship")}`}
                  className="font-heading text-purple-100 underline decoration-purple-300/50 underline-offset-4 transition-colors hover:text-white hover:decoration-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-300"
                >
                  {EMAIL}
                </a>
              </Reveal>
            </div>

            <ul className="border-b border-white/15">
              {BENEFITS.map((benefit, i) => (
                <Reveal
                  as="li"
                  key={benefit.title}
                  delay={i * 120}
                  className="border-t border-white/15 py-8 md:py-10"
                >
                  <h3 className="font-display text-3xl leading-tight md:text-4xl">{benefit.title}</h3>
                  <p className="mt-3 max-w-lg font-body text-lg text-purple-100/75">{benefit.description}</p>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
