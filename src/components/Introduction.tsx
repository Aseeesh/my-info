"use client";
import { useSiteInfo } from "@/hooks/context/SiteInfoContext";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";
import { SiGithub } from "react-icons/si";
import { TbMailFilled } from "react-icons/tb";
import { RoughNotation } from "react-rough-notation";
import colors from "tailwindcss/colors";
import iconImage from "./profile.png";
export default function Introduction() {
  const { isLoading, siteInfo, error } = useSiteInfo();
  if (error) return <p>{error}</p>;
  if (isLoading) return <p>{isLoading}</p>;
  return (
    siteInfo != null && (
      <>
        <div className="mt-14 block gap-0 sm:flex sm:gap-10">
          <div className="w-full text-left sm:w-1/3">
            {/* Single project client details */}
            <div className="mb-7">
              <div className="mb-10 sm:mb-0">
                <ExportedImage
                  alt="avatar"
                  src={iconImage}
                  width={320}
                  height={220}
                  placeholder="blur"
                  className="cursor-pointer rounded-xl shadow-lg sm:shadow-none"
                />
              </div>

              {/* <p className="font-general-regular text-secondary-dark dark:text-secondary-light mb-2 text-2xl font-semibold">
                {projectData.ProjectInfo.ClientHeading}
              </p> */}
            </div>{" "}
            <div className="mb-7">
              <ul className="leading-loose">
                <li className="font-general-regular text-ternary-dark dark:text-ternary-light">
                  <h3 className="pb-2 pt-4 text-3xl font-bold leading-8 tracking-tight xl:text-2xl">
                    <RoughNotation
                      type="underline"
                      show={true}
                      color={colors.sky[500]}
                      animationDelay={1700}
                      animationDuration={1200}
                    >
                      {siteInfo[0].author.name}
                    </RoughNotation>
                  </h3>
                </li>
                <li className="font-general-regular text-ternary-dark dark:text-ternary-light">
                  <RoughNotation
                    type="underline"
                    show={true}
                    color={colors.sky[500]}
                    animationDelay={1700}
                    animationDuration={1200}
                  >
                    {siteInfo[0].author.role}
                  </RoughNotation>
                </li>
              </ul>
            </div>
            {/* Single project technologies */}
            <div className="mb-7">
              <p className="font-general-regular text-ternary-dark dark:text-ternary-light mb-2 text-2xl font-semibold">
                <h4>My Skills</h4>
              </p>

              <div className="flex flex-wrap items-center gap-1">
                {siteInfo[0].skills.map((item, index) => {
                  return (
                    <button
                      key={index}
                      className="rounded-lg bg-emerald-600 px-2 py-1 text-xs text-white dark:bg-gray-900 dark:text-neutral-400"
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="flex space-x-3 pt-6">
              <Link
                className="text-sm text-gray-500 transition hover:text-gray-600"
                target="_blank"
                rel="noopener noreferrer"
                href={`mailto:${siteInfo[0].social.email}`}
              >
                <span className="sr-only">mail</span>
                <TbMailFilled className="h-6 w-6 fill-current text-gray-700 hover:text-primary-500 dark:text-gray-200 dark:hover:text-primary-400" />
              </Link>
              <Link
                className="text-sm text-gray-500 transition hover:text-gray-600"
                target="_blank"
                rel="noopener noreferrer"
                href={siteInfo[0].social.github}
              >
                <span className="sr-only">github</span>
                <SiGithub className="h-6 w-6 fill-current text-gray-700 hover:text-primary-500 dark:text-gray-200 dark:hover:text-primary-400" />
              </Link>
            </div>
          </div>
          {/*  Single project right section details */}
          <div className="mt-10 w-full text-left sm:mt-0 sm:w-2/3">
            {/* Single project objectives */}
            <div className="mb-7">
              <p className="text-md text-gray-500 dark:text-gray-400">
                {siteInfo[0].author.about}
              </p>
              <h2 className="font-general-medium text-primary-dark dark:text-primary-light mb-8 mt-12 text-2xl">
                My Background
              </h2>

              <p className="text-md text-gray-500 dark:text-gray-400">
                {siteInfo[0].author.background}
              </p>
              <h2 className="font-general-medium text-primary-dark dark:text-primary-light mb-8 mt-12 text-2xl">
                My Strenghts
              </h2>
              {""}

              <ul className="space-y-4 text-left text-gray-500 dark:text-gray-400">
                {siteInfo[0].author.strengths.map((strength, index) => {
                  return (
                    <li
                      className="flex items-center space-x-3 rtl:space-x-reverse"
                      key={index}
                    >
                      <svg
                        className="h-3.5 w-3.5 flex-shrink-0 text-green-500 dark:text-green-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 16 12"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1 5.917 5.724 10.5 15 1.5"
                        />
                      </svg>
                      <span>{strength}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </>
    )
  );
}
