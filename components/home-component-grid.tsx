import Link from "next/link"
import { ArrowRight } from "lucide-react"
import * as LucideIcons from "lucide-react"

import { cn } from "@/lib/utils"
import type { ComponentMeta } from "@/lib/component-metadata"

// Only show a handful of popular components on the homepage
const popularComponents: ComponentMeta[] = [
  {
    id: "buttons",
    name: "Buttons",
    description: "Interactive elements for user actions",
    icon: "ArrowRight",
    href: "/components/buttons",
    category: "inputs",
  },
  {
    id: "cards",
    name: "Cards",
    description: "Containers for related content and actions",
    icon: "SquareStack",
    href: "/components/cards",
    category: "layout",
  },
  {
    id: "modals",
    name: "Modals",
    description: "Dialogs that appear on top of the main content",
    icon: "Layers",
    href: "/components/modals",
    category: "feedback",
  },
  {
    id: "forms",
    name: "Forms",
    description: "Components for collecting user input",
    icon: "FormInput",
    href: "/components/forms",
    category: "inputs",
  },
  {
    id: "notifications",
    name: "Notifications",
    description: "Temporary messages that appear in response to user actions",
    icon: "BellRing",
    href: "/components/notifications",
    category: "feedback",
    isNew: true,
    version: "1.1",
  },
  {
    id: "tabs",
    name: "Tabs",
    description: "Organize content into selectable sections",
    icon: "LayoutGrid",
    href: "/components/tabs",
    category: "navigation",
    isNew: true,
    version: "1.1",
  },
]

export function HomeComponentGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
      {popularComponents.map((component) => (
        <ComponentCard key={component.id} component={component} />
      ))}
    </div>
  )
}

function ComponentCard({ component }: { component: ComponentMeta }) {
  const Icon = LucideIcons[component.icon as keyof typeof LucideIcons]

  return (
    <Link
      href={`/components?category=${component.category}#${component.id}`}
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
}

