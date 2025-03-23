import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getComponentsByCategory } from "@/lib/component-metadata"
import CategoryComponentsClient from "./CategoryComponentsClient"

export const dynamicParams = true

export async function generateMetadata({ params }: { params: { category: string } }): Promise<Metadata> {
  const category = params.category

  // Capitalize first letter and add spaces before capital letters
  const formattedCategory = category.charAt(0).toUpperCase() + category.slice(1).replace(/([A-Z])/g, " $1")

  return {
    title: `${formattedCategory} Components - SeraUI`,
    description: `Browse and explore ${formattedCategory} components in the SeraUI collection.`,
  }
}

export function generateStaticParams() {
  return [
    { category: "inputs" },
    { category: "display" },
    { category: "feedback" },
    { category: "navigation" },
    { category: "layout" },
    { category: "all" },
  ]
}

export default function CategoryComponentsPage({ params }: { params: { category: string } }) {
  const category = params.category as any
  const components = getComponentsByCategory(category)

  if (components.length === 0 && category !== "all") {
    notFound()
  }

  return <CategoryComponentsClient category={category} components={components} />
}

