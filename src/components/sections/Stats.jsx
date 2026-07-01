import { useFeature } from '../../context/SiteContext.jsx'

const STATS = [
  { n: '750+', l: 'Qualified opportunities sourced in 2025' },
  { n: '20×',  l: 'Average ROI on full-funnel engagements' },
  { n: '50%',  l: 'Lower CAC vs. prior agency programs' },
  { n: '92%',  l: 'Data accuracy on verified contacts' },
]

export default function Stats() {
  const show = useFeature('showStats')
  if (!show) return null

  return (
    <section className="section bg-white">
      <div className="container-app">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
          {STATS.map((s, i) => (
            <div
              key={i}
              className={`text-center md:px-4 ${i > 0 ? 'md:border-l border-slate-200' : ''}`}
            >
              <div className="stat-num brand-text">{s.n}</div>
              <div className="stat-label">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
