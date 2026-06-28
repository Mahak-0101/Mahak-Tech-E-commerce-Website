/**
 * PORTFOLIO SECTION (Section 10.3)
 * Real outcomes with specific metrics
 * Medium-high motion intensity
 */

const CASE_STUDIES = [
  {
    id: 'case-1',
    title: '40% Reduction in Processing Time',
    category: 'AI Optimization',
    description: 'Custom ML pipeline for enterprise data processing',
  },
  {
    id: 'case-2',
    title: '10M+ Daily Active Users',
    category: 'SaaS Platform',
    description: 'Scalable platform serving enterprise clients',
  },
  {
    id: 'case-3',
    title: '99.99% Uptime',
    category: 'Infrastructure',
    description: 'Mission-critical cybersecurity infrastructure',
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="w-full bg-panel-fog py-32 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <p className="caption text-indigo-electric mb-4">PROOF</p>
          <h2 className="h1 text-obsidian-ink">Recent Work</h2>
        </div>

        {/* Case Studies Carousel/Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CASE_STUDIES.map((study) => (
            <a
              key={study.id}
              href={`/work/${study.id}`}
              className="group p-8 rounded-2xl bg-white border border-hairline hover:shadow-lg transition-all duration-300"
            >
              <p className="caption text-cyan-signal mb-3 uppercase">
                {study.category}
              </p>
              <h3 className="h2 text-obsidian-ink mb-3 group-hover:text-indigo-electric transition-colors">
                {study.title}
              </h3>
              <p className="text-slate-mist">{study.description}</p>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a href="/work" className="btn btn-primary">
            View All Work
          </a>
        </div>
      </div>
    </section>
  );
}
