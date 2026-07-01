import { CheckCircle2, Target, Users, TrendingUp, Globe, Award, Heart } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import CTA from '../components/sections/CTA.jsx'

const VALUES = [
  { Icon: Target, t: 'Outcomes over activity',  d: 'We measure success by qualified meetings and pipeline impact  never by emails sent or calls made.' },
  { Icon: Users,  t: 'Senior team, day one',    d: 'No outsourced juniors. Every engagement is led by senior operators with real B2B experience.' },
  { Icon: TrendingUp, t: 'Transparent reporting', d: 'Daily standups, shared dashboards, and full visibility into what\u2019s working and what isn\u2019t.' },
  { Icon: Heart,  t: 'Built to hand over',      d: 'Six-month engagements with a clean handover. Your team owns the engine when we\u2019re done.' },
]

const FACTS = [
  { l: 'Founded',      v: 'April 2026' },
  { l: 'Headquarters', v: 'Pune, India' },
  { l: 'Team',         v: 'Senior-only' },
  { l: 'Reach',        v: 'India · APAC · EU · US' },
]

export default function About() {
  return (
    <>
      {/* HEADER */}
      <section className="relative bg-gradient-to-b from-brand-50/50 via-white to-white border-b border-slate-100">
        <div className="absolute inset-0 grid-fade opacity-40 pointer-events-none" />
        <div className="container-app relative pt-16 md:pt-20 pb-12">
          <div className="max-w-3xl">
            <span className="chip-brand">About us</span>
            <h1 className="mt-4 text-h1 font-bold text-slate-900 tracking-tight text-balance">
              We build the kind of B2B engine
              {' '}<span className="brand-text">your team owns at the end</span>.
            </h1>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed">
              AMCONNECTB2B is a Pune-based B2B demand services company. We help software, fintech and enterprise teams build predictable pipeline  without locking them into agency retainers or walled-garden data.
            </p>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="section bg-white">
        <div className="container-app">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <span className="eyebrow">Our story</span>
              <h2 className="section-heading">Built for B2B teams who want a real engine, not another agency.</h2>
            </div>
            <div className="lg:col-span-7 space-y-4 text-slate-700 leading-relaxed">
              <p className="text-lg text-slate-800">
                Most B2B agencies are optimized to bill, not to ship. Volume targets, rotating juniors, walled-garden data, indefinite retainers  the math works for them, rarely for you.
              </p>
              <p>
                We started AMCONNECTB2B in April 2026 with a different model: senior operators on every engagement, your tools and your data from day one, and a six-month handover built into every contract. By the end, your in-house team runs the program better than we ever could  because they should.
              </p>
              <p>
                We're a small team based in Pune working with B2B software, fintech and enterprise platforms across India, Southeast Asia, the EU and the US. We take on three to five new engagements per quarter  that ceiling isn't a marketing line, it's the maximum we can do well.
              </p>
            </div>
          </div>

          {/* Fact strip */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {FACTS.map((f) => (
              <div key={f.l} className="card">
                <div className="text-xs uppercase tracking-wide text-slate-500 font-semibold">{f.l}</div>
                <div className="mt-1 text-lg font-semibold text-slate-900">{f.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section bg-slate-50/60 border-y border-slate-100">
        <div className="container-app">
          <SectionHeading
            eyebrow="What we believe"
            title="Four principles that guide every engagement"
            subtitle="Plainly stated, consistently applied."
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            {VALUES.map(({ Icon, t, d }) => (
              <div key={t} className="card card-hover">
                <span className="icon-badge mb-4"><Icon size={20} /></span>
                <h3 className="text-lg font-semibold text-slate-900">{t}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPANY DETAILS */}
      <section className="section bg-white">
        <div className="container-app">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="card">
              <Globe size={22} className="brand-text mb-3" />
              <h3 className="text-lg font-semibold text-slate-900">Registered office</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Bunglow No 7, S.No. 181<br />
                General Kariappa Road, Khadki<br />
                Pune 411003, Maharashtra, India
              </p>
            </div>
            <div className="card">
              <Award size={22} className="brand-text mb-3" />
              <h3 className="text-lg font-semibold text-slate-900">Company details</h3>
              <dl className="mt-3 space-y-2 text-sm">
                <div className="flex justify-between gap-3">
                  <dt className="text-slate-500">Legal name</dt>
                  <dd className="text-slate-900 font-medium text-right">AMCONNECTB2B Pvt Ltd</dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt className="text-slate-500">CIN</dt>
                  <dd className="text-slate-900 font-medium text-right">U70200PN2026PTC254443</dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt className="text-slate-500">Incorporated</dt>
                  <dd className="text-slate-900 font-medium text-right">11 April 2026</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
