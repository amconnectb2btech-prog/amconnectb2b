import ServiceTemplate from '../../components/sections/ServiceTemplate.jsx'

export default function LeadGeneration() {
  return (
    <ServiceTemplate
      name="Lead Generation"
      tagline="Verified, opt-in B2B contacts sourced and warmed for your sales team  before they ever pick up the phone."
      intro={[
        'Most lead-gen programs are a slot machine: high volume, low truth, and a hangover when the lists go cold three weeks in.',
        'We work the other way around. We start with the buying committees you actually need to be in front of, build a model of who matters and why, and then go find them with the patience that work demands. Quantity is a by-product of quality, not the goal.',
      ]}
      whatYouGet={[
        'A documented ICP model your team can defend in any sales meeting',
        'Verified contact records: email, phone, role, and intent signals',
        'Cold-touch sequences personalised by segment, not by spray template',
        'Weekly cohort reports tying every contact back to source and signal',
        'Full transfer of all data and learnings at end of engagement',
        'GDPR-compliant data sourcing with audit-ready records',
      ]}
      process={[
        { t: 'Diagnose the funnel',  d: 'Two weeks looking at your CRM, your last 50 closed-wons and -losts, and the conversations your AEs are actually having.' },
        { t: 'Build the model',       d: 'ICP, firmographic and behavioural scoring, plus the channels and signals that actually predict pipeline for your business.' },
        { t: 'Source and verify',     d: 'Live sourcing with human verification  every contact carries provenance metadata you can audit at any time.' },
        { t: 'Warm and hand over',    d: 'First-touch sequences and a clean hand-off to your AEs with full context  never a cold-lead drop.' },
      ]}
      faqs={[
        { q: 'How is this different from buying a contact list?',         a: 'A purchased list gives you names. We give you a documented ICP model, the signals that predict readiness, and verified contacts with provenance  all in your CRM, owned by you.' },
        { q: 'What\u2019s the typical contact volume per month?',          a: '150 to 800 verified contacts per month depending on TAM size. We don\u2019t set volume targets  qualified meetings are the metric we hold ourselves to.' },
        { q: 'Who owns the contact data?',                                  a: 'You do. Every contact lives in your CRM from day one. When the engagement ends, you own all of it  no clawback, no walled garden.' },
      ]}
      metrics={[
        { n: '750+', l: 'Verified contacts in a typical month' },
        { n: '92%',  l: 'Data accuracy on email and phone' },
        { n: '6×',   l: 'Pipeline lift vs. prior lead programs' },
      ]}
      relatedSlug="demand-generation"
      relatedName="Demand Generation"
    />
  )
}
