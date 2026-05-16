'use client'

import MountainDivider from '@/components/MountainDivider'
import RevealOnScroll from '@/components/RevealOnScroll'

export default function AccessibilityPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-32 pb-16"
        style={{ background: 'var(--sketch-cream)' }}
        aria-label="Accessibility statement"
      >
        <div className="container-content max-w-[720px]">
          <RevealOnScroll>
            <span
              className="font-caveat text-xl block mb-3"
              style={{ color: 'var(--terracotta)' }}
            >
              everyone belongs here
            </span>
            <h1
              className="font-lora font-bold mb-5"
              style={{
                fontSize: 'clamp(32px,4vw,48px)',
                color: 'var(--deep-ink)',
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
              }}
            >
              Accessibility statement
            </h1>
            <p
              className="font-sans"
              style={{
                fontSize: '18px',
                lineHeight: 1.65,
                color: 'var(--deep-ink)',
                opacity: 0.8,
              }}
            >
              This site is designed to meet{' '}
              <strong style={{ color: 'var(--navy)' }}>WCAG 2.1 AA</strong>{' '}
              standards. The same care that goes into making a game controller
              work for a kid who can&apos;t use their hands goes into making this
              website work for everyone.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <MountainDivider opacity={0.25} />

      {/* What's implemented */}
      <section
        className="section-pad"
        style={{ background: 'var(--off-white)' }}
        aria-label="What has been implemented"
      >
        <div className="container-content max-w-[720px]">
          <RevealOnScroll>
            <h2
              className="font-lora font-bold mb-8"
              style={{ fontSize: '28px', color: 'var(--deep-ink)' }}
            >
              What we&apos;ve built in
            </h2>
          </RevealOnScroll>

          <div className="space-y-6">
            {[
              {
                title: 'Full keyboard navigation',
                desc: 'Every interactive element — buttons, links, form fields, accordion triggers, and navigation — can be reached and operated using only a keyboard. No mouse required.',
              },
              {
                title: 'Screen reader support',
                desc: 'Semantic HTML throughout: proper heading hierarchy, landmark regions (header, main, footer, nav), ARIA labels on icons and decorative elements, and aria-expanded states on all interactive panels.',
              },
              {
                title: 'Reduced motion support',
                desc: 'If your system is set to prefers-reduced-motion, all animations, parallax effects, scroll reveals, and the custom cursor are disabled instantly. Content appears without movement.',
              },
              {
                title: 'Visible focus indicators',
                desc: 'A high-contrast focus ring appears on every focusable element. On dark backgrounds, the ring switches to off-white so it remains visible.',
              },
              {
                title: 'Accessible FAQ accordion',
                desc: 'The accordion uses proper button elements with aria-expanded, aria-controls, and aria-labelledby. Panel content is hidden from assistive tech when collapsed.',
              },
              {
                title: 'Colour contrast',
                desc: 'All body text meets a minimum 4.5:1 contrast ratio against its background. Headings and interactive elements meet 3:1.',
              },
            ].map(({ title, desc }) => (
              <RevealOnScroll key={title}>
                <div
                  className="p-6 rounded-card"
                  style={{
                    background: 'var(--sand)',
                    border: '1px solid var(--warm-stone)',
                  }}
                >
                  <h3
                    className="font-sans font-semibold mb-2"
                    style={{ fontSize: '17px', color: 'var(--deep-ink)' }}
                  >
                    {title}
                  </h3>
                  <p
                    className="font-sans"
                    style={{
                      fontSize: '15px',
                      lineHeight: 1.65,
                      color: 'var(--deep-ink)',
                      opacity: 0.75,
                    }}
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

      {/* Known limitations */}
      <section
        className="section-pad"
        style={{ background: 'var(--sand)' }}
        aria-label="Known limitations"
      >
        <div className="container-content max-w-[720px]">
          <RevealOnScroll>
            <h2
              className="font-lora font-bold mb-8"
              style={{ fontSize: '28px', color: 'var(--deep-ink)' }}
            >
              Known limitations
            </h2>
          </RevealOnScroll>

          <div className="space-y-5">
            <RevealOnScroll delay={50}>
              <p
                className="font-sans"
                style={{
                  fontSize: '16px',
                  lineHeight: 1.65,
                  color: 'var(--deep-ink)',
                  opacity: 0.8,
                }}
              >
                The decorative terracotta numbering used in section headings and
                folio labels does not always meet 4.5:1 contrast. These elements
                are marked with{' '}
                <code
                  className="font-mono text-sm px-1 rounded"
                  style={{ background: 'var(--warm-stone)', color: 'var(--navy)' }}
                >
                  aria-hidden=&quot;true&quot;
                </code>{' '}
                and are purely decorative — they are not required to understand
                the content.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={100}>
              <p
                className="font-sans"
                style={{
                  fontSize: '16px',
                  lineHeight: 1.65,
                  color: 'var(--deep-ink)',
                  opacity: 0.8,
                }}
              >
                Some placeholder phone numbers and the ABN in the footer are
                temporary. These will be updated with correct details before the
                site goes live.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={150}>
              <p
                className="font-sans"
                style={{
                  fontSize: '16px',
                  lineHeight: 1.65,
                  color: 'var(--deep-ink)',
                  opacity: 0.8,
                }}
              >
                The custom cursor is automatically hidden for users who prefer
                reduced motion. Native cursor behaviour is restored.
              </p>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <MountainDivider flipped />

      {/* Report an issue */}
      <section
        className="section-pad"
        style={{ background: 'var(--navy)' }}
        aria-label="Report an accessibility issue"
        data-dark-bg
      >
        <div className="container-content max-w-[640px] mx-auto text-center">
          <RevealOnScroll>
            <h2
              className="font-lora font-bold mb-4"
              style={{ fontSize: '32px', color: 'var(--sand-white)' }}
            >
              Found something?
            </h2>
            <p
              className="font-sans mb-8"
              style={{
                fontSize: '16px',
                lineHeight: 1.65,
                color: 'var(--sand)',
                opacity: 0.85,
              }}
            >
              If you hit a barrier while using this site, I want to know about it.
              Email me directly and I&apos;ll fix it.
            </p>
            <a
              href="mailto:hello@assuredot.com.au?subject=Accessibility%20issue"
              className="btn-arrow inline-flex items-center font-sans font-medium px-6 py-3 rounded-btn transition-all duration-200"
              style={{
                background: 'var(--terracotta)',
                color: 'white',
                fontSize: '15px',
              }}
            >
              Report an issue <span aria-hidden="true">→</span>
            </a>
          </RevealOnScroll>
        </div>
      </section>

      <MountainDivider />

      {/* Philosophy */}
      <section
        className="section-pad"
        style={{ background: 'var(--off-white)' }}
        aria-label="Practice philosophy"
      >
        <div className="container-content max-w-[720px]">
          <RevealOnScroll>
            <blockquote
              className="font-lora italic"
              style={{
                fontSize: '24px',
                lineHeight: 1.45,
                color: 'var(--navy)',
                borderLeft: '3px solid var(--terracotta)',
                paddingLeft: '24px',
              }}
            >
              The same care that goes into making a game controller work for a
              kid who can&apos;t use their hands goes into making this website work
              for everyone.
            </blockquote>
          </RevealOnScroll>

          <RevealOnScroll delay={80}>
            <p
              className="font-sans mt-6"
              style={{
                fontSize: '16px',
                lineHeight: 1.65,
                color: 'var(--deep-ink)',
                opacity: 0.8,
              }}
            >
              Accessibility isn&apos;t a checklist I ran at the end. It&apos;s woven into
              how this site was built from the start — because that&apos;s how I work
              with my clients too. Every child deserves access to the things that
              make life worth living. Every person deserves access to information
              about how to get there.
            </p>
          </RevealOnScroll>
        </div>
      </section>
    </>
  )
}
