"use client"

import * as React from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Search } from "lucide-react"

import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { type IconCategory, iconMetadata } from "@/lib/icon-metadata"

interface IconSidebarProps {
  className?: string
}

export function IconSidebar({ className }: IconSidebarProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [searchQuery, setSearchQuery] = React.useState("")

  const currentCategory = searchParams.get("category") || "all"

  const categories: { value: IconCategory; label: string }[] = [
    { value: "all", label: "All Icons" },
    { value: "ui", label: "UI" },
    { value: "arrows", label: "Arrows" },
    { value: "files", label: "Files" },
    { value: "shapes", label: "Shapes" },
  ]

  const filteredIcons = React.useMemo(() => {
    return iconMetadata.filter((icon) => {
      const matchesSearch = searchQuery === "" || icon.name.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesCategory = currentCategory === "all" || icon.category === currentCategory

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
    router.push(`/icons?${createQueryString("category", category)}`)
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search icons..." className="pl-8" value={searchQuery} onChange={handleSearch} />
          </div>
          <div className="mt-4 flex flex-col gap-2">
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={currentCategory === category.value ? "default" : "ghost"}
                className={cn("justify-start")}
                onClick={() => handleCategoryChange(category.value)}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">Icons ({filteredIcons.length})</h2>
          <ScrollArea className="h-[calc(100vh-220px)]">
            <div className="space-y-1">
              {filteredIcons.length === 0 && <p className="px-4 text-sm text-muted-foreground">No icons found.</p>}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  )
}

