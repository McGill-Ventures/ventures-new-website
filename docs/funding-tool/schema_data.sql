-- schema_data.sql
-- Run after schema.sql and schema_partners.sql. Creates the tables the app and
-- the /admin page read and write. Programs use the full master-sheet schema.

create table if not exists public.funding_programs (
  id text primary key,
  program_name text not null,
  stream_component text,
  parent_program text,
  administering_body text,
  jurisdiction text,
  province_territory text,
  official_url text,
  source_url text,
  status text default 'unclear',
  last_reviewed date,
  reviewed_by text,
  research_funding_category text,
  funding_recipient text,
  company_contribution_required text,
  company_contribution_type text,
  company_contribution_pct numeric,
  instrument text,
  non_dilutive text,
  repayable text,
  short_description text,
  eligible_activities text[] default '{}',
  currency text,
  amount_min numeric,
  amount_max numeric,
  cost_share_pct numeric,
  amount_notes text,
  applicant_types text[] default '{}',
  company_stage text[] default '{}',
  employee_band text[] default '{}',
  revenue_band text[] default '{}',
  sectors text[] default '{}',
  region_eligibility text,
  incorporation_required text,
  canadian_rd_required text,
  academic_partner_required text,
  industry_partner_required text,
  minimum_company_age text,
  other_eligibility_notes text,
  deadline_type text,
  next_deadline date,
  open_date date,
  window_notes text,
  application_complexity text,
  typical_decision_time text,
  stackable text,
  stacking_notes text,
  program_contact text,
  mvc_notes text,
  tags text[] default '{}',
  updated_at timestamptz default now()
);

create index if not exists funding_programs_status_idx on public.funding_programs (status);
create index if not exists funding_programs_prov_idx on public.funding_programs (province_territory);

create table if not exists public.partners (
  id text primary key,
  name text not null,
  entity_type text default 'company',
  partner_kind text[] default '{}',
  industries text[] default '{}',
  personas text[] default '{}',
  segment text default 'any',
  location text,
  intro_via_mvc boolean default true,
  contact_public boolean default false,
  contact text,
  blurb text,
  status text default 'active',
  last_reviewed date,
  is_example boolean default false,
  updated_at timestamptz default now()
);

alter table public.funding_programs enable row level security;
alter table public.partners enable row level security;
