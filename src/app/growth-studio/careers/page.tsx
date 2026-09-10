import type { Metadata } from "next";
import Image from "next/image";
import Nav from "../_components/Nav";
import Footer from "../_components/Footer";
import Interactions from "../_components/Interactions";

const INTEREST_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfbyiRB5Lo5Pb-s7c9OYx48h60NqwwZ1I9dlUJbMYjnJg5HbA/viewform?usp=publish-editor";

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

const BULLET_LIGHT: React.CSSProperties = { fontSize: '15px', lineHeight: '1.5', color: 'rgba(36,20,84,.78)', display: 'flex', gap: '12px' };
const DOT_PURPLE: React.CSSProperties = { flex: 'none', width: '7px', height: '7px', marginTop: '7px', background: 'var(--purple,#3a1fb0)' };
const BULLET_DARK: React.CSSProperties = { fontSize: '15px', lineHeight: '1.5', color: 'rgba(255,255,255,.85)', display: 'flex', gap: '12px' };
const DOT_YELLOW: React.CSSProperties = { flex: 'none', width: '7px', height: '7px', marginTop: '7px', background: 'var(--yellow,#f3f13a)' };

export default function CareersPage() {
  return (
    <>
      <Nav active={"careers"} ctaHref={"#c-apply"} />
      <main>
        <div style={{ background: 'var(--yellow,#f3f13a)', padding: '12px 32px', textAlign: 'center' }}>
          <a href={INTEREST_FORM_URL} target="_blank" rel="noopener" style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '700', fontSize: '14px', letterSpacing: '.08em', color: 'var(--purple,#3a1fb0)', textDecoration: 'underline' }}>FUTURE CONSULTANTS: INTEREST FORM IS NOW LIVE</a>
        </div>
        <header className="gs-wrap" id="c-top" style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto', padding: '88px 32px 96px', overflow: 'hidden' }}>
          <div aria-hidden="true" style={{ position: 'absolute', right: '0', top: 'calc(50% - 190px)', width: '380px', height: '380px', pointerEvents: 'none', opacity: '.2' }}>
            <Image src="/growth-studio/logo-mark-large.png" alt="" width={512} height={492} style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block', animation: 'gs-floatY 11s ease-in-out infinite' }} />
          </div>
          <div style={{ position: 'relative', maxWidth: '820px' }}>
            <p data-reveal="" style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', letterSpacing: '.16em', fontSize: '13px', fontWeight: '700', color: 'var(--purple,#3a1fb0)', margin: '0 0 16px' }}>JOIN THE GROWTH STUDIO</p>
            <h1 data-reveal="" data-delay="80" style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '700', fontSize: 'clamp(42px,5.6vw,74px)', lineHeight: '.98', letterSpacing: '-.025em', margin: '0 0 24px' }}>Do real venture work <span style={{ color: 'var(--purple,#3a1fb0)' }}>as a student.</span>
          </h1>
          <p data-reveal="" data-delay="160" style={{ fontSize: '19px', lineHeight: '1.55', maxWidth: '640px', color: 'rgba(36,20,84,.78)', margin: '0 0 34px' }}>Growth Studio consultants ship fundraising, GTM, and market work for founders. If you want hands-on startup experience before you graduate, this is where you get it.</p>
          <div data-reveal="" data-delay="240" style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center' }}>
            <a href={INTEREST_FORM_URL} target="_blank" rel="noopener" data-hover={`{"transform":"translateY(-2px)","boxShadow":"0 12px 28px rgba(58,31,176,.32)"}`} style={{ textDecoration: 'none', background: 'var(--purple,#3a1fb0)', color: '#f3f13a', fontWeight: '700', fontSize: '16px', padding: '15px 28px', borderRadius: '2px', display: 'inline-flex', alignItems: 'center', gap: '10px', transition: 'transform .18s ease,box-shadow .18s ease' }}>
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
          <div className="gs-grid gs-wrap" style={{ maxWidth: '1200px', margin: '0 auto', padding: '96px 32px', position: 'relative', display: 'grid', gridTemplateColumns: '.85fr 1.15fr', gap: '56px', alignItems: 'start' }}>
            <div data-reveal="">
              <p style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', letterSpacing: '.16em', fontSize: '13px', fontWeight: '700', color: 'var(--yellow,#f3f13a)', margin: '0 0 16px' }}>WHY JOIN</p>
              <h2 style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '700', fontSize: 'clamp(30px,3.6vw,44px)', lineHeight: '1.05', letterSpacing: '-.02em', margin: '0' }}>You own the work, start to finish.</h2>
            </div>
            <div data-reveal="" data-delay="120">
              <p style={{ fontSize: '19px', lineHeight: '1.6', color: 'rgba(255,255,255,.88)', margin: '0 0 26px' }}>Have the chance to present your work directly to founders. Work with a tight knit, motivated team. Get involved in the startup ecosystem as a student.</p>
              <div style={{ borderLeft: '3px solid var(--yellow,#f3f13a)', paddingLeft: '20px' }}>
                <p style={{ fontSize: '16px', lineHeight: '1.6', color: 'rgba(255,255,255,.75)', margin: '0' }}>We&apos;re looking for a team with a diverse array of academic backgrounds and experiences. What matters most is that you <strong style={{ color: '#fff' }}>take agency and follow through.</strong></p>
              </div>
            </div>
          </div>
        </section>
        <div style={{ background: '#f6f5fb' }}>
          <section className="gs-wrap" id="c-gain" style={{ maxWidth: '1200px', margin: '0 auto', padding: '120px 32px' }}>
            <div data-reveal="" style={{ maxWidth: '720px', marginBottom: '56px' }}>
              <p style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', letterSpacing: '.16em', fontSize: '13px', fontWeight: '700', color: 'var(--purple,#3a1fb0)', margin: '0 0 16px' }}>AVAILABLE OPPORTUNITIES</p>
              <h2 style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '700', fontSize: 'clamp(32px,4vw,52px)', lineHeight: '1.02', letterSpacing: '-.02em', margin: '0' }}>Start as a consultant, grow to lead your own team.</h2>
            </div>
            <div className="gs-grid" data-reveal="" data-delay="80" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '20px', alignItems: 'stretch' }}>
              <div style={{ background: '#fff', border: '1px solid rgba(36,20,84,.14)', borderRadius: '3px', padding: '36px 34px' }}>
                <p style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', letterSpacing: '.14em', fontSize: '12px', fontWeight: '700', color: 'var(--purple,#3a1fb0)', margin: '0 0 8px' }}>ROLE WE RECRUIT FOR</p>
                <h3 style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '700', fontSize: '24px', margin: '0 0 22px' }}>As a junior consultant</h3>
                <ul style={{ listStyle: 'none', margin: '0', padding: '0', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <li style={BULLET_LIGHT}><span style={DOT_PURPLE}></span><span>Work a startup&apos;s mandate directly, alongside your team</span></li>
                  <li style={BULLET_LIGHT}><span style={DOT_PURPLE}></span><span>Bring your own ideas and take agency from day one</span></li>
                  <li style={BULLET_LIGHT}><span style={DOT_PURPLE}></span><span>Give and take honest peer feedback</span></li>
                  <li style={BULLET_LIGHT}><span style={DOT_PURPLE}></span><span>Attend in-person work sessions, client presentations, and workshops</span></li>
                </ul>
              </div>
              <div style={{ background: 'var(--purple,#3a1fb0)', color: '#fff', borderRadius: '3px', padding: '36px 34px' }}>
                <p style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', letterSpacing: '.14em', fontSize: '12px', fontWeight: '700', color: 'var(--yellow,#f3f13a)', margin: '0 0 8px' }}>PROGRESSION OPPORTUNITY</p>
                <h3 style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '700', fontSize: '24px', margin: '0 0 22px', color: '#fff' }}>As a senior consultant</h3>
                <ul style={{ listStyle: 'none', margin: '0', padding: '0', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <li style={BULLET_DARK}><span style={DOT_YELLOW}></span><span>Scout and help select the startups we take on</span></li>
                  <li style={BULLET_DARK}><span style={DOT_YELLOW}></span><span>Become a founder&apos;s main point of contact for the mandate</span></li>
                  <li style={BULLET_DARK}><span style={DOT_YELLOW}></span><span>Set the weekly cadence and keep the mandate on track</span></li>
                  <li style={BULLET_DARK}><span style={DOT_YELLOW}></span><span>Mentor junior consultants and delegate the work</span></li>
                </ul>
              </div>
            </div>
          </section>
        </div>
        <section className="gs-wrap" id="c-what" style={{ maxWidth: '1200px', margin: '0 auto', padding: '120px 32px' }}>
          <div data-reveal="" style={{ maxWidth: '720px', marginBottom: '60px' }}>
            <p style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', letterSpacing: '.16em', fontSize: '13px', fontWeight: '700', color: 'var(--purple,#3a1fb0)', margin: '0 0 16px' }}>TIMELINE</p>
            <h2 style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '700', fontSize: 'clamp(32px,4vw,52px)', lineHeight: '1.02', letterSpacing: '-.02em', margin: '0 0 20px' }}>How the program runs.</h2>
            <p style={{ fontSize: '18px', lineHeight: '1.6', color: 'rgba(36,20,84,.75)', margin: '0' }}>We recruit from the McGill Ventures Analyst Program and beyond, then run two to three startup mandates a year. We do background work online and collaborate in-person for brainstorming, peer feedback, and presentation refinement.</p>
          </div>
          <div className="gs-grid" data-reveal="" data-delay="80" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '32px' }}>
            <div>
              <div style={{ height: '2px', background: 'rgba(58,31,176,.16)', marginBottom: '28px', position: 'relative' }}>
                <div style={{ position: 'absolute', left: '0', top: '-5px', width: '12px', height: '12px', borderRadius: '50%', background: 'var(--yellow,#f3f13a)', boxShadow: '0 0 0 2px var(--purple,#3a1fb0)' }}>
                </div>
              </div>
              <p style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', letterSpacing: '.14em', fontSize: '12px', fontWeight: '700', color: 'var(--purple,#3a1fb0)', margin: '0 0 8px' }}>SUMMER 2026</p>
              <h3 style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '700', fontSize: '22px', margin: '0 0 12px' }}>Scouting & discovery</h3>
              <p style={{ fontSize: '15px', lineHeight: '1.55', color: 'rgba(36,20,84,.7)', margin: '0', maxWidth: '320px' }}>Startups are scouted. Consultants work asynchronously to structure the program and develop tools for founders.</p>
            </div>
            <div>
              <div style={{ height: '2px', background: 'rgba(58,31,176,.16)', marginBottom: '28px', position: 'relative' }}>
                <div style={{ position: 'absolute', left: '0', top: '-5px', width: '12px', height: '12px', borderRadius: '50%', background: 'var(--purple,#3a1fb0)' }}>
                </div>
              </div>
              <p style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', letterSpacing: '.14em', fontSize: '12px', fontWeight: '700', color: 'var(--purple,#3a1fb0)', margin: '0 0 8px' }}>FALL 2026</p>
              <h3 style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '700', fontSize: '22px', margin: '0 0 12px' }}>First mandate</h3>
              <p style={{ fontSize: '15px', lineHeight: '1.55', color: 'rgba(36,20,84,.7)', margin: '0', maxWidth: '320px' }}>Startups are selected, and the first mandate kicks off.</p>
            </div>
            <div>
              <div style={{ height: '2px', background: 'rgba(58,31,176,.16)', marginBottom: '28px', position: 'relative' }}>
                <div style={{ position: 'absolute', left: '0', top: '-5px', width: '12px', height: '12px', borderRadius: '50%', background: 'var(--purple,#3a1fb0)' }}>
                </div>
              </div>
              <p style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', letterSpacing: '.14em', fontSize: '12px', fontWeight: '700', color: 'var(--purple,#3a1fb0)', margin: '0 0 8px' }}>WINTER 2027</p>
              <h3 style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '700', fontSize: '22px', margin: '0 0 12px' }}>Recruitment & further mandates</h3>
              <p style={{ fontSize: '15px', lineHeight: '1.55', color: 'rgba(36,20,84,.7)', margin: '0', maxWidth: '320px' }}>New consultants are recruited and onboarded. Two more mandates run alongside professional development opportunities.</p>
            </div>
          </div>
        </section>
        <section className="gs-wrap" id="c-fit" style={{ maxWidth: '1200px', margin: '0 auto 120px', padding: '0 32px' }}>
          <div className="gs-grid gs-card-pad" data-reveal="" style={{ display: 'grid', gridTemplateColumns: '1.1fr .9fr', gap: '48px', alignItems: 'center', background: '#f6f5fb', border: '1px solid rgba(36,20,84,.12)', borderRadius: '4px', padding: '56px 48px' }}>
            <div>
              <p style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', letterSpacing: '.16em', fontSize: '13px', fontWeight: '700', color: 'var(--purple,#3a1fb0)', margin: '0 0 16px' }}>WHAT WE LOOK FOR</p>
              <h2 style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '700', fontSize: 'clamp(26px,3vw,38px)', lineHeight: '1.08', letterSpacing: '-.02em', margin: '0 0 16px' }}>Dedication & Adaptability</h2>
              <p style={{ fontSize: '17px', lineHeight: '1.6', color: 'rgba(36,20,84,.78)', margin: '0' }}>We recruit for agency and follow-through, and a real interest in startups no matter the industry. Any faculty, any year. If you take ownership of your work and can communicate your conviction, you&apos;ll fit here.</p>
            </div>
            <div style={{ background: '#fff', border: '1px solid rgba(36,20,84,.14)', borderRadius: '3px', padding: '32px 30px' }}>
              <p style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', letterSpacing: '.14em', fontSize: '12px', fontWeight: '700', color: 'var(--purple,#3a1fb0)', margin: '0 0 14px' }}>THE COMMITMENT</p>
              <div style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '700', fontSize: '40px', lineHeight: '1', color: 'var(--purple,#3a1fb0)', margin: '0 0 12px' }}>~10 hrs<span style={{ fontSize: '20px', fontWeight: '600', color: 'rgba(36,20,84,.55)' }}>/week</span>
              </div>
              <p style={{ fontSize: '15px', lineHeight: '1.55', color: 'rgba(36,20,84,.7)', margin: '0' }}>during the academic year, with weekly in-person sessions.</p>
            </div>
          </div>
        </section>
        <section className="gs-wrap" id="c-apply" style={{ maxWidth: '1200px', margin: '0 auto 120px', padding: '0 32px' }}>
          <div className="gs-card-pad" data-reveal="" style={{ position: 'relative', overflow: 'hidden', background: 'var(--yellow,#f3f13a)', color: 'var(--purple,#3a1fb0)', borderRadius: '4px', padding: '84px 64px' }}>
            <div data-float="" style={{ position: 'absolute', right: '-70px', top: '-70px', width: '260px', height: '260px', borderRadius: '50%', border: '1.5px solid rgba(36,20,84,.18)', animation: 'gs-spinR 50s linear infinite' }}>
            </div>
            <div data-float="" style={{ position: 'absolute', right: '120px', bottom: '-50px', width: '120px', height: '120px', background: 'rgba(36,20,84,.08)', transform: 'rotate(20deg)', animation: 'gs-floatY 8s ease-in-out infinite' }}>
            </div>
            <div style={{ position: 'relative', maxWidth: '560px' }}>
              <p style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', letterSpacing: '.16em', fontSize: '13px', fontWeight: '700', color: 'rgba(36,20,84,.7)', margin: '0 0 18px' }}>CONSULTANT RECRUITMENT FOR WINTER 2027 WILL OPEN SOON</p>
              <h2 style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '700', fontSize: 'clamp(32px,4.4vw,54px)', lineHeight: '1.0', letterSpacing: '-.02em', margin: '0 0 18px' }}>Ready to build with us?</h2>
              <p style={{ fontSize: '18px', lineHeight: '1.55', color: 'rgba(36,20,84,.82)', margin: '0 0 30px' }}>We bring on a new cohort each winter. Fill out our interest form to tell us who you are and get notified when applications open.</p>
              <a href={INTEREST_FORM_URL} target="_blank" rel="noopener" data-hover={`{"transform":"translateY(-2px)"}`} style={{ textDecoration: 'none', background: 'var(--purple,#3a1fb0)', color: '#f3f13a', fontWeight: '700', fontSize: '16px', fontFamily: 'var(--font-space-grotesk),sans-serif', padding: '15px 28px', borderRadius: '2px', display: 'inline-flex', alignItems: 'center', gap: '10px', transition: 'transform .18s ease' }}>Interest form <span style={{ fontSize: '18px', lineHeight: '1' }}>→</span>
            </a>
            <p style={{ fontSize: '15.5px', lineHeight: '1.5', color: 'rgba(36,20,84,.68)', margin: '22px 0 0' }}>Questions? Reach us directly at <a href="mailto:hello.growthstudio@gmail.com" style={{ color: 'var(--purple,#3a1fb0)', fontWeight: '700' }}>hello.growthstudio@gmail.com</a>
          </p>
        </div>
        </div>
        </section>
      </main>
      <Footer />
      <Interactions />
    </>
  );
}
