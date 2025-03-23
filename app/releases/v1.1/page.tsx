import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Zap, Sparkles, FolderTree, MousePointer, Layout } from "lucide-react"

import { Button } from "@/components/ui/button"
import { AnimatedContainer } from "@/components/ui/animated-container"
import { getNewComponents } from "@/lib/component-metadata"

export const metadata: Metadata = {
  title: "Version 1.1 Release Notes - SeraUI",
  description: "Performance optimizations, improved UI/UX, and five new components.",
}

export default function ReleaseNotesPage() {
  const newComponents = getNewComponents()

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
          <h1 className="text-3xl font-bold tracking-tight">Version 1.1 Release Notes</h1>
          <p className="text-muted-foreground">Performance optimizations, improved UI/UX, and five new components.</p>
        </div>
      </div>

      <div className="space-y-12">
        <AnimatedContainer transition={{ duration: 0.4, delay: 0.1 }} className="space-y-6">
          <div className="rounded-lg border bg-card p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Zap className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Performance Optimization</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>Version 1.1 introduces several performance improvements to make SeraUI faster and more efficient:</p>
              <ul className="ml-6 list-disc space-y-2">
                <li>Implemented lazy loading for components to reduce initial load time</li>
                <li>Reduced re-renders with React.memo and useCallback for better performance</li>
                <li>Optimized bundle size by code splitting and better dependency management</li>
                <li>Improved rendering performance with memoization of expensive calculations</li>
              </ul>
            </div>
          </div>
        </AnimatedContainer>

        <AnimatedContainer transition={{ duration: 0.4, delay: 0.2 }} className="space-y-6">
          <div className="rounded-lg border bg-card p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Sparkles className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Improved UI/UX</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>We've enhanced the user experience with smooth animations and better visual feedback:</p>
              <ul className="ml-6 list-disc space-y-2">
                <li>Added Framer Motion for smooth, physics-based animations</li>
                <li>Improved component transitions and hover states</li>
                <li>Enhanced visual feedback for interactive elements</li>
                <li>Added AnimatedContainer component for easy animation implementation</li>
              </ul>
            </div>
          </div>
        </AnimatedContainer>

        <AnimatedContainer transition={{ duration: 0.4, delay: 0.3 }} className="space-y-6">
          <div className="rounded-lg border bg-card p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <FolderTree className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Better Component Organization</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>We've refactored our component structure for better maintainability and reusability:</p>
              <ul className="ml-6 list-disc space-y-2">
                <li>Created a component metadata system for better organization</li>
                <li>Implemented a more consistent API across components</li>
                <li>Improved TypeScript types for better developer experience</li>
                <li>Enhanced component documentation with more examples</li>
              </ul>
            </div>
          </div>
        </AnimatedContainer>

        <AnimatedContainer transition={{ duration: 0.4, delay: 0.4 }} className="space-y-6">
          <div className="rounded-lg border bg-card p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <MousePointer className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Custom Scrollbar & Better Spacing</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>We've improved the overall look and feel with better spacing and custom scrollbars:</p>
              <ul className="ml-6 list-disc space-y-2">
                <li>Added custom scrollbar styling for a more polished look</li>
                <li>Improved spacing and layout consistency across components</li>
                <li>Enhanced responsive behavior for better mobile experience</li>
                <li>Added content container classes for consistent spacing</li>
              </ul>
            </div>
          </div>
        </AnimatedContainer>

        <AnimatedContainer transition={{ duration: 0.4, delay: 0.5 }} className="space-y-6">
          <div className="rounded-lg border bg-card p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Layout className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">New Components</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>Version 1.1 introduces five new components to expand the SeraUI library:</p>
              <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {newComponents.map((component) => (
                  <Link
                    key={component.id}
                    href={component.href}
                    className="group rounded-lg border p-4 transition-colors hover:bg-muted/50"
                  >
                    <h3 className="font-semibold">{component.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{component.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </AnimatedContainer>

        <div className="flex justify-center pt-8">
          <Button asChild size="lg">
            <Link href="/components?category=all">Explore All Components</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

