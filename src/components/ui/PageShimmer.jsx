export function Skeleton({ className = '', style }) {
  return <div className={`shimmer ${className}`} style={style} />
}

export function SkeletonText({ lines = 3, className = '' }) {
  return (
    <div className={`space-y-2 ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          className="h-3"
          style={i === lines - 1 ? { width: '70%' } : undefined}
        />
      ))}
    </div>
  )
}

export function SkeletonCard() {
  return (
    <div className="card">
      <Skeleton className="h-10 w-10 mb-4" />
      <Skeleton className="h-5 w-3/5 mb-3" />
      <SkeletonText lines={3} />
    </div>
  )
}

export default function PageShimmer() {
  return (
    <div className="container-app section">
      <Skeleton className="h-3 w-24 mb-4" />
      <Skeleton className="h-10 w-2/3 mb-3" />
      <Skeleton className="h-10 w-1/2 mb-8" />
      <SkeletonText lines={3} className="max-w-2xl mb-10" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
    </div>
  )
}
