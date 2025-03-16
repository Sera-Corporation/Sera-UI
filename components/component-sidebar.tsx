"use client"

import * as React from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Search, X, ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { type ComponentCategory, componentMetadata } from "@/lib/component-metadata"
import { Skeleton } from "@/components/ui/skeleton"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

interface ComponentSidebarProps {
  className?: string
}

export function ComponentSidebar({ className }: ComponentSidebarProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [searchQuery, setSearchQuery] = React.useState("")
  const [isLoading, setIsLoading] = React.useState(true)
  const [isCollapsed, setIsCollapsed] = React.useState(false)
  
  const currentCategory = searchParams.get("category") || "all"
  const currentComponentId = searchParams.get("component")

  React.useEffect(() => {
    // Simulate loading state for a better UX
    setIsLoading(true)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 500)
    
    return () => clearTimeout(timer)
  }, [currentCategory, currentComponentId])

  const categories: { value: ComponentCategory; label: string }[] = [
    { value: "all", label: "All" },
    { value: "inputs", label: "Inputs" },
    { value: "display", label: "Display" },
    { value: "feedback", label: "Feedback" },
    { value: "navigation", label: "Navigation" },
    { value: "layout", label: "Layout" },
  ]

  const filteredComponents = React.useMemo(() => {
    let filtered = componentMetadata.filter((component) => {
      const matchesSearch =
        searchQuery === "" ||
        component.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        component.description.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesCategory = currentCategory === "all" || component.category === currentCategory

      return matchesSearch && matchesCategory
    })

    return filtered.sort((a, b) => a.name.localeCompare(b.name))
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
  }

  const clearSearch = () => {
    setSearchQuery("")
  }

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed)
  }

  if (isCollapsed) {
    return (
      <motion.div 
        className="flex flex-col h-full border-r"
        initial={{ width: 280 }}
        animate={{ width: 48 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <Button 
          variant="ghost" 
          size="icon" 
          className="m-2" 
          onClick={toggleCollapse}
          aria-label="Expand sidebar"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </motion.div>
    )
  }

  return (
    <motion.div 
      className={cn("pb-6 relative", className)}
      initial={{ width: 48 }}
      animate={{ width: 280 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >     
      <div className="space-y-4 py-4">
        <div className="px-3 py-1">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search components..." 
              className="pl-8 pr-8" 
              value={searchQuery} 
              onChange={handleSearch}
            />
            {searchQuery && (
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute right-1 top-1 h-6 w-6" 
                onClick={clearSearch}
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
        
        <div className="px-3">
          <Tabs 
            defaultValue={currentCategory} 
            value={currentCategory}
            onValueChange={handleCategoryChange}
            className="w-full"
          >
            <TabsList className="w-full grid grid-cols-3 h-auto p-1 gap-1">
              {categories.slice(0, 3).map((category) => (
                <TabsTrigger 
                  key={category.value} 
                  value={category.value}
                  className="flex items-center justify-center px-3 py-1.5 text-center"
                >
                  <span className="text-xs">{category.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            <TabsList className="w-full grid grid-cols-3 h-auto mt-1 p-1 gap-1">
              {categories.slice(3).map((category) => (
                <TabsTrigger 
                  key={category.value} 
                  value={category.value}
                  className="flex items-center justify-center px-3 py-1.5 text-center"
                >
                  <span className="text-xs">{category.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
        
        <div className="px-3 py-2">
          <h2 className="mb-2 px-1 text-lg font-semibold tracking-tight flex items-center">
            Components 
            <span className="ml-2 text-sm text-muted-foreground font-normal">
              ({filteredComponents.length})
            </span>
          </h2>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <ScrollArea className="h-[calc(100vh-220px)]">
                <div className="space-y-1 pr-2">
                  {isLoading ? (
                    Array(8).fill(0).map((_, i) => (
                      <div key={i} className="p-1">
                        <Skeleton className="h-8 w-full rounded" />
                      </div>
                    ))
                  ) : filteredComponents.length === 0 ? (
                    <p className="px-4 py-2 text-sm text-muted-foreground">
                      No components found. Try adjusting your search or category.
                    </p>
                  ) : (
                    filteredComponents.map((component) => (
                      <Button
                        key={component.id}
                        variant={currentComponentId === component.id ? "secondary" : "ghost"}
                        size="sm"
                        className="w-full justify-start font-normal"
                        onClick={() => router.push(`/components?${createQueryString("component", component.id)}`)}
                      >
                        <div className="flex items-center w-full">
                          <span className="overflow-hidden text-ellipsis whitespace-nowrap mr-2">
                            {component.name}
                          </span>
                          {component.isNew && (
                            <Badge variant="outline" className="shrink-0 ml-auto">
                              New
                            </Badge>
                          )}
                        </div>
                      </Button>
                    ))
                  )}
                </div>
              </ScrollArea>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  )
}