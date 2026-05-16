'use client'

import { useState, FormEvent } from 'react'
import MountainDivider from '@/components/MountainDivider'
import RevealOnScroll from '@/components/RevealOnScroll'
import { CheckCircle, AlertCircle, ChevronDown, Clock, FileText, Users, MapPin, Baby } from 'lucide-react'

// ─── Form types ──────────────────────────────────────────────────────────────
interface FormData {
  referrerName: string
  referrerRole: string
  organisation: string
  referrerEmail: string
  referrerPhone: string
  clientFirstName: string
  clientAge: string
  diagnosis: string
  reason: string
  ndisStatus: string
  familyContacted: string
  notes: string
  consent: boolean
}

interface FormErrors {
  [key: string]: string
}

const initialData: FormData = {
  referrerName: '',
  referrerRole: '',
  organisation: '',
  referrerEmail: '',
  referrerPhone: '',
  clientFirstName: '',
  clientAge: '',
  diagnosis: '',
  reason: '',
  ndisStatus: '',
  familyContacted: '',
  notes: '',
  consent: false,
}

const roleOptions = [
  'GP',
  'Paediatrician',
  'OT',
  'Speech Pathologist',
  'Physio',
  'School',
  'Hospital',
  'Parent',
  'Other',
]

const ndisOptions = [
  { value: 'plan-managed', label: 'Plan-managed' },
  { value: 'self-managed', label: 'Self-managed' },
  { value: 'agency-managed', label: 'Agency-managed' },
  { value: 'not-on-ndis', label: 'Not on NDIS' },
  { value: 'unknown', label: 'Unknown' },
]

// ─── Input components ────────────────────────────────────────────────────────
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
      aria-invalid={error ? 'true' : undefined}
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

