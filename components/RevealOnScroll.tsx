'use client'

import { useEffect, useRef, useState, ReactNode } from 'react'

interface RevealOnScrollProps {
  children: ReactNode
  className?: string
  delay?: number
  threshold?: number
}

export default function RevealOnScroll({
  children,
  className = '',
  delay = 0,
  threshold = 0.15,
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Reduced motion: show immediately, no movement
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const timer = setTimeout(() => setVisible(true), delay)
          observer.disconnect()
          return () => clearTimeout(timer)
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay, threshold])

  return (
    <div
      ref={ref}
      data-motion
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 400ms ease-out ${delay}ms, transform 400ms ease-out ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
