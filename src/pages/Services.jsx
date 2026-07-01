import ServicesGrid from '../components/sections/ServicesGrid.jsx'
import Process from '../components/sections/Process.jsx'
import Features from '../components/sections/Features.jsx'
import FAQ from '../components/sections/FAQ.jsx'
import CTA from '../components/sections/CTA.jsx'

export default function Services() {
  return (
    <>
      <section className="relative bg-gradient-to-b from-brand-50/50 via-white to-white border-b border-slate-100">
        <div className="absolute inset-0 grid-fade opacity-40 pointer-events-none" />
        <div className="container-app relative pt-16 md:pt-20 pb-12">
          <div className="max-w-3xl">
            <span className="chip-brand">Our services</span>
            <h1 className="mt-4 text-h1 font-bold text-slate-900 tracking-tight text-balance">
              Seven B2B demand services.{' '}
              <span className="brand-text">One delivery philosophy.</span>
            </h1>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed">
              Each service is a stand-alone engagement  most clients combine two or three into a full-funnel program. Pick what fits, or get in touch for a custom proposal.
            </p>
          </div>
        </div>
      </section>

      <ServicesGrid />
      <Process />
      <Features />
      <FAQ />
      <CTA />
    </>
  )
}
