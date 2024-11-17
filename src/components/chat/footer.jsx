import React from 'react'
import { cn } from '@/lib/utils'

export function FooterText({ className, ...props }) {
  return (
    <p
      className={cn(
        'px-2 text-center text-xs leading-normal text-muted-foreground',
        className
      )}
      {...props}
    >
      FinAI may provide inaccurate information and does not provide
      investment advice.
    </p>
  )
}
