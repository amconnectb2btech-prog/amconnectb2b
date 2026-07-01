import { Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import Layout from './components/layout/Layout.jsx'
import ScrollToTop from './components/layout/ScrollToTop.jsx'
import PageShimmer from './components/ui/PageShimmer.jsx'

// Lazy-load every page for fast first paint
const Home = lazy(() => import('./pages/Home.jsx'))
const About = lazy(() => import('./pages/About.jsx'))
const Services = lazy(() => import('./pages/Services.jsx'))
const LeadGeneration = lazy(() => import('./pages/services/LeadGeneration.jsx'))
const DemandGeneration = lazy(() => import('./pages/services/DemandGeneration.jsx'))
const AppointmentGeneration = lazy(() =>
  import('./pages/services/AppointmentGeneration.jsx')
)
const BANT = lazy(() => import('./pages/services/BANT.jsx'))
const MQL = lazy(() => import('./pages/services/MQL.jsx'))
const SQL = lazy(() => import('./pages/services/SQL.jsx'))
const ContentSyndication = lazy(() =>
  import('./pages/services/ContentSyndication.jsx')
)
const CustomService = lazy(() => import('./pages/CustomService.jsx'))
const CaseStudies = lazy(() => import('./pages/CaseStudies.jsx'))
const Resources = lazy(() => import('./pages/Resources.jsx'))
const Contact = lazy(() => import('./pages/Contact.jsx'))
const NotFound = lazy(() => import('./pages/NotFound.jsx'))

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Layout>
        <Suspense fallback={<PageShimmer />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/lead-generation" element={<LeadGeneration />} />
            <Route
              path="/services/demand-generation"
              element={<DemandGeneration />}
            />
            <Route
              path="/services/appointment-generation"
              element={<AppointmentGeneration />}
            />
            <Route path="/services/bant" element={<BANT />} />
            <Route path="/services/mql" element={<MQL />} />
            <Route path="/services/sql" element={<SQL />} />
            <Route
              path="/services/content-syndication"
              element={<ContentSyndication />}
            />
            {/* Dynamic admin-managed service pages */}
            <Route path="/solutions/:slug" element={<CustomService />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </>
  )
}
