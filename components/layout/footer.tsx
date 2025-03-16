import Link from "next/link"
import { Twitter, Mail, Heart, Star, ExternalLink, BookOpen, Code, Package } from "lucide-react"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Logo } from "@/components/ui/logo"

export function Footer() {
  return (
    <footer className="border-t bg-muted/40 mt-16">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="mb-4">
              <Logo className="mb-2" />
              <p className="text-sm text-muted-foreground">
                A beautifully designed component library that helps developers build clean, accessible, and customizable
                interfaces with just Tailwind CSS.
              </p>
            </div>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/yourusername/seraui"
                target="_blank"
                rel="noreferrer"
                className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "h-8 w-8")}
              >
                <Star className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://twitter.com/seraui"
                target="_blank"
                rel="noreferrer"
                className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "h-8 w-8")}
              >
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="mailto:info@seraui.com"
                className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "h-8 w-8")}
              >
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold flex items-center gap-2">
              <BookOpen className="h-4 w-4" /> Resources
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/docs" className="text-muted-foreground hover:text-foreground flex items-center gap-1">
                  <ExternalLink className="h-3 w-3" /> Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="/components"
                  className="text-muted-foreground hover:text-foreground flex items-center gap-1"
                >
                  <Code className="h-3 w-3" /> Components
                </Link>
              </li>
              <li>
                <Link href="/examples" className="text-muted-foreground hover:text-foreground flex items-center gap-1">
                  <Package className="h-3 w-3" /> Examples
                </Link>
              </li>
              <li>
                <Link
                  href="/releases/v1.4"
                  className="text-muted-foreground hover:text-foreground flex items-center gap-1"
                >
                  <Star className="h-3 w-3" /> Release Notes
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold flex items-center gap-2">
              <Star className="h-4 w-4" /> Community
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/contribute"
                  className="text-muted-foreground hover:text-foreground flex items-center gap-1"
                >
                  <Code className="h-3 w-3" /> Contribute
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/yourusername/seraui/discussions"
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-foreground flex items-center gap-1"
                >
                  <ExternalLink className="h-3 w-3" /> Discussions
                </Link>
              </li>
              <li>
                <Link
                  href="https://discord.gg/seraui"
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-foreground flex items-center gap-1"
                >
                  <ExternalLink className="h-3 w-3" /> Discord
                </Link>
              </li>
              <li>
                <Link
                  href="https://twitter.com/seraui"
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-foreground flex items-center gap-1"
                >
                  <Twitter className="h-3 w-3" /> Twitter
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold flex items-center gap-2">
              <BookOpen className="h-4 w-4" /> Legal
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground flex items-center gap-1">
                  <ExternalLink className="h-3 w-3" /> Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground flex items-center gap-1">
                  <ExternalLink className="h-3 w-3" /> Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/yourusername/seraui/blob/main/LICENSE"
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-foreground flex items-center gap-1"
                >
                  <ExternalLink className="h-3 w-3" /> License
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built with <Heart className="inline-block h-4 w-4 text-red-500" /> by{" "}
            <a href="#" target="_blank" rel="noreferrer" className="font-medium underline underline-offset-4">
              Your Name
            </a>
            . The source code is available on{" "}
            <a
              href="https://github.com/yourusername/seraui"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </a>
            .
          </p>
          <div className="flex items-center">
            <Link
              href="https://github.com/yourusername/seraui"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-sm font-medium"
            >
              <Star className="h-4 w-4" />
              <span>Star on GitHub</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

