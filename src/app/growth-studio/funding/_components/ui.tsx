// components/ui.tsx
"use client";

import { type ReactNode, type CSSProperties } from "react";
import { T, chipFor } from "@/lib/funding/theme";

/* ---------- Page shell: lavender canvas + decorative texture ---------- */

export function Shell({ children }: { children: ReactNode }) {
  return (
    <main
      style={{
        minHeight: "70vh",
        background: T.canvasTop,
        color: T.ink,
        fontFamily: T.font,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Texture />
      <div
        style={{
          position: "relative",
          maxWidth: 900,
          margin: "0 auto",
          padding: "56px 20px 96px",
        }}
      >
        {children}
      </div>
    </main>
  );
}

// Subtle dot grids and wave lines, echoing the reference art direction.
function Texture() {
  const dots = (style: CSSProperties) => (
    <div
      style={{
        position: "absolute",
        width: 120,
        height: 120,
        backgroundImage: `radial-gradient(${T.primaryRing} 1.4px, transparent 1.4px)`,
        backgroundSize: "14px 14px",
        opacity: 0.55,
        ...style,
      }}
    />
  );
  return (
    <div aria-hidden style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
      {dots({ top: 120, left: 12 })}
      {dots({ bottom: 90, right: 18 })}
      <svg
        style={{ position: "absolute", bottom: -20, left: -60, opacity: 0.5 }}
        width="420"
        height="260"
        viewBox="0 0 420 260"
        fill="none"
      >
        {[0, 1, 2, 3, 4].map((i) => (
          <path
            key={i}
            d={`M-20 ${120 + i * 22} C 90 ${60 + i * 22}, 200 ${190 + i * 18}, 440 ${90 + i * 20}`}
            stroke={T.primaryRing}
            strokeWidth="1.1"
            fill="none"
          />
        ))}
      </svg>
      <svg
        style={{ position: "absolute", top: -30, right: -80, opacity: 0.5 }}
        width="420"
        height="260"
        viewBox="0 0 420 260"
        fill="none"
      >
        {[0, 1, 2, 3, 4].map((i) => (
          <path
            key={i}
            d={`M-20 ${90 + i * 20} C 120 ${170 + i * 18}, 240 ${40 + i * 22}, 440 ${130 + i * 20}`}
            stroke={T.primaryRing}
            strokeWidth="1.1"
            fill="none"
          />
        ))}
      </svg>
    </div>
  );
}

/* ---------- Card ---------- */

export function Card({
  children,
  padding = 40,
}: {
  children: ReactNode;
  padding?: number;
}) {
  return (
    <section
      style={{
        background: T.surface,
        borderRadius: T.radiusCard,
        boxShadow: T.shadow,
        padding,
      }}
    >
      {children}
    </section>
  );
}

/* ---------- Brand line ---------- */

export function Brand({ href = "/growth-studio/funding" }: { href?: string }) {
  return (
    <a
      href={href}
      style={{
        display: "inline-block",
        marginBottom: 22,
        fontSize: 12,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: T.primary,
        fontWeight: 700,
        textDecoration: "none",
        fontFamily: T.headingFont,
      }}
    >
      Growth Studio · Funding tool
    </a>
  );
}

/* ---------- Progress dashes ---------- */

export function Progress({ step, total }: { step: number; total: number }) {
  return (
    <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
      {Array.from({ length: total }).map((_, i) => (
        <span
          key={i}
          style={{
            width: i === step ? 30 : 22,
            height: 5,
            borderRadius: 999,
            background: i <= step ? T.primary : T.primaryRing,
            transition: "all 160ms ease",
          }}
        />
      ))}
    </div>
  );
}

/* ---------- Question header ---------- */

export function QuestionHead({
  step,
  total,
  label,
  hint,
}: {
  step: number;
  total: number;
  label: string;
  hint?: string;
}) {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 16,
        }}
      >
        <span style={{ fontSize: 14, fontWeight: 600, color: T.primary }}>
          Question {step + 1} of {total}
        </span>
        <Progress step={step} total={total} />
      </div>

      <h1
        style={{
          fontSize: 32,
          lineHeight: 1.15,
          fontWeight: 700,
          fontFamily: T.headingFont,
          letterSpacing: "-0.02em",
          margin: "18px 0 0",
        }}
      >
        {label}
      </h1>
      {hint && (
        <p style={{ margin: "10px 0 0", fontSize: 16, color: T.muted, maxWidth: 520, lineHeight: 1.5 }}>
          {hint}
        </p>
      )}
    </>
  );
}

/* ---------- Option grid ---------- */

