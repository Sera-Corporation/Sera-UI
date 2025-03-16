// ComponentsPage.tsx (Server Component)
import { Suspense } from "react";
import { ComponentsPageContent } from "./ComponentsPageContent";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Components - SeraUI",
  description: "Browse and explore the SeraUI component library.",
};

// Create a helper function to extract the parameters
async function getSearchParameters(params?: Record<string, string>) {
  return {
    category: params?.category || "all",
    search: params?.search || "",
    componentId: params?.component || ""
  };
}

export default async function ComponentsPage({ searchParams }: { searchParams?: Record<string, string> }) {
  // Await the search parameters
  const { category, search, componentId } = await getSearchParameters(searchParams);

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
        initialComponentId={componentId} 
      />
    </Suspense>
  );
}