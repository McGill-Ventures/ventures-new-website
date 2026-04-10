import React from 'react';
import { ExecutiveTeamMember } from '@/types';
import { TeamCard } from '../TeamCard/TeamCard';

interface ExecutiveTeamSectionProps {
  members: ExecutiveTeamMember[];
  title?: string;
}

export const ExecutiveTeamSection: React.FC<ExecutiveTeamSectionProps> = ({ members, title = "Executive Team" }) => {
  // Separate Co-Presidents from other executive members
  const leadership = members.filter(member => member.role.includes('Co-President'));

  const founderIC = members.filter(m =>
    !leadership.includes(m) &&
    m.role.includes('Founder & IC')
  );

  const financeFund = members.filter(m =>
    !leadership.includes(m) &&
    !founderIC.includes(m) &&
    (m.role.includes('Finance') || m.role.includes('Managing Director'))
  );

  const events = members.filter(m =>
    !leadership.includes(m) &&
    !financeFund.includes(m) &&
    (m.role.includes('Events') || m.role.includes('Event'))
  );

  const corporateRelations = members.filter(m =>
    !leadership.includes(m) &&
    !founderIC.includes(m) &&
    !financeFund.includes(m) &&
    !events.includes(m) &&
    (m.role.includes('Partnerships') || m.role.includes('Sponsorship'))
  );

  const marketing = members.filter(m =>
    !leadership.includes(m) &&
    !founderIC.includes(m) &&
    !financeFund.includes(m) &&
    !events.includes(m) &&
    !corporateRelations.includes(m) &&
    m.role.includes('Marketing')
  );

  const seniorAnalysts = members.filter(m =>
    !leadership.includes(m) &&
    !founderIC.includes(m) &&
    !financeFund.includes(m) &&
    !events.includes(m) &&
    !corporateRelations.includes(m) &&
    !marketing.includes(m) &&
    (m.role.includes('Senior Analyst') || m.role.includes('Fund Principal'))
  );

  const operations = members.filter(m =>
    !leadership.includes(m) &&
    !founderIC.includes(m) &&
    !financeFund.includes(m) &&
    !events.includes(m) &&
    !corporateRelations.includes(m) &&
    !marketing.includes(m) &&
    !seniorAnalysts.includes(m)
  );

  return (
    <section className="px-6 py-32 md:px-12 lg:px-24 relative bg-white animate-fade-in-up">
      <div className="absolute inset-0 bg-gradient-radial"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-display text-purple-950 mb-8">{title}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-purple-700 mx-auto rounded-full"></div>
        </div>
        
        {/* Co-Presidents Section */}
        {leadership.length > 0 && (
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-display text-purple-950 mb-6">Leadership</h3>
            </div>
            <div className="flex justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-16 max-w-4xl">
                {leadership.map((member, index) => (
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

        {/* Founder & IC */}
        {founderIC.length > 0 && (
          <div className="mb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16">
            {founderIC.map((member, index) => (
              <div key={member.name} className="sm:col-start-1 lg:col-start-2">
                <TeamCard
                  member={member}
                  index={index + leadership.length}
                  variant="executive"
                />
              </div>
            ))}
          </div>
        )}

        {/* Operations Team */}
        {operations.length > 0 && (
          <div className="mb-20">
            {title !== "Founders" && (
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-display text-purple-950 mb-6">Operations</h3>
              </div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16">
              {operations.map((member, index) => (
                <TeamCard
                  key={member.name}
                  member={member}
                  index={index + leadership.length + founderIC.length}
                  variant="executive"
                />
              ))}
            </div>
          </div>
        )}

        {/* Events Team */}
        {events.length > 0 && (
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-display text-purple-950 mb-6">Events Team</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16">
              {events.map((member, index) => (
                <TeamCard
                  key={member.name}
                  member={member}
                  index={index + leadership.length}
                  variant="executive"
                />
              ))}
            </div>
          </div>
        )}

        {/* Finance & Fund Team */}
        {financeFund.length > 0 && (
          <div>
            {title === "Executive Team" && (
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-display text-purple-950 mb-6">Finance</h3>
              </div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16">
              {financeFund.map((member, index) => (
                <TeamCard
                  key={member.name}
                  member={member}
                  index={index + leadership.length + events.length}
                  variant="executive"
                />
              ))}
            </div>
          </div>
        )}

        {/* Corporate Relations */}
        {corporateRelations.length > 0 && (
          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-display text-purple-950 mb-6">Corporate Relations</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16">
              {corporateRelations.map((member, index) => (
                <TeamCard
                  key={member.name}
                  member={member}
                  index={index + leadership.length + events.length + financeFund.length}
                  variant="executive"
                />
              ))}
            </div>
          </div>
        )}

        {/* Marketing */}
        {marketing.length > 0 && (
          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-display text-purple-950 mb-6">Marketing</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16">
              {marketing.map((member, index) => (
                <TeamCard
                  key={member.name}
                  member={member}
                  index={index + leadership.length + events.length + financeFund.length + corporateRelations.length}
                  variant="executive"
                />
              ))}
            </div>
          </div>
        )}

        {/* Senior Analysts */}
        {seniorAnalysts.length > 0 && (
          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-display text-purple-950 mb-6">Analysts</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16">
              {seniorAnalysts.map((member, index) => (
                <TeamCard
                  key={member.name}
                  member={member}
                  index={index + leadership.length + events.length + financeFund.length}
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