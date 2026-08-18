import type { Metadata } from "next";
import Image from "next/image";
import Nav from "../_components/Nav";
import Footer from "../_components/Footer";
import Interactions from "../_components/Interactions";
import TeamWash from "../_components/TeamWash";

export const metadata: Metadata = {
  title: "Our Team — Growth Studio",
  description: "The people behind every engagement — the directors, consultants, and advisors who make up Growth Studio at McGill Ventures.",
  openGraph: {
    title: "Our Team — Growth Studio",
    description: "The people behind every engagement — the directors, consultants, and advisors who make up Growth Studio at McGill Ventures.",
    type: "website",
    url: "https://www.mcgillvc.ca/growth-studio/team",
    images: "/growth-studio/logo-wordmark.webp",
  },
};

export default function TeamPage() {
  return (
    <>
      <div data-team-page="">
      <svg width="0" height="0" aria-hidden="true" style={{ position: 'absolute', pointerEvents: 'none' }}>
        <filter id="gs-watercolor" x="-80%" y="-80%" width="260%" height="260%" colorInterpolationFilters="sRGB">
          <feTurbulence type="fractalNoise" baseFrequency="0.013" numOctaves="4" seed="7" result="noise">
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="42" xChannelSelector="R" yChannelSelector="G">
          </feDisplacementMap>
        </filter>
      </svg>
      <Nav active={"team"} ctaHref={"mailto:hello.growthstudio@gmail.com"} />
      <main>
        <header style={{ position: 'relative', zIndex: '1', maxWidth: '1200px', margin: '0 auto', padding: '80px 32px 20px' }}>
          <div data-reveal="">
            <p style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', letterSpacing: '.16em', fontSize: '13px', fontWeight: '700', color: 'var(--purple,#3a1fb0)', margin: '0 0 16px' }}>OUR TEAM</p>
            <h1 style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '700', fontSize: 'clamp(36px,5vw,60px)', lineHeight: '1.02', letterSpacing: '-.02em', margin: '0 0 18px', maxWidth: '760px' }}>The people behind every engagement.</h1>
            <p style={{ fontSize: '18px', lineHeight: '1.6', color: 'rgba(36,20,84,.75)', maxWidth: '640px', margin: '0' }}>Growth Studio pairs founders with trained student consultants, backed by directors and advisors from across the McGill Ventures network.</p>
          </div>
        </header>
        <section id="directors" style={{ position: 'relative', zIndex: '1', maxWidth: '1200px', margin: '0 auto', padding: '64px 32px 0' }}>
          <div data-reveal="" style={{ maxWidth: '680px', marginBottom: '56px' }}>
            <p style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', letterSpacing: '.16em', fontSize: '13px', fontWeight: '700', color: 'var(--purple,#3a1fb0)', margin: '0 0 16px' }}>DIRECTORS</p>
          </div>
          <div data-team-row="" style={{ position: 'relative', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '16px' }}>
            <a href="https://www.linkedin.com/in/emiko-mclean" target="_blank" rel="noopener" data-team-card="" data-reveal="" data-delay="0" style={{ position: 'relative', isolation: 'isolate', textDecoration: 'none', color: 'inherit', display: 'block', padding: '36px 28px 32px', borderRadius: '14px' }}>
              <span data-splash="" aria-hidden="true" style={{ position: 'absolute', inset: '-26%', zIndex: '-1', opacity: '0', pointerEvents: 'none' }}>
              </span>
              <div data-photo="" style={{ width: '152px', height: '152px', borderRadius: '50%', overflow: 'hidden', marginBottom: '22px', filter: 'grayscale(1)', transition: 'filter .55s ease,transform .55s cubic-bezier(.2,.7,.3,1)' }}>
                <Image src="/growth-studio/emiko-mclean-headshot.webp" alt="Emiko McLean headshot" width={152} height={152} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '600', fontSize: '20px', margin: '0 0 6px' }}>Emiko McLean</h3>
              <p style={{ fontSize: '14.5px', lineHeight: '1.5', color: 'rgba(36,20,84,.68)', margin: '0 0 10px' }}>2nd Year MSc, Surgical and Interventional Sciences<br />Favourite productivity tool: Granola</p>
              <p style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '.04em', color: 'var(--purple,#3a1fb0)', margin: '0' }}>FRONT ROW VENTURES</p>
            </a>
            <a href="https://www.linkedin.com/in/anthony-melki-947841252/" target="_blank" rel="noopener" data-team-card="" data-reveal="" data-delay="90" style={{ position: 'relative', isolation: 'isolate', textDecoration: 'none', color: 'inherit', display: 'block', padding: '36px 28px 32px', borderRadius: '14px' }}>
              <span data-splash="" aria-hidden="true" style={{ position: 'absolute', inset: '-26%', zIndex: '-1', opacity: '0', pointerEvents: 'none' }}>
              </span>
              <div data-photo="" style={{ width: '152px', height: '152px', borderRadius: '50%', overflow: 'hidden', marginBottom: '22px', filter: 'grayscale(1)', transition: 'filter .55s ease,transform .55s cubic-bezier(.2,.7,.3,1)' }}>
                <Image src="/growth-studio/anthony-melki-headshot.webp" alt="Anthony Melki headshot" width={152} height={152} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '600', fontSize: '20px', margin: '0 0 6px' }}>Anthony Melki</h3>
              <p style={{ fontSize: '14.5px', lineHeight: '1.5', color: 'rgba(36,20,84,.68)', margin: '0 0 10px' }}>5th Year BEng, Mechanical Engineering<br />Favourite productivity tool: n8n</p>
              <p style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '.04em', color: 'var(--purple,#3a1fb0)', margin: '0' }}>PRODUCTSHOP</p>
            </a>
            <a href="https://www.linkedin.com/in/sophia-mahiout-153785354/" target="_blank" rel="noopener" data-team-card="" data-reveal="" data-delay="180" style={{ position: 'relative', isolation: 'isolate', textDecoration: 'none', color: 'inherit', display: 'block', padding: '36px 28px 32px', borderRadius: '14px' }}>
              <span data-splash="" aria-hidden="true" style={{ position: 'absolute', inset: '-26%', zIndex: '-1', opacity: '0', pointerEvents: 'none' }}>
              </span>
              <div data-photo="" style={{ width: '152px', height: '152px', borderRadius: '50%', overflow: 'hidden', marginBottom: '22px', filter: 'grayscale(1)', transition: 'filter .55s ease,transform .55s cubic-bezier(.2,.7,.3,1)' }}>
                <Image src="/growth-studio/sophia-mahiout-headshot.webp" alt="Sophia Mahiout headshot" width={152} height={152} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '600', fontSize: '20px', margin: '0 0 6px' }}>Sophia Mahiout</h3>
              <p style={{ fontSize: '14.5px', lineHeight: '1.5', color: 'rgba(36,20,84,.68)', margin: '0 0 10px' }}>1st Year, Doctor of Dental Medicine<br />Favourite productivity tool: read.ai</p>
              <p style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '.04em', color: 'var(--purple,#3a1fb0)', margin: '0' }}>180 DEGREES CONSULTING</p>
            </a>
          </div>
          <div data-reveal="" style={{ margin: '80px 0 32px', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '16px' }}>
            <p style={{ gridColumn: 'span 2', fontFamily: 'var(--font-space-grotesk),sans-serif', letterSpacing: '.16em', fontSize: '13px', fontWeight: '700', color: 'var(--purple,#3a1fb0)', margin: '0', paddingLeft: '28px' }}>CONSULTANTS</p>
            <p style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', letterSpacing: '.16em', fontSize: '13px', fontWeight: '700', color: 'var(--purple,#3a1fb0)', margin: '0', paddingLeft: '28px' }}>ADVISORS</p>
          </div>
          <div data-team-row="" style={{ position: 'relative', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '16px', paddingBottom: '72px' }}>
            <a href="https://www.linkedin.com/in/ronardyabellard/" target="_blank" rel="noopener" data-team-card="" data-reveal="" data-delay="0" style={{ position: 'relative', isolation: 'isolate', textDecoration: 'none', color: 'inherit', display: 'block', padding: '36px 28px 32px', borderRadius: '14px' }}>
              <span data-splash="" aria-hidden="true" style={{ position: 'absolute', inset: '-26%', zIndex: '-1', opacity: '0', pointerEvents: 'none' }}>
              </span>
              <div data-photo="" style={{ width: '152px', height: '152px', borderRadius: '50%', overflow: 'hidden', marginBottom: '22px', filter: 'grayscale(1)', transition: 'filter .55s ease,transform .55s cubic-bezier(.2,.7,.3,1)' }}>
                <Image src="/growth-studio/consultant-headshot.webp" alt="Consultant headshot" width={152} height={152} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '600', fontSize: '20px', margin: '0 0 6px' }}>Ronardy Abellard</h3>
              <p style={{ fontSize: '14.5px', lineHeight: '1.5', color: 'rgba(36,20,84,.68)', margin: '0 0 10px' }}>4th Year BEng, Materials Engineering<br />Favourite productivity tool: Claude Code</p>
              <p style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '.04em', color: 'var(--purple,#3a1fb0)', margin: '0' }}>McGILL INNOVATION FUND</p>
            </a>
            <a href="https://www.linkedin.com/in/joeymarsh9/" target="_blank" rel="noopener" data-team-card="" data-reveal="" data-delay="90" style={{ position: 'relative', isolation: 'isolate', textDecoration: 'none', color: 'inherit', display: 'block', padding: '36px 28px 32px', borderRadius: '14px' }}>
              <span data-splash="" aria-hidden="true" style={{ position: 'absolute', inset: '-26%', zIndex: '-1', opacity: '0', pointerEvents: 'none' }}>
              </span>
              <div data-photo="" style={{ width: '152px', height: '152px', borderRadius: '50%', overflow: 'hidden', marginBottom: '22px', filter: 'grayscale(1)', transition: 'filter .55s ease,transform .55s cubic-bezier(.2,.7,.3,1)' }}>
                <Image src="/growth-studio/consultant-headshot-2.webp" alt="Consultant headshot" width={152} height={152} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '600', fontSize: '20px', margin: '0 0 6px' }}>Joey Marsh</h3>
              <p style={{ fontSize: '14.5px', lineHeight: '1.5', color: 'rgba(36,20,84,.68)', margin: '0 0 10px' }}>2nd Year BCom, Finance<br />Favourite productivity tool: Claude Chat</p>
              <p style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '.04em', color: 'var(--purple,#3a1fb0)', margin: '0' }}>LUNEA CAPITAL</p>
            </a>
            <a href="https://www.linkedin.com/in/gaelhgonzalez/" target="_blank" rel="noopener" data-team-card="" data-reveal="" data-delay="0" style={{ position: 'relative', isolation: 'isolate', textDecoration: 'none', color: 'inherit', display: 'block', padding: '36px 28px 32px', borderRadius: '14px' }}>
              <span data-splash="" aria-hidden="true" style={{ position: 'absolute', inset: '-26%', zIndex: '-1', opacity: '0', pointerEvents: 'none' }}>
              </span>
              <div data-photo="" style={{ width: '152px', height: '152px', borderRadius: '50%', overflow: 'hidden', marginBottom: '22px', filter: 'grayscale(1)', transition: 'filter .55s ease,transform .55s cubic-bezier(.2,.7,.3,1)' }}>
                <Image src="/growth-studio/advisor-headshot.webp" alt="Advisor headshot" width={152} height={152} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '600', fontSize: '20px', margin: '0 0 6px' }}>Gael González</h3>
              <p style={{ fontSize: '14.5px', lineHeight: '1.5', color: 'rgba(36,20,84,.68)', margin: '0 0 10px' }}>4th Year BCom, Strategic Management & Finance</p>
              <p style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '.04em', color: 'var(--purple,#3a1fb0)', margin: '0' }}>CO-PRESIDENT @ McGILL VENTURES, PORTFOLIO MANAGER @ FRONT ROW VENTURES</p>
            </a>
          </div>
        </section>
        <section style={{ position: 'relative', zIndex: '1', maxWidth: '1200px', margin: '0 auto', padding: '8px 32px 120px' }}>
          <div style={{ background: 'var(--purple,#3a1fb0)', borderRadius: '20px', padding: '64px 56px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '32px' }}>
            <div style={{ maxWidth: '620px' }}>
              <p style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', letterSpacing: '.16em', fontSize: '13px', fontWeight: '700', color: 'var(--yellow,#f3f13a)', margin: '0 0 14px' }}>WANT TO JOIN US?</p>
              <h2 style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '700', fontSize: 'clamp(28px,3.4vw,40px)', lineHeight: '1.05', letterSpacing: '-.02em', color: '#fff', margin: '0' }}>We&apos;re recruiting consultants passionate about making big impacts on early startups.</h2>
            </div>
            <a href="/growth-studio/careers" data-hover={`{"transform":"translateY(-2px)","boxShadow":"0 10px 26px rgba(0,0,0,.28)"}`} style={{ flex: 'none', textDecoration: 'none', background: 'var(--yellow,#f3f13a)', color: 'var(--purple,#3a1fb0)', fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '700', fontSize: '16px', padding: '16px 30px', borderRadius: '2px', transition: 'transform .18s ease,box-shadow .18s ease', display: 'inline-block' }}>Learn more here →</a>
          </div>
        </section>
      </main>
      <Footer
        program={[{ href: "mailto:hello.growthstudio@gmail.com", label: "Contact" }, { href: "/growth-studio/startups", label: "How we help" }, { href: "/growth-studio/partners", label: "Partner with us" }]}
        team={[{ href: "/growth-studio/team", label: "Directors" }, { href: "/growth-studio#who", label: "Who we work with" }, { href: "/growth-studio/careers", label: "Careers" }]}
        raised
      />
      </div>
      <Interactions />
      <TeamWash />
    </>
  );
}
