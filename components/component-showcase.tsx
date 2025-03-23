"use client"

import type * as React from "react"
import { Copy, ExternalLink } from "lucide-react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/hooks/use-toast"
import { AnimatedContainer } from "@/components/ui/animated-container"
import { getComponentCode } from "@/lib/component-code"
import { ButtonShowcase } from "@/components/showcases/button-showcase"
import { CardShowcase } from "@/components/showcases/card-showcase"
import { ModalShowcase } from "@/components/showcases/modal-showcase"
import { AlertShowcase } from "@/components/showcases/alert-showcase"
import { NavigationShowcase } from "@/components/showcases/navigation-showcase"
import { FormShowcase } from "@/components/showcases/form-showcase"
import { TooltipShowcase } from "@/components/showcases/tooltip-showcase"
import { BadgeShowcase } from "@/components/showcases/badge-showcase"
import { AccordionShowcase } from "@/components/showcases/accordion-showcase"
import { SliderShowcase } from "@/components/showcases/slider-showcase"
import { DropdownShowcase } from "@/components/showcases/dropdown-showcase"
import { ProgressShowcase } from "@/components/showcases/progress-showcase"
import { TabsShowcase } from "@/components/showcases/tabs-showcase"
import { NotificationsShowcase } from "@/components/showcases/notifications-showcase"
import { FloatingActionShowcase } from "@/components/showcases/floating-action-showcase"

interface ComponentShowcaseProps {
  id: string
  title: string
  description: string
  isNew?: boolean
  version?: string
}

const showcaseComponents: Record<string, React.ReactNode> = {
  buttons: <ButtonShowcase />,
  cards: <CardShowcase />,
  modals: <ModalShowcase />,
  alerts: <AlertShowcase />,
  navigation: <NavigationShowcase />,
  forms: <FormShowcase />,
  tooltips: <TooltipShowcase />,
  badges: <BadgeShowcase />,
  accordions: <AccordionShowcase />,
  sliders: <SliderShowcase />,
  // New components for v1.1
  dropdowns: <DropdownShowcase />,
  progress: <ProgressShowcase />,
  tabs: <TabsShowcase />,
  notifications: <NotificationsShowcase />,
  "floating-action": <FloatingActionShowcase />,
}

export function ComponentShowcase({ id, title, description, isNew, version }: ComponentShowcaseProps) {
  const { toast } = useToast()
  const showcaseComponent = showcaseComponents[id]
  const code = getComponentCode(id)

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code)
    toast({
      title: "Copied to clipboard",
      description: "The code has been copied to your clipboard.",
    })
  }

  return (
    <AnimatedContainer transition={{ duration: 0.4, delay: 0.1 }} className="w-full">
      <Card id={id} className={cn("overflow-hidden", isNew && "ring-2 ring-primary/20")}>
        <CardHeader>
          <div className="flex items-center gap-2">
            <CardTitle className="text-2xl">{title}</CardTitle>
            {isNew && (
              <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">New</span>
            )}
            {version && <span className="rounded-full bg-secondary px-2 py-0.5 text-xs font-medium">v{version}</span>}
          </div>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <Tabs defaultValue="preview" className="px-6">
          <TabsList className="mb-4">
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>
          <TabsContent value="preview" className="rounded-md border p-6">
            {showcaseComponent}
          </TabsContent>
          <TabsContent value="code">
            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-2 z-10"
                onClick={() => copyCode(code)}
              >
                <Copy className="h-4 w-4" />
                <span className="sr-only">Copy code</span>
              </Button>
              <SyntaxHighlighter
                language="tsx"
                style={vscDarkPlus}
                customStyle={{
                  margin: 0,
                  borderRadius: "0.5rem",
                  fontSize: "0.875rem",
                }}
              >
                {code}
              </SyntaxHighlighter>
            </div>
          </TabsContent>
        </Tabs>
        <CardFooter className="flex justify-between border-t p-6">
          <Button variant="outline" size="sm" asChild>
            <a href={`/docs/components/${id}`}>View Documentation</a>
          </Button>
          <Button size="sm" asChild>
            <a
              href={`https://github.com/yourusername/seraui/tree/main/components/${id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              View Source
            </a>
          </Button>
        </CardFooter>
      </Card>
    </AnimatedContainer>
  )
}

