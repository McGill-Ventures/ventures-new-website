import type { Metadata } from "next";
import type { StaticImageData } from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Chapter } from "@/components/programs/Chapter";
import { CompactChapter } from "@/components/programs/CompactChapter";
import { Cta } from "@/components/programs/Cta";
import { DealFlow } from "@/components/programs/DealFlow";
import { ProgramBoard } from "@/components/programs/ProgramBoard";
import { Reveal, SplitText, Starfield } from "@/components/motion";
import graphiteVenturesLogo from "@/app/sponsors/graphite_ventures.png";

export const metadata: Metadata = {
  title: "Programs | McGill Ventures",
};

interface CurriculumItem {
  label?: string;
  title: string;
  body?: string;
}

export interface Program {
  /** Also the chapter's anchor, e.g. `/programs#analyst`. */
  id: string;
  name: string;
  /** When applications reopen, e.g. "Fall 2026". Unset while they are open, which earns the ink stamp. */
  reopens?: string;
  description: string;
  photo: {
    src: string;
    alt: string;
    /** CSS object-position, for the 16:9 and 3:2 crops. */
    position?: string;
  };
  length: string;
  /** Time per week. */
  hours: string;
  seats?: string;
  where?: string;
  features: string[];
  sponsor?: { name: string; href: string; logo: StaticImageData };
  curriculum?: {
    summary: string;
    groups: { title: string; items: CurriculumItem[] }[];
  };
  /** The first renders as the solid button. */
  links: { label: string; href: string }[];
  /** Runs its own site, so its chapter stays short and points there. */
  compact?: boolean;
}

