import type { Metadata } from "next";
import Image from "next/image";
import Nav from "../_components/Nav";
import Footer from "../_components/Footer";
import Interactions from "../_components/Interactions";

export const metadata: Metadata = {
  title: "For Founders — Growth Studio",
  description: "Let's get you investor-ready. Growth Studio pairs you with a dedicated team of trained student consultants for a free four-week engagement — strategy, fundraising support, and hands-on execution tailored to your stage.",
  openGraph: {
    title: "For Founders — Growth Studio",
    description: "Let's get you investor-ready. Growth Studio pairs you with a dedicated team of trained student consultants for a free four-week engagement — strategy, fundraising support, and hands-on execution tailored to your stage.",
    type: "website",
    url: "https://www.mcgillvc.ca/growth-studio/startups",
    images: "/growth-studio/logo-wordmark.webp",
  },
};

const FACET_LABEL: React.CSSProperties = {
  position: 'absolute',
  transform: 'translate(-50%,-50%)',
  width: '118px',
  textAlign: 'center',
  fontFamily: 'var(--font-space-grotesk),sans-serif',
  fontSize: '12.5px',
  fontWeight: '700',
  lineHeight: '1.3',
  color: '#241454',
  background: '#fff',
  border: '1.5px solid rgba(36,20,84,.28)',
  borderRadius: '4px',
  padding: '9px 8px',
  boxShadow: '0 3px 0 rgba(36,20,84,.28)',
  cursor: 'pointer',
  transition: 'transform .15s ease,box-shadow .15s ease,background .2s ease,color .2s ease,border-color .2s ease',
};

