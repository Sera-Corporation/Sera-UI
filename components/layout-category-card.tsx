"use client"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface LayoutCategoryCardProps {
  icon: ReactNode
  title: string
  description: string
  onClick: () => void
  className?: string
  featured?: boolean
}

export function LayoutCategoryCard({
  icon,
  title,
  description,
  onClick,
  className,
  featured = false,
}: LayoutCategoryCardProps) {
  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault()
        onClick()
      }}
      className={cn("group relative block h-full transition-all duration-300 hover:scale-[0.98]", className)}
    >
      <span
        className={cn(
          "absolute inset-0 border-2 border-dashed rounded-3xl dark:border-gray-700",
          featured ? "border-primary/70 dark:border-primary/40" : "border-black",
        )}
      ></span>

      <div
        className={cn(
          "relative flex h-full transform items-end rounded-3xl border-2 dark:border-gray-700 bg-background transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2",
          featured ? "border-primary/70 dark:border-primary/40" : "border-black",
        )}
      >
        <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
          {icon}
          <h2 className={cn("mt-4 text-xl font-medium", featured && "text-primary")}>{title}</h2>
        </div>

        <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
          <h3 className={cn("mt-4 text-xl font-medium", featured && "text-primary")}>{title}</h3>

          <p className="mt-4 text-sm sm:text-base text-muted-foreground">{description}</p>

          <p className={cn("mt-8 font-bold", featured && "text-primary")}>View Details</p>
        </div>
      </div>
    </a>
  )
}

