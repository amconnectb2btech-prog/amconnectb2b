# AMCONNECTB2B — User Website

The customer-facing site for AMCONNECTB2B Private Limited (amconnectb2b.com).
A React + Vite + Tailwind application backed by Firebase, with admin-managed
content (testimonials, case studies, custom solution pages, feature flags, theme).

## Tech stack

- **React 18** with React Router 6 and lazy-loaded routes
- **Vite 5** for the build
- **Tailwind CSS 3** with a custom design-token system (CSS variables → Tailwind)
- **Framer Motion** for animations and shimmer states
- **Firebase 10** (Firestore + Auth + Storage + Analytics)
- **lucide-react** icons, **react-helmet-async** for SEO

## Getting started

```bash
# 1. Install
npm install

# 2. Configure Firebase
cp .env.example .env.local
# Fill in your Firebase config values (see below)

# 3. Run
npm run dev      # http://localhost:5173

# 4. Build
npm run build
npm run preview
```

## Firebase configuration

Create a `.env.local` file in this directory with the following values from your
Firebase console (Project Settings → General → Your apps → SDK setup):

```env
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_PROJECT_ID=...
VITE_FIREBASE_STORAGE_BUCKET=...
VITE_FIREBASE_MESSAGING_SENDER_ID=...
VITE_FIREBASE_APP_ID=...
VITE_FIREBASE_MEASUREMENT_ID=...
```

Alternatively, you can hardcode the config object directly into
`src/firebase/config.js` — there's a commented-out block ready to receive the
values from your `google-services.json` / `firebase-config.json`.

## Project structure

```
src/
  App.jsx                  # Routes (lazy-loaded)
  main.jsx                 # React entry + providers
  index.css                # Tailwind + CSS vars (themes) + shimmer
  firebase/
    config.js              # Firebase init
    services.js            # Firestore reads/writes used by the site
  context/
    SiteContext.jsx        # Loads /settings/site, exposes theme + feature flags
  components/
    layout/                # Layout, Navbar, Footer, Announcement
    ui/                    # Logo, Section, PageShimmer (Skeleton, SkeletonCard...)
    sections/              # Hero, ServicesGrid, Process, Testimonials, etc.
  pages/
    Home.jsx
    About.jsx
    Services.jsx
    services/              # LeadGeneration, DemandGeneration, ... (7 core)
    CustomService.jsx      # /solutions/:slug (admin-managed)
    CaseStudies.jsx
    Resources.jsx
    Contact.jsx
    NotFound.jsx
```

## Themes

The site supports six themes, selectable via the admin panel and applied with a
`data-theme` attribute on `<html>`:

- `blue` (default)
- `green`
- `red`
- `violet`
- `amber`
- `ink`

All themes use a white canvas with a configurable accent colour. To preview a
theme in development, run `document.documentElement.setAttribute('data-theme', 'green')`
in the browser console.

## Feature flags

Admin-controlled flags read from `settings/site.features`:

| Flag | Default | Effect when off |
|------|---------|-----------------|
| `showAnnouncement` | true | Hides the top announcement bar |
| `showLogoCloud` | true | Hides the partner logo strip on the home page |
| `showTestimonials` | true | Hides the testimonials section |
| `showCaseStudies` | true | Replaces the case-studies page with a placeholder |
| `showResources` | true | Replaces the resources page with a placeholder |
| `showStats` | true | (Reserved for future use) |
| `showLiveChat` | false | (Reserved — for integration with a chat widget) |
| `enableContactForm` | true | Replaces the contact form with direct details only |

## Firestore collections used

- **settings/site** — single doc; theme, feature flags, announcement, contact info
- **services** — admin-created custom solution pages (rendered at `/solutions/:slug`)
- **testimonials** — quotes shown on the home page
- **caseStudies** — case-study cards on `/case-studies`
- **contactSubmissions** — written to by the contact form

See `../firebase-backend/README.md` for the full schema and security rules.

## Production checklist

- [ ] Set Firebase env vars in your hosting provider (Vercel / Firebase Hosting / etc.)
- [ ] Deploy Firestore rules from `../firebase-backend/firestore.rules`
- [ ] Deploy Firestore indexes from `../firebase-backend/firestore.indexes.json`
- [ ] Seed the `settings/site` document with initial values
- [ ] Create the first admin user in the admin panel
- [ ] Add your real partner logos and testimonials via the admin panel
- [ ] Verify the contact form writes to `contactSubmissions`

## Notes on the design

- Editorial-minimal aesthetic — white canvas, a single configurable accent, generous whitespace
- Fraunces (display serif) + Geist (sans body) + JetBrains Mono — loaded from Google Fonts
- No stock-AI imagery, no generic Inter, no purple-blue gradient blobs
- Skeleton / shimmer loaders wherever the page waits on Firestore
- Designed for fast first paint: every page route is lazy-loaded behind `<PageShimmer />`
