"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export function DropdownCardPreview() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <Button variant="outline" className="w-[160px] justify-between" onClick={() => setIsOpen(!isOpen)}>
        <span>Select option</span>
        <ChevronDown className="h-4 w-4 opacity-50" />
      </Button>

      {isOpen && (
        <div className="absolute z-10 mt-1 w-[160px] rounded-md border bg-popover shadow-md">
          <div className="p-1">
            <button className="w-full rounded-sm px-2 py-1.5 text-sm text-left hover:bg-accent hover:text-accent-foreground">
              Option 1
            </button>
            <button className="w-full rounded-sm px-2 py-1.5 text-sm text-left hover:bg-accent hover:text-accent-foreground">
              Option 2
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

