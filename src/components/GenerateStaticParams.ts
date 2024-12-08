import { getProjectData } from "@/server/projects/projectServer";

export function generateStaticParams() {
  try {
    const projects = getProjectData();
    return projects.map((project) => ({ id: project.id }));
  } catch (error) {
    console.error("Error fetching projects:", error);
    return []; // Return an empty array on error as per Next.js 14 requirements
  }
}
