'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import MountainDivider from '@/components/MountainDivider'
import RevealOnScroll from '@/components/RevealOnScroll'
import SpotIllustration from '@/components/SpotIllustration'
import { ChevronDown, Shield, MapPin, Clock, ChevronRight } from 'lucide-react'

// ─── Hero Illustration ──────────────────────────────────────────────────────
function HeroIllustration() {
  return (
    <div
      className="absolute inset-0 w-full h-full overflow-hidden grain-overlay"
      style={{ background: 'var(--sketch-cream)' }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 600 700"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        {/* Background mountain range — large */}
        <path
          d="M-50,500 C50,450 120,200 220,220 C280,232 310,360 380,350 C450,340 480,160 580,140 C650,128 700,250 750,240 L750,700 L-50,700 Z"
          stroke="var(--navy)"
          strokeWidth="1"
          fill="none"
          opacity="0.18"
        />
        {/* Mid mountain */}
        <path
          d="M-50,580 C80,540 160,350 280,340 C360,333 400,450 490,440 C560,432 600,320 680,310 L680,700 L-50,700 Z"
          stroke="var(--navy)"
          strokeWidth="1.5"
          fill="none"
          opacity="0.25"
        />
        {/* Hatching — peaks */}
        <path d="M220,220 L210,270 M220,220 L228,265" stroke="var(--navy)" strokeWidth="0.8" opacity="0.12" />
        <path d="M580,140 L570,200 M580,140 L590,195" stroke="var(--navy)" strokeWidth="0.8" opacity="0.12" />
        {/* Pine trees */}
        <path d="M80,520 L80,480 M70,500 L80,460 L90,500 M65,515 L80,470 L95,515" stroke="var(--navy)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.3" />
        <path d="M150,540 L150,505 M141,520 L150,488 L159,520 M137,535 L150,495 L163,535" stroke="var(--navy)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.3" />
        <path d="M420,460 L420,428 M412,443 L420,415 L428,443 M409,457 L420,422 L431,457" stroke="var(--navy)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.28" />
        <path d="M490,440 L490,408 M482,424 L490,395 L498,424 M479,438 L490,402 L501,438" stroke="var(--navy)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.28" />
        {/* Cross-hatching texture */}
        <line x1="0" y1="600" x2="80" y2="530" stroke="var(--navy)" strokeWidth="0.5" opacity="0.06" />
        <line x1="20" y1="620" x2="100" y2="550" stroke="var(--navy)" strokeWidth="0.5" opacity="0.06" />
        <line x1="40" y1="640" x2="120" y2="570" stroke="var(--navy)" strokeWidth="0.5" opacity="0.06" />
        {/* Decorative circle / sun */}
        <circle cx="480" cy="80" r="45" stroke="var(--navy)" strokeWidth="0.8" opacity="0.12" />
        <circle cx="480" cy="80" r="35" stroke="var(--navy)" strokeWidth="0.5" opacity="0.08" />
        {/* Dotted texture */}
        {Array.from({ length: 20 }).map((_, i) => (
          <circle
            key={i}
            cx={50 + (i % 5) * 120 + Math.sin(i * 2.3) * 30}
            cy={300 + Math.floor(i / 5) * 80 + Math.cos(i * 1.7) * 25}
            r="1.2"
            fill="var(--navy)"
            opacity="0.1"
          />
        ))}
      </svg>

      {/* Editorial photo placeholder */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 rounded-t-[160px] overflow-hidden"
        style={{
          height: '72%',
          background: 'linear-gradient(180deg, rgba(201,187,168,0.3) 0%, rgba(201,187,168,0.6) 100%)',
          border: '1px solid rgba(201,187,168,0.5)',
        }}
      >
        {/* Photo placeholder — replace with actual image */}
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-center" style={{ color: 'var(--warm-stone)' }}>
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="mx-auto mb-3" aria-hidden="true">
              <path d="M8 48L20 28L32 38L42 24L56 48H8Z" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
              <circle cx="20" cy="18" r="6" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            <p className="font-caveat text-base opacity-60">Your photo here</p>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Hero Section ───────────────────────────────────────────────────────────
function HeroSection() {
  const words = ['Therapy', 'that', 'plays', 'by', 'their', 'rules.']
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'var(--off-white)' }}
      aria-label="Hero"
    >
      <div className="container-content w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-0 min-h-screen items-center">
          {/* Left — content */}
          <div className="py-32 pr-0 lg:pr-16">
            {/* Caveat annotation */}
            <div
              className="inline-flex items-center gap-2 mb-8"
              style={{
                opacity: mounted ? 1 : 0,
                transition: 'opacity 400ms ease-out 800ms',
              }}
            >
              <span
                className="font-caveat text-lg"
                style={{ color: 'var(--terracotta)' }}
              >
                made in Perth, WA
              </span>
              <span style={{ color: 'var(--warm-stone)' }}>·</span>
              <span
                className="font-sans text-sm font-medium"
                style={{ color: 'var(--warm-stone)' }}
              >
                NDIS registered
              </span>
            </div>

            {/* Hero headline — stagger-fade-up */}
            <h1 className="font-lora font-bold mb-6" style={{ fontSize: 'clamp(44px,5.5vw,72px)', lineHeight: 1.08, letterSpacing: '-0.02em', color: 'var(--deep-ink)' }}>
              {words.map((word, i) => (
                <span
                  key={i}
                  className="inline-block mr-[0.25em]"
                  style={{
                    opacity: mounted ? 1 : 0,
                    transform: mounted ? 'translateY(0)' : 'translateY(20px)',
                    transition: `opacity 400ms ease-out ${150 + i * 60}ms, transform 400ms ease-out ${150 + i * 60}ms`,
                  }}
                >
                  {i === words.length - 1 ? (
                    <em style={{ fontStyle: 'italic', color: 'var(--terracotta)' }}>{word}</em>
                  ) : (
                    word
                  )}
                </span>
              ))}
            </h1>

            {/* Subhead */}
            <p
              className="font-sans mb-10 max-w-[460px]"
              style={{
                fontSize: '18px',
                lineHeight: 1.65,
                color: 'var(--deep-ink)',
                opacity: mounted ? 0.75 : 0,
                transform: mounted ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 400ms ease-out 560ms, transform 400ms ease-out 560ms',
              }}
            >
              Occupational therapy built around your child — not a textbook. Jeimer works with
              kids with physical disabilities to unlock access, joy, and real independence.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-wrap gap-4"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 400ms ease-out 710ms, transform 400ms ease-out 710ms',
              }}
            >
              <Link
                href="/referral"
                className="btn-arrow inline-flex items-center font-sans font-medium px-6 py-3 rounded-btn transition-all duration-200"
                style={{
                  background: 'var(--navy)',
                  color: 'var(--sand-white)',
                  fontSize: '15px',
                }}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLElement).style.background = 'var(--terracotta)'
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLElement).style.background = 'var(--navy)'
                }}
              >
                See what's possible <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/referral"
                className="btn-arrow inline-flex items-center font-sans font-medium px-6 py-3 rounded-btn border-2 transition-all duration-200"
                style={{
                  background: 'transparent',
                  borderColor: 'var(--navy)',
                  color: 'var(--navy)',
                  fontSize: '15px',
                }}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLElement).style.background = 'var(--navy)'
                  ;(e.currentTarget as HTMLElement).style.color = 'var(--sand-white)'
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLElement).style.background = 'transparent'
                  ;(e.currentTarget as HTMLElement).style.color = 'var(--navy)'
                }}
              >
                Make a referral <span aria-hidden="true">→</span>
              </Link>
            </div>

            {/* Scroll hint */}
            <div
              className="mt-16 flex items-center gap-2"
              style={{
                opacity: mounted ? 0.4 : 0,
                transition: 'opacity 400ms ease-out 1200ms',
              }}
            >
              <ChevronDown size={16} style={{ color: 'var(--navy)' }} />
              <span className="font-sans text-caption" style={{ color: 'var(--navy)' }}>
                Scroll to explore
              </span>
            </div>
          </div>

          {/* Right — illustration panel */}
          <div
            className="hidden lg:block relative h-screen"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateX(0)' : 'translateX(30px)',
              transition: 'opacity 500ms ease-out 300ms, transform 500ms ease-out 300ms',
            }}
          >
            <HeroIllustration />
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Social proof bar ───────────────────────────────────────────────────────
function SocialProofBar() {
  const items = [
    { Icon: Shield, text: 'NDIS registered provider' },
    { Icon: MapPin, text: 'Based in Perth, WA' },
    { Icon: Clock, text: '8+ years of paediatric OT' },
    {
      Icon: () => (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M8 1L10 6H15L11 9.5L12.5 14.5L8 11.5L3.5 14.5L5 9.5L1 6H6Z" fill="currentColor" />
        </svg>
      ),
      text: 'Specialist paediatric focus',
    },
  ]

  return (
    <RevealOnScroll>
      <section
        className="py-6 border-y"
        style={{
          background: 'var(--navy)',
          borderColor: 'rgba(201,187,168,0.2)',
        }}
        aria-label="About Assured OT"
        data-dark-bg
      >
        <div className="container-content">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
            {items.map(({ Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-2.5 font-sans text-sm font-medium"
                style={{ color: 'var(--sand-white)' }}
              >
                <span style={{ color: 'var(--terracotta)' }}>
                  <Icon size={16} />
                </span>
                {text}
              </div>
            ))}
          </div>
        </div>
      </section>
    </RevealOnScroll>
  )
}

// ─── About Intro ────────────────────────────────────────────────────────────
function AboutIntro() {
  return (
    <section
      className="section-pad"
      style={{ background: 'var(--off-white)' }}
      aria-label="About Jeimer"
    >
      <div className="container-content">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Photo */}
          <RevealOnScroll>
            <div className="relative">
              <div
                className="aspect-[3/4] rounded-[20px] overflow-hidden"
                style={{ background: 'var(--sketch-cream)' }}
              >
                {/* Photo placeholder */}
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center" style={{ color: 'var(--warm-stone)' }}>
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="mx-auto mb-2" aria-hidden="true">
                      <circle cx="24" cy="18" r="8" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M6 44C6 34 14 28 24 28C34 28 42 34 42 44" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                    <p className="font-caveat text-sm opacity-50">Jeimer's portrait</p>
                  </div>
                </div>
              </div>

              {/* Floating annotation */}
              <div
                className="absolute -bottom-4 -right-4 px-4 py-3 rounded-card"
                style={{
                  background: 'var(--navy)',
                  color: 'var(--sand-white)',
                }}
              >
                <p className="font-caveat text-lg" style={{ color: 'var(--terracotta)' }}>
                  "Joy is the goal."
                </p>
              </div>
            </div>
          </RevealOnScroll>

          {/* Copy */}
          <RevealOnScroll delay={120}>
            <div>
              <span
                className="font-caveat text-xl block mb-3"
                style={{ color: 'var(--terracotta)' }}
              >
                Hi, I'm Jeimer.
              </span>
              <h2
                className="font-lora font-bold mb-6"
                style={{ fontSize: '32px', color: 'var(--deep-ink)', lineHeight: 1.2 }}
              >
                An OT who believes your child's potential is bigger than their diagnosis
              </h2>
              <p
                className="font-sans mb-4"
                style={{ fontSize: '18px', lineHeight: 1.65, color: 'var(--deep-ink)', opacity: 0.8 }}
              >
                I started Assured OT because I kept seeing kids written off — told what they couldn't
                do before anyone had tried to find a way they could. That felt wrong.
              </p>
              <p
                className="font-sans mb-8"
                style={{ fontSize: '16px', lineHeight: 1.65, color: 'var(--deep-ink)', opacity: 0.7 }}
              >
                My work centres on physical disability — particularly kids who use wheelchairs — and
                finding the tools, technologies, and strategies that let them access the things that
                matter: games, friends, school, their own space. Real life.
              </p>
              <Link
                href="/about"
                className="btn-arrow inline-flex items-center gap-2 font-sans font-medium text-sm transition-colors duration-200"
                style={{ color: 'var(--navy)' }}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLElement).style.color = 'var(--terracotta)'
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLElement).style.color = 'var(--navy)'
                }}
              >
                Read Jeimer's story <span aria-hidden="true">→</span>
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}

