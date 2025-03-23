"use client"
import { Info } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function TooltipShowcase() {
  return (
    <TooltipProvider>
      <div className="flex items-center gap-4">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Hover Me</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>This is a tooltip</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" size="icon">
              <Info className="h-4 w-4" />
              <span className="sr-only">Info</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Additional information</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button>Interactive Button</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Click to perform an action</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  )
}

