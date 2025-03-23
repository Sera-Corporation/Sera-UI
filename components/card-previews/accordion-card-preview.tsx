"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function AccordionCardPreview() {
  return (
    <Accordion type="single" collapsible className="w-full max-w-[250px]">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-sm">Is it accessible?</AccordionTrigger>
        <AccordionContent className="text-xs">Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