// ─── Services Overview ──────────────────────────────────────────────────────
const services = [
  {
    illus: 'controller' as const,
    title: 'Accessible gaming',
    desc: "Adaptive controllers, custom setups, and support to get your child into gaming on their terms — because play doesn't have a prerequisite.",
    href: '/services#adaptive-gaming',
  },
  {
    illus: 'wheelchair' as const,
    title: 'Wheelchair & mobility',
    desc: "Seating assessments, mobility aid prescription, and environment modifications to maximise your child's independence and comfort.",
    href: '/services#wheelchair-access',
  },
  {
    illus: 'puzzle' as const,
    title: 'Assistive technology',
    desc: "From communication aids to smart home controls — finding the right technology stack for your child's specific strengths and needs.",
    href: '/services#assistive-tech',
  },
  {
    illus: 'lightbulb' as const,
    title: 'Home modifications',
    desc: 'Practical assessments and recommendations that make the home work better — for your child and for your family.',
    href: '/services#home-modification',
  },
  {
    illus: 'joystick' as const,
    title: 'School & community access',
    desc: 'Strategies, reports, and advocacy to help your child participate fully in school and community life on equal footing.',
    href: '/services#school-support',
  },
  {
    illus: 'mountain-tree' as const,
    title: 'NDIS planning support',
    desc: "Assessments, reports, and guidance to help families navigate the NDIS and build plans that actually reflect what's needed.",
    href: '/services#ndis',
  },
]

