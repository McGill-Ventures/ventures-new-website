import React from 'react';
import { ExecutiveTeamMember } from '@/types';
import { TeamCard } from '../TeamCard/TeamCard';

interface HTILTeamSectionProps {
  members: ExecutiveTeamMember[];
}

export const HTILTeamSection: React.FC<HTILTeamSectionProps> = ({ members }) => {
  const programLeaders = members.filter(m => m.role.includes('Program Leader'));
  const programManagers = members.filter(m => m.role.includes('Program Manager'));
  const innovationStrategists = members.filter(m => m.role.includes('Innovation Strategist'));
  const others = members.filter(m => !programLeaders.includes(m) && !programManagers.includes(m) && !innovationStrategists.includes(m));

  return (
    <section className="px-6 py-32 md:px-12 lg:px-24 relative bg-white animate-fade-in-up">
      <div className="absolute inset-0 bg-gradient-radial"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-display text-purple-950 mb-8">HTIL Program</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-purple-700 mx-auto rounded-full"></div>
        </div>

        {programLeaders.length > 0 && (
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-display text-purple-950 mb-6">Program Leaders</h3>
            </div>
            <div className="flex justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16 max-w-6xl">
                {programLeaders.map((member, index) => (
                  <TeamCard
                    key={member.name}
                    member={member}
                    index={index}
                    variant="executive"
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {programManagers.length > 0 && (
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-display text-purple-950 mb-6">Program Managers</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16">
              {programManagers.map((member, index) => (
                <TeamCard
                  key={member.name}
                  member={member}
                  index={index + programLeaders.length}
                  variant="executive"
                />
              ))}
            </div>
          </div>
        )}

        {innovationStrategists.length > 0 && (
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-display text-purple-950 mb-6">Innovation Strategists</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16">
              {innovationStrategists.map((member, index) => (
                <TeamCard
                  key={member.name}
                  member={member}
                  index={index + programLeaders.length + programManagers.length}
                  variant="executive"
                />
              ))}
            </div>
          </div>
        )}

        {others.length > 0 && (
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16">
              {others.map((member, index) => (
                <TeamCard
                  key={member.name}
                  member={member}
                  index={index + programLeaders.length + programManagers.length + innovationStrategists.length}
                  variant="executive"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
