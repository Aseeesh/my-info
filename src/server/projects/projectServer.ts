import { parseData, Project } from "./type";

export function getProjectData(): Project[] {
  const projectData = parseData();
  return projectData;
}

export function getProjectById(id: string): Project | undefined {
  const projectData = parseData();
  return projectData.find((item) => item.id === id);
}
