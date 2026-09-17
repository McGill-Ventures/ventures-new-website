// lib/partnerMatcher.ts
// Deterministic validation-partner matcher. Matches on the founder's customer
// industry first, then buyer persona, segment, and what kind of help they need.

export type Industry =
  | "healthcare" | "finance" | "manufacturing" | "retail" | "logistics"
  | "education" | "realestate_construction" | "energy" | "public_sector"
  | "software_it" | "professional_services" | "agrifood" | "any";
export type Persona =
  | "leadership" | "operations" | "it_engineering" | "finance_persona"
  | "clinical" | "sales_marketing" | "hr" | "procurement" | "product" | "any";
export type Segment = "smb" | "mid_market" | "enterprise" | "any";
export type ValidationGoal =
  | "problem_validation" | "product_feedback" | "pilot" | "expert_advice";
export type PartnerKind = "customer" | "design_partner" | "expert" | "pilot_site" | "channel";

export interface Partner {
  id: string;
  name: string;
  entity_type: "company" | "person";
  partner_kind: PartnerKind[];
  industries: string[];
  personas: string[];
  segment: Segment;
  location: string;
  intro_via_mvc: boolean;
  contact_public: boolean;
  contact: string | null;
  blurb: string;
  status: "active" | "paused";
  last_reviewed: string | null;
  is_example?: boolean;
}

export interface PartnerIntake {
  customer_industry: Industry;
  buyer_persona: Persona;
  target_segment: Segment;
  validation_goal: ValidationGoal;
}

export interface PartnerMatchResult {
  partner: Partner;
  score: number;
  reasons: string[];
  is_example: boolean;
}

const MAX_RESULTS = 9;
const MIN_SCORE = 40;

// Which partner kind each validation goal points at.
const GOAL_TO_KIND: Record<ValidationGoal, PartnerKind> = {
  problem_validation: "customer",
  product_feedback: "design_partner",
  pilot: "pilot_site",
  expert_advice: "expert",
};

function scorePartner(p: Partner, intake: PartnerIntake): PartnerMatchResult | null {
  if (p.status !== "active") return null;

  let score = 0;
  const reasons: string[] = [];

  // Industry is the main axis.
  if (p.industries.includes(intake.customer_industry)) {
    score += 50;
    reasons.push("Works in your customer's industry");
  } else if (p.industries.includes("any")) {
    score += 20;
  } else {
    return null; // wrong industry entirely is not a useful validation partner
  }

  // Persona.
  if (intake.buyer_persona === "any" || p.personas.includes(intake.buyer_persona)) {
    score += 22;
    if (intake.buyer_persona !== "any") reasons.push("Can speak as the buyer you need");
  } else if (p.personas.includes("any")) {
    score += 10;
  }

  // Segment.
  if (intake.target_segment === "any" || p.segment === "any" || p.segment === intake.target_segment) {
    score += 14;
    if (p.segment === intake.target_segment) reasons.push("Right company size");
  }

  // Kind of help.
  const wantedKind = GOAL_TO_KIND[intake.validation_goal];
  if (p.partner_kind.includes(wantedKind)) {
    score += 12;
    reasons.push("Fits the kind of help you want");
  }

  // A real MVC relationship is more actionable than a cold suggestion.
  if (p.intro_via_mvc) {
    score += 8;
    reasons.push("MVC can make a warm introduction");
  }

  score = Math.max(0, Math.min(100, score));

  return { partner: p, score, reasons, is_example: !!p.is_example };
}

export function matchPartners(intake: PartnerIntake, partners: Partner[]): PartnerMatchResult[] {
  return partners.map((p) => scorePartner(p, intake))
    .filter((r): r is PartnerMatchResult => r !== null && r.score >= MIN_SCORE)
    .sort((a, b) => b.score - a.score)
    .slice(0, MAX_RESULTS);
}
