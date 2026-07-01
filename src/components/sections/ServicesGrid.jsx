import { Link } from 'react-router-dom'
import {
  Target, Megaphone, CalendarCheck, ShieldCheck,
  TrendingUp, Sparkles, FileText, ArrowRight,
} from 'lucide-react'
import SectionHeading from '../ui/SectionHeading.jsx'

const SERVICES = [
  { slug: 'lead-generation',         Icon: Target,         name: 'Lead Generation',         desc: 'Verified, opt-in B2B contacts sourced and warmed for your sales team.' },
  { slug: 'demand-generation',       Icon: Megaphone,      name: 'Demand Generation',       desc: 'Full-funnel demand programs built around your buyers and buying committee.' },
  { slug: 'appointment-generation',  Icon: CalendarCheck,  name: 'Appointment Generation',  desc: 'Booked meetings on your AEs\u2019 calendars with 80%+ show-up rates.' },
  { slug: 'bant',                    Icon: ShieldCheck,    name: 'BANT-Qualified Leads',    desc: 'Phone-verified leads with documented budget, authority, need and timing.' },
  { slug: 'mql',                     Icon: TrendingUp,     name: 'MQL Programs',            desc: 'Marketing-qualified leads, scored and nurtured into sales-ready opportunities.' },
  { slug: 'sql',                     Icon: Sparkles,       name: 'SQL Programs',            desc: 'Sales-qualified leads, surfaced from intent signals and ready for outreach.' },
  { slug: 'content-syndication',     Icon: FileText,       name: 'Content Syndication',     desc: 'Distribute your whitepapers and assets across publishers your buyers read.' },
]

export default function ServicesGrid() {
  return (
    <section className="section bg-slate-50/60 border-y border-slate-100">
      <div className="container-app">
        <SectionHeading
          eyebrow="What we offer"
          title="A complete set of B2B demand services"
          subtitle="Run each engagement on its own, or combine two or three into an end-to-end demand engine. Every service is built to deliver measurable pipeline impact."
        />

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map(({ slug, Icon, name, desc }) => (
            <Link
              key={slug}
              to={`/services/${slug}`}
              className="card card-hover group flex flex-col"
            >
              <span className="icon-badge mb-4">
                <Icon size={20} />
              </span>
              <h3 className="text-lg font-semibold text-slate-900 group-hover:brand-text transition-colors">
                {name}
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed flex-1">
                {desc}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium brand-text">
                Learn more <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}

          {/* Custom CTA card */}
          <Link
            to="/contact"
            className="card card-hover group flex flex-col brand-tint-bg border-brand-100"
          >
            <span className="icon-badge mb-4 bg-white">
              <ArrowRight size={20} />
            </span>
            <h3 className="text-lg font-semibold text-slate-900">
              Need something custom?
            </h3>
            <p className="mt-2 text-sm text-slate-700 leading-relaxed flex-1">
              We build tailored programs for niche ICPs, vertical-specific campaigns, and unique go-to-market motions. Get a free 30-minute consultation.
            </p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium brand-text">
              Talk to us <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
