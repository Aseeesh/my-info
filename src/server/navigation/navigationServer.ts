import { NavigationItem } from "./type";
import data from "./data.json";

export function getNavigations(): NavigationItem[] {
  return data;
}
