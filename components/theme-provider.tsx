"use client"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      enableColorScheme
      storageKey="sera-ui-theme"
      forcedTheme={props.forcedTheme}
    >
      {children}
    </NextThemesProvider>
  )
}

