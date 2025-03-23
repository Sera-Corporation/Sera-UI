"use client"

import { cn } from "@/lib/utils"
import type { ReactNode } from "react"
import { useState } from "react"

interface PerspectiveCardProps {
  icon: ReactNode
  title: string
  description: string
  onClick: () => void
  bgColor: string
  index: number
}

export function PerspectiveCard({ icon, title, description, onClick, bgColor, index }: PerspectiveCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  // Calculate rotation based on index for varied appearance
  const baseRotation = index % 3 === 0 ? 2 : index % 3 === 1 ? -2 : 0

  return (
    <div
      className="perspective-container h-[280px] w-full cursor-pointer"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={cn(
          "relative h-full w-full rounded-xl transition-all duration-500 preserve-3d",
          isHovered ? "rotate-y-180" : `rotate-x-${baseRotation} rotate-y-${baseRotation}`,
        )}
      >
        {/* Front face */}
        <div
          className={cn(
            "absolute inset-0 backface-hidden rounded-xl p-6 flex flex-col items-center justify-center text-center",
            bgColor,
          )}
        >
          <div className="text-white mb-4">{icon}</div>
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-sm text-white/80">{description}</p>
        </div>

        {/* Back face */}
        <div className="absolute inset-0 backface-hidden rounded-xl p-6 flex flex-col items-center justify-center text-center bg-background border-2 rotate-y-180">
          <h3 className="text-xl font-bold mb-4">{title}</h3>
          <p className="text-sm text-muted-foreground mb-6">{description}</p>
          <div className="px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium">
            View Layouts
          </div>
        </div>
      </div>
    </div>
  )
}

