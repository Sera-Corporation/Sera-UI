"use client"

import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface BlobEffectCardProps {
  icon: ReactNode
  title: string
  description: string
  onClick: () => void
  className?: string
  index?: number
  compact?: boolean
}

export function BlobEffectCard({
  icon,
  title,
  description,
  onClick,
  className,
  index = 0,
  compact = false,
}: BlobEffectCardProps) {
  // Alternate the blob positions based on index
  const isEven = index % 2 === 0

  return (
    <div
      onClick={onClick}
      className={cn(
        "relative overflow-hidden w-full rounded-3xl cursor-pointer text-2xl font-bold transition-all duration-300 bg-primary",
        compact ? "h-64" : "h-80",
        className,
      )}
    >
      <div className="z-10 absolute w-full h-full peer"></div>

      {/* Primary blob that expands on hover */}
      <div
        className={cn(
          "absolute peer-hover:w-[140%] peer-hover:h-[140%] w-32 h-44 rounded-full transition-all duration-500 bg-primary/80",
          isEven
            ? "peer-hover:-top-20 peer-hover:-left-16 -top-32 -left-16"
            : "peer-hover:-top-20 peer-hover:-right-16 -top-32 -right-16",
        )}
      ></div>

      {/* Secondary blob with content that appears on hover */}
      <div
        className={cn(
          "absolute flex flex-col text-xl items-end justify-end peer-hover:rounded-b-none peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full w-36 h-44 rounded-full transition-all duration-500 bg-primary/80",
          isEven
            ? "peer-hover:right-0 peer-hover:bottom-0 -bottom-32 -right-16"
            : "peer-hover:left-0 peer-hover:bottom-0 -bottom-32 -left-16",
        )}
      >
        <div className="p-6 text-center">
          <h3 className="text-xl font-bold mb-2 text-primary-foreground">{title}</h3>
          <p className="text-sm font-normal text-primary-foreground/90">{description}</p>
        </div>
      </div>

      {/* Default content */}
      <div className="w-full h-full flex flex-col items-center justify-center p-6 text-primary-foreground">
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
      </div>
    </div>
  )
}

