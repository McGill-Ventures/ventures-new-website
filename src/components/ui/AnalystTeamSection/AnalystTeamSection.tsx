import React from 'react';
import { AnalystTeamMember } from '@/types';
import { TeamCard } from '../TeamCard/TeamCard';

interface AnalystTeamSectionProps {
  members: AnalystTeamMember[];
}

export const AnalystTeamSection: React.FC<AnalystTeamSectionProps> = ({ members }) => {
  return (
    <section className="px-6 py-32 md:px-12 lg:px-24 relative bg-white animate-fade-in-up">
      <div className="absolute inset-0 bg-gradient-radial"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-display text-purple-950 mb-8">Analyst Team</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-purple-700 mx-auto rounded-full"></div>
        </div>
        
        <div className="text-center animate-fade-in-up">
          <div className="max-w-3xl mx-auto">
            <div className="glass rounded-3xl p-12 shadow-lg">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-4xl md:text-5xl font-display text-purple-950 mb-6">Coming Soon</h3>
              <p className="text-xl text-purple-800 leading-relaxed font-body mb-6">
                Our analyst team is currently being assembled. Stay tuned for updates on our talented analysts who will be joining McGill Ventures!
              </p>
              <div className="bg-purple-100 text-purple-800 px-6 py-3 rounded-full font-heading font-semibold inline-block">
                Recruitment in Progress
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};