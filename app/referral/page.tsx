'use client'

import { useState, FormEvent } from 'react'
import MountainDivider from '@/components/MountainDivider'
import RevealOnScroll from '@/components/RevealOnScroll'
import SpotIllustration from '@/components/SpotIllustration'
import { CheckCircle, AlertCircle, ChevronDown, Mail, Phone } from 'lucide-react'

// ─── Form types ──────────────────────────────────────────────────────────────
interface FormData {
  referrerName: string
  relationship: string
  clientFirstName: string
  clientAge: string
  reason: string
  email: string
  phone: string
  ndisStatus: string
  referralSource: string
  notes: string
}

interface FormErrors {
  [key: string]: string
}

const initialData: FormData = {
  referrerName: '',
  relationship: '',
  clientFirstName: '',
  clientAge: '',
  reason: '',
  email: '',
  phone: '',
  ndisStatus: '',
  referralSource: '',
  notes: '',
}

// ─── Input component ─────────────────────────────────────────────────────────
function Field({
  id,
  label,
  required,
  error,
  children,
}: {
  id: string
  label: string
  required?: boolean
  error?: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="font-sans font-medium uppercase tracking-wider"
        style={{ fontSize: '12px', color: 'var(--warm-stone)' }}
      >
        {label}
        {required && (
          <span aria-hidden="true" style={{ color: 'var(--terracotta)' }}>
            {' '}*
          </span>
        )}
      </label>
      {children}
      {error && (
        <div
          role="alert"
          className="flex items-center gap-1.5 font-sans"
          style={{ fontSize: '13px', color: 'var(--warm-red)' }}
          id={`${id}-error`}
        >
          <AlertCircle size={13} />
          {error}
        </div>
      )}
    </div>
  )
}

function TextInput({
  id,
  value,
  onChange,
  placeholder,
  type = 'text',
  required,
  error,
  describedBy,
  inputMode,
}: {
  id: string
  value: string
  onChange: (v: string) => void
  placeholder?: string
  type?: string
  required?: boolean
  error?: boolean
  describedBy?: string
  inputMode?: React.HTMLAttributes<HTMLInputElement>['inputMode']
}) {
  return (
    <input
      id={id}
      name={id}
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      required={required}
      aria-required={required}
      aria-describedby={describedBy}
      aria-invalid={error ? ('true' as const) : undefined}
      inputMode={inputMode}
      className="w-full font-sans rounded-lg"
      style={{
        background: 'var(--off-white)',
        border: `1.5px solid ${error ? 'var(--warm-red)' : 'var(--warm-stone)'}`,
        color: 'var(--deep-ink)',
        fontSize: '15px',
        lineHeight: '1.5',
        padding: '12px 16px',
        outline: 'none',
        transition: 'border-color 150ms ease',
      }}
      onFocus={(e) => {
        if (!error) e.target.style.borderColor = 'var(--navy)'
      }}
      onBlur={(e) => {
        if (!error) e.target.style.borderColor = 'var(--warm-stone)'
      }}
    />
  )
}

