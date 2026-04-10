"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn, getActiveLinkClasses } from "@/lib/utils";
import { NavigationProps } from "@/types";
import { ANIMATION_CLASSES } from "@/constants";
import { Icon } from "@/components/ui";

const TOP_NAV_ITEMS = [
  { href: "/about", label: "About", comingSoon: false },
  { href: "https://www.project-atlas.ca/", label: "Project ATLAS", comingSoon: true },
  { href: "/contact", label: "Contact", comingSoon: false },
];

const DROPDOWN_ITEMS = [
  { href: "/programs", label: "Programs" },
  { href: "/fund", label: "Fund" },
  { href: "/events", label: "Events" },
  { href: "/team", label: "Team" },
  { href: "/sponsors", label: "Sponsorships & Partners" },
];

const MOBILE_ALL_ITEMS = [
  { href: "/about", label: "About", comingSoon: false },
  { href: "/programs", label: "Programs", comingSoon: false },
  { href: "/fund", label: "Fund", comingSoon: false },
  { href: "/events", label: "Events", comingSoon: false },
  { href: "/team", label: "Team", comingSoon: false },
  { href: "/sponsors", label: "Sponsorships & Partners", comingSoon: false },
  { href: "https://www.project-atlas.ca/", label: "Project ATLAS", comingSoon: true },
  { href: "/contact", label: "Contact", comingSoon: false },
];

export default function Navigation({ currentPage }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setIsMoreOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinkClasses = "transition-all duration-300 relative group font-heading text-lg font-semibold cursor-pointer px-4 py-2 rounded-lg";
  const activeClasses = "text-white bg-purple-800/50";
  const inactiveClasses = "text-purple-100 hover:text-white hover:bg-purple-800/30";
  const mobileNavLinkClasses = "block px-4 py-3 rounded-lg transition-all duration-200 font-heading text-lg font-semibold cursor-pointer";

  return (
    <nav className="flex items-center justify-between px-6 py-8 md:px-12 lg:px-24 relative z-50 bg-purple-900 border-b border-purple-950/50">
      <div className={cn(ANIMATION_CLASSES.FADE_IN_LEFT, "mr-auto")}>
        <Link href="/" className={cn("flex items-center cursor-pointer overflow-hidden", ANIMATION_CLASSES.HOVER_SCALE)}>
          <Image
            src="/logos/white_logo_transparent.png"
            alt="McGill Ventures Logo"
            width={120}
            height={40}
            className="h-8 w-auto object-contain"
            priority
          />
        </Link>
      </div>

      {/* Desktop Nav */}
      <div className={cn("hidden md:flex items-center space-x-4", ANIMATION_CLASSES.FADE_IN_UP)}>
        {TOP_NAV_ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.comingSoon ? "#" : item.href}
            title={item.comingSoon ? "Coming Soon" : undefined}
            onClick={item.comingSoon ? (e) => e.preventDefault() : undefined}
            className={cn(
              navLinkClasses,
              item.comingSoon
                ? "opacity-50 cursor-not-allowed text-purple-100"
                : getActiveLinkClasses(currentPage, item.href, activeClasses, inactiveClasses)
            )}
          >
            {item.label}
            {!item.comingSoon && (
              <span className={cn(
                "absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-300 to-purple-200 transition-all duration-300 rounded-full",
                currentPage === item.href ? "w-full" : "w-0 group-hover:w-full"
              )} />
            )}
          </Link>
        ))}

        {/* More Dropdown */}
        <div ref={moreRef} className="relative">
          <button
            onClick={() => setIsMoreOpen(prev => !prev)}
            className={cn(
              navLinkClasses,
              "flex items-center gap-1",
              isMoreOpen ? activeClasses : inactiveClasses
            )}
          >
            More
            <span className="text-sm transition-transform duration-200" style={{ transform: isMoreOpen ? "rotate(180deg)" : "rotate(0deg)" }}>
              ▾
            </span>
            <span className={cn(
              "absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-300 to-purple-200 transition-all duration-300 rounded-full",
              "w-0 group-hover:w-full"
            )} />
          </button>

          {/* Dropdown Menu */}
          <div
            className={cn(
              "absolute right-0 top-full mt-2 min-w-[220px] bg-white rounded-lg border border-gray-200 shadow-[0_4px_12px_rgba(0,0,0,0.1)] z-50 py-2 transition-all duration-200 ease-in-out origin-top-right",
              isMoreOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
            )}
          >
            {DROPDOWN_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMoreOpen(false)}
                className="block px-5 py-3 text-[15px] font-medium text-gray-700 hover:bg-[#F9F5FF] hover:text-[#5A189A] transition-all duration-150 cursor-pointer"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Hamburger */}
      <button
        onClick={toggleMobileMenu}
        className={cn(
          "md:hidden p-3 rounded-xl hover:bg-purple-800 transition-colors cursor-pointer",
          ANIMATION_CLASSES.SLIDE_IN_RIGHT
        )}
        aria-label="Toggle mobile menu"
        aria-expanded={isMobileMenuOpen}
      >
        <Icon
          name={isMobileMenuOpen ? "close" : "menu"}
          className={cn(
            "text-white transition-transform duration-300",
            isMobileMenuOpen && "rotate-90"
          )}
          size="lg"
        />
      </button>

      {/* Mobile Menu */}
      <div className={cn(
        "absolute top-full left-0 right-0 bg-purple-900 border-b border-purple-950/50 md:hidden transition-all duration-300 ease-in-out",
        isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
      )}>
        <div className="px-6 py-4 space-y-2">
          {MOBILE_ALL_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.comingSoon ? "#" : item.href}
              onClick={(e) => {
                if (item.comingSoon) {
                  e.preventDefault();
                } else {
                  closeMobileMenu();
                }
              }}
              className={cn(
                mobileNavLinkClasses,
                item.comingSoon
                  ? "opacity-50 cursor-not-allowed text-purple-100"
                  : getActiveLinkClasses(currentPage, item.href, activeClasses, inactiveClasses)
              )}
            >
              {item.label}
              {item.comingSoon && <span className="sr-only">(Coming Soon)</span>}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
