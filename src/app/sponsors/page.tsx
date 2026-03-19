import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

// sponsor logos
import bdcLogo from "./bdc.png";
import eyLogo from "./ey.png";
import deloitteLogo from "./Deloitte-Black-Logo.png";
import oslerLogo from "./osler.png";
import ascentLogo from "./ascent.png";

// partner logos
import torontoTechWeekLogo from "./toronto_tech_week.png";
import nextAILogo from "./next_ai.png";
import frameworkVenturesLogo from "./front_row_ventures.png";
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
import mayoClinicLogo from "./mayo_clinic.png";
import amiralVenturesLogo from "./amiral_ventures.png";
import northStarLogo from "./north_star.png";
import finchlyVenturesLogo from "./finchley_ventures.png";
import cdlLogo from "./cdl.png";
import zuLogo from "./zu.png";
import cvcaLogo from "./cvca.png";
import startupfestLogo from "./startupfest.png";
import claudeBuilderClubLogo from "./claude_builder_club.png";
import graphiteVenturesLogo from "./graphite_ventures.png";

// past sponsor logos
import panacheVenturesLogo from "./panache_ventures.png";
import inoviaLogo from "./inovia.png";
import penderVenturesLogo from "./pender_ventures.png";
import dobsonCentreLogo from "./dobson_centre.png";
import blueVisionCapitalLogo from "./blue_vision_capital.png";
import aqcCapitalLogo from "./aqc_capital.png";
import telusLogo from "./telus.png";
import triptyqCapitalLogo from "./triptyq_capital.png";

