import { useEffect, useState } from 'react'
import { Star, Quote } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading.jsx'
import { getTestimonials } from '../../firebase/services.js'
import { useFeature } from '../../context/SiteContext.jsx'
import { SkeletonCard } from '../ui/PageShimmer.jsx'

const FALLBACK = [
  { id: 'fb-1', quote: 'AMConnectB2B took us from noisy outbound to a focused engine. SQL volume is up, sales cycles are shorter, and we own all the data.', name: 'Priya Menon', title: 'VP Demand Generation', company: 'Northstar Cloud' },
  { id: 'fb-2', quote: 'They refused to send anything unqualified in month one. By month three, our pipeline had doubled. That kind of patience is rare in this industry.', name: 'Daniel Ortega', title: 'CMO', company: 'Levermark' },
  { id: 'fb-3', quote: 'Operates like an in-house team  daily standups, shared dashboards, candid feedback. The easiest renewal decision we made all year.', name: 'Mei Chen', title: 'Head of Growth', company: 'Polaris Data' },
]

export default function Testimonials() {
  const show = useFeature('showTestimonials')
  const [items, setItems] = useState(null)

  useEffect(() => {
    let alive = true
    getTestimonials()
      .then((rows) => alive && setItems(rows?.length ? rows : FALLBACK))
      .catch(() => alive && setItems(FALLBACK))
    return () => { alive = false }
  }, [])

  if (!show) return null

  return (
    <section className="section bg-white">
      <div className="container-app">
        <SectionHeading
          eyebrow="What clients say"
          title="Loved by B2B marketing and sales leaders"
          subtitle="Engagements that translate into pipeline, repeatable processes, and measurable revenue impact."
        />

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items === null ? (
            <><SkeletonCard /><SkeletonCard /><SkeletonCard /></>
          ) : (
            items.slice(0, 6).map((t) => (
              <figure key={t.id} className="card flex flex-col h-full">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-0.5 text-amber-400">
                    {Array.from({length: 5}).map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  <Quote size={18} className="text-brand-200" />
                </div>
                <blockquote className="text-slate-700 leading-relaxed text-[15px] flex-1">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-400 to-brand-700 flex items-center justify-center text-white text-sm font-semibold">
                    {t.name?.charAt(0) || '?'}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">{t.name}</div>
                    <div className="text-xs text-slate-500">{t.title}{t.company && <>, {t.company}</>}</div>
                  </div>
                </figcaption>
              </figure>
            ))
          )}
        </div>
      </div>
    </section>
  )
}
