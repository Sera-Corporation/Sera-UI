import type React from "react"
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
}

