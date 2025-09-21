"use client";

import Image from "next/image";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import DirectorTech from "../../../public/headshots/development/wsomji.jpeg";
import { useState } from "react";

export default function Team() {
  const [activeTeam, setActiveTeam] = useState<'executive' | 'analyst' | 'dev'>('executive');

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage="/team" />

      {/* Hero Section with Image Space */}
      <section className="px-6 py-20 md:px-12 lg:px-24 relative bg-gradient-hero">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-display text-purple-950 mb-8">
              Our Team
            </h1>
          </div>
        </div>
      </section>

      {/* Team Navigation Tabs */}
      <section className="px-6 py-12 md:px-12 lg:px-24 bg-white border-b border-purple-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center space-x-8 animate-fade-in-up">
            <button 
              onClick={() => setActiveTeam('executive')}
              className={`px-8 py-3 rounded-xl font-heading font-semibold text-lg transition-all duration-300 cursor-pointer ${
                activeTeam === 'executive' 
                  ? 'bg-purple-600 text-white hover:bg-purple-700' 
                  : 'border-2 border-purple-300 text-purple-700 hover:border-purple-500 hover:text-purple-900'
              }`}
            >
              Executive Team
            </button>
            <button 
              onClick={() => setActiveTeam('analyst')}
              className={`px-8 py-3 rounded-xl font-heading font-semibold text-lg transition-all duration-300 cursor-pointer ${
                activeTeam === 'analyst' 
                  ? 'bg-purple-600 text-white hover:bg-purple-700' 
                  : 'border-2 border-purple-300 text-purple-700 hover:border-purple-500 hover:text-purple-900'
              }`}
            >
              Analyst Team
            </button>
            <button 
              onClick={() => setActiveTeam('dev')}
              className={`px-8 py-3 rounded-xl font-heading font-semibold text-lg transition-all duration-300 cursor-pointer ${
                activeTeam === 'dev' 
                  ? 'bg-purple-600 text-white hover:bg-purple-700' 
                  : 'border-2 border-purple-300 text-purple-700 hover:border-purple-500 hover:text-purple-900'
              }`}
            >
              Development Team
            </button>
          </div>
        </div>
      </section>

      {/* Executive Team */}
      {activeTeam === 'executive' && (
        <section className="px-6 py-32 md:px-12 lg:px-24 relative bg-white animate-fade-in-up">
          <div className="absolute inset-0 bg-gradient-radial"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-5xl md:text-6xl font-display text-purple-950 mb-8">Executive Team</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-purple-700 mx-auto rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-3 gap-16">
              {[
                { 
                  name: "Sarah Chen", 
                  role: "Managing Partner", 
                  experience: "Former Goldman Sachs VP, 15+ years in VC",
                  bio: "Sarah leads McGill Ventures with over 15 years of experience in venture capital and investment banking. She has a proven track record of identifying and nurturing high-growth technology companies.",
                  education: "MBA Harvard Business School, BS MIT"
                },
                { 
                  name: "Michael Rodriguez", 
                  role: "General Partner", 
                  experience: "Ex-Google Product Lead, Deep Tech Expert",
                  bio: "Michael brings extensive product development and deep technology expertise to our portfolio companies. He previously led product teams at Google and has founded two successful startups.",
                  education: "MS Stanford Computer Science, BS UC Berkeley"
                },
                { 
                  name: "Emily Watson", 
                  role: "Principal", 
                  experience: "McKinsey Consultant, Growth Strategy Specialist",
                  bio: "Emily specializes in growth strategy and operational excellence. Her consulting background at McKinsey & Company provides valuable insights for scaling portfolio companies.",
                  education: "MBA Wharton, BA Yale Economics"
                }
              ].map((member, index) => (
                <div key={index} className="text-center group animate-fade-in-up glass rounded-3xl p-10" style={{animationDelay: `${index * 0.2}s`}}>
                  <div className="w-48 h-48 bg-gradient-to-br from-purple-200 to-purple-300 rounded-full mx-auto mb-8 group-hover:scale-105 transition-all duration-300 relative overflow-hidden shadow-xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="text-3xl font-display text-purple-950 mb-3">{member.name}</h3>
                  <p className="text-purple-600 font-heading font-semibold mb-4 text-xl">{member.role}</p>
                  <p className="text-purple-700 font-body text-lg mb-6">{member.experience}</p>
                  <p className="text-purple-800 leading-relaxed font-body mb-4">{member.bio}</p>
                  <p className="text-purple-600 font-body text-sm">{member.education}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Analyst Team */}
      {activeTeam === 'analyst' && (
        <section className="px-6 py-32 md:px-12 lg:px-24 bg-gradient-to-br from-purple-50/30 to-purple-100/20 animate-fade-in-up">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-5xl md:text-6xl font-display text-purple-950 mb-8">Analyst Team</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-purple-700 mx-auto rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-4 gap-12">
              {[
                { 
                  name: "Alex Thompson", 
                  role: "Senior Analyst", 
                  experience: "Ex-McKinsey, MIT Sloan MBA",
                  specialization: "AI & Machine Learning"
                },
                { 
                  name: "Jessica Park", 
                  role: "Investment Analyst", 
                  experience: "Former JPMorgan, CFA",
                  specialization: "Fintech & Blockchain"
                },
                { 
                  name: "David Kumar", 
                  role: "Research Analyst", 
                  experience: "Ex-Bain, Stanford MS",
                  specialization: "Biotech & Healthcare"
                },
                { 
                  name: "Maria Santos", 
                  role: "Junior Analyst", 
                  experience: "Wharton MBA, BCG",
                  specialization: "Clean Technology"
                }
              ].map((analyst, index) => (
                <div key={index} className="text-center group animate-fade-in-up glass rounded-3xl p-8" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="w-32 h-32 bg-gradient-to-br from-purple-300 to-purple-400 rounded-full mx-auto mb-6 group-hover:scale-105 transition-all duration-300 relative overflow-hidden shadow-lg">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="text-2xl font-display text-purple-950 mb-2">{analyst.name}</h3>
                  <p className="text-purple-600 font-heading font-semibold mb-3 text-lg">{analyst.role}</p>
                  <p className="text-purple-700 font-body text-sm mb-3">{analyst.experience}</p>
                  <div className="bg-purple-100 px-3 py-1 rounded-full text-purple-800 text-xs font-heading font-semibold">
                    {analyst.specialization}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Development Team */}
      {activeTeam === 'dev' && (
        <section className="px-6 py-32 md:px-12 lg:px-24 bg-white animate-fade-in-up">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-5xl md:text-6xl font-display text-purple-950 mb-8">Development Team</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-purple-700 mx-auto rounded-full"></div>
            </div>
            
            {/* Head of Engineering */}
            <div className="flex justify-center mb-16">
              <div className="text-center group animate-fade-in-up glass rounded-3xl p-12 max-w-md">
                <div className="w-48 h-48 rounded-full mx-auto mb-8 group-hover:scale-105 transition-all duration-300 relative overflow-hidden shadow-xl">
                  <Image
                    src={DirectorTech}
                    alt="Wasif Somji - Head of Engineering"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-700/20 to-purple-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <h3 className="text-3xl font-display text-purple-950 mb-3">Wasif Somji</h3>
                <p className="text-purple-600 font-heading font-semibold mb-4 text-xl">Head of Engineering</p>
                <p className="text-purple-700 font-body text-lg mb-4">Prev @ Amazon, Lightspeed</p>
                <p className="text-purple-800 leading-relaxed font-body mb-6">Wasif oversees all technical initiatives and leads our engineering strategy for all internal and external software development.</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {["System Architecture", "Team Leadership", "Product Management", "Fullstack Development", "Scaling"].map((skill, skillIndex) => (
                    <span key={skillIndex} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-heading font-semibold">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {[
                { 
                  name: "Julien Heng", 
                  role: "Senior Software Engineer", 
                  skills: ["Next.js", "TypeScript", "Tailwind CSS"],
                  bio: "Julien builds robust, scalable features and leads and mentors juniors."
                },
                { 
                  name: "Jaden Hum", 
                  role: "Senior Frontend Developer", 
                  skills: ["Next.js", "TypeScript", "Tailwind CSS"],
                  bio: "Jaden creates beautiful, user-centric experiences for our website."
                },
                { 
                  name: "Noah Chen", 
                  role: "Intermediate Frontend Developer", 
                  skills: ["React.js", "Tailwind CSS"],
                  bio: "Noah delivers polished interfaces and ensures seamless UX."
                }
              ].map((dev, index) => (
                <div key={index} className="text-center group animate-fade-in-up glass rounded-3xl p-10" style={{animationDelay: `${index * 0.2}s`}}>
                  <div className="w-40 h-40 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full mx-auto mb-8 group-hover:scale-105 transition-all duration-300 relative overflow-hidden shadow-xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-purple-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="text-2xl font-display text-purple-950 mb-3">{dev.name}</h3>
                  <p className="text-purple-600 font-heading font-semibold mb-4 text-xl">{dev.role}</p>
                  <p className="text-purple-800 leading-relaxed font-body mb-6">{dev.bio}</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {dev.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-heading font-semibold">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}