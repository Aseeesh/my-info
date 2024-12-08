import { Project } from "@/server/projects/type";
import { motion } from "framer-motion";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";
import iconImage from "./Software Development.png";
import { FiCalendar } from "react-icons/fi";

export default function ProjectCard(
  props: Project & { resolvedTheme?: string; imageClassName: string },
) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          ease: "easeInOut",
          duration: 0.7,
          delay: 0.15,
        }}
      >
        <figure className="relative cursor-pointer grayscale filter transition-all duration-300 hover:grayscale-0">
          <Link href={`/projects/${props.id}`}>
            <div className={props.imageClassName}>
              <ExportedImage
                title={props.title}
                alt={props.title}
                src={iconImage}
                width={420}
                height={130}
                placeholder="blur"
                className="placeholder rounded-lg object-cover backdrop-blur-xl transition-all duration-300 lg:group-hover:scale-110"
              />
            </div>

            <div className="flex flex-col justify-start gap-3">
              <h1 className="font-bold capitalize dark:text-neutral-100">
                {props.title}
              </h1>
              <div className="mr-10 flex items-center text-base font-bold text-gray-900">
                <FiCalendar className="text-ternary-dark dark:text-ternary-light" />
                {props.ProjectHeader.publishDate.map((date, index) => {
                  return (
                    <>
                      {" "}
                      <span
                        className="font-general-regular text-primary-dark dark:text-primary-light ml-2 leading-none"
                        key={index}
                      >
                        {date}
                        {index < props.ProjectHeader.publishDate.length - 1 &&
                          ""}
                      </span>
                    </>
                  );
                })}
              </div>
              <p className="shortened-text text-sm leading-6 dark:text-neutral-300">
                {props.description.slice(0, 70)}
              </p>

              {props.ProjectInfo.Technologies &&
                props.ProjectInfo.Technologies.length > 0 && (
                  <div className="flex flex-wrap items-center gap-1">
                    {props.ProjectInfo.Technologies.map((tool) =>
                      tool.techs.map((item, index) => (
                        <button
                          key={index}
                          className="rounded-lg bg-emerald-600 px-2 py-1 text-xs text-white dark:bg-gray-900 dark:text-neutral-400"
                        >
                          {item}
                        </button>
                      )),
                    )}
                  </div>
                )}
            </div>
          </Link>
        </figure>
      </motion.div>
    </>
  );
}
