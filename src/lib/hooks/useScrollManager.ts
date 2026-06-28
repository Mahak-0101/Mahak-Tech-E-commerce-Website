/**
 * SCROLL MANAGER
 * Centralized scroll system using GSAP ScrollSmoother
 * Single source of truth for all scroll-linked animations
 * Prevents competing scroll listeners and jank
 */

'use client';

import { useEffect, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

interface ScrollState {
  scrollY: number;
  progress: number; // 0-1 over full page height
  velocity: number; // pixels per frame
  isScrolling: boolean;
}

// Global scroll state (accessible to all components)
let globalScrollState: ScrollState = {
  scrollY: 0,
  progress: 0,
  velocity: 0,
  isScrolling: false,
};

// Listeners for scroll changes
const scrollListeners: ((state: ScrollState) => void)[] = [];

/**
 * Subscribe to scroll changes
 * Returns unsubscribe function
 */
export function onScroll(callback: (state: ScrollState) => void) {
  scrollListeners.push(callback);
  
  return () => {
    const index = scrollListeners.indexOf(callback);
    if (index > -1) {
      scrollListeners.splice(index, 1);
    }
  };
}

/**
 * Get current scroll state
 */
export function getScrollState(): ScrollState {
  return { ...globalScrollState };
}

/**
 * Hook: Use scroll state in React components
 * Re-renders component when scroll state changes
 */
export function useScrollState() {
  const [scrollState, setScrollState] = useState<ScrollState>(globalScrollState);

  useEffect(() => {
    const unsubscribe = onScroll((state) => {
      setScrollState(state);
    });

    return unsubscribe;
  }, []);

  return scrollState;
}

/**
 * Initialize GSAP ScrollSmoother and scroll tracking
 * Call this once on app mount (in layout or root component)
 */
export function initScrollManager() {
  // Create smooth scroll effect
  const smoother = gsap.to('body', {
    scrollTrigger: {
      trigger: 'body',
      onUpdate: (self) => {
        // Calculate scroll metrics
        const scrollY = window.scrollY || window.pageYOffset;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const progress = maxScroll > 0 ? scrollY / maxScroll : 0;

        // Update global state
        globalScrollState = {
          scrollY,
          progress,
          velocity: self.getVelocity(),
          isScrolling: Math.abs(self.getVelocity()) > 5,
        };

        // Notify all listeners
        scrollListeners.forEach((listener) => listener(globalScrollState));
      },
    },
    duration: 1,
    ease: 'power2.inOut',
  });

  // Update scroll triggers on window resize
  window.addEventListener('resize', () => {
    ScrollTrigger.refresh();
  });

  return smoother;
}

/**
 * Helper: Scroll to element smoothly
 */
export function scrollToElement(
  selector: string,
  offset = 0,
  duration = 1.2
) {
  const element = document.querySelector(selector);
  if (!element) return;

  const elementTop = (element as HTMLElement).offsetTop - offset;

  gsap.to(window, {
    scrollTo: elementTop,
    duration,
    ease: 'power3.inOut',
  });
}

/**
 * Helper: Scroll to section by ID
 */
export function scrollToSection(sectionId: string) {
  scrollToElement(`#${sectionId}`, -80); // Account for navbar height
}

// Hooks are exported as named exports above - no default export needed
