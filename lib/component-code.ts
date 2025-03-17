"use client"

export function getComponentCode(componentId: string): string {
  const codeExamples: Record<string, string> = {
    buttons: `import * as React from "react"
import { Button } from "@/components/ui/button"

export function ButtonExample() {
  return (
    <div className="flex flex-wrap gap-4">
      <Button variant="default">Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  )
}`,
    cards: `import * as React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function CardExample() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <Button>Action</Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button>Submit</Button>
        </CardFooter>
      </Card>
    </div>
  )
}`,
"animated-button": `import * as React from "react"
import { useState } from "react"

export function AnimatedButton({ children }: { children: React.ReactNode }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={\`cursor-pointer bg-[#e4c590] font-serif text-black w-48 h-12 tracking-wider text-center leading-[3rem] relative overflow-hidden z-10 transition-all duration-500 \${isHovered ? 'text-white border border-[#e4c590]' : ''}\`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      {[0, 1, 2, 3].map((index) => (
        <span 
          key={index}
          style={{
            position: 'absolute',
            width: '25%',
            height: '100%',
            backgroundColor: 'black',
            borderRadius: '50%',
            left: \`\${index * 25}%\`,
            transform: isHovered ? 'translateY(0) scale(150%)' : 'translateY(150%)',
            transition: 'transform 0.5s',
            transitionDelay: \`\${index * 100}ms\`,
            zIndex: -1,
          }}
        />
      ))}
    </div>
  )
}`,

    // ... other component code examples
  }

  return codeExamples[componentId] || `// Code example coming soon for ${componentId}`
}

