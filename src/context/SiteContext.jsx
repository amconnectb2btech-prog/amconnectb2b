import { createContext, useContext, useEffect, useState } from 'react'
import { getSiteSettings, defaultSiteSettings } from '../firebase/services'

const SiteContext = createContext({
  settings: defaultSiteSettings,
  loading: true,
})

export function SiteProvider({ children }) {
  const [settings, setSettings] = useState(defaultSiteSettings)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let mounted = true
    getSiteSettings().then((s) => {
      if (!mounted) return
      setSettings(s)
      setLoading(false)
    })
    return () => {
      mounted = false
    }
  }, [])

  // Reflect theme to document for CSS variables
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', settings.theme || 'blue')
  }, [settings.theme])

  return (
    <SiteContext.Provider value={{ settings, loading }}>
      {children}
    </SiteContext.Provider>
  )
}

export function useSite() {
  return useContext(SiteContext)
}

// Convenience: feature flag hook
export function useFeature(flag) {
  const { settings } = useSite()
  return Boolean(settings?.features?.[flag])
}
