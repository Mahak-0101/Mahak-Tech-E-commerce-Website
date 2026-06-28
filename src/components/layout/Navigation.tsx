/**
 * NAVIGATION BAR
 * Persistent top nav that transitions from transparent (hero) to frosted-glass (scroll)
 * Section 5.3.1 from PDR
 */

'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const NAV_ITEMS = [
  { label: 'Work', href: '/work' },
  { label: 'Services', href: '/services' },
  { label: 'Products', href: '/products' },
  { label: 'Company', href: '/company' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Transition to solid state after ~hero height (100vh)
      setIsScrolled(window.scrollY > window.innerHeight * 0.5);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-fixed transition-all duration-300 ${
        isScrolled
          ? 'glass bg-white/80 backdrop-blur-xl border-b border-hairline'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold text-obsidian-ink hover:opacity-80 transition-opacity"
          >
            MahakTech
          </Link>

          {/* Primary Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  isScrolled
                    ? 'text-obsidian-ink hover:text-indigo-electric'
                    : 'text-white hover:text-cyan-signal'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Primary CTA Button */}
          <Link
            href="/contact"
            className="hidden md:inline-flex px-6 py-2.5 rounded-full bg-indigo-electric text-white font-medium hover:shadow-lg hover:scale-105 transition-all duration-200"
            style={{
              boxShadow: '0px 0px 24px rgba(91, 95, 239, 0.35)',
            }}
          >
            Contact
          </Link>

          {/* Mobile Menu Button (future: implement) */}
          <button
            className="md:hidden p-2 text-obsidian-ink"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
