"use client";
import { useProjectById } from "@/hooks/useProjectData";
import ExportedImage from "next-image-export-optimizer";
import { FiCalendar, FiTag, FiMapPin } from "react-icons/fi";
import { useParams } from "next/navigation";
import iconImage from "./Software Development.png";

export default function ProjectDetails() {
  const params = useParams();
  const { projectData, error, isLoading } = useProjectById(params.id as string);

  if (isLoading) return <p>Loading details...</p>;
  if (error) return <p>{error}</p>;
  return (
    projectData != null && (
      <div className="container mx-auto">
        <div>
          <p className="font-general-medium text-primary-dark dark:text-primary-light mb-7 mt-14 text-left text-3xl font-bold sm:mt-20 sm:text-4xl">
            {projectData.ProjectHeader.title}
          </p>
          <div className="flex">
            <div className="mr-10 flex items-center">
              <FiCalendar className="text-ternary-dark dark:text-ternary-light text-xl" />
              {projectData.ProjectHeader.publishDate.map((date, index) => {
                return (
                  <>
                    {"   "}
                    <span
                      className="font-general-regular text-primary-dark dark:text-primary-light ml-2 leading-none"
                      key={index}
                    >
                      {date}
                      {index <
                        projectData.ProjectHeader.publishDate.length - 1 && "-"}
                    </span>
                  </>
                );
              })}
            </div>
            <div className="flex items-center">
              <FiTag className="text-ternary-dark dark:text-ternary-light h-4 w-4" />
              <span className="font-general-regular text-primary-dark dark:text-primary-light ml-2 leading-none">
                {projectData.ProjectHeader.tags}
              </span>
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="mt-14 block gap-0 sm:flex sm:gap-10">
          <div className="w-full text-left sm:w-1/3">
            {/* Single project client details */}
            <div className="mb-7">
              {projectData.ProjectImages.map((project) => {
                return (
                  <div className="mb-10 sm:mb-0" key={project.id}>
                    <ExportedImage
                      title={project.title}
                      alt={project.title}
                      src={iconImage}
                      width={320}
                      height={220}
                      placeholder="blur"
                      className="cursor-pointer rounded-xl shadow-lg sm:shadow-none"
                    />
                  </div>
                );
              })}
              {/* <p className="font-general-regular text-secondary-dark dark:text-secondary-light mb-2 text-2xl font-semibold">
                {projectData.ProjectInfo.ClientHeading}
              </p> */}
            </div>{" "}
            <div className="mb-7">
              <ul className="leading-loose">
                {projectData.ProjectInfo.CompanyInfo.map((info) => {
                  return info.isURL ? (
                    <li
                      className="font-general-regular text-ternary-dark dark:text-ternary-light"
                      key={info.id}
                    >
                      <a
                        className="group flex items-center rounded-lg bg-gray-50 p-3 text-base font-bold text-gray-900 hover:bg-gray-100 hover:shadow dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500"
                        href={info.details}
                      >
                        <span className="ms-3 flex-1 whitespace-nowrap font-medium">
                          {info.title}
                        </span>
                        {/* <span className="ms-3 inline-flex items-center justify-center rounded bg-gray-200 px-2 py-0.5 text-xs text-gray-500 dark:bg-gray-700 dark:text-gray-400">
                        {info.details}
                      </span> */}
                      </a>
                    </li>
                  ) : (
                    <li
                      className="font-general-regular text-ternary-dark dark:text-ternary-light"
                      key={info.id}
                    >
                      <p className="group flex items-center rounded-lg bg-gray-50 p-3 text-base font-bold text-gray-900 hover:bg-gray-100 hover:shadow dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500">
                        {info.details == "Location" && (
                          <FiMapPin className="text-ternary-dark dark:text-ternary-light h-4 w-4" />
                        )}
                        <span className="ms-3 flex-1 whitespace-nowrap font-medium">
                          {info.title}
                        </span>
                        {/* <span className="ms-3 inline-flex items-center justify-center rounded bg-gray-200 px-2 py-0.5 text-xs text-gray-500 dark:bg-gray-700 dark:text-gray-400">
                          {info.details}
                        </span> */}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>
            {/* Single project technologies */}
            <div className="mb-7">
              <p className="font-general-regular text-ternary-dark dark:text-ternary-light mb-2 text-2xl font-semibold">
                {projectData.ProjectInfo.Technologies[0].title}
              </p>

              <div className="flex flex-wrap items-center gap-1">
                {projectData.ProjectInfo.Technologies[0].techs.map(
                  (item, index) => (
                    <button
                      key={index}
                      className="rounded-lg bg-emerald-600 px-2 py-1 text-xs text-white dark:bg-gray-900 dark:text-neutral-400"
                    >
                      {item}
                    </button>
                  ),
                )}
              </div>
            </div>
          </div>
          {/*  Single project right section details */}
          <div className="mt-10 w-full text-left sm:mt-0 sm:w-2/3">
            {/* Single project objectives */}
            <div className="mb-7">
              <p className="font-general-regular text-ternary-dark dark:text-ternary-light mb-2 divide-gray-200 text-2xl font-semibold dark:divide-gray-700">
                Description
              </p>
              <p className="text-md text-gray-500 dark:text-gray-400">
                {projectData.description}
              </p>
            </div>
            {projectData.ProjectInfo.KeyRoleDetails.length > 0 && (
              <>
                <p className="text-primary-dark dark:text-primary-light mb-7 text-2xl font-bold">
                  {projectData.ProjectInfo.KeyRoleHeading}
                </p>
                <ul className="max-w divide-y divide-gray-200 dark:divide-gray-700">
                  {projectData.ProjectInfo.KeyRoleDetails.map((details) => {
                    return (
                      <li className="py-3 sm:py-4" key={details.id}>
                        <div className="flex items-center space-x-4 rtl:space-x-reverse">
                          <div className="min-w-0 flex-1">
                            <p className="text-md text-gray-500 dark:text-gray-400">
                              {details.details}
                            </p>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </>
            )}
            {projectData.ProjectInfo.KeyAchievementHeading.length > 0 && (
              <>
                <p className="text-primary-dark dark:text-primary-light mb-7 text-2xl font-bold">
                  {projectData.ProjectInfo.KeyAchievementHeading}
                </p>
                <ul className="max-w list-inside space-y-1 text-gray-500 dark:text-gray-400">
                  {projectData.ProjectInfo.KeyAchievementDetails.map(
                    (details) => {
                      return (
                        <li className="flex items-center" key={details.id}>
                          <svg
                            className="me-2 h-3.5 w-3.5 flex-shrink-0 text-green-500 dark:text-green-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                          </svg>
                          {details.details}
                        </li>
                      );
                    },
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
