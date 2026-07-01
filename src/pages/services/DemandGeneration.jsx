import ServiceTemplate from '../../components/sections/ServiceTemplate.jsx'

export default function DemandGeneration() {
  return (
    <ServiceTemplate
      name="Demand Generation"
      tagline="Full-funnel demand programs built around how your buyers actually decide  content, channels, qualification, all coordinated."
      intro={[
        'Demand generation has become a euphemism for "we ran some ads and made a webinar." That\u2019s not an engine, that\u2019s a hobby.',
        'Real demand generation is a coordinated system: content built around real buyer pain, channels chosen because your audience is on them (not because they\u2019re trendy), and qualification rigorous enough that your sales team trusts the leads when they land. We build that system end-to-end.',
      ]}
      whatYouGet={[
        'A 90-day demand strategy mapped to your buying committee',
        'Content production: long-form, gated assets, short-form distribution',
        'Paid and organic channel mix tuned to your ICP, not industry averages',
        'A working multi-touch attribution model your CFO will trust',
        'Live dashboards covering MQL → SQL → opportunity → revenue',
        'Quarterly business reviews with cohort analysis',
      ]}
      process={[
        { t: 'Audit the funnel',   d: 'Where is demand actually coming from today? What\u2019s working that you don\u2019t know is working? Where\u2019s the leak?' },
        { t: 'Design the engine', d: 'Content calendar, channel mix, scoring model and attribution  all documented and reviewed before anything goes live.' },
        { t: 'Operate it',         d: 'We run the engine end-to-end for six months: content, paid media, organic, nurture, qualification. Daily standups, weekly reviews.' },
        { t: 'Transfer',           d: 'Your team takes ownership with full playbooks, vendor relationships and dashboards. We\u2019re available for 90 days post-handover.' },
      ]}
      faqs={[
        { q: 'Do you produce the content yourselves?',           a: 'Yes  we have an in-house content team. We can also work with your existing content function if you have one.' },
        { q: 'What\u2019s a realistic timeline to impact?',       a: 'Pipeline impact usually shows up in months 3–4. Anyone promising results in week two is selling lead lists, not demand.' },
        { q: 'How much paid media should I expect to spend?',    a: 'Depends on ACV and TAM. For a $30K ACV B2B SaaS, $20–60K/month is a useful starting range. We\u2019ll model it before you commit a rupee.' },
      ]}
      metrics={[
        { n: '2×',  l: 'Pipeline value within two quarters' },
        { n: '35%', l: 'MQL → SQL conversion improvement' },
        { n: '50%', l: 'Lower customer acquisition cost' },
      ]}
      relatedSlug="appointment-generation"
      relatedName="Appointment Generation"
    />
  )
}
