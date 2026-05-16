'use client'

import { useState } from 'react'
import Link from 'next/link'
import MountainDivider from '@/components/MountainDivider'
import RevealOnScroll from '@/components/RevealOnScroll'
import SpotIllustration from '@/components/SpotIllustration'
import { ChevronDown } from 'lucide-react'

const services = [
  {
    id: 'adaptive-gaming',
    illus: 'controller' as const,
    title: 'Adaptive gaming',
    tagline: 'Play is not a luxury. It\'s how kids grow.',
    shortDesc: 'Switch- and PC-compatible setups. Eye-gaze, head-tracking, button mapping, voice control. Whatever it takes to get the controller into the kid\'s hands — even when "hands" isn\'t the right word.',
    fullDesc: `Gaming is one of the most powerful tools for social connection, fine motor skill development, and plain-old joy — and it's often the first thing written off when a child has a physical disability. That's a problem I take personally.

I work with families to assess what a child's current hand function, positioning, and access needs are, then build a setup that works. That might mean a third-party adaptive controller, a custom mounting system, or eye-gaze technology. It might mean advocating to schools and holiday programs that gaming sessions should be accessible.

Whatever it takes to get your child playing.`,
    whoFor: ['Children with limited upper limb function', 'Kids who use eye-gaze or switch access', 'Families navigating console, PC, or mobile gaming accessibility'],
  },
  {
    id: 'switch-controllers',
    illus: 'joystick' as const,
    title: 'Switch & alternative controllers',
    tagline: 'Forty things in the car. Keep what works.',
    shortDesc: 'Microsoft Adaptive, 8BitDo Lite SE, Quadstick, Aimee Mounts. Trial-based approach — forty things in the car, keep what works.',
    fullDesc: `There is no single "best" adaptive controller. The right one depends on the child, their body, their goals, and the games they want to play. I keep about forty devices, mounts, and accessories in the car for this exact reason.

We trial them at your place — where the child actually sits, actually plays, actually lives. A controller that works beautifully on my desk might be useless in your lounge room. That's why the trial happens in your space, not mine.

Microsoft Adaptive Controller, 8BitDo Lite SE, Quadstick, Aimee Mounts, custom 3D-printed brackets — we try what makes sense, adjust what almost works, and build something that disappears into the day.`,
    whoFor: ['Kids who struggle with standard controllers', 'Families who want to try before buying', 'Schools and holiday programs setting up inclusive gaming'],
  },
  {
    id: 'at-assessments',
    illus: 'puzzle' as const,
    title: 'AT assessments',
    tagline: 'Reports that arrive on time and read like English.',
    shortDesc: 'Functional capacity assessments and AT funding requests. Reports that arrive on time and read like English.',
    fullDesc: `A good assistive technology assessment isn't a list of equipment — it's a story about what a child wants to do, what's getting in the way, and exactly how the recommended tools will help. Written so a parent and an NDIS planner can both follow it on the first read.

I assess functional capacity in the context of real life: home, school, play, and community. Then I write detailed, evidence-based reports that support AT funding requests, plan reviews, and equipment justifications. No jargon without explanation. No copy-paste paragraphs.

Reports typically arrive within 10 business days of the final assessment session.`,
    whoFor: ['NDIS participants needing AT funding approval', 'Families preparing for plan reviews', 'Schools and hospitals needing formal assessment documentation'],
  },
  {
    id: 'mounting-positioning',
    illus: 'lightbulb' as const,
    title: 'Mounting & positioning',
    tagline: 'Built to survive a school day and the trip there.',
    shortDesc: 'Wheelchair-mounted iPads, switch trays, head-pointer rigs, fabricated brackets. Built to survive a school day.',
    fullDesc: `A mounting system is only good if it stays where you put it. I've seen too many "solutions" that drift, rattle, or fail the moment a wheelchair hits a curb. The mounts I specify and fabricate are built for real life — school halls, playgrounds, carparks, and the back of the family car.

Wheelchair-mounted iPads and communication devices, switch trays that sit exactly where the hand rests, head-pointer rigs for kids with good neck control but limited limb function, and custom-fabricated brackets for the weird, specific things no off-the-shelf product solves.

Every mount is measured, trialled, and adjusted until the device becomes part of the chair — not an accessory attached to it.`,
    whoFor: ['Wheelchair users needing device mounting', 'Kids using AAC or switch access on the move', 'Families tired of mounts that slip, rattle, or break'],
  },
  {
    id: 'ndis-reports',
    illus: 'mountain-tree' as const,
    title: 'NDIS reports',
    tagline: 'Written for the parent and the planner.',
    shortDesc: 'Plan reviews, capacity-building goal mapping, equipment justifications. Written for both the parent and the planner.',
    fullDesc: `NDIS paperwork can feel overwhelming — especially when you're also managing appointments, school, and everyday life. I write reports that actually help: plain-language functional capacity assessments, detailed equipment justifications, and goal-mapping documents that support plan reviews and appeals.

Every report starts with the child's real life and real goals. I write so a parent can read it and think "yes, that's my kid" — and so a planner can read it and think "yes, this is clearly justified."

Turnaround is typically 10 business days from our final session. Urgent requests can sometimes be accommodated — just ask.`,
    whoFor: ['Families applying for NDIS for the first time', 'Participants preparing for plan reviews', 'Parents needing functional capacity assessments for NDIS goals'],
  },
  {
    id: 'home-school-visits',
    illus: 'wheelchair' as const,
    title: 'Home & school visits',
    tagline: 'I come to where the kid actually lives.',
    shortDesc: 'Perth metro and out to Mandurah, no extra charge. Schools welcome — I bring the gear and the patience for a teachers\' meeting.',
    fullDesc: `Most of what I do requires seeing a child in their actual environment — how they sit at the kitchen table, how they navigate the school gate, where the gaming setup lives. I come to you.

Perth metro and out to Mandurah without extra travel charge. Further afield, we can talk. I do home visits, school visits, and clinic appointments — whatever works for your family.

School visits include time with teachers and support staff. I bring the equipment for trials, explain how things work in language that makes sense, and leave written recommendations that the school can actually use. No jargon. No assumptions. Just practical support.`,
    whoFor: ['Families who prefer sessions at home', 'Schools needing OT support and equipment trials', 'NDIS participants in Perth metro and Mandurah'],
  },
]

