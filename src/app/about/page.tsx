import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import mainImage from "../../../public/events/homeLanding.jpg";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage="/about" />

      <section className="px-6 py-20 md:px-12 lg:px-24 relative bg-gradient-hero">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-display text-purple-950 mb-8">
              About McGill Ventures
            </h1>
            <div className="w-32 h-1.5 bg-gradient-to-r from-purple-600 to-purple-700 mx-auto rounded-full mb-12"></div>
            <div className="w-3/4 md:w-2/3 lg:w-1/2 h-96 md:h-[50vh] bg-gradient-to-br from-purple-100 to-purple-200 rounded-3xl flex items-center justify-center mb-8 animate-fade-in-up overflow-hidden mx-auto" style={{animationDelay: '0.2s'}}>
              <Image 
                src={mainImage} 
                alt="McGill Ventures hero image" 
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-32 md:px-12 lg:px-24 bg-gradient-to-br from-purple-50/50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-16">
            {[
              {
                icon: "M13 10V3L4 14h7v7l9-11h-7z",
                title: "Innovation Focus",
                description: "We're building expertise in cutting-edge technologies and disruptive business models that have the potential to transform industries. Our focus spans AI, biotech, fintech, and emerging technologies as we prepare for future investments."
              },
              {
                icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
                title: "Learning & Development",
                description: "Our team is developing the skills and knowledge necessary to provide strategic guidance and mentorship to future portfolio companies. We're preparing to offer hands-on support throughout the entire growth journey."
              },
              {
                icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                title: "Network Building",
                description: "We're actively building relationships with industry leaders, advisors, and potential strategic partners to create a strong foundation for future investments and opportunities. Our network is growing across major markets and emerging ecosystems."
              }
            ].map((item, index) => (
              <div key={index} className="text-center group hover-lift animate-fade-in-up glass rounded-3xl p-10" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                  </svg>
                </div>
                <h3 className="text-3xl font-display text-purple-950 mb-6">{item.title}</h3>
                <p className="text-purple-800 leading-relaxed text-lg font-body">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-32 md:px-12 lg:px-24 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-display text-purple-950 mb-12">Our Mission</h2>
            <p className="text-2xl md:text-3xl text-purple-800 leading-relaxed font-body mb-16">
              To identify, invest in, and nurture the most promising entrepreneurs and technologies that will shape the future of our world. We believe in the power of innovation to solve humanity&apos;s greatest challenges.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}