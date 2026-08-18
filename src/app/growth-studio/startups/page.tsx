import type { Metadata } from "next";
import Image from "next/image";
import Nav from "../_components/Nav";
import Footer from "../_components/Footer";
import Interactions from "../_components/Interactions";

export const metadata: Metadata = {
  title: "For Founders — Growth Studio",
  description: "Built for founders, not Fortune 500s. Growth Studio supports early-stage startups across industries with the consulting work that gets you investor-ready.",
  openGraph: {
    title: "For Founders — Growth Studio",
    description: "Built for founders, not Fortune 500s. Growth Studio supports early-stage startups across industries with the consulting work that gets you investor-ready.",
    type: "website",
    url: "https://www.mcgillvc.ca/growth-studio/startups",
    images: "/growth-studio/logo-wordmark.webp",
  },
};

export default function StartupsPage() {
  return (
    <>
      <Nav active={null} ctaHref={"#s-apply"} />
      <main>
        <div style={{ background: 'var(--yellow,#f3f13a)', padding: '12px 32px', textAlign: 'center' }}>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSfNMLYY5THSx6F1WPXlK11zS2q7JiSHNCRekzMAEEbHZl54rQ/viewform?usp=header" target="_blank" rel="noopener" style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '700', fontSize: '14px', letterSpacing: '.08em', color: 'var(--purple,#3a1fb0)', textDecoration: 'underline' }}>APPLICATIONS FOR OUR FALL 2026 COHORT OPEN NOW</a>
        </div>
        <header id="s-top" style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto', padding: '88px 32px 96px' }}>
          <div style={{ maxWidth: '760px' }}>
            <p data-reveal="" style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', letterSpacing: '.16em', fontSize: '13px', fontWeight: '700', color: 'var(--purple,#3a1fb0)', margin: '0 0 16px' }}>FOR FOUNDERS</p>
            <h1 data-reveal="" data-delay="80" style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '700', fontSize: 'clamp(42px,5.6vw,74px)', lineHeight: '.98', letterSpacing: '-.025em', margin: '0 0 24px' }}>Let&apos;s get you <span style={{ color: 'var(--purple,#3a1fb0)' }}>investor-ready.</span>
          </h1>
          <p data-reveal="" data-delay="160" style={{ fontSize: '19px', lineHeight: '1.55', maxWidth: '620px', color: 'rgba(36,20,84,.78)', margin: '0 0 34px' }}>Submit a consultation request and we&apos;ll pair you with a dedicated team of trained student consultants for a free four-week engagement — strategy, fundraising support, and hands-on execution tailored to your stage.</p>
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
          <section id="s-why" style={{ maxWidth: '1200px', margin: '0 auto', padding: '120px 32px 0' }}>
            <div data-reveal="" style={{ maxWidth: '720px', marginBottom: '56px' }}>
              <p style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', letterSpacing: '.16em', fontSize: '13px', fontWeight: '700', color: 'var(--purple,#3a1fb0)', margin: '0 0 16px' }}>WHY GROWTH STUDIO</p>
              <h2 style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '700', fontSize: 'clamp(32px,4vw,52px)', lineHeight: '1.02', letterSpacing: '-.02em', margin: '0 0 20px' }}>Built for founders, not Fortune 500s.</h2>
              <p style={{ fontSize: '18px', lineHeight: '1.6', color: 'rgba(36,20,84,.75)', margin: '0' }}>Montreal has other consulting clubs — most cut their teeth on Fortune 500 case work and treat startups as a side offering. Growth Studio is different: everything we do, from our consultants&apos; training to our network, is built around early-stage founders.</p>
            </div>
            <div data-reveal="" data-delay="80" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '20px', marginBottom: '120px' }}>
              <div style={{ background: '#fff', border: '1px solid rgba(36,20,84,.14)', borderRadius: '3px', padding: '28px 24px' }}>
                <h3 style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '600', fontSize: '18px', margin: '0 0 10px' }}>Startup-only focus</h3>
                <p style={{ fontSize: '14.5px', lineHeight: '1.55', color: 'rgba(36,20,84,.68)', margin: '0' }}>We work exclusively with pre-seed and seed-stage founders — every framework and deliverable is built for early-stage realities, not enterprise case comps.</p>
              </div>
              <div style={{ background: '#fff', border: '1px solid rgba(36,20,84,.14)', borderRadius: '3px', padding: '28px 24px' }}>
                <h3 style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '600', fontSize: '18px', margin: '0 0 10px' }}>Free for founders</h3>
                <p style={{ fontSize: '14.5px', lineHeight: '1.55', color: 'rgba(36,20,84,.68)', margin: '0' }}>No consulting fees. Our support is fully backed by McGill Ventures, so founders get the work without the invoice.</p>
              </div>
              <div style={{ background: '#fff', border: '1px solid rgba(36,20,84,.14)', borderRadius: '3px', padding: '28px 24px' }}>
                <h3 style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '600', fontSize: '18px', margin: '0 0 10px' }}>Hands-on execution</h3>
                <p style={{ fontSize: '14.5px', lineHeight: '1.55', color: 'rgba(36,20,84,.68)', margin: '0' }}>We don&apos;t hand off a slide deck and disappear. Our consultants build the CRM, run the outreach, and ship the deliverable alongside you.</p>
              </div>
              <div style={{ background: '#fff', border: '1px solid rgba(36,20,84,.14)', borderRadius: '3px', padding: '28px 24px' }}>
                <h3 style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '600', fontSize: '18px', margin: '0 0 10px' }}>Direct access to funding</h3>
                <p style={{ fontSize: '14.5px', lineHeight: '1.55', color: 'rgba(36,20,84,.68)', margin: '0' }}>As part of McGill Ventures, we connect founders straight into a network of funds and investors actively writing checks.</p>
              </div>
            </div>
          </section>
        </div>
        <section id="s-voices" style={{ maxWidth: '1200px', margin: '0 auto', padding: '120px 32px' }}>
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
        <section id="s-apply" data-signup="" style={{ maxWidth: '1200px', margin: '0 auto 120px', padding: '0 32px' }}>
          <div data-reveal="" style={{ position: 'relative', overflow: 'hidden', background: 'var(--yellow,#f3f13a)', color: 'var(--purple,#3a1fb0)', borderRadius: '4px', padding: '84px 64px' }}>
            <div data-float="" style={{ position: 'absolute', right: '-70px', top: '-70px', width: '260px', height: '260px', borderRadius: '50%', border: '1.5px solid rgba(36,20,84,.18)', animation: 'gs-spinR 50s linear infinite' }}>
            </div>
            <div data-float="" style={{ position: 'absolute', right: '120px', bottom: '-50px', width: '120px', height: '120px', background: 'rgba(36,20,84,.08)', transform: 'rotate(20deg)', animation: 'gs-floatY 8s ease-in-out infinite' }}>
            </div>
            <div style={{ position: 'relative', maxWidth: '560px' }}>
              <p style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', letterSpacing: '.16em', fontSize: '13px', fontWeight: '700', color: 'rgba(36,20,84,.7)', margin: '0 0 18px' }}>APPLICATIONS FOR OUR FALL 2026 COHORT OPEN NOW</p>
              <h2 style={{ fontFamily: 'var(--font-space-grotesk),sans-serif', fontWeight: '700', fontSize: 'clamp(32px,4.4vw,54px)', lineHeight: '1.0', letterSpacing: '-.02em', margin: '0 0 18px' }}>Let&apos;s build your next phase.</h2>
              <p style={{ fontSize: '18px', lineHeight: '1.55', color: 'rgba(36,20,84,.82)', margin: '0 0 30px' }}>Being a founder is ambitious, uncertain, and personal. Every journey is unique, and we tailor our support to your stage and goals.</p>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSfNMLYY5THSx6F1WPXlK11zS2q7JiSHNCRekzMAEEbHZl54rQ/viewform?usp=header" target="_blank" rel="noopener" data-hover={`{"transform":"translateY(-2px)"}`} style={{ textDecoration: 'none', background: 'var(--purple,#3a1fb0)', color: '#f3f13a', fontWeight: '700', fontSize: '16px', fontFamily: 'var(--font-space-grotesk),sans-serif', padding: '15px 28px', borderRadius: '2px', display: 'inline-flex', alignItems: 'center', gap: '10px', transition: 'transform .18s ease' }}>Fill out our startup intake form <span style={{ fontSize: '18px', lineHeight: '1' }}>→</span>
            </a>
            <p style={{ fontSize: '15.5px', lineHeight: '1.5', color: 'rgba(36,20,84,.68)', margin: '22px 0 0' }}>Or contact us directly at <a href="mailto:hello.growthstudio@gmail.com" style={{ color: 'var(--purple,#3a1fb0)', fontWeight: '700' }}>hello.growthstudio@gmail.com</a>
          </p>
        </div>
        </div>
        </section>
      </main>
      <Footer
        program={[{ href: "#s-apply", label: "Contact" }, { href: "/growth-studio#how", label: "How we help" }, { href: "/growth-studio#impact", label: "Impact" }]}
        team={[{ href: "/growth-studio/team", label: "Directors" }, { href: "/growth-studio#who", label: "Who we work with" }, { href: "/growth-studio/careers", label: "Careers" }]}
      />
      <Interactions />
    </>
  );
}
