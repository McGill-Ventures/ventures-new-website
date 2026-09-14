import type { Metadata } from "next";
import Image from "next/image";
import Nav from "../_components/Nav";
import Footer from "../_components/Footer";
import Interactions from "../_components/Interactions";

export const metadata: Metadata = {
  title: "Partner With Us — Growth Studio",
  description: "A direct line into student venture. Growth Studio works alongside accelerators, consulting clubs, corporate operators, and program sponsors who want to support early-stage founders.",
  openGraph: {
    title: "Partner With Us — Growth Studio",
    description: "A direct line into student venture. Growth Studio works alongside accelerators, consulting clubs, corporate operators, and program sponsors who want to support early-stage founders.",
    type: "website",
    url: "https://www.mcgillvc.ca/growth-studio/partners",
    images: "/growth-studio/logo-wordmark.webp",
  },
};

export default function PartnersPage() {
  return (
    <>
      <Nav active={null} ctaHref={"#p-partner-cta"} />
      <main>
        <header className="gs-wrap" id="p-top" style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto', padding: '88px 32px 96px', overflow: 'hidden' }}>
          <div aria-hidden="true" style={{ position: 'absolute', right: '0', top: 'calc(50% - 190px)', width: '380px', height: '380px', pointerEvents: 'none', opacity: '.2' }}>
            <Image src="/growth-studio/logo-mark-large.png" alt="" width={512} height={492} style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block', animation: 'gs-floatY 11s ease-in-out infinite' }} />
          </div>
          <div style={{ position: 'relative', maxWidth: '780px' }}>
            <p data-reveal="" style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', letterSpacing: '.16em', fontSize: '13px', fontWeight: '700', color: 'var(--purple,#3a1fb0)', margin: '0 0 16px' }}>PARTNERSHIP OPPORTUNITIES</p>
            <h1 data-reveal="" data-delay="80" style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '700', fontSize: 'clamp(42px,5.6vw,74px)', lineHeight: '.98', letterSpacing: '-.025em', margin: '0 0 24px' }}>A direct line into <span style={{ color: 'var(--purple,#3a1fb0)' }}>student venture.</span>
          </h1>
          <p data-reveal="" data-delay="160" style={{ fontSize: '19px', lineHeight: '1.55', maxWidth: '620px', color: 'rgba(36,20,84,.78)', margin: '0 0 34px' }}>Growth Studio works alongside accelerators and consulting clubs, corporate operators, and program sponsors who want to support early-stage founders. However you&apos;d like to get involved, mentorship, collaboration, or backing the program directly, there&apos;s a fit.</p>
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
          <div className="gs-grid gs-wrap" style={{ maxWidth: '1200px', margin: '0 auto', padding: '96px 32px', position: 'relative', display: 'grid', gridTemplateColumns: '.85fr 1.15fr', gap: '56px', alignItems: 'start' }}>
            <div data-reveal="">
              <p style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', letterSpacing: '.16em', fontSize: '13px', fontWeight: '700', color: 'var(--yellow,#f3f13a)', margin: '0 0 16px' }}>POWERED BY McGILL VENTURES</p>
              <h2 style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '700', fontSize: 'clamp(30px,3.6vw,44px)', lineHeight: '1.05', letterSpacing: '-.02em', margin: '0' }}>Part of a bigger ecosystem.</h2>
            </div>
            <div data-reveal="" data-delay="120">
              <p style={{ fontSize: '19px', lineHeight: '1.6', color: 'rgba(255,255,255,.88)', margin: '0 0 26px' }}>Growth Studio is the startup consulting arm of <strong>McGill Ventures</strong>, McGill&apos;s student venture club. That means our work doesn&apos;t happen in isolation, every engagement is plugged into the club&apos;s network of student-run funds, accelerators, and innovation programs.</p>
            </div>
          </div>
        </section>
        <section className="gs-wrap" id="p-offer" style={{ maxWidth: '1200px', margin: '0 auto', padding: '76px 32px 84px' }}>
          <div data-reveal="" style={{ maxWidth: '720px', marginBottom: '48px' }}>
            <p style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', letterSpacing: '.16em', fontSize: '13px', fontWeight: '700', color: 'var(--purple,#3a1fb0)', margin: '0 0 16px' }}>WHAT WE OFFER</p>
            <h2 style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '700', fontSize: 'clamp(32px,4vw,52px)', lineHeight: '1.02', letterSpacing: '-.02em', margin: '0' }}>Three ways to work with us.</h2>
          </div>
          <div className="gs-grid" data-reveal="" data-delay="80" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '36px' }}>
            <div style={{ borderTop: '2px solid var(--purple,#3a1fb0)', paddingTop: '22px' }}>
              <div style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '700', fontSize: '13px', letterSpacing: '.12em', color: 'var(--purple,#3a1fb0)', margin: '0 0 14px' }}>01</div>
              <h3 style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '600', fontSize: '21px', lineHeight: '1.2', letterSpacing: '-.01em', margin: '0 0 12px' }}>Accelerators & consulting clubs</h3>
              <p style={{ fontSize: '16px', lineHeight: '1.55', color: 'rgba(36,20,84,.7)', margin: '0' }}>We collaborate, not compete. Joint events, cross-referrals, and shared deal flow with programs doing complementary work across Montreal.</p>
            </div>
            <div style={{ borderTop: '2px solid var(--purple,#3a1fb0)', paddingTop: '22px' }}>
              <div style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '700', fontSize: '13px', letterSpacing: '.12em', color: 'var(--purple,#3a1fb0)', margin: '0 0 14px' }}>02</div>
              <h3 style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '600', fontSize: '21px', lineHeight: '1.2', letterSpacing: '-.01em', margin: '0 0 12px' }}>Corporate operators & mentors</h3>
              <p style={{ fontSize: '16px', lineHeight: '1.55', color: 'rgba(36,20,84,.7)', margin: '0' }}>Share your time: guest speak, host office hours, or advise a founder directly. Our founders get real operator perspective; you get a front-row seat to the next generation of student builders.</p>
            </div>
            <div style={{ borderTop: '2px solid var(--purple,#3a1fb0)', paddingTop: '22px' }}>
              <div style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '700', fontSize: '13px', letterSpacing: '.12em', color: 'var(--purple,#3a1fb0)', margin: '0 0 14px' }}>03</div>
              <h3 style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '600', fontSize: '21px', lineHeight: '1.2', letterSpacing: '-.01em', margin: '0 0 12px' }}>Ecosystem sponsors</h3>
              <p style={{ fontSize: '16px', lineHeight: '1.55', color: 'rgba(36,20,84,.7)', margin: '0' }}>Back the program directly. Sponsorship funds consultant training and founder programming, and keeps Growth Studio free for the founders who need it most.</p>
            </div>
          </div>
        </section>
        <div style={{ background: '#f6f5fb' }}>
          <section className="gs-wrap" id="p-impact" style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 32px 96px' }}>
            <div data-reveal="" style={{ marginBottom: '44px' }}>
              <p style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', letterSpacing: '.16em', fontSize: '13px', fontWeight: '700', color: 'var(--purple,#3a1fb0)', margin: '0 0 16px' }}>TRACK RECORD</p>
              <h2 style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '700', fontSize: 'clamp(32px,4vw,50px)', lineHeight: '1.02', letterSpacing: '-.02em', margin: '0' }}>Growth Studio supports founders across industries.</h2>
            </div>
            <div className="gs-grid" data-reveal="" data-delay="80" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px', alignItems: 'stretch', marginBottom: '24px' }}>
              <a href="https://www.heylist.com/" target="_blank" rel="noopener" style={{ background: '#fbfbff', border: '1px solid rgba(36,20,84,.16)', borderRadius: '3px', padding: '32px 28px', display: 'flex', flexDirection: 'column', gap: '20px', textDecoration: 'none', color: 'inherit' }}>
                <Image src="/growth-studio/startup-logo-free-for-founders.png" alt="Heylist" width={1881} height={987} style={{ height: '76px', maxWidth: '100%', objectFit: 'contain', objectPosition: 'left' }} />
                <div style={{ fontSize: '16px', lineHeight: '1.5', color: 'rgba(36,20,84,.68)' }}>&quot;I&apos;m definitely using this in my marketing work.&quot; <i>- Emely Rodriguez (Community Manager)</i></div>
                <div style={{ marginTop: 'auto' }}>
                  <div style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '700', fontSize: '18px', margin: '0 0 4px' }}>Heylist</div>
                  <div style={{ fontSize: '14px', color: 'rgba(36,20,84,.6)' }}>Creative Tech</div>
                </div>
              </a>
              <a href="https://aerocellutions.com/" target="_blank" rel="noopener" style={{ background: 'var(--purple,#3a1fb0)', color: '#fff', borderRadius: '3px', padding: '32px 28px', display: 'flex', flexDirection: 'column', gap: '20px', textDecoration: 'none' }}>
                <Image src="/growth-studio/startup-logo-hands-on-execution.png" alt="Aerocellutions" width={200} height={200} style={{ height: '76px', maxWidth: '100%', objectFit: 'contain', objectPosition: 'left' }} />
                <div style={{ fontSize: '16px', lineHeight: '1.5', color: 'rgba(255,255,255,.9)' }}>&quot;Working with Growth Studio was a game-changer.&quot; <i>- Carolyn Denton (Founder)</i></div>
                <div style={{ marginTop: 'auto' }}>
                  <div style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '700', fontSize: '18px', margin: '0 0 4px' }}>Aerocellutions</div>
                  <div style={{ fontSize: '14px', color: 'rgba(255,255,255,.7)' }}>Climate Tech</div>
                </div>
              </a>
              <a href="https://mypipdev.com/" target="_blank" rel="noopener" style={{ background: '#fbfbff', border: '1px solid rgba(36,20,84,.16)', borderRadius: '3px', padding: '32px 28px', display: 'flex', flexDirection: 'column', gap: '20px', textDecoration: 'none', color: 'inherit' }}>
                <Image src="/growth-studio/startup-logo-generic.png" alt="MyPip" width={200} height={200} style={{ height: '76px', maxWidth: '100%', objectFit: 'contain', objectPosition: 'left' }} />
                <div style={{ fontSize: '16px', lineHeight: '1.5', color: 'rgba(36,20,84,.68)' }}>&quot;The [Growth Studio consultants] surfaced a lot of ideas I hadn&apos;t thought of yet&quot; <i>- Misha Stastna (Founder)</i></div>
                <div style={{ marginTop: 'auto' }}>
                  <div style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '700', fontSize: '18px', margin: '0 0 4px' }}>MyPip</div>
                  <div style={{ fontSize: '14px', color: 'rgba(36,20,84,.6)' }}>AI SaaS</div>
                </div>
              </a>
            </div>
            <div className="gs-grid" data-reveal="" data-delay="160" style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: '0', background: 'var(--yellow,#f3f13a)', color: 'var(--purple,#3a1fb0)', borderRadius: '3px', overflow: 'hidden', alignItems: 'stretch' }}>
              <Image src="/growth-studio/aerocellutions-biodesign.jpg" alt="AeroCellutions team at the 2026 BioDesign Challenge" width={800} height={533} style={{ width: '100%', height: '100%', minHeight: '150px', objectFit: 'cover', objectPosition: 'center 20%', display: 'block' }} />
              <div style={{ padding: '28px 36px', display: 'flex', alignItems: 'center', gap: '28px' }}>
                <div style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '700', fontSize: 'clamp(44px,5vw,64px)', lineHeight: '1', letterSpacing: '-.02em', flex: 'none' }}>2<sup style={{ fontSize: '.42em' }}>ND</sup>
                </div>
                <div style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '700', fontSize: '14px', letterSpacing: '.06em', lineHeight: '1.6' }}>PLACE OVERALL<br />
                  <i>2026 BIODESIGN CHALLENGE</i>
                  <br />
                  <span style={{ fontFamily: 'var(--font-hanken-grotesk),sans-serif', fontWeight: '500', letterSpacing: '0', fontSize: '15px' }}>AeroCellutions, coached by Growth Studio consultants</span>
                </div>
              </div>
            </div>
          </section>
        </div>
        <section className="gs-wrap" id="p-partner-cta" style={{ maxWidth: '1200px', margin: '0 auto 120px', padding: '72px 32px 0' }}>
          <div className="gs-card-pad" data-reveal="" style={{ position: 'relative', overflow: 'hidden', background: 'var(--yellow,#f3f13a)', color: 'var(--purple,#3a1fb0)', borderRadius: '4px', padding: '84px 64px' }}>
            <div data-float="" style={{ position: 'absolute', right: '-70px', top: '-70px', width: '260px', height: '260px', borderRadius: '50%', border: '1.5px solid rgba(36,20,84,.18)', animation: 'gs-spinR 50s linear infinite' }}>
            </div>
            <div data-float="" style={{ position: 'absolute', right: '120px', bottom: '-50px', width: '120px', height: '120px', background: 'rgba(36,20,84,.08)', transform: 'rotate(20deg)', animation: 'gs-floatY 8s ease-in-out infinite' }}>
            </div>
            <div style={{ position: 'relative', maxWidth: '560px' }}>
              <p style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', letterSpacing: '.16em', fontSize: '13px', fontWeight: '700', color: 'rgba(36,20,84,.7)', margin: '0 0 18px' }}>PARTNERS</p>
              <h2 style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '700', fontSize: 'clamp(32px,4.4vw,54px)', lineHeight: '1.0', letterSpacing: '-.02em', margin: '0 0 18px' }}>Let&apos;s work together.</h2>
              <p style={{ fontSize: '18px', lineHeight: '1.55', color: 'rgba(36,20,84,.82)', margin: '0 0 30px' }}>Whether you&apos;re looking for deal flow or a presence on campus, we&apos;d love to hear from you.</p>
              <a className="gs-cta-email" href="mailto:hello.growthstudio@gmail.com" data-hover={`{"transform":"translateY(-2px)"}`} style={{ textDecoration: 'none', background: 'var(--purple,#3a1fb0)', color: '#f3f13a', fontWeight: '700', fontSize: '16px', fontFamily: 'var(--font-space-grotesk),sans-serif', padding: '15px 28px', borderRadius: '2px', display: 'inline-flex', alignItems: 'center', gap: '10px', transition: 'transform .18s ease' }}>
                <span style={{ fontWeight: 'normal' }}>Get in touch by email:</span> hello.growthstudio@gmail.com</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Interactions />
    </>
  );
}