const PROGRAMS: Program[] = [
  {
    id: "analyst",
    name: "Analyst Program",
    description:
      "A comprehensive program covering the fundamentals of venture capital, including deal sourcing, due diligence, portfolio management, and case study analysis.",
    photo: {
      src: "/events/image_carousel_pic2.jpg",
      alt: "A full conference room at a talk on serial founders in manufacturing, hardtech and construction",
      position: "50% 70%",
    },
    length: "16 weeks",
    hours: "4-6 hours",
    features: [
      "Weekly workshops with VC and biotech industry professionals",
      "Case study analysis and pitch competitions",
      "Mentorship from experienced VCs",
      "Networking events with startup founders and investors",
    ],
    sponsor: { name: "Graphite Ventures", href: "https://graphitevc.com/", logo: graphiteVenturesLogo },
    curriculum: {
      summary: "Weekly modules and deliverables",
      groups: [
        {
          title: "Weekly modules",
          items: [
            { title: "Introduction to Venture Capital as an Asset Class" },
            { title: "Networking and Breaking into VC" },
            { title: "Sourcing and Introduction to Dealflow" },
            { title: "Screening and Introduction to Due Diligence" },
            { title: "Valuation and Financial Modelling: Early Stage" },
            { title: "Valuation and Financial Modelling: Late Stage" },
            { title: "Structuring Investment Deals & Portfolio Support" },
            { title: "The Founder's Perspective" },
            { title: "Fund Structure & LP Relationships" },
            { title: "Impact Investing" },
          ],
        },
        {
          title: "Deliverables",
          items: [
            { label: "HW 1", title: "Sourcing", body: "Find three interesting startups within McGill's ecosystem" },
            { label: "HW 2", title: "Due Diligence 1", body: "Complete part 1 of DD and form convictions about the business" },
            { label: "Case 1", title: "Due diligence", body: "Complete the full process in small teams on an existing startup" },
            { label: "Case 2", title: "Investment memo", body: "Draft an investment memo and term sheet for a potential investor" },
          ],
        },
      ],
    },
    links: [
      {
        label: "Apply now",
        href: "https://docs.google.com/forms/d/e/1FAIpQLSc1MFcaJfcj9leRB4P_W_kaHvyk4UGBh6nWoQhjBHBXtV_99Q/viewform",
      },
    ],
  },
  {
    id: "htil",
    name: "Health Tech & Innovation Lab",
    description:
      "A 12-week fellowship where McGill students across STEM and business build solutions to real healthcare challenges with startups and industry partners.",
    photo: {
      src: "/events/clipxhealthtech_2026/clipxhealthtech_2026_program.jpg",
      alt: "Students in conversation at CLIP x Health Tech Innovation Lab",
      position: "40% 50%",
    },
    length: "12 weeks",
    hours: "8-10 hours",
    seats: "22 fellows",
    features: [
      "3 project streams with startups across biotech, healthtech and medtech",
      "10 workshops with partners like Deloitte and Osler",
      "Open to every discipline, from undergrad to PhD",
      "Ongoing mentorship and access to incubators, accelerators and investors",
    ],
    curriculum: {
      summary: "Workshop series and deliverables",
      groups: [
        {
          title: "Workshop series",
          items: [
            { title: "Innovation in Healthcare", body: "Frameworks to identify unmet healthcare needs and opportunities for innovation" },
            { title: "Building a Healthcare Startup", body: "Business modelling and commercialization strategies to turn ideas into real-world ventures" },
            { title: "Company Creation Cases", body: "Case studies on the creation and development of three biotech companies" },
            { title: "Healthcare Founders Panel", body: "An open conversation with healthcare founders about their journeys, challenges, and advice" },
            { title: "Intellectual Property & Legal", body: "IP protection, the patent process, and the MedTech regulatory landscape" },
            { title: "Fundraising in Healthcare", body: "Communicating value for venture capital, non-dilutive funding, and incubator programs" },
          ],
        },
        {
          title: "Deliverables",
          items: [
            { label: "Build", title: "Working prototype", body: "A functional demo addressing a real healthcare challenge" },
            { label: "Research", title: "Feasibility analysis", body: "Evidence-backed analysis of whether the solution can work" },
            { label: "Pitch", title: "Investor-ready materials", body: "A pitch to take the project to incubators, accelerators and investors" },
          ],
        },
      ],
    },
    links: [
      {
        label: "Apply now",
        href: "https://docs.google.com/forms/d/e/1FAIpQLSfW_b6VKWWAKYwySgQWqrhr9VYqfsoKykOHNMD9T7odqpoZGA/viewform",
      },
    ],
  },
  {
    id: "growth-studio",
    name: "Growth Studio",
    reopens: "Fall 2026",
    description:
      "Students work with early-stage startups on real scaling challenges, delivering actionable recommendations on go-to-market and venture capital fundraising.",
    photo: {
      src: "/growth-studio/hero-founders.webp",
      alt: "Growth Studio founders working together",
      position: "50% 30%",
    },
    length: "6 weeks",
    hours: "4-6 hours",
    where: "Bronfman",
    features: [
      "Direct consulting work with early-stage startups",
      "Go-to-market and fundraising strategy deliverables",
      "Weekly in-person meetings with founders",
      "Workshops and guest speakers from the startup ecosystem",
    ],
    links: [
      { label: "Visit Growth Studio", href: "/growth-studio" },
      {
        label: "Apply to our next cohort",
        href: "https://docs.google.com/forms/d/e/1FAIpQLSfNMLYY5THSx6F1WPXlK11zS2q7JiSHNCRekzMAEEbHZl54rQ/viewform",
      },
    ],
    compact: true,
  },
  {
    id: "fund",
    name: "Fund Program",
    reopens: "Fall 2026",
    description:
      "McGill Ventures' student-run fund. Analysts learn deal sourcing, due diligence, financial modelling, and investment structuring while evaluating real startups.",
    photo: {
      src: "/events/scarlet_pitch_2026/sp26_02.jpg",
      alt: "The crowd at Scarlet Pitch 2026",
      position: "50% 35%",
    },
    length: "10 weeks",
    hours: "4-6 hours",
    features: [
      "10-week curriculum covering the full VC investment process",
      "Real deal sourcing and due diligence on live startups",
      "Financial modelling for early and late-stage companies",
      "Investment memo and term sheet deliverables",
    ],
    links: [{ label: "Visit the fund", href: "/fund" }],
    compact: true,
  },
];

