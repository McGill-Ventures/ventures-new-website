"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const LINK_BASE: React.CSSProperties = {
  textDecoration: "none",
  color: "#241454",
  fontWeight: 600,
  fontSize: "15px",
};

const LINK_ACTIVE: React.CSSProperties = {
  textDecoration: "none",
  color: "var(--purple,#3a1fb0)",
  fontWeight: 700,
  fontSize: "15px",
};

const NAV_LINKS = [
  { href: "/growth-studio/startups", label: "How we help founders", key: "startups" },
  { href: "/growth-studio/team", label: "Our team", key: "team" },
  { href: "/growth-studio/partners", label: "Partner with us", key: "partners" },
  { href: "/growth-studio/careers", label: "Careers", key: "careers" },
] as const;

export default function Nav({
  active = null,
  ctaHref,
}: {
  /** Which nav item renders in the active (purple) style. */
  active?: "startups" | "team" | "partners" | "careers" | null;
  /** Target of the "Contact" CTA — varies per page in the source design. */
  ctaHref: string;
}) {
  // Phone menu state. On wide screens the links are always visible (see
  // growth-studio.css: .gs-nav-*), so this only matters below 900px.
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close the phone menu when the route changes (the funding pages share one
  // Nav via their layout, so it is not remounted) and on Escape.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backdropFilter: "saturate(180%) blur(14px)",
        WebkitBackdropFilter: "saturate(180%) blur(14px)",
        background: "rgba(255,255,255,.86)",
        borderBottom: "1px solid rgba(36,20,84,.12)",
      }}
    >
      <div
        className="gs-wrap"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 32px",
          height: "78px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link
          href="/growth-studio"
          onClick={() => setOpen(false)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            textDecoration: "none",
            color: "#241454",
          }}
        >
          <Image
            src="/growth-studio/logo-mark.webp"
            alt="Growth Studio"
            width={88}
            height={85}
            style={{ width: "44px", height: "44px", objectFit: "contain", flex: "none" }}
            data-float=""
            priority
          />
          <span
            style={{
              fontFamily: "var(--font-space-grotesk), sans-serif",
              fontWeight: 700,
              fontSize: "19px",
              letterSpacing: "-.01em",
              lineHeight: "1.05",
            }}
          >
            GROWTH STUDIO
            <span
              style={{
                display: "block",
                fontSize: "10px",
                fontWeight: 600,
                letterSpacing: ".14em",
                color: "rgba(36,20,84,.55)",
              }}
            >
              POWERED BY McGILL VENTURES
            </span>
          </span>
        </Link>

        <div style={{ display: "flex", alignItems: "center", gap: "34px" }}>
          <div className="gs-nav-links" style={{ display: "flex", gap: "26px", whiteSpace: "nowrap" }} data-navlinks="">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.key}
                href={l.href}
                style={active === l.key ? LINK_ACTIVE : LINK_BASE}
              >
                {l.label}
              </Link>
            ))}
          </div>
          <a
            className="gs-nav-cta"
            href={ctaHref}
            data-hover={`{"transform":"translateY(-2px)","boxShadow":"0 8px 22px rgba(58,31,176,.32)"}`}
            style={{
              textDecoration: "none",
              background: "var(--purple,#3a1fb0)",
              color: "#f3f13a",
              fontWeight: 700,
              fontSize: "15px",
              padding: "11px 22px",
              borderRadius: "2px",
              transition: "transform .18s ease,box-shadow .18s ease",
              display: "inline-block",
            }}
          >
            Contact
          </a>
          <button
            type="button"
            className="gs-nav-burger"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="gs-nav-panel"
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {open ? (
                <>
                  <line x1="4" y1="4" x2="18" y2="18" />
                  <line x1="18" y1="4" x2="4" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="19" y2="6" />
                  <line x1="3" y1="11" x2="19" y2="11" />
                  <line x1="3" y1="16" x2="19" y2="16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      <div id="gs-nav-panel" className="gs-nav-panel" data-open={open ? "true" : "false"}>
        {NAV_LINKS.map((l) => (
          <Link
            key={l.key}
            href={l.href}
            onClick={() => setOpen(false)}
            style={active === l.key ? { color: "var(--purple,#3a1fb0)", fontWeight: 700 } : undefined}
          >
            {l.label}
          </Link>
        ))}
        <a className="gs-nav-panel-cta" href={ctaHref} onClick={() => setOpen(false)}>
          Contact
        </a>
      </div>
    </nav>
  );
}
