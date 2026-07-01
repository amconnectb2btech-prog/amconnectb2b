import SectionHeading from '../ui/SectionHeading.jsx'
import { Search, Cog, Play, Award } from 'lucide-react'

const STEPS = [
  {
    n: '01', Icon: Search, t: 'Discovery & ICP',
    d: 'Two-week deep dive into your sales motion, recent wins/losses and buying committee. We map exactly who you should be reaching.',
  },
  {
    n: '02', Icon: Cog, t: 'Engine setup',
    d: 'We build the data pipeline, scoring model, outreach sequences and reporting  all inside your tools, owned by you.',
  },
  {
    n: '03', Icon: Play, t: 'Live operations',
    d: 'Daily outbound, weekly cohort reviews, and shared dashboards. We hold ourselves to qualified-meeting targets, not vanity metrics.',
  },
  {
    n: '04', Icon: Award, t: 'Handover',
    d: 'At month six, your in-house team owns the engine. Full playbooks, learnings and relationships transferred.',
  },
]

export default function Process() {
  return (
    <section className="section bg-white">
      <div className="container-app">
        <SectionHeading
          eyebrow="How we work"
          title="A proven 4-step engagement process"
          subtitle="Every engagement follows the same structured workflow  built for transparency, measurable outcomes, and a clean handover at the end."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connecting line on desktop */}
          <div className="hidden lg:block absolute top-7 left-[0%] right-[19.5%] h-px bg-gradient-to-r from-brand-200 via-brand-300 to-brand-200" />

          {STEPS.map(({ n, Icon, t, d }) => (
            <div key={n} className="relative">
              <div className="relative inline-flex items-center justify-center w-14 h-14 rounded-full bg-white border-2 border-brand-200 z-10">
                <Icon size={22} className="brand-text" />
                <span className="absolute -top-1 -right-1 inline-flex items-center justify-center w-6 h-6 rounded-full brand-bg text-white text-[11px] font-bold">
                  {n.replace('0','')}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">{t}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
