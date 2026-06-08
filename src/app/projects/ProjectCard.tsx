import { Project } from "@/server/projects/type";
import { motion } from "framer-motion";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";
import { FiCalendar } from "react-icons/fi";

import iconImage from "./Software Development.png";

export default function ProjectCard(
  props: Project & { resolvedTheme?: string; imageClassName: string },
) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.7,
        delay: 0.15,
      }}
      className="h-full"
    >
      <figure className="relative h-full cursor-pointer grayscale filter transition-all duration-300 hover:grayscale-0">
        <Link href={`/projects/${props.id}`} className="block h-full">
          <div className={props.imageClassName}>
            <ExportedImage
              title={props.title}
              alt={props.title}
              src={iconImage}
              width={420}
              height={240}
              className="h-48 w-full rounded-lg object-cover transition-all duration-300 lg:group-hover:scale-105"
            />
          </div>

          <div className="mt-4 flex flex-col justify-start gap-2">
            <h1 className="line-clamp-1 text-lg font-bold capitalize dark:text-neutral-100">
              {props.title}
            </h1>

            <div className="flex items-center text-sm font-medium text-gray-600 dark:text-gray-400">
              <FiCalendar className="flex-shrink-0" />
              <span className="ml-2">
                {props.ProjectHeader.publishDate.join(" - ")}
              </span>
            </div>

            <p className="line-clamp-2 text-sm leading-relaxed text-gray-600 dark:text-neutral-400">
              {props.description}
            </p>

            {props.ProjectInfo.Technologies &&
              props.ProjectInfo.Technologies.length > 0 && (
                <div className="mt-2 flex flex-wrap items-center gap-1.5">
                  {props.ProjectInfo.Technologies.slice(0, 1).map(
                    (tool, toolIndex) =>
                      tool.techs.slice(0, 4).map((item, index) => (
                        <span
                          key={`${toolIndex}-${index}`}
                          className="rounded-lg bg-emerald-600 px-2 py-1 text-xs font-medium text-white dark:bg-gray-700 dark:text-neutral-300"
                        >
                          {item}
                        </span>
                      )),
                  )}
                  {props.ProjectInfo.Technologies[0]?.techs.length > 4 && (
                    <span className="rounded-lg bg-gray-500 px-2 py-1 text-xs font-medium text-white">
                      +{props.ProjectInfo.Technologies[0].techs.length - 4}
                    </span>
                  )}
                </div>
              )}
          </div>
        </Link>
      </figure>
    </motion.div>
  );
}
