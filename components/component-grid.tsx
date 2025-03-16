"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import * as LucideIcons from "lucide-react"

import { cn } from "@/lib/utils"
import { type ComponentMeta, getComponentsByCategory } from "@/lib/component-metadata"

interface ComponentGridProps {
  category?: string
}

export const ComponentGrid = React.memo(({ category = "all" }: ComponentGridProps) => {
  // Filter components based on category
  const components = React.useMemo(() => {
    return getComponentsByCategory(category as any)
  }, [category])

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {components.map((component) => (
        <ComponentCard key={component.id} component={component} />
      ))}
    </div>
  )
})
ComponentGrid.displayName = "ComponentGrid"

const ComponentCard = React.memo(({ component }: { component: ComponentMeta }) => {
  const Icon = LucideIcons[component.icon as keyof typeof LucideIcons]

  return (
    <Link
      href={component.href}
      className={cn(
        "group relative rounded-lg border p-6 shadow-sm transition-all hover:shadow-md",
        component.isNew && "ring-2 ring-primary/20",
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
          {Icon && <Icon className="h-5 w-5 text-primary" />}
        </div>
        <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
      </div>
      <div className="mt-3">
        <div className="flex items-center gap-2">
          <h3 className="font-semibold">{component.name}</h3>
          {component.isNew && (
            <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">New</span>
          )}
        </div>
        <p className="mt-1 text-sm text-muted-foreground">{component.description}</p>
      </div>
    </Link>
  )
})
ComponentCard.displayName = "ComponentCard"