export default function Programs() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation currentPage="/programs" darkOver="#programs" />

      {/* Pulled up under the transparent header, so `-mt-20` tracks its height. */}
      <main id="programs" className="relative -mt-20 overflow-clip bg-black text-white">
        <section
          aria-labelledby="programs-title"
          className="relative isolate flex flex-col justify-center px-6 pt-32 pb-20 md:px-12 md:pt-36 lg:px-24 lg:pb-24 min-h-svh"
        >
          <div
            aria-hidden
            className="animate-orb pointer-events-none absolute -top-48 -left-48 size-[36rem] rounded-full bg-purple-600/40 blur-3xl"
          />
          <div
            aria-hidden
            className="animate-orb pointer-events-none absolute -right-24 -bottom-40 size-[32rem] rounded-full bg-purple-800/40 blur-3xl [animation-delay:-8s]"
          />
          <Starfield className="[mask-image:linear-gradient(to_bottom,#000_55%,transparent)]" />

          <ProgramBoard
            programs={PROGRAMS.map(({ id, name, photo, length, hours, reopens }) => ({
              id,
              name,
              photo,
              length,
              hours,
              reopens,
            }))}
          >
            <div className="grid gap-5 lg:grid-cols-12 lg:items-baseline-last lg:gap-6">
              <h1
                id="programs-title"
                className="font-display text-[clamp(2.25rem,3.4vw,3rem)] leading-none lg:col-span-5"
              >
                <SplitText text="Programs" trigger="load" delay={150} />
              </h1>
              <Reveal
                as="p"
                trigger="load"
                delay={300}
                className="max-w-xl font-body text-lg text-pretty text-purple-100/75 md:text-xl lg:col-span-6 lg:col-start-7"
              >
                Hands-on programs that develop the next generation of venture capitalists and
                entrepreneurs, taught by the investors and founders doing the work.
              </Reveal>
            </div>
          </ProgramBoard>
        </section>

        <div className="flex flex-col gap-32 pb-32 lg:gap-44 lg:pb-44">
          {PROGRAMS.filter((p) => !p.compact).map((program) => (
            <Chapter key={program.id} program={program} />
          ))}

          <div className="px-6 md:px-12 lg:px-24">
            <div className="mx-auto grid max-w-7xl gap-32 lg:grid-cols-2 lg:gap-12">
              {PROGRAMS.filter((p) => p.compact).map((program) => (
                <CompactChapter key={program.id} program={program} />
              ))}
            </div>
          </div>
        </div>

        <section
          aria-labelledby="apply"
          className="bg-grain relative overflow-clip bg-purple-950 px-6 py-24 md:px-12 lg:px-24 lg:py-32"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -top-48 -right-40 size-[34rem] rounded-full bg-purple-600/30 blur-3xl"
          />
          <div className="relative z-10 mx-auto max-w-7xl">
            <div className="grid gap-6 lg:grid-cols-12 lg:items-baseline-last">
              <h2 id="apply" className="section-heading lg:col-span-6">
                <SplitText text="How to apply" />
              </h2>
              <Reveal
                as="p"
                delay={200}
                className="max-w-xl font-body text-lg text-pretty text-purple-100/75 md:text-xl lg:col-span-5 lg:col-start-8"
              >
                Every application runs through the same pipeline as a startup pitching us. This
                time, you&apos;re the deal.
              </Reveal>
            </div>
            <DealFlow />
            <Reveal className="mt-20 flex flex-wrap items-center justify-between gap-x-10 gap-y-6 border-t border-white/15 pt-8">
              <p className="font-body text-lg text-purple-100/75 md:text-xl">
                New cohorts are announced on LinkedIn first.
              </p>
              <Cta href="https://www.linkedin.com/company/mcgillvc/" variant="line">
                Follow on LinkedIn
              </Cta>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
