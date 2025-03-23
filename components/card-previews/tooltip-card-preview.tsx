"use client"
import { Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function TooltipCardPreview() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon">
            <Info className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p className="text-xs">Helpful information</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

