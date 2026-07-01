import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react'
import { useSite } from '../../context/SiteContext.jsx'
import Logo from '../ui/Logo.jsx'

export default function Footer() {
  const { settings } = useSite()
  const contact = settings?.contact || {}
  const year = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container-app py-14 md:py-16">
        <div className="grid grid-cols-12 gap-8">
          {/* Brand column */}
          <div className="col-span-12 md:col-span-4">
            {/* <Logo variant="light" /> */}
            <Logo />
            <p className="mt-4 text-sm text-slate-400 leading-relaxed max-w-xs">
              A B2B lead generation and demand services company helping software, fintech and enterprise teams build predictable pipeline.
            </p>
            <div className="mt-5 flex gap-2">
              <a href="https://www.linkedin.com/company/amconnectb2b-private-limited/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-9 h-9 inline-flex items-center justify-center rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300">
                <Linkedin size={15} />
              </a>
              <a href="#" aria-label="Twitter" className="w-9 h-9 inline-flex items-center justify-center rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300">
                <Twitter size={15} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="col-span-6 md:col-span-2">
            <h3 className="text-sm font-semibold text-white">Services</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link to="/services/lead-generation" className="hover:text-white">Lead Generation</Link></li>
              <li><Link to="/services/demand-generation" className="hover:text-white">Demand Generation</Link></li>
              <li><Link to="/services/appointment-generation" className="hover:text-white">Appointments</Link></li>
              <li><Link to="/services/content-syndication" className="hover:text-white">Content Syndication</Link></li>
              <li><Link to="/services" className="hover:text-white">All services</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="col-span-6 md:col-span-2">
            <h3 className="text-sm font-semibold text-white">Company</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link to="/about" className="hover:text-white">About us</Link></li>
              <li><Link to="/case-studies" className="hover:text-white">Case studies</Link></li>
              <li><Link to="/resources" className="hover:text-white">Resources</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-12 md:col-span-4">
            <h3 className="text-sm font-semibold text-white">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {contact.email && (
                <li className="flex items-start gap-2.5">
                  <Mail size={14} className="mt-0.5 text-slate-500 shrink-0" />
                  <a href={`mailto:${contact.email}`} className="hover:text-white break-all">{contact.email}</a>
                </li>
              )}
              {contact.phone && (
                <li className="flex items-start gap-2.5">
                  <Phone size={14} className="mt-0.5 text-slate-500 shrink-0" />
                  <a href={`tel:${contact.phone}`} className="hover:text-white">{contact.phone}</a>
                </li>
              )}
              {contact.address && (
                <li className="flex items-start gap-2.5">
                  <MapPin size={14} className="mt-0.5 text-slate-500 shrink-0" />
                  <span>{contact.address}</span>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-10 pt-6 border-t border-slate-800 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-slate-500">
          <div>
            © {year} AMCONNECTB2B Private Limited. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>CIN: U70200PN2026PTC254443</span>
            <span className="hidden md:inline">·</span>
            <span>Incorporated 11 Apr 2026</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
