import ServiceTemplate from '../../components/sections/ServiceTemplate.jsx'

export default function MQL() {
  return (
    <ServiceTemplate
      name="MQL Programs"
      tagline="Marketing-qualified leads  engaged, scored and nurtured into sales-ready opportunities, without spamming them out of the funnel."
      intro={[
        'An MQL that\u2019s been spammed is worth less than a cold contact. Yet most MQL programs are exactly that  a contact who downloaded one whitepaper and now gets six emails a week begging them to book a demo.',
        'We design MQL programs that respect the buyer: educational nurture, content that earns the next interaction, and scoring that captures real engagement instead of clicks. The lead arrives at the SDR\u2019s desk warmer than they entered.',
      ]}
      whatYouGet={[
        'A lead scoring model tuned to your sales motion',
        'Nurture sequences segmented by persona and engagement depth',
        'Hand-off workflows from MQL → SQL with documented criteria',
        'Weekly engagement and conversion cohort analysis',
        'A library of nurture content built around real buyer questions',
        'Quarterly model retraining based on closed-won feedback',
      ]}
      process={[
        { t: 'Score modelling', d: 'We analyse your last 12 months of MQLs to find what actually predicts conversion. Then build the scoring model against those signals.' },
        { t: 'Sequence design',  d: 'Nurture flows that respect the buyer\u2019s cadence. We test send frequency and content depth against open and reply rates.' },
        { t: 'Hand-off rules',   d: 'Clear, documented criteria for when an MQL becomes an SQL  and what context goes with it. No more "did they get the email" mysteries.' },
        { t: 'Tune continuously', d: 'Monthly review of cohort behaviour. Retire content that under-performs, double down on what works.' },
      ]}
      faqs={[
        { q: 'How long is the typical nurture window?',         a: '60-180 days depending on sales cycle. We segment sequences so a 90-day buyer isn\u2019t getting 30-day messaging.' },
        { q: 'Can you work inside our existing MA platform?',   a: 'Yes. Marketo, HubSpot, Pardot, Customer.io, Eloqua  we work inside whatever you\u2019re using.' },
        { q: 'What if our MQLs aren\u2019t converting today?',  a: 'Usually a hand-off problem, not an MQL problem. We start by auditing what happens between MQL and the first SDR conversation.' },
      ]}
      metrics={[
        { n: '35%', l: 'MQL → SQL conversion uplift' },
        { n: '5x',  l: 'Engagement on nurture content' },
        { n: '40%', l: 'Reduction in unsubscribe rate' },
      ]}
      relatedSlug="sql"
      relatedName="SQL Programs"
    />
  )
}
