import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Instagram, Linkedin, Mail, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal, SplitText } from "@/components/motion";
import { Button } from "@/components/ui";

const footerLinks = {
  company: [
    { label: "About", href: "/about" },
    { label: "Team", href: "/team" },
  ],
  resources: [
    { label: "Programs", href: "/programs" },
    { label: "Sponsors", href: "/sponsors" },
    { label: "Contact Us", href: "/contact" },
    {
      label: "Asset Base",
      href: "https://www.playbook.com/s/takenbyknives/mvc-asset-base",
      external: true,
    },
  ],
};

const contactInfo = {
  email: "mcgillventuresclub@gmail.com",
  location: "Montreal, QC",
};

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/mcgillvc/",
    Icon: Linkedin,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/mcgillvc/",
    Icon: Instagram,
  },
];

const LINK = "font-body text-white/80 transition-colors hover:text-white";

function FooterLink({
  label,
  href,
  external,
}: {
  label: string;
  href: string;
  external?: boolean;
}) {
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={LINK}>
        {label}
        <span className="sr-only">(opens in a new tab)</span>
      </a>
    );
  }
  return (
    <Link href={href} className={LINK}>
      {label}
    </Link>
  );
}

/** Closing screen. `fullHeight` stretches it to the viewport for full-screen pages. */
export default function Footer({
  fullHeight = false,
}: {
  fullHeight?: boolean;
}) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={cn(
        "relative flex flex-col overflow-hidden bg-black text-white",
        fullHeight && "min-h-[100dvh]",
      )}
    >
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-between gap-10 px-6 pt-16 pb-8 md:px-12 lg:px-24 lg:pt-20">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:items-end">
          <h2 className="max-w-4xl font-display text-[clamp(2rem,4vw,3.75rem)] leading-[1.02] text-balance">
            <SplitText text="Join the team behind McGill's startup scene." />
          </h2>
          <Reveal delay={300} className="flex flex-wrap gap-4 lg:justify-end">
            <Button href="/programs">
              Explore Programs
              <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <Button href="/contact" variant="secondary">
              Get in touch
            </Button>
          </Reveal>
        </div>

        <div>
          <Reveal className="grid gap-10 border-t border-white/15 pt-8 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.6fr)]">
            <div>
              <Image
                src="/logos/white_logo_transparent.png"
                alt="McGill Ventures"
                width={2592}
                height={340}
                className="h-7 w-auto"
              />
              <p className="mt-5 max-w-xs font-body text-white/60">
                McGill University&apos;s venture capital and startup club.
              </p>
              <ul className="mt-6 flex gap-3">
                {socials.map(({ label, href, Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${label} (opens in a new tab)`}
                      className="flex size-10 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors duration-300 hover:border-white hover:bg-white hover:text-black"
                    >
                      <Icon className="size-4" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-heading text-sm text-white/50">Company</h4>
              <ul className="mt-4 space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <FooterLink {...link} />
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-heading text-sm text-white/50">Resources</h4>
              <ul className="mt-4 space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.href}>
                    <FooterLink {...link} />
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-heading text-sm text-white/50">Contact</h4>
              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className={cn(LINK, "inline-flex items-center gap-2")}
                  >
                    <Mail className="size-4 shrink-0 text-purple-300" />
                    <span className="break-all lg:break-normal">
                      {contactInfo.email}
                    </span>
                  </a>
                </li>
                <li className="inline-flex items-center gap-2 font-body text-white/80">
                  <MapPin className="size-4 shrink-0 text-purple-300" />
                  {contactInfo.location}
                </li>
              </ul>
            </div>
          </Reveal>

          <div className="mt-8 border-t border-white/15 pt-6 font-body text-sm text-white/45">
            © {currentYear} McGill Ventures. All rights reserved.
          </div>
        </div>
      </div>

      {/* Ghost wordmark behind the whole section, wider than the viewport. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <Image
          src="/logos/white_logo_transparent.png"
          alt=""
          width={2592}
          height={340}
          className="w-[115%] max-w-none opacity-[0.06]"
        />
      </div>
    </footer>
  );
}
