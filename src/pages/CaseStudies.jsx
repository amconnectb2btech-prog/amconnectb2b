import { useEffect, useState } from 'react'
import { ArrowRight, TrendingUp } from 'lucide-react'
import { getCaseStudies } from '../firebase/services.js'
import { useFeature } from '../context/SiteContext.jsx'
import { SkeletonCard } from '../components/ui/PageShimmer.jsx'
import CTA from '../components/sections/CTA.jsx'

const FALLBACK = [
  { id: 'fb-1', client: 'Northstar Cloud', sector: 'B2B SaaS', headline: 'Rebuilt a stalled outbound motion into a 20x ROI engine in two quarters.', summary: 'After a year of generic agency work, Northstar\'s pipeline was thin and noisy. We rebuilt the ICP, redesigned every touchpoint, and centred the program on BANT-qualified meetings  not vanity volume.', metrics: [{ n: '20x', l: 'ROI in 12 months' }, { n: '750+', l: 'qualified opportunities' }, { n: '50%', l: 'lower CAC' }] },
  { id: 'fb-2', client: 'Levermark', sector: 'Enterprise FinTech', headline: 'From cold-list spray to a structured demand engine inside one quarter.', summary: 'Sequenced content syndication with MQL nurture and a dedicated appointment desk. Result: doubled pipeline value with the same headcount.', metrics: [{ n: '2x', l: 'pipeline value' }, { n: '35%', l: 'MQL → SQL' }, { n: '14d', l: 'avg follow-up' }] },
  { id: 'fb-3', client: 'Polaris Data', sector: 'Data Infrastructure', headline: 'Moved enterprise pipeline from one-meeting-per-month to one-per-week, sustainably.', summary: 'A two-quarter engagement focused on six-figure ACV accounts. By month four, AEs held qualified discovery calls weekly with named accounts they\'d previously failed to reach.', metrics: [{ n: '4x', l: 'enterprise meetings' }, { n: '85%', l: 'show-up rate' }, { n: '60+', l: 'accounts engaged' }] },
]

export default function CaseStudies() {
  const show = useFeature('showCaseStudies')
  const [items, setItems] = useState(null)

  // useEffect(() => {
  //   let alive = true
  //   getCaseStudies()
  //     .then((rows) => alive && setItems(rows?.length ? rows : FALLBACK))
  //     .catch(() => alive && setItems(FALLBACK))
  //   return () => { alive = false }
  // }, [])

  useEffect(() => {
  let alive = true
  
  getCaseStudies()
    .then((rows) => {
      if (alive) {
        //console.log("Firestore Case Studies loaded:", rows);
        setItems(rows?.length ? rows : FALLBACK);
      }
    })
    .catch((err) => {
      if (alive) {
        console.error("Firebase Case Studies Retrieval Failed:", err); // Essential log
        setItems(FALLBACK);
      }
    })
    
  return () => { alive = false }
}, [])

  if (!show) {
    return (
      <section className="container-app py-24 text-center">
        <h1 className="text-h1 font-bold text-slate-900">Case studies coming soon</h1>
        <p className="mt-4 text-slate-600">Check back in a few weeks.</p>
      </section>
    )
  }

  return (
    <>
      <section className="relative bg-gradient-to-b from-brand-50/50 via-white to-white border-b border-slate-100">
        <div className="absolute inset-0 grid-fade opacity-40 pointer-events-none" />
        <div className="container-app relative pt-16 md:pt-20 pb-12">
          <div className="max-w-3xl">
            <span className="chip-brand">Selected work</span>
            <h1 className="mt-4 text-h1 font-bold text-slate-900 tracking-tight text-balance">
              Engagements that <span className="brand-text">moved real pipeline.</span>
            </h1>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed">
              A small sample of work where the program made it past the deck and into measurable revenue impact. Full case studies and reference calls available on request.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-slate-50/60 border-y border-slate-100">
        <div className="container-app">
          {items === null ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <SkeletonCard /><SkeletonCard /><SkeletonCard />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {items.map((cs) => (
                <article key={cs.id} className="card card-hover flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <span className="chip-brand">{cs.sector}</span>
                    <TrendingUp size={18} className="brand-text" />
                  </div>
                  <h2 className="text-lg font-semibold text-slate-900">{cs.client}</h2>
                  <h3 className="mt-2 text-base font-medium text-slate-800 leading-snug">{cs.headline}</h3>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed flex-1">{cs.summary}</p>

                  {cs.metrics?.length > 0 && (
                    <div className="mt-5 pt-4 border-t border-slate-100 grid grid-cols-3 gap-2">
                      {cs.metrics.map((m, idx) => (
                        <div key={idx}>
                          <div className="text-lg font-bold brand-text">{m.n}</div>
                          <div className="text-[11px] text-slate-500 leading-tight">{m.l}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  <button className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium brand-text hover:underline self-start">
                    Request full case study <ArrowRight size={14} />
                  </button>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <CTA />
    </>
  )
}
