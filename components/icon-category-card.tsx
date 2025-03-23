"use client"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface IconCategoryCardProps {
  icon: ReactNode
  title: string
  onClick: () => void
  className?: string
}

export function IconCategoryCard({ icon, title, onClick, className }: IconCategoryCardProps) {
  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault()
        onClick()
      }}
      className={cn("group relative block h-32 sm:h-40", className)}
    >
      <span className="absolute inset-0 border-2 border-dashed border-black rounded-3xl dark:border-gray-700"></span>

      <div className="relative flex h-full transform items-center justify-center rounded-3xl border-2 border-black dark:border-gray-700 bg-background transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
        <div className="flex flex-col items-center justify-center p-4 transition-opacity group-hover:opacity-0">
          {icon}
        </div>

        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100 p-2">
          <h3 className="text-center text-lg font-medium break-words">{title}</h3>
        </div>
      </div>
    </a>
  )
}

