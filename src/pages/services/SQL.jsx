import ServiceTemplate from '../../components/sections/ServiceTemplate.jsx'

export default function SQL() {
  return (
    <ServiceTemplate
      name="SQL Programs"
      tagline="Sales-qualified leads surfaced from real intent signals  routed to your AEs in under an hour with full context."
      intro={[
        'An SQL is supposed to be a moment, not a label. The buyer has demonstrated intent, has done the homework, and is ready for a meaningful conversation about their problem and your solution.',
        'Our SQL programs are built around finding that moment. We watch intent signals across your owned channels and third-party data, score accounts in real time, and surface SQLs when the conversation is actually wanted.',
      ]}
      whatYouGet={[
        'Real-time intent signal aggregation across owned and third-party data',
        'Account-level scoring with documented signal weights',
        'AE-ready briefings: who, why now, what to say first',
        'Weekly SQL → opportunity conversion cohort reports',
        'Slack alerts when high-priority accounts trip the score threshold',
        'Closed-loop attribution back to source signal',
      ]}
      process={[
        { t: 'Signal inventory',   d: 'What signals do you have today? What\u2019s missing? We map every behavioural, intent and firmographic signal that should feed the score.' },
        { t: 'Score and threshold', d: 'Build the model and set the threshold. SQL becomes a moment  accounts cross in and out of it as their behaviour changes.' },
        { t: 'Brief and route',     d: 'Every SQL lands with a one-page brief: signals that triggered it, the right opener, and discovery questions worth asking.' },
        { t: 'Close the loop',      d: 'Track every SQL through to closed-won or -lost and feed that back into the score weights. The model sharpens every quarter.' },
      ]}
      faqs={[
        { q: 'Which intent providers do you use?',     a: 'Bombora, G2, 6sense, Clearbit  whatever fits the budget and ICP. We\u2019re tool-agnostic; we choose the provider that actually finds your buyers.' },
        { q: 'How quickly do SQLs reach AEs?',          a: 'Within an hour of crossing threshold, via Slack and CRM. Speed-to-lead matters; we don\u2019t let a hot signal sit overnight.' },
        { q: 'What if our AEs can\u2019t keep up?',     a: 'Good problem. We raise the threshold and add qualifying steps. The model is configurable  we can dial volume up or down to match capacity.' },
      ]}
      metrics={[
        { n: '<1h',  l: 'Median SQL → AE routing time' },
        { n: '4.5x', l: 'Opportunity creation vs. baseline' },
        { n: '60%',  l: 'Shorter time from SQL to first meeting' },
      ]}
      relatedSlug="content-syndication"
      relatedName="Content Syndication"
    />
  )
}
