import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { FeatureCard } from "@/components/feature-card"

export default function Home() {
  return (
    <div className="flex-1">
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <Link href="/releases/v1.4" className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium">
            🚀 Version 1.4 - Enhanced Component Browsing & Theming
          </Link>
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Modern UI components with Tailwind CSS
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            SeraUI is a beautifully designed component library that helps developers build clean, accessible, and
            customizable interfaces with just Tailwind CSS.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/components">
                Browse Components
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/docs">Documentation</Link>
            </Button>
          </div>
        </div>
      </section>
      <section className="container space-y-6 py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Features</h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            SeraUI comes packed with features to help you build beautiful interfaces quickly and efficiently.
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          <FeatureCard
            title="No Installation Required"
            description="Just copy and paste the Tailwind CSS code into your project."
            icon="Copy"
          />
          <FeatureCard
            title="Dark Mode Ready"
            description="Built-in dark mode support with seamless transitions."
            icon="Moon"
          />
          <FeatureCard
            title="Accessible"
            description="Components follow WAI-ARIA guidelines for maximum accessibility."
            icon="Accessibility"
          />
          <FeatureCard
            title="Customizable"
            description="Easily customize components to match your brand."
            icon="Paintbrush"
          />
          <FeatureCard
            title="Pure Tailwind CSS"
            description="No dependencies, just Tailwind CSS classes you can use anywhere."
            icon="Code"
          />
          <FeatureCard title="Open Source" description="Free and open source under the MIT license." icon="Github" />
        </div>
      </section>
      <section className="container space-y-6 py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            New in Version 1.4
          </span>
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Enhanced Component Browsing & Theming
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Version 1.4 brings significant improvements to component browsing and adds exciting new theme options.
          </p>
        </div>

        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          <FeatureCard
            title="Live Component Previews"
            description="See actual component previews directly in the component cards."
            icon="Eye"
          />
          <FeatureCard
            title="Enhanced Copy Experience"
            description="Improved copy functionality with helpful tooltips and visual feedback."
            icon="Clipboard"
          />
          <FeatureCard
            title="New Theme Options"
            description="Choose from several new beautiful color themes for your interface."
            icon="Palette"
          />
          <FeatureCard
            title="Pure Tailwind Code"
            description="Get ready-to-use Tailwind CSS code that works in any project."
            icon="Code"
          />
          <FeatureCard
            title="No Dependencies"
            description="No need to install any packages or libraries."
            icon="Package"
          />
          <FeatureCard
            title="Copy & Paste"
            description="Just copy the code and paste it into your project."
            icon="Copy"
          />
        </div>

        <div className="flex justify-center">
          <Button asChild size="lg">
            <Link href="/components">
              Explore Components
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

