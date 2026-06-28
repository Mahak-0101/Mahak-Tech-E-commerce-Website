/**
 * SCROLL TRIGGER HOOK
 * useScrollTrigger: Trigger animations when elements enter viewport
 * Handles staggered reveals (tag → headline → body → CTA)
 */

'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface RevealOptions {
  stagger?: boolean;
  delay?: number;
  duration?: number;
  ease?: string;
}

/**
 * Hook: Trigger animation when element enters viewport
 * 
 * Usage:
 * const ref = useRef<HTMLDivElement>(null);
 * useScrollTrigger(ref, { stagger: true });
 */
export function useScrollTrigger(
  ref: React.RefObject<HTMLElement>,
  options: RevealOptions = {}
) {
  useEffect(() => {
    if (!ref.current) return;

    const {
      stagger = true,
      delay = 0,
      duration = 500,
      ease = 'cubic-bezier(0.16, 1, 0.3, 1)', // ease-reveal
    } = options;

    if (stagger) {
      // Staggered reveal: tag → headline → body → CTA
      // Selectors: .caption, h1/h2/h3, p, .btn
      gsap.to(ref.current, {
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%',
          end: 'top 60%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 16,
        duration: 0,
        overwrite: 'auto',
      });

      // Animate caption
      const caption = ref.current.querySelector('.caption');
      if (caption) {
        gsap.to(caption, {
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 80%',
          },
          opacity: 1,
          y: 0,
          duration: duration / 1000,
          delay: delay / 1000,
          ease,
          overwrite: 'auto',
        });
      }

      // Animate heading
      const heading = ref.current.querySelector('h1, h2, h3');
      if (heading) {
        gsap.to(heading, {
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 80%',
          },
          opacity: 1,
          y: 0,
          duration: duration / 1000,
          delay: (delay + 80) / 1000,
          ease,
          overwrite: 'auto',
        });
      }

      // Animate body text
      const body = ref.current.querySelector('p');
      if (body) {
        gsap.to(body, {
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 80%',
          },
          opacity: 1,
          y: 0,
          duration: duration / 1000,
          delay: (delay + 150) / 1000,
          ease,
          overwrite: 'auto',
        });
      }

      // Animate CTA button
      const button = ref.current.querySelector('.btn');
      if (button) {
        gsap.to(button, {
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 80%',
          },
          opacity: 1,
          y: 0,
          duration: duration / 1000,
          delay: (delay + 200) / 1000,
          ease,
          overwrite: 'auto',
        });
      }
    } else {
      // Simple reveal: all at once
      gsap.from(ref.current, {
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 16,
        duration: duration / 1000,
        delay: delay / 1000,
        ease,
      });
    }
  }, [ref, options]);
}

/**
 * Hook: Parallax effect on scroll
 * Creates depth illusion with foreground/background separation
 */
export function useParallax(
  ref: React.RefObject<HTMLElement>,
  intensity = 0.5
) {
  useEffect(() => {
    if (!ref.current) return;

    gsap.to(ref.current, {
      scrollTrigger: {
        trigger: ref.current,
        scrub: 1,
        onUpdate: (self) => {
          const offset = self.getVelocity() * intensity;
          gsap.to(ref.current, {
            y: offset,
            duration: 0.5,
            overwrite: 'auto',
          });
        },
      },
    });
  }, [ref, intensity]);
}

/**
 * Hook: Fade in/out based on scroll position
 */
export function useScrollFade(
  ref: React.RefObject<HTMLElement>,
  startOpacity = 0,
  endOpacity = 1
) {
  useEffect(() => {
    if (!ref.current) return;

    gsap.to(ref.current, {
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 80%',
        end: 'top 20%',
        scrub: 1,
      },
      opacity: endOpacity,
      duration: 1,
    });
  }, [ref, startOpacity, endOpacity]);
}

/**
 * Hook: Counter animation (count from 0 to target)
 * For statistics section
 */
export function useCountUpOnScroll(
  ref: React.RefObject<HTMLElement>,
  target: number,
  duration = 1.2
) {
  useEffect(() => {
    if (!ref.current) return;

    const counter = { value: 0 };

    gsap.to(counter, {
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 80%',
        toggleActions: 'play none none none', // Play once
      },
      value: target,
      duration,
      ease: 'power2.out',
      onUpdate: () => {
        if (ref.current) {
          ref.current.innerText = Math.floor(counter.value).toLocaleString();
        }
      },
    });
  }, [ref, target, duration]);
}

// Hooks are exported as named exports above - no default export needed
