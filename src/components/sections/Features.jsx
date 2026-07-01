import SectionHeading from '../ui/SectionHeading.jsx'
import { Users, Database, BarChart3, Clock, Shield, MessageSquare } from 'lucide-react'

const FEATURES = [
  { Icon: Users,        t: 'Senior team, day one',           d: 'No rotating juniors. The team you meet at kickoff is the team you have throughout the engagement.' },
  { Icon: Database,     t: 'Your data, you keep it',         d: 'All contacts, scores and learnings live in your CRM. We migrate nothing, lock you into nothing.' },
  { Icon: BarChart3,    t: 'Outcome-based metrics',          d: 'We report on qualified meetings and pipeline impact  not vanity activity metrics like emails sent.' },
  { Icon: MessageSquare,t: 'Daily Slack standups',           d: 'Operate as an in-house extension. Daily updates, shared dashboards, candid feedback both ways.' },
  { Icon: Clock,        t: 'Six-month engagements',          d: 'No indefinite retainers. Every engagement is built to end with a clean handover to your team.' },
  { Icon: Shield,       t: 'Compliance & privacy',           d: 'GDPR-compliant data sourcing, opt-in verification, and audit-ready records on every contact.' },
]

export default function Features() {
  return (
    <section className="section bg-slate-50/60 border-y border-slate-100">
      <div className="container-app">
        <SectionHeading
          eyebrow="Why AMConnectB2B"
          title="What makes us different from a typical agency"
          subtitle="We've structured our engagements, team and pricing around the things B2B teams actually care about  and the things most agencies quietly skip."
        />

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map(({ Icon, t, d }) => (
            <div key={t} className="card card-hover">
              <span className="icon-badge mb-4">
                <Icon size={20} />
              </span>
              <h3 className="text-base font-semibold text-slate-900">{t}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
