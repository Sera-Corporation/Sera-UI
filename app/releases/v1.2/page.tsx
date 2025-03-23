import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, PlusCircle, Sliders, Users, FileText, Layout, Palette } from "lucide-react"

import { Button } from "@/components/ui/button"
import { AnimatedContainer } from "@/components/ui/animated-container"

export const metadata: Metadata = {
  title: "Version 1.2 Release Notes - SeraUI",
  description: "Community contributions, component customization, and library expansion.",
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
          <h1 className="text-3xl font-bold tracking-tight">Version 1.2 Release Notes</h1>
          <p className="text-muted-foreground">
            Community contributions, component customization, and library expansion.
          </p>
        </div>
      </div>

      <div className="space-y-12">
        <AnimatedContainer transition={{ duration: 0.4, delay: 0.1 }} className="space-y-6">
          <div className="rounded-lg border bg-card p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <PlusCircle className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Easy Component Addition System</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>Version 1.2 introduces a streamlined system for adding new components to the library:</p>
              <ul className="ml-6 list-disc space-y-2">
                <li>Component generator CLI tool for scaffolding new components</li>
                <li>Standardized component structure and documentation templates</li>
                <li>Automated testing and validation for new components</li>
                <li>Integration with the component showcase system</li>
              </ul>
            </div>
          </div>
        </AnimatedContainer>

        <AnimatedContainer transition={{ duration: 0.4, delay: 0.2 }} className="space-y-6">
          <div className="rounded-lg border bg-card p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Sliders className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Component Customization Panel</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>We've added an interactive panel for customizing components to your specific needs:</p>
              <ul className="ml-6 list-disc space-y-2">
                <li>Live component preview with real-time updates</li>
                <li>Visual controls for adjusting component properties</li>
                <li>Theme-aware customization options</li>
                <li>Code generation for customized components</li>
                <li>Save and share custom component configurations</li>
              </ul>
            </div>
          </div>
        </AnimatedContainer>

        <AnimatedContainer transition={{ duration: 0.4, delay: 0.3 }} className="space-y-6">
          <div className="rounded-lg border bg-card p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Community Contribution Page</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>We've created a platform for community members to share their components:</p>
              <ul className="ml-6 list-disc space-y-2">
                <li>Community showcase for user-submitted components</li>
                <li>Voting and feedback system for community components</li>
                <li>Contributor profiles and recognition</li>
                <li>Guidelines and resources for contributors</li>
                <li>Process for promoting community components to the official library</li>
              </ul>
            </div>
          </div>
        </AnimatedContainer>

        <AnimatedContainer transition={{ duration: 0.4, delay: 0.4 }} className="space-y-6">
          <div className="rounded-lg border bg-card p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <FileText className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Enhanced Documentation</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>We've significantly improved our documentation:</p>
              <ul className="ml-6 list-disc space-y-2">
                <li>Comprehensive API references for all components</li>
                <li>Interactive examples with editable code</li>
                <li>Usage guidelines and best practices</li>
                <li>Accessibility documentation for each component</li>
                <li>Improved search and navigation</li>
                <li>Responsive design patterns and examples</li>
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
              <p>Version 1.2 introduces five new components to the library:</p>
              <ul className="ml-6 list-disc space-y-2">
                <li>
                  <strong>Data Tables:</strong> Powerful tables with sorting, filtering, and pagination
                </li>
                <li>
                  <strong>File Upload:</strong> Drag and drop file upload with preview and validation
                </li>
                <li>
                  <strong>Calendar:</strong> Date picker and calendar components
                </li>
                <li>
                  <strong>Charts:</strong> Data visualization components
                </li>
                <li>
                  <strong>Skeleton Loaders:</strong> Loading state placeholders for components
                </li>
              </ul>
            </div>
          </div>
        </AnimatedContainer>

        <AnimatedContainer transition={{ duration: 0.4, delay: 0.6 }} className="space-y-6">
          <div className="rounded-lg border bg-card p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Palette className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Theme Builder</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>We've added a visual tool to create and customize your theme:</p>
              <ul className="ml-6 list-disc space-y-2">
                <li>Interactive color palette selection</li>
                <li>Typography customization</li>
                <li>Border radius and spacing adjustments</li>
                <li>Dark mode preview and customization</li>
                <li>Export theme as Tailwind config</li>
                <li>Save and share themes</li>
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

