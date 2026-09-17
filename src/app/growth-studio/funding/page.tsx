import type { Metadata } from "next";
import Link from "next/link";
import { Search, Target, Share2, Lock, Landmark, FlaskConical, Building2, Users } from "lucide-react";

const SPACE = "var(--font-space-grotesk),sans-serif";
const MATCH = "/growth-studio/funding/match";
const PARTNERS = "/growth-studio/funding/partners";

export const metadata: Metadata = {
  title: "Startup Funding Matcher — Grants, Tax Credits & Capital for Canadian Founders | Growth Studio",
  description:
    "Free funding matcher for early-stage founders. Answer six questions and get matched to Canadian government grants, tax credits like SR&ED, programs like IRAP and Mitacs Accelerate, and Quebec funding that fits your stage and sector. Built by Growth Studio at McGill Ventures.",
  alternates: { canonical: "https://www.mcgillvc.ca/growth-studio/funding" },
  openGraph: {
    title: "Startup Funding Matcher — Growth Studio by McGill Ventures",
    description:
      "Answer six questions. Get matched to 500+ Canadian grants, tax credits, and capital programs that fit your startup.",
    type: "website",
    url: "https://www.mcgillvc.ca/growth-studio/funding",
    images: "/growth-studio/hero-founders.webp",
  },
};

const EYEBROW: React.CSSProperties = {
  fontFamily: SPACE,
  letterSpacing: ".16em",
  fontSize: "13px",
  fontWeight: 700,
  color: "var(--purple,#3a1fb0)",
  margin: "0 0 16px",
};

const H2: React.CSSProperties = {
  fontFamily: SPACE,
  fontWeight: 700,
  fontSize: "clamp(30px,3.6vw,46px)",
  lineHeight: 1.05,
  letterSpacing: "-.02em",
  margin: "0 0 18px",
};

const BODY: React.CSSProperties = {
  fontSize: "17px",
  lineHeight: 1.6,
  color: "rgba(36,20,84,.75)",
  margin: 0,
};

const PRIMARY_BTN: React.CSSProperties = {
  textDecoration: "none",
  background: "var(--purple,#3a1fb0)",
  color: "#f3f13a",
  fontWeight: 700,
  fontSize: "16px",
  padding: "15px 28px",
  borderRadius: "2px",
  display: "inline-flex",
  alignItems: "center",
  gap: "10px",
  transition: "transform .18s ease,box-shadow .18s ease",
};

const GHOST_BTN: React.CSSProperties = {
  textDecoration: "none",
  color: "#241454",
  fontWeight: 600,
  fontSize: "16px",
  padding: "15px 24px",
  borderRadius: "2px",
  border: "1px solid rgba(36,20,84,.25)",
  transition: "background .18s ease,border-color .18s ease",
};

function Feature({
  Icon,
  title,
  body,
}: {
  Icon: React.ElementType;
  title: string;
  body: string;
}) {
  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid rgba(36,20,84,.14)",
        borderRadius: "3px",
        padding: "28px 24px",
      }}
    >
      <span
        style={{
          display: "inline-flex",
          width: "48px",
          height: "48px",
          borderRadius: "999px",
          background: "#ece9f9",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon size={22} strokeWidth={2} color="#3a1fb0" />
      </span>
      <h3 style={{ fontFamily: SPACE, fontWeight: 600, fontSize: "18px", margin: "16px 0 8px" }}>{title}</h3>
      <p style={{ fontSize: "14.5px", lineHeight: 1.55, color: "rgba(36,20,84,.68)", margin: 0 }}>{body}</p>
    </div>
  );
}

