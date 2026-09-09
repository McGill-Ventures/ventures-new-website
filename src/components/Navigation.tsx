"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { NavigationProps } from "@/types";
import { Icon } from "@/components/ui";

type NavLink = { href: string; label: string };

type Venture = NavLink & {
  tagline: string;
  logo: { src: string; width: number; height: number };
  external: boolean;
  /** Each property wears its own brand colours rather than McGill Ventures purple. */
  pill: string;
  taglineClass: string;
};

const SITE_LINKS: NavLink[] = [
  { href: "/about", label: "About Us" },
  { href: "/programs", label: "Our Programs" },
  { href: "/fund", label: "Fund" },
  { href: "/events", label: "Events" },
];

/** Secondary pages: nav-bar space is tight, so these live in the drawer and the footer. */
const DRAWER_LINKS: NavLink[] = [
  ...SITE_LINKS,
  { href: "/team", label: "Team" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/contact", label: "Contact" },
];

const VENTURES: Venture[] = [
  {
    href: "https://www.project-atlas.ca/",
    label: "Project ATLAS",
    tagline: "Our flagship research initiative",
    logo: { src: "/logos/project-atlas-mark.png", width: 320, height: 320 },
    external: true,
    // project-atlas.ca grounds on #0a0a0a; that flat black is heavy against a
    // light nav, so this leans it toward the violet in their logo mark. The
    // inset highlight fakes a glass edge — a real backdrop-filter nested inside
    // the already-glass header would blur a uniform backdrop for nothing.
    pill:
      "border border-white/12 bg-gradient-to-br from-[#2c2358] via-[#1a1238] to-[#120c26] text-[#f2f0fa] shadow-[0_4px_16px_-4px_rgba(26,18,56,0.55),inset_0_1px_0_rgba(255,255,255,0.14)] hover:border-[#8b5cf6]/45 hover:shadow-[0_10px_26px_-6px_rgba(139,92,246,0.6),inset_0_1px_0_rgba(255,255,255,0.2)] focus-visible:outline-[#8b5cf6]",
    taglineClass: "text-[#f2f0fa]/60",
  },
  {
    href: "/growth-studio",
    label: "Growth Studio",
    tagline: "Hands-on support for founders",
    logo: { src: "/growth-studio/logo-mark.webp", width: 88, height: 85 },
    external: false,
    // Growth Studio brand: white ground, #241454 ink, #f3f13a yellow. The
    // yellow is held back to a hover ring so it never sits next to McGill
    // Ventures purple at full strength.
    pill:
      "border border-[#241454]/15 bg-white text-[#241454] shadow-[0_4px_14px_-4px_rgba(36,20,84,0.18)] hover:border-[#ddd94f] hover:shadow-[0_10px_26px_-6px_rgba(224,220,90,0.7)] focus-visible:outline-[#3a1fb0]",
    taglineClass: "text-[#241454]/60",
  },
];

const PILL_BASE =
  "group inline-flex items-center gap-2 whitespace-nowrap rounded-full font-heading font-semibold transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2";

const ROLL =
  "block transition-transform duration-[260ms] ease-[cubic-bezier(.6,0,.2,1)] motion-reduce:transition-none";

function VentureMark({ logo, className }: { logo: Venture["logo"]; className?: string }) {
  return (
    <Image
      src={logo.src}
      alt=""
      width={logo.width}
      height={logo.height}
      className={cn("shrink-0 object-contain", className)}
    />
  );
}

export default function Navigation({ currentPage }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const closeMobileMenu = useCallback(() => setIsMobileMenuOpen(false), []);
  // inert blurs focus to <body>, so hand it back to the control that opened it.
  const dismissMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
    toggleRef.current?.focus();
  }, []);

  useEffect(() => {
    // Separate enter/exit thresholds. With one threshold, sub-pixel scroll
    // jitter crosses it repeatedly and restarts the transition each time.
    const onScroll = () =>
      setIsScrolled((prev) => (prev ? window.scrollY > 8 : window.scrollY > 64));
    // Seed off the exit threshold: entering needs >64, so reloading at e.g.
    // scrollY 40 would otherwise render the at-rest bar over a scrolled page.
    setIsScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => e.key === "Escape" && dismissMobileMenu();
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isMobileMenuOpen, dismissMobileMenu]);

  return (
    <>
      {/* Reserves the header's at-rest height. The header is fixed so that its
          shrink-on-scroll cannot change document height — scroll anchoring would
          subtract that from scrollY and oscillate the scrolled state. */}
      <div aria-hidden className="h-20" />
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          isScrolled
            ? "border-b border-purple-950/10 bg-gradient-to-b from-white/80 to-white/80 shadow-[0_8px_30px_-14px_rgba(88,28,135,0.35)] backdrop-blur-xl backdrop-saturate-150"
            : // Matches the top of every hero's white -> purple-50 wash, so the
              // bar dissolves into the page instead of seaming against it.
              "bg-gradient-to-b from-white to-purple-50"
        )}
      >
        <nav
          aria-label="Main"
          className={cn(
            "mx-auto flex max-w-7xl items-center gap-3 px-6 transition-[height] duration-300",
            isScrolled ? "h-16" : "h-20"
          )}
        >
          {/* flex-1 on both outer groups is what centres the links */}
          <Link
            href="/"
            onClick={closeMobileMenu}
            className="flex flex-1 shrink-0 items-center justify-start transition-transform duration-300 hover:scale-[1.03]"
          >
            <Image
              src="/logos/main_logo_wordmark.png"
              alt="McGill Ventures"
              width={2576}
              height={302}
              className={cn(
                // shrink-0: without it flex compresses the wordmark to absorb overflow
                "w-auto shrink-0 object-contain transition-[height] duration-300",
                isScrolled ? "h-5 xl:h-6" : "h-6 xl:h-7"
              )}
              sizes="(max-width: 640px) 210px, 260px"
              priority
            />
          </Link>

          <div className="hidden items-center gap-4 lg:flex xl:gap-8">
            {SITE_LINKS.map(({ href, label }) => {
              const isActive = currentPage === href;
              return (
                <Link
                  key={href}
                  href={href}
                  aria-current={isActive ? "page" : undefined}
                  className="group relative px-1 py-2 font-heading text-lg font-semibold whitespace-nowrap xl:px-2"
                >
                  {/* leading-8 keeps descenders clear of the clip edge */}
                  <span className="relative block overflow-hidden leading-8">
                    <span
                      className={cn(
                        ROLL,
                        "text-purple-950/70",
                        isActive
                          ? "-translate-y-full"
                          : "group-hover:-translate-y-full group-focus-visible:-translate-y-full"
                      )}
                    >
                      {label}
                    </span>
                    <span
                      aria-hidden
                      className={cn(
                        ROLL,
                        "absolute inset-0 text-purple-900",
                        isActive
                          ? "translate-y-0"
                          : "translate-y-full group-hover:translate-y-0 group-focus-visible:translate-y-0"
                      )}
                    >
                      {label}
                    </span>
                  </span>
                </Link>
              );
            })}
          </div>

          <div className="flex flex-1 items-center justify-end gap-2">
            <div className="hidden items-center gap-2 lg:flex">
              {VENTURES.map((v) => (
                <Link
                  key={v.href}
                  href={v.href}
                  target={v.external ? "_blank" : undefined}
                  rel={v.external ? "noopener noreferrer" : undefined}
                  className={cn(PILL_BASE, v.pill, "py-1.5 pr-3 pl-1 text-base xl:pr-4 xl:pl-1.5")}
                >
                  <VentureMark logo={v.logo} className="h-6 w-6 xl:h-7 xl:w-7" />
                  {v.label}
                  {v.external && <span className="sr-only">(opens in a new tab)</span>}
                </Link>
              ))}
            </div>

            <button
              ref={toggleRef}
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="rounded-xl p-2.5 text-purple-950 transition-colors hover:bg-purple-100 lg:hidden"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <Icon name={isMobileMenuOpen ? "close" : "menu"} size="lg" />
            </button>
          </div>
        </nav>

        <div
          aria-hidden
          onClick={dismissMobileMenu}
          className={cn(
            "absolute inset-x-0 top-full h-[100dvh] bg-purple-950/25 transition-opacity duration-300 lg:hidden",
            isMobileMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
          )}
        />
        <div
          id="mobile-menu"
          inert={!isMobileMenuOpen}
          className={cn(
            "absolute inset-x-0 top-full overflow-y-auto overscroll-contain border-b border-purple-950/10 bg-white/95 backdrop-blur-xl transition-all duration-300 lg:hidden",
            isMobileMenuOpen
              ? "max-h-[calc(100dvh-100%)] opacity-100"
              : "pointer-events-none max-h-0 opacity-0"
          )}
        >
          <div className="px-6 pt-2 pb-6">
            {DRAWER_LINKS.map(({ href, label }) => {
              const isActive = currentPage === href;
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={closeMobileMenu}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "block rounded-xl px-4 py-3 font-heading text-lg font-semibold transition-colors",
                    isActive
                      ? "bg-purple-100 text-purple-900"
                      : "text-purple-950/80 hover:bg-purple-50 hover:text-purple-900"
                  )}
                >
                  {label}
                </Link>
              );
            })}

            <p className="mt-5 mb-3 px-4 font-heading text-xs font-semibold tracking-[0.16em] text-purple-950/45 uppercase">
              Our ventures
            </p>
            <div className="space-y-3">
              {VENTURES.map((v) => (
                <Link
                  key={v.href}
                  href={v.href}
                  onClick={closeMobileMenu}
                  target={v.external ? "_blank" : undefined}
                  rel={v.external ? "noopener noreferrer" : undefined}
                  className={cn(PILL_BASE, v.pill, "w-full gap-3 rounded-2xl py-3 pr-5 pl-3 text-left whitespace-normal")}
                >
                  <VentureMark logo={v.logo} className="h-10 w-10" />
                  <span>
                    <span className="block text-base">
                      {v.label}
                      {v.external && <span className="sr-only">(opens in a new tab)</span>}
                    </span>
                    <span className={cn("block text-xs font-medium", v.taglineClass)}>
                      {v.tagline}
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
