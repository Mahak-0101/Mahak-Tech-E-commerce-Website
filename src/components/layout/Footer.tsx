/**
 * FOOTER
 * Comprehensive, low-motion footer with site map, links, and final CTA
 * Section 5.3.3 from PDR
 */

'use client';

import Link from 'next/link';

const FOOTER_SECTIONS = [
  {
    title: 'Product',
    links: [
      { label: 'Services', href: '/services' },
      { label: 'Products', href: '/products' },
      { label: 'Work', href: '/work' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/company' },
      { label: 'Careers', href: '/careers' },
      { label: 'Timeline', href: '/company#timeline' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy', href: '/legal/privacy' },
      { label: 'Terms', href: '/legal/terms' },
      { label: 'Cookies', href: '/legal/cookies' },
    ],
  },
];

const SOCIAL_LINKS = [
  { label: 'Twitter', href: 'https://twitter.com/mahaktech', target: '_blank' },
  { label: 'LinkedIn', href: 'https://linkedin.com/company/mahaktech', target: '_blank' },
  { label: 'GitHub', href: 'https://github.com/mahaktech', target: '_blank' },
];

export default function Footer() {
  return (
    <footer className="bg-obsidian-ink text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand & Description */}
          <div className="col-span-1">
            <h3 className="text-2xl font-bold mb-4">MahakTech</h3>
            <p className="text-sm text-slate-mist">
              Next-generation technology and AI solutions. Engineered for the future.
            </p>
          </div>

          {/* Footer Links */}
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-semibold uppercase tracking-widest mb-6">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-mist hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 mb-8" />

        {/* Bottom section: Social + CTA */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Social Links */}
          <div className="flex items-center gap-6">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.target}
                rel="noopener noreferrer"
                className="text-sm text-slate-mist hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Final CTA Button */}
          <Link
            href="/contact"
            className="px-6 py-2.5 rounded-full bg-indigo-electric text-white font-medium hover:shadow-lg hover:scale-105 transition-all duration-200 text-sm"
            style={{
              boxShadow: '0px 0px 24px rgba(91, 95, 239, 0.35)',
            }}
          >
            Start a Project
          </Link>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-xs text-slate-mist">
            © {new Date().getFullYear()} MahakTech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
