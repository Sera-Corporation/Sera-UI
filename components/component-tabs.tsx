"use client"

import * as React from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

import { cn } from "@/lib/utils"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

const categories = [
  { value: "all", label: "All Components" },
  { value: "inputs", label: "Inputs" },
  { value: "display", label: "Display" },
  { value: "feedback", label: "Feedback" },
  { value: "navigation", label: "Navigation" },
  { value: "layout", label: "Layout" },
]

export function ComponentTabs() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const currentCategory = searchParams.get("category") || "all"

  const createQueryString = React.useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)
      return params.toString()
    },
    [searchParams],
  )

  const handleValueChange = React.useCallback(
    (value: string) => {
      router.push(`${pathname}?${createQueryString("category", value)}`)
    },
    [router, pathname, createQueryString],
  )

  return (
    <Tabs defaultValue={currentCategory} className="w-full" onValueChange={handleValueChange}>
      <TabsList className="w-full justify-start overflow-x-auto">
        {categories.map((category) => (
          <TabsTrigger
            key={category.value}
            value={category.value}
            className={cn("px-4", currentCategory === category.value && "bg-primary text-primary-foreground")}
          >
            {category.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  )
}

