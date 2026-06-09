// app/projects/[id]/ProjectDetails.tsx
"use client";
import { useProjectById } from "@/hooks/useProjectData";
import ImageWithLoading from "@/components/ImageWithLoading";
import {
  FiCalendar,
  FiTag,
  FiMapPin,
  FiArrowLeft,
  FiExternalLink,
} from "react-icons/fi";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import iconImage from "../images/Idea.png";
export default function ProjectDetails() {
  const params = useParams();
  const router = useRouter();
  const { projectData, error, isLoading } = useProjectById(params.id as string);

  if (isLoading)
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center">
          <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-4 border-emerald-500 border-t-transparent"></div>
          <p className="text-gray-600 dark:text-gray-400">
            Loading project details...
          </p>
        </div>
      </div>
    );

  if (error)
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="rounded-lg bg-red-50 p-6 text-center text-red-500 dark:bg-red-900/20">
          <p className="font-semibold">Error loading project</p>
          <p className="mt-2 text-sm">{error}</p>
          <button
            onClick={() => router.back()}
            className="mt-4 inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700"
          >
            <FiArrowLeft /> Go Back
          </button>
        </div>
      </div>
    );

  return (
    projectData != null && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
      >
        {/* Back Button */}
        <div className="container mx-auto px-4 pt-8">
          <button
            onClick={() => router.back()}
            className="group inline-flex items-center gap-2 rounded-lg px-4 py-2 text-gray-600 transition-all hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
          >
            <FiArrowLeft className="transition-transform group-hover:-translate-x-1" />
            Back to Projects
          </button>
        </div>

        <div className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <h1 className="mb-6 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
              {projectData.ProjectHeader.title}
            </h1>

            <div className="mb-8 flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <FiCalendar className="text-emerald-500" />
                <span>{projectData.ProjectHeader.publishDate.join(" — ")}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <FiTag className="text-emerald-500" />
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
                  {projectData.ProjectHeader.tags}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Left Column - Image, Info & Technologies */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-1"
            >
              <div className="sticky top-24">
                {/* Project Image with Loading */}
                <div className="overflow-hidden rounded-2xl bg-white shadow-xl dark:bg-gray-800">
                  <ImageWithLoading
                    src={iconImage}
                    alt={projectData.title}
                    width={400}
                    height={300}
                    className="w-full"
                    imageClassName="w-full h-auto object-cover"
                  />

                  {/* Project Info Cards */}
                  <div className="p-6">
                    {projectData.ProjectInfo.CompanyInfo.map((info) => (
                      <div key={info.id} className="mb-4">
                        {info.isURL ? (
                          <a
                            href={info.details}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between rounded-lg bg-gray-50 p-3 transition-all hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600"
                          >
                            <span className="font-medium text-gray-700 dark:text-gray-300">
                              {info.title}
                            </span>
                            <FiExternalLink className="text-gray-400" />
                          </a>
                        ) : (
                          <div className="flex items-center gap-3 rounded-lg bg-gray-50 p-3 dark:bg-gray-700">
                            {info.details === "Location" && (
                              <FiMapPin className="text-emerald-500" />
                            )}
                            <span className="font-medium text-gray-700 dark:text-gray-300">
                              {info.title}
                            </span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies Section - Moved under image */}
                {projectData.ProjectInfo.Technologies &&
                  projectData.ProjectInfo.Technologies.length > 0 && (
                    <div className="mt-6 overflow-hidden rounded-2xl bg-white p-6 shadow-xl dark:bg-gray-800">
                      <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                        Technologies Used
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {projectData.ProjectInfo.Technologies.map(
                          (techGroup, groupIndex) =>
                            techGroup.techs.map((item, index) => (
                              <span
                                key={`${groupIndex}-${index}`}
                                className="rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 px-3 py-1.5 text-sm font-medium text-emerald-700 transition-all hover:scale-105 hover:shadow-md dark:from-emerald-900/30 dark:to-teal-900/30 dark:text-emerald-300"
                              >
                                {item}
                              </span>
                            )),
                        )}
                      </div>
                    </div>
                  )}
              </div>
            </motion.div>

            {/* Right Column - Description & Details */}
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="lg:col-span-2"
            >
              {/* Description */}
              <div className="mb-8 rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800">
                <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                  Description
                </h2>
                <p className="leading-relaxed text-gray-600 dark:text-gray-300">
                  {projectData.description}
                </p>
              </div>

              {/* Key Role */}
              {projectData.ProjectInfo.KeyRoleDetails?.length > 0 && (
                <div className="mb-8 rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800">
                  <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                    {projectData.ProjectInfo.KeyRoleHeading ||
                      "Key Responsibilities"}
                  </h2>
                  <div className="space-y-3">
                    {projectData.ProjectInfo.KeyRoleDetails.map(
                      (details, index) => (
                        <motion.div
                          key={details.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-gray-50 dark:hover:bg-gray-700"
                        >
                          <div className="mt-1 h-2 w-2 rounded-full bg-emerald-500"></div>
                          <p className="text-gray-600 dark:text-gray-300">
                            {details.details}
                          </p>
                        </motion.div>
                      ),
                    )}
                  </div>
                </div>
              )}

              {/* Key Achievements */}
              {projectData.ProjectInfo.KeyAchievementDetails?.length > 0 && (
                <div className="mb-8 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 p-6 shadow-lg dark:from-emerald-900/20 dark:to-teal-900/20">
                  <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                    {projectData.ProjectInfo.KeyAchievementHeading ||
                      "Key Achievements"}
                  </h2>
                  <div className="space-y-3">
                    {projectData.ProjectInfo.KeyAchievementDetails.map(
                      (details, index) => (
                        <motion.div
                          key={details.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start gap-3 rounded-lg p-3"
                        >
                          <svg
                            className="mt-1 h-5 w-5 flex-shrink-0 text-emerald-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <p className="text-gray-700 dark:text-gray-300">
                            {details.details}
                          </p>
                        </motion.div>
                      ),
                    )}
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </motion.div>
    )
  );
}
