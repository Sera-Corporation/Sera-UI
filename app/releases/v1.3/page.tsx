import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, LayoutGrid, Maximize, Filter, Search, Smartphone, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { AnimatedContainer } from "@/components/ui/animated-container"

export const metadata: Metadata = {
  title: "Version 1.3 Release Notes - SeraUI",
  description: "Enhanced user experience with improved component browsing and interaction.",
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
          <h1 className="text-3xl font-bold tracking-tight">Version 1.3 Release Notes</h1>
          <p className="text-muted-foreground">
            Enhanced user experience with improved component browsing and interaction.
          </p>
        </div>
      </div>

      <div className="space-y-12">
        <AnimatedContainer transition={{ duration: 0.4, delay: 0.1 }} className="space-y-6">
          <div className="rounded-lg border bg-card p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <LayoutGrid className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Grid-Based Component Layout</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>Version 1.3 introduces a completely redesigned component browsing experience:</p>
              <ul className="ml-6 list-disc space-y-2">
                <li>Intuitive card-based grid layout for all components</li>
                <li>Visual preview of components directly in the cards</li>
                <li>Category badges for quick identification</li>
                <li>Responsive grid that adapts to all screen sizes</li>
                <li>Improved visual hierarchy and information architecture</li>
              </ul>
            </div>
          </div>
        </AnimatedContainer>

        <AnimatedContainer transition={{ duration: 0.4, delay: 0.2 }} className="space-y-6">
          <div className="rounded-lg border bg-card p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Maximize className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Component Details Modal</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>We've enhanced the component viewing experience with a modal-based approach:</p>
              <ul className="ml-6 list-disc space-y-2">
                <li>Clean, focused modal interface for viewing component details</li>
                <li>Tabbed interface to switch between preview and code</li>
                <li>One-click code copying functionality</li>
                <li>Direct links to documentation and source code</li>
                <li>Improved accessibility for keyboard navigation</li>
              </ul>
            </div>
          </div>
        </AnimatedContainer>

        <AnimatedContainer transition={{ duration: 0.4, delay: 0.3 }} className="space-y-6">
          <div className="rounded-lg border bg-card p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Filter className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Improved Category Filtering</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>We've completely revamped the category filtering system:</p>
              <ul className="ml-6 list-disc space-y-2">
                <li>Instant filtering of components by category</li>
                <li>Visual feedback for active category filters</li>
                <li>Improved sidebar navigation for categories</li>
                <li>Persistent filter state across page navigation</li>
                <li>Clear indication of component count per category</li>
              </ul>
            </div>
          </div>
        </AnimatedContainer>

        <AnimatedContainer transition={{ duration: 0.4, delay: 0.4 }} className="space-y-6">
          <div className="rounded-lg border bg-card p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Search className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Enhanced Search</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>Finding components is now faster and more intuitive:</p>
              <ul className="ml-6 list-disc space-y-2">
                <li>Real-time search results as you type</li>
                <li>Search across component names and descriptions</li>
                <li>Highlighted search terms in results</li>
                <li>Improved search algorithm for better relevance</li>
                <li>Combined search and category filtering</li>
              </ul>
            </div>
          </div>
        </AnimatedContainer>

        <AnimatedContainer transition={{ duration: 0.4, delay: 0.5 }} className="space-y-6">
          <div className="rounded-lg border bg-card p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Smartphone className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Responsive Design</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>The entire UI has been optimized for all devices:</p>
              <ul className="ml-6 list-disc space-y-2">
                <li>Fully responsive grid layout that adapts to any screen size</li>
                <li>Mobile-optimized component cards and details view</li>
                <li>Collapsible sidebar for smaller screens</li>
                <li>Touch-friendly interface elements</li>
                <li>Improved navigation for mobile users</li>
              </ul>
            </div>
          </div>
        </AnimatedContainer>

        <AnimatedContainer transition={{ duration: 0.4, delay: 0.6 }} className="space-y-6">
          <div className="rounded-lg border bg-card p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Zap className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Performance Improvements</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>We've made significant performance enhancements:</p>
              <ul className="ml-6 list-disc space-y-2">
                <li>Optimized component rendering for faster page loads</li>
                <li>Improved code splitting for better initial load times</li>
                <li>Enhanced caching strategies for component data</li>
                <li>Reduced layout shifts during page navigation</li>
                <li>Fixed footer overlap issues for better user experience</li>
              </ul>
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

