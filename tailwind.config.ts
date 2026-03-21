import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#1E2D40',
        sand: '#E8DCC8',
        terracotta: '#C4724A',
        'sketch-cream': '#F5EFE2',
        'off-white': '#FDFAF5',
        'deep-ink': '#18202B',
        'sand-white': '#F0E8D8',
        'warm-stone': '#C9BBA8',
        'forest-green': '#3A7D44',
        'warm-red': '#B94040',
        amber: '#C87C2A',
      },
      fontFamily: {
        lora: ['var(--font-lora)', 'Georgia', 'serif'],
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        caveat: ['var(--font-caveat)', 'cursive'],
      },
      fontSize: {
        'display-xl': ['clamp(48px,5.5vw,72px)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display': ['clamp(36px,4vw,48px)', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'h1': ['32px', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'h2': ['26px', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'h3': ['20px', { lineHeight: '1.3' }],
        'h4': ['18px', { lineHeight: '1.4' }],
        'body-lg': ['18px', { lineHeight: '1.65' }],
        'body': ['16px', { lineHeight: '1.65' }],
        'caption': ['13px', { lineHeight: '1.4', letterSpacing: '0.03em' }],
        'label': ['12px', { lineHeight: '1.4', letterSpacing: '0.05em' }],
      },
      spacing: {
        '18': '72px',
        '22': '88px',
        '30': '120px',
      },
      maxWidth: {
        'content': '1280px',
      },
      borderRadius: {
        'card': '12px',
        'btn': '6px',
      },
      boxShadow: {
        'card-hover': '0 8px 24px rgba(30, 45, 64, 0.12)',
        'nav': '0 1px 0 rgba(201, 187, 168, 0.3)',
      },
      animation: {
        'stroke-draw': 'strokeDraw 1200ms ease-in-out forwards',
        'fade-up': 'fadeUp 400ms ease-out forwards',
        'underline-in': 'underlineIn 200ms ease-out forwards',
      },
      keyframes: {
        strokeDraw: {
          'from': { strokeDashoffset: '1000' },
          'to': { strokeDashoffset: '0' },
        },
        fadeUp: {
          'from': { opacity: '0', transform: 'translateY(24px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        underlineIn: {
          'from': { clipPath: 'inset(0 100% 0 0)' },
          'to': { clipPath: 'inset(0 0% 0 0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
