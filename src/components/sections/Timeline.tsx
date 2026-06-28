/**
 * TIMELINE SECTION (Section 10.7)
 * Growth milestones with narrative progression
 * Medium motion intensity
 */

const MILESTONES = [
  {
    id: 'milestone-1',
    year: '2020',
    title: 'Founded',
    description: 'MahakTech established with a mission to build premium technology.',
  },
  {
    id: 'milestone-2',
    year: '2021',
    title: 'First Clients',
    description: 'Delivered initial suite of products to enterprise customers.',
  },
  {
    id: 'milestone-3',
    year: '2022',
    title: 'Scaled to 50+ Team Members',
    description: 'Expanded team across engineering, design, and operations.',
  },
  {
    id: 'milestone-4',
    year: '2023',
    title: 'AI Platform Launch',
    description: 'Launched proprietary AI platform for enterprise use.',
  },
  {
    id: 'milestone-5',
    year: '2024',
    title: 'Expansion to Asia',
    description: 'Opened regional offices and expanded market presence.',
  },
  {
    id: 'milestone-6',
    year: '2025',
    title: 'The Future Awaits',
    description: 'Building the next generation of technology solutions.',
  },
];

export default function TimelineSection() {
  return (
    <section id="timeline" className="w-full bg-panel-fog py-32 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="caption text-indigo-electric mb-4">OUR JOURNEY</p>
          <h2 className="h1 text-obsidian-ink">A Timeline of Growth</h2>
        </div>

        {/* Timeline */}
        <div className="space-y-12">
          {MILESTONES.map((milestone) => (
            <div key={milestone.id} className="flex gap-8">
              {/* Year Badge */}
              <div className="flex-shrink-0 w-24">
                <div className="text-2xl font-bold text-indigo-electric">
                  {milestone.year}
                </div>
              </div>

              {/* Content */}
              <div className="flex-grow pb-8 border-l-2 border-hairline pl-8">
                <h3 className="h3 text-obsidian-ink mb-2">{milestone.title}</h3>
                <p className="text-slate-mist">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
