import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Icon } from "@/components/ui";
import { APPLICATION_STEPS } from "@/constants";
import FundProgramCard from "@/components/FundProgramCard";

export default function Programs() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage="/programs" />

      <section className="px-6 py-14 md:px-12 lg:px-24 relative bg-gradient-hero">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-display text-purple-950 mb-8">
              Our Programs
            </h1>
            <div className="w-32 h-1.5 bg-gradient-to-r from-purple-600 to-purple-700 mx-auto rounded-full mb-12"></div>
            <p className="text-xl md:text-2xl text-purple-800 leading-relaxed font-body max-w-4xl mx-auto">
              Discover the comprehensive programs designed to develop the next generation of venture capitalists and entrepreneurs
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-32 md:px-12 lg:px-24 bg-gradient-mesh">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-display text-purple-950 mb-8">Transform Your Future</h2>
            <p className="text-xl text-purple-800 leading-relaxed font-body max-w-3xl mx-auto">
              Choose from our intensive programs designed to give you real-world experience in venture capital and technology
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="glass rounded-3xl p-10 hover-lift animate-fade-in-up opacity-75">
              <div className="bg-purple-200 text-purple-800 px-4 py-2 rounded-full text-sm font-heading font-semibold mb-6 inline-block">
                Applications reopen Fall 2026
              </div>
              <h3 className="text-4xl font-display text-purple-950 mb-6">Analyst Program</h3>
              <p className="text-lg text-purple-800 font-body mb-8 leading-relaxed">
                A comprehensive program covering the fundamentals of venture capital, including deal sourcing, due diligence, portfolio management, and case study analysis.
              </p>

              <div className="mb-8">
                <h4 className="text-xl font-heading text-purple-950 mb-4">Program Features:</h4>
                <ul className="space-y-3">
                  {[
                    "Weekly workshops with VC and biotech industry professionals",
                    "Case study analysis and pitch competitions",
                    "Mentorship from experienced VCs",
                    "Networking events with startup founders and investors",
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-start text-purple-700 font-body">
                      <Icon name="check" className="text-purple-600 mr-3 mt-1 flex-shrink-0" size="sm" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-purple-100 rounded-xl p-4 text-center">
                  <div className="text-sm font-heading text-purple-700">Duration</div>
                  <div className="text-lg font-display text-purple-950">16 weeks</div>
                </div>
                <div className="bg-purple-100 rounded-xl p-4 text-center">
                  <div className="text-sm font-heading text-purple-700">Commitment</div>
                  <div className="text-lg font-display text-purple-950">4-6 hours/week</div>
                </div>
              </div>

              <button disabled className="w-full bg-gray-200 text-gray-500 px-8 py-4 rounded-xl cursor-not-allowed font-heading text-lg font-semibold">
                Applications open Fall 2026
              </button>
            </div>

            <FundProgramCard />

            <div className="glass rounded-3xl p-10 hover-lift animate-fade-in-up opacity-75">
              <div className="bg-purple-200 text-purple-800 px-4 py-2 rounded-full text-sm font-heading font-semibold mb-6 inline-block">
                Applications reopen Fall 2026
              </div>
              <h3 className="text-4xl font-display text-purple-950 mb-6">Health Tech & Innovation Lab (HTIL)</h3>
              <p className="text-lg text-purple-800 font-body mb-8 leading-relaxed">
                An intensive 7-week program bridging healthcare and venture capital through hands-on workshops with biotech and VC professionals, mentorship, and real-world project deliverables.
              </p>

              <div className="mb-8">
                <h4 className="text-xl font-heading text-purple-950 mb-4">Program Features:</h4>
                <ul className="space-y-3">
                  {[
                    "Weekly workshops with biotech and VC professionals",
                    "Hands-on project deliverables",
                    "Mentorship from industry experts",
                    "Exposure to health tech investment landscape",
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-start text-purple-700 font-body">
                      <Icon name="check" className="text-purple-600 mr-3 mt-1 flex-shrink-0" size="sm" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-purple-100 rounded-xl p-4 text-center">
                  <div className="text-sm font-heading text-purple-700">Duration</div>
                  <div className="text-lg font-display text-purple-950">7 weeks</div>
                </div>
                <div className="bg-purple-100 rounded-xl p-4 text-center">
                  <div className="text-sm font-heading text-purple-700">Commitment</div>
                  <div className="text-lg font-display text-purple-950">4-6 hours/week</div>
                </div>
              </div>

              <button disabled className="w-full bg-gray-200 text-gray-500 px-8 py-4 rounded-xl cursor-not-allowed font-heading text-lg font-semibold">
                Applications open Fall 2026
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-32 md:px-12 lg:px-24 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-display text-purple-950 mb-8">How to Apply</h2>
            <p className="text-xl text-purple-800 leading-relaxed font-body mb-16">
              Join McGill Ventures and be part of Montreal&apos;s most dynamic student entrepreneurship community
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {APPLICATION_STEPS.map((step, index) => (
              <div key={index} className="text-center animate-fade-in-up" style={{animationDelay: `${index * 0.15}s`}}>
                <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-display font-bold shadow-lg">
                  {step.step}
                </div>
                <h3 className="text-2xl font-display text-purple-950 mb-4">{step.title}</h3>
                <p className="text-purple-800 leading-relaxed font-body">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-3xl p-12 text-white animate-fade-in-up" style={{animationDelay: '0.5s'}}>
            <h3 className="text-3xl font-display mb-6">Ready to Get Started?</h3>
            <p className="text-xl text-purple-100 mb-8 font-body">
              Applications for our Fall 2026 cohort will open soon. Follow us on LinkedIn for updates.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="https://www.linkedin.com/company/mcgill-ventures"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-white/10 hover:bg-white/20 transition-all duration-300 px-6 py-3 rounded-xl font-heading font-semibold group"
                aria-label="Follow us on LinkedIn for updates"
              >
                <svg className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                Follow for Updates
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}