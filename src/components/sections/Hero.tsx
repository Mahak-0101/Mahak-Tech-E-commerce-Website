/**
 * HERO SECTION (Section 10.1)
 * Full-viewport dark canvas with Floating Technology Orb
 * Scroll-linked 3D camera movement
 * Scroll 0-100%: Orb fades in → camera orbits → headline fades → text reveals
 */

'use client';

import { useRef, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { useScrollState } from '@/lib/hooks/useScrollManager';

// Dynamically import OrbScene to avoid SSR issues with Three.js
const OrbScene = dynamic(() => import('@/components/3d/OrbScene'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-screen bg-obsidian-ink flex items-center justify-center">
      <div className="text-white opacity-50">Loading 3D scene...</div>
    </div>
  ),
});

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollState = useScrollState();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Calculate scroll progress specific to hero section
    // Progress: 0 at top of hero, 1 at bottom of hero
    if (containerRef.current) {
      const heroHeight = window.innerHeight;
      // More precise calculation based on hero section position
      const progress = Math.min(scrollState.scrollY / heroHeight, 1);
      setScrollProgress(progress);
    }
  }, [scrollState.scrollY]);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative w-full h-screen bg-obsidian-ink flex items-center justify-center overflow-hidden"
    >
      {/* 3D Orb Canvas Background */}
      <div className="absolute inset-0 w-full h-full">
        <OrbScene scrollProgress={scrollProgress} />
      </div>

      {/* Text Content Overlay */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 pointer-events-none px-4"
        style={{
          opacity: Math.max(1 - scrollProgress * 1.5, 0), // Fade out as scroll progresses
          transform: `translateY(${scrollProgress * 20}px)`,
          transition: 'none',
        }}
      >
        <div className="max-w-3xl">
          {/* Section Tag */}
          <p
            className="caption text-cyan-signal mb-6 inline-block"
            style={{
              opacity: Math.max(1 - scrollProgress, 0),
            }}
          >
            NEXT GENERATION
          </p>

          {/* Main Headline */}
          <h1
            className="display text-white mb-6"
            style={{
              opacity: Math.max(1 - scrollProgress, 0),
              transform: `scale(${Math.max(1 - scrollProgress * 0.2, 0.8)})`,
            }}
          >
            Technology <br /> Reimagined
          </h1>

          {/* Supporting Line */}
          <p
            className="body-lg text-slate-mist max-w-2xl mx-auto"
            style={{
              opacity: Math.max(1 - scrollProgress * 1.2, 0),
            }}
          >
            Engineering the future of AI, software, and digital transformation
          </p>
        </div>
      </div>

      {/* Scroll Affordance Indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 pointer-events-none"
        style={{
          opacity: Math.max(1 - scrollProgress * 2, 0),
        }}
      >
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>

      {/* Gradient Overlay for text contrast */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-obsidian-ink pointer-events-none"
        style={{ opacity: 0.3 }}
      />
    </section>
  );
}
