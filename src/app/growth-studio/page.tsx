import type { Metadata } from "next";
import Image from "next/image";
import Nav from "./_components/Nav";
import Footer from "./_components/Footer";
import Interactions from "./_components/Interactions";

export const metadata: Metadata = {
  title: "Growth Studio — Startup consulting by McGill Ventures",
  description: "Growth Studio by McGill Ventures pairs early-stage founders with student consultants for free, hands-on strategy and fundraising support — helping you become investor-ready.",
  openGraph: {
    title: "Growth Studio — Startup consulting by McGill Ventures",
    description: "Free, hands-on strategy and fundraising support for pre-seed and seed-stage founders, powered by McGill Ventures.",
    type: "website",
    url: "https://www.mcgillvc.ca/growth-studio",
    images: "/growth-studio/hero-founders.webp",
  },
  twitter: {
    card: "summary_large_image",
    title: "Growth Studio — Startup consulting by McGill Ventures",
    description: "Free, hands-on strategy and fundraising support for pre-seed and seed-stage founders, powered by McGill Ventures.",
    images: "/growth-studio/hero-founders.webp",
  },
};

export default function GrowthStudioPage() {
  return (
    <>
      <Nav active={null} ctaHref={"#apply"} />
      <main>
        <div style={{ background: 'var(--yellow,#f3f13a)', padding: '12px 32px', textAlign: 'center' }}>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSfNMLYY5THSx6F1WPXlK11zS2q7JiSHNCRekzMAEEbHZl54rQ/viewform?usp=header" target="_blank" rel="noopener" style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '700', fontSize: '14px', letterSpacing: '.08em', color: 'var(--purple,#3a1fb0)', textDecoration: 'underline' }}>STARTUPS: INTAKE APPLICATIONS ARE NOW OPEN</a>
        </div>
        <header className="gs-wrap" id="top" style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto', padding: '56px 32px 80px' }}>
          <div className="gs-grid" style={{ display: 'grid', gridTemplateColumns: '1.08fr .92fr', gap: '56px', alignItems: 'center' }}>
            <div>
              <h1 data-reveal="" data-delay="80" style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '700', fontSize: 'clamp(42px,5.6vw,74px)', lineHeight: '.98', letterSpacing: '-.025em', margin: '0 0 24px' }}>
                We help founders become <span style={{ color: 'var(--purple,#3a1fb0)' }}>investor-ready.</span>
              </h1>
              <p data-reveal="" data-delay="160" style={{ fontSize: '19px', lineHeight: '1.55', maxWidth: '540px', color: 'rgba(36,20,84,.78)', margin: '0 0 34px' }}>Free, hands-on consulting for early-stage founders. Growth Studio pairs you with trained student consultants who tailor the engagement to your needs then execute alongside you. Backed by the McGill Ventures network of funds and founder communities.</p>
              <div data-reveal="" data-delay="240" style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center' }}>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfNMLYY5THSx6F1WPXlK11zS2q7JiSHNCRekzMAEEbHZl54rQ/viewform?usp=header" target="_blank" rel="noopener" data-hover={`{"transform":"translateY(-2px)","boxShadow":"0 12px 28px rgba(58,31,176,.32)"}`} style={{ textDecoration: 'none', background: 'var(--purple,#3a1fb0)', color: '#f3f13a', fontWeight: '700', fontSize: '16px', padding: '15px 28px', borderRadius: '2px', display: 'inline-flex', alignItems: 'center', gap: '10px', transition: 'transform .18s ease,box-shadow .18s ease' }}>
                  <div>Fill out our startup intake form<br />
                </div>
                <span style={{ fontSize: '18px', lineHeight: '1' }}>→</span>
              </a>
              <a href="#how" data-hover={`{"background":"rgba(36,20,84,.05)"}`} style={{ textDecoration: 'none', color: '#241454', fontWeight: '600', fontSize: '16px', padding: '15px 24px', borderRadius: '2px', border: '1px solid rgba(36,20,84,.25)', transition: 'background .18s ease,border-color .18s ease' }}>How we help</a>
            </div>
          </div>
          <div className="gs-hero-img" style={{ position: 'relative', height: '480px', borderRadius: '4px', overflow: 'hidden' }}>
            <Image src="/growth-studio/hero-founders.webp" alt="Growth Studio founders working together" fill sizes="(max-width: 900px) 100vw, 50vw" style={{ objectFit: 'cover' }} priority />
            <div style={{ position: 'absolute', inset: '0', background: 'linear-gradient(160deg,rgba(58,31,176,.22),rgba(36,20,84,0) 55%)', pointerEvents: 'none' }}>
            </div>
          </div>
        </div>
        </header>
        <section id="who" style={{ background: 'var(--purple,#3a1fb0)', color: '#fff', position: 'relative', overflow: 'hidden' }}>
          <div data-float="" style={{ position: 'absolute', right: '-90px', top: '-90px', width: '300px', height: '300px', borderRadius: '50%', border: '1.5px solid rgba(255,255,255,.14)', animation: 'gs-spin 60s linear infinite' }}>
          </div>
          <div style={{ position: 'absolute', left: '-60px', bottom: '-60px', width: '180px', height: '180px', borderRadius: '50%', background: 'rgba(243,241,58,.14)' }}>
          </div>
          <div className="gs-grid gs-wrap" style={{ maxWidth: '1200px', margin: '0 auto', padding: '96px 32px', position: 'relative', display: 'grid', gridTemplateColumns: '.85fr 1.15fr', gap: '56px', alignItems: 'start' }}>
            <div data-reveal="">
              <p style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', letterSpacing: '.16em', fontSize: '13px', fontWeight: '700', color: 'var(--yellow,#f3f13a)', margin: '0 0 16px' }}>WHO WE WORK WITH</p>
              <h2 style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '700', fontSize: 'clamp(30px,3.6vw,44px)', lineHeight: '1.05', letterSpacing: '-.02em', margin: '0' }}>Sector agnostic. Founder focused.</h2>
            </div>
            <div data-reveal="" data-delay="120">
              <p style={{ fontSize: '19px', lineHeight: '1.6', color: 'rgba(255,255,255,.88)', margin: '0 0 26px' }}>We partner with <strong>pre-seed and seed-stage</strong> companies led by curious, coachable founders seeking clarity in fundraising and growth strategy, from software to biotech.</p>
              <div style={{ borderLeft: '3px solid var(--yellow,#f3f13a)', paddingLeft: '20px' }}>
                <p style={{ fontSize: '16px', lineHeight: '1.6', color: 'rgba(255,255,255,.75)', margin: '0' }}>Built to close the knowledge gap founders face in go-to-market strategy and VC fundraising. <strong style={{ color: '#fff' }}>Engagements span four weeks minimum and can be customized to your needs.</strong></p>
              </div>
            </div>
          </div>
        </section>
        <div style={{ background: '#f6f5fb' }}>
          <section className="gs-wrap" id="network" style={{ maxWidth: '1200px', margin: '0 auto', padding: '120px 32px 100px' }}>
            <div data-reveal="" style={{ maxWidth: '720px', marginBottom: '40px' }}>
              <p style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', letterSpacing: '.16em', fontSize: '13px', fontWeight: '700', color: 'var(--purple,#3a1fb0)', margin: '0 0 16px' }}>OUR NETWORK</p>
              <h2 style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '700', fontSize: 'clamp(32px,4vw,52px)', lineHeight: '1.02', letterSpacing: '-.02em', margin: '0 0 20px' }}>We live and breathe the startup world.</h2>
              <p style={{ fontSize: '18px', lineHeight: '1.6', color: 'rgba(36,20,84,.75)', margin: '0' }}>Growth Studio sits inside McGill Ventures&apos; network of investors, accelerators, and founder communities.</p>
            </div>
            <div className="gs-grid gs-grid-logos" data-reveal="" data-delay="80" style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: '14px' }}>
              <a href="https://frontrow.ventures/" target="_blank" rel="noopener" data-hover={`{"borderColor":"var(--purple,#3a1fb0)"}`} style={{ textDecoration: 'none', color: '#241454', textAlign: 'center', background: '#fff', border: '1px solid rgba(36,20,84,.14)', borderRadius: '3px', padding: '22px 16px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'border-color .18s ease' }}>
                <Image src="/growth-studio/front-row-ventures.webp" alt="Front Row Ventures" width={670} height={235} style={{ maxWidth: '100%', maxHeight: '36px', objectFit: 'contain' }} />
              </a>
              <a href="https://www.mcgill.ca/innovation/" target="_blank" rel="noopener" data-hover={`{"borderColor":"var(--purple,#3a1fb0)"}`} style={{ textDecoration: 'none', color: '#241454', textAlign: 'center', background: '#fff', border: '1px solid rgba(36,20,84,.14)', borderRadius: '3px', padding: '22px 16px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'border-color .18s ease' }}>
                <Image src="/growth-studio/mcgill-innovation-fund.png" alt="McGill Innovation Fund" width={220} height={83} style={{ maxWidth: '100%', maxHeight: '36px', objectFit: 'contain' }} />
              </a>
              <a href="https://180dc.org/" target="_blank" rel="noopener" data-hover={`{"borderColor":"var(--purple,#3a1fb0)"}`} style={{ textDecoration: 'none', color: '#241454', textAlign: 'center', background: '#fff', border: '1px solid rgba(36,20,84,.14)', borderRadius: '3px', padding: '22px 16px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'border-color .18s ease' }}>
                <Image src="/growth-studio/180-degrees-consulting.avif" alt="180 Degrees Consulting" width={2619} height={748} style={{ maxWidth: '100%', maxHeight: '36px', objectFit: 'contain' }} />
              </a>
              <a href="https://www.productshop.io/" target="_blank" rel="noopener" data-hover={`{"borderColor":"var(--purple,#3a1fb0)"}`} style={{ textDecoration: 'none', color: '#241454', textAlign: 'center', background: '#242b28', border: '1px solid rgba(36,20,84,.14)', borderRadius: '3px', padding: '22px 16px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'border-color .18s ease', overflow: 'hidden' }}>
                <Image src="/growth-studio/productshop.png" alt="ProductShop" width={1200} height={627} style={{ maxWidth: '100%', maxHeight: '52px', objectFit: 'contain' }} />
              </a>
              <a href="https://luneacapital.com/en" target="_blank" rel="noopener" data-hover={`{"borderColor":"var(--purple,#3a1fb0)"}`} style={{ textDecoration: 'none', color: '#241454', textAlign: 'center', background: '#16324a', border: '1px solid rgba(36,20,84,.14)', borderRadius: '3px', padding: '22px 16px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'border-color .18s ease', overflow: 'hidden' }}>
                <Image src="/growth-studio/lunea-capital.png" alt="Lunea Capital" width={702} height={294} style={{ maxWidth: '100%', maxHeight: '44px', objectFit: 'contain' }} />
              </a>
              <a href="https://www.propelimpact.com/" target="_blank" rel="noopener" data-hover={`{"borderColor":"var(--purple,#3a1fb0)"}`} style={{ textDecoration: 'none', color: '#241454', textAlign: 'center', background: '#0a615c', border: '1px solid rgba(36,20,84,.14)', borderRadius: '3px', padding: '22px 16px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'border-color .18s ease' }}>
                <Image src="/growth-studio/propel-impact.png" alt="Propel Impact" width={800} height={459} style={{ maxWidth: '100%', maxHeight: '36px', objectFit: 'contain' }} />
              </a>
              <a href="https://www.dormroomfund.com/" target="_blank" rel="noopener" data-hover={`{"borderColor":"var(--purple,#3a1fb0)"}`} style={{ textDecoration: 'none', color: '#241454', textAlign: 'center', background: '#fff', border: '1px solid rgba(36,20,84,.14)', borderRadius: '3px', padding: '22px 16px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'border-color .18s ease' }}>
                <Image src="/growth-studio/dorm-room-fund.svg" alt="Dorm Room Fund" width={195} height={28} style={{ maxWidth: '100%', maxHeight: '36px', objectFit: 'contain' }} />
              </a>
              <a href="https://www.project-atlas.ca/" target="_blank" rel="noopener" data-hover={`{"borderColor":"var(--purple,#3a1fb0)"}`} style={{ textDecoration: 'none', color: '#241454', textAlign: 'center', background: '#fff', border: '1px solid rgba(36,20,84,.14)', borderRadius: '3px', padding: '22px 16px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '600', fontSize: '14.5px', transition: 'border-color .18s ease' }}>
                <Image src="/growth-studio/icon-32.webp" alt="" width={64} height={64} style={{ width: '32px', height: '32px', objectFit: 'contain', flex: 'none' }} />Project Atlas</a>
                <a href="https://www.mcgillbiodesign.com/" target="_blank" rel="noopener" data-hover={`{"borderColor":"var(--purple,#3a1fb0)"}`} style={{ textDecoration: 'none', color: '#241454', textAlign: 'center', background: '#fff', border: '1px solid rgba(36,20,84,.14)', borderRadius: '3px', padding: '22px 16px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'border-color .18s ease' }}>
                  <Image src="/growth-studio/mcgill-biodesign.avif" alt="McGill BioDesign" width={384} height={108} style={{ maxWidth: '100%', maxHeight: '36px', objectFit: 'contain' }} />
                </a>
                <a href="https://igem.org.mcgill.ca/" target="_blank" rel="noopener" data-hover={`{"borderColor":"var(--purple,#3a1fb0)"}`} style={{ textDecoration: 'none', color: '#241454', textAlign: 'center', background: '#fff', border: '1px solid rgba(36,20,84,.14)', borderRadius: '3px', padding: '22px 16px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'border-color .18s ease' }}>
                  <Image src="/growth-studio/logo-mcgill-igem.webp" alt="McGill iGEM" width={240} height={75} style={{ maxWidth: '100%', maxHeight: '36px', objectFit: 'contain' }} />
                </a>
                <a href="https://www.opennote.com/" target="_blank" rel="noopener" data-hover={`{"borderColor":"var(--purple,#3a1fb0)"}`} style={{ textDecoration: 'none', color: '#241454', textAlign: 'center', background: '#fff', border: '1px solid rgba(36,20,84,.14)', borderRadius: '3px', padding: '22px 16px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'border-color .18s ease' }}>
                  <Image src="/growth-studio/opennote.png" alt="Opennote" width={846} height={216} style={{ maxWidth: '100%', maxHeight: '36px', objectFit: 'contain' }} />
                </a>
                <a href="https://www.polymtl.ca/propolys/" target="_blank" rel="noopener" data-hover={`{"borderColor":"var(--purple,#3a1fb0)"}`} style={{ textDecoration: 'none', color: '#241454', textAlign: 'center', background: '#fff', border: '1px solid rgba(36,20,84,.14)', borderRadius: '3px', padding: '22px 16px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'border-color .18s ease' }}>
                  <Image src="/growth-studio/propolys.png" alt="Propolys" width={2186} height={261} style={{ maxWidth: '100%', maxHeight: '36px', objectFit: 'contain' }} />
                </a>
                <a href="https://www.nordconsulting.ca/" target="_blank" rel="noopener" data-hover={`{"borderColor":"var(--purple,#3a1fb0)"}`} style={{ textDecoration: 'none', color: '#241454', textAlign: 'center', background: '#fff', border: '1px solid rgba(36,20,84,.14)', borderRadius: '3px', padding: '10px 16px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'border-color .18s ease' }}>
                  <Image src="/growth-studio/nord-consulting.jpg" alt="NORD Consulting" width={447} height={447} style={{ maxWidth: '100%', maxHeight: '60px', objectFit: 'contain' }} />
                </a>
                <a href="https://zumtl.com/fr/" target="_blank" rel="noopener" data-hover={`{"borderColor":"var(--purple,#3a1fb0)"}`} style={{ textDecoration: 'none', color: '#241454', textAlign: 'center', background: '#fff', border: '1px solid rgba(36,20,84,.14)', borderRadius: '3px', padding: '10px 16px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'border-color .18s ease' }}>
                  <Image src="/growth-studio/zu.jpg" alt="Zú" width={408} height={292} style={{ maxWidth: '100%', maxHeight: '60px', objectFit: 'contain' }} />
                </a>
                <a href="https://www.mcgill.ca/engine/funding-programs/students/techaccel-program" target="_blank" rel="noopener" data-hover={`{"borderColor":"var(--purple,#3a1fb0)"}`} style={{ textDecoration: 'none', color: '#241454', textAlign: 'center', background: '#fff', border: '1px solid rgba(36,20,84,.14)', borderRadius: '3px', padding: '22px 16px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'border-color .18s ease' }}>
                  <Image src="/growth-studio/mcgill-engine.jpg" alt="McGill Engine" width={930} height={210} style={{ maxWidth: '100%', maxHeight: '36px', objectFit: 'contain' }} />
                </a>
              </div>
            </section>
          </div>
          <section className="gs-wrap" id="how" style={{ maxWidth: '1200px', margin: '0 auto', padding: '120px 32px' }}>
            <div data-reveal="" style={{ maxWidth: '680px', marginBottom: '56px' }}>
              <p style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', letterSpacing: '.16em', fontSize: '13px', fontWeight: '700', color: 'var(--purple,#3a1fb0)', margin: '0 0 16px' }}>HOW WE HELP</p>
              <h2 style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '700', fontSize: 'clamp(32px,4vw,52px)', lineHeight: '1.02', letterSpacing: '-.02em', margin: '0' }}>Eight ways we get founders investor-ready.</h2>
            </div>
            <div className="gs-grid gs-radar-grid" data-reveal="" data-delay="80" style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '56px', alignItems: 'center' }}>
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
                <div data-label="0" style={{ position: 'absolute', left: '280px', top: '55px', transform: 'translate(-50%,-50%)', width: '118px', textAlign: 'center', fontFamily: 'var(--font-space-grotesk),sans-serif', fontSize: '12.5px', fontWeight: '700', lineHeight: '1.3', color: '#241454', background: '#fff', border: '1.5px solid rgba(36,20,84,.28)', borderRadius: '4px', padding: '9px 8px', boxShadow: '0 3px 0 rgba(36,20,84,.28)', cursor: 'pointer', transition: 'transform .15s ease,box-shadow .15s ease,background .2s ease,color .2s ease,border-color .2s ease' }}>Industry, Market & Competitor Analysis</div>
                <div data-label="1" style={{ position: 'absolute', left: '453.2px', top: '106.8px', transform: 'translate(-50%,-50%)', width: '118px', textAlign: 'center', fontFamily: 'var(--font-space-grotesk),sans-serif', fontSize: '12.5px', fontWeight: '700', lineHeight: '1.3', color: '#241454', background: '#fff', border: '1.5px solid rgba(36,20,84,.28)', borderRadius: '4px', padding: '9px 8px', boxShadow: '0 3px 0 rgba(36,20,84,.28)', cursor: 'pointer', transition: 'transform .15s ease,box-shadow .15s ease,background .2s ease,color .2s ease,border-color .2s ease' }}>Fundraising & Capital Strategy</div>
                <div data-label="2" style={{ position: 'absolute', left: '530px', top: '280px', transform: 'translate(-50%,-50%)', width: '118px', textAlign: 'center', fontFamily: 'var(--font-space-grotesk),sans-serif', fontSize: '12.5px', fontWeight: '700', lineHeight: '1.3', color: '#241454', background: '#fff', border: '1.5px solid rgba(36,20,84,.28)', borderRadius: '4px', padding: '9px 8px', boxShadow: '0 3px 0 rgba(36,20,84,.28)', cursor: 'pointer', transition: 'transform .15s ease,box-shadow .15s ease,background .2s ease,color .2s ease,border-color .2s ease' }}>CRM & Investor Pipeline</div>
                <div data-label="3" style={{ position: 'absolute', left: '453.2px', top: '453.2px', transform: 'translate(-50%,-50%)', width: '118px', textAlign: 'center', fontFamily: 'var(--font-space-grotesk),sans-serif', fontSize: '12.5px', fontWeight: '700', lineHeight: '1.3', color: '#241454', background: '#fff', border: '1.5px solid rgba(36,20,84,.28)', borderRadius: '4px', padding: '9px 8px', boxShadow: '0 3px 0 rgba(36,20,84,.28)', cursor: 'pointer', transition: 'transform .15s ease,box-shadow .15s ease,background .2s ease,color .2s ease,border-color .2s ease' }}>Go-to-Market Strategy</div>
                <div data-label="4" style={{ position: 'absolute', left: '280px', top: '505px', transform: 'translate(-50%,-50%)', width: '118px', textAlign: 'center', fontFamily: 'var(--font-space-grotesk),sans-serif', fontSize: '12.5px', fontWeight: '700', lineHeight: '1.3', color: '#241454', background: '#fff', border: '1.5px solid rgba(36,20,84,.28)', borderRadius: '4px', padding: '9px 8px', boxShadow: '0 3px 0 rgba(36,20,84,.28)', cursor: 'pointer', transition: 'transform .15s ease,box-shadow .15s ease,background .2s ease,color .2s ease,border-color .2s ease' }}>Pitch Deck Development</div>
                <div data-label="5" style={{ position: 'absolute', left: '106.8px', top: '453.2px', transform: 'translate(-50%,-50%)', width: '118px', textAlign: 'center', fontFamily: 'var(--font-space-grotesk),sans-serif', fontSize: '12.5px', fontWeight: '700', lineHeight: '1.3', color: '#241454', background: '#fff', border: '1.5px solid rgba(36,20,84,.28)', borderRadius: '4px', padding: '9px 8px', boxShadow: '0 3px 0 rgba(36,20,84,.28)', cursor: 'pointer', transition: 'transform .15s ease,box-shadow .15s ease,background .2s ease,color .2s ease,border-color .2s ease' }}>Beta Tester Database and Interview Strategy</div>
                <div data-label="6" style={{ position: 'absolute', left: '30px', top: '280px', transform: 'translate(-50%,-50%)', width: '118px', textAlign: 'center', fontFamily: 'var(--font-space-grotesk),sans-serif', fontSize: '12.5px', fontWeight: '700', lineHeight: '1.3', color: '#241454', background: '#fff', border: '1.5px solid rgba(36,20,84,.28)', borderRadius: '4px', padding: '9px 8px', boxShadow: '0 3px 0 rgba(36,20,84,.28)', cursor: 'pointer', transition: 'transform .15s ease,box-shadow .15s ease,background .2s ease,color .2s ease,border-color .2s ease' }}>AI Adoption</div>
                <div data-label="7" style={{ position: 'absolute', left: '106.8px', top: '106.8px', transform: 'translate(-50%,-50%)', width: '118px', textAlign: 'center', fontFamily: 'var(--font-space-grotesk),sans-serif', fontSize: '12.5px', fontWeight: '700', lineHeight: '1.3', color: '#241454', background: '#fff', border: '1.5px solid rgba(36,20,84,.28)', borderRadius: '4px', padding: '9px 8px', boxShadow: '0 3px 0 rgba(36,20,84,.28)', cursor: 'pointer', transition: 'transform .15s ease,box-shadow .15s ease,background .2s ease,color .2s ease,border-color .2s ease' }}>Resource Access</div>
              </div>
              <div>
                <p data-active-num-2="" style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', letterSpacing: '.14em', fontSize: '12.5px', fontWeight: '700', color: 'var(--purple,#3a1fb0)', margin: '0 0 14px', minHeight: '16px' }}>
                </p>
                <h3 data-active-title="" style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '600', fontSize: 'clamp(24px,2.6vw,32px)', lineHeight: '1.15', margin: '0 0 16px', minHeight: '1.15em' }}>Tap or hover a facet to learn more</h3>
                <p data-active-desc="" style={{ fontSize: '17px', lineHeight: '1.6', color: 'rgba(36,20,84,.72)', margin: '0', maxWidth: '440px' }}>A customizable menu of support options to help you build traction and investor readiness.</p>
                <p style={{ fontSize: '14px', lineHeight: '1.5', color: 'rgba(36,20,84,.55)', margin: '64px 0 0', maxWidth: '440px' }}>This is just a starting point! Don&apos;t see what you need here? Reach out to us directly at <a href="mailto:hello.growthstudio@gmail.com" style={{ color: 'var(--purple,#3a1fb0)', textDecoration: 'underline' }}>hello.growthstudio@gmail.com</a>
              </p>
            </div>
          </div>
        </section>
        <section id="impact" style={{ background: 'var(--purple,#3a1fb0)', color: '#fff', position: 'relative', overflow: 'hidden' }}>
          <div data-float="" style={{ position: 'absolute', right: '-70px', bottom: '-70px', width: '260px', height: '260px', borderRadius: '50%', border: '1.5px solid rgba(255,255,255,.16)', animation: 'gs-spinR 55s linear infinite' }}>
          </div>
          <div className="gs-grid gs-wrap" style={{ maxWidth: '1200px', margin: '0 auto', padding: '96px 32px', position: 'relative', display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: '48px', alignItems: 'center' }}>
            <div data-reveal="">
              <p style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', letterSpacing: '.16em', fontSize: '13px', fontWeight: '700', color: 'var(--yellow,#f3f13a)', margin: '0 0 18px' }}>RECENT IMPACT</p>
              <h2 style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '700', fontSize: 'clamp(28px,3.2vw,40px)', lineHeight: '1.12', letterSpacing: '-.02em', margin: '0 0 22px' }}>Market research, commercial strategy, and pitch-ready founders.</h2>
              <p style={{ fontSize: '17px', lineHeight: '1.6', color: 'rgba(255,255,255,.82)', margin: '0' }}>In Growth Studio&apos;s inaugural year, our consultants prepped <strong><a href="https://aerocellutions.com/" target="_blank" rel="noopener" style={{ color: 'rgba(255,255,255,.82)' }}>AeroCellutions</a></strong> ahead of the 2026 BioDesign Challenge with commercial analysis and pitch refinement, and supported Waterloo-based <strong><a href="https://mypipdev.com/" target="_blank" rel="noopener" style={{ color: 'rgba(255,255,255,.82)' }}>MyPip</a></strong> (named top 100 AI startup in Canada) in its early growth work.</p>
            </div>
            <div data-reveal="" data-delay="140" style={{ position: 'relative', overflow: 'hidden', background: 'var(--yellow,#f3f13a)', color: 'var(--purple,#3a1fb0)', borderRadius: '4px', textAlign: 'center' }}>
              <Image src="/growth-studio/aerocellutions-biodesign.jpg" alt="AeroCellutions team at the 2026 BioDesign Challenge" width={800} height={533} style={{ width: '100%', height: '260px', objectFit: 'cover', objectPosition: 'center 20%', display: 'block' }} />
              <div style={{ padding: '12px 30px 40px' }}>
                <div style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '700', fontSize: 'clamp(48px,6vw,72px)', lineHeight: '1', letterSpacing: '-.02em' }}>2<sup style={{ fontSize: '.42em' }}>ND</sup>
              </div>
              <div style={{ marginTop: '14px', fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '700', fontSize: '14px', letterSpacing: '.06em', lineHeight: '1.5' }}>PLACE OVERALL<br />
              <i>2026 BIODESIGN CHALLENGE</i>
            </div>
          </div>
        </div>
        </div>
        </section>
        <section className="gs-wrap" id="apply" data-signup="" style={{ maxWidth: '1200px', margin: '0 auto 120px', padding: '130px 32px 0' }}>
          <div className="gs-card-pad" data-reveal="" style={{ position: 'relative', overflow: 'hidden', background: 'var(--yellow,#f3f13a)', color: 'var(--purple,#3a1fb0)', borderRadius: '4px', padding: '84px 64px' }}>
            <div data-float="" style={{ position: 'absolute', right: '-70px', top: '-70px', width: '260px', height: '260px', borderRadius: '50%', border: '1.5px solid rgba(36,20,84,.18)', animation: 'gs-spinR 50s linear infinite' }}>
            </div>
            <div data-float="" style={{ position: 'absolute', right: '120px', bottom: '-50px', width: '120px', height: '120px', background: 'rgba(36,20,84,.08)', transform: 'rotate(20deg)', animation: 'gs-floatY 8s ease-in-out infinite' }}>
            </div>
            <div style={{ position: 'relative', maxWidth: '560px' }}>
              <p style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', letterSpacing: '.16em', fontSize: '13px', fontWeight: '700', color: 'rgba(36,20,84,.7)', margin: '0 0 18px' }}>APPLICATIONS FOR OUR FALL 2026 COHORT OPEN NOW</p>
              <h2 style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '700', fontSize: 'clamp(32px,4.4vw,54px)', lineHeight: '1.0', letterSpacing: '-.02em', margin: '0 0 18px' }}>Let&apos;s build your next phase.</h2>
              <p style={{ fontSize: '18px', lineHeight: '1.55', color: 'rgba(36,20,84,.82)', margin: '0 0 30px' }}>Every founder journey is unique, and the team at Growth Studio aims to tailor our work to maximize impact on each startup we partner with. We&apos;d love to connect to explore how we can best support you based on your current stage and goals.</p>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSfNMLYY5THSx6F1WPXlK11zS2q7JiSHNCRekzMAEEbHZl54rQ/viewform?usp=header" target="_blank" rel="noopener" data-hover={`{"transform":"translateY(-2px)"}`} style={{ textDecoration: 'none', background: 'var(--purple,#3a1fb0)', color: '#f3f13a', fontWeight: '700', fontSize: '16px', fontFamily: 'var(--font-space-grotesk),sans-serif', padding: '15px 28px', borderRadius: '2px', display: 'inline-flex', alignItems: 'center', gap: '10px', transition: 'transform .18s ease' }}>Fill out our startup intake form <span style={{ fontSize: '18px', lineHeight: '1' }}>→</span>
            </a>
            <p style={{ fontSize: '15.5px', lineHeight: '1.5', color: 'rgba(36,20,84,.68)', margin: '22px 0 0' }}>Questions about how the process works? Contact us directly at <a href="mailto:hello.growthstudio@gmail.com" style={{ color: 'var(--purple,#3a1fb0)', fontWeight: '700' }}>hello.growthstudio@gmail.com</a>
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
