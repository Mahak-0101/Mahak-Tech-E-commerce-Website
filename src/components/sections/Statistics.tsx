/**
 * STATISTICS SECTION (Section 10.5)
 * Calm, still section with large numerals
 * Low motion intensity - stillness is the design strategy
 * Count-up animation on scroll entry
 */

'use client';

import { useRef } from 'react';
import { useCountUpOnScroll } from '@/lib/hooks/useScrollTrigger';

const STATISTICS = [
  {
    id: 'stat-1',
    value: 150,
    label: 'Projects Delivered',
  },
  {
    id: 'stat-2',
    value: 9999,
    label: 'Uptime (%)',
  },
  {
    id: 'stat-3',
    value: 95,
    label: 'Client Retention (%)',
  },
  {
    id: 'stat-4',
    value: 12,
    label: 'Years Experience',
  },
];

export default function StatisticsSection() {
  const stat1Ref = useRef<HTMLDivElement>(null);
  const stat2Ref = useRef<HTMLDivElement>(null);
  const stat3Ref = useRef<HTMLDivElement>(null);
  const stat4Ref = useRef<HTMLDivElement>(null);

  // Trigger count-up animations - hooks called at top level
  useCountUpOnScroll(stat1Ref, STATISTICS[0].value, 1.2);
  useCountUpOnScroll(stat2Ref, STATISTICS[1].value, 1.2);
  useCountUpOnScroll(stat3Ref, STATISTICS[2].value, 1.2);
  useCountUpOnScroll(stat4Ref, STATISTICS[3].value, 1.2);

  const refs = [stat1Ref, stat2Ref, stat3Ref, stat4Ref];

  return (
    <section id="statistics" className="w-full bg-obsidian-ink py-32 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <p className="caption text-cyan-signal mb-4">BY THE NUMBERS</p>
          <h2 className="h1 text-white">Proven Track Record</h2>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {STATISTICS.map((stat, idx) => (
            <div key={stat.id} className="text-center">
              <div
                ref={refs[idx]}
                className="text-6xl font-bold text-indigo-electric mb-4"
              >
                {stat.value}
              </div>
              <p className="caption text-slate-mist">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
