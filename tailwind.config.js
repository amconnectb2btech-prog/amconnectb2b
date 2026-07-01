/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Corporate blue palette
        brand: {
          50:  '#EFF5FF',
          100: '#DBE7FE',
          200: '#BFD3FE',
          300: '#93B4FD',
          400: '#608AFA',
          500: '#3B66F6',
          600: '#2548EB',
          700: '#1D38D8',
          800: '#1E30AF',
          900: '#1E2F8A',
          950: '#172054',
        },
        slate: {
          25:  '#FCFDFE',
          50:  '#F8FAFC',
          100: '#F1F5F9',
          150: '#E8EEF5',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
          950: '#020617',
        },
      },
      fontFamily: {
        sans: ['"DM Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Slightly tighter scale for corporate density
        'h1': ['clamp(2.25rem, 4vw, 3.5rem)', { lineHeight: '1.08', letterSpacing: '-0.025em' }],
        'h2': ['clamp(1.75rem, 3vw, 2.5rem)', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'h3': ['1.5rem', { lineHeight: '1.3', letterSpacing: '-0.015em' }],
      },
      boxShadow: {
        card:   '0 1px 2px 0 rgba(15,23,42,0.04), 0 1px 3px 0 rgba(15,23,42,0.06)',
        'card-hover': '0 4px 6px -1px rgba(15,23,42,0.07), 0 10px 20px -5px rgba(15,23,42,0.08)',
        soft:   '0 2px 8px -2px rgba(15,23,42,0.06)',
        inset:  'inset 0 0 0 1px rgba(15,23,42,0.06)',
      },
      maxWidth: {
        container: '78rem',
      },
      keyframes: {
        shimmer: { '0%': { backgroundPosition: '-200% 0' }, '100%': { backgroundPosition: '200% 0' } },
        marquee: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
        fadeUp:  { '0%': { opacity: '0', transform: 'translateY(10px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
      },
      animation: {
        shimmer: 'shimmer 1.8s linear infinite',
        marquee: 'marquee 40s linear infinite',
        'fade-up': 'fadeUp 0.5s ease-out both',
      },
    },
  },
  plugins: [],
}
