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
authbuttons:`
    <div className="flex gap-5">
        <button className="rounded-3xl p-5 px-8 font-semibold hover:bg-gray-200 hover:scale-[1.02] transition duration-300 ease-in-out">Log In</button>
        <button className="rounded-3xl p-5 px-8 font-semibold bg-[#fd0] hover:scale-[1.02] transition duration-300 ease-in-out">Sign Up</button>
      </div>
    </div>
`,
eBookCard:`
<div className="w-64 rounded-3xl shadow-lg border border-gray-200 bg-white overflow-hidden">
      <div className="relative bg-yellow-300 p-4 flex flex-col items-center">
        <svg fill="none" height="115" viewBox="0 0 115 115" width="115" xmlns="http://www.w3.org/2000/svg" data-v-7decf3e7=""><path d="M112.447 85.454L63.6636 107.749V40.1778L112.447 17.8955V85.454Z" fill="#C03A2B" data-v-7decf3e7=""></path><path d="M2.59497 85.454L51.3789 107.749V40.1778L2.59497 17.8955V85.454Z" fill="#E64C3C" data-v-7decf3e7=""></path><path d="M63.6615 40.1807H51.3782V107.739H63.6615V40.1807Z" fill="#C03A2B" data-v-7decf3e7=""></path><path d="M95.7454 59.8093L79.0305 67.4489V44.2803L95.7454 36.6406V59.8093Z" fill="#E4C54C" data-v-7decf3e7=""></path><path d="M19.2981 59.8093L36.013 67.4489V44.2803L19.2981 36.6406V59.8093Z" fill="#E4C54C" data-v-7decf3e7=""></path><path d="M79.0249 68.7073C78.7902 68.7073 78.5543 68.6399 78.3496 68.5101C77.9926 68.2792 77.7766 67.8847 77.7766 67.459V44.2941C77.7766 43.8048 78.0625 43.3617 78.5056 43.1582L95.2292 35.516C95.6162 35.34 96.0643 35.37 96.4239 35.6009C96.7809 35.8306 96.9968 36.2263 96.9968 36.6507V59.8144C96.9968 60.3037 96.711 60.7469 96.2678 60.9491L79.5442 68.5937C79.3782 68.6686 79.2009 68.7073 79.0249 68.7073ZM80.2732 45.0968V65.5154L94.5002 59.0142V38.5956L80.2732 45.0968Z" fill="black" data-v-7decf3e7=""></path><path d="M57.5198 38.1732C57.5198 20.3498 50.603 12.6453 34.3225 7.14648V17.9032L57.5198 38.1732Z" fill="#CDBF87" data-v-7decf3e7=""></path><path d="M57.5221 39.4176C57.2262 39.4176 56.9329 39.3128 56.7007 39.1093L33.5033 18.8393C33.2325 18.6021 33.0764 18.26 33.0764 17.8993V7.1426C33.0764 6.74065 33.2699 6.36241 33.597 6.12773C33.924 5.89304 34.3434 5.83063 34.7242 5.95921C52.2529 11.8812 58.7704 20.6106 58.7704 38.1693C58.7704 38.6587 58.4845 39.1031 58.0389 39.3065C57.8728 39.3814 57.6968 39.4176 57.5221 39.4176ZM35.573 17.3326L56.2126 35.3681C55.5759 21.3296 49.8924 14.1044 35.573 8.90272V17.3326Z" fill="black" data-v-7decf3e7=""></path><path d="M57.5206 40.195V38.1777C57.5206 33.6114 55.2536 29.3035 51.4089 26.8381C40.2265 19.664 27.3102 15.1888 13.3155 12.3901L2.59497 17.9077L51.3764 40.1962L57.5206 40.195Z" fill="#CDBF87" data-v-7decf3e7=""></path><path d="M57.5198 40.195V38.1777C57.5198 33.6114 59.7867 29.3035 63.6315 26.8381C74.8151 19.664 87.7314 15.1888 101.726 12.3901L112.447 17.9077L63.664 40.195H57.5198Z" fill="#CDBF87" data-v-7decf3e7=""></path><path d="M79.0256 77.6129C78.5513 77.6129 78.0994 77.342 77.8897 76.8839C77.6038 76.256 77.8785 75.5158 78.5051 75.2299L95.2287 67.589C95.8579 67.3019 96.5968 67.579 96.8827 68.2044C97.1686 68.8323 96.894 69.5726 96.2673 69.8584L79.5437 77.4993C79.3752 77.5767 79.1979 77.6129 79.0256 77.6129Z" fill="black" data-v-7decf3e7=""></path><path d="M79.0256 86.5431C78.5513 86.5431 78.0994 86.2723 77.8897 85.8141C77.6038 85.1862 77.8785 84.446 78.5051 84.1601L95.2287 76.518C95.8579 76.2296 96.5968 76.5067 96.8827 77.1334C97.1686 77.7613 96.894 78.5015 96.2673 78.7874L79.5437 86.4295C79.3752 86.5057 79.1979 86.5431 79.0256 86.5431Z" fill="black" data-v-7decf3e7=""></path><path d="M36.0171 68.7044C35.8398 68.7044 35.6638 68.667 35.4978 68.5908L18.7742 60.9487C18.3298 60.7465 18.0452 60.3021 18.0452 59.814V36.6504C18.0452 36.2259 18.2611 35.8302 18.6181 35.6005C18.9752 35.3708 19.4245 35.3396 19.8115 35.5156L36.5364 43.1578C36.9808 43.3613 37.2654 43.8044 37.2654 44.2937V67.4574C37.2654 67.883 37.0494 68.2775 36.6924 68.5084C36.4877 68.637 36.253 68.7044 36.0171 68.7044ZM20.5405 59.0113L34.7688 65.5125V45.0939L20.5405 38.5927V59.0113Z" fill="black" data-v-7decf3e7=""></path><path d="M36.0181 77.6131C35.8446 77.6131 35.6686 77.5769 35.5001 77.4995L18.7752 69.8586C18.1486 69.5728 17.8714 68.8325 18.1586 68.2046C18.4444 67.578 19.1834 67.3021 19.8126 67.5892L36.5374 75.2301C37.1641 75.516 37.4412 76.2562 37.1541 76.8841C36.9444 77.3422 36.4912 77.6131 36.0181 77.6131Z" fill="black" data-v-7decf3e7=""></path><path d="M36.0181 86.5426C35.8446 86.5426 35.6686 86.5064 35.5001 86.429L18.7752 78.7869C18.1486 78.501 17.8714 77.7607 18.1586 77.1328C18.4444 76.5062 19.1834 76.2303 19.8126 76.5174L36.5374 84.1596C37.1641 84.4454 37.4412 85.1857 37.1541 85.8136C36.9444 86.2717 36.4912 86.5426 36.0181 86.5426Z" fill="black" data-v-7decf3e7=""></path><path d="M63.6665 108.991C63.4318 108.991 63.1959 108.924 62.9912 108.793C62.6342 108.563 62.4182 108.169 62.4182 107.743V40.1795C62.4182 39.6902 62.7041 39.2471 63.1472 39.0436L111.929 16.7563C112.314 16.5803 112.764 16.6102 113.123 16.8412C113.48 17.0721 113.696 17.4666 113.696 17.8922V85.4545C113.696 85.9438 113.41 86.387 112.967 86.5892L64.1858 108.878C64.0198 108.954 63.8425 108.991 63.6665 108.991ZM64.9148 40.9822V105.799L111.2 84.6518V19.8346L64.9148 40.9822Z" fill="black" data-v-7decf3e7=""></path><path d="M51.3759 109.005C51.1999 109.005 51.0227 108.968 50.8566 108.892L2.0752 86.6032C1.63205 86.3997 1.34619 85.9566 1.34619 85.4672V17.9062C1.34619 17.4818 1.56215 17.0861 1.91917 16.8564C2.27618 16.6267 2.72557 16.5943 3.11255 16.7715L51.894 39.0588C52.3384 39.2623 52.623 39.7055 52.623 40.1948V107.758C52.623 108.184 52.407 108.578 52.05 108.808C51.8465 108.938 51.6119 109.005 51.3759 109.005ZM3.84281 84.6658L50.1276 105.813V40.9962L3.84281 19.8486V84.6658Z" fill="black" data-v-7decf3e7=""></path><path d="M63.6648 109.002H51.3765C50.6874 109.002 50.1282 108.444 50.1282 107.754V40.1907C50.1282 39.5016 50.6874 38.9424 51.3765 38.9424H63.6648C64.3552 38.9424 64.9131 39.5016 64.9131 40.1907V107.754C64.9131 108.444 64.3552 109.002 63.6648 109.002ZM52.6248 106.506H62.4165V41.439H52.6248V106.506Z" fill="black" data-v-7decf3e7=""></path><path d="M57.5205 41.4417H51.3763C51.1965 41.4417 51.0205 41.403 50.857 41.3294L2.07555 19.0408C1.64114 18.8424 1.35777 18.4129 1.34654 17.9348C1.3353 17.4567 1.59745 17.0148 2.02312 16.7951L12.7436 11.2776C12.9945 11.1478 13.2841 11.1066 13.56 11.164C28.9392 14.2386 41.5409 19.0221 52.0828 25.7854C56.2697 28.4718 58.7688 33.103 58.7688 38.1762V40.1934C58.7688 40.8837 58.2095 41.4417 57.5205 41.4417ZM51.6484 38.9451H56.2722V38.1762C56.2722 33.9581 54.2025 30.1108 50.7346 27.8876C40.5572 21.3577 28.3724 16.714 13.4976 13.6981L5.45223 17.8387L51.6484 38.9451Z" fill="black" data-v-7decf3e7=""></path><path d="M63.6642 41.439H57.52C56.831 41.439 56.2717 40.8798 56.2717 40.1907V38.1734C56.2717 33.1003 58.7708 28.4691 62.9564 25.7827C73.4996 19.0194 86.1013 14.2359 101.479 11.1613C101.759 11.1051 102.045 11.1463 102.296 11.2749L113.016 16.7924C113.441 17.0108 113.704 17.454 113.693 17.9321C113.681 18.4102 113.398 18.8396 112.964 19.0381L64.1835 41.3267C64.02 41.4016 63.8427 41.439 63.6642 41.439ZM58.7683 38.9424H63.3921L109.588 17.836L101.543 13.6953C86.6706 16.7113 74.4858 21.3537 64.3058 27.8849C60.838 30.1081 58.7683 33.9554 58.7683 38.1734V38.9424Z" fill="black" data-v-7decf3e7=""></path></svg>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold">Design E-book</h3>
        <div className="flex items-center justify-between mt-2">
          <span className="text-lg font-semibold">$200</span>
          <div className="flex items-center text-sm text-gray-600">
            <Star className="w-4 h-4 text-yellow-500" />
            <span className="ml-1">4.9 (36)</span>
          </div>
        </div>
        <div className="h-2 w-full bg-gray-200 rounded-full mt-2 py-2"></div>
        <div className="h-2 w-[50%] bg-gray-200 rounded-full mt-2 py-2"></div>
        <button className="w-full bg-yellow-300 text-gray-900 font-bold py-2 rounded-lg mt-4 hover:bg-yellow-400 transition duration-300 ease-in-out">
          Buy
      </button>
  </div>
</div>
`,



  }

  return tailwindExamples[componentId] || `{/* Tailwind CSS code coming soon for ${componentId} */}`
}

