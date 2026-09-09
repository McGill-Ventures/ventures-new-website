// app/funding/page.tsx
"use client";

import { useState } from "react";
import { INTAKE_QUESTIONS } from "@/lib/funding/questions";
import { iconFor } from "@/lib/funding/icons";
import { T } from "@/lib/funding/theme";
import {
  Shell, Card, Brand, QuestionHead, OptionGrid, NavRow, Pill,
  btnPrimary, btnGhost, inputStyle,
} from "@/app/growth-studio/funding/_components/ui";

type Answers = Record<string, unknown[]>;

interface MatchResult {
  program: {
    id: string; program_name: string; administering_body?: string | null;
    short_description?: string | null; official_url?: string | null;
    jurisdiction?: string | null; province_territory?: string | null;
  };
  score: number;
  reasons: string[];
  caveats: string[];
  liveness: "open" | "upcoming" | "unclear" | "closed";
  deadline_display: string;
  closing_soon: boolean;
  amount_text: string;
}

function liveBadge(live: MatchResult["liveness"]) {
  if (live === "open") return { label: "Open now", fg: T.success, bg: T.successSoft };
  if (live === "upcoming") return { label: "Opens soon", fg: T.amber, bg: T.amberSoft };
  if (live === "unclear") return { label: "Verify status", fg: T.amber, bg: T.amberSoft };
  return { label: "Closed", fg: T.muted, bg: T.lineSoft };
}

