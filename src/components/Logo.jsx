import React from 'react'
import { motion } from 'framer-motion'

export default function Logo({ size = 32 }) {
  const glowId = React.useId()
  const gradId = React.useId()

  return (
    <div className="relative" style={{ width: size, height: size }} aria-label="SPANZ FLAMES logo">
      {/* Outer neon aura */}
      <motion.div
        className="absolute inset-0 rounded-full"
        initial={{ filter: 'blur(10px)', opacity: 0.7 }}
        animate={{
          opacity: [0.6, 0.9, 0.6],
          scale: [1, 1.06, 1],
          rotate: [0, 2, -2, 0],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          background:
            'conic-gradient(from 180deg at 50% 50%, rgba(147,51,234,0.55), rgba(59,130,246,0.55), rgba(251,146,60,0.55), rgba(147,51,234,0.55))',
        }}
      />

      {/* Inner glass circle */}
      <div className="absolute inset-0 rounded-full bg-white/50 dark:bg-white/10 backdrop-blur-sm ring-1 ring-black/5 dark:ring-white/10" />

      {/* Animated flame glyph */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        className="relative z-10"
        aria-hidden
      >
        <defs>
          <radialGradient id={glowId} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="1" />
            <stop offset="60%" stopColor="#a855f7" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.8" />
          </radialGradient>
          <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="50%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#fb923c" />
          </linearGradient>
          <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Core flame shape */}
        <motion.path
          d="M32 8c0 8-10 10-10 20 0 6 4 10 10 10s10-4 10-10c0-6-4-8-6-14 0 0 1 10-6 12-3-3 0-10 2-14z"
          fill={`url(#${gradId})`}
          filter="url(#softGlow)"
          initial={{ y: 0 }}
          animate={{ y: [0, -0.8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Inner flicker */}
        <motion.ellipse
          cx="32"
          cy="34"
          rx="6"
          ry="8"
          fill={`url(#${glowId})`}
          initial={{ opacity: 0.7, scale: 0.9 }}
          animate={{ opacity: [0.5, 0.9, 0.6], scale: [0.9, 1.05, 0.95] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Sparks */}
        {[{x:22,y:18},{x:42,y:16},{x:28,y:10}].map((s, i) => (
          <motion.circle
            key={i}
            cx={s.x}
            cy={s.y}
            r="1.8"
            fill={`url(#${gradId})`}
            initial={{ opacity: 0.6, y: 0 }}
            animate={{ opacity: [0.2, 0.9, 0.2], y: [-1.5, -3, -1.5] }}
            transition={{ duration: 2 + i * 0.3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.2 }}
          />
        ))}
      </svg>
    </div>
  )
}
