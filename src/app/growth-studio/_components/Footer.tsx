import Image from "next/image";
import Link from "next/link";

const LINK: React.CSSProperties = {
  textDecoration: "none",
  color: "rgba(255,255,255,.82)",
  fontSize: "15px",
};

const H4: React.CSSProperties = {
  fontFamily: "var(--font-space-grotesk), sans-serif",
  fontSize: "13px",
  letterSpacing: ".1em",
  color: "var(--yellow,#f3f13a)",
  margin: "0 0 16px",
};

export default function Footer({
  raised = false,
}: {
  /** The team page lifts the footer above the cursor-wash layer. */
  raised?: boolean;
}) {
  return (
    <footer
      style={{
        ...(raised ? { position: "relative", zIndex: 1 } : null),
        background: "var(--purple,#3a1fb0)",
        color: "#fff",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "72px 32px 40px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
            gap: "40px",
            paddingBottom: "48px",
            borderBottom: "1px solid rgba(255,255,255,.16)",
          }}
        >
          <div>
            <Link
              href="/growth-studio"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
                textDecoration: "none",
                marginBottom: "18px",
              }}
            >
              <Image
                src="/growth-studio/logo-wordmark.webp"
                alt="Growth Studio — powered by McGill Ventures"
                width={360}
                height={113}
                style={{ height: "56px", width: "auto", display: "block" }}
              />
            </Link>
            <p
              style={{
                fontSize: "15px",
                lineHeight: "1.6",
                color: "rgba(255,255,255,.7)",
                maxWidth: "300px",
                margin: 0,
              }}
            >
              The premier start-up consulting organization at McGill. Powered by McGill Ventures.
            </p>
          </div>

          <div>
            <h4 style={H4}>PROGRAM</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "11px" }}>
              <Link href="/growth-studio/startups" style={LINK}>
                How we help founders
              </Link>
              <Link href="/growth-studio/partners" style={LINK}>
                Partner with us
              </Link>
            </div>
          </div>

          <div>
            <h4 style={H4}>TEAM</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "11px" }}>
              <Link href="/growth-studio/team" style={LINK}>
                About us
              </Link>
              <Link href="/growth-studio/careers" style={LINK}>
                Careers
              </Link>
            </div>
          </div>

          <div>
            <h4 style={H4}>CONNECT</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "11px" }}>
              <a href="https://www.mcgillvc.ca" style={LINK}>
                www.mcgillvc.ca
              </a>
              <a
                href="https://www.instagram.com/mcgillvc/?hl=en"
                target="_blank"
                rel="noopener"
                style={LINK}
              >
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/company/mcgillvc/"
                target="_blank"
                rel="noopener"
                style={LINK}
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
            paddingTop: "28px",
            fontSize: "14px",
            color: "rgba(255,255,255,.55)",
          }}
        >
          <span>© 2026 Growth Studio · McGill Ventures. All rights reserved.</span>
          <div style={{ display: "flex", gap: "24px" }}>
            <span style={{ color: "rgba(255,255,255,.55)" }}>Privacy (in progress)</span>
            <span style={{ color: "rgba(255,255,255,.55)" }}>Terms (in progress)</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
