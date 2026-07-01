import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, Star } from 'lucide-react'

export default function Hero() {
  const clientAvatars = [
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80', // Woman corporate portrait
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80', // Man professional portrait
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80'  // Woman smiling portrait
];


  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50/40 via-white to-white border-b border-slate-100">
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 grid-fade opacity-50 pointer-events-none" />

      <div className="container-app relative pt-14 md:pt-20 pb-14 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left: copy */}
          <div className="lg:col-span-7 animate-fade-up">
          <div className="inline-flex items-center gap-1.5 text-xs tracking-tight">
            <span className="font-semibold text-indigo-600">Pune</span>
            <span className="text-slate-600">B2B demand specialists</span>
          </div>
            <h1 className="mt-5 text-h1 font-bold text-slate-900 tracking-tight text-balance">
              Predictable B2B pipeline.{' '}
              <span className="brand-text">Built by experts.</span>
            </h1>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
              We help B2B software, fintech and enterprise companies generate qualified leads, book sales meetings, and grow pipeline without inflating headcount or budget.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <Link to="/contact" className="btn-primary btn-lg">
                Book a free consultation <ArrowRight size={16} />
              </Link>
              <Link to="/services" className="btn-secondary btn-lg">
                Explore services
              </Link>
            </div>

            {/* Trust row */}
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="brand-text" />
                No long-term lock-in
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="brand-text" />
                Pay-for-performance options
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="brand-text" />
                100% data ownership
              </div>
            </div>
          </div>

          {/* Right: visual card */}
          <div className="lg:col-span-5 animate-fade-up" style={{ animationDelay: '120ms' }}>
            <div className="relative">
              {/* Decorative blob */}
              <div className="absolute -inset-4 brand-tint-bg rounded-2xl rotate-1" />
              <div className="relative bg-white rounded-xl border border-slate-200 shadow-card-hover p-6">
                {/* Mini dashboard mock */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div>
                    <div className="text-xs text-slate-500">Pipeline this quarter</div>
                    <div className="mt-1 text-2xl font-bold text-slate-900">$2.4M</div>
                  </div>
                  <div className="chip-brand">↑ 38%</div>
                </div>

                <div className="mt-4 space-y-3">
                  {[
                    { label: 'Qualified meetings', val: '142', pct: 88 },
                    { label: 'BANT leads sourced', val: '328', pct: 72 },
                    { label: 'SQL conversion rate', val: '34%', pct: 60 },
                  ].map((row) => (
                    <div key={row.label}>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-600">{row.label}</span>
                        <span className="font-semibold text-slate-900">{row.val}</span>
                      </div>
                      <div className="mt-1.5 h-1.5 rounded-full bg-slate-100 overflow-hidden">
                        <div className="h-full rounded-full brand-bg" style={{ width: `${row.pct}%` }} />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-2">
                  {/* <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-7 h-7 rounded-full bg-gradient-to-br from-brand-400 to-brand-700 border-2 border-white" />
                    ))}
                  </div> */}
                    {/* Avatar Stack */}
                  <div className="flex -space-x-2">
                    {clientAvatars.map((src, i) => (
                      <img
                        key={i}
                        src={src}
                        alt={`Client testimonial ${i + 1}`}
                        className="w-7 h-7 rounded-full border-2 border-white object-cover bg-slate-100"
                      />
                    ))}
                  </div>
                  <div className="flex items-center text-amber-500">
                    {Array.from({length: 5}).map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                  </div>
                  <span className="text-xs text-slate-500">Rated 4.9 by clients</span>
                </div>
              </div>

              {/* Floating mini cards */}
              <div className="hidden md:block absolute -left-6 -bottom-6 bg-white rounded-lg border border-slate-200 shadow-card p-3 max-w-[180px]">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-md brand-tint-bg flex items-center justify-center">
                    <CheckCircle2 size={16} className="brand-text" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-500">Meeting booked</div>
                    <div className="text-xs font-semibold text-slate-900">VP, Acme Cloud</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
