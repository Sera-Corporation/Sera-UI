import { AlertCircle, Info, Terminal } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export function AlertShowcase() {
  return (
    <div className="flex flex-col gap-4">
      <Alert>
        <Info className="h-4 w-4" />
        <AlertTitle>Info</AlertTitle>
        <AlertDescription>This is an informational alert.</AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>This is an error alert.</AlertDescription>
      </Alert>
      <Alert variant="default">
        <Terminal className="h-4 w-4" />
        <AlertTitle>Tip</AlertTitle>
        <AlertDescription>This is a tip alert.</AlertDescription>
      </Alert>
    </div>
  )
}

