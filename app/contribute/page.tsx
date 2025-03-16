import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Github } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Contribute - SeraUI",
  description: "Learn how to provide feedback on the SeraUI project.",
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
          <h1 className="text-3xl font-bold tracking-tight">Feedback</h1>
          <p className="text-muted-foreground">Learn how to provide feedback on the SeraUI project.</p>
        </div>
      </div>

      <div className="space-y-8">
        <p className="text-lg">
          SeraUI is a proprietary UI library. As a valued customer, your feedback helps us improve the library and make it more useful for everyone.
        </p>

        <div className="flex justify-center">
          <Button size="lg" asChild>
            <a href="https://github.com/bigyanadk07" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              Follow Us on GitHub
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
              <p className="text-sm text-muted-foreground mb-5">
                Help us improve by reporting issues through our customer feedback system. Please include detailed steps to reproduce 
                the issue and any relevant information.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" asChild className="w-full">
                <a href="/feedback" rel="noopener noreferrer">
                  Submit Feedback
                </a>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Request Features</CardTitle>
              <CardDescription>Have ideas for improving SeraUI?</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-10">
                We're always looking to enhance SeraUI. Let us know what features would make your development experience better.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" asChild className="w-full">
                <a href="/feature-request" rel="noopener noreferrer">
                  Request Feature
                </a>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Documentation Feedback</CardTitle>
              <CardDescription>Help us make our documentation better.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-5">
                Good documentation is crucial. Let us know if you find any issues or have suggestions to improve our documentation.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" asChild className="w-full">
                <a href="/docs/feedback" rel="noopener noreferrer">
                  Give Feedback
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Usage Guidelines</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Terms of Use</AccordionTrigger>
              <AccordionContent>
                <p className="text-sm text-muted-foreground">
                  SeraUI is a proprietary library. Please review our license agreement for detailed terms of use. 
                  Unauthorized redistribution or modification is not permitted.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Getting Started</AccordionTrigger>
              <AccordionContent>
                <ol className="list-decimal space-y-2 pl-5 text-sm text-muted-foreground">
                  <li>Sign up for a SeraUI account.</li>
                  <li>
                    Install the package: <code>npm install @seraui/components</code>
                  </li>
                  <li>
                    Add your API key to your environment variables.
                  </li>
                  <li>
                    Import and use components in your project.
                  </li>
                  <li>Refer to our documentation for detailed usage instructions.</li>
                </ol>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Best Practices</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                  <li>Follow our implementation guidelines for optimal performance.</li>
                  <li>Use TypeScript for type safety with our components.</li>
                  <li>Check our documentation for recommended usage patterns.</li>
                  <li>Test your implementations thoroughly.</li>
                  <li>Keep your SeraUI package updated to the latest version.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Feedback Process</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                  <li>Use our dedicated feedback channels for suggestions or issues.</li>
                  <li>Include screenshots or videos if applicable.</li>
                  <li>Provide detailed reproduction steps for any bugs.</li>
                  <li>Reference your project ID in communications.</li>
                  <li>Our team reviews all feedback and prioritizes improvements accordingly.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Requesting New Components</h2>
          <p>
            We continuously expand the SeraUI library based on customer needs. Here's how to request new components:
          </p>
          <ol className="list-decimal space-y-2 pl-5">
            <li>Check if the component already exists in our documentation.</li>
            <li>Submit a feature request through our customer portal.</li>
            <li>Describe the component's purpose and functionality.</li>
            <li>Include any design references or examples if available.</li>
            <li>Explain your use case to help us understand the need.</li>
            <li>Our product team will review all requests and prioritize development.</li>
            <li>You'll be notified when components inspired by your request are released.</li>
          </ol>
        </div>

        <div className="rounded-md border p-6">
          <h2 className="text-xl font-bold tracking-tight">Component Usage Example</h2>
          <p className="mt-2 text-sm text-muted-foreground">Here's how to use a typical SeraUI component:</p>
          <div className="mt-4 rounded-md bg-muted p-4">
            <pre className="text-sm">
              <code>{`// In your React component
import React from 'react'
import { Button } from '@seraui/components'

export function MyComponent() {
  return (
    <div>
      <h1>My Application</h1>
      <Button
        variant="default"
        size="default"
        onClick={() => alert('Button clicked!')}
      >
        Click Me
      </Button>
    </div>
  )
}`}</code>
            </pre>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Community</h2>
          <p>Join our customer community to discuss SeraUI, get help, and connect with other users:</p>
          <div className="flex flex-wrap gap-4">
            <Button variant="outline" asChild>
              <a href="https://forum.seraui.com" target="_blank" rel="noopener noreferrer">
                SeraUI Forum
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://discord.gg/BNa2V7YQ" target="_blank" rel="noopener noreferrer">
                Discord
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://x.com/SeraUICorp" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}