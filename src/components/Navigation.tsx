"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { NavigationProps } from "@/types";
import { Icon } from "@/components/ui";
import { syncNav } from "@/lib/navSync";

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

const GLASS = "border backdrop-blur-xl backdrop-saturate-150";
const GLASS_LIGHT =
  "border-purple-950/10 bg-white/65 shadow-[0_12px_32px_-16px_rgba(88,28,135,0.4),inset_0_1px_0_rgba(255,255,255,0.9)]";
// Opaque enough to keep white text readable over a bright photo, which
// syncNav's background-colour probe cannot see.
const GLASS_DARK =
  "group-data-on-dark/nav:border-white/15 group-data-on-dark/nav:bg-[rgba(28,22,38,0.72)] group-data-on-dark/nav:shadow-[0_10px_30px_-14px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.08)]";

const ROLL =
  "block transition-transform duration-[260ms] ease-[cubic-bezier(.6,0,.2,1)] motion-reduce:transition-none";

export default function Navigation({ currentPage, lightHero }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const closeMobileMenu = useCallback(() => setIsMobileMenuOpen(false), []);
  // inert blurs focus to <body>, so hand it back to the control that opened it.
  const dismissMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
    toggleRef.current?.focus();
  }, []);

  // The layout's inline copy covers the first load; this covers client navigations.
  useEffect(() => syncNav(headerRef.current), []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => e.key === "Escape" && dismissMobileMenu();
    // At lg the menu is hidden, so an open one would leave the scroll locked.
    const desktop = window.matchMedia("(min-width: 64rem)");
    const onDesktop = (e: MediaQueryListEvent) => e.matches && closeMobileMenu();
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onDesktop);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onDesktop);
    };
  }, [isMobileMenuOpen, dismissMobileMenu, closeMobileMenu]);

  return (
    <>
      {/* Header is fixed, so this keeps the island's 80px band in the flow.
          Dark heroes pull up under it with `-mt-20`. */}
      <div aria-hidden className="h-20" />
      {/* data-on-dark comes from syncNav, not React state, so the island is right
          before hydration. It starts on unless the page opens on a light hero. */}
      <header
        ref={headerRef}
        data-nav=""
        data-on-dark={lightHero ? undefined : ""}
        suppressHydrationWarning
        className="group/nav pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4"
      >
        <div
          aria-hidden
          onClick={dismissMobileMenu}
          className={cn(
            "fixed inset-0 bg-purple-950/25 transition-opacity duration-300 lg:hidden",
            isMobileMenuOpen ? "pointer-events-auto opacity-100" : "opacity-0"
          )}
        />
        <div className="pointer-events-auto relative mx-auto max-w-7xl lg:w-fit">
          <nav
            aria-label="Main"
            className={cn(
              GLASS,
              GLASS_LIGHT,
              GLASS_DARK,
              "flex h-14 items-center gap-6 rounded-2xl pr-2 pl-5 transition-[background-color,border-color,box-shadow] duration-500 ease-out max-md:transition-none xl:gap-10"
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
                // shrink-0: without it flex compresses the wordmark to absorb overflow
                className="h-5 w-auto shrink-0 object-contain transition-opacity duration-500 ease-out group-data-on-dark/nav:opacity-0 max-md:transition-none xl:h-6"
                sizes="210px"
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
                className="absolute inset-0 size-full object-contain opacity-0 brightness-0 invert transition-opacity duration-500 ease-out group-data-on-dark/nav:opacity-100 max-md:transition-none"
                sizes="210px"
              />
            </Link>

            <div className="hidden items-center gap-4 lg:flex xl:gap-6">
              {SITE_LINKS.map(({ href, label }) => {
                const isActive = currentPage === href;
                return (
                  <Link
                    key={href}
                    href={href}
                    aria-current={isActive ? "page" : undefined}
                    className="group relative px-1 py-1 font-heading text-base font-semibold whitespace-nowrap text-purple-900 transition-colors duration-500 ease-out group-data-on-dark/nav:text-white xl:px-2 xl:text-lg"
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

            <Link
              href="/contact"
              aria-current={currentPage === "/contact" ? "page" : undefined}
              className={cn(
                "hidden h-10 items-center rounded-xl bg-purple-700 px-5 font-heading text-base font-semibold whitespace-nowrap text-white shadow-[0_6px_16px_-8px_rgba(88,28,135,0.8)] transition-[background-color,color,box-shadow] duration-300 hover:bg-purple-800 lg:flex",
                "group-data-on-dark/nav:bg-white group-data-on-dark/nav:text-purple-950 group-data-on-dark/nav:shadow-none group-data-on-dark/nav:hover:bg-purple-100",
                currentPage === "/contact" &&
                  "ring-2 ring-purple-700/30 ring-offset-2 ring-offset-transparent group-data-on-dark/nav:ring-white/40"
              )}
            >
              Contact
            </Link>

            <button
              ref={toggleRef}
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="ml-auto rounded-xl p-2 text-purple-950 transition-colors duration-500 group-data-on-dark/nav:text-white hover:bg-purple-950/5 group-data-on-dark/nav:hover:bg-white/10 max-md:transition-none lg:hidden"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <Icon name={isMobileMenuOpen ? "close" : "menu"} size="lg" />
            </button>
          </nav>

          {/* A sibling, not a child, of the nav: nested backdrop-filters only
              blur the parent's layer, not the page. */}
          <div
            id="mobile-menu"
            inert={!isMobileMenuOpen}
            className={cn(
              GLASS,
              GLASS_LIGHT,
              "absolute inset-x-0 top-full mt-2 max-h-[calc(100dvh-6rem)] origin-top overflow-y-auto overscroll-contain rounded-2xl bg-white/80 p-2 transition-[opacity,transform] duration-300 ease-out lg:hidden",
              isMobileMenuOpen ? "opacity-100" : "pointer-events-none -translate-y-2 scale-[0.98] opacity-0"
            )}
          >
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
                      ? "bg-purple-100/80 text-purple-900"
                      : "text-purple-950/80 hover:bg-purple-950/5 hover:text-purple-900"
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
