"use client"
import { Moon, Sun, Palette } from "lucide-react"
import type React from "react"
import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function ThemeToggle() {
  const { setTheme, theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [currentTheme, setCurrentTheme] = useState<string | undefined>(undefined)

  // Ensure component is mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
    // Initialize currentTheme once mounted
    setCurrentTheme(theme)
  }, [theme])

  // Force a re-render when theme changes
  useEffect(() => {
    if (mounted) {
      document.documentElement.style.setProperty("--theme-transition", "true")

      // Force a repaint to ensure theme changes are applied immediately
      const forceRepaint = document.body.offsetHeight

      // Small delay to ensure theme is applied
      const timer = setTimeout(() => {
        document.documentElement.style.removeProperty("--theme-transition")
      }, 300)

      return () => clearTimeout(timer)
    }
  }, [theme, mounted])

  const handleThemeChange = (newTheme: string) => {
    setCurrentTheme(newTheme) // Update local state immediately
    setTheme(newTheme) // Update theme system
  }

  if (!mounted) {
    return (
      <Button variant="outline" size="icon">
        <Sun className="h-[1.2rem] w-[1.2rem]" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    )
  }

  const isCustomTheme = currentTheme !== "light" && currentTheme !== "dark" && currentTheme !== "system"

  return (
    <TooltipProvider>
      <Tooltip>
        <DropdownMenu>
          <TooltipTrigger asChild>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                {currentTheme === "light" && <Sun className="h-[1.2rem] w-[1.2rem]" />}
                {currentTheme === "dark" && <Moon className="h-[1.2rem] w-[1.2rem]" />}
                {isCustomTheme && <Palette className="h-[1.2rem] w-[1.2rem]" />}
                {currentTheme === "system" &&
                  (resolvedTheme === "dark" ? (
                    <Moon className="h-[1.2rem] w-[1.2rem]" />
                  ) : (
                    <Sun className="h-[1.2rem] w-[1.2rem]" />
                  ))}
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
          </TooltipTrigger>
          <TooltipContent>
            <p>Change theme</p>
          </TooltipContent>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Standard Themes</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => handleThemeChange("light")}>
              <Sun className="mr-2 h-4 w-4" />
              Light
              {currentTheme === "light" && <CheckIcon className="ml-auto h-4 w-4" />}
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleThemeChange("dark")}>
              <Moon className="mr-2 h-4 w-4" />
              Dark
              {currentTheme === "dark" && <CheckIcon className="ml-auto h-4 w-4" />}
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleThemeChange("system")}>
              <div className="mr-2 flex h-4 w-4 items-center justify-center">
                <Sun className="h-3 w-3 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-3 w-3 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </div>
              System
              {currentTheme === "system" && <CheckIcon className="ml-auto h-4 w-4" />}
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuLabel>Custom Themes</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => handleThemeChange("blue-pink")}>
              <div className="mr-2 h-4 w-4 rounded-full bg-[#3b82f6]" />
              Blue & Pastel Pink
              {currentTheme === "blue-pink" && <CheckIcon className="ml-auto h-4 w-4" />}
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleThemeChange("terracotta-teal")}>
              <div className="mr-2 h-4 w-4 rounded-full bg-[#c2410c]" />
              Terracotta & Teal
              {currentTheme === "terracotta-teal" && <CheckIcon className="ml-auto h-4 w-4" />}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </Tooltip>
    </TooltipProvider>
  )
}

function CheckIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

