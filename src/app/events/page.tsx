import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { EventGrid } from "@/components/events/EventGrid";
import { UpcomingEvent } from "@/components/events/UpcomingEvent";
import { Reveal, SplitText, Starfield } from "@/components/motion";
import { Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "Events | McGill Ventures",
};

// Upcoming vs past is decided on the server, so re-render daily or an event
// would stay "upcoming" until the next deploy.
export const revalidate = 86400;

interface EventPhoto {
  src: string;
  alt: string;
  caption: string;
}

export interface EventData {
  id: string;
  title: string;
  category: "Conference" | "Competition" | "Panel" | "Fireside Chat" | "Info Session" | "Industry Event";
  /** ISO date, `YYYY-MM-DD`. */
  date: string;
  location: string;
  description: string;
  coverImage: string;
  photos: EventPhoto[];
  imagePosition?: string;
  imageScale?: number;
  ticketsUrl?: string;
}

const EVENTS: EventData[] = [
  {
    id: "polyfinances-harley-finkelstein-2026",
    title: "Polyfinances x McGill Ventures: Harley Finkelstein",
    category: "Fireside Chat",
    date: "2026-10-01",
    location: "Atrium de Polytechnique Montréal (3e étage du pavillon Lassonde)",
    description: "A fireside chat and networking evening with Harley Finkelstein, President of Shopify, co-hosted with Polyfinances.",
    coverImage: "/events/polytechniquexventures_2026/financinginnovation.webp",
    photos: [],
    ticketsUrl: "https://www.zeffy.com/fr-CA/ticketing/polyfinances-x-mgv",
  },
  {
    id: "scarlet-pitch-2026",
    title: "Scarlet Pitch 2026",
    category: "Competition",
    date: "2026-04-10",
    location: "AX.C",
    description: "McGill's premier pitch competition where student founders compete for funding, mentorship, and the chance to pitch their ventures to leading investors.",
    coverImage: "/events/scarlet_pitch_2026/sp26_01.jpg",
    photos: [
      { src: "/events/scarlet_pitch_2026/sp26_01.jpg", alt: "Scarlet Pitch 2026 - Photo 1", caption: "" },
      { src: "/events/scarlet_pitch_2026/sp26_02.jpg", alt: "Scarlet Pitch 2026 - Photo 2", caption: "" },
      { src: "/events/scarlet_pitch_2026/sp26_03.jpg", alt: "Scarlet Pitch 2026 - Photo 3", caption: "" },
      { src: "/events/scarlet_pitch_2026/sp26_04.jpg", alt: "Scarlet Pitch 2026 - Photo 4", caption: "" },
      { src: "/events/scarlet_pitch_2026/sp26_05.jpg", alt: "Scarlet Pitch 2026 - Photo 5", caption: "" },
      { src: "/events/scarlet_pitch_2026/sp26_06.jpg", alt: "Scarlet Pitch 2026 - Photo 6", caption: "" },
      { src: "/events/scarlet_pitch_2026/sp26_07.jpeg", alt: "Scarlet Pitch 2026 - Photo 7", caption: "" },
      { src: "/events/scarlet_pitch_2026/sp26_08.jpeg", alt: "Scarlet Pitch 2026 - Photo 8", caption: "" },
      { src: "/events/scarlet_pitch_2026/sp26_09.jpeg", alt: "Scarlet Pitch 2026 - Photo 9", caption: "" },
      { src: "/events/scarlet_pitch_2026/sp26_10.jpeg", alt: "Scarlet Pitch 2026 - Photo 10", caption: "" },
      { src: "/events/scarlet_pitch_2026/sp26_11.jpg", alt: "Scarlet Pitch 2026 - Photo 11", caption: "" },
    ],
  },
  {
    id: "women-in-vc-2026",
    title: "Women in VC 2026",
    category: "Panel",
    date: "2026-02-26",
    location: "Dobson Center",
    description: "An inspiring panel bringing together seasoned women investors and founders to share their journeys in venture capital and the startup ecosystem. Join us for an evening of insight, empowerment, and meaningful connection.",
    coverImage: "/events/women_in_vc2026/winvc_2026_hero.JPG",
    photos: [
      { src: "/events/women_in_vc2026/winvc_2026_01.JPG", alt: "Women in VC 2026 - Panel discussion", caption: "" },
      { src: "/events/women_in_vc2026/winvc_2026_02.JPG", alt: "Women in VC 2026 - Networking", caption: "" },
      { src: "/events/women_in_vc2026/winvc_2026_03.JPG", alt: "Women in VC 2026 - Speakers", caption: "" },
      { src: "/events/women_in_vc2026/winvc_2026_04.JPG", alt: "Women in VC 2026 - Attendees", caption: "" },
      { src: "/events/women_in_vc2026/winvc_2026_05.JPG", alt: "Women in VC 2026 - Event moment", caption: "" },
      { src: "/events/women_in_vc2026/winvc_2026_06.JPG", alt: "Women in VC 2026 - Panel moment", caption: "" },
      { src: "/events/women_in_vc2026/winvc_2026_07.JPG", alt: "Women in VC 2026 - Audience engagement", caption: "" },
    ],
  },
  {
    id: "north-star-2026",
    title: "North Star 2026",
    category: "Conference",
    date: "2026-01-29",
    location: "Arsenal Contemporary Art Gallery",
    description: "McGill Ventures' flagship entrepreneurship conference bringing together 500+ students with top-tier VCs, founders, and industry leaders. Featuring keynote speakers, founder panels, and exclusive networking.",
    coverImage: "/events/northstar_cover2026.jpg",
    photos: [
      { src: "/events/northstar_2026/ns26_01.jpg", alt: "North Star 2026 - Photo 1", caption: "" },
      { src: "/events/northstar_2026/ns26_02.jpg", alt: "North Star 2026 - Photo 2", caption: "" },
      { src: "/events/northstar_2026/ns26_03.jpg", alt: "North Star 2026 - Photo 3", caption: "" },
      { src: "/events/northstar_2026/ns26_04.jpg", alt: "North Star 2026 - Photo 4", caption: "" },
      { src: "/events/northstar_2026/ns26_05.jpg", alt: "North Star 2026 - Photo 5", caption: "" },
      { src: "/events/northstar_2026/ns26_06.jpg", alt: "North Star 2026 - Photo 6", caption: "" },
      { src: "/events/northstar_2026/ns26_07.jpg", alt: "North Star 2026 - Photo 7", caption: "" },
      { src: "/events/northstar_2026/ns26_08.jpg", alt: "North Star 2026 - Photo 8", caption: "" },
      { src: "/events/northstar_2026/ns26_09.jpg", alt: "North Star 2026 - Photo 9", caption: "" },
      { src: "/events/northstar_2026/ns26_10.jpg", alt: "North Star 2026 - Photo 10", caption: "" },
    ],
  },
  {
    id: "clip-medtech-2024",
    title: "CLIP x Health Tech Innovation Lab",
    category: "Panel",
    date: "2025-12-04",
    location: "McGill University",
    description: "McGill Ventures and The Clinical Innovation Platform (CLIP) partner to connect McGill's entrepreneurial and medical communities with CLIP's clinical ecosystem and leading MedTech founders and venture capitalists.",
    coverImage: "/events/clipxhealthtech_2026/clipxhealthtech_2026_hero.jpg",
    photos: [
      { src: "/events/clipxhealthtech_2026/clipxhealthtech_2026_01.jpg", alt: "CLIP MedTech Event - Panel discussion", caption: "Bridging the gap between clinical innovation and business strategy" },
      { src: "/events/clipxhealthtech_2026/clipxhealthtech_2026_02.jpg", alt: "CLIP MedTech Event - Speakers", caption: "" },
      { src: "/events/clipxhealthtech_2026/clipxhealthtech_2026_03.jpg", alt: "CLIP MedTech Event - Audience", caption: "" },
      { src: "/events/clipxhealthtech_2026/clipxhealthtech_2026_04.jpg", alt: "CLIP MedTech Event - Networking", caption: "" },
      { src: "/events/clipxhealthtech_2026/clipxhealthtech_2026_05.jpg", alt: "CLIP MedTech Event - Panel moment", caption: "" },
      { src: "/events/clipxhealthtech_2026/clipxhealthtech_2026_06.jpg", alt: "CLIP MedTech Event - Attendee engagement", caption: "" },
      { src: "/events/clipxhealthtech_2026/clipxhealthtech_2026_07.jpg", alt: "CLIP MedTech Event - Q&A session", caption: "" },
      { src: "/events/clipxhealthtech_2026/clipxhealthtech_2026_08.jpg", alt: "CLIP MedTech Event - Founders and VCs", caption: "" },
      { src: "/events/clipxhealthtech_2026/clipxhealthtech_2026_09.jpg", alt: "CLIP MedTech Event - Event setup", caption: "" },
      { src: "/events/clipxhealthtech_2026/clipxhealthtech_2026_10.jpg", alt: "CLIP MedTech Event - Group photo", caption: "" },
    ],
  },
  {
    id: "startup-showcase-2025",
    title: "McGill Startup Showcase",
    category: "Industry Event",
    date: "2025-11-07",
    location: "Espace CDPQ",
    description: "Connect with rising startup entrepreneurs and Montreal's leading venture capitalists. Discover the missions, product differentiators, and future plans of startup founders, along with investment perspectives from VCs.",
    coverImage: "/events/startup_showcase2025/startup_showcase2025_hero.jpg",
    photos: [
      { src: "/events/startup_showcase2025/startup_showcase2025_01.jpg", alt: "Startup Showcase - Founders presenting", caption: "Student entrepreneurs pitch to VCs at Espace CDPQ" },
      { src: "/events/startup_showcase2025/startup_showcase2025_02.jpg", alt: "Startup Showcase - Networking session", caption: "" },
      { src: "/events/startup_showcase2025/startup_showcase2025_03.jpg", alt: "Startup Showcase - Panel discussion", caption: "" },
      { src: "/events/startup_showcase2025/startup_showcase2025_04.jpg", alt: "Startup Showcase - Attendees", caption: "" },
      { src: "/events/startup_showcase2025/startup_showcase2025_05.jpg", alt: "Startup Showcase - VC investors", caption: "" },
      { src: "/events/startup_showcase2025/startup_showcase2025_06.jpg", alt: "Startup Showcase - Startup booth", caption: "" },
      { src: "/events/startup_showcase2025/startup_showcase2025_07.jpg", alt: "Startup Showcase - Conversations", caption: "" },
      { src: "/events/startup_showcase2025/startup_showcase2025_08.jpg", alt: "Startup Showcase - Event atmosphere", caption: "" },
    ],
  },
  {
    id: "scarlet-pitch-2025",
    title: "Scarlet Pitch 2025",
    category: "Competition",
    date: "2025-03-27",
    location: "EY Offices, 23rd Floor",
    description: "McGill's premier pitch competition where student founders compete for funding, mentorship, and the chance to pitch their ventures to leading investors.",
    coverImage: "/events/scarlet_pitch_cover2025.jpg",
    photos: [
      { src: "/events/scarlet_pitch2025/sp2025_01.jpg", alt: "Scarlet Pitch 2025 - Photo 1", caption: "" },
      { src: "/events/scarlet_pitch2025/sp2025_02.jpg", alt: "Scarlet Pitch 2025 - Photo 2", caption: "" },
      { src: "/events/scarlet_pitch2025/sp2025_03.jpg", alt: "Scarlet Pitch 2025 - Photo 3", caption: "" },
      { src: "/events/scarlet_pitch2025/sp2025_04.jpg", alt: "Scarlet Pitch 2025 - Photo 4", caption: "" },
      { src: "/events/scarlet_pitch2025/sp2025_05.jpg", alt: "Scarlet Pitch 2025 - Photo 5", caption: "" },
      { src: "/events/scarlet_pitch2025/sp2025_06.jpg", alt: "Scarlet Pitch 2025 - Photo 6", caption: "" },
      { src: "/events/scarlet_pitch2025/sp2025_07.JPG", alt: "Scarlet Pitch 2025 - Photo 7", caption: "" },
      { src: "/events/scarlet_pitch2025/sp2025_08.JPG", alt: "Scarlet Pitch 2025 - Photo 8", caption: "" },
      { src: "/events/scarlet_pitch2025/sp2025_09.jpg", alt: "Scarlet Pitch 2025 - Photo 9", caption: "" },
      { src: "/events/scarlet_pitch2025/sp2025_10.jpg", alt: "Scarlet Pitch 2025 - Photo 10", caption: "" },
    ],
  },
  {
    id: "technova-2025",
    title: "TechNova 2025",
    category: "Conference",
    date: "2025-03-21",
    location: "Escape CDPQ",
    description: "An intimate tech conference exploring emerging technologies, AI innovation, and the future of the Canadian startup ecosystem.",
    coverImage: "/events/technova2025/tn2025_01.jpg",
    photos: [
      { src: "/events/technova2025/DSC05314.jpg", alt: "TechNova 2025 - Photo 1", caption: "" },
      { src: "/events/technova2025/tn2025_01.jpg", alt: "TechNova 2025 - Photo 2", caption: "" },
      { src: "/events/technova2025/tn2025_02.jpg", alt: "TechNova 2025 - Photo 3", caption: "" },
      { src: "/events/technova2025/tn2025_03.jpg", alt: "TechNova 2025 - Photo 4", caption: "" },
      { src: "/events/technova2025/tn2025_04.jpg", alt: "TechNova 2025 - Photo 5", caption: "" },
      { src: "/events/technova2025/tn2025_05.jpg", alt: "TechNova 2025 - Photo 6", caption: "" },
      { src: "/events/technova2025/tn2025_07.jpg", alt: "TechNova 2025 - Photo 7", caption: "" },
      { src: "/events/technova2025/tn2025_08.jpg", alt: "TechNova 2025 - Photo 8", caption: "" },
      { src: "/events/technova2025/tn2025_09.jpg", alt: "TechNova 2025 - Photo 9", caption: "" },
      { src: "/events/technova2025/tn2025_10.jpg", alt: "TechNova 2025 - Photo 10", caption: "" },
      { src: "/events/technova2025/tn2025_11.jpg", alt: "TechNova 2025 - Photo 11", caption: "" },
    ],
  },
  {
    id: "women-cocktail-2025",
    title: "Women 5à7 Cocktail",
    category: "Panel",
    date: "2025-02-16",
    location: "Thomson House",
    description: "A networking cocktail evening with Geraldine J. (Co-founder of AssetWaves) and Lin Sok (CEO & Co-founder of Owni.ai). A room full of women who build, lead, and move things forward.",
    coverImage: "/events/women_5a7_cocktail2026/women_5a7_cocktail2025_hero.JPG",
    photos: [
      { src: "/events/women_5a7_cocktail2026/women_5a7_cocktail2025_01.JPG", alt: "Women 5à7 Cocktail - Group photo", caption: "Women in entrepreneurship and VC connect at Thomson House" },
      { src: "/events/women_5a7_cocktail2026/women_5a7_cocktail2025_02.JPG", alt: "Women 5à7 Cocktail - Featured speakers", caption: "" },
      { src: "/events/women_5a7_cocktail2026/women_5a7_cocktail2025_03.JPG", alt: "Women 5à7 Cocktail - Networking", caption: "" },
      { src: "/events/women_5a7_cocktail2026/women_5a7_cocktail2025_04.JPG", alt: "Women 5à7 Cocktail - Attendees", caption: "" },
      { src: "/events/women_5a7_cocktail2026/women_5a7_cocktail2025_05.JPG", alt: "Women 5à7 Cocktail - Event atmosphere", caption: "" },
    ],
  },
  {
    id: "women-in-vc-2025",
    title: "Women in VC 2025",
    category: "Panel",
    date: "2025-02-07",
    location: "Dobson Center",
    description: "A panel discussion featuring female investors and VCs sharing insights on breaking into venture capital and supporting underrepresented founders.",
    coverImage: "/events/women_in_vc_cover2025.jpg",
    photos: [
      { src: "/events/women_in_vc2025/winvc2025_01.jpg", alt: "Women in VC 2025 - Photo 1", caption: "" },
      { src: "/events/women_in_vc2025/winvc2025_02.jpg", alt: "Women in VC 2025 - Photo 2", caption: "" },
      { src: "/events/women_in_vc2025/winvc2025_03.jpg", alt: "Women in VC 2025 - Photo 3", caption: "" },
      { src: "/events/women_in_vc2025/winvc2025_04.jpg", alt: "Women in VC 2025 - Photo 4", caption: "" },
      { src: "/events/women_in_vc2025/winvc2025_05.jpg", alt: "Women in VC 2025 - Photo 5", caption: "" },
      { src: "/events/women_in_vc2025/winvc2025_06.jpg", alt: "Women in VC 2025 - Photo 6", caption: "" },
      { src: "/events/women_in_vc2025/winvc2025_07.jpg", alt: "Women in VC 2025 - Photo 7", caption: "" },
      { src: "/events/women_in_vc2025/winvc2025_08.jpg", alt: "Women in VC 2025 - Photo 8", caption: "" },
      { src: "/events/women_in_vc2025/winvc2025_09.jpg", alt: "Women in VC 2025 - Photo 9", caption: "" },
      { src: "/events/women_in_vc2025/winvc2025_10.jpg", alt: "Women in VC 2025 - Photo 10", caption: "" },
    ],
  },
  {
    id: "north-star-2025",
    title: "North Star 2025: Harley Finkelstein",
    category: "Conference",
    date: "2025-01-23",
    location: "HEC Montréal",
    description: "Our flagship entrepreneurship conference featuring keynote speaker Harley Finkelstein, President of Shopify. 500+ students connected with industry leaders, VCs, and successful founders through keynotes, panels, and networking.",
    coverImage: "/events/northstar_cover2025.jpg",
    photos: [],
    imagePosition: "center 30%",
  },
  {
    id: "scarlet-pitch-2024",
    title: "Scarlet Pitch 2024",
    category: "Competition",
    date: "2024-03-20",
    location: "Desjardins Lounge",
    description: "McGill's premier pitch competition where student founders compete for funding, mentorship, and the chance to pitch their ventures to leading investors.",
    coverImage: "/events/scarlet_pitch_2024/sp24_01.jpg",
    photos: [
      { src: "/events/scarlet_pitch_2024/sp24_01.jpg", alt: "Scarlet Pitch 2024 - Photo 1", caption: "" },
      { src: "/events/scarlet_pitch_2024/sp24_02.jpg", alt: "Scarlet Pitch 2024 - Photo 2", caption: "" },
      { src: "/events/scarlet_pitch_2024/sp24_03.jpg", alt: "Scarlet Pitch 2024 - Photo 3", caption: "" },
      { src: "/events/scarlet_pitch_2024/sp24_04.jpg", alt: "Scarlet Pitch 2024 - Photo 4", caption: "" },
      { src: "/events/scarlet_pitch_2024/sp24_05.jpg", alt: "Scarlet Pitch 2024 - Photo 5", caption: "" },
    ],
  },
  {
    id: "women-in-vc-2024",
    title: "Women in VC 2024",
    category: "Panel",
    date: "2024-02-13",
    location: "Armstrong Building",
    description: "A panel discussion featuring female investors and VCs sharing insights on breaking into venture capital and supporting underrepresented founders.",
    coverImage: "/events/women_in_vc2024/wvc24_01.JPG",
    photos: [
      { src: "/events/women_in_vc2024/wvc24_01.JPG", alt: "Women in VC 2024 - Photo 1", caption: "" },
      { src: "/events/women_in_vc2024/wvc24_02.JPG", alt: "Women in VC 2024 - Photo 2", caption: "" },
      { src: "/events/women_in_vc2024/wvc24_03.JPG", alt: "Women in VC 2024 - Photo 3", caption: "" },
    ],
  },
  {
    id: "startup-showcase-2023",
    title: "Startup Showcase 2023",
    category: "Industry Event",
    date: "2023-10-27",
    location: "Thomson House",
    description: "Connect with rising startup entrepreneurs and Montreal's leading venture capitalists. Discover the missions, product differentiators, and future plans of startup founders, along with investment perspectives from VCs.",
    coverImage: "/events/startup_showcase2023/showcase23_01.JPG",
    photos: [
      { src: "/events/startup_showcase2023/showcase23_01.JPG", alt: "Startup Showcase 2023 - Photo 1", caption: "" },
      { src: "/events/startup_showcase2023/showcase23_02.JPG", alt: "Startup Showcase 2023 - Photo 2", caption: "" },
      { src: "/events/startup_showcase2023/showcase23_03.JPG", alt: "Startup Showcase 2023 - Photo 3", caption: "" },
      { src: "/events/startup_showcase2023/showcase23_04.jpg", alt: "Startup Showcase 2023 - Photo 4", caption: "" },
    ],
  },
];

