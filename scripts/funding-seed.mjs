// scripts/funding-seed.mjs
// Loads the funding programs from data/funding-programs.json into Supabase.
// Run with: npm run funding:seed   (after filling .env.local and running docs/funding-tool/schema_data.sql)
// Uses Node's built-in --env-file flag, so no dotenv dependency is needed.
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "node:fs";
const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!url || !key) {
  console.error("Missing Supabase env vars in .env.local");
  process.exit(1);
}

const supabase = createClient(url, key, { auth: { persistSession: false } });
const rows = JSON.parse(readFileSync("data/funding-programs.json", "utf8"));

const BATCH = 100;
let done = 0;
for (let i = 0; i < rows.length; i += BATCH) {
  const chunk = rows.slice(i, i + BATCH).map((r) => ({ ...r, updated_at: new Date().toISOString() }));
  const { error } = await supabase.from("funding_programs").upsert(chunk);
  if (error) {
    console.error("Batch failed at row", i, error.message);
    process.exit(1);
  }
  done += chunk.length;
  console.log(`seeded ${done}/${rows.length}`);
}
console.log("Done. Seeded", done, "programs.");
