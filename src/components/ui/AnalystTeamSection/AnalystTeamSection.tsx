import React from 'react';
import { AnalystTeamMember } from '@/types';
import { TeamCard } from '../TeamCard/TeamCard';

interface AnalystTeamSectionProps {
  members: AnalystTeamMember[];
}

export const AnalystTeamSection: React.FC<AnalystTeamSectionProps> = ({ members }) => {
  const programManagers = members.filter((m) => (
    m.role && m.role.toLowerCase().includes('program manager')
  ));

  const analysts = members.filter((m) => !(
    m.role && m.role.toLowerCase().includes('program manager')
  ));

  return (
    <section className="px-6 py-32 md:px-12 lg:px-24 relative bg-white animate-fade-in-up">
      <div className="absolute inset-0 bg-gradient-radial"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-display text-purple-950 mb-8">Analyst Team</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-purple-700 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 mb-16">
          {programManagers.map((member, index) => (
            <TeamCard
              key={member.name}
              member={member}
              index={index}
              variant="head"
            />
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {analysts.map((member, idx) => (
            <TeamCard
              key={member.name}
              member={member}
              index={idx}
              variant="analyst"
            />
          ))}
        </div>
      </div>
    </section>
  );
};