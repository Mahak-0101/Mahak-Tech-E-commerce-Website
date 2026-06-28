/**
 * CONTACT SECTION (Section 10.8)
 * Single unmistakable primary CTA
 * Calm, reassuring, zero distraction
 * Low-medium motion intensity
 */

export default function ContactSection() {
  return (
    <section id="contact" className="w-full bg-obsidian-ink py-32 px-4">
      <div className="max-w-3xl mx-auto text-center">
        {/* Section Header */}
        <p className="caption text-cyan-signal mb-6">LET&apos;S BUILD TOGETHER</p>
        <h2 className="display text-white mb-6">Ready to Transform?</h2>
        <p className="text-xl text-slate-mist mb-12">
          Tell us about your project. Let&apos;s discuss how we can help you build something
          extraordinary.
        </p>

        {/* Primary CTA */}
        <div className="space-y-6">
          <a
            href="/contact"
            className="btn btn-primary inline-block text-lg px-8 py-4"
          >
            Start a Project
          </a>

          {/* Secondary Contact Options */}
          <div className="pt-8 space-y-3 text-slate-mist">
            <p className="text-sm">
              Or reach out directly:{' '}
              <a
                href="mailto:hello@mahaktech.com"
                className="text-indigo-electric hover:underline"
              >
                hello@mahaktech.com
              </a>
            </p>
            <p className="text-sm">
              Office:{' '}
              <span className="text-white">
                Indore, India / San Francisco, CA
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
