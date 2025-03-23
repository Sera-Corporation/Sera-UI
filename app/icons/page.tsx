import type { Metadata } from "next"
import dynamic from "next/dynamic"

export const metadata: Metadata = {
  title: "Icons - SeraUI",
  description: "Browse and explore the SeraUI icon collection.",
}

// Use dynamic import to improve initial load time
const IconsPageClient = dynamic(() => import("./IconsPageClient"), {
  loading: () => <div className="flex justify-center items-center h-64">Loading icons...</div>,
  ssr: false,
})

export default function IconsPage({ searchParams }: { searchParams: { category?: string } }) {
  return <IconsPageClient searchParams={searchParams} />
}

