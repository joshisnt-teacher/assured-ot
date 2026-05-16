'use client'

import Link from 'next/link'

const practiceLinks = [
  { href: '/#about', label: 'About Jeimer' },
  { href: '/#services', label: 'Services' },
  { href: '/#stories', label: 'Stories' },
  { href: '/#practitioners', label: 'For Practitioners' },
  { href: '/#faq', label: 'FAQ' },
]

const partnerLinks = [
  { href: '#', label: 'Referral form (PDF)' },
  { href: '#', label: 'NDIS service agreement' },
  { href: '#', label: 'Report samples' },
]

export default function Footer() {
  return (
    <footer className="hp-footer" role="contentinfo">
      <div className="hp-footer-top">
        {/* Col 1 — Brand */}
        <div>
          <Link href="/" aria-label="Assured OT home" className="hp-brand" style={{ marginBottom: '0' }}>
            <span className="hp-brand-mark" aria-hidden="true">
              <svg width="22" height="26" viewBox="0 0 22 26" fill="none">
                <path
                  d="M11 1 L14.5 8 L13 8 L16.5 14 L14 14 L18 22 L4 22 L8 14 L5.5 14 L9 8 L7.5 8 Z"
                  fill="none"
                  stroke="var(--terracotta)"
                  strokeWidth="1.3"
                  strokeLinejoin="round"
                />
                <line x1="11" y1="22" x2="11" y2="25" stroke="var(--terracotta)" strokeWidth="1.3" strokeLinecap="round" />
              </svg>
            </span>
            <span className="hp-brand-stack">
              <span className="hp-brand-word">Assured <em>OT</em></span>
              <span className="hp-brand-sub">Paediatric · Perth</span>
            </span>
          </Link>
          <p className="hp-footer-tagline">&ldquo;Therapy that plays by their rules.&rdquo;</p>
          <p style={{ marginTop: '10px', fontSize: '12px', color: 'var(--ink-mute)', fontFamily: 'var(--font-dm-sans)', letterSpacing: '0.08em' }}>
            NDIS Registered · Est. 2018
          </p>
        </div>

        {/* Col 2 — The practice */}
        <div>
          <h4>The practice</h4>
          <ul>
            {practiceLinks.map(({ href, label }) => (
              <li key={href}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — For partners */}
        <div>
          <h4>For partners</h4>
          <ul>
            {partnerLinks.map(({ href, label }) => (
              <li key={label}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4 — Find us */}
        <div>
          <h4>Find us</h4>
          <ul>
            <li><a href="tel:0865550142">(08) 6555 0142</a></li>
            <li><a href="mailto:hello@assuredot.com.au">hello@assuredot.com.au</a></li>
            <li><span>Perth, Western Australia</span></li>
          </ul>
        </div>
      </div>

      {/* Acknowledgement of Country */}
      <p className="hp-footer-acknowledgement">
        Assured OT acknowledges the Whadjuk Noongar people as the Traditional Custodians of the
        land on which we work and live. We pay our respects to Elders past, present, and emerging,
        and extend that respect to all Aboriginal and Torres Strait Islander peoples.
      </p>

      {/* Legal strip */}
      <div className="hp-footer-bottom">
        <span>© {new Date().getFullYear()} Assured OT. All rights reserved.</span>

        {/* Mountain glyph */}
        <span aria-hidden="true" style={{ display: 'flex', justifyContent: 'center' }}>
          <svg width="48" height="18" viewBox="0 0 48 18" fill="none">
            <path
              d="M2 16 L10 5 L16 11 L22 3 L32 14 L38 8 L46 16"
              stroke="var(--terracotta)"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>

        <span className="right">ABN 00 000 000 000 · AHPRA registered</span>
      </div>
    </footer>
  )
}
