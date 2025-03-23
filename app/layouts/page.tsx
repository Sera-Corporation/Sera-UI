import type { Metadata } from "next"
import dynamic from "next/dynamic"

export const metadata: Metadata = {
  title: "Layouts - SeraUI",
  description: "Browse and explore the SeraUI layout collection by category.",
}

// Use dynamic import to improve initial load time
const LayoutsPageClient = dynamic(() => import("./LayoutsPageClient"), {
  loading: () => <div className="flex justify-center items-center h-64">Loading layouts...</div>,
  ssr: false,
})

export default function LayoutsPage() {
  return <LayoutsPageClient />
}

