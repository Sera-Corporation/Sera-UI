import Link from "next/link"
import { Home, User, Settings } from "lucide-react"

export function NavigationCardPreview() {
  return (
    <div className="flex gap-4 justify-center">
      <Link href="#" className="flex items-center gap-2 text-sm font-medium">
        <Home className="h-4 w-4" />
        Home
      </Link>
      <Link href="#" className="flex items-center gap-2 text-sm font-medium">
        <User className="h-4 w-4" />
        Profile
      </Link>
      <Link href="#" className="flex items-center gap-2 text-sm font-medium">
        <Settings className="h-4 w-4" />
        Settings
      </Link>
    </div>
  )
}

