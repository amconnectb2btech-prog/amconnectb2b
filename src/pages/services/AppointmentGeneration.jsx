import ServiceTemplate from '../../components/sections/ServiceTemplate.jsx'

export default function AppointmentGeneration() {
  return (
    <ServiceTemplate
      name="Appointment Generation"
      tagline="Booked meetings on your AEs\u2019 calendars with the right title, right account, right stage of intent  80%+ show rates."
      intro={[
        'There is a quiet way to grow pipeline and a loud way. The loud way fills calendars with no-shows, tire-kickers and the wrong titles. We do the quiet way.',
        'A meeting is only valuable if it has three things: the right person, the right context, and the right timing. Get one of those wrong and you\u2019ve wasted an hour of senior AE time. We optimise for all three.',
      ]}
      whatYouGet={[
        'A dedicated outbound desk operating inside your sequencing tool',
        'Calendar-to-calendar hand-off with full context and call notes',
        'Pre-meeting briefings sent to your AE 24 hours before each call',
        'Show-up reporting and weekly opportunity-creation cohorts',
        'No-show recovery sequences built into the workflow',
        'Recorded calls (with consent) for any meeting you want to audit',
      ]}
      process={[
        { t: 'Profile the buying committee', d: 'Title, function, signals  which combinations are worth your AE\u2019s time and which are not.' },
        { t: 'Build the sequences',          d: 'Email, LinkedIn, phone and content sequences personalised by segment. Every touch reviewed for tone before going live.' },
        { t: 'Book and brief',                d: 'Meetings land with a one-page brief: company context, the conversation that booked it, and the next-best question to ask.' },
        { t: 'Measure and tune',              d: 'Weekly cohort review on show rate, opportunity creation and downstream pipeline. We tune monthly.' },
      ]}
      faqs={[
        { q: 'What\u2019s a realistic show-up rate?',         a: '78-85% sustained. North of 90% usually means too-lenient qualification; below 70% means the booking signal isn\u2019t strong enough.' },
        { q: 'Who is actually doing the outreach?',            a: 'Senior SDRs on our team, named on your engagement. No outsourced overseas centres, no rotating juniors.' },
        { q: 'What if a meeting doesn\u2019t convert?',        a: 'We don\u2019t guarantee conversion  your sales process owns that. But we do report opportunity-creation rate by SDR and segment.' },
      ]}
      metrics={[
        { n: '80%+', l: 'Sustained meeting show-up rate' },
        { n: '40+',  l: 'Qualified meetings booked per month' },
        { n: '3x',   l: 'Opportunity creation vs. baseline' },
      ]}
      relatedSlug="bant"
      relatedName="BANT-Qualified Leads"
    />
  )
}
