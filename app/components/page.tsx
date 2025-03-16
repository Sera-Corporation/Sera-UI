// ComponentsPage.tsx (Server Component)
import { Suspense } from "react";
import { ComponentsPageContent } from "./ComponentsPageContent";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Components - SeraUI",
  description: "Browse and explore the SeraUI component library.",
};

export default function ComponentsPage({ searchParams }: { searchParams?: Record<string, string> }) {
  const category = searchParams?.category || "all";
  const search = searchParams?.search || "";
  const selectedComponentId = searchParams?.component || "";

  return (
    <Suspense fallback={
      <div className="flex h-[400px] items-center justify-center">
        <div className="text-center">
          <h3 className="text-lg font-medium">Loading components...</h3>
        </div>
      </div>
    }>
      <ComponentsPageContent 
        initialCategory={category} 
        initialSearch={search} 
        initialComponentId={selectedComponentId} 
      />
    </Suspense>
  );
}