'use client'

import Link from 'next/link'
import MountainDivider from '@/components/MountainDivider'
import RevealOnScroll from '@/components/RevealOnScroll'
import SpotIllustration from '@/components/SpotIllustration'

const values = [
  {
    illus: 'lightbulb' as const,
    title: 'Personalised, every time',
    desc: 'I don\'t run a clinic with 20 staff where you see a different person each visit. Your child gets me — someone who knows their history, their quirks, and what actually makes them tick.',
  },
  {
    illus: 'puzzle' as const,
    title: 'Evidence-based and practical',
    desc: 'The science matters. But so does knowing when to think sideways. I bring clinical rigour and creative problem-solving in equal measure — because both are needed.',
  },
  {
    illus: 'controller' as const,
    title: 'Joy is the measure of success',
    desc: 'If therapy doesn\'t translate into your child accessing more joy, more play, more of their own life — it hasn\'t worked. That\'s the bar I hold myself to.',
  },
]

const credentials = [
  'Bachelor of Occupational Therapy (Hons)',
  'AHPRA registered occupational therapist',
  'NDIS registered provider',
  'Certificate in Assistive Technology Assessment',
  'Certified Seating & Mobility Specialist (in progress)',
  'Member, Occupational Therapy Australia',
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-32 pb-0 overflow-hidden"
        style={{ background: 'var(--navy)' }}
        aria-label="About Jeimer — hero"
        data-dark-bg
      >
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end pb-16">
            <div>
              <span
                className="font-caveat text-2xl block mb-4"
                style={{ color: 'var(--terracotta)' }}
              >
                Hi, I'm Jeimer.
              </span>
              <h1
                className="font-lora font-bold mb-6"
                style={{
                  fontSize: 'clamp(36px,4.5vw,56px)',
                  color: 'var(--sand-white)',
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                }}
              >
                Occupational therapist, problem-solver, and certified gaming enthusiast
              </h1>
              <p
                className="font-sans"
                style={{ fontSize: '18px', lineHeight: 1.65, color: 'var(--sand)', opacity: 0.85 }}
              >
                I built Assured OT because I believe children with physical disabilities deserve therapy
                that takes them seriously — their actual goals, their actual life.
              </p>
            </div>

            {/* Photo */}
            <div
              className="relative aspect-[4/3] rounded-[16px] overflow-hidden"
              style={{ background: 'var(--sketch-cream)' }}
              aria-label="Photo of Jeimer with assistive technology"
            >
              <img
                src="/images/holdingDevices.jpg"
                alt="Jeimer holding adaptive gaming controllers and assistive technology"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <MountainDivider opacity={0.4} />
      </section>

      {/* Story */}
      <section
        className="section-pad"
        style={{ background: 'var(--off-white)' }}
        aria-label="Jeimer's story"
      >
        <div className="container-content max-w-[760px] mx-auto">
          <RevealOnScroll>
            <p
              className="font-sans mb-6"
              style={{ fontSize: '18px', lineHeight: 1.65, color: 'var(--deep-ink)' }}
            >
              I got into occupational therapy because of a kid I met during my placement who couldn't
              access a single game at his school's gaming club. Not because of lack of want — he was
              obsessed with gaming — but because nobody had thought to ask whether there was another
              way to play.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={80}>
            <p
              className="font-sans mb-6"
              style={{ fontSize: '16px', lineHeight: 1.65, color: 'var(--deep-ink)', opacity: 0.8 }}
            >
              That kid changed how I think about my job. Occupational therapy — at its best — is
              about access. Not just physical access, but access to the things that make life feel
              worth living: play, connection, independence, creativity. For kids with physical
              disabilities, those things can get taken off the table early — often without anyone
              really meaning to.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={160}>
            <p
              className="font-sans mb-6"
              style={{ fontSize: '16px', lineHeight: 1.65, color: 'var(--deep-ink)', opacity: 0.8 }}
            >
              I started Assured OT to do this work properly — with the time, attention, and
              creativity it deserves. As a sole practitioner, I can be genuinely responsive to each
              family. There's no one-size-fits-all here.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={240}>
            <p
              className="font-sans"
              style={{ fontSize: '16px', lineHeight: 1.65, color: 'var(--deep-ink)', opacity: 0.8 }}
            >
              I'm based in Perth, I work primarily with children and young people navigating physical
              disability — particularly wheelchair users — and I care deeply about doing this work
              well. If that sounds like what your family needs, let's talk.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <MountainDivider />

      {/* Values */}
      <section
        className="section-pad"
        style={{ background: 'var(--sand)' }}
        aria-label="Values"
      >
        <div className="container-content">
          <RevealOnScroll>
            <h2
              className="font-lora font-bold mb-12 text-center"
              style={{ fontSize: '32px', color: 'var(--deep-ink)' }}
            >
              What I believe
            </h2>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map(({ illus, title, desc }, i) => (
              <RevealOnScroll key={title} delay={i * 80}>
                <div
                  className="p-8 rounded-card"
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
                    className="font-sans"
                    style={{ fontSize: '15px', lineHeight: 1.65, color: 'var(--deep-ink)', opacity: 0.75 }}
                  >
                    {desc}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <MountainDivider />

      {/* Credentials */}
      <section
        className="section-pad"
        style={{ background: 'var(--off-white)' }}
        aria-label="Qualifications and registrations"
      >
        <div className="container-content">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <RevealOnScroll>
              <h2
                className="font-lora font-bold mb-4"
                style={{ fontSize: '32px', color: 'var(--deep-ink)' }}
              >
                Qualifications & registrations
              </h2>
              <p
                className="font-sans mb-8"
                style={{ fontSize: '16px', lineHeight: 1.65, color: 'var(--deep-ink)', opacity: 0.7 }}
              >
                Clinical credibility matters — especially when you're trusting someone with your
                child's care. Here's the paperwork.
              </p>

              <ul className="space-y-3" aria-label="Credentials list">
                {credentials.map((cred) => (
                  <li
                    key={cred}
                    className="flex items-start gap-3 font-sans text-sm"
                    style={{ color: 'var(--deep-ink)' }}
                  >
                    <span
                      className="mt-1 w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center"
                      style={{ background: 'var(--terracotta)' }}
                      aria-hidden="true"
                    >
                      <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                        <path d="M1 3L3 5L7 1" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {cred}
                  </li>
                ))}
              </ul>
            </RevealOnScroll>

            <RevealOnScroll delay={120}>
              <div
                className="p-8 rounded-card"
                style={{ background: 'var(--sketch-cream)', border: '1px solid var(--warm-stone)' }}
              >
                <h3
                  className="font-lora font-bold mb-4"
                  style={{ fontSize: '22px', color: 'var(--deep-ink)' }}
                >
                  NDIS & funding
                </h3>
                <p
                  className="font-sans mb-4"
                  style={{ fontSize: '15px', lineHeight: 1.65, color: 'var(--deep-ink)', opacity: 0.8 }}
                >
                  Assured OT is a registered NDIS provider. I work with plan-managed, agency-managed,
                  and self-managed participants.
                </p>
                <p
                  className="font-sans"
                  style={{ fontSize: '15px', lineHeight: 1.65, color: 'var(--deep-ink)', opacity: 0.7 }}
                >
                  Private billing is also available for families who aren't yet connected to the
                  NDIS — reach out to discuss what works for you.
                </p>
                <div
                  className="mt-6 pt-6 border-t"
                  style={{ borderColor: 'var(--warm-stone)' }}
                >
                  <p className="font-sans text-label uppercase tracking-wider mb-1" style={{ color: 'var(--warm-stone)' }}>
                    NDIS Registration
                  </p>
                  <p className="font-sans font-medium" style={{ color: 'var(--navy)' }}>
                    Provider #00000000
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <MountainDivider />

      {/* CTA */}
      <section
        className="section-pad text-center"
        style={{ background: 'var(--sketch-cream)' }}
        aria-label="Work together"
      >
        <div className="container-content max-w-[580px] mx-auto">
          <RevealOnScroll>
            <h2
              className="font-lora font-bold mb-4"
              style={{ fontSize: '36px', color: 'var(--deep-ink)' }}
            >
              Ready to work together?
            </h2>
            <p
              className="font-sans mb-8"
              style={{ fontSize: '16px', lineHeight: 1.65, color: 'var(--deep-ink)', opacity: 0.75 }}
            >
              Whether you're a parent starting out or a practitioner looking to refer — let's
              start with a conversation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
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
                Get in touch <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/referral"
                className="btn-arrow inline-flex items-center font-sans font-medium px-6 py-3 rounded-btn border-2 transition-all duration-200"
                style={{
                  borderColor: 'var(--navy)',
                  color: 'var(--navy)',
                  background: 'transparent',
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
          </RevealOnScroll>
        </div>
      </section>
    </>
  )
}
