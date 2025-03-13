import Link from "next/link"
import { Code } from "lucide-react"

interface LogoProps {
  className?: string
  showText?: boolean
}

export function Logo({ className, showText = true }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center space-x-2 ${className}`}>
      <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
        <Code className="h-4 w-4 text-primary-foreground" />
      </div>
      {showText && <span className="inline-block font-bold">SeraUI</span>}
    </Link>
  )
}

