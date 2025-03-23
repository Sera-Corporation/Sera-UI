import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FloatingActionCardPreview() {
  return (
    <div className="relative h-20 w-full max-w-[250px] rounded-lg border bg-muted/30">
      <div className="absolute bottom-2 right-2">
        <Button size="icon" className="h-10 w-10 rounded-full">
          <Plus className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}

