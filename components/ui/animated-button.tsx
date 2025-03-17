// components/ui/animated-button.tsx
"use client"

import * as React from "react"
import { useState } from "react"
import { cn } from "@/lib/utils"

interface AnimatedButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outline"
  size?: "default" | "sm" | "lg"
}

export const AnimatedButton = React.forwardRef<HTMLDivElement, AnimatedButtonProps>(
  ({ className, children, variant = "default", size = "default", ...props }, ref) => {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
      <div 
        className={cn(
          "cursor-pointer font-serif tracking-wider text-center relative overflow-hidden z-10 transition-all duration-500",
          size === "default" && "w-48 h-12 leading-[3rem]",
          size === "sm" && "w-36 h-10 leading-10 text-sm",
          size === "lg" && "w-60 h-14 leading-[3.5rem] text-lg",
          variant === "default" && "bg-[#e4c590] text-black",
          variant === "outline" && "bg-transparent text-[#e4c590] border border-[#e4c590]",
          isHovered && "text-white border border-[#e4c590]",
          className
        )}
        ref={ref}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      >
        {children}
        {[0, 1, 2, 3].map((index) => (
          <span 
            key={index}
            style={{
              position: 'absolute',
              width: '25%',
              height: '100%',
              backgroundColor: variant === "default" ? 'black' : '#e4c590',
              borderRadius: '50%',
              left: `${index * 25}%`,
              transform: isHovered ? 'translateY(0) scale(150%)' : 'translateY(150%)',
              transition: 'transform 0.5s',
              transitionDelay: `${index * 100}ms`,
              zIndex: -1,
            }}
          />
        ))}
      </div>
    )
  }
)

AnimatedButton.displayName = "AnimatedButton"