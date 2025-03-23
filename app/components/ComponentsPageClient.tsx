"use client"

import { useRouter } from "next/navigation"
import { useMemo, useEffect } from "react"
import * as LucideIcons from "lucide-react"

import { Button } from "@/components/ui/button"
import { AnimatedOnScroll } from "@/components/animated-on-scroll"
import { DashedBorderCard } from "@/components/dashed-border-card"

// Define the categories with their metadata
const categories = [
  {
    id: "inputs",
    title: "Input Components",
    description:
      "Form controls and interactive elements for user input, including text fields, buttons, checkboxes, radio buttons, and select menus.",
    icon: "FormInput",
  },
  {
    id: "display",
    title: "Display Components",
    description:
      "Components for displaying content and information, including cards, tables, lists, avatars, and badges.",
    icon: "LayoutGrid",
  },
  {
    id: "feedback",
    title: "Feedback Components",
    description:
      "Components that provide feedback to user actions, including alerts, toasts, progress indicators, skeletons, and spinners.",
    icon: "Bell",
  },
  {
    id: "navigation",
    title: "Navigation Components",
    description:
      "Components for navigating between pages and sections, including menus, tabs, breadcrumbs, pagination, and sidebars.",
    icon: "Navigation",
  },
  {
    id: "layout",
    title: "Layout Components",
    description:
      "Components for structuring and organizing content, including containers, grids, dividers, accordions, and sections.",
    icon: "Layout",
  },
]

export default function ComponentsPageClient() {
  const router = useRouter()

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleCategoryClick = (categoryId: string) => {
    router.push(`/components/${categoryId}`)
  }

  // Featured components - a subset of all components
  const featuredCategories = useMemo(() => {
    return categories.slice(0, 4)
  }, [])

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <AnimatedOnScroll animation="fade-in" duration={0.7}>
        <div className="rounded-lg border bg-card p-8 text-card-foreground shadow-sm">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h1 className="text-4xl font-bold tracking-tight mb-4">Component Collection</h1>
              <p className="text-xl text-muted-foreground mb-6">
                Beautifully designed, accessible components ready to be integrated into your projects. Save development
                time with our pre-built, customizable UI components.
              </p>
              <Button size="lg" onClick={() => router.push("/components/inputs")}>
                Explore Input Components
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {featuredCategories.map((category) => {
                const Icon = LucideIcons[category.icon as keyof typeof LucideIcons]
                return (
                  <div
                    key={category.id}
                    className="flex flex-col items-center justify-center p-6 rounded-lg border bg-background text-center"
                  >
                    {Icon && <Icon className="h-10 w-10 mb-3 text-primary" />}
                    <h3 className="font-medium">{category.title}</h3>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </AnimatedOnScroll>

      <AnimatedOnScroll animation="fade-up" delay={0.1}>
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold tracking-tight">Browse Categories</h2>
            <Button variant="outline" onClick={() => router.push("/components/all")}>
              View All Components
            </Button>
          </div>
          <p className="text-muted-foreground mb-6">
            Find the perfect components for your next project. Our collection includes various categories to suit
            different needs.
          </p>
        </div>
      </AnimatedOnScroll>

      {/* Standard Grid with Dashed Border Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => {
          const Icon = LucideIcons[category.icon as keyof typeof LucideIcons]

          return (
            <AnimatedOnScroll key={category.id} animation="fade-up" delay={0.1 + index * 0.1}>
              <DashedBorderCard
                icon={<Icon className="size-8 sm:size-10 text-primary" />}
                title={category.title}
                description={category.description}
                onClick={() => handleCategoryClick(category.id)}
              />
            </AnimatedOnScroll>
          )
        })}
      </div>

      {/* Tips Section */}
      <AnimatedOnScroll animation="fade-up" delay={0.3}>
        <div className="rounded-lg border bg-muted/30 p-6 mt-8">
          <h3 className="text-xl font-bold mb-4">Component Integration Tips</h3>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="p-4 rounded-lg bg-background border">
              <h4 className="font-medium mb-2">Accessibility First</h4>
              <p className="text-sm text-muted-foreground">
                All components are built with accessibility in mind, following WAI-ARIA guidelines.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-background border">
              <h4 className="font-medium mb-2">Tailwind Powered</h4>
              <p className="text-sm text-muted-foreground">
                Components use Tailwind CSS classes for easy customization and integration.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-background border">
              <h4 className="font-medium mb-2">Copy & Paste</h4>
              <p className="text-sm text-muted-foreground">
                Simply copy the code and paste it into your project to get started.
              </p>
            </div>
          </div>
        </div>
      </AnimatedOnScroll>
    </div>
  )
}

