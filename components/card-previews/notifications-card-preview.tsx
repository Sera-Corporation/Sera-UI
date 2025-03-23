import { CheckCircle } from "lucide-react"

export function NotificationsCardPreview() {
  return (
    <div className="flex items-start gap-2 rounded-md border-l-4 border-l-green-500 bg-background p-3 w-full max-w-[250px]">
      <CheckCircle className="mt-0.5 h-4 w-4 text-green-500" />
      <div>
        <h4 className="text-sm font-medium">Success!</h4>
        <p className="text-xs text-muted-foreground">Action completed successfully.</p>
      </div>
    </div>
  )
}

