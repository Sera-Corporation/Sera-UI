import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getLayoutsByCategory, type LayoutCategory } from "@/lib/layout-metadata"
import CategoryLayoutsClient from "./CategoryLayoutsClient"

export const dynamicParams = true

export async function generateMetadata({ params }: { params: { category: string } }): Promise<Metadata> {
  const category = params.category

  // Capitalize first letter and add spaces before capital letters
  const formattedCategory = category.charAt(0).toUpperCase() + category.slice(1).replace(/([A-Z])/g, " $1")

  return {
    title: `${formattedCategory} Layouts - SeraUI`,
    description: `Browse and explore ${formattedCategory} layouts in the SeraUI collection.`,
  }
}

export function generateStaticParams() {
  return [
    { category: "navbar" },
    { category: "hero" },
    { category: "footer" },
    { category: "grid" },
    { category: "form" },
    { category: "pricing" },
    { category: "testimonial" },
    { category: "feature" },
    { category: "cta" },
    { category: "stats" },
    { category: "gallery" },
    { category: "faq" },
    { category: "all" },
  ]
}

export default function CategoryLayoutsPage({ params }: { params: { category: string } }) {
  // Cast the category to the LayoutCategory type
  const category = params.category as LayoutCategory

  // Check if the category is valid
  const validCategories: LayoutCategory[] = [
    "navbar",
    "hero",
    "footer",
    "grid",
    "form",
    "pricing",
    "testimonial",
    "feature",
    "cta",
    "stats",
    "gallery",
    "faq",
    "all",
  ]

  if (!validCategories.includes(category)) {
    notFound()
  }

  const layouts = getLayoutsByCategory(category)

  // Even if the category is valid, there might be no layouts for it yet
  if (layouts.length === 0 && category !== "all") {
    return (
      <div className="container py-10 text-center">
        <h2 className="text-2xl font-bold mb-4">Coming Soon</h2>
        <p className="text-muted-foreground mb-6">
          We're currently working on adding layouts for this category. Check back soon!
        </p>
      </div>
    )
  }

  return <CategoryLayoutsClient category={category} layouts={layouts} />
}

