// app/projects/ProjectCard.tsx (using reusable component)
"use client";
import { Project } from "@/server/projects/type";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiCalendar } from "react-icons/fi";
import ImageWithLoading from "@/components/ImageWithLoading";
import iconImage from "../images/Idea.png";

export default function ProjectCard(
  props: Project & {
    resolvedTheme?: string;
    imageClassName: string;
    index?: number;
  },
) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeOut",
        duration: 0.5,
        delay: (props.index || 0) * 0.1,
      }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <figure className="relative h-full cursor-pointer transition-all duration-300 hover:grayscale-0">
        <Link href={`/projects/${props.id}`} className="block h-full">
          <div className={props.imageClassName}>
            <ImageWithLoading
              src={iconImage}
              alt={props.title}
              width={400}
              height={300}
              className="w-full"
              imageClassName="w-full h-auto object-cover"
            />
          </div>

          <div className="mt-4 flex flex-col justify-start gap-2">
            <h1 className="line-clamp-1 text-lg font-bold capitalize text-gray-800 transition-colors hover:text-emerald-600 dark:text-neutral-100 dark:hover:text-emerald-400">
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
                          className="rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 px-2.5 py-1 text-xs font-medium text-emerald-700 dark:from-emerald-900/30 dark:to-teal-900/30 dark:text-emerald-300"
                        >
                          {item}
                        </span>
                      )),
                  )}
                  {props.ProjectInfo.Technologies[0]?.techs.length > 4 && (
                    <span className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600 dark:bg-gray-700 dark:text-gray-300">
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
