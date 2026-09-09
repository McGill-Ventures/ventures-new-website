-- schema.sql
-- Creates the funding_leads table (founder contact details captured after a match).
-- Program data lives in the funding_programs table (created by schema_data.sql)
-- and is loaded once from data/funding-programs.json via `npm run funding:seed`.
-- The /api/funding/match route reads that table on every request, so edits
-- made in the admin console take effect immediately without a redeploy.
-- Run this in the Supabase SQL editor (see SETUP.md, Part 2).

create table if not exists public.funding_leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),

  -- contact (the conversion payload)
  founder_name text,
  founder_email text,
  company_name text,

  -- raw intake answers, stored as JSON. Every question is multi-select, so the
  -- answers are arrays; one jsonb column keeps the table in step with the form.
  intake jsonb,

  -- what the matcher returned, stored as json for later analysis
  matched_program_ids text[],
  match_payload jsonb,

  -- funnel tracking
  clicked_contact_mvc boolean default false,
  source text default 'funding_matcher'
);

-- Lock the table down. Only allow inserts from the anon key, no public reads.
alter table public.funding_leads enable row level security;

create policy "allow anonymous insert"
  on public.funding_leads
  for insert
  to anon
  with check (true);

-- Deliberately NO select policy for anon. Leads are read only via the
-- service role (your server) or the Supabase dashboard. Founders never read
-- this table.

-- Optional: index for your own funnel queries.
create index if not exists funding_leads_created_at_idx
  on public.funding_leads (created_at desc);
