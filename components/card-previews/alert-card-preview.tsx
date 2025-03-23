import { Info } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export function AlertCardPreview() {
  return (
    <Alert className="w-full max-w-[250px]">
      <Info className="h-4 w-4" />
      <AlertTitle>Information</AlertTitle>
      <AlertDescription className="text-xs">This is an informational alert.</AlertDescription>
    </Alert>
  )
}

