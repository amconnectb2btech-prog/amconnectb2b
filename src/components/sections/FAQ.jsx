import { Plus } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading.jsx'

const FAQS = [
  { q: 'How quickly can you start delivering qualified leads?',          a: 'Most engagements move into live operations in week three. The first two weeks are spent on discovery, ICP modelling and engine setup skipping this typically costs more than it saves.' },
  { q: 'What\u2019s a typical engagement size and length?',                a: 'Most engagements run six months with a clean handover at the end. Pricing depends on scope and target volume but typically starts at $8K/month for single-service programs.' },
  { q: 'Do you guarantee a number of leads or meetings?',                a: 'We agree to clear monthly targets at kickoff, tied to qualified meetings and pipeline impact. We don\u2019t guarantee volume guarantees almost always create the wrong incentives around lead quality.' },
  { q: 'Who owns the data and contacts you generate?',                   a: 'You do. Every contact, score, recording and learning lives in your CRM from day one. When the engagement ends, you keep everything no clawbacks, no walled garden.' },
  { q: 'Can you work with our existing sales / marketing team?',         a: 'Yes that\u2019s how every engagement runs. We operate as an in-house extension with daily Slack standups, shared dashboards, and your team in every key meeting.' },
  { q: 'Which regions and industries do you focus on?',                  a: 'B2B software, fintech and enterprise platforms selling into India, Southeast Asia, the EU and the US. Best fit for ACVs above $10K with sales cycles of 30-180 days.' },
]

export default function FAQ() {
  return (
    <section className="section bg-white">
      <div className="container-app">
        <SectionHeading
          eyebrow="Frequently asked"
          title="Common questions, plainly answered"
          subtitle="Anything not covered here? Email us and a real human will write back within a working day."
          align="center"
        />

        <div className="mt-10 max-w-3xl mx-auto divide-y divide-slate-200 border-y border-slate-200">
          {FAQS.map((f, i) => (
            <details key={i} className="group">
              <summary className="flex items-start justify-between gap-4 py-5 cursor-pointer list-none">
                <h3 className="text-base md:text-[17px] font-semibold text-slate-900 pr-6">{f.q}</h3>
                <span className="shrink-0 w-7 h-7 inline-flex items-center justify-center rounded-full bg-slate-100 text-slate-600 group-open:brand-bg group-open:text-white transition-colors">
                  <Plus size={14} className="transition-transform group-open:rotate-45" />
                </span>
              </summary>
              <p className="pb-5 -mt-1 text-slate-600 leading-relaxed pr-12">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
