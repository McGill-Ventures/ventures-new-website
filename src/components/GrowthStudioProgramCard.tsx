import Link from "next/link";
import { Icon } from "@/components/ui";

export default function GrowthStudioProgramCard() {

  return (
    <div className="glass rounded-3xl p-10 hover-lift animate-fade-in-up opacity-75">
      <div className="bg-purple-200 text-purple-800 px-4 py-2 rounded-full text-sm font-heading font-semibold mb-6 inline-block">
        Applications reopen Fall 2026
      </div>
      <h3 className="text-4xl font-display text-purple-950 mb-6">Growth Studio</h3>
      <p className="text-lg text-purple-800 font-body mb-8 leading-relaxed">
        The Growth Studio program connects students with early-stage startups to tackle real-world scaling challenges, delivering actionable recommendations on go-to-market and venture capital fundraising.
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

      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          href="/growth-studio"
          className="flex-1 text-center bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-heading text-base font-semibold transition-all duration-200"
        >
          Visit Growth Studio
        </Link>
        <button disabled className="flex-1 bg-gray-200 text-gray-500 px-8 py-4 rounded-xl cursor-not-allowed font-heading text-base font-semibold">
          Applications open Fall 2026
        </button>
      </div>
    </div>
  );
}
