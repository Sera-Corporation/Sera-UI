"use client"

import { cn } from "@/lib/utils"
import type { ReactNode } from "react"
import { Check } from "lucide-react"

interface ProductStyleCardProps {
  icon: ReactNode
  title: string
  description: string
  features?: string[]
  onClick: () => void
  className?: string
}

export function ProductStyleCard({
  icon,
  title,
  description,
  features = [],
  onClick,
  className,
}: ProductStyleCardProps) {
  // If no features are provided, create some from the description
  const cardFeatures = features.length > 0 ? features : description.split(". ").filter((s) => s.length > 0)

  return (
    <div
      onClick={onClick}
      className={cn(
        "product-card w-full rounded-md shadow-xl overflow-hidden z-[100] relative cursor-pointer snap-start shrink-0 py-8 px-6 bg-white dark:bg-gray-800 flex flex-col items-center justify-center gap-3 transition-all duration-300 group",
        className,
      )}
    >
      <div className="para uppercase text-center leading-none z-40">
        <p
          style={{
            WebkitTextStroke: "1px rgb(207, 205, 205)",
            WebkitTextFillColor: "transparent",
          }}
          className="z-10 font-bold text-lg -mb-5 tracking-wider text-gray-500"
        >
          {title}
        </p>
        <p className="font-bold text-xl tracking-wider text-primary z-30">{title}</p>
      </div>

      <div className="w-[180px] aspect-square relative z-20 after:absolute after:h-1 after:w-full after:opacity-0 after:bg-primary after:top-8 after:left-0 after:group-hover:opacity-100 after:translate-x-1/2 after:translate-y-1/2 after:-z-20 after:group-hover:w-full after:transition-all after:duration-300 after:group-hover:origin-right after:group-hover:-translate-x-1/2 group-hover:translate-x-1/2 transition-all duration-300 flex items-center justify-center">
        <div className="text-primary w-24 h-24">{icon}</div>

        <div className="tooltips absolute top-0 left-0 -translate-x-[150%] p-2 flex flex-col items-start gap-4 transition-all duration-300 group-hover:-translate-x-full">
          <p className="text-primary font-semibold text-xl uppercase group-hover:delay-1000 transition-all opacity-0 group-hover:opacity-100 group-hover:transition-all group-hover:duration-500">
            {title}
          </p>
          <ul className="flex flex-col items-start gap-2">
            {cardFeatures.map((feature, index) => (
              <li
                key={index}
                className={`inline-flex gap-2 items-center justify-center group-hover:delay-${(index + 2) * 100} transition-all opacity-0 group-hover:opacity-100 group-hover:transition-all group-hover:duration-500`}
              >
                <Check className="h-3 w-3 text-primary" />
                <p className="text-xs font-semibold text-primary">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

