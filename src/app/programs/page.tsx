import type { Metadata } from "next";
import type { StaticImageData } from "next/image";
import { ArrowUpRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ProgramSection } from "@/components/programs/ProgramSection";
import { Reveal, SplitText, Starfield } from "@/components/motion";
import { Button } from "@/components/ui";
import { APPLICATION_STEPS } from "@/constants";
import graphiteVenturesLogo from "@/app/sponsors/graphite_ventures.png";

export const metadata: Metadata = {
  title: "Programs | McGill Ventures",
};

interface CurriculumItem {
  /** Defaults to the item's position, zero-padded. */
  label?: string;
  title: string;
  body?: string;
}

export interface ProgramData {
  /** Also the section's anchor, e.g. `/programs#analyst`. */
  id: string;
  name: string;
  status: string;
  description: string;
  photo: string;
  facts: [term: string, value: string][];
  features: string[];
  sponsor?: { name: string; href: string; logo: StaticImageData };
  curriculum?: {
    label: string;
    groups: { title: string; items: CurriculumItem[] }[];
  };
  /** The first renders as the primary button. */
  links: { label: string; href: string }[];
}

const PROGRAMS: ProgramData[] = [
  {
    id: "analyst",
    name: "Analyst Program",
    status: "Applications open",
    description:
      "A comprehensive program covering the fundamentals of venture capital, including deal sourcing, due diligence, portfolio management, and case study analysis.",
    photo: "/events/image_carousel_pic2.jpg",
    facts: [
      ["Duration", "16 weeks"],
      ["Commitment", "4-6 hours/week"],
    ],
    features: [
      "Weekly workshops with VC and biotech industry professionals",
      "Case study analysis and pitch competitions",
      "Mentorship from experienced VCs",
      "Networking events with startup founders and investors",
    ],
    sponsor: { name: "Graphite Ventures", href: "https://graphitevc.com/", logo: graphiteVenturesLogo },
    curriculum: {
      label: "View the curriculum",
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
    status: "Applications reopen Fall 2026",
    description:
      "An intensive 7-week program bridging healthcare and venture capital through hands-on workshops with biotech and VC professionals, mentorship, and real-world project deliverables.",
    photo: "/events/clipxhealthtech_2026/clipxhealthtech_2026_hero.jpg",
    facts: [
      ["Duration", "7 weeks"],
      ["Commitment", "4-6 hours/week"],
    ],
    features: [
      "Weekly workshops with biotech and VC professionals",
      "Hands-on project deliverables",
      "Mentorship from industry experts",
      "Exposure to the health tech investment landscape",
    ],
    curriculum: {
      label: "View the program structure",
      groups: [
        {
          title: "Timeline",
          items: [
            { label: "Week 1", title: "Kickoff & Challenge Identification", body: "Welcome the cohort and frame healthcare problems to tackle" },
            { label: "Week 2", title: "Team Formation & Ideation", body: "The cohort splits into project teams and starts building solutions" },
            { label: "Weeks 3-5", title: "Mid-Term Project Development", body: "Teams present current work, seek feedback, and refine their solutions" },
            { label: "Weeks 6-7", title: "Capstone Deliverable & Presentation", body: "Teams present their final prototype or research report" },
          ],
        },
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
            { label: "Project", title: "Final project", body: "A prototype or research report addressing a real healthcare challenge" },
            { label: "Pitch", title: "Professional presentation", body: "Present the final work to Mayo Clinic physicians and industry partners" },
          ],
        },
      ],
    },
    links: [],
  },
  {
    id: "growth-studio",
    name: "Growth Studio",
    status: "Applications reopen Fall 2026",
    description:
      "Students work with early-stage startups on real scaling challenges, delivering actionable recommendations on go-to-market and venture capital fundraising.",
    photo: "/growth-studio/hero-founders.webp",
    facts: [
      ["Duration", "6 weeks"],
      ["Commitment", "4-6 hours/week"],
      ["Location", "Bronfman"],
    ],
    features: [
      "Direct consulting work with early-stage startups",
      "Go-to-market and fundraising strategy deliverables",
      "Weekly in-person meetings with founders",
      "Workshops and guest speakers from the startup ecosystem",
    ],
    links: [
      { label: "Visit Growth Studio", href: "/growth-studio" },
      {
        label: "Apply for Fall 2026",
        href: "https://docs.google.com/forms/d/e/1FAIpQLSfNMLYY5THSx6F1WPXlK11zS2q7JiSHNCRekzMAEEbHZl54rQ/viewform",
      },
    ],
  },
  {
    id: "fund",
    name: "Fund Program",
    status: "Applications reopen Fall 2026",
    description:
      "McGill Ventures' student-run fund. Analysts learn deal sourcing, due diligence, financial modelling, and investment structuring while evaluating real startups.",
    photo: "/events/scarlet_pitch_2026/sp26_02.jpg",
    facts: [
      ["Duration", "10 weeks"],
      ["Commitment", "4-6 hours/week"],
    ],
    features: [
      "10-week curriculum covering the full VC investment process",
      "Real deal sourcing and due diligence on live startups",
      "Financial modelling for early and late-stage companies",
      "Investment memo and term sheet deliverables",
    ],
    links: [{ label: "Learn more", href: "/fund" }],
  },
];

