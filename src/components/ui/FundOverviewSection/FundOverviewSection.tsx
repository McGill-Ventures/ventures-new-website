import React from 'react';

export const FundOverviewSection: React.FC = () => {
  return (
    <section className="px-6 py-16 md:px-12 lg:px-24 bg-gradient-to-br from-white to-purple-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-display text-purple-950 mb-6">
            What We&apos;re Doing Right Now
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-purple-600 to-purple-700 mx-auto rounded-full mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Fund Status */}
          <div className="glass rounded-2xl p-8 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-heading text-purple-950 mb-2">Fund Status</h3>
              <p className="text-purple-800 font-body">Building the $500K pilot fund</p>
            </div>
          </div>

          {/* Portfolio */}
          <div className="glass rounded-2xl p-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading text-purple-950 mb-2">Portfolio</h3>
              <p className="text-purple-800 font-body">12-18 investments over 3 years</p>
            </div>
          </div>

          {/* Check Size */}
          <div className="glass rounded-2xl p-8 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading text-purple-950 mb-2">Check Size</h3>
              <p className="text-purple-800 font-body">$10K-$50K per company (via SAFE)</p>
            </div>
          </div>
        </div>

        {/* Current Activities */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-heading text-purple-950 mb-6">Current Focus</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-4"></div>
                  <p className="text-purple-800 font-body">Raising the $500K pilot fund with support from McGill alumni and partners</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-4"></div>
                  <p className="text-purple-800 font-body">Identifying McGill-founded startups and early-stage faculties and research groups</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-4"></div>
                  <p className="text-purple-800 font-body">Training student analysts in sourcing, evaluating founders, market research, and diligence</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-4"></div>
                  <p className="text-purple-800 font-body">Assembling an Investment Committee & Board of experienced alumni, founders, and investors</p>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-fade-in-up" style={{animationDelay: '0.5s'}}>
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-heading text-purple-950 mb-6">Additional Activities</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-4"></div>
                  <p className="text-purple-800 font-body">Once the fund is active, we will conduct <strong>full due diligence</strong></p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-4"></div>
                  <p className="text-purple-800 font-body">Prepare <strong>investment memos</strong></p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-4"></div>
                  <p className="text-purple-800 font-body">Deploy capital responsibly and support founders through early stages</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Investment Focus */}
        <div className="mb-16 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          <div className="glass rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-heading text-purple-950 mb-8 text-center">Investment Focus</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#3D1551'}}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h4 className="text-lg font-heading text-purple-950 mb-2">Founder Requirement</h4>
                <p className="text-purple-800 font-body">Must have a McGill connection</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#3D348B'}}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h4 className="text-lg font-heading text-purple-950 mb-2">Sectors</h4>
                <p className="text-purple-800 font-body">Open to all sectors, often software, AI, healthtech, climate, deep tech, fintech</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#7678ED'}}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h4 className="text-lg font-heading text-purple-950 mb-2">Stage</h4>
                <p className="text-purple-800 font-body">Pre-seed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Why We Exist */}
        <div className="text-center animate-fade-in-up" style={{animationDelay: '0.7s'}}>
          <div className="glass rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-heading text-purple-950 mb-6">Why We Exist</h3>
            <p className="text-lg text-purple-800 font-body mb-4">
              McGill founders often struggle to secure early funding and mentorship.
            </p>
            <p className="text-lg text-purple-800 font-body mb-4">
              <strong>Students interested in VC</strong> rarely get hands-on investment experience.
            </p>
            <p className="text-lg text-purple-800 font-body">
              <strong>This fund provides:</strong> founders with capital and students with real responsibility — not simulations.
            </p>
            <div className="mt-8">
              <h4 className="text-xl font-heading text-purple-950 mb-4">We fix both sides of the problem.</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};