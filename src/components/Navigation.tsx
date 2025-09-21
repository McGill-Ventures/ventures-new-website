"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface NavigationProps {
  currentPage?: string;
}

export default function Navigation({ currentPage }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/about", label: "About" },
    { href: "/programs", label: "Programs" },
    { href: "/sponsors", label: "Sponsors" },
    { href: "/team", label: "Team" },
    { href: "/contact", label: "Contact" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="flex items-center justify-between px-6 py-8 md:px-12 lg:px-24 relative z-50 bg-purple-900 border-b border-purple-950/50">
      <div className="animate-fade-in-left">
        <Link href="/" className="flex items-center hover-scale cursor-pointer">
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
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-10 animate-fade-in-up">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`transition-all duration-300 relative group font-heading text-lg font-semibold cursor-pointer px-4 py-2 rounded-lg ${
              currentPage === item.href 
                ? "text-white bg-purple-800/50" 
                : "text-purple-100 hover:text-white hover:bg-purple-800/30"
            }`}
          >
            {item.label}
            <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-300 to-purple-200 transition-all duration-300 rounded-full ${
              currentPage === item.href ? "w-full" : "w-0 group-hover:w-full"
            }`}></span>
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button 
        onClick={toggleMobileMenu}
        className="md:hidden p-3 rounded-xl hover:bg-purple-800 transition-colors animate-slide-in-right cursor-pointer"
        aria-label="Toggle mobile menu"
      >
        <svg 
          className={`w-6 h-6 text-white transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : ''}`} 
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

      {/* Mobile Menu */}
      <div className={`absolute top-full left-0 right-0 bg-purple-900 border-b border-purple-950/50 md:hidden transition-all duration-300 ease-in-out ${
        isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div className="px-6 py-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMobileMenu}
              className={`block px-4 py-3 rounded-lg transition-all duration-200 font-heading text-lg font-semibold cursor-pointer ${
                currentPage === item.href 
                  ? "text-white bg-purple-800/50" 
                  : "text-purple-100 hover:text-white hover:bg-purple-800/30"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}