export default function Programs() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation currentPage="/programs" darkOver="#programs" />

      {/* Pulled up under the transparent header, so `-mt-20` tracks its height. */}
      <main id="programs" className="relative -mt-20 overflow-clip bg-black text-white">
        <section className="relative flex min-h-[72dvh] flex-col justify-end px-6 pt-28 pb-20 md:px-12 lg:px-24">
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
              <SplitText text="Programs" trigger="load" delay={150} />
            </h1>
            <Reveal
              as="p"
              trigger="load"
              delay={450}
              className="mt-6 max-w-2xl font-body text-lg text-purple-100/75 md:text-xl"
            >
              Hands-on programs that develop the next generation of venture capitalists and
              entrepreneurs, taught by the investors and founders doing the work.
            </Reveal>
            <Reveal as="ul" trigger="load" delay={650} className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
              {PROGRAMS.map((program, i) => (
                <li key={program.id}>
                  <a
                    href={`#${program.id}`}
                    className="font-heading text-base text-white/70 transition-colors hover:text-white"
                  >
                    <span className="mr-2 text-purple-400">{String(i + 1).padStart(2, "0")}</span>
                    {program.name}
                  </a>
                </li>
              ))}
            </Reveal>
          </div>
        </section>

        <div className="relative flex flex-col gap-24 px-6 pb-24 md:px-12 lg:gap-32 lg:px-24 lg:pb-32">
          {PROGRAMS.map((program, i) => (
            <div key={program.id} className="mx-auto w-full max-w-7xl border-t border-white/10 pt-12 lg:pt-16">
              <ProgramSection program={program} flip={i % 2 === 1} />
            </div>
          ))}
        </div>

        <section aria-labelledby="apply" className="relative px-6 pb-24 md:px-12 lg:px-24 lg:pb-32">
          <div className="mx-auto max-w-7xl border-t border-white/10 pt-12 lg:pt-16">
            <h2 id="apply" className="section-heading">
              <SplitText text="How to apply" />
            </h2>
            <ol className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {APPLICATION_STEPS.map((step, i) => (
                <Reveal as="li" key={step.step} delay={i * 100}>
                  <span className="font-display text-5xl text-purple-400">{step.step}</span>
                  <h3 className="mt-4 font-heading text-xl">{step.title}</h3>
                  <p className="mt-2 font-body text-purple-100/75">{step.description}</p>
                </Reveal>
              ))}
            </ol>
            <Reveal delay={400} className="mt-16 flex flex-wrap items-center justify-between gap-6 border-t border-white/10 pt-10">
              <p className="max-w-xl font-body text-lg text-purple-100/75">
                New cohorts are announced on LinkedIn first.
              </p>
              <Button href="https://www.linkedin.com/company/mcgillvc/" variant="secondary" external>
                Follow on LinkedIn
                <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
