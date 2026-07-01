import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, Plus } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading.jsx'
import CTA from './CTA.jsx'

export default function ServiceTemplate({
  name, tagline, intro = [], whatYouGet = [], process = [], faqs = [],
  metrics = [], relatedSlug, relatedName,
}) {
  return (
    <article>
      {/* HEADER */}
      <section className="relative bg-gradient-to-b from-brand-50/50 via-white to-white border-b border-slate-100">
        <div className="absolute inset-0 grid-fade opacity-40 pointer-events-none" />
        <div className="container-app relative section-tight pt-16 md:pt-20">
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-6">
            <Link to="/" className="hover:text-slate-900">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-slate-900">Services</Link>
            <span>/</span>
            <span className="text-slate-900">{name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <span className="chip-brand">Service</span>
              <h1 className="mt-4 text-h1 font-bold text-slate-900 tracking-tight text-balance">
                {name}
              </h1>
              {tagline && (
                <p className="mt-5 text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl">
                  {tagline}
                </p>
              )}
              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <Link to="/contact" className="btn-primary btn-lg">
                  Book a consultation <ArrowRight size={16} />
                </Link>
                <Link to="/services" className="btn-secondary btn-lg">
                  All services
                </Link>
              </div>
            </div>

            {metrics.length > 0 && (
              <div className="lg:col-span-5">
                <div className="grid grid-cols-1 gap-3">
                  {metrics.map((m, i) => (
                    <div key={i} className="card flex items-center gap-4">
                      <div className="text-3xl font-bold brand-text shrink-0 w-20">{m.n}</div>
                      <div className="text-sm text-slate-600 leading-snug">{m.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      {intro.length > 0 && (
        <section className="section bg-white">
          <div className="container-app">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-4">
                <span className="eyebrow">Overview</span>
                <h2 className="section-heading">Why this matters</h2>
              </div>
              <div className="lg:col-span-8 space-y-4 text-slate-700 leading-relaxed">
                {intro.map((p, i) => (
                  <p key={i} className={i === 0 ? 'text-lg text-slate-800' : ''}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* DELIVERABLES */}
      {whatYouGet.length > 0 && (
        <section className="section bg-slate-50/60 border-y border-slate-100">
          <div className="container-app">
            <SectionHeading
              eyebrow="What\u2019s included"
              title="Tangible deliverables you keep"
              subtitle="Everything we build on this engagement lives in your tools and stays with you when the engagement ends."
            />
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
              {whatYouGet.map((item, i) => (
                <div key={i} className="card flex items-start gap-3">
                  <CheckCircle2 size={20} className="brand-text shrink-0 mt-0.5" />
                  <p className="text-slate-700 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* PROCESS */}
      {process.length > 0 && (
        <section className="section bg-white">
          <div className="container-app">
            <SectionHeading
              eyebrow="How it runs"
              title="The engagement workflow"
              subtitle="A predictable cadence with clear milestones at every stage."
            />
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
              {process.map((p, i) => (
                <div key={i} className="card">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full brand-bg text-white text-sm font-bold">
                    {i + 1}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold text-slate-900">{p.t}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{p.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQS */}
      {faqs.length > 0 && (
        <section className="section bg-slate-50/60 border-y border-slate-100">
          <div className="container-app">
            <SectionHeading
              eyebrow="FAQ"
              title="Questions worth asking"
              align="center"
            />
            <div className="mt-10 max-w-3xl mx-auto divide-y divide-slate-200 border-y border-slate-200">
              {faqs.map((f, i) => (
                <details key={i} className="group">
                  <summary className="flex items-start justify-between gap-4 py-5 cursor-pointer list-none">
                    <h3 className="text-base md:text-[17px] font-semibold text-slate-900 pr-6">{f.q}</h3>
                    <span className="shrink-0 w-7 h-7 inline-flex items-center justify-center rounded-full bg-white text-slate-600 group-open:brand-bg group-open:text-white transition-colors">
                      <Plus size={14} className="transition-transform group-open:rotate-45" />
                    </span>
                  </summary>
                  <p className="pb-5 -mt-1 text-slate-600 leading-relaxed pr-12">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* RELATED */}
      {relatedSlug && (
        <section className="bg-white">
          <div className="container-app py-10 md:py-14 border-t border-slate-100">
            <Link
              to={`/services/${relatedSlug}`}
              className="card card-hover flex items-center justify-between max-w-2xl mx-auto group"
            >
              <div>
                <span className="text-xs text-slate-500 uppercase tracking-wide font-semibold">Next service</span>
                <h3 className="mt-1 text-xl font-semibold text-slate-900 group-hover:brand-text transition-colors">{relatedName}</h3>
              </div>
              <ArrowRight size={22} className="text-slate-400 group-hover:brand-text group-hover:translate-x-1 transition-all" />
            </Link>
          </div>
        </section>
      )}

      <CTA />
    </article>
  )
}
