'use client'

import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const [isExpanded, setIsExpanded] = useState(false)
  const [isOnDark, setIsOnDark] = useState(false)
  const pos = useRef({ x: -100, y: -100 })
  const current = useRef({ x: -100, y: -100 })
  const rafRef = useRef<number>()

  useEffect(() => {
    const el = cursorRef.current
    if (!el) return

    // Spring-follow with lag
    const animate = () => {
      const dx = pos.current.x - current.current.x
      const dy = pos.current.y - current.current.y
      current.current.x += dx * 0.15
      current.current.y += dy * 0.15
      el.style.left = `${current.current.x}px`
      el.style.top = `${current.current.y}px`
      rafRef.current = requestAnimationFrame(animate)
    }
    rafRef.current = requestAnimationFrame(animate)

    const onMove = (e: MouseEvent) => {
      pos.current.x = e.clientX
      pos.current.y = e.clientY

      // Check if hovering over a dark background element
      const target = e.target as Element
      const bg = target?.closest('[data-dark-bg]')
      setIsOnDark(!!bg)
    }

    const onEnterInteractive = () => setIsExpanded(true)
    const onLeaveInteractive = () => setIsExpanded(false)

    // Attach to interactive elements
    const attachHoverListeners = () => {
      const interactives = document.querySelectorAll('a, button, [role="button"], input, textarea, select, label')
      interactives.forEach(el => {
        el.addEventListener('mouseenter', onEnterInteractive)
        el.addEventListener('mouseleave', onLeaveInteractive)
      })
    }

    attachHoverListeners()
    window.addEventListener('mousemove', onMove)

    // Re-attach on DOM changes
    const observer = new MutationObserver(attachHoverListeners)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      window.removeEventListener('mousemove', onMove)
      observer.disconnect()
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      className={`cursor ${isExpanded ? 'expanded' : ''} ${isOnDark ? 'on-dark' : ''}`}
      aria-hidden="true"
    />
  )
}
