import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Github } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Contribute - SeraUI",
  description: "Learn how to contribute to the SeraUI project.",
}

export default function ContributePage() {
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
          <h1 className="text-3xl font-bold tracking-tight">Contribute</h1>
          <p className="text-muted-foreground">Learn how to contribute to the SeraUI project.</p>
        </div>
      </div>

      <div className="space-y-8">
        <p className="text-lg">
          SeraUI is an open-source project, and we welcome contributions from the community. Whether you're fixing a
          bug, adding a feature, or improving documentation, your help is appreciated.
        </p>

        <div className="flex justify-center">
          <Button size="lg" asChild>
            <a href="https://github.com/yourusername/seraui" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              View on GitHub
            </a>
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Report Issues</CardTitle>
              <CardDescription>Found a bug or have a feature request?</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Help us improve by reporting issues on GitHub. Please include detailed steps to reproduce the issue and
                any relevant information.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" asChild className="w-full">
                <a href="https://github.com/yourusername/seraui/issues/new" target="_blank" rel="noopener noreferrer">
                  Open an Issue
                </a>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Submit Pull Requests</CardTitle>
              <CardDescription>Want to contribute code to SeraUI?</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                We welcome pull requests for bug fixes, new features, and improvements. Please follow our contribution
                guidelines.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" asChild className="w-full">
                <a href="https://github.com/yourusername/seraui/pulls" target="_blank" rel="noopener noreferrer">
                  Submit a PR
                </a>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Improve Documentation</CardTitle>
              <CardDescription>Help us make our documentation better.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Good documentation is crucial for any project. Help us improve our docs by fixing typos, adding
                examples, or clarifying instructions.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" asChild className="w-full">
                <a
                  href="https://github.com/yourusername/seraui/tree/main/docs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Docs Source
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Contribution Guidelines</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Code of Conduct</AccordionTrigger>
              <AccordionContent>
                <p className="text-sm text-muted-foreground">
                  We expect all contributors to follow our Code of Conduct. Be respectful, inclusive, and considerate in
                  all interactions.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Development Setup</AccordionTrigger>
              <AccordionContent>
                <ol className="list-decimal space-y-2 pl-5 text-sm text-muted-foreground">
                  <li>Fork the repository on GitHub.</li>
                  <li>
                    Clone your fork: <code>git clone https://github.com/yourusername/seraui.git</code>
                  </li>
                  <li>
                    Install dependencies: <code>npm install</code>
                  </li>
                  <li>
                    Create a new branch: <code>git checkout -b feature/your-feature-name</code>
                  </li>
                  <li>Make your changes and commit them.</li>
                  <li>
                    Push to your fork: <code>git push origin feature/your-feature-name</code>
                  </li>
                  <li>Create a pull request on GitHub.</li>
                </ol>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Coding Standards</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                  <li>Follow the existing code style and formatting.</li>
                  <li>Write clean, readable, and maintainable code.</li>
                  <li>Use TypeScript for type safety.</li>
                  <li>Write tests for your code when applicable.</li>
                  <li>Document your code with comments when necessary.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Pull Request Process</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                  <li>Ensure your code passes all tests and linting.</li>
                  <li>Update documentation if necessary.</li>
                  <li>Add a clear description of your changes in the PR.</li>
                  <li>Reference any related issues in your PR description.</li>
                  <li>Be responsive to feedback and make requested changes.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Adding New Components</h2>
          <p>
            We encourage contributions of new components to expand the SeraUI library. Here's how to add a new
            component:
          </p>
          <ol className="list-decimal space-y-2 pl-5">
            <li>Check if the component already exists or if there's an open issue/PR for it.</li>
            <li>Create a new issue to discuss the component if it's a significant addition.</li>
            <li>Follow our component structure and naming conventions.</li>
            <li>Implement the component with TypeScript and TailwindCSS.</li>
            <li>Write documentation and usage examples.</li>
            <li>Add tests for the component.</li>
            <li>Submit a pull request with your new component.</li>
          </ol>
        </div>

        <div className="rounded-md border p-6">
          <h2 className="text-xl font-bold tracking-tight">Component Structure</h2>
          <p className="mt-2 text-sm text-muted-foreground">When creating a new component, follow this structure:</p>
          <div className="mt-4 rounded-md bg-muted p-4">
            <pre className="text-sm">
              <code>{`// components/button/button.tsx
import * as React from 'react'
import { cn } from '../../lib/utils'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'secondary' | 'destructive' | 'outline' | 'ghost' | 'link'
  size?: 'default' | 'sm' | 'lg' | 'icon'
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    return (
      <button
        className={cn(
          // Base styles
          'inline-flex items-center justify-center rounded-md font-medium transition-colors',
          // Variant styles
          variant === 'default' && 'bg-primary text-primary-foreground hover:bg-primary/90',
          // Size styles
          size === 'default' && 'h-10 px-4 py-2',
          // Custom className
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

// components/button/index.ts
export * from './button'`}</code>
            </pre>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Community</h2>
          <p>Join our community to discuss SeraUI, get help, and connect with other contributors:</p>
          <div className="flex flex-wrap gap-4">
            <Button variant="outline" asChild>
              <a href="https://github.com/yourusername/seraui/discussions" target="_blank" rel="noopener noreferrer">
                GitHub Discussions
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://discord.gg/seraui" target="_blank" rel="noopener noreferrer">
                Discord
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://twitter.com/seraui" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

