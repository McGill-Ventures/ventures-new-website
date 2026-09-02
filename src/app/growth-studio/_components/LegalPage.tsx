import Nav from "./Nav";
import Footer from "./Footer";
import Interactions from "./Interactions";

/**
 * Shared shell for the long-form legal pages (Privacy Policy, Terms & Conditions).
 * Single reading column so the same markup works at every viewport width.
 */

const SPACE = "var(--font-space-grotesk),sans-serif";

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section style={{ margin: "0 0 44px" }}>
      <h2
        style={{
          fontFamily: SPACE,
          fontWeight: 700,
          fontSize: "clamp(20px,2.2vw,26px)",
          lineHeight: 1.2,
          letterSpacing: "-.015em",
          margin: "0 0 14px",
          color: "#241454",
        }}
      >
        {title}
      </h2>
      {children}
    </section>
  );
}

export function LegalP({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontSize: "17px",
        lineHeight: 1.65,
        color: "rgba(36,20,84,.8)",
        margin: "0 0 16px",
      }}
    >
      {children}
    </p>
  );
}

export function LegalList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul
      style={{
        listStyle: "none",
        margin: "0 0 16px",
        padding: 0,
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      {items.map((item, i) => (
        <li
          key={i}
          style={{
            fontSize: "17px",
            lineHeight: 1.6,
            color: "rgba(36,20,84,.8)",
            display: "flex",
            gap: "14px",
          }}
        >
          <span
            aria-hidden="true"
            style={{
              flex: "none",
              width: "7px",
              height: "7px",
              marginTop: "10px",
              background: "var(--purple,#3a1fb0)",
            }}
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export const LEGAL_EMAIL = "hello.growthstudio@gmail.com";

export function LegalEmail() {
  return (
    <a
      href={`mailto:${LEGAL_EMAIL}`}
      style={{ color: "var(--purple,#3a1fb0)", fontWeight: 700 }}
    >
      {LEGAL_EMAIL}
    </a>
  );
}

export default function LegalPage({
  eyebrow,
  title,
  updated,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  /** Human-readable "Last updated" date. */
  updated: string;
  intro: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <>
      <Nav active={null} ctaHref={`mailto:${LEGAL_EMAIL}`} />
      <main>
        <header
          style={{
            position: "relative",
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "72px 32px 40px",
          }}
        >
          <div data-reveal="" style={{ maxWidth: "760px" }}>
            <p
              style={{
                fontFamily: SPACE,
                letterSpacing: ".16em",
                fontSize: "13px",
                fontWeight: 700,
                color: "var(--purple,#3a1fb0)",
                margin: "0 0 16px",
              }}
            >
              {eyebrow}
            </p>
            <h1
              style={{
                fontFamily: SPACE,
                fontWeight: 700,
                fontSize: "clamp(36px,5vw,60px)",
                lineHeight: 1.02,
                letterSpacing: "-.02em",
                margin: "0 0 14px",
              }}
            >
              {title}
            </h1>
            <p
              style={{
                fontFamily: SPACE,
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: ".06em",
                color: "rgba(36,20,84,.55)",
                margin: "0 0 22px",
              }}
            >
              LAST UPDATED: {updated.toUpperCase()}
            </p>
            <p
              style={{
                fontSize: "18px",
                lineHeight: 1.6,
                color: "rgba(36,20,84,.75)",
                margin: 0,
              }}
            >
              {intro}
            </p>
          </div>
        </header>

        <div style={{ borderTop: "1px solid rgba(36,20,84,.12)" }}>
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              padding: "48px 32px 96px",
            }}
          >
            <div style={{ maxWidth: "760px" }}>{children}</div>
          </div>
        </div>
      </main>
      <Footer />
      <Interactions />
    </>
  );
}
