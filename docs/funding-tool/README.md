# Funding tool (`/growth-studio/funding`)

A founder-facing funding matcher (500+ Canadian programs), a validation-partner
matcher, and a password-protected admin console. Originally built as a
standalone app (github.com/dinoabellard-arch/funding-match) and ported into
this site in September 2026.

## Where things live

| Part | Path |
|---|---|
| Landing page (server-rendered, SEO) | `src/app/growth-studio/funding/page.tsx` |
| Funding questionnaire | `src/app/growth-studio/funding/match/` |
| Partner matcher | `src/app/growth-studio/funding/partners/` |
| Admin console (password) | `src/app/growth-studio/funding/admin/` |
| Shared UI kit for the tool | `src/app/growth-studio/funding/_components/ui.tsx` |
| Matching logic, questions, theme, auth | `src/lib/funding/` |
| API routes | `src/app/api/funding/**` |
| Program dataset (for seeding) | `data/funding-programs.json` |
| Seed script | `scripts/funding-seed.mjs` (`npm run funding:seed`) |
| Database SQL + guides | this folder |

## Configuration

Three environment variables (see `.env.example` at the repo root):

- `NEXT_PUBLIC_SUPABASE_URL` — Supabase project URL
- `SUPABASE_SERVICE_ROLE_KEY` — Supabase service-role (secret) key, server-only
- `ADMIN_PASSWORD` — password for the admin console

Without them the rest of the site is unaffected; the funding API routes return
HTTP 503 "not configured" and the questionnaire shows that message.

## First-time database setup

In Supabase's SQL editor run, in order: `schema.sql`, `schema_partners.sql`,
`schema_data.sql`, `seed_data.sql`. Then load the programs once:

```bash
npm run funding:seed
```

Re-running is safe; it upserts by program id.

## Managing the data

See `ADMIN_GUIDE.md` (admin console), `UPDATING_DATA.md` (bulk refresh),
and `PARTNER_CURATION.md` (consent rules for listing real partners).

## Security notes

- The Supabase client is created lazily in `src/lib/funding/supabaseServer.ts`
  and must only be imported from API routes (never client components).
- Admin auth is a single shared password. The cookie holds an HMAC-derived
  token, comparisons are constant-time, and the login route throttles to 5
  failed attempts per IP per 15 minutes (per server instance). Rotate
  `ADMIN_PASSWORD` to log every admin session out.
