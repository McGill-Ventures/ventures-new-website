import React from 'react';
import { GovernanceSectionProps, GovernanceType } from '@/types';
import { cn } from '@/lib/utils';
import { GOVERNANCE_TYPES } from '@/constants';

interface GovernanceTab {
  key: GovernanceType;
  label: string;
}

const GOVERNANCE_TABS: GovernanceTab[] = [
  { key: GOVERNANCE_TYPES.FUND_OVERVIEW, label: 'Fund Overview' },
  { key: GOVERNANCE_TYPES.GOVERNANCE, label: 'Our Governance' },
  { key: GOVERNANCE_TYPES.GET_INVOLVED, label: 'Get Involved' },
];

export const GovernanceNavigation: React.FC<GovernanceSectionProps> = ({ activeSection, setActiveSection }) => {
  return (
    <section className="px-6 py-12 md:px-12 lg:px-24 bg-white border-b border-purple-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 lg:gap-8 animate-fade-in-up">
          {GOVERNANCE_TABS.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActiveSection(key)}
              className={cn(
                "px-6 sm:px-8 py-3 rounded-xl font-heading font-semibold text-base sm:text-lg transition-all duration-300 cursor-pointer whitespace-nowrap",
                activeSection === key
                  ? "bg-purple-600 text-white hover:bg-purple-700"
                  : "border-2 border-purple-300 text-purple-700 hover:border-purple-500 hover:text-purple-900"
              )}
              role="tab"
              aria-selected={activeSection === key}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};