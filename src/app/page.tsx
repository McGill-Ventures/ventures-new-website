import Image from "next/image";
import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="px-6 py-24 md:px-12 lg:px-24 relative min-h-[90vh] flex items-center bg-gradient-hero">
        <div className="absolute inset-0 bg-gradient-mesh opacity-60"></div>
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-purple-500/8 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-600/6 rounded-full blur-2xl animate-float" style={{animationDelay: '4s'}}></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display text-purple-950 leading-tight mb-8">
              Investing in the
              <span className="text-gradient animate-gradient block mt-4"> future </span>
              of innovation
            </h1>
          </div>
          <div className="animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            <p className="text-xl md:text-2xl lg:text-3xl text-purple-800 mb-16 max-w-4xl leading-relaxed font-body">
              McGill Ventures is a dynamic student-run organization fostering the next generation of venture capitalists and entrepreneurs. 
              We create an inspiring community where passionate McGill students explore startups, build networks, and develop the skills to shape the future of innovation.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-8 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <Link href="/sponsors">
              <button className="group bg-gradient-to-r from-purple-600 to-purple-700 text-white px-12 py-5 rounded-2xl hover:from-purple-700 hover:to-purple-800 transition-all duration-300 font-heading text-lg font-semibold hover-lift animate-pulse-glow relative overflow-hidden cursor-pointer">
                <span className="relative z-10">View Sponsors</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </Link>
            <Link href="/about">
              <button className="group border-2 border-purple-300 text-purple-800 px-12 py-5 rounded-2xl hover:border-purple-500 hover:text-purple-900 transition-all duration-300 font-heading text-lg font-semibold hover-lift glass relative overflow-hidden">
                <span className="relative z-10">Learn More</span>
                <div className="absolute inset-0 bg-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 py-32 md:px-12 lg:px-24 relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/8 to-purple-700/8"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-4 gap-16 text-center">
            {[
              { value: "2K+", label: "LinkedIn Followers" },
              { value: "1.7K+", label: "Instagram Followers" },
              { value: "3rd", label: "Largest Club in Desautels Faculty of Management" },
              { value: "70+", label: "Club Members" }
            ].map((stat, index) => (
              <div key={index} className="animate-fade-in-up group" style={{animationDelay: `${index * 0.15}s`}}>
                <div className="text-6xl md:text-7xl lg:text-8xl font-display text-gradient mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-purple-800 text-xl font-heading">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-32 md:px-12 lg:px-24 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-purple-500/10 to-transparent"></div>
        </div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display mb-10">
              Ready to Build the Future?
            </h2>
          </div>
          <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <p className="text-2xl md:text-3xl text-purple-100 mb-16 leading-relaxed font-body max-w-4xl mx-auto">
              We're always looking for exceptional entrepreneurs with bold visions. Let's discuss how we can help bring your revolutionary ideas to life.
            </p>
          </div>
          <div className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <Link href="/contact">
              <button className="group bg-gradient-to-r from-purple-500 to-purple-600 text-white px-16 py-6 rounded-2xl hover:from-purple-600 hover:to-purple-700 transition-all duration-300 font-heading text-2xl font-semibold hover-lift animate-pulse-glow relative overflow-hidden">
                <span className="relative z-10">Get in Touch</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