// ─── Referral form ───────────────────────────────────────────────────────────
function ReferralForm() {
  const [data, setData] = useState<FormData>(initialData)
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const set = (field: keyof FormData) => (value: string | boolean) => {
    setData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }))
  }

  const validate = (): FormErrors => {
    const errs: FormErrors = {}
    if (!data.referrerName.trim()) errs.referrerName = 'Please enter your name.'
    if (!data.referrerRole) errs.referrerRole = 'Please select your role.'
    if (!data.referrerEmail.trim()) {
      errs.referrerEmail = 'Please enter your email address.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.referrerEmail)) {
      errs.referrerEmail = 'Please enter a valid email address.'
    }
    if (!data.clientFirstName.trim()) errs.clientFirstName = "Please enter the client's first name."
    if (!data.clientAge.trim()) errs.clientAge = "Please enter the client's age."
    if (!data.diagnosis.trim()) errs.diagnosis = 'Please enter a primary diagnosis or condition.'
    if (!data.reason.trim()) errs.reason = 'Please briefly describe the reason for referral.'
    if (!data.ndisStatus) errs.ndisStatus = 'Please select an NDIS status.'
    if (!data.familyContacted) errs.familyContacted = 'Please confirm whether the family has been contacted.'
    if (!data.consent) errs.consent = 'Please confirm you have authority to share this information.'
    return errs
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      const firstErrId = Object.keys(errs)[0]
      document.getElementById(firstErrId)?.focus()
      return
    }

    setSubmitting(true)
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
          Referral received.
        </h3>
        <p
          className="font-sans"
          style={{ fontSize: '16px', lineHeight: 1.65, color: 'var(--deep-ink)', opacity: 0.75 }}
        >
          Jeimer will be in touch within 24 hours, Mon–Fri AWST.
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
        {/* ── Referrer details ── */}
        <fieldset className="space-y-5">
          <legend
            className="font-lora font-bold mb-4 block"
            style={{ fontSize: '20px', color: 'var(--deep-ink)' }}
          >
            About you
          </legend>

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

            <Field id="referrerRole" label="Your role" required error={errors.referrerRole}>
              <div className="relative">
                <select
                  id="referrerRole"
                  name="referrerRole"
                  value={data.referrerRole}
                  onChange={(e) => set('referrerRole')(e.target.value)}
                  required
                  aria-required="true"
                  aria-describedby={errors.referrerRole ? 'referrerRole-error' : undefined}
                  aria-invalid={errors.referrerRole ? 'true' : undefined}
                  className="w-full font-sans rounded-lg appearance-none"
                  style={{
                    background: 'var(--off-white)',
                    border: `1.5px solid ${errors.referrerRole ? 'var(--warm-red)' : 'var(--warm-stone)'}`,
                    color: data.referrerRole ? 'var(--deep-ink)' : '#999',
                    fontSize: '15px',
                    padding: '12px 40px 12px 16px',
                    outline: 'none',
                  }}
                >
                  <option value="" disabled>Select one</option>
                  {roleOptions.map((role) => (
                    <option key={role} value={role}>{role}</option>
                  ))}
                </select>
                <ChevronDown
                  size={16}
                  className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
                  style={{ color: 'var(--warm-stone)' }}
                />
              </div>
            </Field>
          </div>

          <Field id="organisation" label="Organisation / practice name">
            <TextInput
              id="organisation"
              value={data.organisation}
              onChange={set('organisation')}
              placeholder="e.g. Perth Children's Hospital"
            />
          </Field>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Field id="referrerEmail" label="Your email" required error={errors.referrerEmail}>
              <TextInput
                id="referrerEmail"
                value={data.referrerEmail}
                onChange={set('referrerEmail')}
                placeholder="your@email.com"
                type="email"
                required
                error={!!errors.referrerEmail}
                describedBy={errors.referrerEmail ? 'referrerEmail-error' : undefined}
              />
            </Field>

            <Field id="referrerPhone" label="Your phone">
              <TextInput
                id="referrerPhone"
                value={data.referrerPhone}
                onChange={set('referrerPhone')}
                placeholder="0400 000 000"
                type="tel"
              />
            </Field>
          </div>
        </fieldset>

        <div
          className="my-6"
          style={{ borderTop: '1px solid var(--warm-stone)', opacity: 0.4 }}
        />

        {/* ── Client details ── */}
        <fieldset className="space-y-5">
          <legend
            className="font-lora font-bold mb-4 block"
            style={{ fontSize: '20px', color: 'var(--deep-ink)' }}
          >
            About the client
          </legend>

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

          <Field id="diagnosis" label="Primary diagnosis or condition" required error={errors.diagnosis}>
            <TextInput
              id="diagnosis"
              value={data.diagnosis}
              onChange={set('diagnosis')}
              placeholder="e.g. Cerebral palsy, spinal muscular atrophy"
              required
              error={!!errors.diagnosis}
              describedBy={errors.diagnosis ? 'diagnosis-error' : undefined}
            />
          </Field>

          <Field id="reason" label="Reason for referral" required error={errors.reason}>
            <div>
              <textarea
                id="reason"
                name="reason"
                value={data.reason}
                onChange={(e) => set('reason')(e.target.value)}
                placeholder="What are you hoping OT can help with? Goals, equipment needs, gaming access, school support — whatever's relevant."
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
        </fieldset>

        <div
          className="my-6"
          style={{ borderTop: '1px solid var(--warm-stone)', opacity: 0.4 }}
        />

        {/* ── NDIS & consent ── */}
        <fieldset className="space-y-5">
          <legend
            className="font-lora font-bold mb-4 block"
            style={{ fontSize: '20px', color: 'var(--deep-ink)' }}
          >
            NDIS & consent
          </legend>

          <Field id="ndisStatus" label="NDIS status" required error={errors.ndisStatus}>
            <div
              className="flex flex-wrap gap-4"
              role="radiogroup"
              aria-labelledby="ndisStatus-label"
              aria-describedby={errors.ndisStatus ? 'ndisStatus-error' : undefined}
            >
              <span id="ndisStatus-label" className="sr-only">NDIS status</span>
              {ndisOptions.map(({ value, label }) => (
                <label
                  key={value}
                  className="flex items-center gap-2 font-sans text-sm"
                  style={{ color: 'var(--deep-ink)' }}
                >
                  <input
                    type="radio"
                    name="ndisStatus"
                    value={value}
                    checked={data.ndisStatus === value}
                    onChange={() => set('ndisStatus')(value)}
                    aria-required="true"
                    className="accent-navy"
                    style={{ accentColor: 'var(--navy)', width: '16px', height: '16px' }}
                  />
                  {label}
                </label>
              ))}
            </div>
            {errors.ndisStatus && (
              <div
                role="alert"
                id="ndisStatus-error"
                className="flex items-center gap-1.5 font-sans mt-1"
                style={{ fontSize: '13px', color: 'var(--warm-red)' }}
              >
                <AlertCircle size={13} />
                {errors.ndisStatus}
              </div>
            )}
          </Field>

          <Field id="familyContacted" label="Has the family been contacted about this referral?" required error={errors.familyContacted}>
            <div
              className="flex flex-wrap gap-4"
              role="radiogroup"
              aria-labelledby="familyContacted-label"
              aria-describedby={errors.familyContacted ? 'familyContacted-error' : undefined}
            >
              <span id="familyContacted-label" className="sr-only">Has the family been contacted about this referral?</span>
              {['Yes', 'No'].map((label) => (
                <label
                  key={label}
                  className="flex items-center gap-2 font-sans text-sm"
                  style={{ color: 'var(--deep-ink)' }}
                >
                  <input
                    type="radio"
                    name="familyContacted"
                    value={label.toLowerCase()}
                    checked={data.familyContacted === label.toLowerCase()}
                    onChange={() => set('familyContacted')(label.toLowerCase())}
                    aria-required="true"
                    className="accent-navy"
                    style={{ accentColor: 'var(--navy)', width: '16px', height: '16px' }}
                  />
                  {label}
                </label>
              ))}
            </div>
            {errors.familyContacted && (
              <div
                role="alert"
                id="familyContacted-error"
                className="flex items-center gap-1.5 font-sans mt-1"
                style={{ fontSize: '13px', color: 'var(--warm-red)' }}
              >
                <AlertCircle size={13} />
                {errors.familyContacted}
              </div>
            )}
          </Field>

          <Field id="notes" label="Additional notes (optional)">
            <textarea
              id="notes"
              name="notes"
              value={data.notes}
              onChange={(e) => set('notes')(e.target.value)}
              placeholder="Anything else that would be helpful — school context, previous OT input, equipment already trialled, timing preferences..."
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

          {/* Consent checkbox */}
          <div>
            <label
              className="flex items-start gap-3 font-sans text-sm cursor-pointer"
              style={{ color: 'var(--deep-ink)' }}
            >
              <input
                type="checkbox"
                checked={data.consent}
                onChange={(e) => set('consent')(e.target.checked)}
                aria-required="true"
                aria-describedby={errors.consent ? 'consent-error' : undefined}
                aria-invalid={errors.consent ? 'true' : undefined}
                className="mt-0.5"
                style={{ accentColor: 'var(--navy)', width: '16px', height: '16px' }}
              />
              <span>
                I confirm that I have appropriate authority to share this information
                with Assured OT, and that the family has been informed where required.
                <span aria-hidden="true" style={{ color: 'var(--terracotta)' }}> *</span>
              </span>
            </label>
            {errors.consent && (
              <div
                role="alert"
                id="consent-error"
                className="flex items-center gap-1.5 font-sans mt-1"
                style={{ fontSize: '13px', color: 'var(--warm-red)' }}
              >
                <AlertCircle size={13} />
                {errors.consent}
              </div>
            )}
          </div>
        </fieldset>

        <p
          className="font-sans text-caption"
          style={{ color: 'var(--warm-stone)' }}
        >
          * Required fields. Information is kept confidential and used only to respond to your
          referral.
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

