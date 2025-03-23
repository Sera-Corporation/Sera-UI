import type { ReactNode } from "react"

interface LayoutsLayoutProps {
  children: ReactNode
}

export default function LayoutsLayout({ children }: LayoutsLayoutProps) {
  return <div className="container py-10">{children}</div>
}