export function getTailwindCode(componentId: string): string {
  const tailwindExamples: Record<string, string> = {
    buttons: `<div className="flex flex-wrap gap-4">
  <button className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
    Default
  </button>
  
  <button className="inline-flex items-center justify-center rounded-md bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground ring-offset-background transition-colors hover:bg-secondary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
    Secondary
  </button>
  
  <button className="inline-flex items-center justify-center rounded-md bg-destructive px-4 py-2 text-sm font-medium text-destructive-foreground ring-offset-background transition-colors hover:bg-destructive/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
    Destructive
  </button>
  
  <button className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
    Outline
  </button>
  
  <button className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
    Ghost
  </button>
  
  <button className="inline-flex items-center justify-center rounded-md text-sm font-medium text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
    Link
  </button>
</div>`,

    cards: `<div className="grid gap-6 md:grid-cols-2">
  {/* Card 1 */}
  <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
    <div className="flex flex-col space-y-1.5 p-6">
      <h3 className="text-2xl font-semibold leading-none tracking-tight">Card Title</h3>
      <p className="text-sm text-muted-foreground">Card Description</p>
    </div>
    <div className="p-6">
      <p>Card Content</p>
    </div>
    <div className="flex items-center p-6 pt-0">
      <button className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
        Action
      </button>
    </div>
  </div>
  
  {/* Card 2 */}
  <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
    <div className="flex flex-col space-y-1.5 p-6">
      <h3 className="text-2xl font-semibold leading-none tracking-tight">Card Title</h3>
      <p className="text-sm text-muted-foreground">Card Description</p>
    </div>
    <div className="p-6">
      <p>Card Content</p>
    </div>
    <div className="flex items-center justify-between p-6 pt-0">
      <button className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
        Cancel
      </button>
      <button className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
        Submit
      </button>
    </div>
  </div>
</div>`,


    alerts: `{/* Info Alert */}
<div role="alert" className="relative rounded-lg border bg-background p-4 text-foreground">
  <div className="flex items-start gap-4">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5 text-blue-500">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
    </svg>
    <div className="flex-1">
      <h5 className="mb-1 font-medium leading-none tracking-tight">Info</h5>
      <p className="text-sm text-muted-foreground">This is an informational alert.</p>
    </div>
  </div>
</div>

{/* Error Alert */}
<div role="alert" className="relative rounded-lg border border-destructive/50 bg-destructive/10 p-4 text-destructive">
  <div className="flex items-start gap-4">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
    </svg>
    <div className="flex-1">
      <h5 className="mb-1 font-medium leading-none tracking-tight">Error</h5>
      <p className="text-sm opacity-80">This is an error alert.</p>
    </div>
  </div>
</div>

{/* Tip Alert */}
<div role="alert" className="relative rounded-lg border bg-background p-4 text-foreground">
  <div className="flex items-start gap-4">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5 text-green-500">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
    </svg>
    <div className="flex-1">
      <h5 className="mb-1 font-medium leading-none tracking-tight">Tip</h5>
      <p className="text-sm text-muted-foreground">This is a tip alert.</p>
    </div>
  </div>
</div>`,

    badges: `<div className="flex flex-wrap gap-4">
  {/* Default Badge */}
  <span className="inline-flex items-center rounded-full border border-transparent bg-primary px-2.5 py-0.5 text-xs font-semibold text-primary-foreground">
    Default
  </span>
  
  {/* Secondary Badge */}
  <span className="inline-flex items-center rounded-full border border-transparent bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground">
    Secondary
  </span>
  
  {/* Outline Badge */}
  <span className="inline-flex items-center rounded-full border border-primary bg-transparent px-2.5 py-0.5 text-xs font-semibold text-foreground">
    Outline
  </span>
  
  {/* Destructive Badge */}
  <span className="inline-flex items-center rounded-full border border-transparent bg-destructive px-2.5 py-0.5 text-xs font-semibold text-destructive-foreground">
    Destructive
  </span>
  
  {/* Custom Color Badges */}
  <div className="flex items-center gap-2">
    <span className="inline-flex items-center rounded-full border border-transparent bg-blue-500 px-2.5 py-0.5 text-xs font-semibold text-white">
      Blue
    </span>
    <span className="inline-flex items-center rounded-full border border-transparent bg-green-500 px-2.5 py-0.5 text-xs font-semibold text-white">
      Green
    </span>
    <span className="inline-flex items-center rounded-full border border-transparent bg-yellow-500 px-2.5 py-0.5 text-xs font-semibold text-black">
      Yellow
    </span>
    <span className="inline-flex items-center rounded-full border border-transparent bg-purple-500 px-2.5 py-0.5 text-xs font-semibold text-white">
      Purple
    </span>
  </div>
</div>`,

    tooltips: `{/* Basic Tooltip Structure (requires JavaScript for functionality) */}
<div className="relative inline-block">
  {/* Tooltip Trigger */}
  <button className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
    Hover Me
  </button>
  
  {/* Tooltip Content (hidden by default) */}
  <div className="absolute bottom-full left-1/2 z-50 mb-2 -translate-x-1/2 rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 hidden">
    <p>This is a tooltip</p>
    {/* Arrow */}
    <div className="absolute left-1/2 top-full -translate-x-1/2 border-8 border-transparent border-t-popover"></div>
  </div>
</div>

{/* Icon with Tooltip */}
<div className="relative inline-block ml-4">
  <button className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-input bg-background text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
    </svg>
    <span className="sr-only">Info</span>
  </button>
  
  {/* Tooltip Content (hidden by default) */}
  <div className="absolute bottom-full left-1/2 z-50 mb-2 -translate-x-1/2 rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 hidden">
    <p>Additional information</p>
    {/* Arrow */}
    <div className="absolute left-1/2 top-full -translate-x-1/2 border-8 border-transparent border-t-popover"></div>
  </div>
</div>`,

    notifications: `{/* Success Notification */}
<div role="alert" className="rounded-lg border-l-4 border-l-green-500 bg-background p-4 shadow-md">
  <div className="flex items-start gap-4">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mt-0.5 h-5 w-5 text-green-500">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    <div className="flex-1">
      <h4 className="font-medium">Success!</h4>
      <p className="mt-1 text-sm text-muted-foreground">Your action was completed successfully.</p>
    </div>
    <button className="rounded-full p-1 text-muted-foreground hover:bg-muted hover:text-foreground">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
      <span className="sr-only">Close</span>
    </button>
  </div>
</div>

{/* Error Notification */}
<div role="alert" className="rounded-lg border-l-4 border-l-red-500 bg-background p-4 shadow-md">
  <div className="flex items-start gap-4">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mt-0.5 h-5 w-5 text-red-500">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
    </svg>
    <div className="flex-1">
      <h4 className="font-medium">Error!</h4>
      <p className="mt-1 text-sm text-muted-foreground">There was a problem with your request.</p>
    </div>
    <button className="rounded-full p-1 text-muted-foreground hover:bg-muted hover:text-foreground">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
      <span className="sr-only">Close</span>
    </button>
  </div>
</div>

{/* Info Notification */}
<div role="alert" className="rounded-lg border-l-4 border-l-blue-500 bg-background p-4 shadow-md">
  <div className="flex items-start gap-4">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mt-0.5 h-5 w-5   fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mt-0.5 h-5 w-5 text-blue-500">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
    </svg>
    <div className="flex-1">
      <h4 className="font-medium">Information</h4>
      <p className="mt-1 text-sm text-muted-foreground">Here's some information you might find useful.</p>
    </div>
    <button className="rounded-full p-1 text-muted-foreground hover:bg-muted hover:text-foreground">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
      <span className="sr-only">Close</span>
    </button>
  </div>
</div>

{/* Warning Notification */}
<div role="alert" className="rounded-lg border-l-4 border-l-amber-500 bg-background p-4 shadow-md">
  <div className="flex items-start gap-4">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mt-0.5 h-5 w-5 text-amber-500">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
    </svg>
    <div className="flex-1">
      <h4 className="font-medium">Warning</h4>
      <p className="mt-1 text-sm text-muted-foreground">Your account will expire soon.</p>
    </div>
    <button className="rounded-full p-1 text-muted-foreground hover:bg-muted hover:text-foreground">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
      <span className="sr-only">Close</span>
    </button>
  </div>
</div>`,

    // Add more Tailwind examples for other components
    dropdowns: `{/* Basic Dropdown (requires JavaScript for functionality) */}
<div className="relative inline-block text-left">
  {/* Dropdown Trigger */}
  <button className="inline-flex w-full justify-between rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
    <span>Select an option</span>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="ml-2 h-4 w-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  </button>
  
  {/* Dropdown Menu (hidden by default) */}
  <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md border bg-popover shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none hidden">
    <div className="py-1">
      <a href="#" className="block px-4 py-2 text-sm text-popover-foreground hover:bg-accent hover:text-accent-foreground">Option 1</a>
      <a href="#" className="block px-4 py-2 text-sm text-popover-foreground hover:bg-accent hover:text-accent-foreground">Option 2</a>
      <a href="#" className="block px-4 py-2 text-sm text-popover-foreground hover:bg-accent hover:text-accent-foreground">Option 3</a>
      <a href="#" className="block px-4 py-2 text-sm text-popover-foreground hover:bg-accent hover:text-accent-foreground">Option 4</a>
    </div>
  </div>
</div>`,

    progress: `{/* Standard Progress Bar */}
<div className="relative h-4 w-full overflow-hidden rounded-full bg-secondary">
  <div className="h-full w-[60%] bg-primary transition-all"></div>
</div>

{/* Progress Bar with Label */}
<div className="space-y-2">
  <div className="flex justify-between">
    <span className="text-sm font-medium">Progress</span>
    <span className="text-sm font-medium">60%</span>
  </div>
  <div className="relative h-4 w-full overflow-hidden rounded-full bg-secondary">
    <div className="h-full w-[60%] bg-primary transition-all"></div>
  </div>
</div>

{/* Colored Progress Bars */}
<div className="space-y-2">
  <div className="relative h-2 w-full overflow-hidden rounded-full bg-blue-100 dark:bg-blue-950">
    <div className="h-full w-[25%] bg-blue-500 transition-all"></div>
  </div>
  <div className="relative h-2 w-full overflow-hidden rounded-full bg-green-100 dark:bg-green-950">
    <div className="h-full w-[50%] bg-green-500 transition-all"></div>
  </div>
  <div className="relative h-2 w-full overflow-hidden rounded-full bg-amber-100 dark:bg-amber-950">
    <div className="h-full w-[75%] bg-amber-500 transition-all"></div>
  </div>
</div>`,

    tabs: `{/* Basic Tabs (requires JavaScript for functionality) */}
<div>
  {/* Tab List */}
  <div className="border-b border-border">
    <div className="flex h-10 items-center gap-4">
      <button className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-foreground data-[state=active]:shadow-sm" data-state="active">
        Account
      </button>
      <button className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-foreground data-[state=active]:shadow-sm text-muted-foreground" data-state="inactive">
        Password
      </button>
      <button className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-foreground data-[state=active]:shadow-sm text-muted-foreground" data-state="inactive">
        Settings
      </button>
    </div>
  </div>
  
  {/* Tab Content */}
  <div className="mt-4">
    {/* Account Tab (active) */}
    <div className="space-y-4">
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="text-2xl font-semibold leading-none tracking-tight">Account</h3>
          <p className="text-sm text-muted-foreground">Make changes to your account here. Click save when you're done.</p>
        </div>
        <div className="p-6 space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="name">
              Name
            </label>
            <input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="name" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="email">
              Email
            </label>
            <input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="email" />
          </div>
        </div>
        <div className="flex items-center p-6 pt-0">
          <button className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
            Save changes
          </button>
        </div>
      </div>
    </div>
    
    {/* Password Tab (inactive, hidden) */}
    <div className="hidden space-y-4">
      {/* Password tab content would go here */}
    </div>
    
    {/* Settings Tab (inactive, hidden) */}
    <div className="hidden space-y-4">
      {/* Settings tab content would go here */}
    </div>
  </div>
</div>`,

    "floating-action": `{/* Basic Floating Action Button */}
<div className="relative h-64 rounded-lg border bg-muted/30 p-4">
  <button className="absolute bottom-4 right-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
    <span className="sr-only">Add item</span>
  </button>
</div>

{/* FAB with Label */}
<div className="relative h-64 rounded-lg border bg-muted/30 p-4">
  <button className="absolute bottom-4 right-4 flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
    Create New
  </button>
</div>`,


    accordions: `{/* Basic Accordion (requires JavaScript for functionality) */}
<div className="w-full">
  {/* Accordion Item 1 */}
  <div className="border-b">
    <button className="flex w-full items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180" data-state="closed">
      <span>Is it accessible?</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 shrink-0 transition-transform duration-200">
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    </button>
    <div className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down" data-state="closed">
      <div className="pb-4 pt-0">
        <p>Yes. It adheres to the WAI-ARIA design pattern.</p>
      </div>
    </div>
  </div>
  
  {/* Accordion Item 2 */}
  <div className="border-b">
    <button className="flex w-full items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180" data-state="closed">
      <span>Is it styled?</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 shrink-0 transition-transform duration-200">
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    </button>
    <div className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down" data-state="closed">
      <div className="pb-4 pt-0">
        <p>Yes. It comes with default styles that matches the other components' aesthetic.</p>
      </div>
    </div>
  </div>
  
  {/* Accordion Item 3 */}
  <div className="border-b">
    <button className="flex w-full items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180" data-state="closed">
      <span>Is it animated?</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 shrink-0 transition-transform duration-200">
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    </button>
    <div className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down" data-state="closed">
      <div className="pb-4 pt-0">
        <p>Yes. It's animated by default, but you can disable it if you prefer.</p>
      </div>
    </div>
  </div>
</div>`,

    sliders: `{/* Basic Slider */}
<div className="relative flex w-full touch-none select-none items-center">
  <span className="relative h-2 w-full rounded-full bg-secondary">
    <span className="absolute h-full rounded-full bg-primary" style={{ width: '50%' }}></span>
    <span className="absolute left-[50%] top-[-4px] h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" tabIndex={0}></span>
  </span>
</div>

{/* Slider with Labels */}
<div className="space-y-4">
  <div className="flex items-center justify-between">
    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
      Volume
    </label>
    <span className="w-12 rounded-md border border-transparent px-2 py-0.5 text-right text-sm text-muted-foreground hover:border-border">
      50%
    </span>
  </div>
  <div className="relative flex w-full touch-none select-none items-center">
    <span className="relative h-2 w-full rounded-full bg-secondary">
      <span className="absolute h-full rounded-full bg-primary" style={{ width: '50%' }}></span>
      <span className="absolute left-[50%] top-[-4px] h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" tabIndex={0}></span>
    </span>
  </div>
</div>`,
modals: `{/* Modal Trigger Button */}
<button className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring">
  Open Modal
</button>

{/* Modal Backdrop (hidden by default) */}
<div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm hidden">
  {/* Modal Content */}
  <div className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 sm:rounded-lg">
    {/* Modal Header */}
    <div className="flex flex-col space-y-1.5 text-center sm:text-left">
      <h2 className="text-lg font-semibold leading-none tracking-tight">Modal Title</h2>
      <p className="text-sm text-muted-foreground">Modal description goes here.</p>
    </div>
    
    {/* Modal Body */}
    <div className="py-4">
      <p>Modal content goes here.</p>
    </div>
    
    {/* Modal Footer */}
    <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
      <button className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
        Cancel
      </button>
      <button className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
        Continue
      </button>
    </div>
    
    {/* Close Button */}
    <button className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
      <span className="sr-only">Close</span>
    </button>
  </div>
</div>`,
"animated-button": `<!-- Animated Button with Circle Reveal Effect -->
<!-- Note: This requires JavaScript for the hover state -->
<div 
  class="cursor-pointer bg-[#e4c590] font-serif text-black w-48 h-12 tracking-wider text-center leading-[3rem] relative overflow-hidden z-10 transition-all duration-500"
  id="animated-button"
>
  Order Now
  <!-- These spans will be animated with JavaScript -->
  <span class="absolute w-1/4 h-full bg-black rounded-full left-0 translate-y-[150%] transition-transform duration-500" style="z-index: -1;"></span>
  <span class="absolute w-1/4 h-full bg-black rounded-full left-1/4 translate-y-[150%] transition-transform duration-500" style="z-index: -1; transition-delay: 100ms;"></span>
  <span class="absolute w-1/4 h-full bg-black rounded-full left-2/4 translate-y-[150%] transition-transform duration-500" style="z-index: -1; transition-delay: 200ms;"></span>
  <span class="absolute w-1/4 h-full bg-black rounded-full left-3/4 translate-y-[150%] transition-transform duration-500" style="z-index: -1; transition-delay: 300ms;"></span>
</div>

<script>
  // JavaScript to handle the hover effect
  const button = document.getElementById('animated-button');
  const circles = button.querySelectorAll('span');
  
  button.addEventListener('mouseenter', () => {
    button.classList.add('text-white', 'border', 'border-[#e4c590]');
    circles.forEach(circle => {
      circle.style.transform = 'translateY(0) scale(150%)';
    });
  });
  
  button.addEventListener('mouseleave', () => {
    button.classList.remove('text-white', 'border', 'border-[#e4c590]');
    circles.forEach(circle => {
      circle.style.transform = 'translateY(150%)';
    });
  });
</script>`,
squarecard: `import * as React from "react"
import Image from "next/image"
import { Heart } from 'lucide-react'
import { Card } from "@/components/ui/card"
import Logo from '@/public/images/Logo-Designs/Logo.png'

interface SquareCardProps {
  logoSrc: string
  title: string
  supporterCount: number
}

export function SquareCard({ 
  logoSrc = {Logo}, 
  title = "Bora is building a new platform for artists.", 
  supporterCount = 6411 
}: Partial<SquareCardProps>) {
  return (
    <Card className="bg-background rounded-3xl border-2 border-border p-8 hover:scale-105 transition duration-300 ease-in-out max-w-xs">
      <div className="flex flex-col items-center">
        <div className="w-32 h-32 relative mb-4">
          <Image 
            src={logoSrc || "/placeholder.svg"} 
            alt="Logo" 
            fill 
            className="object-contain" 
          />
        </div>
        <h1 className="text-xl font-semibold text-foreground mb-2 text-center">{title}</h1>
        <p className="flex gap-2 text-lg text-muted-foreground items-center">
          <div className="bg-red-400 rounded-full p-1">
            <Heart className="h-5 w-5 text-primary-foreground" />
          </div>
          <span>
            <span className="font-medium">{supporterCount.toLocaleString()}</span> Supporters
          </span>
        </p>
      </div>
    </Card>
  )
}`,


  }

  return tailwindExamples[componentId] || `{/* Tailwind CSS code coming soon for ${componentId} */}`
}

