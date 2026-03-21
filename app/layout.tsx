import type { Metadata } from 'next'
import { Lora, DM_Sans, Caveat } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import CustomCursor from '@/components/CustomCursor'

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-lora',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-caveat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Assured OT — Therapy that plays by their rules',
  description:
    'Perth-based occupational therapy specialising in empowering children with physical disabilities through adaptive technology, accessible gaming, and joyful therapeutic solutions.',
  keywords: 'occupational therapy, Perth, children, wheelchair, adaptive technology, NDIS, gaming, accessibility',
  openGraph: {
    title: 'Assured OT — Therapy that plays by their rules',
    description: 'Empowering children with physical disabilities through adaptive technology and joyful OT.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${lora.variable} ${dmSans.variable} ${caveat.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <CustomCursor />
        <Navigation />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