// ─── Referral form ────────────────────────────────────────────────────────────
function ReferralForm() {
  const [data, setData] = useState<FormData>(initialData)
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const set = (field: keyof FormData) => (value: string) => {
    setData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }))
  }

  const validate = (): FormErrors => {
    const errs: FormErrors = {}
    if (!data.referrerName.trim()) errs.referrerName = 'Please enter your name.'
    if (!data.relationship) errs.relationship = 'Please select your relationship to the client.'
    if (!data.clientFirstName.trim()) errs.clientFirstName = 'Please enter the client\'s first name.'
    if (!data.clientAge.trim()) errs.clientAge = 'Please enter the client\'s age.'
    if (!data.reason.trim()) errs.reason = 'Please briefly describe the reason for referral.'
    if (!data.email.trim()) {
      errs.email = 'Please enter your email address.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errs.email = 'Please enter a valid email address.'
    }
    if (!data.ndisStatus) errs.ndisStatus = 'Please select an NDIS status.'
    return errs
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      // Focus first error
      const firstErrId = Object.keys(errs)[0]
      document.getElementById(firstErrId)?.focus()
      return
    }

    setSubmitting(true)
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1200))
    setSubmitting(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div
        className="p-10 rounded-card text-center"
        style={{ background: 'var(--sketch-cream)', border: '1px solid var(--warm-stone)' }}
        role="status"
        aria-live="polite"
      >
        <CheckCircle
          size={48}
          className="mx-auto mb-4"
          style={{ color: 'var(--forest-green)' }}
        />
        <h3
          className="font-lora font-bold mb-3"
          style={{ fontSize: '24px', color: 'var(--deep-ink)' }}
        >
          Referral received — thank you.
        </h3>
        <p
          className="font-sans"
          style={{ fontSize: '16px', lineHeight: 1.65, color: 'var(--deep-ink)', opacity: 0.75 }}
        >
          I'll be in touch within 2 business days. If you need to reach me sooner, email{' '}
          <a
            href="mailto:hello@assuredot.com.au"
            style={{ color: 'var(--terracotta)' }}
          >
            hello@assuredot.com.au
          </a>
          .
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-label="Referral form"
    >
      <div className="space-y-5">
        {/* Row 1 — Referrer name + relationship */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Field id="referrerName" label="Your name" required error={errors.referrerName}>
            <TextInput
              id="referrerName"
              value={data.referrerName}
              onChange={set('referrerName')}
              placeholder="e.g. Dr Sarah Chen"
              required
              error={!!errors.referrerName}
              describedBy={errors.referrerName ? 'referrerName-error' : undefined}
            />
          </Field>

          <Field id="relationship" label="Your relationship to the client" required error={errors.relationship}>
            <div className="relative">
              <select
                id="relationship"
                name="relationship"
                value={data.relationship}
                onChange={(e) => set('relationship')(e.target.value)}
                required
                aria-required="true"
                aria-describedby={errors.relationship ? 'relationship-error' : undefined}
                aria-invalid={errors.relationship ? 'true' : undefined}
                className="w-full font-sans rounded-lg appearance-none"
                style={{
                  background: 'var(--off-white)',
                  border: `1.5px solid ${errors.relationship ? 'var(--warm-red)' : 'var(--warm-stone)'}`,
                  color: data.relationship ? 'var(--deep-ink)' : '#999',
                  fontSize: '15px',
                  padding: '12px 40px 12px 16px',
                  outline: 'none',
                }}
              >
                <option value="" disabled>Select one</option>
                <option value="parent">Parent / carer</option>
                <option value="practitioner">Allied health practitioner</option>
                <option value="gp">GP / paediatrician</option>
                <option value="school">School staff</option>
                <option value="other">Other</option>
              </select>
              <ChevronDown
                size={16}
                className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
                style={{ color: 'var(--warm-stone)' }}
              />
            </div>
          </Field>
        </div>

        {/* Row 2 — Client name + age */}
        <div className="grid grid-cols-1 sm:grid-cols-[2fr_1fr] gap-5">
          <Field id="clientFirstName" label="Client's first name" required error={errors.clientFirstName}>
            <TextInput
              id="clientFirstName"
              value={data.clientFirstName}
              onChange={set('clientFirstName')}
              placeholder="First name only is fine"
              required
              error={!!errors.clientFirstName}
              describedBy={errors.clientFirstName ? 'clientFirstName-error' : undefined}
            />
          </Field>

          <Field id="clientAge" label="Age" required error={errors.clientAge}>
            <TextInput
              id="clientAge"
              value={data.clientAge}
              onChange={set('clientAge')}
              placeholder="e.g. 9"
              type="text"
              inputMode="numeric"
              required
              error={!!errors.clientAge}
              describedBy={errors.clientAge ? 'clientAge-error' : undefined}
            />
          </Field>
        </div>

        {/* Reason */}
        <Field id="reason" label="Reason for referral" required error={errors.reason}>
          <div>
            <textarea
              id="reason"
              name="reason"
              value={data.reason}
              onChange={(e) => set('reason')(e.target.value)}
              placeholder="Brief description of the child's needs and what you're hoping OT can help with"
              required
              aria-required="true"
              aria-describedby={errors.reason ? 'reason-error' : undefined}
              aria-invalid={errors.reason ? 'true' : undefined}
              rows={4}
              className="w-full font-sans rounded-lg resize-y"
              style={{
                background: 'var(--off-white)',
                border: `1.5px solid ${errors.reason ? 'var(--warm-red)' : 'var(--warm-stone)'}`,
                color: 'var(--deep-ink)',
                fontSize: '15px',
                lineHeight: '1.65',
                padding: '12px 16px',
                outline: 'none',
                minHeight: '100px',
              }}
              onFocus={(e) => {
                if (!errors.reason) e.target.style.borderColor = 'var(--navy)'
              }}
              onBlur={(e) => {
                if (!errors.reason) e.target.style.borderColor = 'var(--warm-stone)'
              }}
            />
            {errors.reason && (
              <div
                role="alert"
                className="flex items-center gap-1.5 font-sans mt-1"
                style={{ fontSize: '13px', color: 'var(--warm-red)' }}
                id="reason-error"
              >
                <AlertCircle size={13} />
                {errors.reason}
              </div>
            )}
          </div>
        </Field>

        {/* Contact details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Field id="email" label="Your email" required error={errors.email}>
            <TextInput
              id="email"
              value={data.email}
              onChange={set('email')}
              placeholder="your@email.com"
              type="email"
              required
              error={!!errors.email}
              describedBy={errors.email ? 'email-error' : undefined}
            />
          </Field>

          <Field id="phone" label="Your phone">
            <TextInput
              id="phone"
              value={data.phone}
              onChange={set('phone')}
              placeholder="0400 000 000"
              type="tel"
            />
          </Field>
        </div>

        {/* NDIS status */}
        <Field id="ndisStatus" label="NDIS status" required error={errors.ndisStatus}>
          <div
            className="flex flex-wrap gap-4"
            role="radiogroup"
            aria-labelledby="ndisStatus-label"
            aria-describedby={errors.ndisStatus ? 'ndisStatus-error' : undefined}
          >
            {['yes', 'no', 'unsure'].map((val) => (
              <label
                key={val}
                className="flex items-center gap-2 font-sans text-sm"
                style={{ color: 'var(--deep-ink)' }}
              >
                <input
                  type="radio"
                  name="ndisStatus"
                  value={val}
                  checked={data.ndisStatus === val}
                  onChange={() => set('ndisStatus')(val)}
                  aria-required="true"
                  className="accent-navy"
                  style={{ accentColor: 'var(--navy)', width: '16px', height: '16px' }}
                />
                {val === 'yes' ? 'NDIS participant' : val === 'no' ? 'Not on NDIS' : 'Not sure / in process'}
              </label>
            ))}
          </div>
          {errors.ndisStatus && (
            <div
              role="alert"
              id="ndisStatus-error"
              className="flex items-center gap-1.5 font-sans"
              style={{ fontSize: '13px', color: 'var(--warm-red)' }}
            >
              <AlertCircle size={13} />
              {errors.ndisStatus}
            </div>
          )}
        </Field>

        {/* Referral source */}
        <Field id="referralSource" label="How did you hear about Assured OT?">
          <div className="relative">
            <select
              id="referralSource"
              name="referralSource"
              value={data.referralSource}
              onChange={(e) => set('referralSource')(e.target.value)}
              className="w-full font-sans rounded-lg appearance-none"
              style={{
                background: 'var(--off-white)',
                border: '1.5px solid var(--warm-stone)',
                color: data.referralSource ? 'var(--deep-ink)' : '#999',
                fontSize: '15px',
                padding: '12px 40px 12px 16px',
                outline: 'none',
              }}
            >
              <option value="">Select one (optional)</option>
              <option value="google">Google search</option>
              <option value="referral">Referred by a colleague</option>
              <option value="social">Social media</option>
              <option value="ndis">NDIS provider portal</option>
              <option value="word-of-mouth">Word of mouth</option>
              <option value="other">Other</option>
            </select>
            <ChevronDown
              size={16}
              className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
              style={{ color: 'var(--warm-stone)' }}
            />
          </div>
        </Field>

        {/* Notes */}
        <Field id="notes" label="Additional notes (optional)">
          <textarea
            id="notes"
            name="notes"
            value={data.notes}
            onChange={(e) => set('notes')(e.target.value)}
            placeholder="Anything else you'd like me to know before we connect"
            rows={3}
            className="w-full font-sans rounded-lg resize-y"
            style={{
              background: 'var(--off-white)',
              border: '1.5px solid var(--warm-stone)',
              color: 'var(--deep-ink)',
              fontSize: '15px',
              lineHeight: '1.65',
              padding: '12px 16px',
              outline: 'none',
              minHeight: '80px',
            }}
            onFocus={(e) => { e.target.style.borderColor = 'var(--navy)' }}
            onBlur={(e) => { e.target.style.borderColor = 'var(--warm-stone)' }}
          />
        </Field>

        <p
          className="font-sans text-caption"
          style={{ color: 'var(--warm-stone)' }}
        >
          * Required fields. Information is kept confidential and used only to respond to your
          referral. See our{' '}
          <a href="/privacy" style={{ color: 'var(--terracotta)' }}>
            privacy policy
          </a>
          .
        </p>

        <div className="pt-2">
          <button
            type="submit"
            disabled={submitting}
            className="btn-arrow w-full sm:w-auto inline-flex items-center justify-center font-sans font-medium px-8 py-3.5 rounded-btn transition-all duration-200"
            style={{
              background: submitting ? 'var(--warm-stone)' : 'var(--terracotta)',
              color: 'white',
              fontSize: '15px',
              minWidth: '200px',
            }}
          >
            {submitting ? (
              <>
                <span
                  className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"
                  style={{ animation: 'spin 800ms linear infinite' }}
                  aria-hidden="true"
                />
                Sending…
              </>
            ) : (
              <>
                Submit referral <span aria-hidden="true">→</span>
              </>
            )}
          </button>
        </div>
      </div>
    </form>
  )
}

