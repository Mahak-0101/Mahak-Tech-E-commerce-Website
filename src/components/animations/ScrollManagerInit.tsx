/**
 * SCROLL MANAGER INIT
 * Initializes GSAP ScrollSmoother on app load
 * Must run only on client side (useEffect)
 */

'use client';

import { useEffect } from 'react';
import { initScrollManager } from '@/lib/hooks/useScrollManager';

export default function ScrollManagerInit() {
  useEffect(() => {
    // Initialize scroll system only on client
    initScrollManager();
    
    return () => {
      // Cleanup if needed
    };
  }, []);

  return null; // This component doesn't render anything
}