function ServicesOverview() {
  return (
    <section
      className="section-pad"
      style={{ background: 'var(--sand)' }}
      aria-label="Services"
    >
      <div className="container-content">
        <RevealOnScroll>
          <div className="text-center mb-14">
            <span className="font-caveat text-xl block mb-3" style={{ color: 'var(--terracotta)' }}>
              what we do together
            </span>
            <h2
              className="font-lora font-bold"
              style={{ fontSize: '36px', color: 'var(--deep-ink)', letterSpacing: '-0.01em' }}
            >
              Services built for real life
            </h2>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ illus, title, desc, href }, i) => (
            <RevealOnScroll key={title} delay={i * 80}>
              <Link
                href={href}
                className="card-hover block p-8 rounded-card group"
                style={{ background: 'var(--off-white)' }}
              >
                <SpotIllustration type={illus} size={48} className="mb-5" />
                <h3
                  className="font-sans font-semibold mb-3"
                  style={{ fontSize: '20px', color: 'var(--deep-ink)' }}
                >
                  {title}
                </h3>
                <p
                  className="font-sans text-sm leading-relaxed mb-5"
                  style={{ color: 'var(--deep-ink)', opacity: 0.7 }}
                >
                  {desc}
                </p>
                <span
                  className="btn-arrow inline-flex items-center gap-1 font-sans text-sm font-medium transition-colors duration-200"
                  style={{ color: 'var(--terracotta)' }}
                >
                  Learn more <ChevronRight size={14} />
                </span>
              </Link>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delay={200}>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="btn-arrow inline-flex items-center font-sans font-medium px-6 py-3 rounded-btn border-2 transition-all duration-200"
              style={{
                borderColor: 'var(--navy)',
                color: 'var(--navy)',
                background: 'transparent',
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLElement).style.background = 'var(--navy)'
                ;(e.currentTarget as HTMLElement).style.color = 'var(--sand-white)'
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLElement).style.background = 'transparent'
                ;(e.currentTarget as HTMLElement).style.color = 'var(--navy)'
              }}
            >
              View all services <span aria-hidden="true">→</span>
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}

