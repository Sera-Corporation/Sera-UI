import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, ArrowRight, BookOpen, Code, Github, Package, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Documentation - SeraUI",
  description: "Learn how to use and customize SeraUI components.",
}

export default function DocsPage() {
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
          <h1 className="text-3xl font-bold tracking-tight">Documentation</h1>
          <p className="text-muted-foreground">Learn how to use and customize SeraUI components.</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <BookOpen className="h-6 w-6 text-primary" />
            <CardTitle className="mt-2">Getting Started</CardTitle>
            <CardDescription>Learn how to use SeraUI components in your project.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Follow our step-by-step guide to get up and running with SeraUI in minutes.
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full">
              <Link href="/docs/getting-started">
                Read Guide
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <Package className="h-6 w-6 text-primary" />
            <CardTitle className="mt-2">Components</CardTitle>
            <CardDescription>Explore the component library and learn how to use each component.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Detailed documentation for each component with examples and usage references.
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full">
              <Link href="/components">
                Browse Components
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <Code className="h-6 w-6 text-primary" />
            <CardTitle className="mt-2">Customization</CardTitle>
            <CardDescription>Learn how to customize and extend SeraUI components.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Guides on theming, styling, and creating your own custom components.
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full">
              <Link href="/docs/customization">
                View Guide
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <Github className="h-6 w-6 text-primary" />
            <CardTitle className="mt-2">Contribute</CardTitle>
            <CardDescription>Learn how to contribute to the SeraUI project.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Guidelines for contributing code, reporting issues, and submitting feature requests.
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full">
              <Link href="/docs/contribute">
                Contribute
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="mt-12 space-y-8">
        <h2 className="text-2xl font-bold tracking-tight">Usage</h2>
        <div className="rounded-md bg-muted p-4">
          <pre className="text-sm">
            <code>{`<!-- Just copy and paste the Tailwind CSS code into your project -->
<div className="flex items-center justify-center gap-4">
  <button className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
    Button
  </button>
</div>`}</code>
          </pre>
        </div>

        <h2 className="text-2xl font-bold tracking-tight">Basic Usage</h2>
        <div className="rounded-md bg-muted p-4">
          <pre className="text-sm">
            <code>{`<!-- Copy this Tailwind CSS code directly into your HTML -->
<div className="rounded-lg border bg-card p-4 text-card-foreground shadow-sm">
  <div className="flex flex-col space-y-1.5 pb-4">
    <h3 className="text-lg font-semibold">Card Title</h3>
    <p className="text-sm text-muted-foreground">Card Description</p>
  </div>
  <div className="space-y-4">
    <p>Card Content</p>
  </div>
</div>`}</code>
          </pre>
        </div>

        <h2 className="text-2xl font-bold tracking-tight flex items-center gap-2">
          <Zap className="h-6 w-6 text-primary" />
          Roadmap
        </h2>
        <div className="space-y-4">
          <div className="rounded-md border p-4">
            <h3 className="text-lg font-semibold">Version 1.0 – MVP</h3>
            <p className="text-sm text-muted-foreground">
              Establish the foundation of SeraUI with core features and basic functionality.
            </p>
            <ul className="mt-2 list-inside list-disc text-sm">
              <li>Core Website Structure</li>
              <li>Homepage & Navigation</li>
              <li>Component Library Page</li>
              <li>Component Viewer & Copy Feature</li>
              <li>Dark Mode Integration</li>
              <li>Initial 10 Components</li>
              <li>Basic Documentation</li>
            </ul>
          </div>

          <div className="rounded-md border p-4">
            <h3 className="text-lg font-semibold">Version 1.1 – Enhancements & UX Improvements</h3>
            <p className="text-sm text-muted-foreground">Improve performance, optimize code, and enhance UX/UI.</p>
            <ul className="mt-2 list-inside list-disc text-sm">
              <li>Performance Optimization</li>
              <li>Improved UI/UX</li>
              <li>Better Component Organization</li>
              <li>New Components (5 More)</li>
            </ul>
          </div>

          <div className="rounded-md border p-4">
            <h3 className="text-lg font-semibold">Version 1.2 – Community Contributions & Expansion</h3>
            <p className="text-sm text-muted-foreground">Enable community participation and expand the library.</p>
            <ul className="mt-2 list-inside list-disc text-sm">
              <li>Easy Component Addition System</li>
              <li>Component Customization Panel</li>
              <li>Community Contribution Page</li>
              <li>New Components (5 More)</li>
            </ul>
          </div>

          <div className="rounded-md border p-4">
            <h3 className="text-lg font-semibold">Version 2.0 – Advanced Features & UI Innovation</h3>
            <p className="text-sm text-muted-foreground">Introduce advanced and unique UI components & interactions.</p>
            <ul className="mt-2 list-inside list-disc text-sm">
              <li>Advanced UI Components</li>
              <li>Custom Component Builder</li>
              <li>User Accounts & Saving Favorite Components</li>
              <li>SEO Optimization & Social Sharing</li>
              <li>New Components (10 More)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

