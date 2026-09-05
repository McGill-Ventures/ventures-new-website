// lib/adminSchema.ts — declarative field definitions for the admin forms.
export type FieldType =
  | "text" | "textarea" | "number" | "date" | "select" | "multiselect";

export interface Field {
  key: string; label: string; type: FieldType;
  options?: { value: string; label: string }[];
  help?: string; idField?: boolean;
}

const opts = (...vals: string[]) => vals.map((v) => ({ value: v, label: v.replace(/_/g, " ") }));

const STATUS = opts("open", "upcoming", "temporarily_closed", "closed", "paused", "archived", "unclear");
const JURIS = opts("federal", "provincial", "territorial", "municipal", "regional_agency", "university", "other_public", "mixed");
const PROV = opts("canada_wide", "ab", "bc", "mb", "nb", "nl", "ns", "nt", "nu", "on", "pe", "qc", "sk", "yt", "multiple");
const INSTR = opts("grant", "non_repayable_contribution", "repayable_contribution", "conditionally_repayable_contribution", "loan", "loan_guarantee", "tax_credit", "wage_subsidy", "voucher", "in_kind", "equity", "prize", "procurement", "other");
const YN = opts("Y", "N", "conditional", "unclear");
const YN_SPEC = opts("Y", "N", "conditional", "not_specified");
const DEADLINE = opts("rolling", "continuous_intake", "call_based", "fixed_deadline", "annual_cohort", "periodic_intake", "invitation_only", "closed", "unclear");
const COMPLEX = opts("low", "medium", "high", "unknown");
const STACK = opts("Y", "N", "conditional", "unknown");
const RFC = opts("university_receives_company_pays_nothing", "university_receives_company_cost_share", "company_receives_company_cost_share", "company_receives_company_pays_nothing", "not_applicable");
const RECIPIENT = opts("university", "company", "researcher", "nonprofit", "consortium", "individual", "multiple", "not_specified");
const CONTRIB_REQ = opts("Y", "N", "conditional", "not_applicable", "not_specified");
const CONTRIB_TYPE = opts("cash", "in_kind", "cash_and_in_kind", "none", "conditional", "not_specified");
const STAGE = opts("1_idea", "2_pre_revenue", "3_early_revenue", "4_growth", "5_scale", "all_stages", "not_specified");
const EMP = opts("0", "1_4", "5_9", "10_49", "50_99", "100_249", "250_499", "500_plus", "not_specified");
const REV = opts("pre_revenue", "under_100k", "100k_499k", "500k_999k", "1m_4_9m", "5m_9_9m", "10m_49_9m", "50m_plus", "not_specified");
const APPLICANT = opts("startup_pre_revenue", "sme", "large_enterprise", "for_profit_company", "nonprofit", "academic_institution", "researcher", "student", "individual", "indigenous_owned", "women_owned", "youth_owned", "social_enterprise", "municipality", "consortium", "other");
const ACTIVITY = opts("research_and_development", "proof_of_concept", "prototype_development", "product_validation", "clinical_validation", "demonstration", "commercialization", "market_research", "export", "hiring", "training", "capital_equipment", "technology_adoption", "digital_transformation", "intellectual_property", "certification", "regulatory", "energy_efficiency", "emissions_reduction", "business_expansion", "other");
const SECTORS = opts("sector_agnostic", "software", "artificial_intelligence", "cybersecurity", "fintech", "healthcare", "medtech", "biotechnology", "pharmaceuticals", "cleantech", "energy", "critical_minerals", "advanced_manufacturing", "aerospace", "agriculture", "food_and_beverage", "ocean_technology", "transportation", "construction", "creative_industries", "tourism", "social_innovation", "forestry", "defence", "quantum", "semiconductors", "telecommunications", "other");