function ServiceSection({ service, index }: { service: typeof services[0]; index: number }) {
  const isEven = index % 2 === 0
  return (
    <section
      id={service.id}
      className="section-pad"
      style={{ background: isEven ? 'var(--off-white)' : 'var(--sand)' }}
      aria-label={service.title}
    >
      <div className="container-content">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start ${isEven ? '' : 'lg:grid-flow-dense'}`}>
          {/* Text */}
          <div className={isEven ? '' : 'lg:col-start-2'}>
            <RevealOnScroll>
              <div className="flex items-center gap-4 mb-6">
                <SpotIllustration type={service.illus} size={40} />
                <span
                  className="font-sans text-label uppercase tracking-wider"
                  style={{ color: 'var(--warm-stone)' }}
                >
                  / 0{index + 1}
                </span>
              </div>
              <h2
                className="font-lora font-bold mb-3"
                style={{ fontSize: 'clamp(26px,3vw,36px)', color: 'var(--deep-ink)', lineHeight: 1.2 }}
              >
                {service.title}
              </h2>
              <blockquote
                className="font-lora italic mb-6"
                style={{
                  fontSize: '18px',
                  color: 'var(--navy)',
                  borderLeft: '3px solid var(--terracotta)',
                  paddingLeft: '16px',
                }}
              >
                {service.tagline}
              </blockquote>
            </RevealOnScroll>

            <RevealOnScroll delay={60}>
              <div className="space-y-4 mb-8">
                {service.fullDesc.split('\n\n').map((para, i) => (
                  <p
                    key={i}
                    className="font-sans"
                    style={{
                      fontSize: '15px',
                      lineHeight: 1.7,
                      color: 'var(--deep-ink)',
                      opacity: 0.85,
                    }}
                  >
                    {para}
                  </p>
                ))}
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={120}>
              <div
                className="p-5 rounded-card mb-8"
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
            </RevealOnScroll>

            <RevealOnScroll delay={160}>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/referral"
                  className="btn-arrow inline-flex items-center font-sans font-medium px-5 py-2.5 rounded-btn transition-all duration-200 text-sm"
                  style={{ background: 'var(--navy)', color: 'var(--sand-white)' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'var(--terracotta)' }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'var(--navy)' }}
                >
                  Make a referral <span aria-hidden="true">→</span>
                </Link>
                <Link
                  href="/contact"
                  className="btn-arrow inline-flex items-center font-sans font-medium px-5 py-2.5 rounded-btn border-2 transition-all duration-200 text-sm"
                  style={{ borderColor: 'var(--navy)', color: 'var(--navy)', background: 'transparent' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'var(--navy)'; (e.currentTarget as HTMLElement).style.color = 'var(--sand-white)' }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.color = 'var(--navy)' }}
                >
                  Ask a question <span aria-hidden="true">→</span>
                </Link>
              </div>
            </RevealOnScroll>
          </div>

          {/* Decorative card */}
          <RevealOnScroll delay={100}>
            <div
              className={`hidden lg:flex sticky top-32 aspect-[4/3] rounded-card items-center justify-center p-10 ${isEven ? '' : 'lg:col-start-1 lg:row-start-1'}`}
              style={{ background: 'var(--navy)' }}
              data-dark-bg
              aria-hidden="true"
            >
              <div className="text-center">
                <SpotIllustration type={service.illus} size={80} className="mx-auto mb-6" />
                <p
                  className="font-lora font-bold"
                  style={{ fontSize: '28px', color: 'var(--sand-white)', lineHeight: 1.2 }}
                >
                  {service.title}
                </p>
                <p
                  className="font-caveat mt-3"
                  style={{ fontSize: '22px', color: 'var(--terracotta)' }}
                >
                  Joy is the goal.
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}

export default function ServicesPage() {
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
            <span
              className="font-caveat text-xl block mb-3"
              style={{ color: 'var(--terracotta)' }}
            >
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
              Therapy that&apos;s specific to your child — and what they actually need
            </h1>
            <p
              className="font-sans max-w-[540px]"
              style={{ fontSize: '18px', lineHeight: 1.65, color: 'var(--deep-ink)', opacity: 0.75 }}
            >
              I specialise in physical disability and assistive technology — especially for kids
              who use wheelchairs. Here&apos;s what that looks like in practice.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={80}>
            <div
              className="mt-10 p-6 rounded-card inline-block"
              style={{ background: 'var(--navy)' }}
              data-dark-bg
            >
              <p
                className="font-sans text-sm mb-1"
                style={{ color: 'var(--sand)', opacity: 0.9 }}
              >
                All services billed at NDIS price guide rates.
              </p>
              <p
                className="font-lora font-bold"
                style={{ fontSize: '22px', color: 'var(--sand-white)' }}
              >
                $193.99/hr <span style={{ fontSize: '15px', fontFamily: 'var(--font-dm-sans)', fontWeight: 400, opacity: 0.7 }}>for OT services</span>
              </p>
              <p
                className="font-sans text-sm mt-2"
                style={{ color: 'var(--sand)', opacity: 0.7 }}
              >
                Initial 20-minute chat is free. No commitment until we&apos;ve spoken.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <MountainDivider opacity={0.25} />

      {/* Who this is for band */}
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

      {/* Service sections */}
      {services.map((service, i) => (
        <div key={service.id}>
          <ServiceSection service={service} index={i} />
          {i < services.length - 1 && <MountainDivider opacity={0.3} />}
        </div>
      ))}

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
              That&apos;s normal. Most families come in with a goal, not a category. Tell me what your
              child needs and we&apos;ll figure out the right approach together.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="btn-arrow inline-flex items-center font-sans font-medium px-6 py-3 rounded-btn transition-all duration-200"
                style={{ background: 'var(--navy)', color: 'var(--sand-white)', fontSize: '15px' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'var(--terracotta)' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'var(--navy)' }}
              >
                Get in touch <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/referral"
                className="btn-arrow inline-flex items-center font-sans font-medium px-6 py-3 rounded-btn border-2 transition-all duration-200"
                style={{ borderColor: 'var(--navy)', color: 'var(--navy)', background: 'transparent', fontSize: '15px' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'var(--navy)'; (e.currentTarget as HTMLElement).style.color = 'var(--sand-white)' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.color = 'var(--navy)' }}
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
