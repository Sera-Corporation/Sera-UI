"use client"
import * as React from "react"
import { Copy, Check, AlertCircle } from "lucide-react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"
import type { LayoutMeta } from "@/lib/layout-metadata"
import { getLayoutCode, getLayoutTailwindCode } from "@/lib/layout-code"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { layoutShowcases } from "@/components/layout-showcases"

interface LayoutDialogProps {
  layout: LayoutMeta
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function LayoutDialog({ layout, open, onOpenChange }: LayoutDialogProps) {
  const { toast } = useToast()
  const reactCode = getLayoutCode(layout.id)
  const tailwindCode = getLayoutTailwindCode(layout.id)
  const ShowcaseComponent = layoutShowcases[layout.id]
  const [copied, setCopied] = React.useState(false)
  const [activeTab, setActiveTab] = React.useState<"tailwind" | "react">("tailwind")

  const copyCode = () => {
    if (activeTab === "react") {
      toast({
        title: "React Component Package Coming Soon",
        description: "The React Component Package is an upcoming feature we're working on.",
        variant: "destructive",
      })
      return
    }

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
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <div className="flex items-center gap-2">
            <DialogTitle>{layout.name}</DialogTitle>
            {layout.isNew && (
              <Badge variant="outline" className="bg-primary/10 text-primary">
                New
              </Badge>
            )}
            {layout.version && <Badge variant="secondary">v{layout.version}</Badge>}
          </div>
          <DialogDescription>{layout.description}</DialogDescription>
        </DialogHeader>

        <div className="mt-4 space-y-6 overflow-auto flex-1">
          <div className="rounded-md border p-6">
            {ShowcaseComponent ? (
              <ShowcaseComponent />
            ) : (
              <div className="flex h-[200px] items-center justify-center">
                <p className="text-sm text-muted-foreground">Preview not available</p>
              </div>
            )}
          </div>

          <Tabs defaultValue="tailwind" onValueChange={(value) => setActiveTab(value as "tailwind" | "react")}>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <TabsList className="mb-4">
                <TabsTrigger value="tailwind">Tailwind CSS</TabsTrigger>
                <TabsTrigger value="react">React Component</TabsTrigger>
              </TabsList>

              {activeTab === "react" && (
                <Alert variant="warning" className="mb-4 sm:mb-0 sm:ml-4 py-2">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription className="text-xs">
                    React Component Package is an upcoming feature we're working on
                  </AlertDescription>
                </Alert>
              )}
            </div>

            <TabsContent value="tailwind" className="relative">
              <div className="absolute right-2 top-2 z-10">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon" onClick={copyCode}>
                        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                        <span className="sr-only">{copied ? "Copied" : "Copy code"}</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{copied ? "Copied!" : "Copy code"}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="max-h-[300px] overflow-auto rounded-md">
                <SyntaxHighlighter
                  language="html"
                  style={vscDarkPlus}
                  customStyle={{
                    margin: 0,
                    borderRadius: "0.5rem",
                    fontSize: "0.875rem",
                  }}
                >
                  {tailwindCode || "<!-- Tailwind CSS code coming soon for this layout -->"}
                </SyntaxHighlighter>
              </div>
            </TabsContent>

            <TabsContent value="react" className="relative">
              <div className="max-h-[400px] overflow-auto rounded-md opacity-70">
                <SyntaxHighlighter
                  language="tsx"
                  style={vscDarkPlus}
                  customStyle={{
                    margin: 0,
                    borderRadius: "0.5rem",
                    fontSize: "0.875rem",
                  }}
                >
                  {reactCode || "// React component code coming soon"}
                </SyntaxHighlighter>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="mt-4 flex justify-between">
          <Button variant="outline" asChild>
            <a href={`/docs/layouts/${layout.id}`}>View Documentation</a>
          </Button>
          <Button asChild>
            <a
              href={`https://github.com/yourusername/seraui/tree/main/layouts/${layout.id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Source
            </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

