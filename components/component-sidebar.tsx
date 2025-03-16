"use client"

import * as React from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Search } from "lucide-react"

import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { type ComponentCategory, componentMetadata } from "@/lib/component-metadata"

interface ComponentSidebarProps {
  className?: string
}

export function ComponentSidebar({ className }: ComponentSidebarProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [searchQuery, setSearchQuery] = React.useState("")

  const currentCategory = searchParams.get("category") || "all"

  const categories: { value: ComponentCategory; label: string }[] = [
    { value: "all", label: "All Components" },
    { value: "inputs", label: "Inputs" },
    { value: "display", label: "Display" },
    { value: "feedback", label: "Feedback" },
    { value: "navigation", label: "Navigation" },
    { value: "layout", label: "Layout" },
  ]

  const filteredComponents = React.useMemo(() => {
    return componentMetadata.filter((component) => {
      const matchesSearch =
        searchQuery === "" ||
        component.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        component.description.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesCategory = currentCategory === "all" || component.category === currentCategory

      return matchesSearch && matchesCategory
    })
  }, [searchQuery, currentCategory])

  const createQueryString = React.useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)
      return params.toString()
    },
    [searchParams],
  )

  const handleCategoryChange = (category: string) => {
    router.push(`/components?${createQueryString("category", category)}`)
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
    router.push(`/components?${createQueryString("search", e.target.value)}`)
  }

  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search components..." className="pl-8" value={searchQuery} onChange={handleSearch} />
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge
                key={category.value}
                variant={currentCategory === category.value ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => handleCategoryChange(category.value)}
              >
                {category.label}
              </Badge>
            ))}
          </div>
        </div>
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">Components ({filteredComponents.length})</h2>
          <ScrollArea className="h-[calc(100vh-220px)]">
            <div className="space-y-1">
              {filteredComponents.map((component) => (
                <Button
                  key={component.id}
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start"
                  onClick={() => router.push(`/components?${createQueryString("component", component.id)}`)}
                >
                  <span>{component.name}</span>
                  {component.isNew && (
                    <Badge variant="outline" className="ml-auto">
                      New
                    </Badge>
                  )}
                </Button>
              ))}
              {filteredComponents.length === 0 && (
                <p className="px-4 text-sm text-muted-foreground">No components found.</p>
              )}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  )
}

