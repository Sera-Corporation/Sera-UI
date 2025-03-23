export type LayoutCategory =
  | "navbar"
  | "hero"
  | "footer"
  | "grid"
  | "form"
  | "pricing"
  | "testimonial"
  | "feature"
  | "cta"
  | "stats"
  | "gallery"
  | "faq"
  | "all"

export interface LayoutMeta {
  id: string
  name: string
  description: string
  icon: keyof typeof import("lucide-react")
  href: string
  category: LayoutCategory
  isNew?: boolean
  version?: string
}

export const layoutMetadata: LayoutMeta[] = [
  {
    id: "simple-navbar",
    name: "Simple Navbar",
    description: "A clean, responsive navigation bar with logo and links",
    icon: "Menu",
    href: "/layouts/simple-navbar",
    category: "navbar",
    isNew: true,
  },
  {
    id: "centered-hero",
    name: "Centered Hero",
    description: "A centered hero section with heading, text, and call-to-action buttons",
    icon: "Layout",
    href: "/layouts/centered-hero",
    category: "hero",
    isNew: true,
  },
  {
    id: "split-hero",
    name: "Split Hero",
    description: "A hero section with content on one side and an image on the other",
    icon: "LayoutPanelLeft",
    href: "/layouts/split-hero",
    category: "hero",
    isNew: true,
  },
  {
    id: "simple-footer",
    name: "Simple Footer",
    description: "A clean footer with links and copyright information",
    icon: "AlignJustify",
    href: "/layouts/simple-footer",
    category: "footer",
    isNew: true,
  },
  {
    id: "multi-column-footer",
    name: "Multi-Column Footer",
    description: "A footer with multiple columns of links and information",
    icon: "Columns",
    href: "/layouts/multi-column-footer",
    category: "footer",
    isNew: true,
  },
  {
    id: "responsive-grid",
    name: "Responsive Grid",
    description: "A responsive grid layout for displaying cards or content",
    icon: "LayoutGrid",
    href: "/layouts/responsive-grid",
    category: "grid",
    isNew: true,
  },
  {
    id: "contact-form",
    name: "Contact Form",
    description: "A contact form with validation and submission handling",
    icon: "MessageSquare",
    href: "/layouts/contact-form",
    category: "form",
    isNew: true,
  },
  {
    id: "signup-form",
    name: "Signup Form",
    description: "A signup form with validation and submission handling",
    icon: "UserPlus",
    href: "/layouts/signup-form",
    category: "form",
    isNew: true,
  },
  {
    id: "split-auth-form",
    name: "Split Screen Auth Form",
    description: "A responsive authentication form with a split-screen layout featuring an image and form side-by-side",
    icon: "UserPlus",
    href: "/layouts/split-auth-form",
    category: "form",
    isNew: true,
  },
]

export function getLayoutsByCategory(category: LayoutCategory): LayoutMeta[] {
  if (category === "all") {
    return layoutMetadata
  }
  return layoutMetadata.filter((layout) => layout.category === category)
}

