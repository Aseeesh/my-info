"use client";

import {
  addNewSkill,
  deleteSkill,
  getAllSkills,
} from "@/server/skills/skillService";
import { Skill } from "@/server/skills/type";
import { useState, useEffect, useCallback } from "react";

export function useData() {
  const [data, setData] = useState<Skill[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch data function
  const loadData = useCallback(async () => {
    try {
      setIsLoading(true);
      const items = await getAllSkills();
      setData(items);
    } catch (error) {
      setError("Failed to load data." + (error as Error).message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Add item with data reload
  const addItem = async (newItem: Skill) => {
    try {
      const addedItem = await addNewSkill(newItem);
      setData((prevData) => [...prevData, addedItem]);
    } catch {
      setError("Failed to add item.");
    }
  };

  // Delete item function with state update
  const deleteItem = async (id: string) => {
    try {
      await deleteSkill(id);
      // Remove the item locally
      setData((prevData) => prevData.filter((item) => item.id !== id));
    } catch {
      setError("Failed to delete item.");
    }
  };

  useEffect(() => {
    loadData();
  }, [loadData]);

  return { data, addItem, deleteItem, error, isLoading };
}
