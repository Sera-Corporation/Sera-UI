"use client"

import { useRouter } from "next/navigation"
import { useMemo } from "react"
import * as LucideIcons from "lucide-react"

import { Button } from "@/components/ui/button"
import { AnimatedOnScroll } from "@/components/animated-on-scroll"
import { DashedBorderCard } from "@/components/dashed-border-card"

// Define the categories with their metadata
const categories = [
  {
    id: "hero",
    title: "Hero Sections",
    description:
      "Eye-catching hero sections to showcase your main content and calls-to-action. Perfect for creating impactful first impressions and highlighting key messages.",
    icon: "Layout",
  },
  {
    id: "navbar",
    title: "Navigation Bars",
    description:
      "Headers and navigation components for your website. Includes responsive menus, dropdown navigation, and mobile-friendly designs.",
    icon: "Menu",
  },
  {
    id: "footer",
    title: "Footers",
    description:
      "Footer components with links and information. Includes contact information, social media links, site navigation, and copyright notices.",
    icon: "AlignJustify",
  },
  {
    id: "grid",
    title: "Grid Layouts",
    description:
      "Responsive grid layouts for content organization. Features flexible columns, auto-responsive behavior, and content alignment options.",
    icon: "LayoutGrid",
  },
  {
    id: "form",
    title: "Form Layouts",
    description:
      "Form layouts for data collection and user input. Includes input validation, multi-step forms, and responsive designs with error handling.",
    icon: "FileText",
  },
  {
    id: "pricing",
    title: "Pricing Sections",
    description:
      "Pricing tables and comparison layouts. Features tiered pricing, feature comparison, and highlighted plans with call-to-action buttons.",
    icon: "DollarSign",
  },
  {
    id: "testimonial",
    title: "Testimonials",
    description:
      "Customer testimonial and review layouts. Includes customer quotes, star ratings, profile pictures, and carousel sliders for social proof.",
    icon: "Quote",
  },
  {
    id: "feature",
    title: "Feature Sections",
    description:
      "Highlight your product or service features. Includes icon highlights, feature descriptions, and visual elements to showcase benefits.",
    icon: "Star",
  },
  {
    id: "cta",
    title: "Call to Action",
    description:
      "Conversion-focused call to action sections. Features compelling buttons, action-oriented copy, and clear value propositions.",
    icon: "MousePointerClick",
  },
  {
    id: "stats",
    title: "Statistics",
    description:
      "Display important metrics and statistics. Includes number highlights, data visualization, and animated counters to showcase achievements.",
    icon: "BarChart",
  },
  {
    id: "gallery",
    title: "Galleries",
    description:
      "Image and media gallery layouts. Features grid layouts, lightbox integration, filtering options, and masonry layouts with lazy loading.",
    icon: "Image",
  },
  {
    id: "faq",
    title: "FAQ Sections",
    description:
      "Frequently asked questions layouts. Includes accordion toggles, searchable questions, categorized FAQs, and expandable answers.",
    icon: "HelpCircle",
  },
]

export default function LayoutsPageClient() {
  const router = useRouter()

  const handleCategoryClick = (categoryId: string) => {
    router.push(`/layouts/${categoryId}`)
  }

  // Featured categories - a subset of all categories
  const featuredCategories = useMemo(() => {
    return categories.slice(0, 4)
  }, [])

  return (
    <div className="container space-y-12 py-10">
      {/* Hero Section */}
      <AnimatedOnScroll animation="fade-in" duration={0.7}>
        <div className="rounded-lg border bg-card p-8 text-card-foreground shadow-sm">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h1 className="text-4xl font-bold tracking-tight mb-4">Layout Collection</h1>
              <p className="text-xl text-muted-foreground mb-6">
                Ready-to-use layout patterns for common UI needs. Save development time with our pre-built, responsive
                layouts.
              </p>
              <Button size="lg" onClick={() => router.push("/layouts/hero")}>
                Explore Hero Sections
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
            <Button variant="outline" onClick={() => router.push("/layouts/all")}>
              View All Layouts
            </Button>
          </div>
          <p className="text-muted-foreground mb-6">
            Find the perfect layout for your next project. Our collection includes various categories to suit different
            needs.
          </p>
        </div>
      </AnimatedOnScroll>

      {/* Standard Grid with Dashed Border Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => {
          const Icon = LucideIcons[category.icon as keyof typeof LucideIcons]

          return (
            <AnimatedOnScroll key={category.id} animation="fade-up" delay={0.1 + (index % 4) * 0.1}>
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
          <h3 className="text-xl font-bold mb-4">Layout Integration Tips</h3>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="p-4 rounded-lg bg-background border">
              <h4 className="font-medium mb-2">Responsive Design</h4>
              <p className="text-sm text-muted-foreground">
                All layouts are fully responsive and adapt to different screen sizes.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-background border">
              <h4 className="font-medium mb-2">Tailwind Powered</h4>
              <p className="text-sm text-muted-foreground">
                Layouts use Tailwind CSS classes for easy customization and integration.
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

