import type React from "react"
import { ButtonCardPreview } from "@/components/card-previews/button-card-preview"
import { CardCardPreview } from "@/components/card-previews/card-card-preview"
import { ModalCardPreview } from "@/components/card-previews/modal-card-preview"
import { AlertCardPreview } from "@/components/card-previews/alert-card-preview"
import { NavigationCardPreview } from "@/components/card-previews/navigation-card-preview"
import { FormCardPreview } from "@/components/card-previews/form-card-preview"
import { TooltipCardPreview } from "@/components/card-previews/tooltip-card-preview"
import { BadgeCardPreview } from "@/components/card-previews/badge-card-preview"
import { AccordionCardPreview } from "@/components/card-previews/accordion-card-preview"
import { SliderCardPreview } from "@/components/card-previews/slider-card-preview"
import { DropdownCardPreview } from "@/components/card-previews/dropdown-card-preview"
import { ProgressCardPreview } from "@/components/card-previews/progress-card-preview"
import { TabsCardPreview } from "@/components/card-previews/tabs-card-preview"
import { NotificationsCardPreview } from "@/components/card-previews/notifications-card-preview"
import { FloatingActionCardPreview } from "@/components/card-previews/floating-action-card-preview"

// Import the showcase components
import { ButtonShowcase } from "@/components/showcases/button-showcase"
import { CardShowcase } from "@/components/showcases/card-showcase"
import { ModalShowcase } from "@/components/showcases/modal-showcase"
import { AlertShowcase } from "@/components/showcases/alert-showcase"
import { NavigationShowcase } from "@/components/showcases/navigation-showcase"
import { FormShowcase } from "@/components/showcases/form-showcase"
import { TooltipShowcase } from "@/components/showcases/tooltip-showcase"
import { BadgeShowcase } from "@/components/showcases/badge-showcase"
import { AccordionShowcase } from "@/components/showcases/accordion-showcase"
import { SliderShowcase } from "@/components/showcases/slider-showcase"
import { DropdownShowcase } from "@/components/showcases/dropdown-showcase"
import { ProgressShowcase } from "@/components/showcases/progress-showcase"
import { TabsShowcase } from "@/components/showcases/tabs-showcase"
import { NotificationsShowcase } from "@/components/showcases/notifications-showcase"
import { FloatingActionShowcase } from "@/components/showcases/floating-action-showcase"

// Add imports for the Square Card component
import { SquareCardCardPreview } from "@/components/card-previews/squarecard-card-preview"
import { SquareCardShowcase } from "@/components/showcases/squarecard-showcase"

export const cardPreviewComponents: Record<string, React.ComponentType> = {
  buttons: ButtonCardPreview,
  cards: CardCardPreview,
  modals: ModalCardPreview,
  alerts: AlertCardPreview,
  navigation: NavigationCardPreview,
  forms: FormCardPreview,
  tooltips: TooltipCardPreview,
  badges: BadgeCardPreview,
  accordions: AccordionCardPreview,
  sliders: SliderCardPreview,
  dropdowns: DropdownCardPreview,
  progress: ProgressCardPreview,
  tabs: TabsCardPreview,
  notifications: NotificationsCardPreview,
  "floating-action": FloatingActionCardPreview,
  squarecard: SquareCardCardPreview,
}

// Add the showcaseComponents export that's being imported in component-dialog.tsx
export const showcaseComponents: Record<string, React.ComponentType> = {
  buttons: ButtonShowcase,
  cards: CardShowcase,
  modals: ModalShowcase,
  alerts: AlertShowcase,
  navigation: NavigationShowcase,
  forms: FormShowcase,
  tooltips: TooltipShowcase,
  badges: BadgeShowcase,
  accordions: AccordionShowcase,
  sliders: SliderShowcase,
  dropdowns: DropdownShowcase,
  progress: ProgressShowcase,
  tabs: TabsShowcase,
  notifications: NotificationsShowcase,
  "floating-action": FloatingActionShowcase,
  squarecard: SquareCardShowcase,
}

