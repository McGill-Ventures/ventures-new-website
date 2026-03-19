import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Image from "next/image";
import EventPhotoGallery from "@/components/EventPhotoGallery";

interface EventPhoto {
  src: string;
  alt: string;
  caption: string;
}

interface EventCard {
  id: string;
  title: string;
  category: "Conference" | "Competition" | "Panel" | "Info Session" | "Industry Event";
  date: string;
  location: string;
  description: string;
  image: string;
  photos: EventPhoto[];
  imagePosition?: string;
}

const EVENTS_2026: EventCard[] = [
  {
    id: "women-in-vc-2026",
    title: "Women in VC 2026",
    category: "Panel",
    date: "February 26, 2026",
    location: "Dobson Center",
    description: "An inspiring panel bringing together seasoned women investors and founders to share their journeys in venture capital and the startup ecosystem. Join us for an evening of insight, empowerment, and meaningful connection.",
    image: "/events/women_in_vc2026/winvc_2026_hero.JPG",
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
    date: "January 29, 2026",
    location: "Arsenal Contemporary Art Gallery",
    description: "McGill Ventures' flagship entrepreneurship conference bringing together 500+ students with top-tier VCs, founders, and industry leaders. Featuring keynote speakers, founder panels, and exclusive networking.",
    image: "/events/northstar_cover2026.jpg",
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
];

const EVENTS_2025: EventCard[] = [
  {
    id: "clip-medtech-2024",
    title: "CLIP x Health Tech Innovation Lab",
    category: "Panel",
    date: "December 4, 2025",
    location: "McGill University",
    description: "McGill Ventures and The Clinical Innovation Platform (CLIP) partner to connect McGill's entrepreneurial and medical communities with CLIP's clinical ecosystem and leading MedTech founders and venture capitalists.",
    image: "/events/clipxhealthtech_2026/clipxhealthtech_2026_hero.jpg",
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
    date: "November 7, 2025",
    location: "Espace CDPQ",
    description: "Connect with rising startup entrepreneurs and Montreal's leading venture capitalists. Discover the missions, product differentiators, and future plans of startup founders, along with investment perspectives from VCs.",
    image: "/events/startup_showcase2025/startup_showcase2025_hero.jpg",
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
    date: "March 27, 2025",
    location: "EY Offices, 23rd Floor",
    description: "McGill's premier pitch competition where student founders compete for funding, mentorship, and the chance to pitch their ventures to leading investors.",
    image: "/events/scarlet_pitch_cover2025.jpg",
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
    date: "March 21, 2025",
    location: "Escape CDPQ",
    description: "An intimate tech conference exploring emerging technologies, AI innovation, and the future of the Canadian startup ecosystem.",
    image: "/events/technova_cover2025.jpg",
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
    date: "February 16, 2025",
    location: "Thomson House",
    description: "A networking cocktail evening with Geraldine J. (Co-founder of AssetWaves) and Lin Sok (CEO & Co-founder of Owni.ai). A room full of women who build, lead, and move things forward.",
    image: "/events/women_5a7_cocktail2026/women_5a7_cocktail2025_hero.JPG",
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
    date: "February 7, 2025",
    location: "Dobson Center",
    description: "A panel discussion featuring female investors and VCs sharing insights on breaking into venture capital and supporting underrepresented founders.",
    image: "/events/women_in_vc_cover2025.jpg",
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
    date: "January 23, 2025",
    location: "HEC Montréal",
    description: "Our flagship entrepreneurship conference featuring keynote speaker Harley Finkelstein, President of Shopify. 500+ students connected with industry leaders, VCs, and successful founders through keynotes, panels, and networking.",
    image: "/events/northstar_cover2025.jpg",
    photos: [],
    imagePosition: "center 30%",
  },
];

function EventCardComponent({ event, index }: { event: EventCard; index: number }) {
  return (
    <div
      className="group rounded-2xl shadow-lg overflow-hidden bg-white animate-fade-in-up flex flex-col hover:-translate-y-2 hover:shadow-2xl"
      style={{
        animationDelay: `${index * 0.1}s`,
        transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      {/* Cover photo */}
      <div className="relative aspect-video w-full flex-shrink-0 overflow-hidden">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          style={{ objectPosition: event.imagePosition ?? "center" }}
        />
      </div>

      {/* Card body */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Category badge */}
        <span className="inline-block self-start px-3 py-1 rounded-full text-xs font-heading font-semibold uppercase tracking-wider bg-[#F3E8FF] group-hover:bg-[#5A189A] text-[#5A189A] group-hover:text-white mb-3 transition-all duration-300">
          {event.category}
        </span>

        {/* Title */}
        <h3 className="text-2xl font-heading font-semibold text-[#1F2937] mb-3 leading-snug">
          {event.title}
        </h3>

        {/* Date & Location */}
        <div className="flex flex-col gap-2 mb-4">
          <div className="flex items-center text-gray-500 text-sm font-body">
            <svg className="w-4 h-4 mr-2 flex-shrink-0 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {event.date}
          </div>
          <div className="flex items-center text-gray-500 text-sm font-body">
            <svg className="w-4 h-4 mr-2 flex-shrink-0 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {event.location}
          </div>
        </div>

        {/* Description */}
        {event.description && (
          <p className="text-[#4B5563] font-body text-base leading-relaxed mt-3 mb-5 flex-grow">
            {event.description}
          </p>
        )}

        {/* Photo gallery */}
        <EventPhotoGallery eventId={event.id} photos={event.photos} />
      </div>
    </div>
  );
}

export default function Events() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage="/events" />

      {/* Hero */}
      <section className="px-6 pt-10 sm:pt-14 pb-8 sm:pb-14 md:px-12 lg:px-24 relative bg-gradient-hero">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-16 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display text-purple-950 mb-2">
              Our Events
            </h1>
            <div className="w-32 h-1.5 bg-gradient-to-r from-purple-600 to-purple-700 mx-auto rounded-full mb-6"></div>
            <p className="text-base sm:text-xl md:text-2xl text-purple-800 leading-relaxed font-body max-w-4xl mx-auto">
              From intimate workshops to large-scale conferences, we bring together the McGill entrepreneurship community with industry leaders, investors, and founders.
            </p>
          </div>
        </div>
      </section>

      {/* 2026 Events */}
      <section className="px-6 pt-6 sm:pt-10 pb-10 sm:pb-[60px] md:px-12 lg:px-24 bg-gradient-hero">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display text-purple-950 mb-4">2026 Events</h2>
            <p className="text-base sm:text-xl text-purple-800 leading-relaxed font-body max-w-3xl mx-auto">
              This year&apos;s lineup of events and programming for the McGill Ventures community
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {EVENTS_2026.map((event, index) => (
              <EventCardComponent key={event.id} event={event} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* 2025 Events */}
      <section className="px-6 pt-10 sm:pt-[40px] pb-10 sm:pb-[100px] md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display text-purple-950 mb-4">2025 Events</h2>
            <p className="text-base sm:text-xl text-purple-800 leading-relaxed font-body max-w-3xl mx-auto">
              A look back at the events and experiences that have shaped our community
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 [&>*:last-child:nth-child(odd)]:md:col-span-2 [&>*:last-child:nth-child(odd)]:md:mx-auto [&>*:last-child:nth-child(odd)]:md:w-1/2">
            {EVENTS_2025.map((event, index) => (
              <EventCardComponent key={event.id} event={event} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="px-6 py-10 sm:py-20 md:px-12 lg:px-24 text-white"
        style={{ background: "linear-gradient(to bottom right, #5A189A, #3D1551)" }}
      >
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl font-bold text-white">Stay Updated on Our Events</h2>
          <p className="text-purple-100 text-lg mt-4">
            Follow us for event announcements, speaker reveals, and exclusive behind-the-scenes content from the McGill entrepreneurship community.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://www.instagram.com/mcgillvc/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-white text-[#5A189A] px-8 py-4 rounded-lg text-base font-semibold hover:bg-[#5A189A] hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              Follow on Instagram
            </a>
            <a
              href="https://www.linkedin.com/company/mcgillvc/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-white text-[#5A189A] px-8 py-4 rounded-lg text-base font-semibold hover:bg-[#5A189A] hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
