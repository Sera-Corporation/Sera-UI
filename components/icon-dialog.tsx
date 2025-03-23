"use client"
import * as React from "react"
import { Copy, Check } from "lucide-react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"
import * as LucideIcons from "lucide-react"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { useToast } from "@/hooks/use-toast"
import { iconSvgPaths } from "@/lib/icon-svg-paths"

interface IconDialogProps {
  icon: string
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function IconDialog({ icon, open, onOpenChange }: IconDialogProps) {
  const { toast } = useToast()
  const [copied, setCopied] = React.useState(false)
  const IconComponent = LucideIcons[icon as keyof typeof LucideIcons]

  // Function to get the SVG code for the icon
  const getSvgCode = () => {
    const paths = iconSvgPaths[icon] || ""

    const svgCode = `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  ${paths}
</svg>`

    return svgCode
  }

  const copyCode = () => {
    navigator.clipboard.writeText(getSvgCode())
    setCopied(true)
    toast({
      title: "Copied to clipboard",
      description: "The SVG code has been copied to your clipboard.",
    })

    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            {IconComponent && <IconComponent className="h-5 w-5" />}
            <span>{icon} Icon</span>
          </DialogTitle>
          <DialogDescription>Use this icon in your project by copying the SVG code.</DialogDescription>
        </DialogHeader>

        <div className="mt-4 space-y-6 overflow-auto flex-1">
          <div className="flex justify-center items-center py-8">
            {IconComponent && <IconComponent className="h-24 w-24" />}
          </div>

          <div className="relative">
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
                    <p>{copied ? "Copied!" : "Copy SVG code"}</p>
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
                {getSvgCode()}
              </SyntaxHighlighter>
            </div>
          </div>
        </div>

        <div className="mt-4 flex justify-between">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Close
          </Button>
          <Button onClick={copyCode}>{copied ? "Copied!" : "Copy SVG"}</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

