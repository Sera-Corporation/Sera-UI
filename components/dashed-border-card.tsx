"use client"

import type React from "react"
import { cn } from "@/lib/utils"

interface DashedBorderCardProps {
  icon: React.ReactNode
  title: string
  description: string
  onClick?: () => void
  className?: string
}

export function DashedBorderCard({ icon, title, description, onClick, className }: DashedBorderCardProps) {
  return (
    <div
      className={cn("group relative block h-48 sm:h-56 lg:h-64", className)}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === "Space") {
          onClick?.()
        }
      }}
    >
      <span className="absolute inset-0 border-2 border-dashed border-primary/70 rounded-md"></span>

      <div className="relative flex h-full transform items-center justify-center border-2 border-primary bg-background transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2 rounded-md">
        {/* Initial view - centered icon and title */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 transition-opacity group-hover:opacity-0 sm:p-5">
          <div className="mb-3">{icon}</div>
          <h2 className="text-lg font-medium sm:text-xl text-center">{title}</h2>
        </div>

        {/* Hover view - description */}
        <div className="absolute inset-0 p-4 opacity-0 transition-opacity group-hover:opacity-100 sm:p-5 flex flex-col">
          <h3 className="text-lg font-medium sm:text-xl mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground flex-grow overflow-y-auto">{description}</p>
          <p className="mt-3 font-bold text-primary text-sm">Explore</p>
        </div>
      </div>
    </div>
  )
}