export default function Sponsors() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage="/sponsors" />

      <section className="px-6 py-14 md:px-12 lg:px-24 relative bg-gradient-hero">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-display text-purple-950 mb-8">
              Our Sponsors
            </h1>
            <div className="w-32 h-1.5 bg-gradient-to-r from-purple-600 to-purple-700 mx-auto rounded-full mb-12"></div>
            <p className="text-xl md:text-2xl text-purple-800 leading-relaxed font-body max-w-4xl mx-auto">
              Meet the incredible partners who support McGill Ventures and help us build the future of student entrepreneurship
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-32 md:px-12 lg:px-24 bg-gradient-to-br from-purple-50/30 to-purple-100/20">
        <div className="max-w-7xl mx-auto space-y-32">
          {/* Our Sponsors */}
          <div className="text-center animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-display text-purple-950 mb-14">Our Sponsors</h2>
            <div className="flex flex-wrap justify-center items-center gap-12">
              {/* sponsor logos */}
              {[
                { src: bdcLogo, alt: "BDC", href: "https://www.bdc.ca" },
                { src: eyLogo, alt: "EY", href: "https://www.ey.com" },
                { src: deloitteLogo, alt: "Deloitte", href: "https://www.deloitte.com" },
                { src: oslerLogo, alt: "Osler", href: "https://www.osler.com" },
                { src: ascentLogo, alt: "Ascent by McMillan", href: "https://www.mcmillan.ca" },
              ].map((logo, idx) => (
                <a key={idx} href={logo.href} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={150}
                    height={60}
                    className="h-20 object-contain filter grayscale hover:grayscale-0 transition duration-300"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Our Partners */}
          <div className="text-center animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-display text-purple-950 mb-14">Our Partners</h2>
            <div className="flex flex-wrap justify-center items-center gap-12">
              {[
                { src: torontoTechWeekLogo, alt: "Toronto Tech Week", href: "https://www.torontotechweek.com" },
                { src: nextAILogo, alt: "Next AI", href: "https://www.nextcanada.com/next-ai" },
                { src: frameworkVenturesLogo, alt: "Framework Ventures", href: "https://frontrow.ventures" },
                { src: realVenturesLogo, alt: "Real Ventures", href: "https://realventures.com" },
                { src: cycleCapitalLogo, alt: "Cycle Momentum", href: "https://cyclemomentum.com" },
                { src: d3Logo, alt: "D3", href: "https://d3.ventures" },
                { src: laBaseHECLogo, alt: "La Base HEC", href: "https://labase.hec.ca" },
                { src: betaKitLogo, alt: "Beta Kit", href: "https://betakit.com" },
                { src: diagramVenturesLogo, alt: "Diagram Ventures", href: "https://diagram.ca" },
                { src: espaceCDPQLogo, alt: "Espace CDPQ", href: "https://www.cdpq.com" },
                { src: brightsparkLogo, alt: "Brightspark", href: "https://www.brightspark.com" },
                { src: axLogo, alt: "AX", href: "https://ax.co" },
                { src: elanchTechLogo, alt: "Elanch Tech", href: "https://elanch.com" },
                { src: mcgillEngineLogo, alt: "McGill Engine", href: "https://mcgillengine.com" },
                { src: theClipLogo, alt: "The Clip", href: "https://theclip.ca" },
                { src: mayoClinicLogo, alt: "Mayo Clinic", href: "https://www.mayoclinic.org" },
                { src: amiralVenturesLogo, alt: "Amiral Ventures", href: "https://amiral.ventures" },
                { src: northStarLogo, alt: "North Star", href: "https://northstar.vc" },
                { src: finchlyVenturesLogo, alt: "Finchly Ventures", href: "https://finchly.com" },
                { src: cdlLogo, alt: "CDL", href: "https://creativedestructionlab.com" },
                { src: zuLogo, alt: "Zu", href: "https://zu.com" },
                { src: cvcaLogo, alt: "CVCA", href: "https://www.cvca.ca" },
                { src: startupfestLogo, alt: "Startupfest", href: "https://www.startupfest.com" },
                { src: claudeBuilderClubLogo, alt: "Claude Builder Club", href: "https://www.claudebuildersmcgill.ca/" },
                { src: graphiteVenturesLogo, alt: "Graphite Ventures", href: "https://graphitevc.com/" },
              ].map((logo, idx) => (
                <a key={idx} href={logo.href} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={150}
                    height={60}
                    className="h-20 object-contain filter grayscale hover:grayscale-0 transition duration-300"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Past Sponsors & Partners */}
          <div className="text-center animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-display text-purple-950 mb-14">Past Sponsors & Partners</h2>
            <div className="flex flex-wrap justify-center items-center gap-12">
              {[
                { src: panacheVenturesLogo, alt: "Panache Ventures", href: "https://www.panache.vc" },
                { src: inoviaLogo, alt: "Inovia", href: "https://inovia.vc" },
                { src: penderVenturesLogo, alt: "Pender Ventures", href: "https://penderventures.com" },
                { src: dobsonCentreLogo, alt: "McGill Dobson Centre", href: "https://www.mcgill.ca/dobson" },
                { src: blueVisionCapitalLogo, alt: "Blue Vision Capital", href: "https://bluevisioncapital.com" },
                { src: aqcCapitalLogo, alt: "AQC Capital", href: "https://aqccapital.com" },
                { src: telusLogo, alt: "Telus", href: "https://www.telus.com" },
                { src: triptyqCapitalLogo, alt: "Triptyq Capital", href: "https://triptyqcapital.com" },
              ].map((logo, idx) => (
                <a key={idx} href={logo.href} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={150}
                    height={60}
                    className="h-20 object-contain opacity-50 filter grayscale hover:grayscale-0 transition duration-300"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-32 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-display text-purple-950 mb-8">Partnership Benefits</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-purple-700 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
                title: "Access to Top Talent",
                description: "Connect with McGill's brightest students across business, engineering, and science programs for internships and full-time opportunities."
              },
              {
                icon: "M13 10V3L4 14h7v7l9-11h-7z",
                title: "Innovation Pipeline",
                description: "Early access to innovative student startups and breakthrough technologies emerging from McGill's entrepreneurship ecosystem."
              },
              {
                icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
                title: "Brand Visibility",
                description: "Showcase your organization to Montreal's entrepreneurial community through events, workshops, and digital presence."
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center group hover-lift animate-fade-in-up glass rounded-3xl p-10" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={benefit.icon} />
                  </svg>
                </div>
                <h3 className="text-3xl font-display text-purple-950 mb-6">{benefit.title}</h3>
                <p className="text-purple-800 leading-relaxed text-lg font-body">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-32 md:px-12 lg:px-24 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-purple-500/10 to-transparent"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-display mb-8">
              Partner With Us
            </h2>
          </div>
          <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <p className="text-2xl text-purple-100 mb-12 leading-relaxed font-body">
              Join our community of forward-thinking organizations supporting the next generation of entrepreneurs and innovators.
            </p>
          </div>
          <div className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <Link href="/contact">
              <button className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-12 py-5 rounded-2xl hover:from-purple-600 hover:to-purple-700 transition-all duration-300 font-heading text-xl font-semibold hover-lift animate-pulse-glow">
                Become a Sponsor
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}