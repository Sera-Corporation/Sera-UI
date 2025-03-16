"use client"

import * as React from "react"
import Link from "next/link"
import { Home, Settings, User } from "lucide-react"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export function NavigationShowcase() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex gap-4">
        <Link href="#" className="flex items-center gap-2 text-sm font-medium">
          <Home className="h-4 w-4" />
          Home
        </Link>
        <Link href="#" className="flex items-center gap-2 text-sm font-medium">
          <User className="h-4 w-4" />
          Profile
        </Link>
        <Link href="#" className="flex items-center gap-2 text-sm font-medium">
          <Settings className="h-4 w-4" />
          Settings
        </Link>
      </div>

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="#"
                    >
                      <div className="mb-2 mt-4 text-lg font-medium">SeraUI</div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Beautiful UI components built with React and TailwindCSS.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href="#" title="Introduction">
                  Re-usable components built using Radix UI and Tailwind CSS.
                </ListItem>
                <ListItem href="#" title="Installation">
                  How to install dependencies and structure your app.
                </ListItem>
                <ListItem href="#" title="Typography">
                  Styles for headings, paragraphs, lists...etc
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Components</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                <ListItem href="#" title="Buttons">
                  Interactive elements for user actions.
                </ListItem>
                <ListItem href="#" title="Cards">
                  Containers for related content and actions.
                </ListItem>
                <ListItem href="#" title="Modals">
                  Dialogs that appear on top of the main content.
                </ListItem>
                <ListItem href="#" title="Alerts">
                  Messages that communicate information to the user.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="#" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>Documentation</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a"> & { title: string }>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"

