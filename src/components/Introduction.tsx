// components/Introduction.tsx
"use client";
import { useSiteInfo } from "@/hooks/context/SiteInfoContext";
import ImageWithLoading from "@/components/ImageWithLoading";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { TbMailFilled } from "react-icons/tb";
import { RoughNotation } from "react-rough-notation";
import colors from "tailwindcss/colors";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
const iconImage = "/images/profile.png";

export default function Introduction() {
  const { isLoading, siteInfo, error } = useSiteInfo();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  if (error)
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <div className="text-center text-red-500">Error: {error}</div>
      </div>
    );

  if (isLoading)
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <div className="text-center">
          <div className="mb-4 h-8 w-8 animate-spin rounded-full border-4 border-primary-500 border-t-transparent"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading...</p>
        </div>
      </div>
    );

  return (
    siteInfo != null && (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4"
      >
        <div className="mt-14 block gap-12 sm:flex sm:gap-10">
          {/* Left Column - Profile */}
          <div className="w-full text-left sm:w-1/3">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-7"
            >
              <div className="relative mb-10 overflow-hidden rounded-2xl shadow-2xl sm:mb-0">
                <ImageWithLoading
                  src={iconImage}
                  alt="Ashish Rijal - Software Engineer"
                  width={400}
                  height={400}
                  className="w-full"
                  imageClassName="w-full transition-transform duration-500 hover:scale-105"
                  priority={true}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100" />
              </div>
            </motion.div>

            {/* Name & Role */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mb-7"
            >
              <h1 className="mb-3 text-4xl font-bold leading-tight tracking-tight xl:text-5xl">
                <RoughNotation
                  type="underline"
                  show={true}
                  color={colors.sky[500]}
                  animationDelay={1700}
                  animationDuration={1200}
                >
                  {siteInfo[0].author.name}
                </RoughNotation>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                <RoughNotation
                  type="highlight"
                  show={true}
                  color={colors.emerald[500]}
                  animationDelay={2000}
                  animationDuration={1200}
                >
                  {siteInfo[0].author.role}
                </RoughNotation>
              </p>
            </motion.div>

            {/* Skills Section */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mb-7"
            >
              <h3 className="mb-3 text-2xl font-semibold text-gray-800 dark:text-gray-200">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {siteInfo[0].skills.map((item, index) => (
                  <motion.span
                    key={index}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-3 py-1.5 text-sm font-medium text-white shadow-md transition-all hover:shadow-lg dark:from-emerald-600 dark:to-teal-600"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex space-x-4 pt-4"
            >
              <SocialLink
                href={`mailto:${siteInfo[0].social.email}`}
                icon={<TbMailFilled />}
                label="Email"
              />
              <SocialLink
                href={siteInfo[0].social.github}
                icon={<SiGithub />}
                label="GitHub"
              />
              {siteInfo[0].social.linkedin && (
                <SocialLink
                  href={siteInfo[0].social.linkedin}
                  icon={<FaLinkedinIn />}
                  label="LinkedIn"
                />
              )}
            </motion.div>
          </div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-10 w-full text-left sm:mt-0 sm:w-2/3"
          >
            {/* About Section */}
            <div className="mb-8">
              <h2 className="mb-4 text-3xl font-bold text-gray-800 dark:text-gray-100">
                About Me
              </h2>
              <div className="prose max-w-none dark:prose-invert">
                <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                  {siteInfo[0].author.about}
                </p>
              </div>
            </div>

            {/* Background Section */}
            <div className="mb-8">
              <h2 className="mb-4 text-3xl font-bold text-gray-800 dark:text-gray-100">
                My Background
              </h2>
              <div className="rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 p-6 dark:from-gray-800 dark:to-gray-900">
                <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                  {siteInfo[0].author.background}
                </p>
              </div>
            </div>

            {/* Strengths Section */}
            <div className="mb-8">
              <h2 className="mb-4 text-3xl font-bold text-gray-800 dark:text-gray-100">
                Core Strengths
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {siteInfo[0].author.strengths.map((strength, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-center gap-3 rounded-xl bg-white p-3 shadow-sm transition-all hover:shadow-md dark:bg-gray-800"
                  >
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">
                      {strength}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="mt-8 flex gap-4"
            >
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-3 font-semibold text-white transition-all hover:scale-105 hover:shadow-lg"
              >
                View My Work
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
              <Link
                href="/resume"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-emerald-500 px-6 py-3 font-semibold text-emerald-600 transition-all hover:scale-105 hover:bg-emerald-50 dark:text-emerald-400 dark:hover:bg-emerald-900/20"
              >
                View Resume
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    )
  );
}

// Social Link Component
function SocialLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-all hover:scale-110 hover:bg-gradient-to-r hover:from-emerald-500 hover:to-teal-500 hover:text-white dark:bg-gray-800 dark:text-gray-400"
      aria-label={label}
    >
      <span className="text-xl">{icon}</span>
      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-gray-800 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
        {label}
      </span>
    </Link>
  );
}
