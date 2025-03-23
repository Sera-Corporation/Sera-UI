"use client"
import { usePathname, useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface ComponentSidebarProps {
  className?: string
}

export function ComponentSidebar({ className }: ComponentSidebarProps) {
  const router = useRouter()
  const pathname = usePathname()
  const currentCategory = pathname.split("/").pop() || ""

  // Define the same categories from ComponentsPageClient
  const categories = [
    {
      id: "inputs",
      title: "Input Components",
    },
    {
      id: "display",
      title: "Display Components",
    },
    {
      id: "feedback",
      title: "Feedback Components",
    },
    {
      id: "navigation",
      title: "Navigation Components",
    },
    {
      id: "layout",
      title: "Layout Components",
    },
    {
      id: "all",
      title: "All Components",
    },
  ]

  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <Button variant="outline" size="sm" className="w-full justify-start mb-4" asChild>
            <Link href="/components">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Categories
            </Link>
          </Button>
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">Component Categories</h2>
          <div className="space-y-1">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={currentCategory === category.id ? "default" : "ghost"}
                size="sm"
                className="w-full justify-start"
                asChild
              >
                <Link href={`/components/${category.id}`}>{category.title}</Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

