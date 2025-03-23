"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

type AnimationType = "fade-in" | "fade-up" | "slide-in-right" | "slide-in-left" | "zoom-in"

interface AnimatedOnScrollProps {
  children: React.ReactNode
  animation?: AnimationType
  duration?: number
  delay?: number
  threshold?: number
  className?: string
  once?: boolean
}

export function AnimatedOnScroll({
  children,
  animation = "fade-in",
  duration = 0.5,
  delay = 0,
  threshold = 0.1,
  className,
  once = true,
}: AnimatedOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once && ref.current) {
            observer.unobserve(ref.current)
          }
        } else if (!once) {
          setIsVisible(false)
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold, once])

  const getAnimationClass = () => {
    if (!isVisible) {
      switch (animation) {
        case "fade-in":
          return "opacity-0"
        case "fade-up":
          return "opacity-0 translate-y-8"
        case "slide-in-right":
          return "opacity-0 translate-x-8"
        case "slide-in-left":
          return "opacity-0 -translate-x-8"
        case "zoom-in":
          return "opacity-0 scale-95"
        default:
          return "opacity-0"
      }
    }
    return "opacity-100 translate-y-0 translate-x-0 scale-100"
  }

  return (
    <div
      ref={ref}
      className={cn(getAnimationClass(), "transition-all will-change-transform", className)}
      style={{
        transitionDuration: `${duration}s`,
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  )
}

