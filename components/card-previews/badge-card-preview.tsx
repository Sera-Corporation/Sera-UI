import { Badge } from "@/components/ui/badge"

export function BadgeCardPreview() {
  return (
    <div className="flex gap-2 justify-center">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  )
}

