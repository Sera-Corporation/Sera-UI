import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Getting Started - SeraUI",
  description: "Learn how to install and set up SeraUI in your project.",
}

export default function GettingStartedPage() {
  return (
    <div className="container py-10">
      <div className="flex items-center gap-4 pb-8">
        <Button variant="outline" size="icon" asChild>
          <Link href="/docs">
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Back to docs</span>
          </Link>
        </Button>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Getting Started</h1>
          <p className="text-muted-foreground">Learn how to install and set up SeraUI in your project.</p>
        </div>
      </div>

      <div className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Installation</h2>
          <p>
            SeraUI is a React component library built with TypeScript and TailwindCSS. You can install it using npm,
            yarn, or pnpm.
          </p>

          <Tabs defaultValue="npm">
            <TabsList>
              <TabsTrigger value="npm">npm</TabsTrigger>
              <TabsTrigger value="yarn">yarn</TabsTrigger>
              <TabsTrigger value="pnpm">pnpm</TabsTrigger>
            </TabsList>
            <TabsContent value="npm" className="mt-4 rounded-md bg-muted p-4">
              <pre className="text-sm">
                <code>npm install seraui</code>
              </pre>
            </TabsContent>
            <TabsContent value="yarn" className="mt-4 rounded-md bg-muted p-4">
              <pre className="text-sm">
                <code>yarn add seraui</code>
              </pre>
            </TabsContent>
            <TabsContent value="pnpm" className="mt-4 rounded-md bg-muted p-4">
              <pre className="text-sm">
                <code>pnpm add seraui</code>
              </pre>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Setup</h2>
          <p>
            After installing SeraUI, you need to set up TailwindCSS in your project if you haven't already. SeraUI
            components use TailwindCSS for styling.
          </p>

          <div className="rounded-md bg-muted p-4">
            <pre className="text-sm">
              <code>{`// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './node_modules/seraui/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`}</code>
            </pre>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Usage</h2>
          <p>Import and use SeraUI components in your React application:</p>

          <div className="rounded-md bg-muted p-4">
            <pre className="text-sm">
              <code>{`import { Button, Card, Alert } from 'seraui'

export default function MyComponent() {
  return (
    <div>
      <Card>
        <Card.Header>
          <Card.Title>My Card</Card.Title>
          <Card.Description>This is a card component from SeraUI.</Card.Description>
        </Card.Header>
        <Card.Content>
          <p>Card content goes here.</p>
        </Card.Content>
        <Card.Footer>
          <Button>Click Me</Button>
        </Card.Footer>
      </Card>
      
      <Alert variant="info" className="mt-4">
        <Alert.Title>Information</Alert.Title>
        <Alert.Description>This is an informational alert.</Alert.Description>
      </Alert>
    </div>
  )
}`}</code>
            </pre>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Theming</h2>
          <p>
            SeraUI supports theming through TailwindCSS. You can customize the colors, typography, and other design
            tokens in your tailwind.config.js file.
          </p>

          <div className="rounded-md bg-muted p-4">
            <pre className="text-sm">
              <code>{`// tailwind.config.js
module.exports = {
  // ...
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3b82f6',
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        // Add more custom colors here
      },
      // Customize other design tokens
    },
  },
  // ...
}`}</code>
            </pre>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Dark Mode</h2>
          <p>
            SeraUI supports dark mode out of the box. You can toggle between light and dark mode using the ThemeProvider
            component.
          </p>

          <div className="rounded-md bg-muted p-4">
            <pre className="text-sm">
              <code>{`// _app.tsx or layout.tsx
import { ThemeProvider } from 'seraui'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="system" enableSystem>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}`}</code>
            </pre>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Next Steps</h2>
          <p>
            Now that you have SeraUI set up in your project, you can start building your UI with our components. Check
            out the{" "}
            <Link href="/components" className="text-primary underline">
              Components
            </Link>{" "}
            section to see all available components and their usage examples.
          </p>
          <p>
            If you have any questions or need help, feel free to{" "}
            <Link href="/docs/contribute" className="text-primary underline">
              contribute
            </Link>{" "}
            or open an issue on our{" "}
            <Link href="https://github.com/yourusername/seraui" className="text-primary underline">
              GitHub repository
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  )
}

