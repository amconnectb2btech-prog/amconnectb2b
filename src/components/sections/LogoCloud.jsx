import { useFeature } from '../../context/SiteContext.jsx'

const VERTICALS = [
  'B2B SaaS', 'FinTech', 'Cybersecurity', 'Enterprise Cloud',
  'HR Tech', 'MarTech', 'DevTools', 'Data Platforms',
  'Healthcare IT', 'AI Infrastructure', 'Logistics Tech', 'EdTech',
]

export default function LogoCloud() {
  const show = useFeature('showLogoCloud')
  if (!show) return null

  // duplicate the list for seamless marquee
  const items = [...VERTICALS, ...VERTICALS]

  return (
    <section className="bg-slate-50 text-paper py-14 overflow-hidden">
      <div className="container-edit max-w-6xl mx-auto ">
        {/* <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <span className="text-[11px] font-semibold uppercase tracking-widest text-paper/60">
            02  Where we work
          </span>
          <p className="text-sm text-paper/70 max-w-md md:text-right">
            Twelve verticals, one playbook  adapted to the buying committees and signals
            of each.
          </p>
        </div> */}

        <div className="relative">
          {/* fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-ink-900 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-ink-900 to-transparent" />

          <div className="overflow-hidden">
            <div className="marquee-track inline-flex items-center gap-12 py-2">
              {items.map((v, i) => (
                <div key={i} className="flex items-center gap-12 shrink-0">
                  <span className="font-display text-2xl md:text-3xl tracking-editorial text-paper/90">
                    {v}
                  </span>
                  <span
                    className="block h-2 w-2 rounded-full shrink-0"
                    style={{ backgroundColor: 'var(--brand)' }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}







// import { useFeature } from '../../context/SiteContext.jsx'

// const VERTICALS = [
//   'B2B SaaS', 'FinTech', 'Cybersecurity', 'Cloud & Infra', 'HR Tech',
//   'MarTech', 'DevTools', 'Data Platforms', 'Healthcare IT', 'AI/ML',
//   'Logistics', 'EdTech',
// ]

// export default function LogoCloud() {
//   const show = useFeature('showLogoCloud')
//   if (!show) return null

//   return (
//     <section className="bg-slate-50 border-y border-slate-100">
//       <div className="container-app py-10">
//         <p className="text-center text-xs uppercase tracking-wider text-slate-500 font-semibold">
//           Trusted by B2B teams across these industries
//         </p>
//         <div className="mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
//           {VERTICALS.map((v) => (
//             <span
//               key={v}
//               className="px-3 py-1.5 bg-white border border-slate-200 rounded-full text-sm text-slate-700 hover:border-brand-300 hover:brand-text transition-colors"
//             >
//               {v}
//             </span>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
