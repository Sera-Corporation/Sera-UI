import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function CardCardPreview() {
  return (
    <Card className="w-full max-w-[250px]">
      <CardHeader>
        <CardTitle className="text-base">Card Title</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-xs text-muted-foreground">Card content goes here</p>
      </CardContent>
      <CardFooter>
        <Button size="sm" className="w-full">
          Action
        </Button>
      </CardFooter>
    </Card>
  )
}

