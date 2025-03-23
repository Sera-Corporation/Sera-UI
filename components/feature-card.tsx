import type * as React from "react"
import type { LucideIcon } from "lucide-react"
import * as LucideIcons from "lucide-react"

import { cn } from "@/lib/utils"

interface FeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description: string
  icon: string
}

export function FeatureCard({ title, description, icon, className, ...props }: FeatureCardProps) {
  const Icon = LucideIcons[icon as keyof typeof LucideIcons] as LucideIcon

  return (
    <div className={cn("relative overflow-hidden rounded-lg border bg-background p-6", className)} {...props}>
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
        {Icon && <Icon className="h-6 w-6 text-primary" />}
      </div>
      <div className="mt-4 space-y-2">
        <h3 className="font-bold">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}

