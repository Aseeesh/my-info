// components/ProjectSkeleton.tsx (with shimmer effect)
import { motion } from "framer-motion";

const shimmer = `
  @keyframes shimmer {
    0% {
      background-position: -1000px 0;
    }
    100% {
      background-position: 1000px 0;
    }
  }
`;

export function ProjectSkeleton() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800"
    >
      <style>{shimmer}</style>

      {/* Image Skeleton with Shimmer */}
      <div className="relative mb-4 overflow-hidden rounded-lg">
        <div
          className="h-48 w-full bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700"
          style={{
            backgroundSize: "1000px 100%",
            animation: "shimmer 2s infinite linear",
          }}
        />
      </div>

      {/* Title Skeleton */}
      <div
        className="mb-3 h-6 w-3/4 rounded bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700"
        style={{
          backgroundSize: "1000px 100%",
          animation: "shimmer 2s infinite linear",
        }}
      />

      {/* Date Skeleton */}
      <div className="mb-3 flex items-center gap-2">
        <div
          className="h-4 w-4 rounded bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700"
          style={{
            backgroundSize: "1000px 100%",
            animation: "shimmer 2s infinite linear",
          }}
        />
        <div
          className="h-4 w-24 rounded bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700"
          style={{
            backgroundSize: "1000px 100%",
            animation: "shimmer 2s infinite linear",
          }}
        />
      </div>

      {/* Description Skeleton */}
      <div className="mb-4 space-y-2">
        <div
          className="h-4 w-full rounded bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700"
          style={{
            backgroundSize: "1000px 100%",
            animation: "shimmer 2s infinite linear",
          }}
        />
        <div
          className="h-4 w-11/12 rounded bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700"
          style={{
            backgroundSize: "1000px 100%",
            animation: "shimmer 2s infinite linear",
          }}
        />
      </div>

      {/* Tech Tags Skeleton */}
      <div className="mt-auto flex flex-wrap gap-2">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="h-6 w-16 rounded-full bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700"
            style={{
              backgroundSize: "1000px 100%",
              animation: "shimmer 2s infinite linear",
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}

export function ProjectSkeletonGrid({ count = 6 }: { count?: number }) {
  return (
    <div className="mx-auto grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, index) => (
        <ProjectSkeleton key={index} />
      ))}
    </div>
  );
}
