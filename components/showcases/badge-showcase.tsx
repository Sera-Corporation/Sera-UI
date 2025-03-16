import { Badge } from "@/components/ui/badge"

export function BadgeShowcase() {
  return (
    <div className="flex flex-wrap gap-4">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="destructive">Destructive</Badge>

      <div className="flex items-center gap-2">
        <Badge className="bg-blue-500 hover:bg-blue-600">Blue</Badge>
        <Badge className="bg-green-500 hover:bg-green-600">Green</Badge>
        <Badge className="bg-yellow-500 hover:bg-yellow-600 text-black">Yellow</Badge>
        <Badge className="bg-purple-500 hover:bg-purple-600">Purple</Badge>
      </div>
    </div>
  )
}

