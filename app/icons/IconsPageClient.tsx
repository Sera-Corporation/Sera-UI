"use client"
import { useRouter, useSearchParams } from "next/navigation"
import { useState, useMemo, useEffect } from "react"
import * as LucideIcons from "lucide-react"

import { Button } from "@/components/ui/button"
import { iconMetadata } from "@/lib/icon-metadata"
import { IconDialog } from "@/components/icon-dialog"
import { IconCategoryCard } from "@/components/icon-category-card"
import { AnimatedOnScroll } from "@/components/animated-on-scroll"

export default function IconsPageClient({ searchParams }: { searchParams: { category?: string } }) {
  const router = useRouter()
  const urlSearchParams = useSearchParams()
  const category = searchParams.category || "all"
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null)

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const filteredIcons = useMemo(() => {
    return iconMetadata.filter((icon) => {
      const matchesCategory = category === "all" || icon.category === category
      return matchesCategory
    })
  }, [category])

  const handleIconClick = (iconName: string) => {
    setSelectedIcon(iconName)
  }

  return (
    <AnimatedOnScroll animation="fade-in" duration={0.7}>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Icons</h1>
          <p className="text-muted-foreground">Browse and explore the SeraUI icon collection.</p>
        </div>

        {filteredIcons.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {filteredIcons.map((icon) => {
              const IconComponent = LucideIcons[icon.name as keyof typeof LucideIcons]
              return (
                <IconCategoryCard
                  key={icon.id}
                  icon={IconComponent && <IconComponent className="h-8 w-8" />}
                  title={icon.name}
                  onClick={() => handleIconClick(icon.name)}
                  className="h-32"
                />
              )
            })}
          </div>
        ) : (
          <div className="flex h-[400px] items-center justify-center rounded-md border border-dashed">
            <div className="text-center">
              <h3 className="text-lg font-medium">No icons found</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Try adjusting your filter to find what you're looking for.
              </p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  const url = new URL(window.location.href)
                  url.searchParams.delete("category")
                  window.location.href = url.toString()
                }}
              >
                Reset filters
              </Button>
            </div>
          </div>
        )}

        {selectedIcon && (
          <IconDialog
            icon={selectedIcon}
            open={!!selectedIcon}
            onOpenChange={(open) => {
              if (!open) setSelectedIcon(null)
            }}
          />
        )}
      </div>
    </AnimatedOnScroll>
  )
}

