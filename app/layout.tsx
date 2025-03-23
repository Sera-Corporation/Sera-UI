import type React from "react"
import type { Metadata } from "next"
import { Mona_Sans as FontSans } from "next/font/google"
import { Inter } from "next/font/google"
import localFont from "next/font/local"

import "@/app/globals.css"
import "@/styles/custom-scrollbar.css"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import { MainNav } from "@/components/layout/main-nav"
import { Footer } from "@/components/layout/footer"
import { ScrollToTop } from "@/components/scroll-to-top"

// Load Inter font properly using next/font/google
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const fontHeading = localFont({
  src: "../assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
})

export const metadata: Metadata = {
  title: "SeraUI - React, TypeScript, and TailwindCSS UI Component Library",
  description:
    "SeraUI is a beautifully designed component library that helps developers build clean, accessible, and customizable interfaces.",
  keywords: ["react", "typescript", "tailwindcss", "ui", "components", "library", "design system"],
  generator: "v0.dev",
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontHeading.variable,
          inter.variable,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <ScrollToTop />
          <div className="relative flex min-h-screen flex-col">
            <MainNav />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'