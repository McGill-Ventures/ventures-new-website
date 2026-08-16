import type { Metadata } from "next";
import Image from "next/image";
import Nav from "../_components/Nav";
import Footer from "../_components/Footer";
import Interactions from "../_components/Interactions";

export const metadata: Metadata = {
  title: "Partner With Us — Growth Studio",
  description: "A direct line into student venture. Growth Studio connects the VC ecosystem to McGill founders through market research, commercial strategy, and pitch-ready teams.",
  openGraph: {
    title: "Partner With Us — Growth Studio",
    description: "A direct line into student venture. Growth Studio connects the VC ecosystem to McGill founders through market research, commercial strategy, and pitch-ready teams.",
    type: "website",
    url: "https://www.mcgillvc.ca/growth-studio/partners",
    images: "/growth-studio/logo-wordmark.webp",
  },
};

export default function PartnersPage() {
  return (
    <>
      <Nav active={null} ctaHref={"mailto:hello.growthstudio@gmail.com"} />
      <main>
        <header id="p-top" style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto', padding: '88px 32px 96px' }}>
          <div style={{ maxWidth: '780px' }}>
            <p data-reveal="" style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', letterSpacing: '.16em', fontSize: '13px', fontWeight: '700', color: 'var(--purple,#3a1fb0)', margin: '0 0 16px' }}>PARTNERS & CAREERS</p>
            <h1 data-reveal="" data-delay="80" style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '700', fontSize: 'clamp(42px,5.6vw,74px)', lineHeight: '.98', letterSpacing: '-.025em', margin: '0 0 24px' }}>A direct line into <span style={{ color: 'var(--purple,#3a1fb0)' }}>student venture.</span>
          </h1>
          <p data-reveal="" data-delay="160" style={{ fontSize: '19px', lineHeight: '1.55', maxWidth: '620px', color: 'rgba(36,20,84,.78)', margin: '0 0 34px' }}>Growth Studio gives investors, accelerators, and operators a curated pipeline of pre-seed and seed founders — backed by McGill Ventures and its ecosystem of funds, programs, and founder communities.</p>
          <div data-reveal="" data-delay="240" style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center' }}>
            <a href="mailto:hello.growthstudio@gmail.com" data-hover={`{"transform":"translateY(-2px)","boxShadow":"0 12px 28px rgba(58,31,176,.32)"}`} style={{ textDecoration: 'none', background: 'var(--purple,#3a1fb0)', color: '#f3f13a', fontWeight: '700', fontSize: '16px', padding: '15px 28px', borderRadius: '2px', display: 'inline-flex', alignItems: 'center', gap: '10px', transition: 'transform .18s ease,box-shadow .18s ease' }}>
              <div>Partner with us</div>
              <span style={{ fontSize: '18px', lineHeight: '1' }}>→</span>
            </a>
            <a href="#p-offer" data-hover={`{"background":"rgba(36,20,84,.05)"}`} style={{ textDecoration: 'none', color: '#241454', fontWeight: '600', fontSize: '16px', padding: '15px 24px', borderRadius: '2px', border: '1px solid rgba(36,20,84,.25)', transition: 'background .18s ease,border-color .18s ease' }}>What we offer</a>
          </div>
        </div>
        </header>
        <section id="p-mcv" style={{ background: 'var(--purple,#3a1fb0)', color: '#fff', position: 'relative', overflow: 'hidden' }}>
          <div data-float="" style={{ position: 'absolute', right: '-90px', top: '-90px', width: '300px', height: '300px', borderRadius: '50%', border: '1.5px solid rgba(255,255,255,.14)', animation: 'gs-spin 60s linear infinite' }}>
          </div>
          <div style={{ position: 'absolute', left: '-60px', bottom: '-60px', width: '180px', height: '180px', borderRadius: '50%', background: 'rgba(243,241,58,.14)' }}>
          </div>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '96px 32px', position: 'relative', display: 'grid', gridTemplateColumns: '.85fr 1.15fr', gap: '56px', alignItems: 'start' }}>
            <div data-reveal="">
              <p style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', letterSpacing: '.16em', fontSize: '13px', fontWeight: '700', color: 'var(--yellow,#f3f13a)', margin: '0 0 16px' }}>POWERED BY McGILL VENTURES</p>
              <h2 style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '700', fontSize: 'clamp(30px,3.6vw,44px)', lineHeight: '1.05', letterSpacing: '-.02em', margin: '0' }}>Part of a bigger ecosystem.</h2>
            </div>
            <div data-reveal="" data-delay="120">
              <p style={{ fontSize: '19px', lineHeight: '1.6', color: 'rgba(255,255,255,.88)', margin: '0 0 26px' }}>Growth Studio is the startup consulting arm of <strong>McGill Ventures</strong>, McGill&apos;s student venture club. That means our work doesn&apos;t happen in isolation — every engagement is plugged into the club&apos;s network of student-run funds, accelerators, and innovation programs.</p>
              <div style={{ borderLeft: '3px solid var(--yellow,#f3f13a)', paddingLeft: '20px' }}>
                <p style={{ fontSize: '16px', lineHeight: '1.6', color: 'rgba(255,255,255,.75)', margin: '0' }}>Partners get access to that whole ecosystem: <strong style={{ color: '#fff' }}>campus events, founder communities, and investment pipelines</strong> spanning Front Row Ventures, the McGill Innovation Fund, Dorm Room Fund, the McGill Engine, and more.</p>
              </div>
            </div>
          </div>
        </section>
        <div style={{ background: '#f6f5fb' }}>
          <section id="p-offer" style={{ maxWidth: '1200px', margin: '0 auto', padding: '120px 32px 0' }}>
            <div data-reveal="" style={{ maxWidth: '720px', marginBottom: '56px' }}>
              <p style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', letterSpacing: '.16em', fontSize: '13px', fontWeight: '700', color: 'var(--purple,#3a1fb0)', margin: '0 0 16px' }}>WHAT WE OFFER</p>
              <h2 style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '700', fontSize: 'clamp(32px,4vw,52px)', lineHeight: '1.02', letterSpacing: '-.02margin:0 0 20px' }}>Value for the VC ecosystem.</h2>
              <p style={{ fontSize: '18px', lineHeight: '1.6', color: 'rgba(36,20,84,.75)', margin: '0' }}>We spend four hands-on weeks inside each startup we support. For investors and ecosystem partners, that translates into signal you can&apos;t get from a cold deck.</p>
            </div>
            <div data-reveal="" data-delay="80" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '20px', marginBottom: '120px' }}>
              <div style={{ background: '#fff', border: '1px solid rgba(36,20,84,.14)', borderRadius: '3px', padding: '28px 24px' }}>
                <h3 style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '600', fontSize: '18px', margin: '0 0 10px' }}>Curated deal flow</h3>
                <p style={{ fontSize: '14.5px', lineHeight: '1.55', color: 'rgba(36,20,84,.68)', margin: '0' }}>We work exclusively with pre-seed and seed founders — you meet companies we know from the inside, not from a pitch email.</p>
              </div>
              <div style={{ background: '#fff', border: '1px solid rgba(36,20,84,.14)', borderRadius: '3px', padding: '28px 24px' }}>
                <h3 style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '600', fontSize: '18px', margin: '0 0 10px' }}>Investor-ready companies</h3>
                <p style={{ fontSize: '14.5px', lineHeight: '1.55', color: 'rgba(36,20,84,.68)', margin: '0' }}>Founders leave our engagements with sharpened decks, structured pipelines, and validated go-to-market plans — meetings worth your time.</p>
              </div>
              <div style={{ background: '#fff', border: '1px solid rgba(36,20,84,.14)', borderRadius: '3px', padding: '28px 24px' }}>
                <h3 style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '600', fontSize: '18px', margin: '0 0 10px' }}>Trained student talent</h3>
                <p style={{ fontSize: '14.5px', lineHeight: '1.55', color: 'rgba(36,20,84,.68)', margin: '0' }}>Our consultants ship real fundraising and GTM work. Partners get first access to a pipeline of proven student operators.</p>
              </div>
              <div style={{ background: '#fff', border: '1px solid rgba(36,20,84,.14)', borderRadius: '3px', padding: '28px 24px' }}>
                <h3 style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '600', fontSize: '18px', margin: '0 0 10px' }}>Campus presence</h3>
                <p style={{ fontSize: '14.5px', lineHeight: '1.55', color: 'rgba(36,20,84,.68)', margin: '0' }}>Co-hosted events and programming with McGill Ventures put partners in front of Montreal&apos;s student founder community.</p>
              </div>
            </div>
          </section>
          <section id="p-partners" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px 100px' }}>
            <div data-reveal="" style={{ maxWidth: '720px', marginBottom: '40px' }}>
              <p style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', letterSpacing: '.16em', fontSize: '13px', fontWeight: '700', color: 'var(--purple,#3a1fb0)', margin: '0 0 16px' }}>OUR PARTNERS TODAY</p>
              <h2 style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '700', fontSize: 'clamp(32px,4vw,52px)', lineHeight: '1.02', letterSpacing: '-.02margin:0 0 20px' }}>The network we build with.</h2>
              <p style={{ fontSize: '18px', lineHeight: '1.6', color: 'rgba(36,20,84,.75)', margin: '0' }}>Funds, accelerators, and founder communities already working with Growth Studio and McGill Ventures.</p>
            </div>
            <div data-reveal="" data-delay="80" style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: '14px' }}>
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
          <section id="p-impact" style={{ background: 'var(--purple,#3a1fb0)', color: '#fff', position: 'relative', overflow: 'hidden' }}>
            <div data-float="" style={{ position: 'absolute', right: '-70px', bottom: '-70px', width: '260px', height: '260px', borderRadius: '50%', border: '1.5px solid rgba(255,255,255,.16)', animation: 'gs-spinR 55s linear infinite' }}>
            </div>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '96px 32px', position: 'relative', display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: '48px', alignItems: 'center' }}>
              <div data-reveal="">
                <p style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', letterSpacing: '.16em', fontSize: '13px', fontWeight: '700', color: 'var(--yellow,#f3f13a)', margin: '0 0 18px' }}>TRACK RECORD</p>
                <h2 style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '700', fontSize: 'clamp(28px,3.2vw,40px)', lineHeight: '1.12', letterSpacing: '-.02em', margin: '0 0 22px' }}>Market research, commercial strategy, and pitch-ready founders.</h2>
                <p style={{ fontSize: '17px', lineHeight: '1.6', color: 'rgba(255,255,255,.82)', margin: '0' }}>In Growth Studio&apos;s inaugural year, our consultants supported <strong>AeroCellutions</strong> ahead of the 2026 BioDesign Challenge with commercial analysis and pitch refinement, and supported Waterloo-based startup <strong>MyPip</strong> in its early growth work.</p>
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
        <section id="p-voices" style={{ maxWidth: '1200px', margin: '0 auto', padding: '120px 32px' }}>
          <div data-reveal="" style={{ marginBottom: '56px', maxWidth: '680px' }}>
            <p style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', letterSpacing: '.16em', fontSize: '13px', fontWeight: '700', color: 'var(--purple,#3a1fb0)', margin: '0 0 16px' }}>STARTUPS WE&apos;VE WORKED WITH</p>
            <h2 style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '700', fontSize: 'clamp(32px,4vw,52px)', lineHeight: '1.02', letterSpacing: '-.02em', margin: '0' }}>Growth Studio supports founders across industries.</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px', alignItems: 'stretch' }}>
            <div data-reveal="" data-delay="0" style={{ background: '#fbfbff', border: '1px solid rgba(36,20,84,.16)', borderRadius: '3px', padding: '34px 30px', display: 'flex', flexDirection: 'column', gap: '22px' }}>
              <Image src="/growth-studio/startup-logo-free-for-founders.png" alt="Startup logo" width={1881} height={987} style={{ maxHeight: '96px', maxWidth: '100%', objectFit: 'contain', width: '195px', height: '105px' }} />
              <div style={{ marginTop: 'auto' }}>
                <div style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '700', fontSize: '18px', margin: '0 0 4px' }}>Heylist</div>
                <div style={{ fontSize: '14px', color: 'rgba(36,20,84,.6)' }}>Creative Tech</div>
              </div>
            </div>
            <div data-reveal="" data-delay="120" style={{ background: 'var(--purple,#3a1fb0)', color: '#fff', borderRadius: '3px', padding: '34px 30px', display: 'flex', flexDirection: 'column', gap: '22px' }}>
              <Image src="/growth-studio/startup-logo-hands-on-execution.png" alt="Startup logo" width={200} height={200} style={{ maxHeight: '64px', maxWidth: '100%', objectFit: 'contain' }} />
              <blockquote style={{ margin: '0', fontSize: '16px', lineHeight: '1.55', fontWeight: '500', color: 'rgba(255,255,255,.92)' }}>&quot;Working with Growth Studio was a game-changer.&quot;</blockquote>
              <div style={{ marginTop: 'auto' }}>
                <div style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '700', fontSize: '18px', margin: '0 0 4px' }}>Aerocellutions</div>
                <div style={{ fontSize: '14px', color: 'rgba(255,255,255,.7)' }}>Climate Tech</div>
              </div>
            </div>
            <div data-reveal="" data-delay="240" style={{ background: '#fbfbff', border: '1px solid rgba(36,20,84,.16)', borderRadius: '3px', padding: '34px 30px', display: 'flex', flexDirection: 'column', gap: '22px' }}>
              <Image src="/growth-studio/startup-logo-generic.png" alt="Startup logo" width={200} height={200} style={{ maxHeight: '96px', maxWidth: '100%', objectFit: 'contain' }} />
              <div style={{ marginTop: 'auto' }}>
                <div style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '700', fontSize: '18px', margin: '0 0 4px' }}>MyPip</div>
                <div style={{ fontSize: '14px', color: 'rgba(36,20,84,.6)' }}>AI SaaS</div>
              </div>
            </div>
          </div>
        </section>
        <section id="p-partner-cta" style={{ maxWidth: '1200px', margin: '0 auto 120px', padding: '0 32px' }}>
          <div data-reveal="" style={{ position: 'relative', overflow: 'hidden', background: 'var(--yellow,#f3f13a)', color: 'var(--purple,#3a1fb0)', borderRadius: '4px', padding: '84px 64px' }}>
            <div data-float="" style={{ position: 'absolute', right: '-70px', top: '-70px', width: '260px', height: '260px', borderRadius: '50%', border: '1.5px solid rgba(36,20,84,.18)', animation: 'gs-spinR 50s linear infinite' }}>
            </div>
            <div data-float="" style={{ position: 'absolute', right: '120px', bottom: '-50px', width: '120px', height: '120px', background: 'rgba(36,20,84,.08)', transform: 'rotate(20deg)', animation: 'gs-floatY 8s ease-in-out infinite' }}>
            </div>
            <div style={{ position: 'relative', maxWidth: '560px' }}>
              <p style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', letterSpacing: '.16em', fontSize: '13px', fontWeight: '700', color: 'rgba(36,20,84,.7)', margin: '0 0 18px' }}>PARTNERS & CAREERS</p>
              <h2 style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '700', fontSize: 'clamp(32px,4.4vw,54px)', lineHeight: '1.0', letterSpacing: '-.02em', margin: '0 0 18px' }}>Let&apos;s work together.</h2>
              <p style={{ fontSize: '18px', lineHeight: '1.55', color: 'rgba(36,20,84,.82)', margin: '0 0 30px' }}>Whether you&apos;re looking for deal flow, a presence on campus, or a place on our consulting team — we&apos;d love to hear from you.</p>
              <a href="mailto:hello.growthstudio@gmail.com" data-hover={`{"transform":"translateY(-2px)"}`} style={{ textDecoration: 'none', background: 'var(--purple,#3a1fb0)', color: '#f3f13a', fontWeight: '700', fontSize: '16px', fontFamily: 'var(--font-space-grotesk),sans-serif', padding: '15px 28px', borderRadius: '2px', display: 'inline-flex', alignItems: 'center', gap: '10px', transition: 'transform .18s ease' }}>Get in touch <span style={{ fontSize: '18px', lineHeight: '1' }}>→</span>
            </a>
            <p style={{ fontSize: '15.5px', lineHeight: '1.5', color: 'rgba(36,20,84,.68)', margin: '22px 0 0' }}>Students: we recruit consultants every semester — reach us at <a href="mailto:hello.growthstudio@gmail.com" style={{ color: 'var(--purple,#3a1fb0)', fontWeight: '700' }}>hello.growthstudio@gmail.com</a>
          </p>
        </div>
        </div>
        </section>
      </main>
      <Footer
        program={[{ href: "#p-partner-cta", label: "Contact" }, { href: "/growth-studio#how", label: "How we help" }, { href: "#p-impact", label: "Impact" }]}
        team={[{ href: "/growth-studio/team", label: "Directors" }, { href: "/growth-studio#who", label: "Who we work with" }, { href: "/growth-studio/careers", label: "Careers" }]}
      />
      <Interactions />
    </>
  );
}
