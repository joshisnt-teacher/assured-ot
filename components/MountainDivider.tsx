'use client'

import { useEffect, useRef } from 'react'

interface MountainDividerProps {
  className?: string
  flipped?: boolean
  opacity?: number
}

export default function MountainDivider({
  className = '',
  flipped = false,
  opacity = 0.3,
}: MountainDividerProps) {
  const pathRef1 = useRef<SVGPathElement>(null)
  const pathRef2 = useRef<SVGPathElement>(null)
  const pathRef3 = useRef<SVGPathElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const paths = [pathRef1.current, pathRef2.current, pathRef3.current].filter(Boolean)
    if (!paths.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            paths.forEach((path, i) => {
              if (path) {
                setTimeout(() => {
                  path.classList.add('drawn')
                }, i * 150)
              }
            })
            observer.disconnect()
          }
        })
      },
      { threshold: 0.15 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const mountainPath1 =
    'M0,60 C50,55 80,20 120,25 C145,28 155,50 175,45 C200,38 215,10 250,15 C275,18 285,45 310,40 C340,34 355,5 390,8 C420,11 430,38 460,35 C490,32 500,15 530,12 C560,9 575,35 610,30 C640,26 655,8 700,5 C735,3 755,30 790,28 C820,26 840,10 880,8 C910,6 930,28 960,26 C995,23 1010,5 1050,3 C1090,1 1110,25 1140,22 C1170,19 1190,5 1220,4 C1260,3 1280,20 1280,20 L1280,80 L0,80 Z'

  const mountainPath2 =
    'M0,70 C30,68 50,40 80,42 C100,43 115,60 140,58 C165,56 180,35 210,30 C240,25 255,50 285,48 C310,46 325,28 360,25 C395,22 410,50 440,48 C465,46 480,30 515,28 C545,26 560,48 595,46 C620,44 640,25 675,22 C705,20 720,42 755,40 C780,38 800,22 835,20 C870,18 885,40 920,38 C945,36 965,20 1000,18 C1030,16 1045,38 1080,36 C1110,34 1130,18 1165,16 C1200,14 1220,35 1260,33 C1280,32 1280,80 0,80 Z'

  const treeLine =
    'M320,60 L330,30 L340,60 M340,60 L348,38 L356,60 M500,58 L510,28 L520,58 M520,58 L527,40 L534,58 M700,55 L712,22 L724,55 M900,58 L910,32 L920,58'

  return (
    <div
      ref={containerRef}
      className={`w-full overflow-hidden ${className}`}
      style={{ height: '80px' }}
      aria-hidden="true"
      role="presentation"
    >
      <svg
        viewBox="0 0 1280 80"
        preserveAspectRatio="none"
        className="w-full h-full"
        style={{
          transform: flipped ? 'scaleY(-1)' : 'none',
        }}
      >
        {/* Back mountain range */}
        <path
          ref={pathRef1}
          d={mountainPath1}
          fill="none"
          stroke="var(--navy)"
          strokeWidth="1.2"
          strokeLinejoin="round"
          className="mountain-path"
          style={{ opacity: opacity * 0.6 }}
        />
        {/* Front mountain range */}
        <path
          ref={pathRef2}
          d={mountainPath2}
          fill="none"
          stroke="var(--navy)"
          strokeWidth="1.5"
          strokeLinejoin="round"
          className="mountain-path"
          style={{ opacity }}
        />
        {/* Tree silhouettes */}
        <path
          ref={pathRef3}
          d={treeLine}
          fill="none"
          stroke="var(--navy)"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mountain-path"
          style={{ opacity: opacity * 0.8 }}
        />
      </svg>
    </div>
  )
}
