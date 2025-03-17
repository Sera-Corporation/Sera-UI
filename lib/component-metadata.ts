export type ComponentCategory = "all" | "inputs" | "display" | "feedback" | "navigation" | "layout"

export interface ComponentMeta {
  id: string
  name: string
  description: string
  icon: keyof typeof import("lucide-react")
  href: string
  category: ComponentCategory
  isNew?: boolean
  version?: string
}

export const componentMetadata: ComponentMeta[] = [
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
    id: "alerts",
    name: "Alerts",
    description: "Messages that communicate information to the user",
    icon: "AlertCircle",
    href: "/components/alerts",
    category: "feedback",
  },
  {
    id: "navigation",
    name: "Navigation",
    description: "Components for navigating between pages and sections",
    icon: "LayoutGrid",
    href: "/components/navigation",
    category: "navigation",
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
    id: "tooltips",
    name: "Tooltips",
    description: "Contextual information shown on hover",
    icon: "MessageSquare",
    href: "/components/tooltips",
    category: "feedback",
  },
  {
    id: "badges",
    name: "Badges",
    description: "Small status descriptors for UI elements",
    icon: "Bell",
    href: "/components/badges",
    category: "display",
  },
  {
    id: "accordions",
    name: "Accordions",
    description: "Vertically stacked sections that can be expanded/collapsed",
    icon: "SlidersHorizontal",
    href: "/components/accordions",
    category: "display",
  },
  {
    id: "sliders",
    name: "Sliders",
    description: "Controls for selecting a value from a range",
    icon: "Sliders",
    href: "/components/sliders",
    category: "inputs",
  },
  // New components for v1.1
  {
    id: "dropdowns",
    name: "Animated Dropdowns",
    description: "Interactive dropdown menus with smooth animations",
    icon: "ChevronDown",
    href: "/components/dropdowns",
    category: "navigation",
    isNew: true,
    version: "1.1",
  },
  {
    id: "progress",
    name: "Progress Bars",
    description: "Visual indicators of progress or loading state",
    icon: "BarChart2",
    href: "/components/progress",
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
    id: "floating-action",
    name: "Floating Action Buttons",
    description: "Prominent buttons that float above the UI for primary actions",
    icon: "MousePointer",
    href: "/components/floating-action",
    category: "inputs",
    isNew: true,
    version: "1.1",
  },
  {
    id: "animated-button", 
    name: "Animated Button",
    description: "Button with animated circle reveal effect on hover",
    icon: "MousePointer",
    href: "/components/animated-button",
    category: "inputs",
    isNew: true,
    version: "1.4",
  },
  {
    id: "squarecard",
    name: "Square Card",
    description: "A square card with logo, title, and supporter count",
    icon: "Square",
    href: "/components/squarecard",
    category: "display",
    isNew: true,
    version: "1.4",
  },
  {
    id: "authbuttons",
    name: "Auth Button",
    description: "Authentication Buttons with hover effect.",
    icon: "Square",
    href: "/components/authbuttons",
    category: "navigation",
    isNew: true,
    version: "1.4",
  },
  {
    id: "eBookCard",
    name: "Icon Card",
    description: "Icon Card with title and description",
    icon: "Square",
    href: "/components/ebookcard",
    category: "layout",
    isNew: true,
    version: "1.4",
  },
]

export function getComponentsByCategory(category: ComponentCategory): ComponentMeta[] {
  if (category === "all") {
    return componentMetadata
  }

  return componentMetadata.filter((component) => component.category === category)
}

export function getNewComponents(): ComponentMeta[] {
  return componentMetadata.filter((component) => component.isNew)
}

