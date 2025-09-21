"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { TeamNavigation } from "@/components/ui/TeamNavigation/TeamNavigation";
import { ExecutiveTeamSection } from "@/components/ui/ExecutiveTeamSection/ExecutiveTeamSection";
import { AnalystTeamSection } from "@/components/ui/AnalystTeamSection/AnalystTeamSection";
import { DeveloperTeamSection } from "@/components/ui/DeveloperTeamSection/DeveloperTeamSection";
import { TeamType } from "@/types";
import { TEAM_TYPES, EXECUTIVE_TEAM, ANALYST_TEAM, DEVELOPMENT_TEAM, HEAD_OF_ENGINEERING } from "@/constants";

export default function Team() {
  const [activeTeam, setActiveTeam] = useState<TeamType>(TEAM_TYPES.EXECUTIVE);

  const renderTeamSection = () => {
    switch (activeTeam) {
      case TEAM_TYPES.EXECUTIVE:
        return <ExecutiveTeamSection members={EXECUTIVE_TEAM} />;
      case TEAM_TYPES.ANALYST:
        return <AnalystTeamSection members={ANALYST_TEAM} />;
      case TEAM_TYPES.DEVELOPER:
        return (
          <DeveloperTeamSection 
            members={DEVELOPMENT_TEAM} 
            headOfEngineering={HEAD_OF_ENGINEERING} 
          />
        );
      default:
        return <ExecutiveTeamSection members={EXECUTIVE_TEAM} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage="/team" />

      <section className="px-6 py-20 md:px-12 lg:px-24 relative bg-gradient-hero">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-display text-purple-950 mb-8">
              Our Team
            </h1>
          </div>
        </div>
      </section>

      <TeamNavigation activeTeam={activeTeam} setActiveTeam={setActiveTeam} />

      {renderTeamSection()}

      <Footer />
    </div>
  );
}