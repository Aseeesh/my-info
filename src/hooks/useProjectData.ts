"use client";
import {
  getProjectById,
  getProjectData,
} from "@/server/projects/projectServer";
import { Project } from "@/server/projects/type";
import { useState, useEffect } from "react";

export function useProjectData() {
  const [projectData, setSiteData] = useState<Project[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Effect to fetch navigation data on component mount
  useEffect(() => {
    function loadData() {
      try {
        setIsLoading(true);
        const data = getProjectData();
        setSiteData(data);
      } catch (error) {
        setError("Failed to load  data." + (error as Error).message);
      } finally {
        setIsLoading(false);
      }
    }

    loadData(); // Call the function to load data on mount
  }, []); // Empty dependency array ensures this runs only once on mount

  return { projectData, error, isLoading };
}

export function useProjectById(id: string) {
  const [projectData, setSiteData] = useState<Project>();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Effect to fetch navigation data on component mount
  useEffect(() => {
    function loadData() {
      try {
        const data = getProjectById(id);
        setSiteData(data);
      } catch (error) {
        setError("Failed to load  data." + (error as Error).message);
      } finally {
        setIsLoading(false);
      }
    }

    loadData(); // Call the function to load data on mount
  }, [id]); // Empty dependency array ensures this runs only once on mount

  return { projectData, error, isLoading };
}
