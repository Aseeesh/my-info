// app/resume/page.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FiDownload,
  FiExternalLink,
  FiFileText,
  FiEye,
  FiClock,
  FiAward,
  FiBriefcase,
  FiUser,
} from "react-icons/fi";
import { useSiteInfo } from "@/hooks/context/SiteInfoContext";

const GOOGLE_DRIVE_FILE_ID = "1l0bq3sx1vD6ngVG3cb6VzXPeeKSkvN-MaHcJb1TACKs";

export default function ResumePage() {
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);
  const [downloadCount, setDownloadCount] = useState(0);
  const { siteInfo } = useSiteInfo();

  useEffect(() => {
    const saved = localStorage.getItem("resume_download_count");
    if (saved) setDownloadCount(parseInt(saved));
  }, []);

  const DIRECT_DOWNLOAD_URL = `https://drive.google.com/uc?export=download&id=${GOOGLE_DRIVE_FILE_ID}`;

  const VIEW_URL = `https://drive.google.com/file/d/${GOOGLE_DRIVE_FILE_ID}/preview`;

  const handleDownload = () => {
    // Create hidden anchor (most reliable way)
    const link = document.createElement("a");
    link.href = DIRECT_DOWNLOAD_URL;
    link.target = "_blank";
    link.rel = "noopener noreferrer";

    // Optional: force download filename
    link.setAttribute("download", "resume.pdf");

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Update count
    const newCount = downloadCount + 1;
    setDownloadCount(newCount);
    localStorage.setItem("resume_download_count", newCount.toString());
  };

  const stats = [
    {
      icon: FiFileText,
      label: "Pages",
      value: "2",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: FiBriefcase,
      label: "Experience",
      value: "10+",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: FiAward,
      label: "Projects",
      value: "11",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: FiDownload,
      label: "Downloads",
      value: downloadCount.toString(),
      color: "from-orange-500 to-red-500",
    },
  ];

  const skills = [
    "Full Stack Development",
    "System Architecture",
    "Team Leadership",
    "Cloud Computing",
    "IoT Integration",
    "Mobile Development",
    "Database Design",
    "API Development",
    "Agile Methodologies",
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-emerald-600 to-teal-600 py-16">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-white/10 blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-white/10 blur-3xl"></div>
        </div>

        <div className="container relative mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur-sm">
              <FiUser className="h-4 w-4 text-white" />
              <span className="text-sm font-medium text-white">
                {siteInfo?.[0]?.author?.name}
              </span>
            </div>
            <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Professional Resume
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-white/90">
              A comprehensive overview of my professional journey, skills, and
              achievements
            </p>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto -mt-8 px-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 gap-4 md:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg transition-all hover:shadow-xl dark:bg-gray-800"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 transition-opacity group-hover:opacity-10`}
              />
              <div className="relative">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 text-gray-600 dark:from-gray-700 dark:to-gray-600">
                  <stat.icon className="h-6 w-6" />
                </div>
                <div className="text-2xl font-bold text-gray-800 dark:text-white">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Left Sidebar - Info & Skills */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            {/* Quick Info Card */}
            <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800">
              <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-gray-800 dark:text-white">
                <FiClock className="text-emerald-500" />
                Quick Info
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-gray-100 pb-2 dark:border-gray-700">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Experience
                  </span>
                  <span className="text-sm font-medium text-gray-800 dark:text-white">
                    10+ Years
                  </span>
                </div>
                <div className="flex items-center justify-between border-b border-gray-100 pb-2 dark:border-gray-700">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Location
                  </span>
                  <span className="text-sm font-medium text-gray-800 dark:text-white">
                    Glen Eden, Aukland, New Zealand
                  </span>
                </div>
                <div className="flex items-center justify-between border-b border-gray-100 pb-2 dark:border-gray-700">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Availability
                  </span>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-emerald-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                    Open to Work
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Languages
                  </span>
                  <span className="text-sm font-medium text-gray-800 dark:text-white">
                    English, Nepali
                  </span>
                </div>
              </div>
            </div>

            {/* Skills Card */}
            <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800">
              <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-gray-800 dark:text-white">
                <svg
                  className="h-5 w-5 text-emerald-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Core Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 px-3 py-1.5 text-xs font-medium text-emerald-700 dark:from-emerald-900/30 dark:to-teal-900/30 dark:text-emerald-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              {/* <button
                onClick={handleDownload}
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-3 font-semibold text-white transition-all hover:scale-105 hover:shadow-lg"
              >
                <FiDownload className="h-5 w-5 transition-transform group-hover:-translate-y-1" />
                Download PDF
              </button> */}
              <Link
                href={VIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-emerald-500 px-6 py-3 font-semibold text-emerald-600 transition-all hover:scale-105 hover:bg-emerald-50 dark:text-emerald-400 dark:hover:bg-emerald-900/20"
              >
                <FiEye className="h-5 w-5" />
                Open in Full Screen
              </Link>
            </div>
          </motion.div>

          {/* Right Column - PDF Viewer */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="overflow-hidden rounded-2xl bg-white shadow-xl dark:bg-gray-800">
              {/* PDF Viewer Header */}
              <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-4 py-3 dark:border-gray-700 dark:bg-gray-900">
                <div className="flex items-center gap-2">
                  <FiFileText className="text-emerald-500" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Resume Preview
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <div className="h-2 w-2 rounded-full bg-red-500"></div>
                    <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  </div>
                </div>
              </div>

              {/* Loading State */}
              {!isIframeLoaded && (
                <div className="flex h-[600px] items-center justify-center">
                  <div className="text-center">
                    <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-4 border-emerald-500 border-t-transparent"></div>
                    <p className="text-gray-600 dark:text-gray-400">
                      Loading resume preview...
                    </p>
                  </div>
                </div>
              )}

              {/* PDF Iframe */}
              <iframe
                src={VIEW_URL}
                className={`h-[600px] w-full rounded-b-2xl border-0 transition-opacity duration-300 ${
                  isIframeLoaded ? "opacity-100" : "opacity-0"
                }`}
                allow="autoplay"
                title="Resume"
                onLoad={() => setIsIframeLoaded(true)}
              />

              {/* Footer Note */}
              <div className="border-t border-gray-200 bg-gray-50 px-4 py-3 text-center text-xs text-gray-500 dark:border-gray-700 dark:bg-gray-900">
                <p>
                  Having trouble viewing?{" "}
                  <Link
                    href={VIEW_URL}
                    target="_blank"
                    className="text-emerald-600 hover:underline dark:text-emerald-400"
                  >
                    Open in new tab
                  </Link>{" "}
                  {/* or{" "}
                  <button
                    onClick={handleDownload}
                    className="text-emerald-600 hover:underline dark:text-emerald-400"
                  >
                    download the PDF
                  </button> */}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional Info Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 p-8 text-center dark:from-emerald-900/20 dark:to-teal-900/20"
        >
          <h3 className="mb-2 text-xl font-semibold text-gray-800 dark:text-white">
            Want to know more?
          </h3>
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            Check out my projects or feel free to reach out for collaboration
            opportunities
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-2 font-medium text-gray-700 transition-all hover:scale-105 hover:shadow-md dark:bg-gray-800 dark:text-gray-300"
            >
              View Projects
              <FiBriefcase className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-6 py-2 font-medium text-white transition-all hover:scale-105 hover:bg-emerald-700"
            >
              Contact Me
              <FiExternalLink className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
