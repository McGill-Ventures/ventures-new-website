import React from 'react';
import { TeamSectionProps, TeamType } from '@/types';
import { cn } from '@/lib/utils';
import { TEAM_TYPES } from '@/constants';

interface TeamTab {
  key: TeamType;
  label: string;
}

const TEAM_TABS: TeamTab[] = [
  { key: TEAM_TYPES.EXECUTIVE, label: 'Executive Team' },
  { key: TEAM_TYPES.ANALYST, label: 'Analyst Team' },
  { key: TEAM_TYPES.DEVELOPER, label: 'Development Team' },
];

export const TeamNavigation: React.FC<TeamSectionProps> = ({ activeTeam, setActiveTeam }) => {
  return (
    <section className="px-6 py-12 md:px-12 lg:px-24 bg-white border-b border-purple-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center space-x-8 animate-fade-in-up">
          {TEAM_TABS.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActiveTeam(key)}
              className={cn(
                "px-8 py-3 rounded-xl font-heading font-semibold text-lg transition-all duration-300 cursor-pointer",
                activeTeam === key
                  ? "bg-purple-600 text-white hover:bg-purple-700"
                  : "border-2 border-purple-300 text-purple-700 hover:border-purple-500 hover:text-purple-900"
              )}
              aria-pressed={activeTeam === key}
              role="tab"
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};