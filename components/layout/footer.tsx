import Link from "next/link"
import { Twitter, Mail, Heart, Star, ExternalLink, BookOpen, Code, Package } from "lucide-react"
import Image from "next/image"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import  Logo  from "../../public/images/Seralogo1.png"

export function Footer() {
  return (
    <footer className="border-t bg-muted/40 mt-16">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="mb-4">
              <Image src={Logo} alt="Sera Logo" width={70} height={70} />
              <p className="text-sm text-muted-foreground">
                A beautifully designed component library that helps developers build clean, accessible, and customizable
                interfaces with just Tailwind CSS.
              </p>
            </div>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/Sera-Corporation/Sera-UI.git"
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
                <Link
                  href="/releases/v1.4"
                  className="text-muted-foreground hover:text-foreground flex items-center gap-1"
                >
                  <Star className="h-3 w-3" /> Release Notes
                </Link>
              </li>
              <li>
                <Link
                  href="/contribute"
                  className="text-muted-foreground hover:text-foreground flex items-center gap-1"
                >
                  <Star className="h-3 w-3" /> Contribute
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
                  href="/customer-portal"
                  
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-foreground flex items-center gap-1"
                >
                  <ExternalLink className="h-3 w-3" /> Discussions
                </Link>
              </li>
              <li>
                <Link
                  href="https://discord.gg/BNa2V7YQ"
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
                <Link href="/customer-portal" className="text-muted-foreground hover:text-foreground flex items-center gap-1">
                  <ExternalLink className="h-3 w-3" /> Customer Portal
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
            <a href="https://github.com/bigyanadk07" target="_blank" rel="noreferrer" className="font-medium underline underline-offset-4">
              Bigyan Adhikari
            </a>
            
          </p>
          <div className="flex items-center">
          </div>
        </div>
      </div>
    </footer>
  )
}
