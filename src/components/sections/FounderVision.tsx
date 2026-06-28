/**
 * FOUNDER VISION SECTION (Section 10.6)
 * Human warmth inside futuristic frame
 * The one moment the UI softens
 * Low motion intensity
 */

export default function FounderVisionSection() {
  return (
    <section id="founder" className="w-full bg-white py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Placeholder */}
          <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-indigo-electric/20 to-cyan-signal/20" />

          {/* Content */}
          <div>
            <p className="caption text-cyan-signal mb-4">FOUNDER VISION</p>
            <h2 className="h1 text-obsidian-ink mb-8">
              Building the Future of Technology
            </h2>

            <div className="space-y-6 text-slate-mist">
              <p>
                We believe that powerful technology and beautiful technology are not
                in tension. The companies building tomorrow&apos;s infrastructure should
                demonstrate the same care in every detail.
              </p>
              <p>
                MahakTech exists to prove that premium thinking and engineering rigor
                can be combined without compromise. Our work is proof of that principle.
              </p>
              <p>
                We&apos;re building more than products. We&apos;re building a standard for what
                technology companies can be.
              </p>
            </div>

            <div className="mt-12">
              <p className="font-semibold text-obsidian-ink">Mahak</p>
              <p className="text-sm text-slate-mist">Founder, MahakTech</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