export default function StartupsPage() {
  return (
    <>
      <Nav active={null} ctaHref={"#s-apply"} />
      <main>
        <div style={{ background: 'var(--yellow,#f3f13a)', padding: '12px 32px', textAlign: 'center' }}>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSfNMLYY5THSx6F1WPXlK11zS2q7JiSHNCRekzMAEEbHZl54rQ/viewform?usp=header" target="_blank" rel="noopener" style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '700', fontSize: '14px', letterSpacing: '.08em', color: 'var(--purple,#3a1fb0)', textDecoration: 'underline' }}>STARTUPS: INTAKE APPLICATIONS ARE NOW OPEN</a>
        </div>
        <header id="s-top" style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto', padding: '88px 32px 96px', overflow: 'hidden' }}>
          <div aria-hidden="true" style={{ position: 'absolute', right: '0', top: 'calc(50% - 190px)', width: '380px', height: '380px', pointerEvents: 'none', opacity: '.2' }}>
            <Image src="/growth-studio/logo-mark-large.png" alt="" width={512} height={492} style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block', animation: 'gs-floatY 11s ease-in-out infinite' }} />
          </div>
          <div style={{ position: 'relative', maxWidth: '760px' }}>
            <p data-reveal="" style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', letterSpacing: '.16em', fontSize: '13px', fontWeight: '700', color: 'var(--purple,#3a1fb0)', margin: '0 0 16px' }}>FOR FOUNDERS</p>
            <h1 data-reveal="" data-delay="80" style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '700', fontSize: 'clamp(42px,5.6vw,74px)', lineHeight: '.98', letterSpacing: '-.025em', margin: '0 0 24px' }}>Let&apos;s get you <span style={{ color: 'var(--purple,#3a1fb0)' }}>investor-ready.</span>
          </h1>
          <p data-reveal="" data-delay="160" style={{ fontSize: '19px', lineHeight: '1.55', maxWidth: '620px', color: 'rgba(36,20,84,.78)', margin: '0 0 34px' }}>Growth Studio pairs you with a dedicated team of trained student consultants for a free four-week engagement. Strategy, fundraising support, and hands-on execution tailored to your stage.</p>
          <div data-reveal="" data-delay="240" style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center' }}>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfNMLYY5THSx6F1WPXlK11zS2q7JiSHNCRekzMAEEbHZl54rQ/viewform?usp=header" target="_blank" rel="noopener" data-hover={`{"transform":"translateY(-2px)","boxShadow":"0 12px 28px rgba(58,31,176,.32)"}`} style={{ textDecoration: 'none', background: 'var(--purple,#3a1fb0)', color: '#f3f13a', fontWeight: '700', fontSize: '16px', padding: '15px 28px', borderRadius: '2px', display: 'inline-flex', alignItems: 'center', gap: '10px', transition: 'transform .18s ease,box-shadow .18s ease' }}>
              <div>Fill out our startup intake form</div>
              <span style={{ fontSize: '18px', lineHeight: '1' }}>→</span>
            </a>
            <a href="#s-why" data-hover={`{"background":"rgba(36,20,84,.05)"}`} style={{ textDecoration: 'none', color: '#241454', fontWeight: '600', fontSize: '16px', padding: '15px 24px', borderRadius: '2px', border: '1px solid rgba(36,20,84,.25)', transition: 'background .18s ease,border-color .18s ease' }}>Why Growth Studio</a>
          </div>
        </div>
        </header>
        <div style={{ background: '#f6f5fb' }}>
          <section id="s-why" style={{ maxWidth: '1200px', margin: '0 auto', padding: '72px 32px 76px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.1fr)', gap: '80px', alignItems: 'start' }}>
              <div data-reveal="">
                <p style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', letterSpacing: '.16em', fontSize: '13px', fontWeight: '700', color: 'var(--purple,#3a1fb0)', margin: '0 0 16px' }}>WHY GROWTH STUDIO</p>
                <h2 style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '700', fontSize: 'clamp(32px,3.6vw,48px)', lineHeight: '1.02', letterSpacing: '-.02em', margin: '0 0 20px' }}>Built around early-stage founders, top to bottom.</h2>
                <p style={{ fontSize: '17px', lineHeight: '1.6', color: 'rgba(36,20,84,.75)', margin: '0' }}>Growth Studio exists because the need for strategic support often comes before startups can pay for it, a gap McGill Ventures built this program to close. We start every engagement by defining a SMART goal together, based on your specific stage and constraints, and every deliverable is built to be usable within the week.</p>
              </div>
              <div data-reveal="" data-delay="120" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '56px 1fr', gap: '24px', padding: '0 0 30px', borderBottom: '1px solid rgba(36,20,84,.16)' }}>
                  <div style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '700', fontSize: '15px', color: 'var(--purple,#3a1fb0)', paddingTop: '4px' }}>01</div>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '600', fontSize: '22px', letterSpacing: '-.01em', margin: '0 0 8px' }}>Startup-only focus</h3>
                    <p style={{ fontSize: '16px', lineHeight: '1.55', color: 'rgba(36,20,84,.68)', margin: '0' }}>We work exclusively with pre-seed and seed-stage founders. Many of our consultants have advised or worked within early-stage startups themselves.</p>
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '56px 1fr', gap: '24px', padding: '30px 0', borderBottom: '1px solid rgba(36,20,84,.16)' }}>
                  <div style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '700', fontSize: '15px', color: 'var(--purple,#3a1fb0)', paddingTop: '4px' }}>02</div>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '600', fontSize: '22px', letterSpacing: '-.01em', margin: '0 0 8px' }}>Free for founders</h3>
                    <p style={{ fontSize: '16px', lineHeight: '1.55', color: 'rgba(36,20,84,.68)', margin: '0' }}>No consulting fees. Our support is fully backed by McGill Ventures, so founders get the work without the invoice.</p>
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '56px 1fr', gap: '24px', padding: '30px 0 0' }}>
                  <div style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '700', fontSize: '15px', color: 'var(--purple,#3a1fb0)', paddingTop: '4px' }}>03</div>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '600', fontSize: '22px', letterSpacing: '-.01em', margin: '0 0 8px' }}>Hands-on execution</h3>
                    <p style={{ fontSize: '16px', lineHeight: '1.55', color: 'rgba(36,20,84,.68)', margin: '0' }}>Our consultants populate your investor CRM with live target lists, draft and send outreach, and sit in on pitch practice to give live feedback.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <section id="how-founders" style={{ maxWidth: '1200px', margin: '0 auto', padding: '76px 32px 84px' }}>
          <div data-reveal="" style={{ maxWidth: '680px', marginBottom: '56px' }}>
            <p style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', letterSpacing: '.16em', fontSize: '13px', fontWeight: '700', color: 'var(--purple,#3a1fb0)', margin: '0 0 16px' }}>HOW WE HELP</p>
            <h2 style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '700', fontSize: 'clamp(32px,4vw,52px)', lineHeight: '1.02', letterSpacing: '-.02em', margin: '0' }}>Eight ways we get founders investor-ready.</h2>
          </div>
          <div data-reveal="" data-delay="80" style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '56px', alignItems: 'center' }}>
            <div data-radar="" style={{ position: 'relative', width: '560px', height: '560px', flex: 'none', maxWidth: '100%' }}>
              <svg viewBox="0 0 560 560" width="560" height="560" style={{ maxWidth: '100%', height: 'auto', display: 'block', overflow: 'visible' }}>
                <polygon points="280,112 398.8,161.2 448,280 398.8,398.8 280,448 161.2,398.8 112,280 161.2,161.2" fill="none" stroke="rgba(36,20,84,.16)" />
                <polygon points="280,154 369.1,190.9 406,280 369.1,369.1 280,406 190.9,369.1 154,280 190.9,190.9" fill="none" stroke="rgba(36,20,84,.16)" />
                <polygon points="280,196 339.4,220.6 364,280 339.4,339.4 280,364 220.6,339.4 196,280 220.6,220.6" fill="none" stroke="rgba(36,20,84,.16)" />
                <polygon points="280,238 309.7,250.3 322,280 309.7,309.7 280,322 250.3,309.7 238,280 250.3,250.3" fill="none" stroke="rgba(36,20,84,.16)" />
                <line x1="280" y1="280" x2="280" y2="112" stroke="rgba(36,20,84,.16)" />
                <line x1="280" y1="280" x2="398.8" y2="161.2" stroke="rgba(36,20,84,.16)" />
                <line x1="280" y1="280" x2="448" y2="280" stroke="rgba(36,20,84,.16)" />
                <line x1="280" y1="280" x2="398.8" y2="398.8" stroke="rgba(36,20,84,.16)" />
                <line x1="280" y1="280" x2="280" y2="448" stroke="rgba(36,20,84,.16)" />
                <line x1="280" y1="280" x2="161.2" y2="398.8" stroke="rgba(36,20,84,.16)" />
                <line x1="280" y1="280" x2="112" y2="280" stroke="rgba(36,20,84,.16)" />
                <line x1="280" y1="280" x2="161.2" y2="161.2" stroke="rgba(36,20,84,.16)" />
                <polygon data-role="base-octagon" points="280,180 350.7,209.3 380,280 350.7,350.7 280,380 209.3,350.7 180,280 209.3,209.3" fill="rgba(58,31,176,.14)" stroke="var(--purple,#3a1fb0)" strokeWidth="2.5" strokeLinejoin="round" style={{ transition: 'fill .25s ease,stroke .25s ease' }} />
                <circle data-dot="0" cx="280" cy="180" r="5" fill="var(--purple,#3a1fb0)" />
                <circle data-dot="1" cx="350.7" cy="209.3" r="5" fill="var(--purple,#3a1fb0)" />
                <circle data-dot="2" cx="380" cy="280" r="5" fill="var(--purple,#3a1fb0)" />
                <circle data-dot="3" cx="350.7" cy="350.7" r="5" fill="var(--purple,#3a1fb0)" />
                <circle data-dot="4" cx="280" cy="380" r="5" fill="var(--purple,#3a1fb0)" />
                <circle data-dot="5" cx="209.3" cy="350.7" r="5" fill="var(--purple,#3a1fb0)" />
                <circle data-dot="6" cx="180" cy="280" r="5" fill="var(--purple,#3a1fb0)" />
                <circle data-dot="7" cx="209.3" cy="209.3" r="5" fill="var(--purple,#3a1fb0)" />
                <circle cx="280" cy="280" r="36" fill="#ffffff" stroke="rgba(36,20,84,.14)" />
                <text data-active-num="" x="280" y="287" textAnchor="middle" fontFamily="var(--font-space-grotesk),sans-serif" fontWeight="700" fontSize="20" fill="var(--purple,#3a1fb0)">
                </text>
              </svg>
              <div data-label="0" style={{ ...FACET_LABEL, left: '280px', top: '55px' }}>Industry, Market & Competitor Analysis</div>
              <div data-label="1" style={{ ...FACET_LABEL, left: '453.2px', top: '106.8px' }}>Fundraising & Capital Strategy</div>
              <div data-label="2" style={{ ...FACET_LABEL, left: '530px', top: '280px' }}>CRM & Investor Pipeline</div>
              <div data-label="3" style={{ ...FACET_LABEL, left: '453.2px', top: '453.2px' }}>Go-to-Market Strategy</div>
              <div data-label="4" style={{ ...FACET_LABEL, left: '280px', top: '505px' }}>Pitch Deck Development</div>
              <div data-label="5" style={{ ...FACET_LABEL, left: '106.8px', top: '453.2px' }}>Beta Tester Database and Interview Strategy</div>
              <div data-label="6" style={{ ...FACET_LABEL, left: '30px', top: '280px' }}>AI Adoption</div>
              <div data-label="7" style={{ ...FACET_LABEL, left: '106.8px', top: '106.8px' }}>Resource Access</div>
            </div>
            <div>
              <p data-active-num-2="" style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', letterSpacing: '.14em', fontSize: '12.5px', fontWeight: '700', color: 'var(--purple,#3a1fb0)', margin: '0 0 14px', minHeight: '16px' }}>
              </p>
              <h3 data-active-title="" style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '600', fontSize: 'clamp(24px,2.6vw,32px)', lineHeight: '1.15', margin: '0 0 16px', minHeight: '1.15em' }}>Hover over a facet to learn more</h3>
              <p data-active-desc="" style={{ fontSize: '17px', lineHeight: '1.6', color: 'rgba(36,20,84,.72)', margin: '0', maxWidth: '440px' }}>A customizable menu of support options to help you build traction and investor readiness.</p>
              <p style={{ fontSize: '14px', lineHeight: '1.5', color: 'rgba(36,20,84,.55)', margin: '64px 0 0', maxWidth: '440px' }}>This is just a starting point! Don&apos;t see what you need here? Reach out to us directly at <a href="mailto:hello.growthstudio@gmail.com" style={{ color: 'var(--purple,#3a1fb0)', textDecoration: 'underline' }}>hello.growthstudio@gmail.com</a>
            </p>
          </div>
        </div>
        </section>
        <div style={{ background: '#f6f5fb', borderTop: '1px solid rgba(36,20,84,.09)' }}>
          <section id="s-voices" style={{ maxWidth: '1200px', margin: '0 auto', padding: '76px 32px 88px' }}>
            <div data-reveal="" style={{ marginBottom: '40px', maxWidth: '680px' }}>
              <p style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', letterSpacing: '.16em', fontSize: '13px', fontWeight: '700', color: 'var(--purple,#3a1fb0)', margin: '0 0 16px' }}>STARTUPS WE&apos;VE WORKED WITH</p>
              <h2 style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '700', fontSize: 'clamp(32px,4vw,52px)', lineHeight: '1.02', letterSpacing: '-.02em', margin: '0' }}>Growth Studio supports founders across industries.</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px', alignItems: 'stretch' }}>
              <a data-reveal="" data-delay="0" href="https://www.heylist.com/" target="_blank" rel="noopener" style={{ background: '#fbfbff', border: '1px solid rgba(36,20,84,.16)', borderRadius: '3px', padding: '34px 30px', display: 'flex', flexDirection: 'column', gap: '22px', textDecoration: 'none', color: 'inherit', cursor: 'pointer', transition: 'border-color .2s ease, transform .2s ease' }}>
                <Image src="/growth-studio/startup-logo-free-for-founders.png" alt="Heylist" width={1881} height={987} style={{ maxHeight: '96px', maxWidth: '100%', objectFit: 'contain', width: '195px', height: '105px' }} />
                <div style={{ fontSize: '16px', color: 'rgba(36,20,84,.6)' }}>&quot;I&apos;m definitely using this in my marketing work.&quot; <i>-&nbsp;Emely Rodriguez (Community Manager)</i></div>
                <div style={{ marginTop: 'auto' }}>
                  <div style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '700', fontSize: '18px', margin: '0 0 4px' }}>Heylist</div>
                  <div style={{ fontSize: '14px', color: 'rgba(36,20,84,.6)' }}>Creative Tech</div>
                </div>
              </a>
              <a data-reveal="" data-delay="120" href="https://aerocellutions.com/" target="_blank" rel="noopener" style={{ background: 'var(--purple,#3a1fb0)', color: '#fff', borderRadius: '3px', padding: '34px 30px', display: 'flex', flexDirection: 'column', gap: '22px', textDecoration: 'none', cursor: 'pointer', transition: 'transform .2s ease' }}>
                <Image src="/growth-studio/startup-logo-hands-on-execution.png" alt="Aerocellutions" width={200} height={200} style={{ height: '105px', maxWidth: '100%', objectFit: 'contain', objectPosition: 'center' }} />
                <blockquote style={{ margin: '0', fontSize: '16px', lineHeight: '1.55', fontWeight: '500', color: 'rgba(255,255,255,.92)' }}>&quot;Working with Growth Studio was a game-changer.&quot; <i>- Carolyn Denton (Founder)</i></blockquote>
                <div style={{ marginTop: 'auto' }}>
                  <div style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '700', fontSize: '18px', margin: '0 0 4px' }}>Aerocellutions</div>
                  <div style={{ fontSize: '14px', color: 'rgba(255,255,255,.7)' }}>Climate Tech</div>
                </div>
              </a>
              <a data-reveal="" data-delay="240" href="https://mypipdev.com/" target="_blank" rel="noopener" style={{ background: '#fbfbff', border: '1px solid rgba(36,20,84,.16)', borderRadius: '3px', padding: '34px 30px', display: 'flex', flexDirection: 'column', gap: '22px', textDecoration: 'none', color: 'inherit', cursor: 'pointer', transition: 'border-color .2s ease, transform .2s ease' }}>
                <Image src="/growth-studio/startup-logo-generic.png" alt="MyPip" width={200} height={200} style={{ maxHeight: '96px', maxWidth: '100%', objectFit: 'contain' }} />
                <div style={{ fontSize: '16px', color: 'rgba(36,20,84,.6)' }}>&quot;The [Growth Studio consultants] surfaced a lot of ideas I hadn&apos;t thought of yet&quot; <i>-&nbsp;Misha Stastna (Founder)</i></div>
                <div style={{ marginTop: 'auto' }}>
                  <div style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '700', fontSize: '18px', margin: '0 0 4px' }}>MyPip</div>
                  <div style={{ fontSize: '14px', color: 'rgba(36,20,84,.6)' }}>AI SaaS</div>
                </div>
              </a>
            </div>
          </section>
        </div>
        <section id="s-apply" data-signup="" style={{ maxWidth: '1200px', margin: '0 auto 120px', padding: '72px 32px 0' }}>
          <div data-reveal="" style={{ position: 'relative', overflow: 'hidden', background: 'var(--yellow,#f3f13a)', color: 'var(--purple,#3a1fb0)', borderRadius: '4px', padding: '84px 64px' }}>
            <div data-float="" style={{ position: 'absolute', right: '-70px', top: '-70px', width: '260px', height: '260px', borderRadius: '50%', border: '1.5px solid rgba(36,20,84,.18)', animation: 'gs-spinR 50s linear infinite' }}>
            </div>
            <div data-float="" style={{ position: 'absolute', right: '120px', bottom: '-50px', width: '120px', height: '120px', background: 'rgba(36,20,84,.08)', transform: 'rotate(20deg)', animation: 'gs-floatY 8s ease-in-out infinite' }}>
            </div>
            <div style={{ position: 'relative', maxWidth: '560px' }}>
              <p style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', letterSpacing: '.16em', fontSize: '13px', fontWeight: '700', color: 'rgba(36,20,84,.7)', margin: '0 0 18px' }}>APPLICATIONS FOR OUR FALL 2026 INTAKE OPEN NOW</p>
              <h2 style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '700', fontSize: 'clamp(32px,4.4vw,54px)', lineHeight: '1.0', letterSpacing: '-.02em', margin: '0 0 18px' }}>Let&apos;s build your next phase.</h2>
              <p style={{ fontSize: '18px', lineHeight: '1.55', color: 'rgba(36,20,84,.82)', margin: '0 0 30px' }}>Every founder journey is unique, and the team at Growth Studio aims to tailor our work to maximize impact on each startup we partner with. We&apos;d love to connect to explore how we can best support you based on your current stage and goals.</p>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSfNMLYY5THSx6F1WPXlK11zS2q7JiSHNCRekzMAEEbHZl54rQ/viewform?usp=header" target="_blank" rel="noopener" data-hover={`{"transform":"translateY(-2px)"}`} style={{ textDecoration: 'none', background: 'var(--purple,#3a1fb0)', color: '#f3f13a', fontWeight: '700', fontSize: '16px', fontFamily: 'var(--font-space-grotesk),sans-serif', padding: '15px 28px', borderRadius: '2px', display: 'inline-flex', alignItems: 'center', gap: '10px', transition: 'transform .18s ease' }}>Fill out our startup intake form <span style={{ fontSize: '18px', lineHeight: '1' }}>→</span>
            </a>
            <p style={{ fontSize: '15.5px', lineHeight: '1.5', color: 'rgba(36,20,84,.68)', margin: '22px 0 0' }}>Or contact us directly at <a href="mailto:hello.growthstudio@gmail.com" style={{ color: 'var(--purple,#3a1fb0)', fontWeight: '700' }}>hello.growthstudio@gmail.com</a>
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
