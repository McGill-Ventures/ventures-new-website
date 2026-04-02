"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Icon } from "@/components/ui";

const WEEKLY_TIMELINE = [
  { label: "Week 1", title: "Kickoff & Challenge Identification", description: "Welcome the cohort and frame healthcare problems to tackle" },
  { label: "Week 2", title: "Project Team Formation & Ideation", description: "Cohort divided into project teams and start building solutions" },
  { label: "Weeks 3–5", title: "Mid-Term Project Development", description: "Teams present current work, seek feedback, and refine their solutions" },
  { label: "Weeks 6–7", title: "Capstone Deliverable & Presentation", description: "Teams present their final deliverable (prototype or comprehensive report)" },
];

const WORKSHOPS = [
  { title: "Innovation in Healthcare", description: "Frameworks to identify unmet healthcare needs and opportunities for innovation" },
  { title: "Building a Healthcare Startup", description: "Business modeling and commercialization strategies to turn ideas into real-world healthcare ventures" },
  { title: "Company Creation Cases", description: "Case studies examining the creation and development of 3 biotech companies" },
  { title: "Healthcare Founders Panel", description: "Open conversation with healthcare founders about their journeys, mission, challenges, and advice" },
  { title: "Intellectual Property & Legal", description: "IP protection, the patent process, and navigating the regulatory landscape with a focus on MedTech" },
  { title: "Fundraising in Healthcare", description: "How to communicate value for venture capital, non-dilutive funding, and incubator programs" },
];

const DELIVERABLES = [
  { label: "Final Project", description: "Deliver a prototype or comprehensive research report addressing a real healthcare challenge" },
  { label: "Professional Presentation", description: "Present final work to Mayo Clinic physicians and industry partners" },
];

export default function HTILProgramCard() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="glass rounded-3xl p-10 hover-lift animate-fade-in-up opacity-75">
      <div className="bg-purple-200 text-purple-800 px-4 py-2 rounded-full text-sm font-heading font-semibold mb-6 inline-block">
        Applications reopen Fall 2026
      </div>
      <h3 className="text-4xl font-display text-purple-950 mb-6">Health Tech & Innovation Lab (HTIL)</h3>
      <p className="text-lg text-purple-800 font-body mb-8 leading-relaxed">
        An intensive 7-week program bridging healthcare and venture capital through hands-on workshops with biotech and VC professionals, mentorship, and real-world project deliverables.
      </p>

      <div className="mb-8">
        <h4 className="text-xl font-heading text-purple-950 mb-4">Program Features:</h4>
        <ul className="space-y-3">
          {[
            "Weekly workshops with biotech and VC professionals",
            "Hands-on project deliverables",
            "Mentorship from industry experts",
            "Exposure to health tech investment landscape",
          ].map((feature, idx) => (
            <li key={idx} className="flex items-start text-purple-700 font-body">
              <Icon name="check" className="text-purple-600 mr-3 mt-1 flex-shrink-0" size="sm" />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-purple-100 rounded-xl p-4 text-center">
          <div className="text-sm font-heading text-purple-700">Duration</div>
          <div className="text-lg font-display text-purple-950">7 weeks</div>
        </div>
        <div className="bg-purple-100 rounded-xl p-4 text-center">
          <div className="text-sm font-heading text-purple-700">Commitment</div>
          <div className="text-lg font-display text-purple-950">4-6 hours/week</div>
        </div>
      </div>

      {/* Expandable program structure */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between px-6 py-4 mb-4 rounded-xl border-2 border-purple-200 bg-purple-50 text-purple-800 font-heading font-semibold text-base hover:bg-purple-100 hover:border-purple-300 transition-all duration-200"
      >
        <span>View Program Structure</span>
        {expanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
      </button>

      {expanded && (
        <div className="mb-6 rounded-2xl border border-purple-100 bg-white overflow-hidden">
          <div className="p-6 space-y-8">

            {/* Timeline */}
            <div>
              <h5 className="text-base font-heading text-purple-950 mb-4">7-Week Program Timeline</h5>
              <ol className="space-y-3">
                {WEEKLY_TIMELINE.map((week, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-purple-700 font-body text-sm">
                    <span className="flex-shrink-0 w-16 text-xs font-heading font-semibold text-purple-500 pt-0.5">{week.label}</span>
                    <span><span className="font-semibold text-purple-900">{week.title}</span> — {week.description}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Workshops */}
            <div>
              <h5 className="text-base font-heading text-purple-950 mb-4">Workshop Series</h5>
              <ol className="space-y-2">
                {WORKSHOPS.map((w, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-purple-700 font-body text-sm">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 text-purple-700 font-heading font-semibold text-xs flex items-center justify-center mt-0.5">
                      {idx + 1}
                    </span>
                    <span><span className="font-semibold text-purple-900">{w.title}</span> — {w.description}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Deliverables */}
            <div>
              <h5 className="text-base font-heading text-purple-950 mb-4">Deliverables</h5>
              <ul className="space-y-2">
                {DELIVERABLES.map((d, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-purple-700 font-body text-sm">
                    <Icon name="check" className="text-purple-500 flex-shrink-0 mt-0.5" size="sm" />
                    <span><span className="font-semibold text-purple-900">{d.label}:</span> {d.description}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      )}

      <button disabled className="w-full bg-gray-200 text-gray-500 px-8 py-4 rounded-xl cursor-not-allowed font-heading text-lg font-semibold">
        Applications open Fall 2026
      </button>
    </div>
  );
}
