// ClientComponentWrapper.tsx (Client Component)
"use client";

import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";
import { ComponentCard } from "@/components/component-card";
import { ComponentDialog } from "@/components/component-dialog";

interface ClientComponentWrapperProps {
  filteredComponents: any[];
  selectedComponent: any | null;
  initialCategory: string;
  initialSearch: string;
}

export function ClientComponentWrapper({ 
  filteredComponents, 
  selectedComponent,
  initialCategory,
  initialSearch
}: ClientComponentWrapperProps) {
  const router = useRouter();
  const pathname = usePathname();
  
  const [isDialogOpen, setIsDialogOpen] = useState(!!selectedComponent);

  // Update dialog state when selectedComponent changes
  useEffect(() => {
    setIsDialogOpen(!!selectedComponent);
  }, [selectedComponent]);

  const handleCloseDialog = () => {
    // Create a new URL without the component parameter
    const url = new URL(window.location.href);
    url.searchParams.delete("component");
    
    router.push(`${pathname}?${url.searchParams.toString()}`);
  };

  const handleResetFilters = () => {
    router.push("/components");
  };

  return (
    <>
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
              onClick={handleResetFilters}
            >
              Reset filters
            </Button>
          </div>
        </div>
      )}

      {selectedComponent && (
        <ComponentDialog 
          component={selectedComponent} 
          open={isDialogOpen} 
          onOpenChange={handleCloseDialog} 
        />
      )}
    </>
  );
}