"use client";

import { getSiteInfo } from "@/server/site/siteServer";
import { SiteInfo } from "@/server/site/type";
import { createContext, useContext, useState, useEffect } from "react";

interface SiteInfoContextType {
  siteInfo: SiteInfo[] | null;
  isLoading: boolean;
  error: string | null;
}

// Ensure context and provider are correctly defined
export const SiteInfoContext = createContext<SiteInfoContextType | undefined>(
  undefined,
);

export function SiteInfoProvider({ children }: { children: React.ReactNode }) {
  const [siteInfo, setSiteInfo] = useState<SiteInfo[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = () => {
      try {
        setIsLoading(true);
        const response = getSiteInfo();
        if (response.length > 0) {
          setSiteInfo(response);
        }
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <SiteInfoContext.Provider value={{ siteInfo, isLoading, error }}>
      {children}
    </SiteInfoContext.Provider>
  );
}

// Ensure that useSiteInfo is exported as a named function
export function useSiteInfo() {
  const context = useContext(SiteInfoContext);
  if (context === undefined) {
    throw new Error("useSiteInfo must be used within a SiteInfoProvider");
  }
  return context;
}