// ─── Vignette / Real-life moment ────────────────────────────────────────────
function VignetteSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const illustRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current || !illustRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const offset = -rect.top * 0.2
      illustRef.current.style.transform = `translateY(${offset}px)`
    }

    // Only on desktop, respect reduced motion
    const mq = window.matchMedia('(min-width: 1024px) and (prefers-reduced-motion: no-preference)')
    if (mq.matches) {
      window.addEventListener('scroll', onScroll, { passive: true })
      return () => window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="section-pad overflow-hidden"
      style={{ background: 'var(--off-white)' }}
      aria-label="A real-life story"
    >
      <div className="container-content">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Parallax illustration */}
          <RevealOnScroll>
            <div
              ref={illustRef}
              className="relative aspect-square rounded-[20px] overflow-hidden"
              style={{ background: 'var(--sketch-cream)' }}
              aria-hidden="true"
            >
              <svg viewBox="0 0 400 400" className="w-full h-full p-8" fill="none">
                {/* Child at gaming setup — pen sketch */}
                {/* Desk */}
                <rect x="80" y="260" width="240" height="12" rx="3" stroke="var(--navy)" strokeWidth="1.5" fill="none" />
                <line x1="100" y1="272" x2="100" y2="330" stroke="var(--navy)" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="300" y1="272" x2="300" y2="330" stroke="var(--navy)" strokeWidth="1.5" strokeLinecap="round" />
                {/* Monitor */}
                <rect x="140" y="180" width="120" height="78" rx="4" stroke="var(--navy)" strokeWidth="1.5" fill="none" />
                <line x1="200" y1="258" x2="200" y2="268" stroke="var(--navy)" strokeWidth="1.5" />
                <line x1="180" y1="268" x2="220" y2="268" stroke="var(--navy)" strokeWidth="1.5" strokeLinecap="round" />
                {/* Screen content */}
                <path d="M155 230 L175 210 L195 225 L210 215 L245 230" stroke="var(--terracotta)" strokeWidth="1.2" fill="none" strokeLinecap="round" />
                {/* Controller */}
                <rect x="158" y="275" width="48" height="26" rx="8" stroke="var(--navy)" strokeWidth="1.2" fill="none" />
                <circle cx="176" cy="288" r="1.5" fill="var(--navy)" />
                <circle cx="182" cy="284" r="1.5" fill="var(--navy)" />
                <circle cx="182" cy="292" r="1.5" fill="var(--navy)" />
                <circle cx="188" cy="288" r="1.5" fill="var(--navy)" />
                <circle cx="164" cy="288" r="3" stroke="var(--navy)" strokeWidth="1" fill="none" />
                {/* Child in wheelchair */}
                {/* Wheelchair wheels */}
                <circle cx="88" cy="308" r="28" stroke="var(--navy)" strokeWidth="1.5" fill="none" />
                <circle cx="88" cy="308" r="20" stroke="var(--navy)" strokeWidth="0.8" fill="none" opacity="0.4" />
                <circle cx="88" cy="308" r="3" fill="var(--navy)" />
                <circle cx="136" cy="318" r="14" stroke="var(--navy)" strokeWidth="1.5" fill="none" />
                {/* Frame */}
                <path d="M116 255 L100 295 L136 304" stroke="var(--navy)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                <line x1="116" y1="255" x2="140" y2="255" stroke="var(--navy)" strokeWidth="1.5" strokeLinecap="round" />
                {/* Person */}
                <circle cx="130" cy="230" r="14" stroke="var(--navy)" strokeWidth="1.5" fill="none" />
                <path d="M116 244 C116 255 120 255 130 255 C140 255 144 255 144 244" stroke="var(--navy)" strokeWidth="1.5" fill="none" />
                {/* Arm reaching to controller */}
                <path d="M144 248 L158 275" stroke="var(--navy)" strokeWidth="1.5" strokeLinecap="round" />
                {/* Joy sparks */}
                <path d="M310 150 L315 140 M318 160 L328 158 M308 168 L302 175" stroke="var(--terracotta)" strokeWidth="1.2" strokeLinecap="round" />
                <path d="M46 200 L52 193 M40 212 L33 210 M50 222 L46 230" stroke="var(--terracotta)" strokeWidth="1.2" strokeLinecap="round" />
                {/* Mountain background */}
                <path d="M0 380 L80 300 L160 340 L250 280 L340 310 L400 280 L400 400 L0 400 Z" stroke="var(--navy)" strokeWidth="0.8" fill="none" opacity="0.15" />
              </svg>
            </div>
          </RevealOnScroll>

          {/* Copy */}
          <RevealOnScroll delay={120}>
            <div>
              <span
                className="font-caveat text-xl block mb-4"
                style={{ color: 'var(--terracotta)' }}
              >
                what this looks like
              </span>
              <h2
                className="font-lora font-bold mb-6"
                style={{ fontSize: '32px', color: 'var(--deep-ink)', lineHeight: 1.2 }}
              >
                From "he'll never play video games" to first-person shooter in six weeks
              </h2>
              <p
                className="font-sans mb-4"
                style={{ fontSize: '16px', lineHeight: 1.65, color: 'var(--deep-ink)', opacity: 0.8 }}
              >
                When Lucas came to see me, his parents had been told he'd never be able to use a
                standard controller. He had a progressive neuromuscular condition and limited hand
                function — but he <em>desperately</em> wanted to play Fortnite with his mates.
              </p>
              <p
                className="font-sans mb-8"
                style={{ fontSize: '16px', lineHeight: 1.65, color: 'var(--deep-ink)', opacity: 0.7 }}
              >
                Six weeks later, he was competing online. Not through some miracle, but through the
                right adaptive controller, the right mount position, and a little creative
                problem-solving. That's what this work actually is.
              </p>
              <p
                className="font-sans text-caption italic"
                style={{ color: 'var(--warm-stone)' }}
              >
                * Name changed. Story shared with permission.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}

