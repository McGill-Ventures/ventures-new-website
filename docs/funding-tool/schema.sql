-- schema.sql
-- Supabase is used for ONE thing in v1: capturing leads.
-- The program data lives as static JSON in the repo (funding_programs.json),
-- so matching needs no database read. This keeps the matcher instant and free.
-- Run this in the Supabase SQL editor.

create table if not exists public.funding_leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),

  -- contact (the conversion payload)
  founder_name text,
  founder_email text,
  company_name text,

  -- raw intake answers
  stage int,
  sector text,
  mcgill_affiliated boolean,
  incorporated boolean,
  has_canadian_rd boolean,
  funding_preference text,

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
