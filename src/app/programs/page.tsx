import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Programs() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage="/programs" />

      {/* Hero Section */}
      <section className="px-6 py-20 md:px-12 lg:px-24 relative bg-gradient-hero">
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

      {/* Main Programs */}
      <section className="px-6 py-32 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-display text-purple-950 mb-8">Open Programs</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-purple-700 mx-auto rounded-full"></div>
          </div>
          
          {/* No Programs Available Message */}
          <div className="text-center glass rounded-3xl p-16 hover-lift animate-fade-in-up max-w-4xl mx-auto">
            <div className="w-32 h-32 bg-gradient-to-br from-purple-200 to-purple-300 rounded-full mx-auto mb-8 flex items-center justify-center">
              <svg className="w-16 h-16 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-4xl font-display text-purple-950 mb-6">No Open Programs Currently</h3>
            <p className="text-xl text-purple-800 font-body mb-8 leading-relaxed max-w-2xl mx-auto">
              We're currently planning our next cohort of programs for the upcoming semester. 
              Check back soon for exciting opportunities to join our VC training and startup accelerator programs!
            </p>
            <div className="bg-purple-100 rounded-xl p-6 mb-8">
              <h4 className="text-lg font-heading text-purple-950 mb-3">Stay Updated</h4>
              <p className="text-purple-700 font-body">
                Follow us on social media to be the first to know when applications open for our next programs.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://www.instagram.com/mcgillvc" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border-2 border-purple-300 text-purple-700 px-8 py-3 rounded-xl hover:border-purple-500 hover:text-purple-900 transition-all duration-300 font-heading font-semibold flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Follow Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Programs Preview */}
      <section className="px-6 py-32 md:px-12 lg:px-24 bg-gradient-to-br from-purple-50/30 to-purple-100/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-display text-purple-950 mb-8">What's Coming</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-purple-700 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16">
            {[
              {
                title: "Analyst Program",
                description: "A comprehensive program covering fundamentals of venture capital, deal sourcing, due diligence, and portfolio management.",
                features: [
                  "Weekly workshops with industry professionals",
                  "Case study analysis and pitch competitions",
                  "Mentorship from experienced VCs",
                  "Networking events with startup founders"
                ],
                duration: "16 weeks",
                commitment: "4-6 hours/week",
                status: "Applications re-open Winter 2026"
              }
            ].map((program, index) => (
              <div key={index} className="glass rounded-3xl p-10 hover-lift animate-fade-in-up opacity-75" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="bg-purple-200 text-purple-800 px-4 py-2 rounded-full text-sm font-heading font-semibold mb-6 inline-block">
                  {program.status}
                </div>
                <h3 className="text-4xl font-display text-purple-950 mb-6">{program.title}</h3>
                <p className="text-lg text-purple-800 font-body mb-8 leading-relaxed">
                  {program.description}
                </p>
                
                <div className="mb-8">
                  <h4 className="text-xl font-heading text-purple-950 mb-4">Program Features:</h4>
                  <ul className="space-y-3">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-purple-700 font-body">
                        <svg className="w-5 h-5 text-purple-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-purple-100 rounded-xl p-4 text-center">
                    <div className="text-sm font-heading text-purple-700">Duration</div>
                    <div className="text-lg font-display text-purple-950">{program.duration}</div>
                  </div>
                  <div className="bg-purple-100 rounded-xl p-4 text-center">
                    <div className="text-sm font-heading text-purple-700">Commitment</div>
                    <div className="text-lg font-display text-purple-950">{program.commitment}</div>
                  </div>
                </div>

                <button disabled className="w-full bg-purple-300 text-purple-600 px-8 py-4 rounded-xl cursor-not-allowed font-heading text-lg font-semibold">
                  Applications Open Soon
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Initiatives */}
      <section className="px-6 py-32 md:px-12 lg:px-24 bg-gradient-to-br from-purple-50/30 to-purple-100/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-display text-purple-950 mb-8">Educational Initiatives</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-purple-700 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Guest Speaker Series",
                description: "Monthly talks featuring successful entrepreneurs, VCs, and industry leaders sharing insights and experiences.",
                icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              },
              {
                title: "Pitch Competitions",
                description: "Regular competitions where students present their startup ideas to panels of experienced judges for feedback and prizes.",
                icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              },
              {
                title: "Workshops & Bootcamps",
                description: "Hands-on learning sessions covering topics like financial modeling, market analysis, and startup fundamentals.",
                icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              }
            ].map((initiative, index) => (
              <div key={index} className="text-center glass rounded-3xl p-8 hover-lift animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={initiative.icon} />
                  </svg>
                </div>
                <h3 className="text-2xl font-display text-purple-950 mb-4">{initiative.title}</h3>
                <p className="text-purple-800 leading-relaxed font-body">
                  {initiative.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="px-6 py-32 md:px-12 lg:px-24 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-display text-purple-950 mb-8">How to Apply</h2>
            <p className="text-xl text-purple-800 leading-relaxed font-body mb-16">
              Join McGill Ventures and be part of Montreal's most dynamic student entrepreneurship community
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                step: "01",
                title: "Submit Application",
                description: "Complete our online application form with your background and interests"
              },
              {
                step: "02", 
                title: "Interview Process",
                description: "Participate in a brief interview to discuss your goals and passion for entrepreneurship"
              },
              {
                step: "03",
                title: "Welcome & Onboarding",
                description: "Join our community and begin your journey in venture capital and startups"
              }
            ].map((step, index) => (
              <div key={index} className="animate-fade-in-up" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="text-6xl font-display text-purple-300 mb-4">{step.step}</div>
                <h3 className="text-2xl font-heading text-purple-950 mb-4">{step.title}</h3>
                <p className="text-purple-700 font-body">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="animate-fade-in-up">
            <button className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-12 py-5 rounded-2xl hover:from-purple-700 hover:to-purple-800 transition-all duration-300 font-heading text-xl font-semibold hover-lift animate-pulse-glow">
              Start Your Application
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}