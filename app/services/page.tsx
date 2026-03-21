'use client'

import { useState } from 'react'
import Link from 'next/link'
import MountainDivider from '@/components/MountainDivider'
import RevealOnScroll from '@/components/RevealOnScroll'
import SpotIllustration from '@/components/SpotIllustration'
import { ChevronDown, ChevronRight } from 'lucide-react'

const services = [
  {
    id: 'adaptive-gaming',
    illus: 'controller' as const,
    title: 'Accessible gaming',
    tagline: 'Play is not a luxury. It\'s how kids grow.',
    shortDesc: 'Adaptive controllers, custom setups, and support to get your child into gaming on their terms.',
    fullDesc: `Gaming is one of the most powerful tools for social connection, fine motor skill development, and plain-old joy — and it's often the first thing written off when a child has a physical disability. That's a problem I take personally.

I work with families to assess what a child's current hand function, positioning, and access needs are, then build a setup that works. That might mean a third-party adaptive controller, a custom mounting system, or eye-gaze technology. It might mean advocating to schools and holiday programs that gaming sessions should be accessible.

Whatever it takes to get your child playing.`,
    whoFor: ['Children with limited upper limb function', 'Kids who use eye-gaze or switch access', 'Families navigating console, PC, or mobile gaming accessibility'],
    funding: 'Can be funded under NDIS Capacity Building (Daily Activities) or Capital Supports (Assistive Technology).',
  },
  {
    id: 'wheelchair-access',
    illus: 'wheelchair' as const,
    title: 'Wheelchair & mobility',
    tagline: 'The right wheelchair changes everything.',
    shortDesc: 'Seating assessments, mobility aid prescription, and environment modifications for independence.',
    fullDesc: `A wheelchair isn't just transport — it's the interface between your child and their world. Getting it right means considering posture, function, skin integrity, environment, and growth.

I provide comprehensive seating and mobility assessments and work with equipment suppliers and your child's medical team to prescribe the right chair. I also look beyond the chair — at the home, school, and community environments that need to work alongside it.

Think of it as a system review, not a product transaction.`,
    whoFor: ['Manual and powered wheelchair users', 'Children with postural or seating challenges', 'Families needing home or vehicle modification reports'],
    funding: 'Funded under NDIS Capital Supports (Assistive Technology — Complex). Requires an AT Advisor or Specialist AT Assessor — I hold both.',
  },
  {
    id: 'assistive-tech',
    illus: 'puzzle' as const,
    title: 'Assistive technology',
    tagline: 'The right tool changes what\'s possible.',
    shortDesc: 'Communication aids, smart home controls, and the right tech for your child\'s specific strengths.',
    fullDesc: `Assistive technology is a broad field — from low-tech adaptations (pencil grips, dycem mats) to high-tech AAC devices and smart home control systems. My job is to find the right point on that spectrum for your child.

I take a needs-first approach: what does your child want to do? What's getting in the way? Then we work backwards to find the tool, trial it properly, and make sure it's embedded into their daily life — not gathering dust in a cupboard.`,
    whoFor: ['Children with communication needs', 'Kids wanting to control their environment independently', 'Families exploring AAC, switch access, or smart home technology'],
    funding: 'Funded under NDIS Capacity Building (Daily Activities) and Capital Supports depending on the equipment.',
  },
  {
    id: 'home-modification',
    illus: 'lightbulb' as const,
    title: 'Home modifications',
    tagline: 'Home should be the easiest place in the world.',
    shortDesc: 'Practical assessments and recommendations that make the home work better for everyone.',
    fullDesc: `From ramp installation to bathroom modifications, wet area redesigns to bedroom layouts — the home environment has an enormous impact on independence and family life.

I provide home modification assessments and reports that can support NDIS funding for minor and major modifications. I also work with builders, occupational therapists in construction, and housing specialists to make sure recommendations are achievable and well-specified.

The goal is always for your child to be able to do more of their own life, in their own home, on their own terms.`,
    whoFor: ['Families in rented or owned homes who need accessibility changes', 'NDIS participants with housing and living goals', 'Children transitioning to more independent living arrangements'],
    funding: 'Funded under NDIS Capital Supports (Home Modifications). Assessments billable under Capacity Building.',
  },
  {
    id: 'school-support',
    illus: 'joystick' as const,
    title: 'School & community access',
    tagline: 'Every child deserves to be fully in the room.',
    shortDesc: 'Strategies, reports, and advocacy to support full participation in school and community life.',
    fullDesc: `School is where kids spend most of their time — and where physical disability can create invisible barriers every single day. I work with schools, teachers, and families to identify what's getting in the way and put real solutions in place.

That might mean a formal school report for adjusted curriculum access, recommendations for classroom setup, support with transitioning between primary and secondary school, or advocacy to holiday programs and community groups.

I also support kids navigating community participation more broadly — sport, arts, social activities. Inclusion isn't just a word.`,
    whoFor: ['School-aged children with physical access needs', 'Families preparing for school transitions', 'Teachers and school support staff needing strategies'],
    funding: 'Funded under NDIS Capacity Building (Daily Activities) and Social and Community Participation.',
  },
  {
    id: 'ndis',
    illus: 'mountain-tree' as const,
    title: 'NDIS planning support',
    tagline: 'The NDIS is complex. It doesn\'t have to be confusing.',
    shortDesc: 'Assessments, reports, and guidance to navigate the NDIS and build plans that work.',
    fullDesc: `The NDIS can feel overwhelming — especially when you're also managing your child's day-to-day life. I provide functional capacity assessments and detailed reports that support NDIS applications and plan reviews.

I write in plain language (not jargon) and make sure reports actually reflect your child's real life, real goals, and real needs — not a clinical checklist.

I can also provide support coordination guidance and help families understand what they're entitled to ask for.`,
    whoFor: ['Families applying for the NDIS for the first time', 'Participants preparing for plan reviews', 'Parents needing functional capacity assessments for NDIS goals'],
    funding: 'Report writing and assessments billable under Capacity Building. Support coordination guidance available.',
  },
]

