// app/admin/page.tsx
"use client";

import { useEffect, useState, useCallback } from "react";
import { T } from "@/lib/funding/theme";
import { Shell, Card, Brand, btnPrimary, btnGhost, inputStyle, Pill } from "@/app/growth-studio/funding/_components/ui";
import { FUNDING_FIELDS, PARTNER_FIELDS, blankRecord, type Field } from "@/lib/funding/adminSchema";
import { ISSUE_LABELS, type ActionItem, type Priority } from "@/lib/funding/reviewAlgorithm";

type Row = Record<string, unknown>;
type Tab = "attention" | "programs" | "partners";

export default function AdminPage() {
  const [authed, setAuthed] = useState<boolean | null>(null);
  const [password, setPassword] = useState("");
  const [loginErr, setLoginErr] = useState<string | null>(null);

  useEffect(() => { fetch("/api/funding/admin/review").then((r) => setAuthed(r.ok)); }, []);

  async function login() {
    setLoginErr(null);
    const r = await fetch("/api/funding/admin/login", {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    if (r.ok) setAuthed(true); else setLoginErr("That password did not work.");
  }

  if (authed === null) return <Shell><Brand /><Card><p style={{ margin: 0, color: T.muted }}>Loading...</p></Card></Shell>;

  if (!authed) {
    return (
      <Shell><Brand />
        <Card>
          <h1 style={{ fontSize: 26, fontWeight: 800, margin: 0, letterSpacing: "-0.02em" }}>Admin sign in</h1>
          <p style={{ color: T.muted, marginTop: 8, fontSize: 15 }}>Enter the team password to manage the data.</p>
          <div style={{ display: "grid", gap: 10, marginTop: 20, maxWidth: 360 }}>
            <input type="password" placeholder="Password" value={password}
              onChange={(e) => setPassword(e.target.value)} onKeyDown={(e) => e.key === "Enter" && login()} style={inputStyle} />
            {loginErr && <p style={{ color: T.danger, fontSize: 13.5, margin: 0 }}>{loginErr}</p>}
            <button onClick={login} style={btnPrimary}>Sign in</button>
          </div>
        </Card>
      </Shell>
    );
  }
  return <Console />;
}

function Console() {
  const [tab, setTab] = useState<Tab>("attention");
  const [editTarget, setEditTarget] = useState<{ endpoint: string; id: string } | null>(null);

  async function logout() { await fetch("/api/funding/admin/logout", { method: "POST" }); window.location.reload(); }

  return (
    <Shell>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Brand />
        <button onClick={logout} style={{ ...btnGhost, padding: "8px 18px" }}>Sign out</button>
      </div>

      <div style={{ display: "flex", gap: 8, marginBottom: 18, flexWrap: "wrap" }}>
        <TabBtn active={tab === "attention"} onClick={() => { setTab("attention"); setEditTarget(null); }}>Needs attention</TabBtn>
        <TabBtn active={tab === "programs"} onClick={() => { setTab("programs"); setEditTarget(null); }}>Funding programs</TabBtn>
        <TabBtn active={tab === "partners"} onClick={() => { setTab("partners"); setEditTarget(null); }}>Partners</TabBtn>
      </div>

      {tab === "attention" && (
        <AttentionDashboard onEdit={(id) => { setEditTarget({ endpoint: "/api/funding/admin/programs", id }); setTab("programs"); }} />
      )}
      {tab === "programs" && <CrudTab endpoint="/api/funding/admin/programs" fields={FUNDING_FIELDS} label="programs" nameKey="program_name" jumpToId={editTarget?.endpoint === "/api/funding/admin/programs" ? editTarget.id : null} />}
      {tab === "partners" && <CrudTab endpoint="/api/funding/admin/partners" fields={PARTNER_FIELDS} label="partners" nameKey="name" jumpToId={null} />}
    </Shell>
  );
}

function TabBtn({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button onClick={onClick} style={{
      background: active ? T.primary : T.surface, color: active ? "#fff" : T.inkSoft,
      border: `1.5px solid ${active ? T.primary : T.line}`, borderRadius: T.radiusBtn,
      padding: "10px 20px", fontSize: 14.5, fontWeight: 700, cursor: "pointer", fontFamily: T.font,
    }}>{children}</button>
  );
}

const PRIORITY_STYLE: Record<Priority, { fg: string; bg: string; label: string }> = {
  high: { fg: "#B91C1C", bg: "#FEE2E2", label: "High" },
  medium: { fg: T.amber, bg: T.amberSoft, label: "Medium" },
  low: { fg: T.muted, bg: T.lineSoft, label: "Low" },
};

function AttentionDashboard({ onEdit }: { onEdit: (id: string) => void }) {
  const [items, setItems] = useState<ActionItem[]>([]);
  const [summary, setSummary] = useState<{ high: number; medium: number; low: number; by_type: Record<string, number> } | null>(null);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string | null>(null);
  const [busy, setBusy] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    const r = await fetch("/api/funding/admin/review");
    const d = await r.json();
    setItems(d.items ?? []); setSummary(d.summary ?? null); setTotal(d.total_programs ?? 0);
    setLoading(false);
  }, []);
  useEffect(() => { load(); }, [load]);

  async function quick(id: string, action: string) {
    setBusy(id + action);
    await fetch("/api/funding/admin/quick", {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, action }),
    });
    setBusy(null);
    load();
  }

  const shown = filter ? items.filter((i) => i.issue_type === filter) : items;

  if (loading) return <Card><p style={{ margin: 0, color: T.muted }}>Scanning {total || ""} programs...</p></Card>;

  return (
    <div style={{ display: "grid", gap: 16 }}>
      <Card>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: 8 }}>
          <h1 style={{ fontSize: 24, fontWeight: 800, margin: 0, letterSpacing: "-0.02em" }}>What needs your attention</h1>
          <span style={{ fontSize: 13.5, color: T.muted }}>{total} programs, {items.length} items</span>
        </div>
        <div style={{ display: "flex", gap: 10, marginTop: 16, flexWrap: "wrap" }}>
          <Stat n={summary?.high ?? 0} label="High" fg="#B91C1C" bg="#FEE2E2" />
          <Stat n={summary?.medium ?? 0} label="Medium" fg={T.amber} bg={T.amberSoft} />
          <Stat n={summary?.low ?? 0} label="Low" fg={T.muted} bg={T.lineSoft} />
        </div>
        <div style={{ display: "flex", gap: 8, marginTop: 16, flexWrap: "wrap" }}>
          <FilterChip active={filter === null} onClick={() => setFilter(null)}>All</FilterChip>
          {Object.entries(summary?.by_type ?? {}).sort((a, b) => b[1] - a[1]).map(([k, n]) => (
            <FilterChip key={k} active={filter === k} onClick={() => setFilter(k)}>
              {ISSUE_LABELS[k as keyof typeof ISSUE_LABELS] ?? k} ({n})
            </FilterChip>
          ))}
        </div>
      </Card>

      {shown.length === 0 ? (
        <Card><p style={{ margin: 0, color: T.muted }}>Nothing in this view. The data is in good shape.</p></Card>
      ) : (
        <div style={{ background: T.surface, borderRadius: T.radiusCard, boxShadow: T.shadow, overflow: "hidden" }}>
          {shown.slice(0, 200).map((it, idx) => {
            const ps = PRIORITY_STYLE[it.priority];
            return (
              <div key={it.id + it.issue_type} style={{ padding: "16px 22px", borderTop: idx === 0 ? "none" : `1px solid ${T.lineSoft}` }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                  <Pill label={ps.label} fg={ps.fg} bg={ps.bg} />
                  <Pill label={ISSUE_LABELS[it.issue_type]} fg={T.primary} bg={T.primarySoft} />
                </div>
                <p style={{ margin: "8px 0 0", fontSize: 15.5, fontWeight: 700 }}>{it.program_name}</p>
                <p style={{ margin: "3px 0 0", fontSize: 13.5, color: T.inkSoft }}>{it.message}</p>
                <p style={{ margin: "4px 0 0", fontSize: 13, color: T.muted }}>{"\u2192"} {it.recommended_action}</p>
                <div style={{ display: "flex", gap: 8, marginTop: 12, flexWrap: "wrap" }}>
                  <button onClick={() => onEdit(it.id)} style={{ ...btnGhost, padding: "7px 16px", fontSize: 13.5 }}>Edit</button>
                  {it.quick_actions.includes("mark_reviewed") && (
                    <button disabled={busy === it.id + "mark_reviewed"} onClick={() => quick(it.id, "mark_reviewed")}
                      style={{ ...btnGhost, padding: "7px 16px", fontSize: 13.5, color: T.success, borderColor: "#BBE7CB" }}>
                      {busy === it.id + "mark_reviewed" ? "..." : "Mark reviewed today"}
                    </button>
                  )}
                  {it.quick_actions.includes("set_closed") && (
                    <button disabled={busy === it.id + "set_closed"} onClick={() => quick(it.id, "set_closed")}
                      style={{ ...btnGhost, padding: "7px 16px", fontSize: 13.5, color: T.danger, borderColor: "#F5C2C2" }}>
                      {busy === it.id + "set_closed" ? "..." : "Set closed"}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
          {shown.length > 200 && (
            <p style={{ padding: "14px 22px", margin: 0, fontSize: 13, color: T.muted }}>
              Showing the 200 most urgent of {shown.length}. Clear these and the rest surface.
            </p>
          )}
        </div>
      )}
    </div>
  );
}

function Stat({ n, label, fg, bg }: { n: number; label: string; fg: string; bg: string }) {
  return (
    <div style={{ background: bg, borderRadius: 14, padding: "14px 20px", minWidth: 96 }}>
      <div style={{ fontSize: 26, fontWeight: 800, color: fg, lineHeight: 1 }}>{n}</div>
      <div style={{ fontSize: 12.5, color: fg, marginTop: 4, fontWeight: 600 }}>{label}</div>
    </div>
  );
}

function FilterChip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button onClick={onClick} style={{
      padding: "7px 14px", borderRadius: 999, fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: T.font,
      border: `1.5px solid ${active ? T.primary : T.line}`, background: active ? T.primarySoft : T.surface,
      color: active ? T.primary : T.inkSoft,
    }}>{children}</button>
  );
}

function CrudTab({
  endpoint, fields, label, nameKey, jumpToId,
}: { endpoint: string; fields: Field[]; label: string; nameKey: string; jumpToId: string | null }) {
  const [rows, setRows] = useState<Row[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<Row | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [query, setQuery] = useState("");

  const load = useCallback(async () => {
    setLoading(true);
    const r = await fetch(endpoint);
    const d = await r.json();
    setRows(d.rows ?? []);
    setLoading(false);
    if (jumpToId) {
      const hit = (d.rows ?? []).find((x: Row) => String(x.id) === jumpToId);
      if (hit) { setEditing({ ...hit }); setIsNew(false); }
    }
  }, [endpoint, jumpToId]);
  useEffect(() => { load(); }, [load]);

  async function save(rec: Row) {
    const r = await fetch(endpoint, {
      method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(rec),
    });
    if (!r.ok) { const d = await r.json(); alert(d.error ?? "Could not save."); return; }
    setEditing(null); load();
  }
  async function remove(id: string) {
    if (!confirm("Delete this entry? This cannot be undone.")) return;
    await fetch(endpoint, { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id }) });
    setEditing(null); load();
  }

  if (editing) {
    return <RecordForm fields={fields} value={editing} isNew={isNew} nameKey={nameKey}
      onChange={setEditing} onCancel={() => setEditing(null)} onSave={() => save(editing)}
      onDelete={!isNew ? () => remove(String(editing.id)) : undefined} />;
  }

  const filtered = query
    ? rows.filter((r) => String(r[nameKey] ?? "").toLowerCase().includes(query.toLowerCase()))
    : rows;

  return (
    <Card padding={0}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 22px", gap: 12, flexWrap: "wrap" }}>
        <input placeholder={"Search " + label + "..."} value={query} onChange={(e) => setQuery(e.target.value)}
          style={{ ...inputStyle, maxWidth: 280 }} />
        <button onClick={() => { setEditing(blankRecord(fields)); setIsNew(true); }} style={{ ...btnPrimary, padding: "10px 20px" }}>+ Add new</button>
      </div>
      <div style={{ maxHeight: "60vh", overflowY: "auto" }}>
        {loading ? <p style={{ padding: "16px 22px", color: T.muted }}>Loading...</p> :
          filtered.slice(0, 300).map((row, i) => (
            <div key={String(row.id)} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, padding: "13px 22px", borderTop: i === 0 ? "none" : `1px solid ${T.lineSoft}` }}>
              <div style={{ minWidth: 0 }}>
                <p style={{ margin: 0, fontSize: 15, fontWeight: 700, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{String(row[nameKey] ?? row.id)}</p>
                <p style={{ margin: "3px 0 0", fontSize: 12.5, color: T.muted }}>
                  {String(row.status ?? "")}{row.next_deadline ? " \u00b7 " + String(row.next_deadline) : ""}{row.is_example ? " \u00b7 EXAMPLE" : ""}
                </p>
              </div>
              <button onClick={() => { setEditing({ ...row }); setIsNew(false); }} style={{ ...btnGhost, padding: "7px 16px", fontSize: 13.5 }}>Edit</button>
            </div>
          ))}
        {!loading && filtered.length === 0 && <p style={{ padding: "16px 22px", color: T.muted, margin: 0 }}>No matches.</p>}
      </div>
    </Card>
  );
}

function RecordForm({
  fields, value, isNew, nameKey, onChange, onCancel, onSave, onDelete,
}: {
  fields: Field[]; value: Row; isNew: boolean; nameKey: string;
  onChange: (r: Row) => void; onCancel: () => void; onSave: () => void; onDelete?: () => void;
}) {
  function set(key: string, v: unknown) { onChange({ ...value, [key]: v }); }
  return (
    <Card>
      <h1 style={{ fontSize: 23, fontWeight: 800, margin: 0, letterSpacing: "-0.02em" }}>
        {isNew ? "New entry" : String(value[nameKey] ?? value.id)}
      </h1>
      <div style={{ display: "grid", gap: 18, marginTop: 22 }}>
        {fields.map((f) => (
          <div key={f.key}>
            <label style={{ display: "block", fontSize: 13.5, fontWeight: 700, color: T.inkSoft, marginBottom: 6 }}>{f.label}</label>
            {f.help && <p style={{ margin: "0 0 8px", fontSize: 12.5, color: T.muted }}>{f.help}</p>}
            <FieldInput f={f} value={value[f.key]} disabled={f.idField && !isNew} onChange={(v) => set(f.key, v)} />
          </div>
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 28 }}>
        <div style={{ display: "flex", gap: 10 }}>
          <button onClick={onSave} style={btnPrimary}>Save</button>
          <button onClick={onCancel} style={btnGhost}>Cancel</button>
        </div>
        {onDelete && <button onClick={onDelete} style={{ ...btnGhost, color: T.danger, borderColor: "#F5C2C2" }}>Delete</button>}
      </div>
    </Card>
  );
}

function FieldInput({ f, value, disabled, onChange }: { f: Field; value: unknown; disabled?: boolean; onChange: (v: unknown) => void }) {
  if (f.type === "textarea")
    return <textarea value={String(value ?? "")} disabled={disabled} onChange={(e) => onChange(e.target.value)} rows={3} style={{ ...inputStyle, resize: "vertical", opacity: disabled ? 0.6 : 1 }} />;
  if (f.type === "number")
    return <input type="number" value={value === null || value === undefined ? "" : String(value)} onChange={(e) => onChange(e.target.value)} style={inputStyle} />;
  if (f.type === "date")
    return <input type="date" value={value ? String(value).slice(0, 10) : ""} onChange={(e) => onChange(e.target.value)} style={inputStyle} />;
  if (f.type === "select")
    return <select value={String(value ?? "")} onChange={(e) => onChange(e.target.value)} style={{ ...inputStyle, cursor: "pointer" }}>
      {f.options?.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
    </select>;
  if (f.type === "multiselect") {
    const arr = Array.isArray(value) ? (value as string[]) : [];
    const toggle = (v: string) => onChange(arr.includes(v) ? arr.filter((x) => x !== v) : [...arr, v]);
    return (
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        {f.options?.map((o) => {
          const on = arr.includes(o.value);
          return <button key={o.value} onClick={() => toggle(o.value)} style={{
            padding: "7px 13px", borderRadius: 999, fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: T.font,
            border: `1.5px solid ${on ? T.primary : T.line}`, background: on ? T.primarySoft : T.surface, color: on ? T.primary : T.inkSoft,
          }}>{o.label}</button>;
        })}
      </div>
    );
  }
  return <input type="text" value={String(value ?? "")} disabled={disabled} onChange={(e) => onChange(e.target.value)} style={{ ...inputStyle, opacity: disabled ? 0.6 : 1 }} />;
}
