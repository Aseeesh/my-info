"use client";
import Link from "next/link";
import {
  SiGithub,
  SiLinkedin,
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";
import { useSiteInfo } from "@/hooks/context/SiteInfoContext";

export default function Footer() {
  const { isLoading, siteInfo, error } = useSiteInfo();
  if (error) return <p>{error}</p>;
  if (isLoading) return <p>{isLoading}</p>;

  return (
    siteInfo != null && (
      <footer>
        <div className="mb-4 mt-4 grid h-24 grid-cols-1 justify-items-center md:h-auto md:grid-cols-3">
          <div className="flex space-x-1 md:place-self-start">
            <span className="mr-1 text-gray-500 dark:text-gray-400">
              Built with
            </span>

            <div className="flex space-x-1.5">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://nextjs.org"
              >
                <span className="sr-only">nextjs</span>
                <SiNextdotjs className="h-5 w-5" fill="currentColor" />
              </Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.typescriptlang.org"
              >
                <span className="sr-only">typescript</span>
                <SiTypescript className="h-5 w-5" fill="currentColor" />
              </Link>
            </div>
          </div>

          <div className="flex space-x-4 md:place-content-center">
            <Link
              className="text-sm text-gray-500 transition hover:text-gray-600"
              target="_blank"
              rel="noopener noreferrer"
              href={siteInfo[0].social.github}
            >
              <span className="sr-only">github</span>
              <SiGithub className="h-6 w-6 fill-current text-gray-700 hover:text-primary-500 dark:text-gray-200 dark:hover:text-primary-400" />
            </Link>
            <Link
              className="text-sm text-gray-500 transition hover:text-gray-600"
              target="_blank"
              rel="noopener noreferrer"
              href={siteInfo[0].social.linkedin}
            >
              <span className="sr-only">linkedin</span>
              <SiLinkedin className="h-6 w-6 fill-current text-gray-700 hover:text-primary-500 dark:text-gray-200 dark:hover:text-primary-400" />
            </Link>
          </div>

          <div className="flex space-x-2 text-gray-500 dark:text-gray-400 md:place-self-end">
            <div className="whitespace-nowrap">{siteInfo[0].author.name}</div>
            <div>{` • `}</div>
            <div className="whitespace-nowrap">{`© ${new Date().getFullYear()}`}</div>
          </div>
        </div>

        <div className="mb-8 flex justify-center text-center text-sm">
          <Link
            href={siteInfo[0].sourceCode}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 underline underline-offset-4 dark:text-gray-400"
          >
            <span>View source</span>
          </Link>
        </div>
      </footer>
    )
  );
}
