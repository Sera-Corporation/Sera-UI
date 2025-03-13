"use client"

import type * as React from "react"
import { motion, type Variant } from "framer-motion"

import { cn } from "@/lib/utils"

interface AnimatedContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  initial?: Variant
  animate?: Variant
  exit?: Variant
  transition?: {
    duration?: number
    delay?: number
    ease?: string | number[]
  }
  className?: string
}

export function AnimatedContainer({
  children,
  initial = { opacity: 0, y: 20 },
  animate = { opacity: 1, y: 0 },
  exit = { opacity: 0, y: 20 },
  transition = { duration: 0.3 },
  className,
  ...props
}: AnimatedContainerProps) {
  return (
    <motion.div
      initial={initial}
      animate={animate}
      exit={exit}
      transition={transition}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}

