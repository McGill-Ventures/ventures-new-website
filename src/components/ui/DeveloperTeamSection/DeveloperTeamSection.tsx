import React from 'react';
import { DeveloperTeamMember } from '@/types';
import { TeamCard } from '../TeamCard/TeamCard';

interface DeveloperTeamSectionProps {
  members: DeveloperTeamMember[];
  headOfEngineering: DeveloperTeamMember;
}

export const DeveloperTeamSection: React.FC<DeveloperTeamSectionProps> = ({ 
  members, 
  headOfEngineering 
}) => {
  return (
    <section className="px-6 py-32 md:px-12 lg:px-24 relative bg-white animate-fade-in-up">
      <div className="absolute inset-0 bg-gradient-radial"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-display text-purple-950 mb-8">Development Team</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-purple-700 mx-auto rounded-full"></div>
        </div>
        
        <div className="flex justify-center mb-16">
          <TeamCard
            member={headOfEngineering}
            index={0}
            variant="head"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {members.map((member, index) => (
            <TeamCard
              key={member.name}
              member={member}
              index={index}
              variant="developer"
            />
          ))}
        </div>
      </div>
    </section>
  );
};