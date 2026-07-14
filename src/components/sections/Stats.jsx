import { useFeature } from '../../context/SiteContext.jsx'

const STATS = [
  { n: '20x',  l: 'Qualified opportunities sourced in 2025' },
  { n: '50%',  l: 'Average ROI on full-funnel engagements' },
  { n: '92%',  l: 'Lower CAC vs. prior agency programs' },
  { n: '90%',  l: 'Data accuracy on verified contacts' },
]

const RESULTS = [
  { n: '500+', l: 'Meetings booked' },
  { n: '25+',  l: 'Campaigns launched' },
  { n: '4',    l: 'Continents covered' },
  { n: '90%',  l: 'Client retention' },
]

export default function Stats() {
  const show = useFeature('showStats')
  if (!show) return null

  return (
    <section className="section pt-6 md:pt-10 pb-10 md:pb-14 bg-white">
      <div className="container-app space-y-12">
        
        {/* Client Request: Clear authority statement to offset the 2026 launch date */}
        <div className="max-w-3xl border-l-2 border-slate-900 pl-4 mb-6">
          <p className="text-sm text-slate-600 leading-relaxed">
            Founded in 2026 by B2B demand generation specialists with <span className="text-slate-950 font-semibold">10+ years of experience</span> generating enterprise meetings.
          </p>
        </div>

        {/* Core Performance Stats */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-6">Performance Metrics</h4>
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

        {/* Client Request: Results Delivered Stats */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-6">Results Delivered</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
            {RESULTS.map((s, i) => (
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

      </div>
    </section>
  )
}





// import { useFeature } from '../../context/SiteContext.jsx'

// const STATS = [
//   { n: '750+', l: 'Qualified opportunities sourced in 2025' },
//   { n: '20x',  l: 'Average ROI on full-funnel engagements' },
//   { n: '50%',  l: 'Lower CAC vs. prior agency programs' },
//   { n: '92%',  l: 'Data accuracy on verified contacts' },
// ]

// export default function Stats() {
//   const show = useFeature('showStats')
//   if (!show) return null

//   return (
//     <section className="section bg-white">
//       <div className="container-app">
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
//           {STATS.map((s, i) => (
//             <div
//               key={i}
//               className={`text-center md:px-4 ${i > 0 ? 'md:border-l border-slate-200' : ''}`}
//             >
//               <div className="stat-num brand-text">{s.n}</div>
//               <div className="stat-label">{s.l}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