export interface OptionItem {
  value: unknown;
  label: string;
  sub?: string;
  Icon?: React.ElementType;
}

export function OptionGrid({
  options,
  selected,
  onSelect,
}: {
  options: OptionItem[];
  selected: unknown;
  onSelect: (v: unknown) => void;
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: 14,
        marginTop: 28,
      }}
    >
      {options.map((opt, i) => {
        const isSel = Array.isArray(selected) ? selected.includes(opt.value) : selected === opt.value;
        const chip = chipFor(i);
        const Icon = opt.Icon;
        return (
          <button
            key={String(opt.value)}
            onClick={() => onSelect(opt.value)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              textAlign: "left",
              padding: "16px 18px",
              borderRadius: T.radiusOption,
              border: `1.5px solid ${isSel ? T.primary : T.line}`,
              background: isSel ? T.primarySoft : T.surface,
              boxShadow: isSel ? "none" : T.shadowSoft,
              cursor: "pointer",
              transition: "all 130ms ease",
              fontFamily: T.font,
            }}
            onMouseEnter={(e) => {
              if (!isSel) e.currentTarget.style.borderColor = T.primaryRing;
            }}
            onMouseLeave={(e) => {
              if (!isSel) e.currentTarget.style.borderColor = T.line;
            }}
          >
            {Icon && (
              <span
                style={{
                  flexShrink: 0,
                  width: 44,
                  height: 44,
                  borderRadius: 999,
                  background: chip.bg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icon size={21} strokeWidth={2} color={chip.fg} />
              </span>
            )}
            <span style={{ minWidth: 0 }}>
              <span
                style={{
                  display: "block",
                  fontSize: 15.5,
                  fontWeight: 700,
                  color: T.ink,
                  lineHeight: 1.3,
                }}
              >
                {opt.label}
              </span>
              {opt.sub && (
                <span style={{ display: "block", fontSize: 14.5, color: T.muted, marginTop: 2 }}>
                  {opt.sub}
                </span>
              )}
            </span>
          </button>
        );
      })}
    </div>
  );
}

/* ---------- Footer nav (Back / Next) ---------- */

export function NavRow({
  onBack,
  onNext,
  nextLabel = "Next",
  nextDisabled,
  showBack = true,
}: {
  onBack?: () => void;
  onNext?: () => void;
  nextLabel?: string;
  nextDisabled?: boolean;
  showBack?: boolean;
}) {
  return (
    <>
      <hr style={{ border: "none", borderTop: `1px solid ${T.lineSoft}`, margin: "30px 0 22px" }} />
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
        {showBack ? (
          <button onClick={onBack} style={btnGhost}>
            Back
          </button>
        ) : (
          <span />
        )}
        <button
          onClick={onNext}
          disabled={nextDisabled}
          style={{
            ...btnPrimary,
            opacity: nextDisabled ? 0.45 : 1,
            cursor: nextDisabled ? "not-allowed" : "pointer",
          }}
        >
          {nextLabel} <span style={{ marginLeft: 6 }}>→</span>
        </button>
      </div>
    </>
  );
}

export const btnPrimary: CSSProperties = {
  background: T.primary,
  color: T.yellow,
  border: "none",
  borderRadius: T.radiusBtn,
  padding: "13px 30px",
  fontSize: 15,
  fontWeight: 700,
  cursor: "pointer",
  fontFamily: T.font,
  boxShadow: "0 8px 20px -8px rgba(58, 31, 176, 0.45)",
};

export const btnGhost: CSSProperties = {
  background: T.surface,
  color: T.primary,
  border: `1.5px solid ${T.primaryRing}`,
  borderRadius: T.radiusBtn,
  padding: "12px 30px",
  fontSize: 15,
  fontWeight: 600,
  cursor: "pointer",
  fontFamily: T.font,
};

export const inputStyle: CSSProperties = {
  padding: "13px 15px",
  borderRadius: T.radiusBtn,
  border: `1.5px solid ${T.line}`,
  background: T.surface,
  fontSize: 15,
  fontFamily: T.font,
  color: T.ink,
  outline: "none",
  width: "100%",
  boxSizing: "border-box",
};

/* ---------- Pills ---------- */

export function Pill({
  label,
  fg,
  bg,
}: {
  label: string;
  fg: string;
  bg: string;
}) {
  return (
    <span
      style={{
        whiteSpace: "nowrap",
        fontSize: 12,
        fontWeight: 700,
        color: fg,
        background: bg,
        borderRadius: 999,
        padding: "5px 12px",
        height: "fit-content",
      }}
    >
      {label}
    </span>
  );
}
