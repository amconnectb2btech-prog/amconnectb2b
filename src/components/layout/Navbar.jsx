import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react'
import Logo from '../ui/Logo.jsx'
import { getPublishedServices } from '../../firebase/services.js'
import { useFeature } from '../../context/SiteContext.jsx'

const CORE_SERVICES = [
  { slug: 'lead-generation',         name: 'Lead Generation',         desc: 'Sourced & verified contacts' },
  { slug: 'demand-generation',       name: 'Demand Generation',       desc: 'Full-funnel demand engine' },
  { slug: 'appointment-generation',  name: 'Appointment Generation',  desc: 'Booked meetings on your calendar' },
  { slug: 'bant',                    name: 'BANT-Qualified Leads',    desc: 'Phone-verified, sales-ready' },
  { slug: 'mql',                     name: 'MQL Programs',            desc: 'Marketing-qualified leads' },
  { slug: 'sql',                     name: 'SQL Programs',            desc: 'Sales-qualified leads' },
  { slug: 'content-syndication',     name: 'Content Syndication',     desc: 'Reach buyers via trade pubs' },
]

const NAV = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services', hasMenu: true },
  { to: '/about', label: 'About' },
  { to: '/case-studies', label: 'Case Studies', featureKey: 'showCaseStudies' },
  { to: '/resources', label: 'Resources', featureKey: 'showResources' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  const [menu, setMenu] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [custom, setCustom] = useState([])
  const closeTimer = useRef()

  const showCases = useFeature('showCaseStudies')
  const showResources = useFeature('showResources')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false); setMenu(false) }, [pathname])

  useEffect(() => {
    let alive = true
    getPublishedServices()
      .then((rows) => alive && setCustom(rows || []))
      .catch(() => {})
    return () => { alive = false }
  }, [])

  const visible = NAV.filter((n) => {
    if (n.featureKey === 'showCaseStudies') return showCases
    if (n.featureKey === 'showResources') return showResources
    return true
  })

  function openMenu() {
    clearTimeout(closeTimer.current)
    setMenu(true)
  }
  function scheduleClose() {
    closeTimer.current = setTimeout(() => setMenu(false), 150)
  }

  return (
    <header className={`sticky top-0 z-50 bg-white transition-shadow ${scrolled ? 'shadow-sm border-b border-slate-200' : 'border-b border-slate-100'}`}>
      <div className="container-app">
        <div className="flex items-center justify-between h-16">
          <Logo />

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {visible.map((item) =>
              item.hasMenu ? (
                <div
                  key={item.to}
                  className="relative"
                  onMouseEnter={openMenu}
                  onMouseLeave={scheduleClose}
                >
                  <Link
                    to={item.to}
                    className="flex items-center gap-1 px-3 py-2 text-[14px] text-slate-700 hover:text-slate-900 rounded-md hover:bg-slate-50"
                  >
                    {item.label}
                    <ChevronDown size={14} className={`transition-transform ${menu ? 'rotate-180' : ''}`} />
                  </Link>
                </div>
              ) : (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `px-3 py-2 text-[14px] rounded-md hover:bg-slate-50 ${
                      isActive ? 'text-slate-900 font-medium' : 'text-slate-700 hover:text-slate-900'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              )
            )}
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            <Link to="/contact" className="btn-primary">
              Book a meeting <ArrowRight size={14} />
            </Link>
          </div>

          <button className="lg:hidden p-2 -mr-2 text-slate-900" onClick={() => setOpen(true)} aria-label="Open menu">
            <Menu size={22} />
          </button>
        </div>
      </div>

      {/* Services dropdown */}
      {menu && (
        <div
          onMouseEnter={openMenu}
          onMouseLeave={scheduleClose}
          className="hidden lg:block absolute inset-x-0 top-full bg-white border-t border-slate-200 shadow-card-hover"
        >
          <div className="container-app py-8">
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-8 grid grid-cols-2 gap-x-6 gap-y-1">
                {CORE_SERVICES.map((s) => (
                  <Link
                    key={s.slug}
                    to={`/services/${s.slug}`}
                    className="group flex items-start gap-3 px-3 py-3 rounded-md hover:bg-slate-50"
                  >
                    <span className="mt-1 w-1.5 h-1.5 rounded-full brand-bg shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-slate-900 group-hover:brand-text">{s.name}</p>
                      <p className="mt-0.5 text-[13px] text-slate-500">{s.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="col-span-4 border-l border-slate-200 pl-8">
                <span className="eyebrow">Custom Solutions</span>
                {custom.length > 0 ? (
                  <ul className="mt-3 space-y-1.5">
                    {custom.slice(0, 5).map((c) => (
                      <li key={c.id}>
                        <Link to={`/solutions/${c.slug}`} className="text-sm text-slate-700 hover:brand-text">
                          {c.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-3 text-sm text-slate-500">
                    Tailored programs built for your specific ICP, vertical, or growth stage.
                  </p>
                )}
                <Link to="/contact" className="mt-4 inline-flex items-center gap-1 text-sm font-medium brand-text hover:underline">
                  Get a custom proposal <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden fixed inset-0 z-50 bg-white overflow-y-auto">
          <div className="container-app">
            <div className="flex items-center justify-between h-16">
              <Logo />
              <button onClick={() => setOpen(false)} className="p-2 -mr-2" aria-label="Close">
                <X size={22} />
              </button>
            </div>

            <div className="py-6 space-y-1">
              {visible.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  className="block px-3 py-3 text-base font-medium text-slate-900 hover:bg-slate-50 rounded-md"
                >
                  {n.label}
                </Link>
              ))}
            </div>

            <div className="border-t border-slate-200 pt-6">
              <span className="eyebrow">Services</span>
              <ul className="mt-3 space-y-1">
                {CORE_SERVICES.map((s) => (
                  <li key={s.slug}>
                    <Link to={`/services/${s.slug}`} className="block px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded-md">
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <Link to="/contact" className="btn-primary btn-lg w-full mt-8">
              Book a meeting <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
