"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { GovernanceNavigation } from "@/components/ui/GovernanceNavigation/GovernanceNavigation";
import { FundOverviewSection } from "@/components/ui/FundOverviewSection/FundOverviewSection";
import { OurGovernanceSection } from "@/components/ui/OurGovernanceSection/OurGovernanceSection";
import { GetInvolvedSection } from "@/components/ui/GetInvolvedSection/GetInvolvedSection";
import { GovernanceType } from "@/types";
import { GOVERNANCE_TYPES } from "@/constants";

export default function Fund() {
  const [activeSection, setActiveSection] = useState<GovernanceType>(GOVERNANCE_TYPES.FUND_OVERVIEW);

  const renderGovernanceSection = () => {
    switch (activeSection) {
      case GOVERNANCE_TYPES.FUND_OVERVIEW:
        return <FundOverviewSection />;
      case GOVERNANCE_TYPES.GOVERNANCE:
        return <OurGovernanceSection />;
      case GOVERNANCE_TYPES.GET_INVOLVED:
        return <GetInvolvedSection />;
      default:
        return <FundOverviewSection />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage="/fund" />
      
      <section className="px-6 py-14 md:px-12 lg:px-24 relative bg-gradient-hero">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-display text-purple-950 mb-8">
              Fund
            </h1>
            <div className="w-32 h-1.5 bg-gradient-to-r from-purple-600 to-purple-700 mx-auto rounded-full mb-8"></div>
            <p className="text-xl md:text-2xl text-purple-800 font-body max-w-4xl mx-auto leading-relaxed">
              Discover our fund structure, investment approach, and opportunities to get involved 
              with McGill Ventures&apos; mission to support student founders and train the next generation 
              of venture capital professionals.
            </p>
          </div>
        </div>
      </section>

      <GovernanceNavigation activeSection={activeSection} setActiveSection={setActiveSection} />
      {renderGovernanceSection()}
      
      <Footer />
    </div>
  );
}