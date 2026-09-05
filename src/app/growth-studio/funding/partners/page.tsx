// app/partners/page.tsx
"use client";

import { useState } from "react";
import { PARTNER_QUESTIONS } from "@/lib/funding/partnerQuestions";
import { iconFor } from "@/lib/funding/icons";
import type { PartnerIntake } from "@/lib/funding/partnerMatcher";
import { T } from "@/lib/funding/theme";
import {
  Shell, Card, Brand, QuestionHead, OptionGrid, NavRow, Pill,
  btnPrimary, btnGhost, inputStyle,
} from "@/app/growth-studio/funding/_components/ui";

type Answers = Partial<PartnerIntake>;

interface PartnerResult {
  partner: {
    id: string; name: string; entity_type: "company" | "person";
    partner_kind: string[]; segment: string; location: string;
    intro_via_mvc: boolean; contact_public: boolean; contact: string | null;
    blurb: string;
  };
  score: number;
  reasons: string[];
  is_example: boolean;
}

const KIND_LABEL: Record<string, string> = {
  customer: "Potential customer",
  design_partner: "Design partner",
  expert: "Expert",
  pilot_site: "Pilot site",
  channel: "Channel partner",
};

export default function PartnersPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [results, setResults] = useState<PartnerResult[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const total = PARTNER_QUESTIONS.length;
  const q = PARTNER_QUESTIONS[step];
  const current = (answers as Record<string, unknown>)[q.id];

  function select(v: unknown) {
    setAnswers({ ...answers, [q.id]: v });
  }

  async function next() {
    if (step < total - 1) { setStep(step + 1); return; }
    setLoading(true); setError(null);
    try {
      const res = await fetch("/api/funding/match-partners", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(answers),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Match failed");
      setResults(data.results);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong.");
    } finally { setLoading(false); }
  }

  function restart() { setStep(0); setAnswers({}); setResults(null); setError(null); }

  if (loading) {
    return <Shell><Brand /><Card><p style={{ color: T.muted, margin: 0 }}>Finding people who match your customer...</p></Card></Shell>;
  }

  if (error) {
    return (
      <Shell><Brand />
        <Card>
          <p style={{ color: T.danger, margin: 0 }}>{error}</p>
          <button onClick={restart} style={{ ...btnGhost, marginTop: 18 }}>Start over</button>
        </Card>
      </Shell>
    );
  }

  if (results) {
    return <Shell><Brand /><PartnerResults results={results} answers={answers} onRestart={restart} /></Shell>;
  }

  const options = q.options.map((o) => ({
    value: o.value,
    label: o.label,
    sub: o.sub || undefined,
    Icon: iconFor(o.icon),
  }));

  return (
    <Shell>
      <Brand />
      <Card>
        <QuestionHead step={step} total={total} label={q.label} hint={q.hint} />
        <OptionGrid options={options} selected={current} onSelect={select} />
        <NavRow
          showBack={step > 0}
          onBack={() => setStep(step - 1)}
          onNext={next}
          nextDisabled={current === undefined}
          nextLabel={step === total - 1 ? "See my partners" : "Next"}
        />
      </Card>
    </Shell>
  );
}

function PartnerResults({
  results, answers, onRestart,
}: { results: PartnerResult[]; answers: Answers; onRestart: () => void }) {
  const [contact, setContact] = useState({ name: "", email: "", company: "" });
  const [sent, setSent] = useState(false);
  const [saving, setSaving] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const top3 = results.slice(0, 3);
  const rest = results.slice(3);
  const anyExample = results.some((r) => r.is_example);

  async function save() {
    if (!contact.email) { setErr("Add an email so we can arrange the introductions."); return; }
    setSaving(true); setErr(null);
    try {
      const res = await fetch("/api/funding/partner-leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contact, intake: answers,
          requested_partner_ids: results.map((r) => r.partner.id),
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Could not save.");
      setSent(true);
    } catch (e) {
      setErr(e instanceof Error ? e.message : "Something went wrong.");
    } finally { setSaving(false); }
  }

  if (results.length === 0) {
    return (
      <Card>
        <h1 style={{ fontSize: 26, fontWeight: 800, margin: 0, letterSpacing: "-0.02em" }}>
          No partners matched yet
        </h1>
        <p style={{ marginTop: 12, color: T.muted, fontSize: 16, lineHeight: 1.55 }}>
          Our network may not cover this customer profile yet. Tell us who you need to
          reach and an advisor will work on it directly.
        </p>
        <button onClick={onRestart} style={{ ...btnGhost, marginTop: 20 }}>Start over</button>
      </Card>
    );
  }

  return (
    <div style={{ display: "grid", gap: 16 }}>
      {anyExample && (
        <div style={{
          background: T.amberSoft, border: `1.5px solid #FCD34D`, borderRadius: T.radiusOption,
          padding: "14px 18px", fontSize: 13.5, color: T.amber, fontWeight: 600,
        }}>
          Placeholder data. These are example entries only. Delete them in the admin page and
          add real, consented partners before showing this to founders.
        </div>
      )}

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
        <h1 style={{ fontSize: 30, fontWeight: 800, margin: 0, letterSpacing: "-0.02em" }}>
          Who to talk to next
        </h1>
        <button onClick={onRestart} style={btnGhost}>Start over</button>
      </div>

      {top3.map((r, i) => (
        <article key={r.partner.id} style={{
          background: T.surface, borderRadius: T.radiusCard, boxShadow: T.shadow,
          padding: 28, border: `1.5px solid ${T.primaryRing}`,
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: 14 }}>
            <div style={{ display: "flex", gap: 14, minWidth: 0 }}>
              <span style={{
                flexShrink: 0, width: 34, height: 34, borderRadius: 10, background: T.primary,
                color: "#fff", fontSize: 15, fontWeight: 800,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>{i + 1}</span>
              <div style={{ minWidth: 0 }}>
                <h2 style={{ margin: 0, fontSize: 20, fontWeight: 750, letterSpacing: "-0.01em" }}>
                  {r.partner.name}
                </h2>
                <p style={{ margin: "3px 0 0", fontSize: 14, color: T.muted }}>
                  {r.partner.location} · {r.partner.entity_type === "person" ? "Individual" : "Company"}
                </p>
              </div>
            </div>
            {r.partner.intro_via_mvc && (
              <Pill label="Intro via MVC" fg={T.success} bg={T.successSoft} />
            )}
          </div>

          <p style={{ marginTop: 16, fontSize: 15.5, lineHeight: 1.55, color: T.inkSoft }}>
            {r.partner.blurb}
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 14 }}>
            {r.partner.partner_kind.map((k) => (
              <Pill key={k} label={KIND_LABEL[k] ?? k} fg={T.primary} bg={T.primarySoft} />
            ))}
          </div>

          {r.reasons.length > 0 && (
            <p style={{ marginTop: 14, fontSize: 13.5, color: T.muted }}>
              {r.reasons.join(" · ")}
            </p>
          )}

          {r.partner.contact_public && r.partner.contact ? (
            <p style={{ marginTop: 12, fontSize: 14.5, color: T.primary, fontWeight: 700 }}>
              {r.partner.contact}
            </p>
          ) : (
            <p style={{ marginTop: 12, fontSize: 13.5, color: T.muted }}>
              Contact details shared once an advisor makes the introduction.
            </p>
          )}
        </article>
      ))}

      {rest.length > 0 && (
        <div style={{ background: T.surface, borderRadius: T.radiusCard, boxShadow: T.shadow, overflow: "hidden" }}>
          {rest.map((r, i) => (
            <div key={r.partner.id} style={{
              display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12,
              padding: "16px 22px", borderTop: i === 0 ? "none" : `1px solid ${T.lineSoft}`,
            }}>
              <div style={{ minWidth: 0 }}>
                <p style={{ margin: 0, fontSize: 15.5, fontWeight: 700 }}>{r.partner.name}</p>
                <p style={{ margin: "3px 0 0", fontSize: 13, color: T.muted }}>
                  {r.partner.partner_kind.map((k) => KIND_LABEL[k] ?? k).join(", ")}
                </p>
              </div>
              {r.partner.intro_via_mvc && <Pill label="Intro via MVC" fg={T.success} bg={T.successSoft} />}
            </div>
          ))}
        </div>
      )}

      <section style={{
        background: T.primary, borderRadius: T.radiusCard, padding: 30, color: "#fff",
        boxShadow: "0 18px 50px -12px rgba(91, 33, 230, 0.4)",
      }}>
        {sent ? (
          <div>
            <h2 style={{ margin: 0, fontSize: 21, fontWeight: 750 }}>Introduction requested</h2>
            <p style={{ marginTop: 10, fontSize: 15.5, color: "#E9E4FD", lineHeight: 1.55 }}>
              An advisor will review the fit and reach out to arrange warm introductions.
              We contact partners on your behalf, so nobody gets cold-emailed.
            </p>
          </div>
        ) : (
          <div>
            <h2 style={{ margin: 0, fontSize: 21, fontWeight: 750 }}>Ask for warm introductions</h2>
            <p style={{ marginTop: 8, fontSize: 15, color: "#E9E4FD", lineHeight: 1.55 }}>
              A cold email gets ignored. An introduction from McGill Ventures gets a meeting.
              Tell us who you want to reach and we will make the connection.
            </p>
            <div style={{ display: "grid", gap: 10, marginTop: 20 }}>
              <input placeholder="Name" value={contact.name}
                onChange={(e) => setContact({ ...contact, name: e.target.value })} style={inputStyle} />
              <input placeholder="Email" type="email" value={contact.email}
                onChange={(e) => setContact({ ...contact, email: e.target.value })} style={inputStyle} />
              <input placeholder="Company (optional)" value={contact.company}
                onChange={(e) => setContact({ ...contact, company: e.target.value })} style={inputStyle} />
              {err && <p style={{ color: "#FECACA", fontSize: 13.5, margin: 0 }}>{err}</p>}
              <button onClick={save} disabled={saving} style={{
                ...btnPrimary, background: "#fff", color: T.primary,
                boxShadow: "none", opacity: saving ? 0.7 : 1, padding: "14px 20px",
              }}>
                {saving ? "Sending..." : "Request introductions"}
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
