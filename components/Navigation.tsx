'use client'

import { useEffect, useState, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/referral', label: 'Referrals' },
  { href: '/contact', label: 'Contact' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 80)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <>
      <header
        role="banner"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'nav-scrolled shadow-nav' : 'bg-transparent'
        }`}
      >
        <div className="container-content">
          <nav
            role="navigation"
            aria-label="Main navigation"
            className="flex items-center justify-between h-16 md:h-20"
          >
            {/* Logo */}
            <Link
              href="/"
              aria-label="Assured OT — go to homepage"
              className="flex items-center gap-3 group"
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: 'var(--navy)' }}
              >
                {/* Mountain badge SVG */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M2 18L7 9L11 14L14 10L22 18H2Z"
                    stroke="#F0E8D8"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                    fill="none"
                  />
                  <path
                    d="M16 6L18 3L20 6"
                    stroke="#C4724A"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </div>
              <div className="leading-tight">
                <span
                  className="block font-lora font-bold text-base"
                  style={{ color: 'var(--navy)', letterSpacing: '-0.01em' }}
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

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`nav-link font-sans text-sm font-medium transition-colors duration-200 ${
                    isActive(href)
                      ? 'active'
                      : ''
                  }`}
                  style={{ color: 'var(--deep-ink)' }}
                  aria-current={isActive(href) ? 'page' : undefined}
                >
                  {label}
                </Link>
              ))}

              <Link
                href="/referral"
                className={`btn-arrow font-sans text-sm font-medium px-5 py-2.5 rounded-btn border-2 transition-all duration-200 ${
                  scrolled
                    ? 'bg-navy text-sand-white border-navy hover:bg-terracotta hover:border-terracotta'
                    : 'bg-transparent border-navy text-navy hover:bg-navy hover:text-sand-white'
                }`}
                style={
                  scrolled
                    ? { background: 'var(--navy)', color: 'var(--sand-white)', borderColor: 'var(--navy)' }
                    : { background: 'transparent', color: 'var(--navy)', borderColor: 'var(--navy)' }
                }
              >
                Make a referral
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-btn"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              style={{ color: 'var(--navy)' }}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile overlay menu */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`fixed inset-0 z-40 flex flex-col transition-all duration-300 md:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ background: 'var(--navy)' }}
        data-dark-bg
      >
        <div className="container-content pt-20 pb-8 flex-1 flex flex-col justify-center">
          <nav aria-label="Mobile navigation" className="space-y-2">
            {NAV_LINKS.map(({ href, label }, i) => (
              <Link
                key={href}
                href={href}
                className={`block font-lora font-bold text-4xl py-3 transition-all duration-200 ${
                  menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{
                  color: isActive(href) ? 'var(--terracotta)' : 'var(--sand-white)',
                  transitionDelay: menuOpen ? `${i * 60}ms` : '0ms',
                }}
                aria-current={isActive(href) ? 'page' : undefined}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div
            className={`mt-10 transition-all duration-300 ${
              menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: menuOpen ? '360ms' : '0ms' }}
          >
            <Link
              href="/referral"
              className="btn-arrow inline-flex font-sans text-base font-medium px-6 py-3 rounded-btn"
              style={{
                background: 'var(--terracotta)',
                color: 'white',
              }}
            >
              Make a referral <span aria-hidden="true">→</span>
            </Link>

            <div className="mt-8 pt-8 border-t" style={{ borderColor: 'rgba(201,187,168,0.3)' }}>
              <p className="font-caveat text-lg" style={{ color: 'var(--sand)' }}>
                Based in Perth, WA
              </p>
              <a
                href="mailto:hello@assuredot.com.au"
                className="block mt-1 font-sans text-sm"
                style={{ color: 'var(--warm-stone)' }}
              >
                hello@assuredot.com.au
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
