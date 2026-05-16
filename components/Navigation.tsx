'use client'

import { useEffect, useState, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const SECTIONS = ['about', 'services', 'stories', 'practitioners', 'contact']

const NAV_LINKS = [
  { num: '01', label: 'About Jeimer', hash: 'about', href: '/about' },
  { num: '02', label: 'Services', hash: 'services', href: '/services' },
  { num: '03', label: 'Stories', hash: 'stories', href: '/#stories' },
  { num: '04', label: 'For Practitioners', hash: 'practitioners', href: '/referral' },
  { num: '05', label: 'Contact', hash: 'contact', href: '/contact' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const pathname = usePathname()
  const isHome = pathname === '/'

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 80)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  // Track active section on homepage only
  useEffect(() => {
    if (!isHome) return
    const observers: IntersectionObserver[] = []
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { rootMargin: '-40% 0px -55% 0px' }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [isHome])

  const linkHref = (item: typeof NAV_LINKS[0]) =>
    isHome ? `#${item.hash}` : item.href

  const isActive = (item: typeof NAV_LINKS[0]) =>
    isHome ? activeSection === item.hash : pathname.startsWith(item.href)

  return (
    <>
      <header
        role="banner"
        className={`hp-nav${scrolled ? ' is-stuck' : ''}`}
        id="hp-nav"
      >
        {/* Brand */}
        <Link href="/" aria-label="Assured OT — go to homepage" className="hp-brand">
          <span className="hp-brand-mark" aria-hidden="true">
            <svg width="28" height="32" viewBox="0 0 28 32" fill="none">
              <path
                d="M14 2 L18 10 L16 10 L20 18 L17 18 L21 26 L7 26 L11 18 L8 18 L12 10 L10 10 Z"
                fill="none"
                stroke="var(--terracotta)"
                strokeWidth="1.4"
                strokeLinejoin="round"
              />
              <line x1="14" y1="26" x2="14" y2="30" stroke="var(--terracotta)" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
          </span>
          <span className="hp-brand-stack">
            <span className="hp-brand-word">Assured <em>OT</em></span>
            <span className="hp-brand-sub">Paediatric · Perth</span>
          </span>
        </Link>

        {/* Desktop nav links */}
        <ul className="hp-nav-links" role="list">
          {NAV_LINKS.map((item) => (
            <li key={item.hash}>
              <a
                href={linkHref(item)}
                className={isActive(item) ? 'is-active' : ''}
              >
                <span className="num">{item.num}</span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="hp-nav-right">
          <a className="hp-nav-phone" href="tel:0865550142">
            <span className="dot" aria-hidden="true" />
            (08) 6555 0142
          </a>
          <a className="hp-btn" href={isHome ? '#contact' : '/contact'}>
            Book a chat
          </a>

          {/* Mobile hamburger — visible < 820px */}
          <button
            className="hp-hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`hp-mobile-menu${menuOpen ? ' is-open' : ''}`}
      >
        <nav aria-label="Mobile navigation" className="hp-mobile-links">
          {NAV_LINKS.map((item, i) => (
            <a
              key={item.hash}
              href={linkHref(item)}
              onClick={() => setMenuOpen(false)}
              style={{ transitionDelay: menuOpen ? `${i * 55}ms` : '0ms' }}
              className={isActive(item) ? 'is-active' : ''}
            >
              <span className="num">{item.num}</span>
              {item.label}
            </a>
          ))}
        </nav>

        <div
          className="hp-mobile-foot"
          style={{ transitionDelay: menuOpen ? '330ms' : '0ms' }}
        >
          <a
            className="hp-btn"
            href={isHome ? '#contact' : '/contact'}
            onClick={() => setMenuOpen(false)}
          >
            Book a chat
          </a>
          <p className="hp-mobile-contact">
            <a href="tel:0865550142">(08) 6555 0142</a>
            <a href="mailto:hello@assuredot.com.au">hello@assuredot.com.au</a>
          </p>
        </div>
      </div>
    </>
  )
}
