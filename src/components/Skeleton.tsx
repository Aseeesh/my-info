// components/Skeleton.tsx
export function ProfileSkeleton() {
  return (
    <div className="container mx-auto px-4">
      <div className="mt-14 block gap-12 sm:flex sm:gap-10">
        <div className="w-full sm:w-1/3">
          <div className="mb-7 h-[400px] w-full animate-pulse rounded-2xl bg-gray-200 dark:bg-gray-700" />
          <div className="mb-7 h-12 w-3/4 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700" />
          <div className="flex flex-wrap gap-2">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="h-8 w-20 animate-pulse rounded-full bg-gray-200 dark:bg-gray-700"
              />
            ))}
          </div>
        </div>
        <div className="mt-10 w-full sm:mt-0 sm:w-2/3">
          <div className="mb-8 h-32 w-full animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700" />
          <div className="mb-8 h-40 w-full animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700" />
          <div className="grid gap-3 sm:grid-cols-2">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="h-16 w-full animate-pulse rounded-xl bg-gray-200 dark:bg-gray-700"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
