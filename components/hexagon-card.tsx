"use client"

import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface HexagonCardProps {
  icon: ReactNode
  title: string
  description: string
  onClick: () => void
  accentColor: "primary" | "secondary" | "accent"
  index: number
}

export function HexagonCard({ icon, title, description, onClick, accentColor = "primary", index }: HexagonCardProps) {
  // Determine offset for staggered layout
  const isEven = index % 2 === 0

  // Map accent color to actual color classes
  const accentClasses = {
    primary: "border-primary/70 text-primary",
    secondary: "border-pink-500/70 text-pink-500",
    accent: "border-purple-500/70 text-purple-500",
  }

  const borderColor = accentClasses[accentColor].split(" ")[0]
  const textColor = accentClasses[accentColor].split(" ")[1]

  return (
    <div
      className={cn(
        "relative w-[280px] h-[320px] cursor-pointer transition-transform duration-300 hover:scale-[1.03]",
        isEven ? "mt-0" : "mt-12",
      )}
      onClick={onClick}
    >
      {/* Hexagon shape with clip-path */}
      <div
        className="absolute inset-0 bg-background border-2 rounded-lg overflow-hidden"
        style={{
          clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
          borderColor: `var(--${borderColor.split("-")[1]})`,
        }}
      >
        {/* Content container */}
        <div className="absolute inset-0 p-6 flex flex-col items-center justify-center text-center">
          <div className={cn("mb-4", textColor)}>{icon}</div>
          <h3 className={cn("text-xl font-bold mb-2", textColor)}>{title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-3">{description}</p>

          <div
            className={cn(
              "mt-4 px-4 py-2 rounded-full text-sm font-medium opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0",
              `bg-${accentColor} text-${accentColor}-foreground`,
            )}
          >
            Explore {title}
          </div>
        </div>
      </div>

      {/* Decorative background hexagon */}
      <div
        className={cn("absolute inset-0 -z-10 translate-x-2 translate-y-2 rounded-lg", `bg-${accentColor}/10`)}
        style={{
          clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
        }}
      ></div>
    </div>
  )
}

