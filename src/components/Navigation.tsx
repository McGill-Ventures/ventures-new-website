"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn, getActiveLinkClasses } from "@/lib/utils";
import { NavigationProps } from "@/types";
import { NAVIGATION_ITEMS, ANIMATION_CLASSES } from "@/constants";
import { Icon } from "@/components/ui";

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
      
      <div className={cn("hidden md:flex space-x-4", ANIMATION_CLASSES.FADE_IN_UP)}>
        {NAVIGATION_ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            title={item.comingSoon ? "Coming Soon" : undefined}
            onClick={item.comingSoon ? (e) => e.preventDefault() : undefined}
            className={cn(
              navLinkClasses,
              getActiveLinkClasses(currentPage, item.href, activeClasses, inactiveClasses)
              , item.comingSoon && "opacity-50 cursor-not-allowed"
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
        <Icon 
          name={isMobileMenuOpen ? "close" : "menu"}
          className={cn(
            "text-white transition-transform duration-300",
            isMobileMenuOpen && "rotate-90"
          )}
          size="lg"
        />
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
              onClick={(e) => {
                if (item.comingSoon) {
                  e.preventDefault();
                } else {
                  closeMobileMenu();
                }
              }}
              className={cn(
                mobileNavLinkClasses,
                getActiveLinkClasses(currentPage, item.href, activeClasses, inactiveClasses)
                , item.comingSoon && "opacity-50 cursor-not-allowed"
              )}
            >
              {item.label}
              {item.comingSoon && (
                <span className="sr-only">(Coming Soon)</span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}