import SectionHeading from '../ui/SectionHeading.jsx'

const STACK = [
  { cat: 'CRM',                  tools: ['Salesforce', 'HubSpot', 'Pipedrive', 'Close'] },
  { cat: 'Sales engagement',     tools: ['Outreach', 'Salesloft', 'Apollo', 'Smartlead'] },
  { cat: 'Data & enrichment',    tools: ['ZoomInfo', 'Apollo', 'Cognism', 'LeadIQ'] },
  { cat: 'Intent signals',       tools: ['Bombora', '6sense', 'G2 Intent', 'Clearbit'] },
  { cat: 'Marketing automation', tools: ['Marketo', 'HubSpot', 'Pardot', 'Customer.io'] },
  { cat: 'Analytics & BI',       tools: ['Looker', 'Tableau', 'Mixpanel', 'GA4'] },
]

export default function TechStack() {
  return (
    <section className="section bg-slate-50/60 border-y border-slate-100">
      <div className="container-app">
        <SectionHeading
          eyebrow="Tools & integrations"
          title="We work inside your existing stack"
          subtitle="No tool migrations, no lock-in. We operate inside whatever CRM, MA platform and outreach tools you're already using."
        />

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {STACK.map((row) => (
            <div key={row.cat} className="card">
              <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wide">
                {row.cat}
              </h3>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {row.tools.map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-slate-500">
          Don't see your tools? <a href="/contact" className="brand-text font-medium hover:underline">Send us your stack</a>  we've yet to find one we can't work inside.
        </p>
      </div>
    </section>
  )
}
