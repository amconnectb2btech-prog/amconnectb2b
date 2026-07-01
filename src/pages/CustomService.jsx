import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getServiceBySlug } from '../firebase/services.js'
import ServiceTemplate from '../components/sections/ServiceTemplate.jsx'
import PageShimmer from '../components/ui/PageShimmer.jsx'
import NotFound from './NotFound.jsx'

export default function CustomService() {
  const { slug } = useParams()
  const [state, setState] = useState('loading')
  const [service, setService] = useState(null)

  useEffect(() => {
    let alive = true
    setState('loading')
    getServiceBySlug(slug)
      .then((row) => {
        if (!alive) return
        if (!row) { setState('missing'); return }
        setService(row); setState('found')
      })
      .catch(() => alive && setState('missing'))
    return () => { alive = false }
  }, [slug])

  if (state === 'loading') return <PageShimmer />
  if (state === 'missing' || !service) return <NotFound />

  return (
    <ServiceTemplate
      name={service.title}
      tagline={service.tagline || ''}
      intro={service.intro || []}
      whatYouGet={service.whatYouGet || []}
      process={service.process || []}
      faqs={service.faqs || []}
      metrics={[]}
      relatedSlug={undefined}
      relatedName={undefined}
    />
  )
}
