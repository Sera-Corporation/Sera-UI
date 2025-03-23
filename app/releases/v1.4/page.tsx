import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Palette, Copy, Grid, Code } from "lucide-react"

import { Button } from "@/components/ui/button"
import { AnimatedContainer } from "@/components/ui/animated-container"

export const metadata: Metadata = {
  title: "Version 1.4 Release Notes - SeraUI",
  description: "Enhanced component browsing and expanded theming options.",
}

export default function ReleaseNotesPage() {
  return (
    <div className="container py-10">
      <div className="flex items-center gap-4 pb-8">
        <Button variant="outline" size="icon" asChild>
          <Link href="/">
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Back to home</span>
          </Link>
        </Button>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Version 1.4 Release Notes</h1>
          <p className="text-muted-foreground">Enhanced component browsing and expanded theming options.</p>
        </div>
      </div>

      <div className="space-y-12">
        <AnimatedContainer transition={{ duration: 0.4, delay: 0.1 }} className="space-y-6">
          <div className="rounded-lg border bg-card p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Grid className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Pure Tailwind CSS Components</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>Version 1.4 introduces a completely new approach to component delivery:</p>
              <ul className="ml-6 list-disc space-y-2">
                <li>All components are now available as pure Tailwind CSS code</li>
                <li>No need to install any packages or libraries</li>
                <li>Just copy and paste the code into your project</li>
                <li>Works with any framework or vanilla HTML</li>
                <li>React component versions still available for those who prefer them</li>
              </ul>
            </div>
          </div>
        </AnimatedContainer>

        <AnimatedContainer transition={{ duration: 0.4, delay: 0.2 }} className="space-y-6">
          <div className="rounded-lg border bg-card p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Code className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Enhanced Code Viewing Experience</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>We've improved the code viewing and copying experience:</p>
              <ul className="ml-6 list-disc space-y-2">
                <li>Component dialog now shows both Tailwind CSS and React versions</li>
                <li>Tailwind CSS tab is now the default for easy copying</li>
                <li>Added tooltips to the copy button for better user feedback</li>
                <li>Copy button now shows "Copied!" state after clicking</li>
                <li>Better organization of component information in the dialog</li>
              </ul>
            </div>
          </div>
        </AnimatedContainer>

        <AnimatedContainer transition={{ duration: 0.4, delay: 0.3 }} className="space-y-6">
          <div className="rounded-lg border bg-card p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Copy className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Improved Copy Functionality</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>We've enhanced the copy functionality with better user feedback:</p>
              <ul className="ml-6 list-disc space-y-2">
                <li>Added tooltip to the copy button that shows "Copy code" on hover</li>
                <li>Tooltip changes to "Copied!" after clicking the button</li>
                <li>Copy button icon changes to a checkmark when code is copied</li>
                <li>Added toast notification for additional confirmation</li>
                <li>Automatic reset of copy state after 2 seconds</li>
              </ul>
            </div>
          </div>
        </AnimatedContainer>

        <AnimatedContainer transition={{ duration: 0.4, delay: 0.4 }} className="space-y-6">
          <div className="rounded-lg border bg-card p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Palette className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Expanded Theme Options</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>We've added several new theme options to customize your experience:</p>
              <ul className="ml-6 list-disc space-y-2">
                <li>Added "Blue & Pastel Pink" theme with a soft, modern aesthetic</li>
                <li>Added "Sky Blue & Bubblegum Pink" theme for a vibrant, playful look</li>
                <li>Added "Terracotta & Teal" theme for an earthy, natural palette</li>
                <li>Improved theme toggle dropdown with better organization</li>
                <li>Added visual indicators for the currently selected theme</li>
              </ul>
            </div>
          </div>
        </AnimatedContainer>

        <div className="flex justify-center pt-8">
          <Button asChild size="lg">
            <Link href="/components?category=all">Explore Components</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

