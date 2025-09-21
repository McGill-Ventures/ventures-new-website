import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Sponsors() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage="/sponsors" />

      {/* Hero Section */}
      <section className="px-6 py-20 md:px-12 lg:px-24 relative bg-gradient-hero">
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

      {/* Sponsor Tiers */}
      <section className="px-6 py-32 md:px-12 lg:px-24 bg-gradient-to-br from-purple-50/30 to-purple-100/20">
        <div className="max-w-7xl mx-auto">
          {/* Platinum Sponsors */}
          <div className="mb-20">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-display text-purple-950 mb-4">Platinum Partners</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-purple-700 mx-auto rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              {[
                {
                  name: "McKinsey & Company",
                  type: "Management Consulting",
                  description: "Global management consulting firm supporting our strategic initiatives and providing mentorship opportunities.",
                  benefits: ["Executive mentorship", "Case study workshops", "Internship opportunities"],
                  logo: "🏢"
                },
                {
                  name: "Desjardins Capital",
                  type: "Venture Capital",
                  description: "Leading Quebec venture capital firm providing funding expertise and startup ecosystem insights.",
                  benefits: ["VC training sessions", "Deal flow analysis", "Networking events"],
                  logo: "💼"
                }
              ].map((sponsor, index) => (
                <div key={index} className="glass rounded-3xl p-8 shadow-lg hover-lift animate-fade-in-up" style={{animationDelay: `${index * 0.2}s`}}>
                  <div className="text-6xl mb-6 text-center">{sponsor.logo}</div>
                  <h3 className="text-3xl font-display text-purple-950 mb-2 text-center">{sponsor.name}</h3>
                  <p className="text-purple-600 font-heading font-semibold mb-4 text-xl text-center">{sponsor.type}</p>
                  <p className="text-purple-800 mb-6 leading-relaxed font-body text-center">
                    {sponsor.description}
                  </p>
                  <div className="space-y-2">
                    {sponsor.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-purple-700 font-body">
                        <svg className="w-5 h-5 text-purple-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gold Sponsors */}
          <div className="mb-20">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-display text-purple-950 mb-4">Gold Partners</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-purple-700 mx-auto rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  name: "BDC Capital",
                  type: "Development Bank",
                  description: "Canada's development bank supporting entrepreneurs and providing venture capital expertise.",
                  logo: "🏦"
                },
                {
                  name: "Real Ventures",
                  type: "Venture Capital",
                  description: "Montreal-based VC firm specializing in early-stage technology companies.",
                  logo: "🚀"
                },
                {
                  name: "Investissement Québec",
                  type: "Government Agency",
                  description: "Quebec's investment agency supporting innovation and entrepreneurship in the province.",
                  logo: "🌟"
                }
              ].map((sponsor, index) => (
                <div key={index} className="glass rounded-3xl p-8 text-center hover-lift animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="text-5xl mb-4">{sponsor.logo}</div>
                  <h3 className="text-2xl font-display text-purple-950 mb-2">{sponsor.name}</h3>
                  <p className="text-purple-600 font-heading font-semibold mb-4">{sponsor.type}</p>
                  <p className="text-purple-800 leading-relaxed font-body text-sm">
                    {sponsor.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Silver Sponsors */}
          <div>
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-display text-purple-950 mb-4">Silver Partners</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-purple-700 mx-auto rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { name: "Startupfest", logo: "🎪" },
                { name: "Montreal NewTech", logo: "💻" },
                { name: "Centech", logo: "🔬" },
                { name: "District 3", logo: "🏢" },
                { name: "CCMM", logo: "🤝" },
                { name: "Techstars", logo: "⭐" },
                { name: "DMZ", logo: "🎯" },
                { name: "FounderFuel", logo: "⚡" }
              ].map((sponsor, index) => (
                <div key={index} className="glass rounded-2xl p-6 text-center hover-lift animate-fade-in-up" style={{animationDelay: `${index * 0.05}s`}}>
                  <div className="text-4xl mb-3">{sponsor.logo}</div>
                  <h3 className="text-lg font-heading text-purple-950">{sponsor.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
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

      {/* Become a Sponsor CTA */}
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
            <button className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-12 py-5 rounded-2xl hover:from-purple-600 hover:to-purple-700 transition-all duration-300 font-heading text-xl font-semibold hover-lift animate-pulse-glow">
              Become a Sponsor
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}