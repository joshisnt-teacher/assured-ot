'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { CheckCircle, AlertCircle } from 'lucide-react'

function HomeContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState<{ [k: string]: string }>({})
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const validate = () => {
    const errs: { [k: string]: string } = {}
    if (!name.trim()) errs.name = 'Please enter your name.'
    if (!email.trim()) errs.email = 'Please enter your email.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = 'Please enter a valid email.'
    if (!message.trim()) errs.message = 'Please enter a message.'
    return errs
  }

  const handle = async (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setSubmitting(true)
    await new Promise((r) => setTimeout(r, 1000))
    setSubmitting(false)
    setSubmitted(true)
  }

  const clearError = (field: string) => setErrors((prev) => ({ ...prev, [field]: '' }))

  const inputStyle = (err?: boolean) => ({
    background: 'var(--off-white)',
    border: `1.5px solid ${err ? 'var(--warm-red)' : 'var(--warm-stone)'}`,
    color: 'var(--deep-ink)',
    fontSize: '15px',
    padding: '12px 16px',
    borderRadius: '8px',
    outline: 'none',
    width: '100%',
    lineHeight: '1.5',
    fontFamily: 'var(--font-dm-sans)',
  })

  if (submitted) {
    return (
      <div
        className="mt-8 p-6 rounded-card text-center"
        style={{ background: 'var(--sketch-cream)', border: '1px solid var(--warm-stone)' }}
        role="status"
        aria-live="polite"
      >
        <CheckCircle size={36} className="mx-auto mb-3" style={{ color: 'var(--forest-green)' }} />
        <p
          className="font-sans font-medium"
          style={{ fontSize: '15px', color: 'var(--deep-ink)' }}
        >
          Thanks — Jeimer will reply within the hour, usually sooner.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handle} noValidate aria-label="Contact form" className="mt-8 space-y-4">
      <div>
        <label
          htmlFor="home-contact-name"
          className="block font-sans font-medium uppercase tracking-wider mb-1.5"
          style={{ fontSize: '12px', color: 'var(--warm-stone)' }}
        >
          Name *
        </label>
        <input
          id="home-contact-name"
          name="name"
          type="text"
          value={name}
          onChange={(e) => { setName(e.target.value); clearError('name') }}
          required
          aria-required="true"
          aria-describedby={errors.name ? 'home-name-err' : undefined}
          aria-invalid={errors.name ? 'true' : undefined}
          style={inputStyle(!!errors.name)}
          onFocus={(e) => { if (!errors.name) e.target.style.borderColor = 'var(--navy)' }}
          onBlur={(e) => { if (!errors.name) e.target.style.borderColor = 'var(--warm-stone)' }}
        />
        {errors.name && (
          <div id="home-name-err" role="alert" className="flex items-center gap-1 mt-1 text-xs" style={{ color: 'var(--warm-red)' }}>
            <AlertCircle size={12} />{errors.name}
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="home-contact-email"
            className="block font-sans font-medium uppercase tracking-wider mb-1.5"
            style={{ fontSize: '12px', color: 'var(--warm-stone)' }}
          >
            Email *
          </label>
          <input
            id="home-contact-email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => { setEmail(e.target.value); clearError('email') }}
            required
            aria-required="true"
            aria-describedby={errors.email ? 'home-email-err' : undefined}
            aria-invalid={errors.email ? 'true' : undefined}
            style={inputStyle(!!errors.email)}
            onFocus={(e) => { if (!errors.email) e.target.style.borderColor = 'var(--navy)' }}
            onBlur={(e) => { if (!errors.email) e.target.style.borderColor = 'var(--warm-stone)' }}
          />
          {errors.email && (
            <div id="home-email-err" role="alert" className="flex items-center gap-1 mt-1 text-xs" style={{ color: 'var(--warm-red)' }}>
              <AlertCircle size={12} />{errors.email}
            </div>
          )}
        </div>

        <div>
          <label
            htmlFor="home-contact-phone"
            className="block font-sans font-medium uppercase tracking-wider mb-1.5"
            style={{ fontSize: '12px', color: 'var(--warm-stone)' }}
          >
            Phone
          </label>
          <input
            id="home-contact-phone"
            name="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Optional"
            style={inputStyle()}
            onFocus={(e) => { e.target.style.borderColor = 'var(--navy)' }}
            onBlur={(e) => { e.target.style.borderColor = 'var(--warm-stone)' }}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="home-contact-message"
          className="block font-sans font-medium uppercase tracking-wider mb-1.5"
          style={{ fontSize: '12px', color: 'var(--warm-stone)' }}
        >
          Message *
        </label>
        <textarea
          id="home-contact-message"
          name="message"
          value={message}
          onChange={(e) => { setMessage(e.target.value); clearError('message') }}
          required
          aria-required="true"
          aria-describedby={errors.message ? 'home-message-err' : undefined}
          aria-invalid={errors.message ? 'true' : undefined}
          rows={4}
          placeholder="What's on your mind?"
          style={{ ...inputStyle(!!errors.message), resize: 'vertical', minHeight: '100px' }}
          onFocus={(e) => { if (!errors.message) e.target.style.borderColor = 'var(--navy)' }}
          onBlur={(e) => { if (!errors.message) e.target.style.borderColor = 'var(--warm-stone)' }}
        />
        {errors.message && (
          <div id="home-message-err" role="alert" className="flex items-center gap-1 mt-1 text-xs" style={{ color: 'var(--warm-red)' }}>
            <AlertCircle size={12} />{errors.message}
          </div>
        )}
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="btn-arrow w-full sm:w-auto inline-flex items-center justify-center font-sans font-medium px-6 py-3 rounded-btn transition-all duration-200"
        style={{
          background: submitting ? 'var(--warm-stone)' : 'var(--terracotta)',
          color: 'white',
          fontSize: '15px',
        }}
      >
        {submitting ? 'Sending…' : <>Send message <span aria-hidden="true">→</span></>}
      </button>
    </form>
  )
}

export default function HomePage() {
  const frameRef = useRef<HTMLDivElement>(null)
  const [openFaq, setOpenFaq] = useState<string | null>(null)

  useEffect(() => {
    const frame = frameRef.current
    if (!frame) return
    // Parallax disabled for users who prefer reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const onMove = (e: MouseEvent) => {
      const rect = frame.getBoundingClientRect()
      const dx = (e.clientX - (rect.left + rect.width / 2)) / window.innerWidth
      const dy = (e.clientY - (rect.top + rect.height / 2)) / window.innerHeight
      frame.style.transform = `translate(${dx * 6}px, ${dy * 6}px)`
    }
    document.addEventListener('mousemove', onMove)
    return () => document.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <>
      {/* ══════════ HERO ══════════ */}
      <section className="hp-hero" id="hero" aria-label="Welcome">
        <div className="hp-chrome-top">
          <span>Est. 2018<span className="hp-eyebrow-dot"></span>NDIS Registered</span>
          <span>Perth, Western Australia<span className="hp-eyebrow-dot"></span>Paediatric OT</span>
        </div>

        <div className="hp-hero-grid">
          {/* LEFT */}
          <div className="hp-hero-left">
            <div className="hp-eyebrow">A practice of one — Jeimer Ng</div>

            <h1 className="hp-headline">
              Therapy that{' '}
              <span className="plays">
                plays
                <svg className="scribble" viewBox="0 0 200 16" preserveAspectRatio="none" fill="none" stroke="#C4724A" strokeWidth="2.2" strokeLinecap="round">
                  <path d="M2 9 Q 30 2 60 7 T 120 6 T 198 5" />
                </svg>
              </span>
              <br />
              by <span className="their">their</span> rules.
            </h1>

            <span className="hp-caveat-note" aria-hidden="true">
              <span style={{ display: 'inline-block', transform: 'rotate(8deg)', marginRight: '4px' }}>↳</span>
              {' '}joy is the goal.
            </span>

            <p className="hp-lede">
              Paediatric occupational therapy for kids who don&apos;t fit the standard kit.{' '}
              <strong>Adaptive gaming setups, switch access, mounted controllers</strong> — and eight
              years of figuring out what a child actually wants to do, then finding the way in.
            </p>

            <div className="hp-cta-row">
              <Link href="#contact" className="hp-btn">
                Book a chat with Jeimer
                <span className="hp-arrow" aria-hidden="true">
                  <svg viewBox="0 0 16 12" width="16" height="12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 6 H 14" /><path d="M9 1.5 L 14 6 L 9 10.5" />
                  </svg>
                </span>
              </Link>
              <Link href="#practitioners" className="hp-btn hp-btn--ghost">For referring practitioners</Link>
              <span className="meta">Usually replies same day</span>
            </div>

            <div className="hp-trust">
              <span className="pill"><span className="badge">N</span>NDIS Registered Provider</span>
              <span className="pill"><em>8+</em> years paediatric OT</span>
              <span className="pill"><em>120+</em> families supported</span>
            </div>
          </div>

          {/* RIGHT */}
          <div className="hp-hero-right">
            <div className="hp-frame-wrap" ref={frameRef}>
              <div className="hp-frame-offset" aria-hidden="true"></div>
              <div className="hp-frame">
                <div className="hp-frame-photo" aria-hidden="true"></div>

                <svg className="hp-frame-silhouette" viewBox="0 0 400 500" preserveAspectRatio="xMidYMax meet" aria-hidden="true">
                  <g fill="none" stroke="#1E2D40" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M0 380 Q 100 372 200 376 T 400 372" strokeOpacity="0.35" />
                    <circle cx="170" cy="410" r="46" />
                    <circle cx="170" cy="410" r="18" strokeOpacity="0.6" />
                    <g strokeOpacity="0.5" strokeWidth="1.1">
                      <line x1="170" y1="364" x2="170" y2="456" /><line x1="124" y1="410" x2="216" y2="410" />
                      <line x1="138" y1="378" x2="202" y2="442" /><line x1="202" y1="378" x2="138" y2="442" />
                    </g>
                    <circle cx="252" cy="430" r="22" /><line x1="230" y1="430" x2="274" y2="430" strokeOpacity="0.5" />
                    <path d="M124 410 L 124 320 L 232 310 L 252 430" />
                    <path d="M124 320 L 124 280 L 152 280" />
                    <path d="M232 430 L 252 430" /><path d="M232 410 L 245 430" />
                    <path d="M132 320 Q 180 314 232 312" />
                    <path d="M156 310 Q 160 270 170 250 Q 180 230 200 232 Q 220 234 224 258 Q 226 278 222 310" />
                    <circle cx="200" cy="208" r="26" />
                    <path d="M180 192 Q 188 180 198 184" /><path d="M204 184 Q 214 180 220 192" />
                    <path d="M170 260 Q 158 280 168 296 Q 178 300 186 296" />
                    <path d="M222 260 Q 234 278 224 294 Q 214 298 206 296" />
                    <rect x="178" y="288" width="36" height="16" rx="6" />
                    <circle cx="186" cy="296" r="2" fill="#1E2D40" /><circle cx="206" cy="296" r="2" fill="#1E2D40" />
                    <path d="M180 312 L 192 380 L 210 420" /><path d="M212 312 L 224 380 L 240 420" />
                    <g stroke="#C4724A" strokeWidth="1.6" strokeOpacity="0.9">
                      <path d="M168 170 L 162 158" /><path d="M200 158 L 200 142" /><path d="M232 170 L 240 158" />
                    </g>
                  </g>
                </svg>

                <svg className="hp-corner tl" viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" aria-hidden="true"><path d="M2 12 L 2 2 L 12 2" /></svg>
                <svg className="hp-corner tr" viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" aria-hidden="true"><path d="M2 12 L 2 2 L 12 2" /></svg>
                <svg className="hp-corner bl" viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" aria-hidden="true"><path d="M2 12 L 2 2 L 12 2" /></svg>
                <svg className="hp-corner br" viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" aria-hidden="true"><path d="M2 12 L 2 2 L 12 2" /></svg>

                <div className="hp-frame-caption">
                  <div className="who" aria-label="Lucas, aged 8. Switch and adaptive controller user.">
                    Lucas, 8
                    <small>Switch · Adaptive controller</small>
                  </div>
                  <div className="roll" aria-hidden="true">Roll 02<br />Frame 14</div>
                </div>
              </div>

              <div className="hp-stamp" aria-hidden="true">
                <svg viewBox="0 0 110 110" width="110" height="110">
                  <defs>
                    <path id="stampPath" d="M 55,55 m -42,0 a 42,42 0 1,1 84,0 a 42,42 0 1,1 -84,0" />
                  </defs>
                  <text fontFamily="DM Sans" fontSize="8.6" letterSpacing="3.2" fill="#1E2D40">
                    <textPath href="#stampPath" startOffset="0">
                      JOY IS THE GOAL · JOY IS THE GOAL · JOY IS THE GOAL ·
                    </textPath>
                  </text>
                </svg>
                <div className="inner">since<br />2018<span>Perth · WA</span></div>
              </div>

              <div className="hp-note" aria-hidden="true">
                <p>&ldquo;He&apos;s never sat still for therapy. He sat still for this.&rdquo;</p>
                <span className="sig">— Mira, mum of Eli, 6</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom chrome — decorative annotations, hidden from screen readers */}
        <div className="hp-hero-bottom" aria-hidden="true">
          <div className="left">Folio 01 / 06 — Welcome</div>
          <div className="center">
            <span className="scroll-ring">
              <svg viewBox="0 0 12 12" width="10" height="10" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 4 L 6 8 L 10 4" />
              </svg>
            </span>
            <span>scroll, gently</span>
          </div>
          <div className="right">↖ Crawley, Perth WA · 6009</div>
        </div>

        {/* Mountain motif */}
        <div className="hp-mountains" aria-hidden="true">
          <svg viewBox="0 0 1600 280" preserveAspectRatio="xMidYMax slice">
            <g fill="none" stroke="#1E2D40" strokeLinecap="round" strokeLinejoin="round">
              <path d="M -20 200 Q 90 178 160 188 T 320 172 T 480 184 T 640 168 T 800 178 T 960 162 T 1120 174 T 1280 160 T 1440 170 T 1620 162" strokeWidth="1" strokeOpacity="0.35" />
              <path d="M -20 230 L 80 178 L 130 198 L 200 140 L 260 196 L 340 172 L 410 220 L 490 178 L 560 215 L 640 195" strokeWidth="1.4" />
              <g strokeWidth="0.9" strokeOpacity="0.55">
                <line x1="207" y1="160" x2="220" y2="180" /><line x1="212" y1="158" x2="232" y2="186" />
                <line x1="218" y1="156" x2="244" y2="190" /><line x1="226" y1="156" x2="252" y2="192" />
                <line x1="234" y1="158" x2="256" y2="186" />
              </g>
              <path d="M 640 195 L 720 220 L 790 150 L 870 200 L 950 90 L 1040 200 L 1110 135 L 1190 210 L 1270 170 L 1370 230 L 1450 195 L 1620 220" strokeWidth="1.5" />
              <g strokeWidth="0.9" strokeOpacity="0.5">
                <line x1="956" y1="110" x2="980" y2="140" /><line x1="962" y1="106" x2="996" y2="150" />
                <line x1="970" y1="106" x2="1014" y2="158" /><line x1="980" y1="108" x2="1028" y2="166" />
                <line x1="992" y1="112" x2="1034" y2="172" /><line x1="1004" y1="118" x2="1036" y2="178" />
              </g>
              <g strokeWidth="0.8" strokeOpacity="0.45">
                <line x1="1115" y1="148" x2="1130" y2="172" /><line x1="1122" y1="148" x2="1142" y2="178" /><line x1="1130" y1="150" x2="1156" y2="186" />
              </g>
              <path d="M -20 252 Q 200 234 380 244 T 760 240 T 1140 238 T 1500 244 T 1620 240" strokeWidth="1.3" />
              <g strokeWidth="1.2">
                <g transform="translate(280 248)"><path d="M0 0 L 0 -8" /><path d="M-9 -8 L 0 -22 L 9 -8 Z M -7 -16 L 0 -28 L 7 -16 Z M -5 -22 L 0 -34 L 5 -22 Z" /></g>
                <g transform="translate(310 250)"><path d="M0 0 L 0 -6" /><path d="M-7 -6 L 0 -18 L 7 -6 Z M -5 -14 L 0 -24 L 5 -14 Z" /></g>
                <g transform="translate(338 246)"><path d="M0 0 L 0 -10" /><path d="M-11 -10 L 0 -28 L 11 -10 Z M -8 -20 L 0 -34 L 8 -20 Z M -6 -28 L 0 -42 L 6 -28 Z" /></g>
              </g>
              <g strokeWidth="1.2">
                <g transform="translate(1240 244)"><path d="M0 0 L 0 -10" /><path d="M-10 -10 L 0 -28 L 10 -10 Z M -8 -20 L 0 -34 L 8 -20 Z M -6 -28 L 0 -42 L 6 -28 Z" /></g>
                <g transform="translate(1268 246)"><path d="M0 0 L 0 -8" /><path d="M-8 -8 L 0 -22 L 8 -8 Z M -6 -16 L 0 -28 L 6 -16 Z" /></g>
                <g transform="translate(1294 244)"><path d="M0 0 L 0 -12" /><path d="M-12 -12 L 0 -32 L 12 -12 Z M -9 -22 L 0 -38 L 9 -22 Z M -6 -30 L 0 -44 L 6 -30 Z" /></g>
                <g transform="translate(1318 246)"><path d="M0 0 L 0 -7" /><path d="M-7 -7 L 0 -18 L 7 -7 Z M -5 -14 L 0 -24 L 5 -14 Z" /></g>
              </g>
              <g strokeWidth="1.2" transform="translate(560 240)">
                <path d="M0 0 L 0 -10" /><path d="M-10 -10 L 0 -26 L 10 -10 Z M -7 -20 L 0 -32 L 7 -20 Z M -5 -28 L 0 -40 L 5 -28 Z" />
              </g>
              <g strokeWidth="1.1" strokeOpacity="0.6">
                <path d="M 740 70 q 6 -6 12 0 q 6 -6 12 0" /><path d="M 820 90 q 5 -5 10 0 q 5 -5 10 0" /><path d="M 380 60 q 5 -5 10 0 q 5 -5 10 0" />
              </g>
            </g>
          </svg>
        </div>
      </section>

      {/* ══════════ ABOUT ══════════ */}
      <section className="hp-section" id="about" aria-label="About Jeimer">
        <div className="hp-container">
          <header className="hp-section-head">
            <span className="hp-folio">§ 02 — About</span>
            <h2 className="hp-display">Hi, I&apos;m <em>Jeimer</em>.</h2>
          </header>

          <div className="hp-about">
            <div className="hp-about-portrait-wrap">
              <div className="hp-about-portrait-offset" aria-hidden="true"></div>
              <div className="hp-about-portrait">
                <img
                  src="/images/profilePic.jpg"
                  alt="Jeimer, occupational therapist"
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ zIndex: 1 }}
                />

                <svg className="hp-about-corner tl" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" aria-hidden="true"><path d="M2 10 L 2 2 L 10 2" /></svg>
                <svg className="hp-about-corner tr" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" aria-hidden="true"><path d="M2 10 L 2 2 L 10 2" /></svg>
                <svg className="hp-about-corner bl" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" aria-hidden="true"><path d="M2 10 L 2 2 L 10 2" /></svg>
                <svg className="hp-about-corner br" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" aria-hidden="true"><path d="M2 10 L 2 2 L 10 2" /></svg>

                <span className="hp-about-caption">Jeimer, working<small>Perth, WA · 2025</small></span>
                <span className="hp-about-stamp" aria-hidden="true">Roll 03<br />Frame 02</span>
              </div>
            </div>

            <div>
              <div className="hp-about-prose">
                <p>I&apos;m a paediatric occupational therapist in Perth. I work mostly with kids who use wheelchairs — and mostly on what those kids actually want to do, which is usually <em>&ldquo;play this video game with my mates&rdquo;</em>.</p>
                <p>After eight years across hospitals, schools and homes, I started Assured OT to do this work the way it should be done: slowly, properly, and with the kid steering. No 30-minute slots. No clipboard energy. No pretending Mario Kart isn&apos;t therapy.</p>
                <p>It is therapy. <em>Joy is the goal.</em></p>
              </div>
              <span className="hp-about-sig">— Jeimer</span>
              <div className="hp-about-creds">
                <span className="hp-cred"><span className="hp-cred-key">B.OT</span>Curtin, &apos;17</span>
                <span className="hp-cred">AHPRA registered</span>
                <span className="hp-cred">NDIS Provider <span className="hp-cred-key" style={{ marginLeft: '4px' }}>#4050000142</span></span>
                <span className="hp-cred"><span className="hp-cred-key">8+</span>years paediatric</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ SERVICES ══════════ */}
      <section className="hp-section hp-section--sand" id="services" aria-label="Services">
        <div className="hp-container">
          <header className="hp-section-head">
            <span className="hp-folio">§ 03 — Services</span>
            <div>
              <h2 className="hp-display">What I <em>work on</em>.</h2>
              <span className="hp-caveat-deco" aria-hidden="true">↳ all NDIS-billable</span>
            </div>
          </header>

          <ul className="hp-services-list">
            {[
              { num: '/ 01', title: <>Adaptive <em>gaming</em></>, desc: 'Switch- and PC-compatible setups. Eye-gaze, head-tracking, button mapping, voice control. Whatever it takes to get the controller into the kid\'s hands — even when "hands" isn\'t the right word.' },
              { num: '/ 02', title: 'Switch & alt. controllers', desc: 'Microsoft Adaptive, 8BitDo Lite SE, Quadstick, Aimee Mounts. I keep about forty things in the car. You try them at your place, we keep what works.' },
              { num: '/ 03', title: <><em>AT</em> assessments</>, desc: 'Functional capacity assessments and AT funding requests. Reports that arrive on time and read like English, written for the planner who has thirty more to get through today.' },
              { num: '/ 04', title: 'Mounting & positioning', desc: 'Wheelchair-mounted iPads, switch trays, head-pointer rigs, fabricated brackets. Built to survive a school day and the trip there.' },
              { num: '/ 05', title: <><em>NDIS</em> reports</>, desc: 'Plan reviews, capacity-building goal mapping, equipment justifications. Written so a parent and a planner can both follow them on the first read.' },
              { num: '/ 06', title: 'Home & school visits', desc: 'I come to where the kid actually lives. Perth metro and out to Mandurah, no extra charge. Schools welcome — I bring the gear and the patience for a teachers\' meeting.' },
            ].map(({ num, title, desc }) => (
              <li className="hp-service" key={num}>
                <span className="hp-service-num">{num}</span>
                <h3 className="hp-service-title">{title}</h3>
                <p className="hp-service-desc">{desc}</p>
                <span className="hp-service-arrow" aria-hidden="true">
                  <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                    <path d="M4 12 L 12 4" /><path d="M6 4 L 12 4 L 12 10" />
                  </svg>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ══════════ PROCESS ══════════ */}
      <section className="hp-section hp-process" id="process" aria-label="How it works">
        <div className="hp-container">
          <header className="hp-section-head">
            <span className="hp-folio">§ 04 — How it works</span>
            <h2 className="hp-display">A simple route from <em>hello</em> to playing.</h2>
          </header>

          <div className="hp-process-grid">
            {[
              { n: '01', title: 'We chat', desc: 'A free 20-minute call to talk about your kid, what\'s going on, and what they love doing. No clipboard. No commitment.' },
              { n: '02', title: 'We meet', desc: 'First proper session at your place. We play, I watch closely, we try a few things from the kit in the car.' },
              { n: '03', title: 'We build', desc: 'Custom setup of devices, mounts, software. I source the gear, your kid trials it, we adjust until it disappears into the day.' },
              { n: '04', title: 'We tune', desc: 'Quarterly check-ins so the setup grows with your kid. Bodies change, games change, school changes — the rig should follow.' },
            ].map(({ n, title, desc }) => (
              <div className="hp-step" key={n}>
                <span className="hp-step-num">{n}</span>
                <h3 className="hp-step-title">{title}</h3>
                <p className="hp-step-desc">{desc}</p>
              </div>
            ))}
          </div>

          <div className="hp-process-mountains" aria-hidden="true">
            <svg viewBox="0 0 1600 180" preserveAspectRatio="xMidYMax slice" fill="none" stroke="#1E2D40" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M0 140 L 140 60 L 220 110 L 340 30 L 460 110 L 580 70 L 720 130 L 860 50 L 980 120 L 1140 60 L 1280 130 L 1420 80 L 1600 130" />
              <path d="M0 160 Q 200 144 400 152 T 800 148 T 1200 146 T 1600 150" strokeOpacity="0.5" />
            </svg>
          </div>
        </div>
      </section>

      {/* ══════════ STORIES ══════════ */}
      <section className="hp-section" id="stories" aria-label="Stories from the field">
        <div className="hp-container">
          <header className="hp-section-head">
            <span className="hp-folio">§ 05 — Stories from the field</span>
            <div>
              <h2 className="hp-display">Kids doing things they <em>couldn&apos;t</em> last year.</h2>
              <p className="hp-stories-intro">Names changed, wins real. Shared with family permission, and only the bits the kid was happy to share.</p>
            </div>
          </header>

          <div className="hp-stories">
            {/* Story 1 */}
            <article className="hp-polaroid">
              <span className="hp-polaroid-tape" aria-hidden="true"></span>
              <div className="hp-polaroid-photo">
                <svg className="hp-polaroid-silhouette" viewBox="0 0 200 200" preserveAspectRatio="xMidYMax meet" aria-hidden="true">
                  <g fill="none" stroke="#1E2D40" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="100" cy="80" r="14" />
                    <path d="M88 95 Q 80 130 88 168" /><path d="M112 95 Q 120 130 112 168" />
                    <circle cx="86" cy="170" r="22" /><circle cx="86" cy="170" r="9" strokeOpacity="0.5" />
                    <circle cx="134" cy="180" r="12" />
                    <path d="M70 170 L 70 130 L 130 124 L 134 180" />
                    <rect x="88" y="124" width="24" height="10" rx="3" />
                    <g stroke="#C4724A" strokeWidth="1.4"><path d="M100 56 L 100 46" /><path d="M86 62 L 80 58" /></g>
                  </g>
                </svg>
              </div>
              <div className="hp-polaroid-caption">Lucas, 8<small>Spinal muscular atrophy</small></div>
              <p className="hp-polaroid-story">Switch + Microsoft Adaptive Controller. Started with two mapped buttons. Now running six, plus a chin-switch for the right trigger. Beats his brother regularly.</p>
              <p className="hp-polaroid-quote">He beats his older brother now. Loudly.<span className="hp-polaroid-credit">— Lucas&apos;s mum</span></p>
            </article>

            {/* Story 2 */}
            <article className="hp-polaroid">
              <span className="hp-polaroid-tape" aria-hidden="true"></span>
              <div className="hp-polaroid-photo">
                <svg className="hp-polaroid-silhouette" viewBox="0 0 200 200" preserveAspectRatio="xMidYMax meet" aria-hidden="true">
                  <g fill="none" stroke="#1E2D40" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="40" y="60" width="120" height="80" rx="4" />
                    <path d="M70 140 L 70 156 L 130 156 L 130 140" /><path d="M60 156 L 140 156" />
                    <g strokeOpacity="0.45">
                      <rect x="56" y="76" width="18" height="18" /><rect x="76" y="76" width="18" height="18" />
                      <rect x="56" y="96" width="18" height="18" /><rect x="76" y="96" width="18" height="18" />
                      <rect x="116" y="86" width="28" height="28" />
                    </g>
                    <circle cx="100" cy="50" r="3" fill="#C4724A" stroke="none" />
                    <path d="M100 50 L 100 100" stroke="#C4724A" strokeWidth="1" strokeOpacity="0.5" strokeDasharray="2 3" />
                  </g>
                </svg>
              </div>
              <div className="hp-polaroid-caption">Mia, 11<small>Cerebral palsy · Eye-gaze</small></div>
              <p className="hp-polaroid-story">Tobii eye-gaze rig for Minecraft and schoolwork. Spent six weeks dialling in dwell times. Then her redstone circuits got better than mine.</p>
              <p className="hp-polaroid-quote">She built a castle. Then she built a school for the castle.<span className="hp-polaroid-credit">— Mia&apos;s dad</span></p>
            </article>

            {/* Story 3 */}
            <article className="hp-polaroid">
              <span className="hp-polaroid-tape" aria-hidden="true"></span>
              <div className="hp-polaroid-photo">
                <svg className="hp-polaroid-silhouette" viewBox="0 0 200 200" preserveAspectRatio="xMidYMax meet" aria-hidden="true">
                  <g fill="none" stroke="#1E2D40" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="80" cy="160" r="26" /><circle cx="80" cy="160" r="11" strokeOpacity="0.5" />
                    <circle cx="148" cy="176" r="14" />
                    <path d="M60 160 L 60 100 L 140 92 L 148 176" />
                    <path d="M110 100 L 110 70 L 150 60 L 168 80" strokeOpacity="0.7" />
                    <rect x="138" y="46" width="44" height="32" rx="3" />
                    <line x1="140" y1="50" x2="180" y2="50" strokeOpacity="0.4" />
                    <circle cx="98" cy="80" r="12" />
                    <path d="M88 92 Q 86 116 96 124" /><path d="M108 92 Q 110 116 100 124" />
                  </g>
                </svg>
              </div>
              <div className="hp-polaroid-caption">Eli, 6<small>Muscular dystrophy</small></div>
              <p className="hp-polaroid-story">Wheelchair-mounted iPad with two-switch scan access. The mount geometry took five iterations. He&apos;s been on the same setup for eleven months — best result we have.</p>
              <p className="hp-polaroid-quote">He hasn&apos;t asked for the iPad to be moved in three weeks.<span className="hp-polaroid-credit">— Eli&apos;s mum</span></p>
            </article>
          </div>
        </div>
      </section>

      {/* ══════════ PRACTITIONERS ══════════ */}
      <section className="hp-section hp-section--navy" id="practitioners" aria-label="For practitioners">
        <div className="hp-container">
          <header className="hp-section-head">
            <span className="hp-folio">§ 06 — For practitioners</span>
            <h2 className="hp-display">Sending a <em>referral</em>?</h2>
          </header>

          <div className="hp-practitioners">
            <div>
              <p className="hp-practitioners-lede">
                <strong>Plain answers to the things you&apos;d otherwise have to email and ask.</strong> If you need something specific — a paediatrician&apos;s report, a school OHS visit, a co-treatment with speech — hit reply, I&apos;ll get back same day.
              </p>
              <div className="hp-dl-row">
                <a href="#" className="hp-dl">
                  <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M8 2 L 8 11" /><path d="M4 8 L 8 12 L 12 8" /><path d="M3 14 L 13 14" /></svg>
                  Referral form <span className="hp-dl-ext">PDF · 84 KB</span>
                </a>
                <a href="#" className="hp-dl">
                  <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M8 2 L 8 11" /><path d="M4 8 L 8 12 L 12 8" /><path d="M3 14 L 13 14" /></svg>
                  Service brochure <span className="hp-dl-ext">PDF · 1.2 MB</span>
                </a>
                <a href="mailto:hello@assuredot.com.au" className="hp-dl">
                  <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 11 L 11 5" /><path d="M6 5 L 11 5 L 11 10" /></svg>
                  Email Jeimer <span className="hp-dl-ext">hello@assuredot.com.au</span>
                </a>
              </div>
              <div className="hp-waitlist">
                <span className="dot" aria-hidden="true"></span>
                Currently taking new referrals · <em>&nbsp;next intake June 2026</em>
              </div>
            </div>

            <div className="hp-brief-table" role="presentation">
              {[
                { key: 'Initial response', val: <><em>Within 24 hours</em><small>Mon–Fri, AWST</small></> },
                { key: 'First session', val: <>1–2 weeks typically<small>Subject to current waitlist</small></> },
                { key: 'Report turnaround', val: <>10 business days<small>Plain English · NDIS-ready</small></> },
                { key: 'Funding accepted', val: <>Plan, self &amp; agency-managed<small>NDIS Provider #4050000142</small></> },
                { key: 'Service area', val: <>Perth metro + Mandurah<small>Home, school, clinic visits</small></> },
                { key: 'Ages seen', val: <>3 – 18<small>Most work happens between 6 and 14</small></> },
              ].map(({ key, val }) => (
                <div className="hp-brief-row" key={key}>
                  <span className="hp-brief-key">{key}</span>
                  <span className="hp-brief-val">{val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ FAQ ══════════ */}
      <section className="hp-section" id="faq" aria-label="Common questions">
        <div className="hp-container">
          <header className="hp-section-head">
            <span className="hp-folio">§ 07 — Common questions</span>
            <h2 className="hp-display">Things parents ask <em>first</em>.</h2>
          </header>

          <div className="hp-faq">
            {[
              { num: '/ 01', id: 'faq-01', q: 'Are you NDIS registered?', a: <>Yes — registered NDIS provider, number <em>#4050000142</em>. I work with plan-managed, self-managed and agency-managed plans. If you&apos;re not on NDIS, we can still talk about private options.</> },
              { num: '/ 02', id: 'faq-02', q: 'What ages do you work with?', a: 'Three to eighteen. The bulk of the work happens between six and fourteen, but I\'ll always have a chat about anyone in that range — sometimes earlier or later makes sense.' },
              { num: '/ 03', id: 'faq-03', q: 'Do you offer telehealth?', a: 'Sometimes — for catch-ups, planning sessions, family check-ins. The hands-on work happens in person. Most of what I do revolves around equipment, and equipment needs a body in the room.' },
              { num: '/ 04', id: 'faq-04', q: 'How much does it cost?', a: <>Standard NDIS price guide rates. <em>$193.99/hr</em> for OT, plus travel for home and school visits within reasonable distance. The initial 20-minute chat is free, and you only commit to anything after we&apos;ve spoken.</> },
              { num: '/ 05', id: 'faq-05', q: 'Do you do home visits?', a: 'Yes — most of my sessions happen at clients\' homes. Perth metro and out to Mandurah without extra charge. Further afield, we\'ll have a conversation about travel. Schools and clinics also welcome.' },
              { num: '/ 06', id: 'faq-06', q: "What if my child doesn't speak?", a: "Most of the kids I work with communicate in ways that aren't speech. We'll find the channel — AAC, eye-gaze, switches, gestures, drawings, whatever works. The therapy doesn't depend on words." },
            ].map(({ num, id, q, a }) => {
              const panelId = `${id}-panel`
              const isOpen = openFaq === id
              return (
                <div className={`hp-faq-item${isOpen ? ' is-open' : ''}`} key={id}>
                  <button
                    type="button"
                    id={id}
                    className="hp-faq-trigger"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenFaq(isOpen ? null : id)}
                  >
                    <span className="hp-faq-num" aria-hidden="true">{num}</span>
                    <span className="hp-faq-q">{q}</span>
                    <span className="hp-faq-plus" aria-hidden="true"></span>
                  </button>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={id}
                    className="hp-faq-a"
                    aria-hidden={!isOpen}
                  >
                    <div className="hp-faq-a-inner">{a}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ══════════ CONTACT ══════════ */}
      <section className="hp-contact-section" id="contact" aria-label="Let's talk">
        <div className="hp-contact-block">
          <div className="hp-contact-grid">
            <div>
              <span className="hp-folio" style={{ color: 'rgba(253,250,245,0.55)' }}>§ 08 — Let&apos;s talk</span>
              <h2 className="hp-contact-display" style={{ marginTop: '24px' }}>
                Let&apos;s chat about <em>your kid</em>.
              </h2>
              <span className="hp-contact-caveat" aria-hidden="true">↳ no clipboards, promise.</span>
              <div style={{ marginTop: '8px' }}>
                <a href="tel:+61865550142" className="hp-btn">
                  Book a 20-min chat
                  <span className="hp-arrow" aria-hidden="true">
                    <svg viewBox="0 0 16 12" width="16" height="12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 6 H 14" /><path d="M9 1.5 L 14 6 L 9 10.5" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>

            <div className="hp-contact-details">
              <div className="hp-contact-line">
                <span className="hp-contact-label">Call</span>
                <span className="hp-contact-val">
                  <a href="tel:+61865550142">(08) 6555 0142</a>
                  <small>Mon–Fri, 9am–5pm AWST</small>
                </span>
              </div>
              <div className="hp-contact-line">
                <span className="hp-contact-label">Email</span>
                <span className="hp-contact-val">
                  <a href="mailto:hello@assuredot.com.au">hello@assuredot.com.au</a>
                  <small>I reply same day, usually within the hour.</small>
                </span>
              </div>
              <div className="hp-contact-line">
                <span className="hp-contact-label">Visit</span>
                <span className="hp-contact-val">
                  Crawley, Perth WA 6009
                  <small>By appointment, or I come to you.</small>
                </span>
              </div>

              {/* Inline contact form */}
              <HomeContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