/** Today in Montreal as `YYYY-MM-DD`; en-CA formats dates that way. */
function today() {
  return new Intl.DateTimeFormat("en-CA", { timeZone: "America/Montreal" }).format(new Date());
}

/** Newest year first, newest event first within each year. */
function groupByYear(events: EventData[]) {
  const groups = new Map<string, EventData[]>();
  for (const event of [...events].sort((a, b) => b.date.localeCompare(a.date))) {
    const year = event.date.slice(0, 4);
    groups.set(year, [...(groups.get(year) ?? []), event]);
  }
  return [...groups].map(([year, events]) => ({ year, events }));
}

export default function Events() {
  const now = today();
  // Soonest first; an event stays upcoming through its own day.
  const upcoming = EVENTS.filter((e) => e.date >= now).sort((a, b) => a.date.localeCompare(b.date));
  const pastByYear = groupByYear(EVENTS.filter((e) => e.date < now));

  return (
    <div className="min-h-screen bg-black">
      <Navigation currentPage="/events" darkOver="#events" />

      {/* Pulled up under the transparent header, so `-mt-20` tracks its height. */}
      <main id="events" className="relative -mt-20 overflow-hidden bg-black text-white">
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
              <SplitText text="Events" trigger="load" delay={150} />
            </h1>
            <Reveal
              as="p"
              trigger="load"
              delay={450}
              className="mt-6 max-w-2xl font-body text-lg text-purple-100/75 md:text-xl"
            >
              From intimate workshops to large-scale conferences, we bring together the McGill
              entrepreneurship community with industry leaders, investors, and founders.
            </Reveal>
            <Reveal trigger="load" delay={650} className="mt-8 flex flex-wrap gap-4">
              <Button href="https://www.instagram.com/mcgillvc/" variant="secondary" size="sm" external>
                Follow on Instagram
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button href="https://www.linkedin.com/company/mcgillvc/" variant="secondary" size="sm" external>
                Connect on LinkedIn
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Reveal>
          </div>
        </section>

        <section aria-labelledby="upcoming" className="relative px-6 pb-20 md:px-12 lg:px-24">
          <div className="mx-auto max-w-7xl">
            <h2 id="upcoming" className="section-heading">
              <SplitText text="Upcoming" />
            </h2>
            {upcoming.length > 0 ? (
              <div className="mt-10 flex flex-col gap-16">
                {upcoming.map((event) => (
                  <UpcomingEvent key={event.id} event={event} />
                ))}
              </div>
            ) : (
              <Reveal
                as="p"
                delay={200}
                className="mt-6 max-w-xl font-body text-lg text-purple-100/75"
              >
                Nothing on the calendar right now. New events are announced on Instagram and
                LinkedIn first.
              </Reveal>
            )}
          </div>
        </section>

        <section aria-labelledby="past" className="relative px-6 pb-24 md:px-12 lg:px-24 lg:pb-32">
          <div className="mx-auto max-w-7xl">
            <h2 id="past" className="section-heading">
              <SplitText text="Past events" />
            </h2>
            {pastByYear.map(({ year, events }) => (
              <div key={year} className="mt-12 border-t border-white/10 pt-6 lg:mt-16">
                <h3 className="font-display text-3xl text-white/90 md:text-4xl">
                  <SplitText text={year} />
                </h3>
                <EventGrid events={events} headingAs="h4" className="mt-6" />
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
