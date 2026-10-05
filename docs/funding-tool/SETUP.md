# Funding tool — first-time setup guide

How to stand up the database, connect it to the site, and configure the live
deployment for the Growth Studio funding tool (`/growth-studio/funding`).
Written for a beginner; about 30 minutes end to end.

**One rule for the whole guide:** the two Supabase keys, the admin password,
and the PostHog secret key are secrets. They go only into the two places named below (a local `.env.local`
file and Vercel's environment-variable settings). Never paste them into Slack,
email, GitHub, or a chat with an AI assistant.

---

## Part 1 — Create the database (Supabase)

Supabase is the hosted database service the tool uses. The team creates and
owns the project, so it does not depend on any one person's personal account.

1. Go to **supabase.com** and sign up or log in. The free tier is enough.
2. Click **New project**.
   - **Name:** e.g. `mcgillvc-funding-tool`
   - **Region:** Canada (Central), so the data stays in Canada.
   - **Database password:** generate a strong one and save it in a password
     manager. It is not needed day to day, but it cannot be recovered later.
3. Wait a minute or two for the project to finish setting up.
4. Recommended: invite a second team member under **Organization → Team** so
   access does not depend on a single login.

## Part 2 — Create the tables

1. In the Supabase sidebar open **SQL Editor → New query**.
2. For each file below, open it in a text editor, copy its **entire** contents,
   paste into the query box, and click **Run**. Do them in this order; each
   should report "Success".
   1. `docs/funding-tool/schema.sql` — the `funding_leads` table
   2. `docs/funding-tool/schema_partners.sql` — the `partner_intro_requests` table
   3. `docs/funding-tool/schema_data.sql` — the `funding_programs` and `partners` tables
3. **Do not run `seed_data.sql`.** It only inserts six *example* partners. Real
   partners are added later through the admin console (see Part 5).
4. Check: **Table Editor** in the sidebar should now list four empty tables:
   `funding_programs`, `partners`, `funding_leads`, `partner_intro_requests`.

## Part 3 — Connect your computer and load the programs

1. In Supabase open **Project Settings** (gear icon) → **API** (may be labelled
   "Data API" or "API Keys"). You need two values:
   - **Project URL** — looks like `https://xxxxxxxx.supabase.co`
   - **service_role** key — labelled *secret*. Not the "anon" / "publishable" key.
2. Choose an **admin password** for the tool's admin console. Make it long, and
   store it in your password manager.
3. In the repository folder, create a file named exactly `.env.local` (the
   leading dot matters) containing:

   ```
   NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxx.supabase.co
   SUPABASE_SERVICE_ROLE_KEY=paste-the-service-role-key
   ADMIN_PASSWORD=the-password-you-chose
   ```

   `.env.local` is listed in `.gitignore`, so git will never upload it. A
   template with no values lives at `.env.example` in the repo root.
4. Load the 500+ programs into the new database. In a terminal, inside the
   repository folder:

   ```bash
   pnpm funding:seed
   ```

   It counts up in batches and ends with `Done. Seeded 502 programs.`
   Re-running is safe; it updates existing rows by id. (Requires Node 20.6 or
   newer, which the project already uses.)
5. Test locally: if the dev server was already running, stop it and start it
   again so it reads the new `.env.local`, then open
   `http://localhost:3000/growth-studio/funding/match` and complete the six
   questions. You should get a list of matches instead of a "not configured"
   message.

## Part 4 — Configure the live site (Vercel)

Vercel hosts the website. The same three settings must be added there, by
someone with access to the McGill Ventures project on Vercel.

1. Open the project on **vercel.com** → **Settings → Environment Variables**.
2. Add each of the three, one at a time, ticking **Production** and **Preview**
   under "Environments" so both the live site and pull-request previews get
   them:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `ADMIN_PASSWORD`
3. Click **Save** after each. The site picks them up on its next deployment
   (pushing to a branch or merging a PR triggers one).
4. Until this is done, the funding pages still render but the matcher shows
   "The funding tool is not configured on this deployment yet."

## Part 5 — Adding partners and managing data

- The admin console is at `/growth-studio/funding/admin` and opens with the
  admin password. Share that password with the data manager (e.g. Ronardy)
  through a secure channel only.
- **Partners:** admin → *Partners* → *Add*. Read `PARTNER_CURATION.md` first;
  it covers consent rules for listing real people.
- **Programs:** the *Needs attention* tab lists what to review (unclear
  statuses, unverified links, stale reviews). See `ADMIN_GUIDE.md`.
- **Bulk refresh** from a spreadsheet: see `UPDATING_DATA.md`.

## Part 6 - Website analytics tab (PostHog)

The admin console's **Website analytics** tab shows traffic to the Growth Studio pages.
It reads from PostHog, the site's analytics service, through one saved query called an endpoint.
Do this once, as someone with access to the McGill Ventures project at **eu.posthog.com**.

1. In PostHog open **Settings**, search for "time zone", and set it to `America/Toronto`.
   The tab's "today" follows this setting, the same as PostHog's own pages.
2. In PostHog open **SQL editor**, paste the entire contents of `docs/funding-tool/analytics_endpoint.sql`, and click **Run** to check it returns rows.
3. Click **Save as endpoint** and name it exactly `growth_studio_dashboard`.
4. Open **Settings → Project secret API keys**, click **Create project secret API key**, and give it only the `endpoint:read` scope.
   Copy the key, which starts with `phs_`.
5. Add it as `POSTHOG_SECRET_KEY` in `.env.local` for local use, and in Vercel with **Production** and **Preview** ticked.
6. Until this is done, the tab shows "Website analytics is not set up on this deployment yet."

To change what the tab counts, edit the endpoint in PostHog, then update `analytics_endpoint.sql` to match so the two never drift.
The tab expects the columns `metric`, `label`, and `value`.

## Troubleshooting

| Symptom | Likely cause |
|---|---|
| "The funding tool is not configured on this deployment yet." | One of the three settings is missing where the site is running (`.env.local` locally, Vercel for the live site). Restart the dev server after editing `.env.local`. |
| `pnpm funding:seed` says "Missing Supabase env vars" | `.env.local` is missing, misnamed, or not in the repo root. |
| Seed fails with a table error | Part 2 was not completed; run `schema_data.sql`. |
| Admin login always says "Wrong password" | `ADMIN_PASSWORD` is not set, or differs between where you set it and where the site runs. After 5 failed attempts, wait 15 minutes. |
| "Website analytics is not set up on this deployment yet." | `POSTHOG_SECRET_KEY` is missing where the site is running. |
| "PostHog rejected the API key." | The key was deleted or rotated. PostHog rotates a key on its own if it ever leaks publicly. Create a new one (Part 6, step 4). |
| "PostHog returned HTTP 404." | The endpoint is missing or not named exactly `growth_studio_dashboard`. |
| "PostHog returned an unexpected shape." | The endpoint was edited and no longer returns `metric`, `label`, and `value`. |
| Matches come back empty | Programs were not seeded, or every program was filtered out by the answers. Check `funding_programs` has ~502 rows. |
