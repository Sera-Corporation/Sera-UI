import type { ReactNode } from "react"
import { ComponentSidebar } from "@/components/component-sidebar"

interface ComponentsLayoutProps {
  children: ReactNode
}

export default function ComponentsLayout({ children }: ComponentsLayoutProps) {
  return (
    <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
      <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
        <ComponentSidebar />
      </aside>
      <main className="relative py-6 lg:gap-10 lg:py-8">{children}</main>
    </div>
  )
}

