import React from 'react';
import Link from 'next/link';

export const GetInvolvedSection: React.FC = () => {
  return (
    <section className="px-6 py-16 md:px-12 lg:px-24 bg-gradient-to-br from-white to-purple-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-display text-purple-950 mb-6">
            Get Involved
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-purple-600 to-purple-700 mx-auto rounded-full mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Students */}
          <div className="glass rounded-2xl p-8 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-heading text-purple-950 mb-4">Students</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-heading text-blue-900 mb-2">Apply to the Analyst Program</h4>
                <p className="text-blue-800 font-body text-sm mb-3">Full training and hands-on investment experience needed — we train you.</p>
                <Link 
                  href="/programs#analyst-program"
                  className="inline-block text-blue-600 hover:text-blue-700 font-semibold text-sm underline"
                >
                  Learn More About the Analyst Program →
                </Link>
              </div>
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-heading text-blue-900 mb-2">Top performing analysts join the Investment Team</h4>
                <p className="text-blue-800 font-body text-sm">Working directly on deals</p>
              </div>
            </div>
          </div>

          {/* Startups */}
          <div className="glass rounded-2xl p-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-heading text-purple-950 mb-4">Startups</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-green-50 rounded-lg p-4">
                <p className="text-green-800 font-body text-sm mb-3">
                  If you&apos;re McGill-connected and building something we want to support,
                </p>
                <p className="text-green-800 font-body text-sm mb-3">
                  We have <strong>$10K-$50K</strong> at the pre-seed stage.
                </p>
                <p className="text-green-800 font-body text-sm">
                  <strong>Submit your deck:</strong><br />
                  <a href="mailto:mcgillventuresclub@gmail.com" className="text-green-700 hover:text-green-600 underline">
                    mcgillventuresclub@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Sponsors */}
          <div className="glass rounded-2xl p-8 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 0h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-2xl font-heading text-purple-950 mb-4">Sponsors (Alumni, Donors, Partners)</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-purple-50 rounded-lg p-4">
                <p className="text-purple-800 font-body text-sm mb-3">
                  <strong>This is an alumni-driven initiative</strong> supported by University Advancement.
                </p>
                <p className="text-purple-800 font-body text-sm mb-3">
                  Join the McGill innovation ecosystem generation of builders and investors.
                </p>
                <p className="text-purple-800 font-body text-sm mb-3">
                  <strong>Benefits from contribution:</strong> Alumni, donors, or corporate sponsorship
                </p>
                <p className="text-purple-800 font-body text-sm">
                  <strong>Access to the McGill founder ecosystem</strong>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Opportunities */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="glass rounded-2xl p-8 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <h3 className="text-2xl font-heading text-purple-950 mb-6 text-center">
              Opportunities to mentor and advise students
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-4"></div>
                <p className="text-purple-800 font-body">Talent pipeline for internships and hiring</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-4"></div>
                <p className="text-purple-800 font-body">Curated visibility into early-stage deal flow (no investing allowed under policy)</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-4"></div>
                <p className="text-purple-800 font-body">Quarterly updates on pipeline and progress</p>
              </div>
            </div>
          </div>

          <div className="glass rounded-2xl p-8 animate-fade-in-up" style={{animationDelay: '0.5s'}}>
            <h3 className="text-2xl font-heading text-purple-950 mb-6 text-center">
              To request the full deck or proposal:
            </h3>
            <div className="text-center">
              <div className="bg-purple-600 text-white rounded-lg p-6">
                <p className="font-heading text-lg mb-4">Contact Us</p>
                <a 
                  href="mailto:mcgillventuresfund@gmail.com" 
                  className="text-purple-100 hover:text-white font-body underline text-lg"
                >
                  mcgillventuresfund@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          <div className="glass rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-heading text-purple-950 mb-6">Ready to Get Involved?</h3>
            <p className="text-lg text-purple-800 font-body mb-8">
              Whether you&apos;re a student looking to gain real investment experience, a startup seeking funding, 
              or an alumni wanting to support the next generation of McGill entrepreneurs — we want to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/programs#analyst-program"
                className="inline-block bg-purple-600 text-white px-8 py-4 rounded-xl font-heading font-semibold hover:bg-purple-700 transition-colors duration-300 text-center"
              >
                Apply as Student
              </Link>
              <a 
                href="mailto:mcgillventuresfund@gmail.com"
                className="inline-block border-2 border-purple-600 text-purple-700 px-8 py-4 rounded-xl font-heading font-semibold hover:bg-purple-600 hover:text-white transition-colors duration-300 text-center"
              >
                Submit Startup Deck
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};