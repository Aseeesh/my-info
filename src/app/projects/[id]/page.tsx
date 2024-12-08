import ProjectDetails from "../ProjectDetails";
import { Project } from "@/server/projects/type";
import { getProjectData } from "@/server/projects/projectServer";

export async function generateStaticParams() {
  try {
    const projects = getProjectData();
    return projects.map((project: Project) => ({ id: project.id }));
  } catch (error) {
    console.error("Error fetching projects:", error);
    return []; // Return an empty array on error as per Next.js 14 requirements
  }
}

export default function ProductDetails() {
  return <ProjectDetails />;
}
