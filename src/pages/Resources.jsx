import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import { useFeature } from '../context/SiteContext.jsx'
import CTA from '../components/sections/CTA.jsx'

const POSTS = [
  { cat: 'Fieldnote', date: 'May 2026', read: '6 min', title: 'Why we don\u2019t guarantee leads.', excerpt: 'Every guarantee in B2B lead-gen is a story about volume. We tell a different story  about meetings that move pipeline.' },
  { cat: 'Playbook',  date: 'May 2026', read: '11 min', title: 'The two-week diagnostic we run before every engagement.', excerpt: 'The most under-rated phase of any go-to-market program is the one before any outreach happens. Here\u2019s what we look at.' },
  { cat: 'Opinion',   date: 'Apr 2026', read: '8 min',  title: 'BANT isn\u2019t dead. Lazy BANT is.', excerpt: 'Every few years someone declares BANT obsolete, replaced by [acronym of choice]. The framework was never the problem.' },
  { cat: 'Fieldnote', date: 'Apr 2026', read: '5 min',  title: 'On building demand programs that end.', excerpt: 'A six-month engagement that ends on time, with the client running the program, is the metric we actually care about.' },
  { cat: 'Research',  date: 'Mar 2026', read: '14 min', title: 'What we learned from 217 outbound campaigns.', excerpt: 'A look back across two years of engagements  what worked, what didn\u2019t, and the patterns that show up regardless of vertical.' },
  { cat: 'Playbook',  date: 'Mar 2026', read: '9 min',  title: 'Designing a lead scoring model that survives audit.', excerpt: 'Most scoring models work because nobody questions them. Here\u2019s how to build one that holds up when revenue ops digs in.' },
]

const CAT_COLORS = {
  Fieldnote: 'bg-blue-50 text-blue-700 border-blue-200',
  Playbook:  'bg-emerald-50 text-emerald-700 border-emerald-200',
  Opinion:   'bg-amber-50 text-amber-700 border-amber-200',
  Research:  'bg-violet-50 text-violet-700 border-violet-200',
}

export default function Resources() {
  const show = useFeature('showResources')

  if (!show) {
    return (
      <section className="container-app py-24 text-center">
        <h1 className="text-h1 font-bold text-slate-900">Resources are coming soon</h1>
        <p className="mt-4 text-slate-600">We'll be back with new posts shortly.</p>
      </section>
    )
  }

  return (
    <>
      <section className="relative bg-gradient-to-b from-brand-50/50 via-white to-white border-b border-slate-100">
        <div className="absolute inset-0 grid-fade opacity-40 pointer-events-none" />
        <div className="container-app relative pt-16 md:pt-20 pb-12">
          <div className="max-w-3xl">
            <span className="chip-brand">Resources</span>
            <h1 className="mt-4 text-h1 font-bold text-slate-900 tracking-tight text-balance">
              Playbooks, fieldnotes & <span className="brand-text">research</span>.
            </h1>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed">
              Practical notes on B2B demand  written by the people doing the work, not the marketing team. Infrequent on purpose.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-slate-50/60 border-y border-slate-100">
        <div className="container-app">
          {/* Featured post */}
          <article className="card card-hover lg:flex items-stretch p-0 overflow-hidden mb-8">
            <div className="lg:w-2/5 brand-tint-bg p-8 md:p-10 flex flex-col justify-center">
              <span className={`chip ${CAT_COLORS[POSTS[0].cat]} self-start`}>{POSTS[0].cat}</span>
              <h2 className="mt-4 text-2xl md:text-3xl font-bold text-slate-900 leading-tight">{POSTS[0].title}</h2>
            </div>
            <div className="lg:w-3/5 p-8 md:p-10">
              <div className="flex items-center gap-4 text-xs text-slate-500">
                <span className="flex items-center gap-1"><Calendar size={12} />{POSTS[0].date}</span>
                <span className="flex items-center gap-1"><Clock size={12} />{POSTS[0].read} read</span>
              </div>
              <p className="mt-3 text-slate-700 leading-relaxed">{POSTS[0].excerpt}</p>
              <button className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium brand-text hover:underline">
                Read article <ArrowRight size={14} />
              </button>
            </div>
          </article>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {POSTS.slice(1).map((p, i) => (
              <article key={i} className="card card-hover flex flex-col">
                <span className={`chip ${CAT_COLORS[p.cat]} self-start mb-4`}>{p.cat}</span>
                <h2 className="text-lg font-semibold text-slate-900 leading-snug">{p.title}</h2>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed flex-1">{p.excerpt}</p>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1"><Calendar size={11} />{p.date}</span>
                  <span className="flex items-center gap-1"><Clock size={11} />{p.read} read</span>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-slate-500">
            More posts as we write them. We publish when we have something useful to say  never on a calendar.
          </p>
        </div>
      </section>

      <CTA />
    </>
  )
}
