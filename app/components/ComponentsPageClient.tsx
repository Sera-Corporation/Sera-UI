// ComponentsPageClient.tsx
"use client";

import { Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { componentMetadata } from "@/lib/component-metadata";
import { ComponentCard } from "@/components/component-card";
import { ComponentDialog } from "@/components/component-dialog";

interface ComponentsPageClientProps {
  initialCategory?: string;
  initialSearch?: string;
}

function InnerComponentsPageClient({ 
  initialCategory, 
  initialSearch 
}: ComponentsPageClientProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // Use state to avoid hydration mismatch
  const [category, setCategory] = useState(initialCategory || "all");
  const [search, setSearch] = useState(initialSearch || "");
  const [selectedComponentId, setSelectedComponentId] = useState("");
  
  // Update state when searchParams change
  useEffect(() => {
    setCategory(searchParams.get("category") || initialCategory || "all");
    setSearch(searchParams.get("search") || initialSearch || "");
    setSelectedComponentId(searchParams.get("component") || "");
  }, [searchParams, initialCategory, initialSearch]);

  const filteredComponents = componentMetadata.filter((component) => {
    const matchesCategory = category === "all" || component.category === category;
    const matchesSearch =
      search === "" ||
      component.name.toLowerCase().includes(search.toLowerCase()) ||
      component.description.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const selectedComponent = componentMetadata.find((component) => component.id === selectedComponentId);

  const handleCloseDialog = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("component");
    router.push(`/components?${params.toString()}`);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Components</h1>
        <p className="text-muted-foreground">Browse and explore the SeraUI component library.</p>
      </div>

      {filteredComponents.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredComponents.map((component) => (
            <ComponentCard key={component.id} component={component} />
          ))}
        </div>
      ) : (
        <div className="flex h-[400px] items-center justify-center rounded-md border border-dashed">
          <div className="text-center">
            <h3 className="text-lg font-medium">No components found</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Try adjusting your search or filter to find what you're looking for.
            </p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => {
                router.push("/components"); // Reset filters by navigating to the base URL
              }}
            >
              Reset filters
            </Button>
          </div>
        </div>
      )}

      {selectedComponent && (
        <ComponentDialog component={selectedComponent} open={!!selectedComponentId} onOpenChange={handleCloseDialog} />
      )}
    </div>
  );
}

export default function ComponentsPageClient({ 
  initialCategory, 
  initialSearch 
}: ComponentsPageClientProps) {
  return (
    <Suspense fallback={
      <div className="flex h-[400px] items-center justify-center">
        <div className="text-center">
          <h3 className="text-lg font-medium">Loading components...</h3>
        </div>
      </div>
    }>
      <InnerComponentsPageClient 
        initialCategory={initialCategory}
        initialSearch={initialSearch}
      />
    </Suspense>
  );
}