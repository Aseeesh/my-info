"use client";

import ProjectCard from "@/app/projects/ProjectCard";
import { useProjectData } from "@/hooks/useProjectData";
import { useTheme } from "next-themes";

export default function ProjectsPage() {
  const { resolvedTheme } = useTheme();
  const { projectData, error, isLoading } = useProjectData();

  if (isLoading)
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        Loading projects...
      </div>
    );

  if (error)
    return (
      <div className="container mx-auto px-4 py-20 text-center text-red-500">
        {error}
      </div>
    );

  return (
    projectData != null && (
      <div className="divide-y divide-gray-200 dark:divide-gray-700 md:mb-24">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:leading-14">
            Project Experiences
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-400">
            A collection of my professional work and personal projects
          </p>
        </div>

        <div className="py-5">
          <div className="mx-auto grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projectData.map((project) => (
              <div
                key={project.id}
                className="flex h-full flex-col rounded-lg border border-gray-200 bg-white p-4 transition-all hover:shadow-lg dark:border-gray-700 dark:bg-gray-800"
              >
                <ProjectCard
                  {...project}
                  resolvedTheme={resolvedTheme}
                  imageClassName="w-full overflow-hidden rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  );
}
