"use client"

import * as React from "react"
import { useRouter, useSearchParams } from "next/navigation"
import * as LucideIcons from "lucide-react"

import { cn } from "@/lib/utils"
import type { ComponentMeta } from "@/lib/component-metadata"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cardPreviewComponents } from "@/lib/showcase-components"
import { Code } from "lucide-react"

interface ComponentCardProps {
  component: ComponentMeta
}

export function ComponentCard({ component }: ComponentCardProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const Icon = LucideIcons[component.icon as keyof typeof LucideIcons]
  const CardPreviewComponent = cardPreviewComponents[component.id]

  const createQueryString = React.useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)
      return params.toString()
    },
    [searchParams],
  )

  return (
    <Card
      className={cn(
        "overflow-hidden transition-all hover:shadow-md",
        component.isNew && "ring-2 ring-primary/20"
      )}
    >
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
            {Icon && <Icon className="h-4 w-4 text-primary" />}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <CardTitle className="text-lg">{component.name}</CardTitle>
              {component.isNew && (
                <Badge variant="outline" className="bg-primary/10 text-primary">
                  New
                </Badge>
              )}
            </div>
            <CardDescription className="line-clamp-1">
              {component.description}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="aspect-video w-full overflow-hidden bg-muted/40 flex items-center justify-center">
          {CardPreviewComponent ? (
            <div className="flex items-center justify-center w-full h-full p-4">
              <CardPreviewComponent />
            </div>
          ) : (
            <span className="text-sm text-muted-foreground">
              Preview not available
            </span>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between p-4">
        <Badge variant="secondary">{component.category}</Badge>
        <Button
          size="sm"
          onClick={() =>
            router.push(
              `/components?${createQueryString("component", component.id)}`
            )
          }
        >
          <Code className="mr-2 h-4 w-4" /> View Code
        </Button>
      </CardFooter>
    </Card>
  );
}

