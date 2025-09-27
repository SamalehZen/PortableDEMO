"use client"

import { useMemo } from 'react'

export type RotaLeVariant = 'ring' | 'square' | 'dots'

export interface RotaLeProps {
  size?: number
  speedRps?: number
  variant?: RotaLeVariant
  color?: string
  thickness?: number
}

export default function RotaLe({
  size = 160,
  speedRps = 0.8,
  variant = 'ring',
  color = '#2563eb',
  thickness = 8,
}: RotaLeProps) {
  const duration = useMemo(() => `${1 / Math.max(0.05, speedRps)}s`, [speedRps])

  if (variant === 'ring') {
    const ringSize = size
    const border = `${thickness}px solid rgba(148,163,184,.25)`
    const borderTop = `${thickness}px solid ${color}`
    return (
      <div
        style={{
          width: ringSize,
          height: ringSize,
          borderRadius: '50%',
          border,
          borderTop,
          animation: `rotale-spin ${duration} linear infinite` as any,
        }}
        aria-label="Rota-le ring loader"
      />
    )
  }

  if (variant === 'square') {
    const s = size
    return (
      <div
        style={{
          width: s,
          height: s,
          position: 'relative',
          transformStyle: 'preserve-3d',
          animation: `rotale-tilt ${duration} linear infinite` as any,
        }}
        aria-label="Rota-le square loader"
      >
        <div
          style={{
            position: 'absolute',
            inset: thickness,
            border: `${thickness}px solid ${color}`,
            borderRadius: 12,
          }}
        />
      </div>
    )
  }

  // dots
  const dot = {
    width: thickness * 2,
    height: thickness * 2,
    borderRadius: '50%',
    background: color,
  } as const

  const radius = size / 2 - thickness * 2

  return (
    <div
      style={{ width: size, height: size, position: 'relative' }}
      aria-label="Rota-le dots loader"
    >
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
        const angle = (i / 8) * Math.PI * 2
        const x = Math.cos(angle) * radius + size / 2 - thickness
        const y = Math.sin(angle) * radius + size / 2 - thickness
        const delay = i * (1 / 8) * (1 / Math.max(0.05, speedRps))
        return (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: x,
              top: y,
              ...dot,
              opacity: 0.2,
              animation: `rotale-pulse ${duration} linear infinite`,
              animationDelay: `${delay}s`,
            }}
          />
        )
      })}
    </div>
  )
}