function Step({ n, title, body }: { n: string; title: string; body: string }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "56px 1fr", gap: "24px", padding: "26px 0", borderBottom: "1px solid rgba(36,20,84,.16)" }}>
      <div style={{ fontFamily: SPACE, fontWeight: 700, fontSize: "15px", color: "var(--purple,#3a1fb0)", paddingTop: "4px" }}>{n}</div>
      <div>
        <h3 style={{ fontFamily: SPACE, fontWeight: 600, fontSize: "21px", letterSpacing: "-.01em", margin: "0 0 8px" }}>{title}</h3>
        <p style={{ fontSize: "16px", lineHeight: 1.55, color: "rgba(36,20,84,.68)", margin: 0 }}>{body}</p>
      </div>
    </div>
  );
}

export default function FundingLandingPage() {
  return (
    <main>
      {/* ===== HERO ===== */}
      <header
        id="funding-top"
        style={{ position: "relative", maxWidth: "1200px", margin: "0 auto", padding: "88px 32px 80px", overflow: "hidden" }}
      >
        <div style={{ position: "relative", maxWidth: "780px" }}>
          <p data-reveal="" style={EYEBROW}>FUNDING TOOL · FREE FOR FOUNDERS</p>
          <h1
            data-reveal=""
            data-delay="80"
            style={{ fontFamily: SPACE, fontWeight: 700, fontSize: "clamp(42px,5.6vw,74px)", lineHeight: ".98", letterSpacing: "-.025em", margin: "0 0 24px" }}
          >
            Find the funding your startup <span style={{ color: "var(--purple,#3a1fb0)" }}>actually qualifies for.</span>
          </h1>
          <p data-reveal="" data-delay="160" style={{ fontSize: "19px", lineHeight: 1.55, maxWidth: "640px", color: "rgba(36,20,84,.78)", margin: "0 0 34px" }}>
            Answer six quick questions and get matched to Canadian government grants, tax credits, and capital programs
            that fit your stage, sector, and province. No account, no fees, and a Growth Studio team ready to help you apply.
          </p>
          <div data-reveal="" data-delay="240" style={{ display: "flex", gap: "14px", flexWrap: "wrap", alignItems: "center" }}>
            <Link href={MATCH} data-hover={`{"transform":"translateY(-2px)","boxShadow":"0 12px 28px rgba(58,31,176,.32)"}`} style={PRIMARY_BTN}>
              Start the funding match <span style={{ fontSize: "18px", lineHeight: 1 }}>→</span>
            </Link>
            <a href="#how-it-works" data-hover={`{"background":"rgba(36,20,84,.05)"}`} style={GHOST_BTN}>
              How it works
            </a>
          </div>
          <p style={{ marginTop: "22px", display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "rgba(36,20,84,.55)" }}>
            <Lock size={15} strokeWidth={2.2} color="#3a1fb0" /> Confidential. Nothing is shared without your consent.
          </p>
        </div>
      </header>

      {/* ===== WHAT IT COVERS ===== */}
      <section id="coverage" style={{ background: "var(--purple,#3a1fb0)", color: "#fff", position: "relative", overflow: "hidden" }}>
        <div data-float="" style={{ position: "absolute", right: "-90px", top: "-90px", width: "300px", height: "300px", borderRadius: "50%", border: "1.5px solid rgba(255,255,255,.14)", animation: "gs-spin 60s linear infinite" }} />
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "96px 32px", position: "relative", display: "grid", gridTemplateColumns: ".85fr 1.15fr", gap: "56px", alignItems: "start" }}>
          <div data-reveal="">
            <p style={{ ...EYEBROW, color: "var(--yellow,#f3f13a)" }}>WHAT IT COVERS</p>
            <h2 style={{ ...H2, margin: 0 }}>500+ programs, one search.</h2>
          </div>
          <div data-reveal="" data-delay="120">
            <p style={{ fontSize: "19px", lineHeight: 1.6, color: "rgba(255,255,255,.88)", margin: "0 0 26px" }}>
              The matcher covers federal, provincial, and McGill-connected funding for pre-seed and seed-stage companies: tax credits such as{" "}
              <strong>SR&amp;ED</strong>, research and innovation support like <strong>NRC IRAP</strong> and <strong>Mitacs Accelerate</strong>, Quebec programs from{" "}
              <strong>Investissement Québec</strong>, plus grants, loans, and equity programs across Canada.
            </p>
            <div style={{ borderLeft: "3px solid var(--yellow,#f3f13a)", paddingLeft: "20px" }}>
              <p style={{ fontSize: "16px", lineHeight: 1.6, color: "rgba(255,255,255,.75)", margin: 0 }}>
                Every program is tagged by stage, sector, funding type, and eligibility. Hard rules remove what you cannot apply for; the rest is scored so your
                best fits come first, with caveats shown instead of hidden.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <div style={{ background: "#f6f5fb" }}>
        <section id="how-it-works" style={{ maxWidth: "1200px", margin: "0 auto", padding: "96px 32px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1.1fr)", gap: "80px", alignItems: "start" }}>
            <div data-reveal="">
              <p style={EYEBROW}>HOW IT WORKS</p>
              <h2 style={H2}>From six answers to a shortlist.</h2>
              <p style={BODY}>
                The match is deterministic: a filter and a score, not a guess. It cannot invent a deadline or an eligibility rule. Where a program&apos;s
                status or link has not been verified recently, the result says so.
              </p>
            </div>
            <div data-reveal="" data-delay="120">
              <Step n="01" title="Tell us about your venture" body="Stage, sector, province, incorporation status, Canadian R&D, and how you feel about dilution. Two minutes, multi-select where it makes sense." />
              <Step n="02" title="Get scored matches" body="Programs are filtered by hard eligibility rules, then ranked by stage and sector fit, with a bonus for McGill-connected founders." />
              <Step n="03" title="Take the next step with Growth Studio" body="Applying to SR&ED, IRAP, or Programme innovation is real work. Our consultants help founders prepare strong applications, free of charge." />
            </div>
          </div>
        </section>
      </div>

      {/* ===== FEATURES ===== */}
      <section id="why" style={{ maxWidth: "1200px", margin: "0 auto", padding: "96px 32px 80px" }}>
        <div data-reveal="" style={{ maxWidth: "720px", marginBottom: "40px" }}>
          <p style={EYEBROW}>WHY FOUNDERS USE IT</p>
          <h2 style={{ ...H2, margin: 0 }}>Built for early-stage realities.</h2>
        </div>
        <div data-reveal="" data-delay="80" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "20px" }}>
          <Feature Icon={Search} title="Smart matching" body="Grants, tax credits, loans, and equity that fit your stage and sector, not a generic list." />
          <Feature Icon={Target} title="Save weeks of research" body="Hundreds of programs, scanned in seconds, with verified links where we have them." />
          <Feature Icon={Share2} title="Clear next steps" body="Each result explains why it fits, what to watch for, and how to apply." />
          <Feature Icon={Users} title="A team behind it" body="Growth Studio consultants can help you prepare the application and the pitch." />
        </div>
      </section>

      {/* ===== PROGRAM TYPES (SEO copy) ===== */}
      <div style={{ background: "#f6f5fb" }}>
        <section id="program-types" style={{ maxWidth: "1200px", margin: "0 auto", padding: "80px 32px 96px" }}>
          <div data-reveal="" style={{ maxWidth: "720px", marginBottom: "40px" }}>
            <p style={EYEBROW}>TYPES OF FUNDING</p>
            <h2 style={{ ...H2, margin: "0 0 18px" }}>What Canadian founders can tap into.</h2>
            <p style={BODY}>A quick primer on the main categories in the matcher. The tool tells you which ones apply to you.</p>
          </div>
          <div data-reveal="" data-delay="80" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "36px" }}>
            <div style={{ borderTop: "2px solid var(--purple,#3a1fb0)", paddingTop: "22px" }}>
              <Landmark size={22} color="#3a1fb0" />
              <h3 style={{ fontFamily: SPACE, fontWeight: 600, fontSize: "21px", margin: "14px 0 12px" }}>Tax credits</h3>
              <p style={{ fontSize: "16px", lineHeight: 1.55, color: "rgba(36,20,84,.7)", margin: 0 }}>
                Refundable credits on eligible research and development spending, led by the federal SR&amp;ED program and its Quebec counterpart. Best for
                companies already spending on Canadian R&amp;D.
              </p>
            </div>
            <div style={{ borderTop: "2px solid var(--purple,#3a1fb0)", paddingTop: "22px" }}>
              <FlaskConical size={22} color="#3a1fb0" />
              <h3 style={{ fontFamily: SPACE, fontWeight: 600, fontSize: "21px", margin: "14px 0 12px" }}>Grants and contributions</h3>
              <p style={{ fontSize: "16px", lineHeight: 1.55, color: "rgba(36,20,84,.7)", margin: 0 }}>
                Non-dilutive money for innovation, hiring, and research partnerships: NRC IRAP, Mitacs Accelerate, regional development agencies, and
                sector-specific calls.
              </p>
            </div>
            <div style={{ borderTop: "2px solid var(--purple,#3a1fb0)", paddingTop: "22px" }}>
              <Building2 size={22} color="#3a1fb0" />
              <h3 style={{ fontFamily: SPACE, fontWeight: 600, fontSize: "21px", margin: "14px 0 12px" }}>Loans, equity, and McGill programs</h3>
              <p style={{ fontSize: "16px", lineHeight: 1.55, color: "rgba(36,20,84,.7)", margin: 0 }}>
                Investissement Québec, BDC, student and alumni funds in the McGill Ventures network, and accelerator programs that come with capital.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* ===== CTA ===== */}
      <section id="funding-cta" data-signup="" style={{ maxWidth: "1200px", margin: "0 auto 120px", padding: "72px 32px 0" }}>
        <div data-reveal="" style={{ position: "relative", overflow: "hidden", background: "var(--yellow,#f3f13a)", color: "var(--purple,#3a1fb0)", borderRadius: "4px", padding: "84px 64px" }}>
          <div data-float="" style={{ position: "absolute", right: "-70px", top: "-70px", width: "260px", height: "260px", borderRadius: "50%", border: "1.5px solid rgba(36,20,84,.18)", animation: "gs-spinR 50s linear infinite" }} />
          <div style={{ position: "relative", maxWidth: "600px" }}>
            <p style={{ ...EYEBROW, color: "rgba(36,20,84,.7)" }}>READY WHEN YOU ARE</p>
            <h2 style={{ fontFamily: SPACE, fontWeight: 700, fontSize: "clamp(32px,4.4vw,54px)", lineHeight: 1.0, letterSpacing: "-.02em", margin: "0 0 18px" }}>
              Run your funding match.
            </h2>
            <p style={{ fontSize: "18px", lineHeight: 1.55, color: "rgba(36,20,84,.82)", margin: "0 0 30px" }}>
              Six questions, instant results, and an option to have Growth Studio follow up. Validating an idea instead? Our partner matcher connects you
              with people who can test it with real customers.
            </p>
            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", alignItems: "center" }}>
              <Link href={MATCH} data-hover={`{"transform":"translateY(-2px)"}`} style={{ ...PRIMARY_BTN, fontFamily: SPACE }}>
                Start the funding match <span style={{ fontSize: "18px", lineHeight: 1 }}>→</span>
              </Link>
              <Link href={PARTNERS} data-hover={`{"background":"rgba(36,20,84,.08)"}`} style={{ ...GHOST_BTN, color: "var(--purple,#3a1fb0)", borderColor: "rgba(36,20,84,.35)" }}>
                Find validation partners
              </Link>
            </div>
            <p style={{ fontSize: "15.5px", lineHeight: 1.5, color: "rgba(36,20,84,.68)", margin: "22px 0 0" }}>
              Questions? Contact us at{" "}
              <a href="mailto:hello.growthstudio@gmail.com" style={{ color: "var(--purple,#3a1fb0)", fontWeight: 700 }}>hello.growthstudio@gmail.com</a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