export default function FundingPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [results, setResults] = useState<MatchResult[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const total = INTAKE_QUESTIONS.length;
  const q = INTAKE_QUESTIONS[step];
  const current = (answers[q.id] as unknown[]) ?? [];
  function select(v: unknown) {
  const cur = (answers[q.id] as unknown[]) ?? [];
  setAnswers({ ...answers, [q.id]: cur.includes(v) ? cur.filter((x) => x !== v) : [...cur, v] });
}
  async function next() {
    if (step < total - 1) { setStep(step + 1); return; }
    setLoading(true); setError(null);
    try {
      const res = await fetch("/api/funding/match", {
        method: "POST", headers: { "Content-Type": "application/json" },
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

  if (loading) return <Shell><Brand /><Card><p style={{ color: T.muted, margin: 0 }}>Matching your venture across 500+ programs...</p></Card></Shell>;
  if (error) return <Shell><Brand /><Card><p style={{ color: T.danger, margin: 0 }}>{error}</p><button onClick={restart} style={{ ...btnGhost, marginTop: 18 }}>Start over</button></Card></Shell>;
  if (results) return <Shell><Brand /><Results results={results} answers={answers} onRestart={restart} /></Shell>;

  const options = q.options.map((o) => ({ value: o.value, label: o.label, sub: o.sub || undefined, Icon: iconFor(o.icon) }));

  return (
    <Shell>
      <Brand />
      <Card>
        <QuestionHead step={step} total={total} label={q.label} hint={q.hint} />
        <OptionGrid options={options} selected={current} onSelect={select} />
        <NavRow showBack={step > 0} onBack={() => setStep(step - 1)} onNext={next}
          nextDisabled={current.length === 0}
          nextLabel={step === total - 1 ? "See my matches" : "Next"} />
      </Card>
    </Shell>
  );
}

function Results({ results, answers, onRestart }: { results: MatchResult[]; answers: Answers; onRestart: () => void }) {
  const [contact, setContact] = useState({ name: "", email: "", company: "" });
  const [sent, setSent] = useState(false);
  const [saving, setSaving] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [showMore, setShowMore] = useState(false);

  const top3 = results.slice(0, 3);
  const rest = results.slice(3);

  async function save() {
    if (!contact.email) { setErr("Add an email so we can send these and follow up."); return; }
    setSaving(true); setErr(null);
    try {
      const res = await fetch("/api/funding/leads", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contact, intake: answers,
          matched_program_ids: results.map((r) => r.program.id),
          match_payload: results.map((r) => ({ id: r.program.id, score: r.score, liveness: r.liveness })),
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Could not save.");
      setSent(true);
    } catch (e) { setErr(e instanceof Error ? e.message : "Something went wrong."); }
    finally { setSaving(false); }
  }

  if (results.length === 0) {
    return (
      <Card>
        <h1 style={{ fontSize: 26, fontWeight: 800, margin: 0, letterSpacing: "-0.02em" }}>No open programs matched</h1>
        <p style={{ marginTop: 12, color: T.muted, fontSize: 16, lineHeight: 1.55 }}>
          That happens at very early or very specific profiles. An advisor can still point you to the right next step.
        </p>
        <button onClick={onRestart} style={{ ...btnGhost, marginTop: 20 }}>Start over</button>
      </Card>
    );
  }

  return (
    <div style={{ display: "grid", gap: 16 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
        <h1 style={{ fontSize: 30, fontWeight: 800, margin: 0, letterSpacing: "-0.02em" }}>Your best-fit programs</h1>
        <button onClick={onRestart} style={btnGhost}>Start over</button>
      </div>

      {top3.map((r, i) => {
        const b = liveBadge(r.liveness);
        return (
          <article key={r.program.id} style={{ background: T.surface, borderRadius: T.radiusCard, boxShadow: T.shadow, padding: 28, border: `1.5px solid ${T.primaryRing}` }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 14 }}>
              <div style={{ display: "flex", gap: 14, minWidth: 0 }}>
                <span style={{ flexShrink: 0, width: 34, height: 34, borderRadius: 10, background: T.primary, color: "#fff", fontSize: 15, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center" }}>{i + 1}</span>
                <div style={{ minWidth: 0 }}>
                  <h2 style={{ margin: 0, fontSize: 19, fontWeight: 750, letterSpacing: "-0.01em" }}>{r.program.program_name}</h2>
                  <p style={{ margin: "3px 0 0", fontSize: 14, color: T.muted }}>{r.program.administering_body}</p>
                </div>
              </div>
              <Pill label={b.label} fg={b.fg} bg={b.bg} />
            </div>
            {r.program.short_description && (
              <p style={{ marginTop: 16, fontSize: 15, lineHeight: 1.55, color: T.inkSoft }}>{r.program.short_description}</p>
            )}
            <p style={{ marginTop: 10, fontSize: 15, fontWeight: 700 }}>{r.amount_text}</p>
            <p style={{ marginTop: 4, fontSize: 14, color: r.closing_soon ? T.amber : T.muted, fontWeight: r.closing_soon ? 700 : 400 }}>{r.deadline_display}</p>
            {r.caveats.length > 0 && (
              <ul style={{ marginTop: 12, paddingLeft: 18, fontSize: 13.5, color: T.amber, lineHeight: 1.6 }}>
                {r.caveats.map((c, k) => <li key={k}>{c}</li>)}
              </ul>
            )}
            {r.program.official_url && (
              <a href={r.program.official_url} target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", marginTop: 14, fontSize: 14.5, color: T.primary, fontWeight: 700 }}>
                Official program page →
              </a>
            )}
          </article>
        );
      })}

      {rest.length > 0 && (
        !showMore ? (
          <button onClick={() => setShowMore(true)} style={{ ...btnGhost, width: "100%", padding: "16px", background: T.surface }}>
            Show {rest.length} more program{rest.length === 1 ? "" : "s"} you may qualify for
          </button>
        ) : (
          <div style={{ background: T.surface, borderRadius: T.radiusCard, boxShadow: T.shadow, overflow: "hidden" }}>
            {rest.map((r, i) => {
              const b = liveBadge(r.liveness);
              return (
                <div key={r.program.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, padding: "16px 22px", borderTop: i === 0 ? "none" : `1px solid ${T.lineSoft}` }}>
                  <div style={{ minWidth: 0 }}>
                    <p style={{ margin: 0, fontSize: 15.5, fontWeight: 700 }}>{r.program.program_name}</p>
                    <p style={{ margin: "3px 0 0", fontSize: 13, color: T.muted }}>{r.amount_text} · {r.deadline_display}</p>
                  </div>
                  <Pill label={b.label} fg={b.fg} bg={b.bg} />
                </div>
              );
            })}
          </div>
        )
      )}

      <section style={{ background: T.primary, borderRadius: T.radiusCard, padding: 30, color: "#fff", boxShadow: "0 18px 50px -12px rgba(91, 33, 230, 0.4)" }}>
        {sent ? (
          <div>
            <h2 style={{ margin: 0, fontSize: 21, fontWeight: 750 }}>You are on our radar</h2>
            <p style={{ marginTop: 10, fontSize: 15.5, color: "#E9E4FD", lineHeight: 1.55 }}>The Growth Studio team will reach out to help you prepare and polish your application materials.</p>
          </div>
        ) : (
          <div>
            <h2 style={{ margin: 0, fontSize: 21, fontWeight: 750 }}>Get help applying</h2>
            <p style={{ marginTop: 8, fontSize: 15, color: "#E9E4FD", lineHeight: 1.55 }}>Matching is the easy part. We work with you to prepare the materials these programs actually want.</p>
            <div style={{ display: "grid", gap: 10, marginTop: 20 }}>
              <input placeholder="Name" value={contact.name} onChange={(e) => setContact({ ...contact, name: e.target.value })} style={inputStyle} />
              <input placeholder="Email" type="email" value={contact.email} onChange={(e) => setContact({ ...contact, email: e.target.value })} style={inputStyle} />
              <input placeholder="Company (optional)" value={contact.company} onChange={(e) => setContact({ ...contact, company: e.target.value })} style={inputStyle} />
              {err && <p style={{ color: "#FECACA", fontSize: 13.5, margin: 0 }}>{err}</p>}
              <button onClick={save} disabled={saving} style={{ ...btnPrimary, background: "#fff", color: T.primary, boxShadow: "none", opacity: saving ? 0.7 : 1, padding: "14px 20px" }}>
                {saving ? "Sending..." : "Connect with McGill Growth Studio"}
              </button>
            </div>
          </div>
        )}
      </section>

      <p style={{ fontSize: 12.5, color: T.muted, textAlign: "center", marginTop: 4 }}>Matches are a starting point, not eligibility advice. Confirm details on the official page.</p>
    </div>
  );
}