// ─── Dual CTA ───────────────────────────────────────────────────────────────
function DualCTA() {
  return (
    <section
      className="section-pad"
      style={{ background: 'var(--sketch-cream)' }}
      aria-label="Get started"
    >
      <div className="container-content">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <RevealOnScroll>
            <div
              className="p-10 rounded-card flex flex-col"
              style={{ background: 'var(--navy)', minHeight: '260px' }}
              data-dark-bg
            >
              <h3
                className="font-lora font-bold mb-3"
                style={{ fontSize: '26px', color: 'var(--sand-white)', lineHeight: 1.2 }}
              >
                Not sure where to start?
              </h3>
              <p
                className="font-sans mb-8 flex-1"
                style={{ fontSize: '16px', color: 'var(--sand)', opacity: 0.85, lineHeight: 1.65 }}
              >
                Let's have a conversation. No forms, no commitments — just a chat about your child
                and whether I can help.
              </p>
              <Link
                href="/contact"
                className="btn-arrow inline-flex items-center self-start font-sans font-medium px-5 py-2.5 rounded-btn transition-all duration-200"
                style={{
                  background: 'var(--sand-white)',
                  color: 'var(--navy)',
                  fontSize: '15px',
                }}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLElement).style.background = 'var(--terracotta)'
                  ;(e.currentTarget as HTMLElement).style.color = 'white'
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLElement).style.background = 'var(--sand-white)'
                  ;(e.currentTarget as HTMLElement).style.color = 'var(--navy)'
                }}
              >
                Get in touch <span aria-hidden="true">→</span>
              </Link>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={100}>
            <div
              className="p-10 rounded-card flex flex-col border-2"
              style={{
                background: 'var(--off-white)',
                borderColor: 'var(--warm-stone)',
                minHeight: '260px',
              }}
            >
              <h3
                className="font-lora font-bold mb-3"
                style={{ fontSize: '26px', color: 'var(--deep-ink)', lineHeight: 1.2 }}
              >
                Ready to make a referral?
              </h3>
              <p
                className="font-sans mb-8 flex-1"
                style={{ fontSize: '16px', color: 'var(--deep-ink)', opacity: 0.75, lineHeight: 1.65 }}
              >
                Practitioners, GPs, paediatricians, and schools — the referral process is simple and
                takes about 3 minutes.
              </p>
              <Link
                href="/referral"
                className="btn-arrow inline-flex items-center self-start font-sans font-medium px-5 py-2.5 rounded-btn transition-all duration-200"
                style={{
                  background: 'var(--terracotta)',
                  color: 'white',
                  fontSize: '15px',
                }}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLElement).style.background = 'var(--navy)'
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLElement).style.background = 'var(--terracotta)'
                }}
              >
                Make a referral <span aria-hidden="true">→</span>
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}

