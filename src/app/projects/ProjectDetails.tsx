"use client";
import { useProjectById } from "@/hooks/useProjectData";
import ExportedImage from "next-image-export-optimizer";
import { FiCalendar, FiTag, FiMapPin } from "react-icons/fi";
import { useParams } from "next/navigation";
import iconImage from "./Software Development.png";

export default function ProjectDetails() {
  const params = useParams();
  const { projectData, error, isLoading } = useProjectById(params.id as string);

  if (isLoading)
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        Loading project details...
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
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div>
          <p className="font-general-medium text-primary-dark dark:text-primary-light mb-7 mt-14 text-left text-3xl font-bold sm:mt-20 sm:text-4xl">
            {projectData.ProjectHeader.title}
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center">
              <FiCalendar className="text-ternary-dark dark:text-ternary-light text-xl" />
              <span className="font-general-regular text-primary-dark dark:text-primary-light ml-2 leading-none">
                {projectData.ProjectHeader.publishDate.join(" - ")}
              </span>
            </div>
            <div className="flex items-center">
              <FiTag className="text-ternary-dark dark:text-ternary-light h-4 w-4" />
              <span className="font-general-regular text-primary-dark dark:text-primary-light ml-2 leading-none">
                {projectData.ProjectHeader.tags}
              </span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="mt-14 block gap-0 sm:flex sm:gap-10">
          {/* Left Column - Image & Info */}
          <div className="w-full text-left sm:w-1/3">
            {/* Project Image */}
            <div className="mb-7">
              {projectData.ProjectImages.map((project) => (
                <div className="mb-10 sm:mb-0" key={project.id}>
                  <ExportedImage
                    title={project.title}
                    alt={project.title}
                    src={iconImage}
                    width={320}
                    height={220}
                    className="w-full rounded-xl object-cover shadow-lg"
                  />
                </div>
              ))}
            </div>

            {/* Company Info */}
            <div className="mb-7">
              <ul className="space-y-2 leading-loose">
                {projectData.ProjectInfo.CompanyInfo.map((info) => (
                  <li key={info.id}>
                    {info.isURL ? (
                      <a
                        className="flex items-center rounded-lg bg-gray-50 p-3 text-base font-bold text-gray-900 transition-all hover:bg-gray-100 hover:shadow dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500"
                        href={info.details}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="flex-1 whitespace-nowrap font-medium">
                          {info.title}
                        </span>
                      </a>
                    ) : (
                      <div className="flex items-center rounded-lg bg-gray-50 p-3 text-base font-bold text-gray-900 dark:bg-gray-600 dark:text-white">
                        {info.details === "Location" && (
                          <FiMapPin className="h-4 w-4 flex-shrink-0" />
                        )}
                        <span className="ml-3 flex-1 whitespace-nowrap font-medium">
                          {info.title}
                        </span>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            {projectData.ProjectInfo.Technologies &&
              projectData.ProjectInfo.Technologies.length > 0 && (
                <div className="mb-7">
                  <p className="font-general-regular text-ternary-dark dark:text-ternary-light mb-3 text-2xl font-semibold">
                    Technologies
                  </p>
                  <div className="flex flex-wrap items-center gap-2">
                    {projectData.ProjectInfo.Technologies.map(
                      (techGroup, groupIndex) =>
                        techGroup.techs.map((item, index) => (
                          <span
                            key={`${groupIndex}-${index}`}
                            className="rounded-lg bg-emerald-600 px-2.5 py-1.5 text-xs font-medium text-white dark:bg-gray-700 dark:text-neutral-300"
                          >
                            {item}
                          </span>
                        )),
                    )}
                  </div>
                </div>
              )}
          </div>

          {/* Right Column - Description & Details */}
          <div className="mt-10 w-full text-left sm:mt-0 sm:w-2/3">
            {/* Description */}
            <div className="mb-7">
              <p className="font-general-regular text-ternary-dark dark:text-ternary-light mb-3 text-2xl font-semibold">
                Description
              </p>
              <p className="text-md leading-relaxed text-gray-600 dark:text-gray-400">
                {projectData.description}
              </p>
            </div>

            {/* Key Role */}
            {projectData.ProjectInfo.KeyRoleDetails?.length > 0 && (
              <>
                <p className="text-primary-dark dark:text-primary-light mb-4 text-2xl font-bold">
                  {projectData.ProjectInfo.KeyRoleHeading || "Key Role"}
                </p>
                <ul className="space-y-3 divide-y divide-gray-200 dark:divide-gray-700">
                  {projectData.ProjectInfo.KeyRoleDetails.map((details) => (
                    <li className="pt-3 first:pt-0" key={details.id}>
                      <div className="flex items-start space-x-3">
                        <div className="min-w-0 flex-1">
                          <p className="text-gray-600 dark:text-gray-400">
                            {details.details}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </>
            )}

            {/* Key Achievements */}
            {projectData.ProjectInfo.KeyAchievementDetails?.length > 0 && (
              <>
                <p className="text-primary-dark dark:text-primary-light mb-4 mt-8 text-2xl font-bold">
                  {projectData.ProjectInfo.KeyAchievementHeading ||
                    "Key Achievements"}
                </p>
                <ul className="space-y-2">
                  {projectData.ProjectInfo.KeyAchievementDetails.map(
                    (details) => (
                      <li className="flex items-start gap-2" key={details.id}>
                        <svg
                          className="mt-1 h-4 w-4 flex-shrink-0 text-green-500 dark:text-green-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                        </svg>
                        <span className="text-gray-600 dark:text-gray-400">
                          {details.details}
                        </span>
                      </li>
                    ),
                  )}
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
    )
  );
}
