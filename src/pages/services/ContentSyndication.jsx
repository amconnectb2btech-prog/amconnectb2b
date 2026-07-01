import ServiceTemplate from '../../components/sections/ServiceTemplate.jsx'

export default function ContentSyndication() {
  return (
    <ServiceTemplate
      name="Content Syndication"
      tagline="Distribute your whitepapers and gated assets across trade publishers your buyers already read  with verified, opt-in downloads."
      intro={[
        'Most B2B content lives and dies on the company\u2019s own blog, read by the marketing team that wrote it and almost no one else. Syndication is how good content actually reaches the audience it was written for.',
        'We place your gated assets, whitepapers and research with publishers and communities your buyers already trust. Every download is verified, every contact is enriched, and every lead enters your CRM with source, asset and engagement context attached.',
      ]}
      whatYouGet={[
        'A curated publisher network mapped to your ICP and verticals',
        'Verified, opt-in downloads  no bought lists, no junk leads',
        'Cost-per-lead pricing with clear performance benchmarks',
        'Full attribution back to publisher, asset and campaign',
        'Optional nurture sequences keyed to the asset downloaded',
        'Weekly publisher performance reports with retire/scale decisions',
      ]}
      process={[
        { t: 'Asset audit',         d: 'Which of your existing pieces will syndicate well? What needs to be created? We map your library to publisher demand.' },
        { t: 'Publisher selection', d: 'Negotiate placement across publishers we have direct relationships with  avoid network resellers who recycle the same audience.' },
        { t: 'Distribute and verify', d: 'Every download is opt-in, every contact verified before it reaches your CRM. Failed verifications come off the invoice.' },
        { t: 'Report and tune',     d: 'Weekly performance by publisher, asset and persona. Retire under-performers fast, double down on what works.' },
      ]}
      faqs={[
        { q: 'How is this different from buying a list?',     a: 'Every contact opted in to download your specific asset on a publisher your audience reads. That\u2019s consent and context  not a list.' },
        { q: 'What\u2019s the typical cost-per-lead?',         a: '$35–$120 depending on persona seniority and vertical. We benchmark against your existing programs before quoting.' },
        { q: 'Can you create new content for this?',           a: 'Yes  our content team can produce whitepapers, research reports and gated guides specifically for syndication.' },
      ]}
      metrics={[
        { n: '12+',  l: 'Curated publisher partners across verticals' },
        { n: '100%', l: 'Opt-in, verified downloads' },
        { n: '$72',  l: 'Median cost-per-lead, decision-maker tier' },
      ]}
      relatedSlug="lead-generation"
      relatedName="Lead Generation"
    />
  )
}
