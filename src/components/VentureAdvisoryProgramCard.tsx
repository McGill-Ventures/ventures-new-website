"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Icon } from "@/components/ui";

const WHAT_YOU_DO_FEATURES = [
  "Go-to-market strategies",
  "Venture capital fundraising",
  "Growth and scaling strategies",
];

const PROGRAM_STRUCTURE = [
  {
    title: "Weekly In-Person Meetings",
    description: "Meet with startup founders and your team every week at the Bronfman Building to discuss progress, challenges, and next steps.",
  },
  {
    title: "Independent Consulting Work",
    description: "Conduct market research, competitive analysis, and strategic planning between meetings to deliver actionable recommendations.",
  },
  {
    title: "Workshops & Guest Speakers",
    description: "Attend skill-building workshops and learn from experienced entrepreneurs, investors, and business strategists.",
  },
  {
    title: "Deliverables",
    description: "Produce professional-grade reports, presentations, and strategic frameworks that founders can immediately implement.",
  },
];

const WHAT_YOU_GAIN = [
  { label: "Real startup experience", description: "Work directly with early-stage companies on live challenges" },
  { label: "Strategic thinking skills", description: "Learn to analyze markets, develop go-to-market strategies, and craft fundraising plans" },
  { label: "Network access", description: "Connect with startup founders, mentors, investors, and the broader McGill Ventures community" },
  { label: "Portfolio-worthy work", description: "Build case studies and consulting experience for your resume" },
];

export default function VentureAdvisoryProgramCard() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="glass rounded-3xl p-10 hover-lift animate-fade-in-up opacity-75">
      <div className="bg-purple-200 text-purple-800 px-4 py-2 rounded-full text-sm font-heading font-semibold mb-6 inline-block">
        Applications reopen Fall 2026
      </div>
      <h3 className="text-4xl font-display text-purple-950 mb-6">Venture Advisory</h3>
      <p className="text-lg text-purple-800 font-body mb-8 leading-relaxed">
        The Venture Advisory program connects students with early-stage startups to help shape real-world growth strategies, providing actionable deliverables on go-to-market strategies and venture capital fundraising.
      </p>

      <div className="mb-8">
        <h4 className="text-xl font-heading text-purple-950 mb-4">Program Features:</h4>
        <ul className="space-y-3">
          {[
            "Direct consulting work with early-stage startups",
            "Go-to-market and fundraising strategy deliverables",
            "Weekly in-person meetings with founders",
            "Workshops and guest speakers from the startup ecosystem",
          ].map((feature, idx) => (
            <li key={idx} className="flex items-start text-purple-700 font-body">
              <Icon name="check" className="text-purple-600 mr-3 mt-1 flex-shrink-0" size="sm" />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-purple-100 rounded-xl p-4 text-center">
          <div className="text-sm font-heading text-purple-700">Duration</div>
          <div className="text-lg font-display text-purple-950">6 weeks</div>
        </div>
        <div className="bg-purple-100 rounded-xl p-4 text-center">
          <div className="text-sm font-heading text-purple-700">Commitment</div>
          <div className="text-lg font-display text-purple-950">4-6 hours/week</div>
        </div>
        <div className="bg-purple-100 rounded-xl p-4 text-center">
          <div className="text-sm font-heading text-purple-700">Location</div>
          <div className="text-lg font-display text-purple-950">Bronfman</div>
        </div>
      </div>

      {/* Expandable learn more */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between px-6 py-4 mb-4 rounded-xl border-2 border-purple-200 bg-purple-50 text-purple-800 font-heading font-semibold text-base hover:bg-purple-100 hover:border-purple-300 transition-all duration-200"
      >
        <span>Learn More</span>
        {expanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
      </button>

      {expanded && (
        <div className="mb-6 rounded-2xl border border-purple-100 bg-white overflow-hidden">
          <div className="p-6 space-y-8">

            {/* What You'll Do */}
            <div>
              <h5 className="text-base font-heading text-purple-950 mb-3">What You&apos;ll Do</h5>
              <p className="text-sm text-purple-700 font-body mb-3">
                Work directly with early-stage startups to deliver high-quality strategic consulting that closes critical knowledge gaps in:
              </p>
              <ul className="space-y-2 mb-3">
                {WHAT_YOU_DO_FEATURES.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-purple-700 font-body text-sm">
                    <Icon name="check" className="text-purple-500 flex-shrink-0 mt-0.5" size="sm" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-purple-700 font-body">
                Engagements last 4–6 weeks per startup, with students working on 2 different startup projects throughout the Winter term.
              </p>
            </div>

            {/* Program Structure */}
            <div>
              <h5 className="text-base font-heading text-purple-950 mb-4">Program Structure</h5>
              <ol className="space-y-3">
                {PROGRAM_STRUCTURE.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-purple-700 font-body text-sm">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 text-purple-700 font-heading font-semibold text-xs flex items-center justify-center mt-0.5">
                      {idx + 1}
                    </span>
                    <span><span className="font-semibold text-purple-900">{item.title}</span> — {item.description}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* What You'll Gain */}
            <div>
              <h5 className="text-base font-heading text-purple-950 mb-4">What You&apos;ll Gain</h5>
              <ul className="space-y-2">
                {WHAT_YOU_GAIN.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-purple-700 font-body text-sm">
                    <Icon name="check" className="text-purple-500 flex-shrink-0 mt-0.5" size="sm" />
                    <span><span className="font-semibold text-purple-900">{item.label}:</span> {item.description}</span>
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
