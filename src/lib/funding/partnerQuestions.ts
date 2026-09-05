// lib/partnerQuestions.ts
// Four questions for validation-partner matching. The first is the important
// one: who the founder's CUSTOMER is, not what the founder builds.

export const PARTNER_QUESTIONS = [
  {
    id: "customer_industry",
    label: "Who do you sell to?",
    hint: "Pick your customer's industry, not what you build. A medtech founder sells to clinics, not to other medtech startups.",
    options: [
      { value: "healthcare", label: "Healthcare,", sub: "clinics, hospitals", icon: "heartPulse" },
      { value: "finance", label: "Finance,", sub: "banking, insurance", icon: "landmark" },
      { value: "manufacturing", label: "Manufacturing,", sub: "industrial", icon: "factory" },
      { value: "retail", label: "Retail,", sub: "consumer brands", icon: "shoppingBag" },
      { value: "logistics", label: "Logistics,", sub: "supply chain", icon: "truck" },
      { value: "education", label: "Education,", sub: "schools, universities", icon: "graduationCap" },
      { value: "realestate_construction", label: "Real estate,", sub: "construction", icon: "building" },
      { value: "energy", label: "Energy,", sub: "utilities", icon: "leaf" },
      { value: "public_sector", label: "Public sector,", sub: "government", icon: "landmark" },
      { value: "software_it", label: "Software,", sub: "IT and tech companies", icon: "code" },
      { value: "professional_services", label: "Professional services,", sub: "consulting, legal", icon: "briefcase" },
      { value: "agrifood", label: "Agriculture,", sub: "food", icon: "leaf" },
      { value: "any", label: "Something else", sub: "(broad or unsure)", icon: "target" },
    ],
  },
  {
    id: "buyer_persona",
    label: "Who do you most need to talk to?",
    hint: "The person whose problem you solve, or who signs off on buying.",
    options: [
      { value: "leadership", label: "Leadership,", sub: "founder, exec, owner", icon: "users" },
      { value: "operations", label: "Operations", sub: "", icon: "settings" },
      { value: "it_engineering", label: "IT,", sub: "engineering", icon: "cpu" },
      { value: "finance_persona", label: "Finance", sub: "", icon: "landmark" },
      { value: "clinical", label: "Clinical,", sub: "medical staff", icon: "heartPulse" },
      { value: "sales_marketing", label: "Sales,", sub: "marketing", icon: "trendingUp" },
      { value: "hr", label: "HR,", sub: "people teams", icon: "users" },
      { value: "procurement", label: "Procurement", sub: "", icon: "shoppingBag" },
      { value: "product", label: "Product", sub: "", icon: "rocket" },
      { value: "any", label: "Not sure yet", sub: "(help me decide)", icon: "target" },
    ],
  },
  {
    id: "target_segment",
    label: "What size of customer do you want to validate with?",
    hint: "Buying behaviour differs a lot between a corner shop and an enterprise.",
    options: [
      { value: "smb", label: "Small business", sub: "", icon: "shoppingBag" },
      { value: "mid_market", label: "Mid-market", sub: "", icon: "building" },
      { value: "enterprise", label: "Enterprise,", sub: "large organizations", icon: "factory" },
      { value: "any", label: "Any size", sub: "(open)", icon: "target" },
    ],
  },
  {
    id: "validation_goal",
    label: "What do you need from them right now?",
    hint: "This decides whether we point you at a buyer, a design partner, a pilot site, or an expert.",
    options: [
      { value: "problem_validation", label: "Confirm the problem is real", sub: "", icon: "lightbulb" },
      { value: "product_feedback", label: "Hands-on product feedback", sub: "", icon: "messageSquare" },
      { value: "pilot", label: "Run a pilot or trial", sub: "", icon: "rocket" },
      { value: "expert_advice", label: "Expert advice", sub: "", icon: "graduationCap" },
    ],
  },
] as const;
