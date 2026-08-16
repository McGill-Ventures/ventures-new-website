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
          <div style={{ display: "flex", gap: "26px", whiteSpace: "nowrap" }} data-navlinks="">
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
        </div>
      </div>
    </nav>
  );
}
