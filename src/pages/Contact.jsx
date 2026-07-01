import { useState } from 'react'
import { CheckCircle2, AlertCircle, Mail, Phone, MapPin, Send } from 'lucide-react'
import { submitContactForm } from '../firebase/services.js'
import { useSite, useFeature } from '../context/SiteContext.jsx'

const INTERESTS = [
  'Lead Generation',
  'Demand Generation',
  'Appointment Generation',
  'BANT / MQL / SQL',
  'Content Syndication',
  'Custom / Multi-service',
  'Just exploring',
]

export default function Contact() {
  const { settings } = useSite()
  const formEnabled = useFeature('enableContactForm')
  const contact = settings?.contact || {}

  const [form, setForm] = useState({
    name: '', email: '', company: '', phone: '', interest: '', message: '',
  })
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  function update(key, value) {
    setForm((f) => ({ ...f, [key]: value }))
  }

  async function submit(e) {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      setError('Name, email and a short message are required.')
      setStatus('error')
      return
    }
    setStatus('submitting')
    setError('')
    try {
      await submitContactForm({
        ...form,
        source: 'website',
        userAgent: navigator.userAgent,
      })
      setStatus('success')
      setForm({ name: '', email: '', company: '', phone: '', interest: '', message: '' })
    } catch (err) {
      console.error(err)
      setError('Something went wrong. Please email us directly.')
      setStatus('error')
    }
  }

  return (
    <>
      {/* HEADER */}
      <section className="relative bg-gradient-to-b from-brand-50/50 via-white to-white border-b border-slate-100">
        <div className="absolute inset-0 grid-fade opacity-40 pointer-events-none" />
        <div className="container-app relative pt-16 md:pt-20 pb-12">
          <div className="max-w-3xl">
            <span className="chip-brand">
              <span className="w-1.5 h-1.5 rounded-full brand-bg mr-1.5" />
              Open for new engagements
            </span>
            <h1 className="mt-4 text-h1 font-bold text-slate-900 tracking-tight text-balance">
              Let's talk about <span className="brand-text">your pipeline.</span>
            </h1>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed">
              Fill out the form and we'll write back within one working day with a few questions and, if there's a fit, a calendar link for a 30-minute working session.
            </p>
          </div>
        </div>
      </section>

      {/* FORM + SIDEBAR */}
      <section className="section bg-white">
        <div className="container-app">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Form */}
            <div className="lg:col-span-7">
              <div className="card p-6 md:p-8">
                {!formEnabled ? (
                  <div className="text-center py-8">
                    <AlertCircle size={32} className="text-amber-500 mx-auto" />
                    <h3 className="mt-4 text-lg font-semibold text-slate-900">Form temporarily disabled</h3>
                    <p className="mt-2 text-sm text-slate-600">Please reach out via the contact details on the right.</p>
                  </div>
                ) : status === 'success' ? (
                  <div className="text-center py-8">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full brand-tint-bg">
                      <CheckCircle2 size={28} className="brand-text" />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold text-slate-900">Thanks  we'll be in touch</h3>
                    <p className="mt-2 text-slate-600 max-w-md mx-auto leading-relaxed">
                      A real human will read your note and reply within one working day with clarifying questions or a calendar link.
                    </p>
                    <button onClick={() => setStatus('idle')} className="btn-secondary mt-6">
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={submit} className="space-y-5">
                    <h2 className="text-xl font-semibold text-slate-900">Start the conversation</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="label">Full name *</label>
                        <input id="name" required value={form.name} onChange={(e) => update('name', e.target.value)} className="input" placeholder="Jane Doe" />
                      </div>
                      <div>
                        <label htmlFor="email" className="label">Work email *</label>
                        <input id="email" type="email" required value={form.email} onChange={(e) => update('email', e.target.value)} className="input" placeholder="jane@company.com" />
                      </div>
                      <div>
                        <label htmlFor="company" className="label">Company</label>
                        <input id="company" value={form.company} onChange={(e) => update('company', e.target.value)} className="input" placeholder="Company Inc." />
                      </div>
                      <div>
                        <label htmlFor="phone" className="label">Phone</label>
                        <input id="phone" value={form.phone} onChange={(e) => update('phone', e.target.value)} className="input" placeholder="+91 ..." />
                      </div>
                    </div>

                    <div>
                      <label className="label">What are you interested in?</label>
                      <div className="flex flex-wrap gap-2">
                        {INTERESTS.map((i) => (
                          <button
                            key={i}
                            type="button"
                            onClick={() => update('interest', i)}
                            className={`text-sm px-3 py-1.5 rounded-full border transition-all ${
                              form.interest === i
                                ? 'brand-bg text-white border-transparent shadow-sm'
                                : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                            }`}
                          >
                            {i}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="label">A short note *</label>
                      <textarea
                        id="message" required rows={5} value={form.message}
                        onChange={(e) => update('message', e.target.value)}
                        className="input resize-y"
                        placeholder="What are you trying to fix? What's worked and what hasn't?"
                      />
                    </div>

                    {status === 'error' && error && (
                      <div className="flex items-start gap-2 text-sm text-red-700 bg-red-50 border border-red-200 rounded-md p-3">
                        <AlertCircle size={14} className="mt-0.5 shrink-0" />
                        {error}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="btn-primary btn-lg w-full disabled:opacity-60"
                    >
                      {status === 'submitting' ? 'Sending…' : <>Send message <Send size={15} /></>}
                    </button>

                    <p className="text-xs text-slate-500 text-center">
                      By submitting, you agree to be contacted about your inquiry. We'll never share your details.
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-5 space-y-4">
              <div className="card">
                <h3 className="text-base font-semibold text-slate-900">Get in touch directly</h3>
                <ul className="mt-4 space-y-4">
                  {contact.email && (
                    <li className="flex items-start gap-3">
                      <span className="icon-badge !w-9 !h-9 shrink-0">
                        <Mail size={16} />
                      </span>
                      <div>
                        <div className="text-xs text-slate-500">Email</div>
                        <a href={`mailto:${contact.email}`} className="text-sm font-medium text-slate-900 hover:brand-text break-all">{contact.email}</a>
                      </div>
                    </li>
                  )}
                  {contact.phone && (
                    <li className="flex items-start gap-3">
                      <span className="icon-badge !w-9 !h-9 shrink-0">
                        <Phone size={16} />
                      </span>
                      <div>
                        <div className="text-xs text-slate-500">Phone</div>
                        <a href={`tel:${contact.phone}`} className="text-sm font-medium text-slate-900 hover:brand-text">{contact.phone}</a>
                      </div>
                    </li>
                  )}
                  {contact.address && (
                    <li className="flex items-start gap-3">
                      <span className="icon-badge !w-9 !h-9 shrink-0">
                        <MapPin size={16} />
                      </span>
                      <div>
                        <div className="text-xs text-slate-500">Office</div>
                        <address className="not-italic text-sm font-medium text-slate-900 leading-snug">{contact.address}</address>
                      </div>
                    </li>
                  )}
                </ul>
              </div>

              <div className="card">
                <h3 className="text-base font-semibold text-slate-900">Company details</h3>
                <dl className="mt-3 space-y-2 text-sm">
                  <div className="flex justify-between gap-3"><dt className="text-slate-500">Legal name</dt><dd className="text-slate-900 font-medium text-right">AMCONNECTB2B Pvt Ltd</dd></div>
                  <div className="flex justify-between gap-3"><dt className="text-slate-500">CIN</dt><dd className="text-slate-900 font-medium text-right text-xs">U70200PN2026PTC254443</dd></div>
                  <div className="flex justify-between gap-3"><dt className="text-slate-500">Incorporated</dt><dd className="text-slate-900 font-medium text-right">11 Apr 2026</dd></div>
                  <div className="flex justify-between gap-3"><dt className="text-slate-500">Hours</dt><dd className="text-slate-900 font-medium text-right">Mon–Fri · 10–19 IST</dd></div>
                </dl>
              </div>

              <div className="card brand-tint-bg border-brand-100">
                <h3 className="text-base font-semibold text-slate-900">Prefer to skip the form?</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Book a 30-minute consultation directly with our team.
                </p>
                <a href={contact.email ? `mailto:${contact.email}` : '#'} className="btn-primary mt-4 w-full">
                  Email us <Mail size={14} />
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
