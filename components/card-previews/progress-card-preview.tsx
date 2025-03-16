import { Progress } from "@/components/ui/progress"

export function ProgressCardPreview() {
  return (
    <div className="w-full max-w-[250px]">
      <Progress value={60} className="w-full" />
    </div>
  )
}

