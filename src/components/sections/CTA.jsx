import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export default function CTA() {
  return (
    <section className="section">
      <div className="container-app">
        <div className="relative rounded-2xl overflow-hidden brand-deep-bg text-white p-8 md:p-14">
          {/* Decorative grid */}
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
              backgroundSize: '24px 24px',
            }}
          />
          <div className="absolute -right-20 -top-20 w-72 h-72 rounded-full brand-bg opacity-30 blur-3xl" />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <h2 className="text-h2 font-bold tracking-tight text-balance">
                Ready to build predictable B2B pipeline?
              </h2>
              <p className="mt-3 text-lg text-white/80 max-w-2xl">
                Book a free 30-minute consultation. We'll review your current pipeline, identify the biggest opportunities, and share what a custom engagement could look like.
              </p>
              <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/90">
                {[
                  'Free 30-minute consultation',
                  'Custom proposal in 48 hours',
                  'No obligations',
                ].map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-brand-300" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <Link to="/contact" className="btn btn-lg bg-white text-slate-900 hover:bg-slate-100 shadow-sm">
                Book a meeting <ArrowRight size={16} />
              </Link>
              <a href="mailto:hello@amconnectb2b.com" className="btn btn-lg border border-white/30 text-white hover:bg-white/10">
                Email us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
