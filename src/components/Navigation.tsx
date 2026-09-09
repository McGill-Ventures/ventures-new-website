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
  pill: string;
  taglineClass: string;
};

const SITE_LINKS: NavLink[] = [
  { href: "/about", label: "About Us" },
  { href: "/programs", label: "Our Programs" },
  { href: "/fund", label: "Fund" },
  { href: "/events", label: "Events" },
];

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
    // No backdrop-filter here: nested inside the glass header it blurs nothing.
    pill:
      "animate-gradient border border-white/12 bg-gradient-to-br from-[#2c2358] via-[#332a72] to-[#120c26] text-[#f2f0fa] shadow-[0_4px_16px_-4px_rgba(26,18,56,0.55),inset_0_1px_0_rgba(255,255,255,0.14)] hover:border-[#8b5cf6]/45 hover:shadow-[0_10px_26px_-6px_rgba(139,92,246,0.6),inset_0_1px_0_rgba(255,255,255,0.2)] focus-visible:outline-[#8b5cf6]",
    taglineClass: "text-[#f2f0fa]/60",
  },
  {
    href: "/growth-studio",
    label: "Growth Studio",
    tagline: "Hands-on support for founders",
    logo: { src: "/growth-studio/logo-mark.webp", width: 88, height: 85 },
    external: false,
    pill:
      "animate-gradient border border-[#241454]/15 bg-gradient-to-br from-white via-[#fffef8] to-[#fbf9ec] text-[#241454] shadow-[0_4px_14px_-4px_rgba(36,20,84,0.18)] hover:border-[#ddd94f] hover:shadow-[0_10px_26px_-6px_rgba(224,220,90,0.7)] focus-visible:outline-[#3a1fb0]",
    taglineClass: "text-[#241454]/60",
  },
];

const PILL_BASE =
  "group inline-flex items-center gap-2 whitespace-nowrap rounded-xl font-heading font-semibold transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2";

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
    // Separate thresholds: one would let scroll jitter re-trigger endlessly.
    const onScroll = () =>
      setIsScrolled((prev) => (prev ? window.scrollY > 8 : window.scrollY > 64));
    // Seeds off the exit threshold; reusing onScroll leaves an 8-64 dead zone.
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
      {/* Header is fixed, not sticky: condensing must not change document
          height, or scroll anchoring shifts scrollY and oscillates. */}
      <div aria-hidden className="h-20" />
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          isScrolled
            ? "border-b border-purple-950/10 bg-gradient-to-b from-white/80 to-white/80 shadow-[0_8px_30px_-14px_rgba(88,28,135,0.35)] backdrop-blur-xl backdrop-saturate-150"
            : // Matches the top of every hero's wash, so the bar leaves no seam.
              "bg-gradient-to-b from-white to-purple-50"
        )}
      >
        <nav
          aria-label="Main"
          className={cn(
            "mx-auto flex max-w-7xl items-center gap-6 px-6 transition-[height] duration-300 xl:gap-10",
            isScrolled ? "h-16" : "h-20"
          )}
        >
          <Link
            href="/"
            onClick={closeMobileMenu}
            className="flex shrink-0 items-center transition-transform duration-300 hover:scale-[1.03]"
          >
            <Image
              src="/logos/main_logo_wordmark.png"
              alt="McGill Ventures"
              width={2576}
              height={302}
              className={cn(
                // shrink-0: without it flex compresses the wordmark to absorb overflow
                "w-auto shrink-0 object-contain transition-[height] duration-300",
                isScrolled ? "h-5 xl:h-7" : "h-6 xl:h-8"
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

          <div className="ml-auto flex items-center gap-2">
            <div className="hidden grid-flow-col auto-cols-fr items-center gap-2 lg:grid">
              {VENTURES.map((v) => (
                <Link
                  key={v.href}
                  href={v.href}
                  target={v.external ? "_blank" : undefined}
                  rel={v.external ? "noopener noreferrer" : undefined}
                  className={cn(PILL_BASE, v.pill, "justify-center px-5 text-base", isScrolled ? "py-1" : "py-1.5")}
                >
                  <VentureMark logo={v.logo} className="size-7" />
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