// ─── Quick reference panel ───────────────────────────────────────────────────
const quickRef = [
  {
    icon: Clock,
    label: 'Initial response',
    value: 'Within 24 hours',
    sub: 'Mon–Fri, AWST',
  },
  {
    icon: FileText,
    label: 'Report turnaround',
    value: '10 business days',
    sub: 'Plain English · NDIS-ready',
  },
  {
    icon: Users,
    label: 'Ages seen',
    value: '3 – 18',
    sub: 'Most work happens between 6 and 14',
  },
  {
    icon: MapPin,
    label: 'Service area',
    value: 'Perth metro + Mandurah',
    sub: 'Home, school, clinic visits',
  },
]

// ─── Page ────────────────────────────────────────────────────────────────────
export default function ReferralPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-32 pb-16"
        style={{ background: 'var(--sketch-cream)' }}
        aria-label="Referral information"
      >
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <RevealOnScroll>
              <div>
                <span
                  className="font-caveat text-xl block mb-3"
                  style={{ color: 'var(--terracotta)' }}
                >
                  sending a referral?
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
                  Plain answers. Same-day response.
                </h1>
                <p
                  className="font-sans mb-6"
                  style={{
                    fontSize: '17px',
                    lineHeight: 1.65,
                    color: 'var(--deep-ink)',
                    opacity: 0.8,
                  }}
                >
                  Whether you&apos;re a GP, paediatrician, school OT, speech pathologist,
                  physiotherapist, or hospital liaison — this form is the fastest way to
                  get a child into the queue.
                </p>
                <div
                  className="inline-flex items-center gap-2 font-sans text-sm px-3 py-1.5 rounded-full"
                  style={{
                    background: 'var(--navy)',
                    color: 'var(--sand-white)',
                  }}
                >
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ background: 'var(--terracotta)' }}
                    aria-hidden="true"
                  />
                  Currently accepting referrals · next intake June 2026
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={100}>
              <div
                className="p-6 rounded-card"
                style={{ background: 'var(--navy)' }}
                data-dark-bg
              >
                <h2
                  className="font-sans font-semibold text-sm uppercase tracking-wider mb-5"
                  style={{ color: 'var(--warm-stone)' }}
                >
                  Quick reference
                </h2>
                <div className="space-y-4">
                  {quickRef.map(({ icon: Icon, label, value, sub }) => (
                    <div key={label} className="flex items-start gap-3">
                      <Icon
                        size={16}
                        className="flex-shrink-0 mt-1"
                        style={{ color: 'var(--terracotta)' }}
                        aria-hidden="true"
                      />
                      <div>
                        <p
                          className="font-sans text-xs uppercase tracking-wider"
                          style={{ color: 'var(--warm-stone)' }}
                        >
                          {label}
                        </p>
                        <p
                          className="font-sans font-medium"
                          style={{ color: 'var(--sand-white)', fontSize: '15px' }}
                        >
                          {value}
                        </p>
                        <p
                          className="font-sans text-xs"
                          style={{ color: 'var(--sand)', opacity: 0.7 }}
                        >
                          {sub}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <MountainDivider opacity={0.25} />

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

      {/* CTA */}
      <section
        className="section-pad text-center"
        style={{ background: 'var(--sand)' }}
        aria-label="Get in touch"
      >
        <div className="container-content max-w-[580px] mx-auto">
          <RevealOnScroll>
            <h2
              className="font-lora font-bold mb-4"
              style={{ fontSize: '36px', color: 'var(--deep-ink)' }}
            >
              Rather talk it through first?
            </h2>
            <p
              className="font-sans mb-8"
              style={{ fontSize: '16px', lineHeight: 1.65, color: 'var(--deep-ink)', opacity: 0.75 }}
            >
              If this referral is complex, urgent, or you just want to check whether
              I&apos;m the right fit before sending the form — call or email. I reply same day.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:0865550142"
                className="btn-arrow inline-flex items-center font-sans font-medium px-6 py-3 rounded-btn transition-all duration-200"
                style={{
                  background: 'var(--navy)',
                  color: 'var(--sand-white)',
                  fontSize: '15px',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'var(--terracotta)' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'var(--navy)' }}
              >
                Call (08) 6555 0142 <span aria-hidden="true">→</span>
              </a>
              <a
                href="mailto:hello@assuredot.com.au"
                className="btn-arrow inline-flex items-center font-sans font-medium px-6 py-3 rounded-btn border-2 transition-all duration-200"
                style={{
                  borderColor: 'var(--navy)',
                  color: 'var(--navy)',
                  background: 'transparent',
                  fontSize: '15px',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'var(--navy)'; (e.currentTarget as HTMLElement).style.color = 'var(--sand-white)' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.color = 'var(--navy)' }}
              >
                Email Jeimer <span aria-hidden="true">→</span>
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  )
}
