// Firebase initialisation.
//
// IMPORTANT: This project reads configuration from environment variables so
// that the same code can run against your dev / staging / production
// Firebase projects without code changes. Copy `.env.example` to `.env.local`
// and fill in the values you get from your Firebase console.
//
// If you'd rather drop in a `google-services.json`-style config, simply
// replace the `firebaseConfig` object below with the literal values from
// Firebase Console → Project Settings → General → "Your apps" → "Web app".

import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { getAnalytics, isSupported as analyticsSupported } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
}

// Initialise app (guard against double-init in HMR)
export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const storage = getStorage(app)

// Analytics only loads in the browser, and only if measurementId is set.
export let analytics = null
if (typeof window !== 'undefined' && firebaseConfig.measurementId) {
  analyticsSupported().then((supported) => {
    if (supported) analytics = getAnalytics(app)
  })
}
