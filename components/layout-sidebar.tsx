"use client"
import { usePathname, useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface LayoutSidebarProps {
  className?: string
}

export function LayoutSidebar({ className }: LayoutSidebarProps) {
  const router = useRouter()
  const pathname = usePathname()
  const currentCategory = pathname.split("/").pop() || ""

  // Define the same categories from LayoutsPageClient
  const categories = [
    {
      id: "navbar",
      title: "Navigation Bars",
    },
    {
      id: "hero",
      title: "Hero Sections",
    },
    {
      id: "footer",
      title: "Footers",
    },
    {
      id: "grid",
      title: "Grid Layouts",
    },
    {
      id: "form",
      title: "Form Layouts",
    },
    {
      id: "pricing",
      title: "Pricing Tables",
    },
    {
      id: "testimonial",
      title: "Testimonials",
    },
    {
      id: "feature",
      title: "Feature Sections",
    },
    {
      id: "cta",
      title: "Call to Action",
    },
    {
      id: "stats",
      title: "Statistics",
    },
    {
      id: "gallery",
      title: "Galleries",
    },
    {
      id: "faq",
      title: "FAQ Sections",
    },
  ]

  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <Button variant="outline" size="sm" className="w-full justify-start mb-4" asChild>
            <Link href="/layouts">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Categories
            </Link>
          </Button>
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">Layout Categories</h2>
          <div className="space-y-1">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={currentCategory === category.id ? "default" : "ghost"}
                size="sm"
                className="w-full justify-start"
                asChild
              >
                <Link href={`/layouts/${category.id}`}>{category.title}</Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

