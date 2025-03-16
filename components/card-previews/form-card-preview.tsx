import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function FormCardPreview() {
  return (
    <div className="w-full max-w-[250px] space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" placeholder="m@example.com" />
      </div>
      <Button className="w-full">Submit</Button>
    </div>
  )
}

