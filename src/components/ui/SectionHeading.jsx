/**
 * Standard corporate section heading.
 * Centered or left-aligned.
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  className = '',
}) {
  const alignment = align === 'center' ? 'text-center mx-auto items-center' : 'text-left'
  return (
    <div className={`flex flex-col ${alignment} max-w-3xl ${align === 'center' ? 'mx-auto' : ''} ${className}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="section-heading text-balance">{title}</h2>
      {subtitle && <p className="section-sub">{subtitle}</p>}
    </div>
  )
}
