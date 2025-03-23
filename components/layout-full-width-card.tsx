"use client"
import { useState } from "react"
import * as LucideIcons from "lucide-react"
import { Code, Copy, Check } from "lucide-react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"

import { cn } from "@/lib/utils"
import type { LayoutMeta } from "@/lib/layout-metadata"
import { getLayoutTailwindCode } from "@/lib/layout-code"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"
import { layoutShowcases } from "@/components/layout-showcases"

interface LayoutFullWidthCardProps {
  layout: LayoutMeta
}

export function LayoutFullWidthCard({ layout }: LayoutFullWidthCardProps) {
  const [showCode, setShowCode] = useState(false)
  const [copied, setCopied] = useState(false)
  const { toast } = useToast()
  const Icon = LucideIcons[layout.icon as keyof typeof LucideIcons]
  const ShowcaseComponent = layoutShowcases[layout.id]
  const tailwindCode = getLayoutTailwindCode(layout.id)

  const copyCode = () => {
    navigator.clipboard.writeText(tailwindCode)
    setCopied(true)
    toast({
      title: "Copied to clipboard",
      description: "The code has been copied to your clipboard.",
    })

    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  return (
    <Card className={cn("overflow-hidden transition-all", layout.isNew && "ring-2 ring-primary/20")}>
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
            {Icon && <Icon className="h-4 w-4 text-primary" />}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <CardTitle className="text-lg">{layout.name}</CardTitle>
              {layout.isNew && (
                <Badge variant="outline" className="bg-primary/10 text-primary">
                  New
                </Badge>
              )}
            </div>
            <CardDescription className="line-clamp-2">{layout.description}</CardDescription>
          </div>
          <Button variant={showCode ? "default" : "outline"} size="sm" onClick={() => setShowCode(!showCode)}>
            <Code className="mr-2 h-4 w-4" />
            {showCode ? "Hide Code" : "View Code"}
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        {showCode ? (
          <div className="relative">
            <Button variant="ghost" size="icon" className="absolute right-2 top-2 z-10" onClick={copyCode}>
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              <span className="sr-only">{copied ? "Copied" : "Copy code"}</span>
            </Button>
            <div className="max-h-[500px] overflow-auto">
              <SyntaxHighlighter
                language="html"
                style={vscDarkPlus}
                customStyle={{
                  margin: 0,
                  borderRadius: "0",
                  fontSize: "0.875rem",
                }}
              >
                {tailwindCode || "<!-- Tailwind CSS code coming soon for this layout -->"}
              </SyntaxHighlighter>
            </div>
          </div>
        ) : (
          <div className="p-6 bg-muted/20">
            {ShowcaseComponent ? (
              <ShowcaseComponent />
            ) : (
              <div className="flex h-[200px] items-center justify-center">
                <p className="text-sm text-muted-foreground">Preview not available</p>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

