import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useSite, useFeature } from '../../context/SiteContext.jsx'

export default function Announcement() {
  const { settings } = useSite()
  const show = useFeature('showAnnouncement')
  const a = settings?.announcement
  if (!show || !a?.text) return null

  const external = a.href?.startsWith('http')
  const Wrap = external ? 'a' : Link
  const wrapProps = external
    ? { href: a.href, target: '_blank', rel: 'noopener noreferrer' }
    : { to: a.href || '/contact' }

  return (
    <div className="brand-deep-bg text-white">
      <div className="container-app py-2">
        <Wrap {...wrapProps} className="group flex items-center justify-center gap-2 text-[13px]">
          <span className="chip border-white/20 bg-white/10 text-white">New</span>
          <span className="text-white/90">{a.text}</span>
          <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
        </Wrap>
      </div>
    </div>
  )
}