export const FUNDING_FIELDS: Field[] = [
  { key: "id", label: "ID (permanent, no spaces)", type: "text", idField: true, help: "Cannot be changed after creation." },
  { key: "program_name", label: "Program name", type: "text" },
  { key: "status", label: "Status", type: "select", options: STATUS, help: "Live (open/upcoming) shows and ranks higher. Closed/archived hides it." },
  { key: "next_deadline", label: "Next deadline", type: "date", help: "Blank for rolling. A past date auto-hides the program from founders." },
  { key: "last_reviewed", label: "Last reviewed", type: "date", help: "Your audit date. Drives the Needs attention list." },
  { key: "reviewed_by", label: "Reviewed by", type: "text" },
  { key: "administering_body", label: "Administering body", type: "text" },
  { key: "jurisdiction", label: "Jurisdiction", type: "select", options: JURIS },
  { key: "province_territory", label: "Province / territory", type: "select", options: PROV },
  { key: "instrument", label: "Instrument", type: "select", options: INSTR },
  { key: "non_dilutive", label: "Non-dilutive", type: "select", options: YN },
  { key: "repayable", label: "Repayable", type: "select", options: YN },
  { key: "company_stage", label: "Company stages", type: "multiselect", options: STAGE },
  { key: "sectors", label: "Sectors", type: "multiselect", options: SECTORS },
  { key: "applicant_types", label: "Applicant types", type: "multiselect", options: APPLICANT },
  { key: "eligible_activities", label: "Eligible activities", type: "multiselect", options: ACTIVITY },
  { key: "short_description", label: "Short description", type: "textarea" },
  { key: "amount_min", label: "Amount min", type: "number" },
  { key: "amount_max", label: "Amount max", type: "number" },
  { key: "currency", label: "Currency", type: "text" },
  { key: "cost_share_pct", label: "Cost share %", type: "number" },
  { key: "amount_notes", label: "Amount notes", type: "textarea" },
  { key: "deadline_type", label: "Deadline type", type: "select", options: DEADLINE },
  { key: "open_date", label: "Open date", type: "date" },
  { key: "window_notes", label: "Window notes", type: "textarea" },
  { key: "official_url", label: "Official URL", type: "text" },
  { key: "source_url", label: "Source URL", type: "text" },
  { key: "region_eligibility", label: "Region eligibility", type: "text" },
  { key: "incorporation_required", label: "Incorporation required", type: "select", options: YN_SPEC },
  { key: "canadian_rd_required", label: "Canadian R&D required", type: "select", options: YN_SPEC },
  { key: "academic_partner_required", label: "Academic partner required", type: "select", options: YN_SPEC },
  { key: "industry_partner_required", label: "Industry partner required", type: "select", options: YN_SPEC },
  { key: "employee_band", label: "Employee band", type: "multiselect", options: EMP },
  { key: "revenue_band", label: "Revenue band", type: "multiselect", options: REV },
  { key: "minimum_company_age", label: "Minimum company age", type: "text" },
  { key: "other_eligibility_notes", label: "Other eligibility notes", type: "textarea" },
  { key: "funding_recipient", label: "Funding recipient", type: "select", options: RECIPIENT },
  { key: "research_funding_category", label: "Research funding category", type: "select", options: RFC },
  { key: "company_contribution_required", label: "Company contribution required", type: "select", options: CONTRIB_REQ },
  { key: "company_contribution_type", label: "Company contribution type", type: "select", options: CONTRIB_TYPE },
  { key: "company_contribution_pct", label: "Company contribution %", type: "number" },
  { key: "application_complexity", label: "Application complexity", type: "select", options: COMPLEX },
  { key: "typical_decision_time", label: "Typical decision time", type: "text" },
  { key: "stackable", label: "Stackable", type: "select", options: STACK },
  { key: "stacking_notes", label: "Stacking notes", type: "textarea" },
  { key: "stream_component", label: "Stream / component", type: "text" },
  { key: "parent_program", label: "Parent program", type: "text" },
  { key: "program_contact", label: "Program contact", type: "text" },
  { key: "mvc_notes", label: "MVC internal notes", type: "textarea" },
  { key: "tags", label: "Tags", type: "multiselect", options: opts("featured", "priority", "hidden", "verified") },
];

const INDUSTRY_OPTS = opts("healthcare", "finance", "manufacturing", "retail", "logistics", "education", "realestate_construction", "energy", "public_sector", "software_it", "professional_services", "agrifood", "any");
const PERSONA_OPTS = opts("leadership", "operations", "it_engineering", "finance_persona", "clinical", "sales_marketing", "hr", "procurement", "product", "any");

export const PARTNER_FIELDS: Field[] = [
  { key: "id", label: "ID (permanent, no spaces)", type: "text", idField: true },
  { key: "name", label: "Name", type: "text" },
  { key: "status", label: "Status", type: "select", options: opts("active", "paused") },
  { key: "entity_type", label: "Type", type: "select", options: opts("company", "person") },
  { key: "industries", label: "Industries", type: "multiselect", options: INDUSTRY_OPTS, help: "Matched against a founder's customer industry." },
  { key: "personas", label: "Roles they can speak as", type: "multiselect", options: PERSONA_OPTS },
  { key: "partner_kind", label: "How they help", type: "multiselect", options: opts("customer", "design_partner", "expert", "pilot_site", "channel") },
  { key: "segment", label: "Company size", type: "select", options: opts("smb", "mid_market", "enterprise", "any") },
  { key: "location", label: "Location", type: "text" },
  { key: "blurb", label: "Blurb", type: "textarea" },
  { key: "intro_via_mvc", label: "MVC brokers intro", type: "select", options: opts("true", "false") },
  { key: "contact_public", label: "Show contact directly", type: "select", options: opts("false", "true"), help: "Only 'true' if they consented." },
  { key: "contact", label: "Contact", type: "text" },
  { key: "is_example", label: "Example placeholder", type: "select", options: opts("false", "true") },
  { key: "last_reviewed", label: "Last reviewed", type: "date" },
];

export function blankRecord(fields: Field[]): Record<string, unknown> {
  const r: Record<string, unknown> = {};
  for (const f of fields) {
    if (f.type === "multiselect") r[f.key] = [];
    else if (f.type === "select") r[f.key] = f.options?.[0]?.value ?? "";
    else r[f.key] = "";
  }
  return r;
}
