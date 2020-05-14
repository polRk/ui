import { cn } from '@bem-react/classname'
import React from 'react'
import './Spinner.sass'

interface SpinnerProps {
  size: number
  thickness: number
  className?: string
}

const Spinner: React.FC<SpinnerProps> = ({ size, thickness, className }) => {
  const strokeDasharray = Math.PI * 2 * (size / 2 - thickness / 2)
  const strokeDashoffset = strokeDasharray * 0.8

  return (
    <svg
      height={size}
      width={size}
      viewBox={[0, 0, size, size].join(' ')}
      className={cn('Spinner')(null, [className])}
      role="img"
    >
      <circle
        role="presentation"
        cx={size / 2}
        cy={size / 2}
        r={size / 2 - thickness / 2}
        fill="none"
        strokeWidth={thickness}
        strokeDasharray={strokeDasharray}
        strokeDashoffset={strokeDashoffset}
        strokeLinecap="round"
      />
    </svg>
  )
}
Spinner.defaultProps = {
  size: 24,
  thickness: 2,
}

export { Spinner }
