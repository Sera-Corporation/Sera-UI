import type { ReactNode } from "react"
import { IconSidebar } from "@/components/icon-sidebar"

interface IconsLayoutProps {
  children: ReactNode
}

export default function IconsLayout({ children }: IconsLayoutProps) {
  return (
    <div className="container py-10">
      <div className="flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
          <IconSidebar />
        </aside>
        <main className="relative py-6 lg:gap-10 lg:py-8">{children}</main>
      </div>
    </div>
  )
}