function ServiceCard({ service, isOpen, onToggle }: {
  service: typeof services[0]
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div
      id={service.id}
      className="border-b scroll-mt-24"
      style={{ borderColor: 'var(--warm-stone)' }}
    >
      <button
        className="w-full flex items-start gap-6 py-8 text-left"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`service-detail-${service.id}`}
        id={`service-btn-${service.id}`}
      >
        <SpotIllustration type={service.illus} size={44} className="flex-shrink-0 mt-1 hidden sm:block" />
        <div className="flex-1 min-w-0">
          <h2
            className="font-sans font-semibold mb-1"
            style={{ fontSize: '20px', color: 'var(--deep-ink)' }}
          >
            {service.title}
          </h2>
          <p
            className="font-sans text-sm"
            style={{ color: 'var(--deep-ink)', opacity: 0.65 }}
          >
            {service.shortDesc}
          </p>
        </div>
        <ChevronDown
          size={20}
          className="flex-shrink-0 mt-2"
          style={{
            color: 'var(--terracotta)',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
            transition: 'transform 300ms ease',
          }}
        />
      </button>

      <div
        id={`service-detail-${service.id}`}
        role="region"
        aria-labelledby={`service-btn-${service.id}`}
        className={`accordion-content ${isOpen ? 'open' : ''}`}
        style={{ maxHeight: isOpen ? '800px' : '0' }}
      >
        <div className="pb-10 pl-0 sm:pl-[68px]">
          <blockquote
            className="font-lora italic mb-6"
            style={{ fontSize: '20px', color: 'var(--navy)', borderLeft: '3px solid var(--terracotta)', paddingLeft: '16px' }}
          >
            {service.tagline}
          </blockquote>

          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-10">
            <div>
              {service.fullDesc.split('\n\n').map((para, i) => (
                <p
                  key={i}
                  className="font-sans mb-4"
                  style={{ fontSize: '15px', lineHeight: 1.7, color: 'var(--deep-ink)', opacity: 0.8 }}
                >
                  {para}
                </p>
              ))}
            </div>

            <div className="space-y-6">
              <div
                className="p-5 rounded-card"
                style={{ background: 'var(--sketch-cream)', border: '1px solid var(--warm-stone)' }}
              >
                <h3
                  className="font-sans font-semibold text-sm uppercase tracking-wider mb-3"
                  style={{ color: 'var(--warm-stone)' }}
                >
                  Who this is for
                </h3>
                <ul className="space-y-2">
                  {service.whoFor.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 font-sans text-sm"
                      style={{ color: 'var(--deep-ink)', opacity: 0.8 }}
                    >
                      <span style={{ color: 'var(--terracotta)', marginTop: '2px' }}>·</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="p-5 rounded-card"
                style={{ background: 'var(--sketch-cream)', border: '1px solid var(--warm-stone)' }}
              >
                <h3
                  className="font-sans font-semibold text-sm uppercase tracking-wider mb-2"
                  style={{ color: 'var(--warm-stone)' }}
                >
                  Funding
                </h3>
                <p
                  className="font-sans text-sm"
                  style={{ lineHeight: 1.65, color: 'var(--deep-ink)', opacity: 0.75 }}
                >
                  {service.funding}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex gap-4">
            <Link
              href="/referral"
              className="btn-arrow inline-flex items-center font-sans font-medium px-5 py-2.5 rounded-btn transition-all duration-200 text-sm"
              style={{
                background: 'var(--navy)',
                color: 'var(--sand-white)',
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLElement).style.background = 'var(--terracotta)'
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLElement).style.background = 'var(--navy)'
              }}
            >
              Make a referral <span aria-hidden="true">→</span>
            </Link>
            <Link
              href="/contact"
              className="btn-arrow inline-flex items-center font-sans font-medium px-5 py-2.5 rounded-btn border-2 transition-all duration-200 text-sm"
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
              Ask a question <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ServicesPage() {
  const [openService, setOpenService] = useState<string | null>('adaptive-gaming')

  return (
    <>
      {/* Hero */}
      <section
        className="pt-32 pb-16"
        style={{ background: 'var(--sketch-cream)' }}
        aria-label="Services hero"
      >
        <div className="container-content">
          <RevealOnScroll>
            <span className="font-caveat text-xl block mb-3" style={{ color: 'var(--terracotta)' }}>
              what we offer
            </span>
            <h1
              className="font-lora font-bold mb-5 max-w-[640px]"
              style={{
                fontSize: 'clamp(32px,4vw,48px)',
                color: 'var(--deep-ink)',
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
              }}
            >
              Therapy that's specific to your child — and what they actually need
            </h1>
            <p
              className="font-sans max-w-[540px]"
              style={{ fontSize: '18px', lineHeight: 1.65, color: 'var(--deep-ink)', opacity: 0.75 }}
            >
              I specialise in physical disability and assistive technology — especially for kids
              who use wheelchairs. Here's what that looks like in practice.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <MountainDivider />

      {/* Who this is for */}
      <section
        className="py-12"
        style={{ background: 'var(--navy)' }}
        aria-label="Who Assured OT works with"
        data-dark-bg
      >
        <div className="container-content">
          <RevealOnScroll>
            <div className="flex flex-wrap gap-4 items-center justify-center">
              <p
                className="font-sans text-sm font-medium mr-4"
                style={{ color: 'var(--warm-stone)' }}
              >
                I work with:
              </p>
              {[
                'Wheelchair users',
                'Neuromuscular conditions',
                'Cerebral palsy',
                'Physical disabilities',
                'Acquired injuries',
                'NDIS participants',
                'Ages 3–18',
              ].map((tag) => (
                <span
                  key={tag}
                  className="font-sans text-sm px-3 py-1.5 rounded-full"
                  style={{
                    background: 'rgba(240,232,216,0.1)',
                    color: 'var(--sand-white)',
                    border: '1px solid rgba(201,187,168,0.25)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <MountainDivider flipped />

      {/* Services list */}
      <section
        className="section-pad"
        style={{ background: 'var(--off-white)' }}
        aria-label="Services list"
      >
        <div className="container-content">
          {/* Quick nav */}
          <RevealOnScroll>
            <div className="flex flex-wrap gap-3 mb-12 pb-8" style={{ borderBottom: '1px solid var(--warm-stone)' }}>
              {services.map((s) => (
                <button
                  key={s.id}
                  onClick={() => {
                    setOpenService(s.id)
                    document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }}
                  className="font-sans text-sm px-4 py-2 rounded-full border transition-all duration-200"
                  style={{
                    borderColor: openService === s.id ? 'var(--navy)' : 'var(--warm-stone)',
                    background: openService === s.id ? 'var(--navy)' : 'transparent',
                    color: openService === s.id ? 'var(--sand-white)' : 'var(--deep-ink)',
                  }}
                >
                  {s.title}
                </button>
              ))}
            </div>
          </RevealOnScroll>

          {/* Accordion services */}
          <div role="list">
            {services.map((service) => (
              <RevealOnScroll key={service.id}>
                <ServiceCard
                  service={service}
                  isOpen={openService === service.id}
                  onToggle={() => setOpenService(openService === service.id ? null : service.id)}
                />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <MountainDivider />

      {/* CTA */}
      <section
        className="section-pad"
        style={{ background: 'var(--sand)' }}
        aria-label="Next step"
      >
        <div className="container-content max-w-[640px] mx-auto text-center">
          <RevealOnScroll>
            <h2
              className="font-lora font-bold mb-4"
              style={{ fontSize: '36px', color: 'var(--deep-ink)' }}
            >
              Not sure which service fits?
            </h2>
            <p
              className="font-sans mb-8"
              style={{ fontSize: '16px', lineHeight: 1.65, color: 'var(--deep-ink)', opacity: 0.75 }}
            >
              That's normal. Most families come in with a goal, not a category. Tell me what your
              child needs and we'll figure out the right approach together.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="btn-arrow inline-flex items-center font-sans font-medium px-6 py-3 rounded-btn transition-all duration-200"
                style={{ background: 'var(--navy)', color: 'var(--sand-white)', fontSize: '15px' }}
                onMouseEnter={(e) => { ;(e.currentTarget as HTMLElement).style.background = 'var(--terracotta)' }}
                onMouseLeave={(e) => { ;(e.currentTarget as HTMLElement).style.background = 'var(--navy)' }}
              >
                Get in touch <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/referral"
                className="btn-arrow inline-flex items-center font-sans font-medium px-6 py-3 rounded-btn border-2 transition-all duration-200"
                style={{ borderColor: 'var(--navy)', color: 'var(--navy)', background: 'transparent', fontSize: '15px' }}
                onMouseEnter={(e) => { ;(e.currentTarget as HTMLElement).style.background = 'var(--navy)'; ;(e.currentTarget as HTMLElement).style.color = 'var(--sand-white)' }}
                onMouseLeave={(e) => { ;(e.currentTarget as HTMLElement).style.background = 'transparent'; ;(e.currentTarget as HTMLElement).style.color = 'var(--navy)' }}
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
