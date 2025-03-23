import type { Metadata } from "next"
import dynamic from "next/dynamic"

export const metadata: Metadata = {
  title: "Components - SeraUI",
  description: "Browse and explore the SeraUI component library.",
}

// Use dynamic import to improve initial load time
const ComponentsPageClient = dynamic(() => import("./ComponentsPageClient"), {
  loading: () => <div className="flex justify-center items-center h-64">Loading components...</div>,
  ssr: false,
})

export default function ComponentsPage() {
  return (
    <div className="container py-10">
      <ComponentsPageClient />
    </div>
  )
}

