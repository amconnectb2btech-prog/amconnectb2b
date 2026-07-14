// All Firestore I/O lives here. Keeps components clean and means we can swap
// the backend without touching any page-level code.

import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  query,
  where,
  orderBy,
  limit,
  serverTimestamp,
} from 'firebase/firestore'
import { db } from './config'

/* ───────────────────────────────────────────────────────────
   Site settings (theme, feature flags, hero copy, etc.)
   Single document at  settings/site
   ─────────────────────────────────────────────────────────── */
export async function getSiteSettings() {
  try {
    const snap = await getDoc(doc(db, 'settings', 'site'))
    if (!snap.exists()) return defaultSiteSettings
    return { ...defaultSiteSettings, ...snap.data() }
  } catch (err) {
    console.warn('[settings] falling back to defaults:', err.message)
    return defaultSiteSettings
  }
}



export const defaultSiteSettings = {
  theme: 'blue', // blue | green | red | violet | amber | ink
  features: {
    showTestimonials: true,
    showCaseStudies: true,
    showStats: true,
    showResources: true,
    showLogoCloud: true,
    showLiveChat: false,
    enableContactForm: true,
    showAnnouncement: false,
  },
  announcement: {
    text: '',
    href: '',
  },
  contact: {
    email: 'info@amconnectb2b.com',
    phone: '+91 84 5987 9551',
    address: 'Office No 15A, 4th Floor, City Vista, Tower A, Suite # 1411, Fountain Road, Kharadi, Vadgaon Sheri, Pune, Pune City, Maharashtra, India, 41101',
  },
}

/* ───────────────────────────────────────────────────────────
   Custom service pages (admin-managed)
   Collection: services
   ─────────────────────────────────────────────────────────── */
export async function getPublishedServices() {
  try {
    const q = query(
      collection(db, 'services'),
      where('published', '==', true),
      orderBy('order', 'asc')
    )
    const snap = await getDocs(q)
    return snap.docs.map((d) => ({ id: d.id, ...d.data() }))
  } catch (err) {
    console.warn('[services] returning empty list:', err.message)
    return []
  }
}

export async function getServiceBySlug(slug) {
  try {
    const q = query(
      collection(db, 'services'),
      where('slug', '==', slug),
      where('published', '==', true),
      limit(1)
    )
    const snap = await getDocs(q)
    if (snap.empty) return null
    const d = snap.docs[0]
    return { id: d.id, ...d.data() }
  } catch (err) {
    console.warn('[services] slug lookup failed:', err.message)
    return null
  }
}

/* ───────────────────────────────────────────────────────────
   Testimonials & case studies
   ─────────────────────────────────────────────────────────── */
export async function getTestimonials() {
  try {
    const q = query(
      collection(db, 'testimonials'),
      where('published', '==', true),
      orderBy('order', 'asc')
    )
    const snap = await getDocs(q)
    return snap.docs.map((d) => ({ id: d.id, ...d.data() }))
  } catch (err) {
    console.error('[services] getTestimonials failed:', err)
    return []
  }
}

export async function getCaseStudies() {
  try {
    const q = query(
      collection(db, 'caseStudies'),
      where('published', '==', true),
      orderBy('order', 'asc')
    )
    const snap = await getDocs(q)
    return snap.docs.map((d) => ({ id: d.id, ...d.data() }))
  } catch (err) {
    console.error('[services] getCaseStudies failed:', err)
    return []
  }
}

/* ───────────────────────────────────────────────────────────
   Contact form submission
   ─────────────────────────────────────────────────────────── */
export async function submitContactForm(payload) {
  // Defensive trims & basic validation. Real validation happens on form.
  const clean = {
    name: String(payload.name || '').trim().slice(0, 200),
    email: String(payload.email || '').trim().slice(0, 200),
    company: String(payload.company || '').trim().slice(0, 200),
    phone: String(payload.phone || '').trim().slice(0, 50),
    interest: String(payload.interest || '').trim().slice(0, 100),
    message: String(payload.message || '').trim().slice(0, 4000),
    source: String(payload.source || 'website').slice(0, 50),
    status: 'new',
    createdAt: serverTimestamp(),
    userAgent:
      typeof navigator !== 'undefined' ? navigator.userAgent.slice(0, 300) : '',
  }
  return addDoc(collection(db, 'contactSubmissions'), clean)
}
