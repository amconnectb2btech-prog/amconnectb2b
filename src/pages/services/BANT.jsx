import ServiceTemplate from '../../components/sections/ServiceTemplate.jsx'

export default function BANT() {
  return (
    <ServiceTemplate
      name="BANT-Qualified Leads"
      tagline="Budget, authority, need and timing  verified by phone, with a scorecard and recording attached to every lead."
      intro={[
        'BANT gets a bad rap because most teams treat it as a checklist to be ticked. Done well, it\u2019s the most useful gate you can put between a lead and your AE\u2019s calendar.',
        'We run BANT verification as a live phone call, recorded, with an explicit scorecard. Every contact handed to your team carries a documented answer to all four  and a recording you can play back if a deal turns out different from how it was scoped.',
      ]}
      whatYouGet={[
        'Phone-verified contacts with BANT confirmed across all four dimensions',
        'A written scorecard for every lead, attached to the CRM record',
        'Recorded calls (with consent) for any contact you want to audit',
        'A weekly BANT-quality report showing rejection reasons and trends',
        'Onboarding for your AEs on how to use scorecards in discovery',
        'Calibration sessions every quarter to tune the qualification gate',
      ]}
      process={[
        { t: 'Define the gate',  d: 'Work with your sales leadership to define what "qualified" actually means for your business  not textbook BANT, the one that works for your motion.' },
        { t: 'Train the team',   d: 'Our verification team is trained on your ICP, objections and pricing before any call goes out. We role-play before going live.' },
        { t: 'Verify and document', d: 'Live phone verification. Every contact gets a scorecard before they\u2019re passed. Failures are rejected with a documented reason.' },
        { t: 'Tune the gate',     d: 'Monthly review of rejection reasons and close-rate by BANT score, so the gate stays calibrated to what\u2019s actually converting.' },
      ]}
      faqs={[
        { q: 'What\u2019s the typical pass rate?',             a: '35–50% of contacts that look qualified on paper pass live BANT verification. The rejected half is where most of the value is.' },
        { q: 'Do you use AI for verification?',                a: 'No. BANT verification is a human conversation. We use AI to summarise calls afterwards, but the verification itself is done by trained operators.' },
        { q: 'How do AEs receive the leads?',                   a: 'A CRM record with the BANT scorecard, the call recording, and a one-paragraph context summary written by the verifier.' },
      ]}
      metrics={[
        { n: '45%',  l: 'Live pass rate on initial BANT review' },
        { n: '3.2×', l: 'Higher close rate vs. unverified leads' },
        { n: '100%', l: 'Leads documented with scorecard' },
      ]}
      relatedSlug="mql"
      relatedName="MQL Programs"
    />
  )
}
