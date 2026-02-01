import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { HOME_STATS } from "@/constants";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage="/" />

      <section className="px-6 py-32 md:px-12 lg:px-24 relative bg-gradient-hero overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-display text-purple-950 mb-8 leading-tight">
              Building the Future of <span className="text-gradient">Venture Capital</span>
            </h1>
            <p className="text-xl md:text-2xl text-purple-800 leading-relaxed font-body max-w-4xl mx-auto mb-12">
              McGill Ventures is Montreal&apos;s premier student-run venture capital organization, connecting ambitious students with the startup ecosystem through hands-on experience and mentorship.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/programs" className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-12 py-5 rounded-2xl hover:from-purple-700 hover:to-purple-800 transition-all duration-300 font-heading text-xl font-semibold hover-lift animate-pulse-glow">
                Explore Programs
              </Link>
              <Link href="/about" className="border-2 border-purple-300 text-purple-800 px-12 py-5 rounded-2xl hover:bg-purple-50 transition-all duration-300 font-heading text-xl font-semibold hover-lift">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-12 lg:px-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 text-center">
            {HOME_STATS.map((stat, index) => (
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

      {/* Why Choose McGill Ventures Section */}
      <section className="px-6 py-32 md:px-12 lg:px-24 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-left text-center lg:text-left">
              <h2 className="text-5xl md:text-6xl font-display mb-8">Why Choose McGill Ventures</h2>
              <p className="text-xl leading-relaxed font-body mb-8 text-purple-100">
                Join Montreal&apos;s most dynamic student venture capital community. Gain real-world experience, build lasting connections, and develop the skills to shape the future of entrepreneurship.
              </p>
              <div className="grid gap-8 max-w-2xl mx-auto lg:mx-0 lg:grid-cols-2">
                <div className="text-center lg:text-left">
                  <h3 className="text-2xl font-heading font-semibold mb-4 text-purple-200">Real Experience</h3>
                  <p className="text-purple-300 font-body">Work directly with startups, conduct due diligence, and participate in investment decisions.</p>
                </div>
                <div className="text-center lg:text-left">
                  <h3 className="text-2xl font-heading font-semibold mb-4 text-purple-200">Expert Network</h3>
                  <p className="text-purple-300 font-body">Connect with industry professionals, successful entrepreneurs, and leading investors.</p>
                </div>
              </div>
            </div>
            
            <div className="animate-fade-in-up flex justify-center">
              <div className="relative h-96 w-full max-w-sm lg:max-w-md xl:max-w-lg">
                <Image
                  src="/events/sign.jpg"
                  alt="McGill Ventures Community Event"
                  fill
                  className="rounded-3xl shadow-2xl hover-lift object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-purple-800/20 rounded-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
