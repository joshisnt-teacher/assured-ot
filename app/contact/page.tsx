'use client'

import { useState, FormEvent } from 'react'
import MountainDivider from '@/components/MountainDivider'
import RevealOnScroll from '@/components/RevealOnScroll'
import { CheckCircle, AlertCircle, Mail, Phone, MapPin, Clock } from 'lucide-react'

function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
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

  const handle = async (e: FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setSubmitting(true)
    await new Promise((r) => setTimeout(r, 1000))
    setSubmitting(false)
    setSubmitted(true)
  }

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
        className="p-10 rounded-card text-center"
        style={{ background: 'var(--sketch-cream)', border: '1px solid var(--warm-stone)' }}
        role="status"
        aria-live="polite"
      >
        <CheckCircle size={48} className="mx-auto mb-4" style={{ color: 'var(--forest-green)' }} />
        <h3
          className="font-lora font-bold mb-2"
          style={{ fontSize: '22px', color: 'var(--deep-ink)' }}
        >
          Message received — thank you.
        </h3>
        <p className="font-sans text-sm" style={{ color: 'var(--deep-ink)', opacity: 0.7 }}>
          I'll get back to you within 2 business days.
        </p>
      </div>
    )
  }

  const clearError = (field: string) => setErrors((prev) => ({ ...prev, [field]: '' }))

  return (
    <form onSubmit={handle} noValidate aria-label="Contact form" className="space-y-5">
      <div>
        <label
          htmlFor="contact-name"
          className="block font-sans font-medium uppercase tracking-wider mb-1.5"
          style={{ fontSize: '12px', color: 'var(--warm-stone)' }}
        >
          Your name *
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          value={name}
          onChange={(e) => { setName(e.target.value); clearError('name') }}
          required
          aria-required="true"
          aria-describedby={errors.name ? 'name-err' : undefined}
          aria-invalid={errors.name ? 'true' : undefined}
          style={inputStyle(!!errors.name)}
          onFocus={(e) => { if (!errors.name) e.target.style.borderColor = 'var(--navy)' }}
          onBlur={(e) => { if (!errors.name) e.target.style.borderColor = 'var(--warm-stone)' }}
        />
        {errors.name && (
          <div id="name-err" role="alert" className="flex items-center gap-1 mt-1 text-xs" style={{ color: 'var(--warm-red)' }}>
            <AlertCircle size={12} />{errors.name}
          </div>
        )}
      </div>

      <div>
        <label
          htmlFor="contact-email"
          className="block font-sans font-medium uppercase tracking-wider mb-1.5"
          style={{ fontSize: '12px', color: 'var(--warm-stone)' }}
        >
          Your email *
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => { setEmail(e.target.value); clearError('email') }}
          required
          aria-required="true"
          aria-describedby={errors.email ? 'email-err' : undefined}
          aria-invalid={errors.email ? 'true' : undefined}
          style={inputStyle(!!errors.email)}
          onFocus={(e) => { if (!errors.email) e.target.style.borderColor = 'var(--navy)' }}
          onBlur={(e) => { if (!errors.email) e.target.style.borderColor = 'var(--warm-stone)' }}
        />
        {errors.email && (
          <div id="email-err" role="alert" className="flex items-center gap-1 mt-1 text-xs" style={{ color: 'var(--warm-red)' }}>
            <AlertCircle size={12} />{errors.email}
          </div>
        )}
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="block font-sans font-medium uppercase tracking-wider mb-1.5"
          style={{ fontSize: '12px', color: 'var(--warm-stone)' }}
        >
          Your message *
        </label>
        <textarea
          id="contact-message"
          name="message"
          value={message}
          onChange={(e) => { setMessage(e.target.value); clearError('message') }}
          required
          aria-required="true"
          aria-describedby={errors.message ? 'message-err' : undefined}
          aria-invalid={errors.message ? 'true' : undefined}
          rows={5}
          placeholder="What would you like to know? No question is too simple."
          style={{ ...inputStyle(!!errors.message), resize: 'vertical', minHeight: '120px' }}
          onFocus={(e) => { if (!errors.message) e.target.style.borderColor = 'var(--navy)' }}
          onBlur={(e) => { if (!errors.message) e.target.style.borderColor = 'var(--warm-stone)' }}
        />
        {errors.message && (
          <div id="message-err" role="alert" className="flex items-center gap-1 mt-1 text-xs" style={{ color: 'var(--warm-red)' }}>
            <AlertCircle size={12} />{errors.message}
          </div>
        )}
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="btn-arrow w-full sm:w-auto inline-flex items-center justify-center font-sans font-medium px-8 py-3.5 rounded-btn transition-all duration-200"
        style={{
          background: submitting ? 'var(--warm-stone)' : 'var(--navy)',
          color: 'var(--sand-white)',
          fontSize: '15px',
          minWidth: '180px',
        }}
      >
        {submitting ? 'Sending…' : <>Send message <span aria-hidden="true">→</span></>}
      </button>
    </form>
  )
}

