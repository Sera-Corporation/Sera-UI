import type { ReactNode } from "react"

interface ComponentsLayoutProps {
  children: ReactNode
}

export default function ComponentsLayout({ children }: ComponentsLayoutProps) {
  // Remove the container class from here since it's now applied at the page level
  return children
}

