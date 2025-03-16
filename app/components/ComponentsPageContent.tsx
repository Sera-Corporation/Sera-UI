'use client'
import { ClientComponentWrapper } from "./ClientComponentWrapper";
import { componentMetadata } from "@/lib/component-metadata";

interface ComponentsPageContentProps {
  initialCategory: string;
  initialSearch: string;
  initialComponentId: string;
}

export function ComponentsPageContent({ 
  initialCategory, 
  initialSearch, 
  initialComponentId 
}: ComponentsPageContentProps) {
  // Do the filtering on the server
  const filteredComponents = componentMetadata.filter((component) => {
    const matchesCategory = initialCategory === "all" || component.category === initialCategory;
    const matchesSearch =
      initialSearch === "" ||
      component.name.toLowerCase().includes(initialSearch.toLowerCase()) ||
      component.description.toLowerCase().includes(initialSearch.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const selectedComponent = componentMetadata.find((component) => component.id === initialComponentId);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Components</h1>
        <p className="text-muted-foreground">Browse and explore the SeraUI component library.</p>
      </div>

      <ClientComponentWrapper 
        filteredComponents={filteredComponents}
        selectedComponent={selectedComponent}
        initialCategory={initialCategory}
        initialSearch={initialSearch}
      />
    </div>
  );
}