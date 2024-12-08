"use client";

import { getNavigations } from "@/server/navigation/navigationServer";
import { NavigationItem } from "@/server/navigation/type";
import { useState, useEffect } from "react";

export function useNavigation() {
  const [navigationLinks, setNavigation] = useState<NavigationItem[] | null>(
    null,
  );
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Effect to fetch navigation data on component mount
  useEffect(() => {
    function loadData() {
      try {
        const navData = getNavigations();
        if (navData.length > 0) {
          setIsLoading(true);
          setNavigation(navData);
        }
      } catch (error) {
        setError("Failed to load navigation data." + (error as Error).message);
      } finally {
        setIsLoading(false);
      }
    }

    loadData(); // Call the function to load data on mount
  }, []); // Empty dependency array ensures this runs only once on mount

  return { navigationLinks, error, isLoading };
}
