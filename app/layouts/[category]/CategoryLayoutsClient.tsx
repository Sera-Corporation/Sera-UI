"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { ChevronLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { LayoutFullWidthCard } from "@/components/layout-full-width-card"
import type { LayoutMeta } from "@/lib/layout-metadata"
import { AnimatedOnScroll } from "@/components/animated-on-scroll"

interface CategoryLayoutsClientProps {
  category: string
  layouts: LayoutMeta[]
}

export default function CategoryLayoutsClient({ category, layouts }: CategoryLayoutsClientProps) {
  const router = useRouter()
  const [selectedLayout, setSelectedLayout] = useState<LayoutMeta | null>(null)

  // Format category name for display
  const formattedCategory = category.charAt(0).toUpperCase() + category.slice(1).replace(/([A-Z])/g, " $1")

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="container py-10">
      <div className="mb-8">
        <Button
          variant="ghost"
          className="mb-4 pl-0 hover:pl-0 flex items-center gap-1 text-muted-foreground"
          onClick={() => router.push("/layouts")}
        >
          <ChevronLeft className="h-4 w-4" />
          Back to Categories
        </Button>
        <AnimatedOnScroll animation="fade-in">
          <h1 className="text-4xl font-bold tracking-tight mb-2">{formattedCategory} Layouts</h1>
          <p className="text-xl text-muted-foreground">
            Browse and explore our collection of {formattedCategory.toLowerCase()} layouts.
          </p>
        </AnimatedOnScroll>
      </div>

      <div className="space-y-8">
        {layouts.map((layout, index) => (
          <AnimatedOnScroll key={layout.id} animation="fade-up" delay={0.1 * index} duration={0.6}>
            <LayoutFullWidthCard layout={layout} onClick={() => setSelectedLayout(layout)} />
          </AnimatedOnScroll>
        ))}
      </div>
    </div>
  )
}

