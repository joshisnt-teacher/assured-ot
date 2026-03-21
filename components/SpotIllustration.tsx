interface SpotIllustrationProps {
  type: 'controller' | 'joystick' | 'wheelchair' | 'puzzle' | 'lightbulb' | 'mountain-tree'
  size?: number
  className?: string
}

export default function SpotIllustration({ type, size = 48, className = '' }: SpotIllustrationProps) {
  const paths: Record<string, JSX.Element> = {
    controller: (
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        aria-hidden="true"
        className={className}
      >
        {/* Game controller with accessibility star */}
        <rect x="8" y="16" width="32" height="18" rx="9" stroke="var(--navy)" strokeWidth="1.5" />
        <line x1="18" y1="25" x2="18" y2="21" stroke="var(--navy)" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="16" y1="23" x2="20" y2="23" stroke="var(--navy)" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="29" cy="22" r="1.5" fill="var(--navy)" />
        <circle cx="33" cy="25" r="1.5" fill="var(--navy)" />
        <circle cx="25" cy="25" r="1.5" fill="var(--navy)" />
        {/* Accessibility star on top */}
        <path
          d="M24 5 L25.2 9H29L26 11.5L27.2 15.5L24 13L20.8 15.5L22 11.5L19 9H22.8Z"
          stroke="var(--terracotta)"
          strokeWidth="1.2"
          fill="none"
          strokeLinejoin="round"
        />
      </svg>
    ),

    joystick: (
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        aria-hidden="true"
        className={className}
      >
        {/* Child's hand on a joystick */}
        <ellipse cx="24" cy="36" rx="10" ry="5" stroke="var(--navy)" strokeWidth="1.5" />
        <rect x="21" y="20" width="6" height="16" rx="3" stroke="var(--navy)" strokeWidth="1.5" />
        <circle cx="24" cy="17" r="5" stroke="var(--navy)" strokeWidth="1.5" />
        {/* Small fingers */}
        <path d="M14 34 Q12 32 13 29 Q14 27 16 28" stroke="var(--navy)" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        <path d="M34 34 Q36 32 35 29 Q34 27 32 28" stroke="var(--navy)" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        {/* Stars/joy */}
        <path d="M8 12 L9 10 L10 12 L8 11 L10 11 Z" fill="var(--terracotta)" />
        <path d="M38 8 L39 6 L40 8 L38 7 L40 7 Z" fill="var(--terracotta)" />
      </svg>
    ),

    wheelchair: (
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        aria-hidden="true"
        className={className}
      >
        {/* Wheelchair in motion — slightly tilted for dynamism */}
        <circle cx="14" cy="36" r="7" stroke="var(--navy)" strokeWidth="1.5" />
        <circle cx="35" cy="36" r="5" stroke="var(--navy)" strokeWidth="1.5" />
        {/* Seat */}
        <path d="M20 29 L30 29 L32 36" stroke="var(--navy)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        {/* Back */}
        <path d="M20 29 L18 20 L24 18" stroke="var(--navy)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        {/* Person head */}
        <circle cx="26" cy="14" r="4" stroke="var(--navy)" strokeWidth="1.5" />
        {/* Motion lines */}
        <line x1="6" y1="24" x2="2" y2="24" stroke="var(--terracotta)" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="7" y1="28" x2="3" y2="28" stroke="var(--terracotta)" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="6" y1="32" x2="2" y2="32" stroke="var(--terracotta)" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),

    puzzle: (
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        aria-hidden="true"
        className={className}
      >
        {/* Puzzle piece with circuit pattern inside */}
        <path
          d="M12 12 L24 12 Q24 8 28 8 Q32 8 32 12 L36 12 L36 24 Q40 24 40 28 Q40 32 36 32 L36 36 L24 36 Q24 40 20 40 Q16 40 16 36 L12 36 L12 24 Q8 24 8 20 Q8 16 12 16 Z"
          stroke="var(--navy)"
          strokeWidth="1.5"
          fill="none"
        />
        {/* Circuit dots inside */}
        <circle cx="20" cy="24" r="1.5" fill="var(--terracotta)" />
        <circle cx="28" cy="24" r="1.5" fill="var(--terracotta)" />
        <circle cx="24" cy="20" r="1.5" fill="var(--terracotta)" />
        <line x1="20" y1="24" x2="28" y2="24" stroke="var(--navy)" strokeWidth="1" opacity="0.5" />
        <line x1="24" y1="20" x2="24" y2="28" stroke="var(--navy)" strokeWidth="1" opacity="0.5" />
      </svg>
    ),

    lightbulb: (
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        aria-hidden="true"
        className={className}
      >
        {/* Lightbulb within a mountain peak */}
        <path
          d="M6 40 L24 10 L42 40 Z"
          stroke="var(--navy)"
          strokeWidth="1.5"
          fill="none"
          strokeLinejoin="round"
        />
        {/* Lightbulb inside */}
        <path
          d="M24 24 Q21 27 21 30 L27 30 Q27 27 24 24 Z"
          stroke="var(--navy)"
          strokeWidth="1.2"
          fill="none"
        />
        <line x1="21" y1="32" x2="27" y2="32" stroke="var(--navy)" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="22" y1="34" x2="26" y2="34" stroke="var(--navy)" strokeWidth="1.2" strokeLinecap="round" />
        {/* Rays */}
        <line x1="24" y1="18" x2="24" y2="21" stroke="var(--terracotta)" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="20" y1="20" x2="21.5" y2="22" stroke="var(--terracotta)" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="28" y1="20" x2="26.5" y2="22" stroke="var(--terracotta)" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),

    'mountain-tree': (
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        aria-hidden="true"
        className={className}
      >
        {/* Mountain with pine tree */}
        <path d="M4 40 L20 16 L36 40 Z" stroke="var(--navy)" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
        <path d="M26 30 L36 12 L46 30 Z" stroke="var(--navy)" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
        {/* Pine tree */}
        <path d="M10 40 L10 32" stroke="var(--navy)" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M7 36 L10 30 L13 36 Z" stroke="var(--navy)" strokeWidth="1.2" fill="none" strokeLinejoin="round" />
        <path d="M6.5 33 L10 27 L13.5 33 Z" stroke="var(--navy)" strokeWidth="1.2" fill="none" strokeLinejoin="round" />
        {/* Snow cap */}
        <path d="M19 19 L20 16 L21 19" stroke="var(--terracotta)" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  }

  return paths[type] || null
}