// ─── FAQ ─────────────────────────────────────────────────────────────────────
const referralFaqs = [
  {
    q: 'How quickly will I hear back after submitting?',
    a: 'I aim to respond to all referrals within 2 business days. If your situation is urgent, please email directly at hello@assuredot.com.au and flag it.',
  },
  {
    q: 'Can parents refer directly, or do I need to go through a GP?',
    a: 'Absolutely — parents, carers, and individuals can refer directly. No GP referral or prescription is needed.',
  },
  {
    q: 'What happens after I submit a referral?',
    a: "I'll review the information, reach out to confirm receipt, and suggest an initial appointment or phone consultation. You'll be in contact within 2 business days.",
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function ReferralPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>
      {/* Hero split */}
      <section
        className="pt-28 pb-0"
        style={{ background: 'var(--sketch-cream)' }}
        aria-label="Referral information"
      >
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 pb-12">
            {/* Left */}
            <RevealOnScroll>
              <div>
                <span className="font-caveat text-xl block mb-3" style={{ color: 'var(--terracotta)' }}>
                  referring is simple
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
                  Here's how it works.
                </h1>
                <p
                  className="font-sans"
                  style={{ fontSize: '17px', lineHeight: 1.65, color: 'var(--deep-ink)', opacity: 0.8 }}
                >
                  Whether you're a parent, a GP, a paediatrician, or a teacher — the process is
                  the same: fill in the short form, and I'll take it from there.
                </p>
              </div>
            </RevealOnScroll>

            {/* Right — 3-step visual */}
            <RevealOnScroll delay={100}>
              <div className="flex flex-col gap-6">
                {[
                  {
                    n: '1',
                    illus: 'puzzle' as const,
                    title: 'Submit your referral',
                    desc: 'Fill in the form below — takes about 3 minutes.',
                  },
                  {
                    n: '2',
                    illus: 'controller' as const,
                    title: 'I get in touch',
                    desc: "Within 2 business days, I'll confirm receipt and set up a call or appointment.",
                  },
                  {
                    n: '3',
                    illus: 'mountain-tree' as const,
                    title: 'Therapy begins',
                    desc: 'We start with your child, their goals, and what actually matters to your family.',
                  },
                ].map(({ n, illus, title, desc }) => (
                  <div key={n} className="flex items-start gap-5">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-lora font-bold"
                      style={{
                        background: 'var(--navy)',
                        color: 'var(--sand-white)',
                        fontSize: '16px',
                      }}
                      aria-hidden="true"
                    >
                      {n}
                    </div>
                    <div className="flex-1 pt-1">
                      <h3
                        className="font-sans font-semibold mb-1"
                        style={{ fontSize: '16px', color: 'var(--deep-ink)' }}
                      >
                        {title}
                      </h3>
                      <p
                        className="font-sans text-sm"
                        style={{ lineHeight: 1.65, color: 'var(--deep-ink)', opacity: 0.7 }}
                      >
                        {desc}
                      </p>
                    </div>
                    <SpotIllustration type={illus} size={36} className="hidden sm:block flex-shrink-0" />
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>
        </div>
        <MountainDivider opacity={0.25} />
      </section>

      {/* Form section */}
      <section
        className="section-pad"
        style={{ background: 'var(--off-white)' }}
        aria-label="Referral form"
      >
        <div className="container-content">
          <div className="max-w-[680px] mx-auto">
            <RevealOnScroll>
              <h2
                className="font-lora font-bold mb-2"
                style={{ fontSize: '28px', color: 'var(--deep-ink)' }}
              >
                Submit a referral
              </h2>
              <p
                className="font-sans mb-8"
                style={{ fontSize: '15px', color: 'var(--deep-ink)', opacity: 0.65 }}
              >
                All fields marked * are required. Everything else is optional but helpful.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={80}>
              <ReferralForm />
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <MountainDivider />

      {/* What happens next */}
      <section
        className="section-pad"
        style={{ background: 'var(--navy)' }}
        aria-label="What happens after you refer"
        data-dark-bg
      >
        <div className="container-content max-w-[860px] mx-auto">
          <RevealOnScroll>
            <h2
              className="font-lora font-bold mb-10 text-center"
              style={{ fontSize: '32px', color: 'var(--sand-white)' }}
            >
              What happens next
            </h2>
          </RevealOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              {
                title: 'Within 2 business days',
                desc: 'I review the referral and get in touch to confirm receipt and discuss next steps.',
              },
              {
                title: 'Initial consultation',
                desc: 'A phone or video call to learn more about your child, their goals, and what matters to your family.',
              },
              {
                title: 'First appointment',
                desc: 'Typically within 2–3 weeks. We start building a picture of your child and what we\'ll work toward together.',
              },
            ].map(({ title, desc }, i) => (
              <RevealOnScroll key={title} delay={i * 80}>
                <div className="text-center">
                  <div
                    className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center font-lora font-bold text-xl"
                    style={{ background: 'rgba(240,232,216,0.1)', color: 'var(--terracotta)' }}
                    aria-hidden="true"
                  >
                    {i + 1}
                  </div>
                  <h3
                    className="font-sans font-semibold mb-2"
                    style={{ fontSize: '16px', color: 'var(--sand-white)' }}
                  >
                    {title}
                  </h3>
                  <p
                    className="font-sans text-sm"
                    style={{ lineHeight: 1.65, color: 'var(--sand)', opacity: 0.8 }}
                  >
                    {desc}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <MountainDivider flipped />

      {/* FAQ */}
      <section
        className="section-pad"
        style={{ background: 'var(--off-white)' }}
        aria-label="Referral frequently asked questions"
      >
        <div className="container-content max-w-[680px] mx-auto">
          <RevealOnScroll>
            <h2
              className="font-lora font-bold mb-8"
              style={{ fontSize: '28px', color: 'var(--deep-ink)' }}
            >
              Common referral questions
            </h2>
          </RevealOnScroll>

          <div>
            {referralFaqs.map(({ q, a }, i) => (
              <RevealOnScroll key={q} delay={i * 50}>
                <div
                  className="border-b"
                  style={{ borderColor: 'var(--warm-stone)' }}
                >
                  <button
                    className="w-full flex justify-between items-start gap-4 py-5 text-left"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                    aria-controls={`rfaq-${i}`}
                    id={`rfaq-btn-${i}`}
                  >
                    <span
                      className="font-sans font-medium text-sm"
                      style={{ color: 'var(--deep-ink)' }}
                    >
                      {q}
                    </span>
                    <ChevronDown
                      size={16}
                      className="flex-shrink-0 mt-0.5"
                      style={{
                        color: 'var(--terracotta)',
                        transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0)',
                        transition: 'transform 300ms ease',
                      }}
                    />
                  </button>
                  <div
                    id={`rfaq-${i}`}
                    role="region"
                    aria-labelledby={`rfaq-btn-${i}`}
                    className={`accordion-content ${openFaq === i ? 'open' : ''}`}
                  >
                    <p
                      className="font-sans text-sm pb-5"
                      style={{ lineHeight: 1.65, color: 'var(--deep-ink)', opacity: 0.75 }}
                    >
                      {a}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          {/* Alternative contact */}
          <RevealOnScroll delay={200}>
            <div
              className="mt-10 p-6 rounded-card"
              style={{ background: 'var(--sketch-cream)', border: '1px solid var(--warm-stone)' }}
            >
              <p
                className="font-sans font-medium mb-4"
                style={{ fontSize: '15px', color: 'var(--deep-ink)' }}
              >
                Prefer to get in touch directly?
              </p>
              <div className="flex flex-wrap gap-6">
                <a
                  href="mailto:hello@assuredot.com.au"
                  className="flex items-center gap-2 font-sans text-sm transition-colors duration-200"
                  style={{ color: 'var(--navy)' }}
                  onMouseEnter={(e) => { ;(e.currentTarget as HTMLElement).style.color = 'var(--terracotta)' }}
                  onMouseLeave={(e) => { ;(e.currentTarget as HTMLElement).style.color = 'var(--navy)' }}
                >
                  <Mail size={15} />
                  hello@assuredot.com.au
                </a>
                <a
                  href="tel:+61400000000"
                  className="flex items-center gap-2 font-sans text-sm transition-colors duration-200"
                  style={{ color: 'var(--navy)' }}
                  onMouseEnter={(e) => { ;(e.currentTarget as HTMLElement).style.color = 'var(--terracotta)' }}
                  onMouseLeave={(e) => { ;(e.currentTarget as HTMLElement).style.color = 'var(--navy)' }}
                >
                  <Phone size={15} />
                  0400 000 000
                </a>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  )
}
