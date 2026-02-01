import React from 'react';
import { TeamCard } from '@/components/ui/TeamCard/TeamCard';
import { MANAGING_DIRECTORS, GOVERNANCE_TEAM_MEMBERS, INVESTMENT_COMMITTEE, BOARD_OF_DIRECTORS } from '@/constants';

export const OurGovernanceSection: React.FC = () => {
  return (
    <section className="px-6 py-16 md:px-12 lg:px-24 bg-gradient-to-br from-purple-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-display text-purple-950 mb-6">
            Our Governance
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-purple-600 to-purple-700 mx-auto rounded-full mb-8"></div>
        </div>

        {/* Our Team */}
        <div className="mb-16 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
          <div className="glass rounded-2xl p-8 md:p-12">
            <div className="text-center mb-12">
              <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-3xl font-heading text-purple-950 mb-4">Our Team</h3>
            </div>

            {/* Managing Directors */}
            <div className="mb-12">
              <h4 className="text-2xl font-heading text-purple-950 mb-8 text-center">Managing Directors</h4>
              <div className="grid md:grid-cols-3 gap-8 justify-items-center max-w-4xl mx-auto">
                {MANAGING_DIRECTORS.map((member, index) => (
                  <TeamCard 
                    key={member.name}
                    member={member}
                    index={index}
                    variant="analyst"
                  />
                ))}
              </div>
            </div>

            {/* Team Members */}
            <div className="mb-12">
              <h4 className="text-2xl font-heading text-purple-950 mb-8 text-center">Team Members</h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center max-w-4xl mx-auto">
                {GOVERNANCE_TEAM_MEMBERS.map((member, index) => (
                  <TeamCard 
                    key={member.name}
                    member={member}
                    index={index}
                    variant="analyst"
                  />
                ))}
              </div>
            </div>

            <div className="text-center">
              <p className="text-lg text-purple-800 font-body">
                Supported by the <strong>McGill Ventures Club</strong> alumni mentors and faculty partners.
              </p>
            </div>
          </div>
        </div>

        {/* Investment Committee */}
        <div className="mb-16 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          <div className="glass rounded-2xl p-8 md:p-12">
            <div className="text-center mb-12">
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-3xl font-heading text-purple-950 mb-4">Investment Committee</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto justify-items-center">
              {INVESTMENT_COMMITTEE.map((member, index) => (
                <TeamCard 
                  key={member.name}
                  member={member}
                  index={index}
                  variant="analyst"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Board of Directors */}
        <div className="mb-16 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
          <div className="glass rounded-2xl p-8 md:p-12">
            <div className="text-center mb-12">
              <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-3xl font-heading text-purple-950 mb-4">Board of Directors</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto justify-items-center">
              {BOARD_OF_DIRECTORS.map((member, index) => (
                <TeamCard 
                  key={member.name}
                  member={member}
                  index={index}
                  variant="analyst"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Board Structure */}
        <div className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
          <div className="glass rounded-2xl p-8 md:p-12">
            <div className="text-center mb-12">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-3xl font-heading text-purple-950 mb-4">Board Structure</h3>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 rounded-xl p-4">
                  <h5 className="font-heading text-blue-950 mb-2">Board of Directors</h5>
                  <p className="text-blue-800 font-body">Investment Committee</p>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 rounded-xl p-4">
                  <h5 className="font-heading text-blue-950 mb-2">Board of Advisors</h5>
                  <p className="text-blue-800 font-body">Student Members</p>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 rounded-xl p-4">
                  <h5 className="font-heading text-blue-950 mb-2">Students</h5>
                  <p className="text-blue-800 font-body">Apply to Analyst Program</p>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 rounded-xl p-4">
                  <h5 className="font-heading text-blue-950 mb-2">Startups</h5>
                  <p className="text-blue-800 font-body">McGill-connected founders</p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="glass rounded-xl p-6 max-w-2xl mx-auto">
                <p className="text-lg text-purple-800 font-body">
                  <strong>Investment Process:</strong> Students present to Investment Committee, working directly on deals.
                </p>
                <p className="text-purple-800 font-body mt-3">
                  Top performing analysts join the <strong>Investment Team</strong>, working directly on deals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};