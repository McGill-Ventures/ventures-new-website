"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { T } from "@/lib/funding/theme";
import { btnPrimary } from "./ui";

// Bump the version if the wording changes materially, so everyone sees it again.
const STORAGE_KEY = "gs-funding-disclaimer-v1";

// Only the interactive tools get the pop-up; the landing page stays readable
// for search engines, and the admin console is for the team.
const GATED = ["/growth-studio/funding/match", "/growth-studio/funding/partners"];

function acknowledged(): boolean {
  try {
    return window.localStorage.getItem(STORAGE_KEY) === "yes";
  } catch {
    return false;
  }
}

/**
 * One-time, friendly heads-up shown before a founder uses the matcher: the
 * tool is a starting point and program details should be checked at the
 * source. One click to dismiss; deliberately short and non-legal in tone. Rendered only after mount (localStorage is
 * browser-only), so server and client HTML match.
 */
export default function FundingDisclaimer() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const gated = GATED.some((p) => pathname === p || pathname.startsWith(p + "/"));
    setOpen(gated && !acknowledged());
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    btnRef.current?.focus();
    return () => { document.body.style.overflow = prev; };
  }, [open]);

  if (!open) return null;

  function accept() {
    try {
      window.localStorage.setItem(STORAGE_KEY, "yes");
    } catch {
      // Private browsing etc.: still let them in; they'll see it next visit.
    }
    setOpen(false);
  }

  return (
    <div
      style={{
        position: "fixed", inset: 0, zIndex: 100,
        background: "rgba(20,12,50,.55)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: 16, overflowY: "auto",
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="gs-disclaimer-title"
        aria-describedby="gs-disclaimer-body"
        style={{
          background: "#fff", color: T.ink, borderRadius: 8,
          maxWidth: 480, width: "100%", padding: "32px 28px",
          boxShadow: "0 24px 60px rgba(20,12,50,.35)", fontFamily: T.font,
        }}
      >
        <p style={{ margin: 0, fontFamily: T.headingFont, fontSize: 12, fontWeight: 700, letterSpacing: "0.14em", color: T.primary }}>
          QUICK HEADS-UP
        </p>
        <h2 id="gs-disclaimer-title" style={{ margin: "10px 0 12px", fontFamily: T.headingFont, fontSize: 24, lineHeight: 1.2 }}>
          Use this as a starting point
        </h2>
        <p id="gs-disclaimer-body" style={{ margin: 0, fontSize: 15.5, lineHeight: 1.6, color: T.inkSoft }}>
          We match you against 500+ public programs, but details like eligibility, amounts, and deadlines change
          often, so our info may not always be up to date. Double-check each program on its official site before
          applying, and treat this as one of several places you look for funding.
        </p>
        <button
          ref={btnRef}
          type="button"
          onClick={accept}
          style={{ ...btnPrimary, width: "100%", marginTop: 24 }}
        >
          Got it!
        </button>
      </div>
    </div>
  );
}