// ─── FAQ ────────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: 'Do you work with kids outside of Perth?',
    a: "Currently I work primarily with families based in Perth and surrounds. I do offer telehealth consultations for initial assessments and NDIS planning support, so if you're regional, let's chat about what's possible.",
  },
  {
    q: "My child isn't on the NDIS yet — can you still help?",
    a: 'Yes. I work with families regardless of NDIS status and can provide assessments and support that may assist with an NDIS application. Private billing options are available.',
  },
  {
    q: 'What age range do you work with?',
    a: "Primarily children and adolescents up to 18, though I have worked with young adults in transition planning. If you're unsure, just reach out.",
  },
  {
    q: 'How long does the process take — from referral to first appointment?',
    a: 'I aim to be in contact within 2 business days of receiving a referral, and typically have appointment availability within 2–3 weeks depending on the time of year.',
  },
  {
    q: "Do I need a doctor's referral to access your services?",
    a: "No GP referral is required. Parents, carers, schools, and practitioners can all refer directly. Self-referrals are absolutely welcome.",
  },
]

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section
      className="section-pad"
      style={{ background: 'var(--off-white)' }}
      aria-label="Frequently asked questions"
    >
      <div className="container-content max-w-[760px] mx-auto">
        <RevealOnScroll>
          <h2
            className="font-lora font-bold mb-12 text-center"
            style={{ fontSize: '32px', color: 'var(--deep-ink)' }}
          >
            Questions people feel awkward asking
          </h2>
        </RevealOnScroll>

        <div role="list">
          {faqs.map(({ q, a }, i) => (
            <RevealOnScroll key={q} delay={i * 50}>
              <div
                role="listitem"
                className="border-b"
                style={{
                  borderColor: 'var(--warm-stone)',
                  borderLeftWidth: openIndex === i ? '3px' : '0',
                  borderLeftColor: 'var(--terracotta)',
                  borderLeftStyle: 'solid',
                  paddingLeft: openIndex === i ? '16px' : '0',
                  transition: 'all 200ms ease',
                }}
              >
                <button
                  className="w-full flex justify-between items-start gap-4 py-5 text-left"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  aria-expanded={openIndex === i}
                  aria-controls={`faq-answer-${i}`}
                  id={`faq-question-${i}`}
                >
                  <span
                    className="font-sans font-medium"
                    style={{ fontSize: '16px', color: 'var(--deep-ink)' }}
                  >
                    {q}
                  </span>
                  <ChevronDown
                    size={18}
                    className="flex-shrink-0 mt-0.5"
                    style={{
                      color: 'var(--terracotta)',
                      transform: openIndex === i ? 'rotate(180deg)' : 'rotate(0)',
                      transition: 'transform 300ms ease',
                    }}
                  />
                </button>

                <div
                  id={`faq-answer-${i}`}
                  role="region"
                  aria-labelledby={`faq-question-${i}`}
                  className={`accordion-content ${openIndex === i ? 'open' : ''}`}
                >
                  <p
                    className="font-sans pb-5"
                    style={{ fontSize: '15px', lineHeight: 1.65, color: 'var(--deep-ink)', opacity: 0.75 }}
                  >
                    {a}
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delay={200}>
          <p
            className="font-sans text-center mt-10 text-sm"
            style={{ color: 'var(--deep-ink)', opacity: 0.6 }}
          >
            Something else on your mind?{' '}
            <Link
              href="/contact"
              className="underline"
              style={{ color: 'var(--terracotta)' }}
            >
              Just ask.
            </Link>
          </p>
        </RevealOnScroll>
      </div>
    </section>
  )
}

// ─── Page ───────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MountainDivider />
      <SocialProofBar />
      <MountainDivider />
      <AboutIntro />
      <MountainDivider />
      <ServicesOverview />
      <MountainDivider />
      <VignetteSection />
      <MountainDivider />
      <DualCTA />
      <FAQSection />
    </>
  )
}
