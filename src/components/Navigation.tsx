"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useCallback } from "react";
import { NavigationProps } from "@/types";
import { NAVIGATION_ITEMS, ANIMATION_CLASSES } from "@/constants";
import { cn, getActiveLinkClasses } from "@/lib/utils";

export default function Navigation({ currentPage }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const navLinkClasses = "transition-all duration-300 relative group font-heading text-lg font-semibold cursor-pointer px-4 py-2 rounded-lg";
  const activeClasses = "text-white bg-purple-800/50";
  const inactiveClasses = "text-purple-100 hover:text-white hover:bg-purple-800/30";

  const mobileNavLinkClasses = "block px-4 py-3 rounded-lg transition-all duration-200 font-heading text-lg font-semibold cursor-pointer";

  return (
    <nav className="flex items-center justify-between px-6 py-8 md:px-12 lg:px-24 relative z-50 bg-purple-900 border-b border-purple-950/50">
      <div className={ANIMATION_CLASSES.FADE_IN_LEFT}>
        <Link href="/" className={cn("flex items-center cursor-pointer", ANIMATION_CLASSES.HOVER_SCALE)}>
          <Image
            src="/logos/logo_white.png"
            alt="McGill Ventures Logo"
            width={60}
            height={60}
            className="w-12 h-12 md:w-16 md:h-16"
            priority
          />
          <h1 className="ml-3 font-display text-white font-black text-xl md:text-2xl lg:text-3xl whitespace-nowrap">
            McGill | Ventures
          </h1>
        </Link>
      </div>
      
      <div className={cn("hidden md:flex space-x-10", ANIMATION_CLASSES.FADE_IN_UP)}>
        {NAVIGATION_ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              navLinkClasses,
              getActiveLinkClasses(currentPage, item.href, activeClasses, inactiveClasses)
            )}
          >
            {item.label}
            <span className={cn(
              "absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-300 to-purple-200 transition-all duration-300 rounded-full",
              currentPage === item.href ? "w-full" : "w-0 group-hover:w-full"
            )} />
          </Link>
        ))}
      </div>

      <button 
        onClick={toggleMobileMenu}
        className={cn(
          "md:hidden p-3 rounded-xl hover:bg-purple-800 transition-colors cursor-pointer",
          ANIMATION_CLASSES.SLIDE_IN_RIGHT
        )}
        aria-label="Toggle mobile menu"
        aria-expanded={isMobileMenuOpen}
      >
        <svg 
          className={cn(
            "w-6 h-6 text-white transition-transform duration-300",
            isMobileMenuOpen && "rotate-90"
          )}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          {isMobileMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      <div className={cn(
        "absolute top-full left-0 right-0 bg-purple-900 border-b border-purple-950/50 md:hidden transition-all duration-300 ease-in-out",
        isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
      )}>
        <div className="px-6 py-4 space-y-2">
          {NAVIGATION_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMobileMenu}
              className={cn(
                mobileNavLinkClasses,
                getActiveLinkClasses(currentPage, item.href, activeClasses, inactiveClasses)
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}