export default function ContactPage() {
  return (
    <>
      <section
        className="pt-32 pb-16"
        style={{ background: 'var(--sketch-cream)' }}
        aria-label="Contact hero"
      >
        <div className="container-content">
          <RevealOnScroll>
            <span className="font-caveat text-xl block mb-3" style={{ color: 'var(--terracotta)' }}>
              let's talk
            </span>
            <h1
              className="font-lora font-bold mb-5 max-w-[560px]"
              style={{
                fontSize: 'clamp(32px,4vw,48px)',
                color: 'var(--deep-ink)',
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
              }}
            >
              No form anxiety here. Just ask.
            </h1>
            <p
              className="font-sans max-w-[480px]"
              style={{ fontSize: '17px', lineHeight: 1.65, color: 'var(--deep-ink)', opacity: 0.75 }}
            >
              Whether you have a question, want to know if I can help, or just want to say hi —
              reach out. I read every message personally.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <MountainDivider opacity={0.25} />

      <section
        className="section-pad"
        style={{ background: 'var(--off-white)' }}
        aria-label="Contact form and details"
      >
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-16 items-start">
            <RevealOnScroll>
              <h2
                className="font-lora font-bold mb-8"
                style={{ fontSize: '26px', color: 'var(--deep-ink)' }}
              >
                Send a message
              </h2>
              <ContactForm />
            </RevealOnScroll>

            <RevealOnScroll delay={120}>
              <div className="space-y-6 lg:pt-14">
                {/* Contact details card */}
                <div
                  className="p-6 rounded-card"
                  style={{ background: 'var(--sketch-cream)', border: '1px solid var(--warm-stone)' }}
                >
                  <h3
                    className="font-sans font-semibold mb-5"
                    style={{ fontSize: '16px', color: 'var(--deep-ink)' }}
                  >
                    Direct contact
                  </h3>

                  <div className="space-y-4">
                    <a
                      href="mailto:hello@assuredot.com.au"
                      className="flex items-center gap-3 font-sans text-sm transition-colors duration-200"
                      style={{ color: 'var(--deep-ink)' }}
                      onMouseEnter={(e) => { ;(e.currentTarget as HTMLElement).style.color = 'var(--terracotta)' }}
                      onMouseLeave={(e) => { ;(e.currentTarget as HTMLElement).style.color = 'var(--deep-ink)' }}
                    >
                      <Mail size={16} style={{ color: 'var(--terracotta)' }} />
                      hello@assuredot.com.au
                    </a>
                    <a
                      href="tel:+61400000000"
                      className="flex items-center gap-3 font-sans text-sm transition-colors duration-200"
                      style={{ color: 'var(--deep-ink)' }}
                      onMouseEnter={(e) => { ;(e.currentTarget as HTMLElement).style.color = 'var(--terracotta)' }}
                      onMouseLeave={(e) => { ;(e.currentTarget as HTMLElement).style.color = 'var(--deep-ink)' }}
                    >
                      <Phone size={16} style={{ color: 'var(--terracotta)' }} />
                      0400 000 000
                    </a>
                    <div
                      className="flex items-start gap-3 font-sans text-sm"
                      style={{ color: 'var(--deep-ink)' }}
                    >
                      <MapPin size={16} style={{ color: 'var(--terracotta)', flexShrink: 0, marginTop: '2px' }} />
                      Perth, Western Australia<br />
                      <span style={{ opacity: 0.6 }}>Home visits and clinic appointments available</span>
                    </div>
                    <div
                      className="flex items-start gap-3 font-sans text-sm"
                      style={{ color: 'var(--deep-ink)' }}
                    >
                      <Clock size={16} style={{ color: 'var(--terracotta)', flexShrink: 0, marginTop: '2px' }} />
                      <span>
                        Mon – Fri, 8am – 5pm AWST<br />
                        <span style={{ opacity: 0.6 }}>I aim to respond within 2 business days</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Ready to refer? */}
                <div
                  className="p-6 rounded-card"
                  style={{ background: 'var(--navy)' }}
                  data-dark-bg
                >
                  <p
                    className="font-lora font-semibold mb-2"
                    style={{ fontSize: '18px', color: 'var(--sand-white)', lineHeight: 1.3 }}
                  >
                    Ready to make a referral?
                  </p>
                  <p
                    className="font-sans text-sm mb-4"
                    style={{ color: 'var(--sand)', opacity: 0.85 }}
                  >
                    The formal referral form has a bit more detail and is the fastest way to get your
                    child into the queue.
                  </p>
                  <a
                    href="/referral"
                    className="btn-arrow inline-flex items-center font-sans text-sm font-medium px-4 py-2.5 rounded-btn transition-all duration-200"
                    style={{
                      background: 'var(--terracotta)',
                      color: 'white',
                    }}
                  >
                    Referral form <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </>
  )
}
