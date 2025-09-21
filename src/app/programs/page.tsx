import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Icon, IconName } from "@/components/ui";
import { PROGRAM_DATA, EDUCATIONAL_INITIATIVES, APPLICATION_STEPS } from "@/constants";

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
      <section className="px-6 py-32 md:px-12 lg:px-24 bg-gradient-mesh">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-display text-purple-950 mb-8">Transform Your Future</h2>
            <p className="text-xl text-purple-800 leading-relaxed font-body max-w-3xl mx-auto">
              Choose from our intensive programs designed to give you real-world experience in venture capital and technology
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {PROGRAM_DATA.map((program, index) => (
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
                        <Icon name="check" className="text-purple-600 mr-3 mt-1 flex-shrink-0" size="sm" />
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
      <section className="px-6 py-32 md:px-12 lg:px-24 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-display text-purple-950 mb-8">Educational Initiatives</h2>
            <p className="text-xl text-purple-800 leading-relaxed font-body mb-16 max-w-3xl mx-auto">
              Beyond our core programs, we offer various educational opportunities for the entire McGill community
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {EDUCATIONAL_INITIATIVES.map((initiative, index) => (
              <div key={index} className="text-center glass rounded-3xl p-8 hover-lift animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Icon name={initiative.icon as IconName} className="text-white" size="lg" />
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
              Join McGill Ventures and be part of Montreal&apos;s most dynamic student entrepreneurship community
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
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
              Applications for our Winter 2026 cohort will open soon. Join our mailing list to be the first to know!
            </p>
            <button disabled className="bg-white text-purple-700 px-10 py-4 rounded-xl font-heading text-lg font-semibold cursor-not-allowed opacity-50">
              Notify Me When Applications Open
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}