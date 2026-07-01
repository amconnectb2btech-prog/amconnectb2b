import { Link } from 'react-router-dom'
import { ArrowRight, Home } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center bg-gradient-to-b from-brand-50/30 to-white">
      <div className="container-app text-center py-16">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full brand-tint-bg mb-6">
          <span className="text-3xl font-bold brand-text">404</span>
        </div>
        <h1 className="text-h1 font-bold text-slate-900 tracking-tight">
          Page not found.
        </h1>
        <p className="mt-4 text-lg text-slate-600 max-w-md mx-auto">
          The page you're looking for has moved or doesn't exist. Try heading back to the home page.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/" className="btn-primary btn-lg">
            <Home size={16} /> Back to home
          </Link>
          <Link to="/services" className="btn-secondary btn-lg">
            Browse services <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
