-- schema_partners.sql
-- Run this in the Supabase SQL editor, in addition to schema.sql.
-- Captures founders who ask for warm introductions to validation partners.

create table if not exists public.partner_intro_requests (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),

  founder_name text,
  founder_email text,
  company_name text,

  customer_industry text,
  buyer_persona text,
  target_segment text,
  validation_goal text,

  requested_partner_ids text[],
  source text default 'partner_matcher'
);

alter table public.partner_intro_requests enable row level security;

-- No insert-from-browser policy is needed because the server uses the service
-- role key, which bypasses RLS. With RLS on and no policies, anonymous clients
-- cannot read or write this table directly.

create index if not exists partner_intro_requests_created_at_idx
  on public.partner_intro_requests (created_at desc);
