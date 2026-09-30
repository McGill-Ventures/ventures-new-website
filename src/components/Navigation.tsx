"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { NavigationProps } from "@/types";
import { Icon } from "@/components/ui";

type NavLink = { href: string; label: string };

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

const ROLL =
  "block transition-transform duration-[260ms] ease-[cubic-bezier(.6,0,.2,1)] motion-reduce:transition-none";

export default function Navigation({ currentPage, darkOver }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  // Dark chrome only while the bar overlaps one of the darkOver sections.
  const [dark, setDark] = useState(Boolean(darkOver));
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
    const sections = darkOver ? [...document.querySelectorAll(darkOver)] : [];
    if (!sections.length) return;
    // 64 is the condensed bar: dark while a dark section spans its bottom edge.
    const update = () =>
      setDark(
        sections.some((section) => {
          const { top, bottom } = section.getBoundingClientRect();
          return top <= 64 && bottom > 64;
        }),
      );
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [darkOver]);

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
          // Phones switch state instantly: easing the bar repainted the page for
          // half a second every time a scroll crossed the threshold.
          // Only what actually changes: transition-all also interpolated the
          // 0->1px bottom border out of the UA's near-white default colour,
          // which drew a white hairline across the bar in both directions.
          "fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-500 ease-out max-md:transition-none",
          isScrolled && "backdrop-blur-xl backdrop-saturate-150",
          isScrolled && dark && "border-white/10 bg-black/55 shadow-[0_8px_30px_-14px_rgba(0,0,0,0.6)]",
          isScrolled && !dark && "border-purple-950/10 shadow-[0_8px_30px_-14px_rgba(88,28,135,0.35)]",
          !isScrolled && "border-transparent"
        )}
      >
        {/* The light wash is its own layer so it can fade when the bar leaves a
            dark section: gradients cannot interpolate, opacity can. */}
        <div
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-0 -z-10 transition-opacity duration-500 ease-out max-md:transition-none",
            isScrolled
              ? "bg-gradient-to-b from-white/85 to-purple-50/85"
              : // Matches the top of every hero's wash, so the bar leaves no seam.
                "bg-gradient-to-b from-white to-purple-50",
            dark ? "opacity-0" : "opacity-100"
          )}
        />
        <nav
          aria-label="Main"
          className={cn(
            "mx-auto flex max-w-7xl items-center gap-6 px-6 transition-[height] duration-500 ease-out max-md:transition-none xl:gap-10",
            isScrolled ? "h-16" : "h-20"
          )}
        >
          <Link
            href="/"
            onClick={closeMobileMenu}
            className="relative flex shrink-0 items-center transition-transform duration-300 hover:scale-[1.03]"
          >
            <Image
              src="/logos/main_logo_wordmark.png"
              alt="McGill Ventures"
              width={2576}
              height={302}
              className={cn(
                // shrink-0: without it flex compresses the wordmark to absorb overflow
                "w-auto shrink-0 object-contain transition-[height,opacity] duration-500 ease-out max-md:transition-none",
                isScrolled ? "h-5 xl:h-7" : "h-6 xl:h-8",
                dark && "opacity-0"
              )}
              sizes="(max-width: 640px) 210px, 260px"
              priority
            />
            {/* Same file inverted to white, cross-faded instead of animating the
                filter, which passes through grey. */}
            <Image
              src="/logos/main_logo_wordmark.png"
              alt=""
              aria-hidden
              width={2576}
              height={302}
              className={cn(
                "absolute inset-0 size-full object-contain brightness-0 invert transition-opacity duration-500 ease-out max-md:transition-none",
                dark ? "opacity-100" : "opacity-0"
              )}
              sizes="(max-width: 640px) 210px, 260px"
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
                  className={cn(
                    "group relative px-1 py-2 font-heading text-lg font-semibold whitespace-nowrap transition-colors duration-500 ease-out xl:px-2",
                    dark ? "text-white" : "text-purple-900"
                  )}
                >
                  {/* leading-8 keeps descenders clear of the clip edge */}
                  <span className="relative block overflow-hidden leading-8">
                    <span
                      className={cn(
                        ROLL,
                        "opacity-70",
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
                        "absolute inset-0",
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

          <button
            ref={toggleRef}
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className={cn(
              "ml-auto rounded-xl p-2.5 transition-colors duration-500 max-md:transition-none lg:hidden",
              dark ? "text-white hover:bg-white/10" : "text-purple-950 hover:bg-purple-100"
            )}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <Icon name={isMobileMenuOpen ? "close" : "menu"} size="lg" />
          </button>
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
          </div>
        </div>
      </header>
    </>
  );
}
