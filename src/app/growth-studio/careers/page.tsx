import type { Metadata } from "next";
import Nav from "../_components/Nav";
import Footer from "../_components/Footer";
import Interactions from "../_components/Interactions";

export const metadata: Metadata = {
  title: "Careers — Growth Studio",
  description: "Do real venture work as a student. Join Growth Studio as a consultant and ship strategy, fundraising, and go-to-market work for real early-stage startups.",
  openGraph: {
    title: "Careers — Growth Studio",
    description: "Do real venture work as a student. Join Growth Studio as a consultant and ship strategy, fundraising, and go-to-market work for real early-stage startups.",
    type: "website",
    url: "https://www.mcgillvc.ca/growth-studio/careers",
    images: "/growth-studio/logo-wordmark.webp",
  },
};

export default function CareersPage() {
  return (
    <>
      <Nav active={"careers"} ctaHref={"mailto:hello.growthstudio@gmail.com"} />
      <main>
        <div style={{ background: 'var(--yellow,#f3f13a)', padding: '12px 32px', textAlign: 'center' }}>
          <a href="mailto:hello.growthstudio@gmail.com" style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '700', fontSize: '14px', letterSpacing: '.08em', color: 'var(--purple,#3a1fb0)', textDecoration: 'underline' }}>CONSULTANT RECRUITMENT FOR FALL 2026 IS OPEN</a>
        </div>
        <header id="c-top" style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto', padding: '88px 32px 96px' }}>
          <div style={{ maxWidth: '820px' }}>
            <p data-reveal="" style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', letterSpacing: '.16em', fontSize: '13px', fontWeight: '700', color: 'var(--purple,#3a1fb0)', margin: '0 0 16px' }}>JOIN THE STUDIO</p>
            <h1 data-reveal="" data-delay="80" style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '700', fontSize: 'clamp(42px,5.6vw,74px)', lineHeight: '.98', letterSpacing: '-.025em', margin: '0 0 24px' }}>Do real venture work <span style={{ color: 'var(--purple,#3a1fb0)' }}>as a student.</span>
          </h1>
          <p data-reveal="" data-delay="160" style={{ fontSize: '19px', lineHeight: '1.55', maxWidth: '640px', color: 'rgba(36,20,84,.78)', margin: '0 0 34px' }}>Growth Studio consultants don&apos;t write case comps for a grade — they ship fundraising, GTM, and market work for real founders, backed by the McGill Ventures network. If you want hands-on startup experience before you graduate, this is where you get it.</p>
          <div data-reveal="" data-delay="240" style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center' }}>
            <a href="mailto:hello.growthstudio@gmail.com" data-hover={`{"transform":"translateY(-2px)","boxShadow":"0 12px 28px rgba(58,31,176,.32)"}`} style={{ textDecoration: 'none', background: 'var(--purple,#3a1fb0)', color: '#f3f13a', fontWeight: '700', fontSize: '16px', padding: '15px 28px', borderRadius: '2px', display: 'inline-flex', alignItems: 'center', gap: '10px', transition: 'transform .18s ease,box-shadow .18s ease' }}>
              <div>Apply to join</div>
              <span style={{ fontSize: '18px', lineHeight: '1' }}>→</span>
            </a>
            <a href="#c-what" data-hover={`{"background":"rgba(36,20,84,.05)"}`} style={{ textDecoration: 'none', color: '#241454', fontWeight: '600', fontSize: '16px', padding: '15px 24px', borderRadius: '2px', border: '1px solid rgba(36,20,84,.25)', transition: 'background .18s ease,border-color .18s ease' }}>What you&apos;ll do</a>
          </div>
        </div>
        </header>
        <section id="c-why" style={{ background: 'var(--purple,#3a1fb0)', color: '#fff', position: 'relative', overflow: 'hidden' }}>
          <div data-float="" style={{ position: 'absolute', right: '-90px', top: '-90px', width: '300px', height: '300px', borderRadius: '50%', border: '1.5px solid rgba(255,255,255,.14)', animation: 'gs-spin 60s linear infinite' }}>
          </div>
          <div style={{ position: 'absolute', left: '-60px', bottom: '-60px', width: '180px', height: '180px', borderRadius: '50%', background: 'rgba(243,241,58,.14)' }}>
          </div>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '96px 32px', position: 'relative', display: 'grid', gridTemplateColumns: '.85fr 1.15fr', gap: '56px', alignItems: 'start' }}>
            <div data-reveal="">
              <p style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', letterSpacing: '.16em', fontSize: '13px', fontWeight: '700', color: 'var(--yellow,#f3f13a)', margin: '0 0 16px' }}>WHY JOIN</p>
              <h2 style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '700', fontSize: 'clamp(30px,3.6vw,44px)', lineHeight: '1.05', letterSpacing: '-.02em', margin: '0' }}>Consulting that actually ships.</h2>
            </div>
            <div data-reveal="" data-delay="120">
              <p style={{ fontSize: '19px', lineHeight: '1.6', color: 'rgba(255,255,255,.88)', margin: '0 0 26px' }}>Most student clubs stop at a slide deck. Our consultants build the CRM, run investor outreach, and refine the pitch alongside the founder — <strong>real deliverables, real stakes.</strong> You&apos;ll be trained, mentored, and thrown into meaningful work from week one.</p>
              <div style={{ borderLeft: '3px solid var(--yellow,#f3f13a)', paddingLeft: '20px' }}>
                <p style={{ fontSize: '16px', lineHeight: '1.6', color: 'rgba(255,255,255,.75)', margin: '0' }}>We recruit a small cohort each semester and pair every consultant with a director. <strong style={{ color: '#fff' }}>No prior startup experience required</strong> — just curiosity, drive, and a willingness to learn fast.</p>
              </div>
            </div>
          </div>
        </section>
        <div style={{ background: '#f6f5fb' }}>
          <section id="c-gain" style={{ maxWidth: '1200px', margin: '0 auto', padding: '120px 32px' }}>
            <div data-reveal="" style={{ maxWidth: '720px', marginBottom: '56px' }}>
              <p style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', letterSpacing: '.16em', fontSize: '13px', fontWeight: '700', color: 'var(--purple,#3a1fb0)', margin: '0 0 16px' }}>WHAT YOU&apos;LL GAIN</p>
              <h2 style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '700', fontSize: 'clamp(32px,4vw,52px)', lineHeight: '1.02', letterSpacing: '-.02em', margin: '0' }}>More than a line on your résumé.</h2>
            </div>
            <div data-reveal="" data-delay="80" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '20px' }}>
              <div style={{ background: '#fff', border: '1px solid rgba(36,20,84,.14)', borderRadius: '3px', padding: '28px 24px' }}>
                <h3 style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '600', fontSize: '18px', margin: '0 0 10px' }}>Real client work</h3>
                <p style={{ fontSize: '14.5px', lineHeight: '1.55', color: 'rgba(36,20,84,.68)', margin: '0' }}>Ship fundraising, GTM, and market deliverables for live startups — the kind of work most people only do after they graduate.</p>
              </div>
              <div style={{ background: '#fff', border: '1px solid rgba(36,20,84,.14)', borderRadius: '3px', padding: '28px 24px' }}>
                <h3 style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '600', fontSize: '18px', margin: '0 0 10px' }}>Investor network</h3>
                <p style={{ fontSize: '14.5px', lineHeight: '1.55', color: 'rgba(36,20,84,.68)', margin: '0' }}>Plug into the McGill Ventures ecosystem of funds, angels, and founders. Build the relationships that open doors.</p>
              </div>
              <div style={{ background: '#fff', border: '1px solid rgba(36,20,84,.14)', borderRadius: '3px', padding: '28px 24px' }}>
                <h3 style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '600', fontSize: '18px', margin: '0 0 10px' }}>Hands-on training</h3>
                <p style={{ fontSize: '14.5px', lineHeight: '1.55', color: 'rgba(36,20,84,.68)', margin: '0' }}>Structured onboarding in market research, capital strategy, and pitch development — then apply it immediately.</p>
              </div>
              <div style={{ background: '#fff', border: '1px solid rgba(36,20,84,.14)', borderRadius: '3px', padding: '28px 24px' }}>
                <h3 style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '600', fontSize: '18px', margin: '0 0 10px' }}>A tight team</h3>
                <p style={{ fontSize: '14.5px', lineHeight: '1.55', color: 'rgba(36,20,84,.68)', margin: '0' }}>Join a small, driven cohort paired with directors who mentor you through every engagement.</p>
              </div>
            </div>
          </section>
        </div>
        <section id="c-what" style={{ maxWidth: '1200px', margin: '0 auto', padding: '120px 32px' }}>
          <div data-reveal="" style={{ maxWidth: '720px', marginBottom: '56px' }}>
            <p style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', letterSpacing: '.16em', fontSize: '13px', fontWeight: '700', color: 'var(--purple,#3a1fb0)', margin: '0 0 16px' }}>HOW A SEMESTER WORKS</p>
            <h2 style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '700', fontSize: 'clamp(32px,4vw,52px)', lineHeight: '1.02', letterSpacing: '-.02em', margin: '0 0 20px' }}>From application to showcase.</h2>
            <p style={{ fontSize: '18px', lineHeight: '1.6', color: 'rgba(36,20,84,.75)', margin: '0' }}>Recruitment runs at the start of each term. Once you&apos;re in, you&apos;re paired to a startup and start delivering fast.</p>
          </div>
          <div data-reveal="" data-delay="80" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '20px' }}>
            <div style={{ background: '#fff', border: '1px solid rgba(36,20,84,.14)', borderRadius: '3px', padding: '30px 26px', position: 'relative' }}>
              <div style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '700', fontSize: '34px', color: 'rgba(58,31,176,.18)', lineHeight: '1', margin: '0 0 14px' }}>01</div>
              <h3 style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '600', fontSize: '18px', margin: '0 0 8px' }}>Apply</h3>
              <p style={{ fontSize: '14.5px', lineHeight: '1.55', color: 'rgba(36,20,84,.68)', margin: '0' }}>Submit an application and interview with our directors. We recruit for fit, curiosity, and drive — not a specific major.</p>
            </div>
            <div style={{ background: '#fff', border: '1px solid rgba(36,20,84,.14)', borderRadius: '3px', padding: '30px 26px', position: 'relative' }}>
              <div style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '700', fontSize: '34px', color: 'rgba(58,31,176,.18)', lineHeight: '1', margin: '0 0 14px' }}>02</div>
              <h3 style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '600', fontSize: '18px', margin: '0 0 8px' }}>Onboard & train</h3>
              <p style={{ fontSize: '14.5px', lineHeight: '1.55', color: 'rgba(36,20,84,.68)', margin: '0' }}>New consultants ramp on our frameworks for market research, capital strategy, CRM building, and pitch work.</p>
            </div>
            <div style={{ background: '#fff', border: '1px solid rgba(36,20,84,.14)', borderRadius: '3px', padding: '30px 26px', position: 'relative' }}>
              <div style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '700', fontSize: '34px', color: 'rgba(58,31,176,.18)', lineHeight: '1', margin: '0 0 14px' }}>03</div>
              <h3 style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '600', fontSize: '18px', margin: '0 0 8px' }}>Client engagement</h3>
              <p style={{ fontSize: '14.5px', lineHeight: '1.55', color: 'rgba(36,20,84,.68)', margin: '0' }}>Get paired to a founder for a focused four-week engagement, working directly on their fundraising and growth.</p>
            </div>
            <div style={{ background: '#fff', border: '1px solid rgba(36,20,84,.14)', borderRadius: '3px', padding: '30px 26px', position: 'relative' }}>
              <div style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '700', fontSize: '34px', color: 'rgba(58,31,176,.18)', lineHeight: '1', margin: '0 0 14px' }}>04</div>
              <h3 style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '600', fontSize: '18px', margin: '0 0 8px' }}>Showcase</h3>
              <p style={{ fontSize: '14.5px', lineHeight: '1.55', color: 'rgba(36,20,84,.68)', margin: '0' }}>Present deliverables to the founder and the team, and take real, shipped work into your next role.</p>
            </div>
          </div>
        </section>
        <section id="c-apply" style={{ maxWidth: '1200px', margin: '0 auto 120px', padding: '0 32px' }}>
          <div data-reveal="" style={{ position: 'relative', overflow: 'hidden', background: 'var(--yellow,#f3f13a)', color: 'var(--purple,#3a1fb0)', borderRadius: '4px', padding: '84px 64px' }}>
            <div data-float="" style={{ position: 'absolute', right: '-70px', top: '-70px', width: '260px', height: '260px', borderRadius: '50%', border: '1.5px solid rgba(36,20,84,.18)', animation: 'gs-spinR 50s linear infinite' }}>
            </div>
            <div data-float="" style={{ position: 'absolute', right: '120px', bottom: '-50px', width: '120px', height: '120px', background: 'rgba(36,20,84,.08)', transform: 'rotate(20deg)', animation: 'gs-floatY 8s ease-in-out infinite' }}>
            </div>
            <div style={{ position: 'relative', maxWidth: '560px' }}>
              <p style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', letterSpacing: '.16em', fontSize: '13px', fontWeight: '700', color: 'rgba(36,20,84,.7)', margin: '0 0 18px' }}>CONSULTANT RECRUITMENT FOR FALL 2026 IS OPEN</p>
              <h2 style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '700', fontSize: 'clamp(32px,4.4vw,54px)', lineHeight: '1.0', letterSpacing: '-.02em', margin: '0 0 18px' }}>Ready to build with us?</h2>
              <p style={{ fontSize: '18px', lineHeight: '1.55', color: 'rgba(36,20,84,.82)', margin: '0 0 30px' }}>We recruit a new cohort of consultants every semester. Tell us a bit about yourself and why you want to work with founders.</p>
              <a href="mailto:hello.growthstudio@gmail.com" data-hover={`{"transform":"translateY(-2px)"}`} style={{ textDecoration: 'none', background: 'var(--purple,#3a1fb0)', color: '#f3f13a', fontWeight: '700', fontSize: '16px', fontFamily: 'var(--font-space-grotesk),sans-serif', padding: '15px 28px', borderRadius: '2px', display: 'inline-flex', alignItems: 'center', gap: '10px', transition: 'transform .18s ease' }}>Apply to join <span style={{ fontSize: '18px', lineHeight: '1' }}>→</span>
            </a>
            <p style={{ fontSize: '15.5px', lineHeight: '1.5', color: 'rgba(36,20,84,.68)', margin: '22px 0 0' }}>Questions? Reach us directly at <a href="mailto:hello.growthstudio@gmail.com" style={{ color: 'var(--purple,#3a1fb0)', fontWeight: '700' }}>hello.growthstudio@gmail.com</a>
          </p>
        </div>
        </div>
        </section>
      </main>
      <Footer
        program={[{ href: "mailto:hello.growthstudio@gmail.com", label: "Contact" }, { href: "/growth-studio/startups", label: "How we help" }, { href: "/growth-studio/partners", label: "Partner with us" }]}
        team={[{ href: "/growth-studio/team", label: "Directors" }, { href: "/growth-studio#who", label: "Who we work with" }, { href: "#c-apply", label: "Careers" }]}
      />
      <Interactions />
    </>
  );
}
