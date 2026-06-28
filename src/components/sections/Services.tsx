/**
 * SERVICES SECTION (Section 10.2)
 * Grid of service cards with 3D tilt-on-hover
 * Light background, medium motion intensity
 */

const SERVICES = [
  {
    id: 'ai-ml',
    name: 'AI & Machine Learning',
    description: 'Custom AI systems and machine learning solutions',
    tags: ['Neural Networks', 'LLMs', 'Computer Vision'],
  },
  {
    id: 'software',
    name: 'Software Engineering',
    description: 'Full-stack development with production-grade rigor',
    tags: ['Backend', 'Frontend', 'DevOps'],
  },
  {
    id: 'saas',
    name: 'SaaS Platforms',
    description: 'Scalable SaaS products built for enterprise',
    tags: ['Multi-tenant', 'APIs', 'Infrastructure'],
  },
  {
    id: 'security',
    name: 'Cybersecurity',
    description: 'Security-first architecture and compliance',
    tags: ['Penetration Testing', 'Infrastructure', 'Compliance'],
  },
  {
    id: 'design',
    name: 'Product Design',
    description: 'Premium user experiences, end-to-end',
    tags: ['UX Strategy', 'Design Systems', 'Interactions'],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="w-full bg-white py-32 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="caption text-indigo-electric mb-4">CAPABILITIES</p>
          <h2 className="h1 text-obsidian-ink">What We Build</h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="p-8 rounded-2xl border border-hairline bg-panel-fog hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              {/* Icon Placeholder */}
              <div className="w-12 h-12 rounded-lg bg-indigo-electric/10 mb-6 flex items-center justify-center">
                <div className="w-6 h-6 rounded-full border border-indigo-electric" />
              </div>

              <h3 className="h3 text-obsidian-ink mb-3">{service.name}</h3>
              <p className="text-slate-mist mb-6">{service.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-indigo-electric/10 text-xs font-medium text-indigo-electric"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="/services"
            className="btn btn-primary"
          >
            Explore Services
          </a>
        </div>
      </div>
    </section>
  );
}
