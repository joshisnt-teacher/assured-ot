'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/referral', label: 'Referrals' },
  { href: '/contact', label: 'Contact' },
]

const serviceLinks = [
  { href: '/services#adaptive-gaming', label: 'Adaptive gaming' },
  { href: '/services#wheelchair-access', label: 'Wheelchair access' },
  { href: '/services#assistive-tech', label: 'Assistive technology' },
  { href: '/services#home-modification', label: 'Home modifications' },
  { href: '/services#school-support', label: 'School support' },
]

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      style={{ background: 'var(--navy)', position: 'relative', overflow: 'hidden' }}
      data-dark-bg
    >
      {/* Background mountain motif — large, low opacity */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{ opacity: 0.07 }}
      >
        <svg
          viewBox="0 0 1280 300"
          preserveAspectRatio="xMidYMid slice"
          className="w-full h-full"
        >
          <path
            d="M0,200 C80,180 150,80 240,90 C310,98 340,160 420,150 C500,140 540,60 640,50 C720,42 760,130 840,120 C920,110 960,40 1060,30 C1140,22 1190,100 1280,90 L1280,300 L0,300 Z"
            fill="var(--sand-white)"
          />
          <path
            d="M0,240 C60,235 100,160 180,155 C240,151 275,200 350,195 C430,190 470,130 550,125 C630,120 665,175 740,170 C820,165 860,110 940,105 C1020,100 1060,160 1140,155 C1210,151 1250,120 1280,118 L1280,300 L0,300 Z"
            fill="var(--sand-white)"
          />
        </svg>
      </div>

      <div className="container-content relative z-10">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-16">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              aria-label="Assured OT home"
              className="flex items-center gap-3 mb-4 group"
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(240,232,216,0.15)' }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M2 18L7 9L11 14L14 10L22 18H2Z"
                    stroke="var(--sand-white)"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                    fill="none"
                  />
                  <path
                    d="M16 6L18 3L20 6"
                    stroke="var(--terracotta)"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </div>
              <div>
                <span
                  className="block font-lora font-bold text-base"
                  style={{ color: 'var(--sand-white)' }}
                >
                  Assured OT
                </span>
                <span
                  className="block font-caveat text-xs"
                  style={{ color: 'var(--terracotta)' }}
                >
                  Perth, WA
                </span>
              </div>
            </Link>

            <p
              className="font-lora italic text-base leading-relaxed mb-6"
              style={{ color: 'var(--sand)', opacity: 0.85 }}
            >
              "Therapy that plays by their rules."
            </p>

            <div className="flex gap-4">
              {[
                { Icon: Instagram, label: 'Instagram' },
                { Icon: Facebook, label: 'Facebook' },
                { Icon: Linkedin, label: 'LinkedIn' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{
                    background: 'rgba(240,232,216,0.1)',
                    color: 'var(--warm-stone)',
                  }}
                  onMouseEnter={(e) => {
                    ;(e.currentTarget as HTMLElement).style.background = 'var(--terracotta)'
                    ;(e.currentTarget as HTMLElement).style.color = 'white'
                  }}
                  onMouseLeave={(e) => {
                    ;(e.currentTarget as HTMLElement).style.background = 'rgba(240,232,216,0.1)'
                    ;(e.currentTarget as HTMLElement).style.color = 'var(--warm-stone)'
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Pages */}
          <div>
            <h3
              className="font-sans text-label font-medium uppercase tracking-wider mb-5"
              style={{ color: 'var(--warm-stone)' }}
            >
              Pages
            </h3>
            <ul className="space-y-3">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="font-sans text-sm transition-colors duration-200"
                    style={{ color: 'var(--sand-white)' }}
                    onMouseEnter={(e) => {
                      ;(e.currentTarget as HTMLElement).style.color = 'var(--terracotta)'
                    }}
                    onMouseLeave={(e) => {
                      ;(e.currentTarget as HTMLElement).style.color = 'var(--sand-white)'
                    }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3
              className="font-sans text-label font-medium uppercase tracking-wider mb-5"
              style={{ color: 'var(--warm-stone)' }}
            >
              Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="font-sans text-sm transition-colors duration-200"
                    style={{ color: 'var(--sand-white)' }}
                    onMouseEnter={(e) => {
                      ;(e.currentTarget as HTMLElement).style.color = 'var(--terracotta)'
                    }}
                    onMouseLeave={(e) => {
                      ;(e.currentTarget as HTMLElement).style.color = 'var(--sand-white)'
                    }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3
              className="font-sans text-label font-medium uppercase tracking-wider mb-5"
              style={{ color: 'var(--warm-stone)' }}
            >
              Get in touch
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:hello@assuredot.com.au"
                  className="flex items-center gap-3 font-sans text-sm transition-colors duration-200 group"
                  style={{ color: 'var(--sand-white)' }}
                >
                  <Mail
                    size={15}
                    className="flex-shrink-0"
                    style={{ color: 'var(--terracotta)' }}
                  />
                  hello@assuredot.com.au
                </a>
              </li>
              <li>
                <a
                  href="tel:+61400000000"
                  className="flex items-center gap-3 font-sans text-sm transition-colors duration-200"
                  style={{ color: 'var(--sand-white)' }}
                >
                  <Phone
                    size={15}
                    className="flex-shrink-0"
                    style={{ color: 'var(--terracotta)' }}
                  />
                  0400 000 000
                </a>
              </li>
              <li>
                <span
                  className="flex items-start gap-3 font-sans text-sm"
                  style={{ color: 'var(--sand-white)' }}
                >
                  <MapPin
                    size={15}
                    className="flex-shrink-0 mt-0.5"
                    style={{ color: 'var(--terracotta)' }}
                  />
                  Perth, Western Australia
                </span>
              </li>
            </ul>

            <div className="mt-6">
              <Link
                href="/referral"
                className="btn-arrow inline-flex font-sans text-sm font-medium px-4 py-2.5 rounded-btn transition-all duration-200"
                style={{
                  background: 'var(--terracotta)',
                  color: 'white',
                }}
              >
                Make a referral <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Legal strip */}
        <div
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 py-6"
          style={{ borderTop: '1px solid rgba(201,187,168,0.2)' }}
        >
          <p
            className="font-sans text-caption"
            style={{ color: 'var(--warm-stone)' }}
          >
            © {new Date().getFullYear()} Assured OT. All rights reserved.
            <span className="mx-2 opacity-50">·</span>
            ABN 00 000 000 000
            <span className="mx-2 opacity-50">·</span>
            NDIS Registered Provider
          </p>
          <div className="flex gap-4">
            <Link
              href="/privacy"
              className="font-sans text-caption transition-colors duration-200"
              style={{ color: 'var(--warm-stone)' }}
            >
              Privacy policy
            </Link>
            <Link
              href="/terms"
              className="font-sans text-caption transition-colors duration-200"
              style={{ color: 'var(--warm-stone)' }}
            >
              Terms of service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
