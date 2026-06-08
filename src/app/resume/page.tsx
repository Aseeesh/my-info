// app/resume/page.tsx
"use client";

import Link from "next/link";

const GOOGLE_DRIVE_FILE_ID = "1l0bq3sx1vD6ngVG3cb6VzXPeeKSkvN-MaHcJb1TACKs";
const VIEW_URL = `https://drive.google.com/file/d/${GOOGLE_DRIVE_FILE_ID}/preview`;

export default function ResumePage() {
  const handleDownload = () => {
    // This is the trick - use the confirm parameter to force download
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${GOOGLE_DRIVE_FILE_ID}&confirm=t`;

    // Open in a new tab which will trigger the download
    window.open(downloadUrl, "_blank");
  };

  return (
    <div className="relative min-h-screen">
      <div className="sticky top-0 z-10 flex w-full justify-end gap-2 bg-white/80 p-2 backdrop-blur-sm dark:bg-gray-900/80">
        {/* <button
          onClick={handleDownload}
          className="inline-flex cursor-pointer items-center rounded-lg border border-primary-500 bg-transparent px-3 py-1.5 text-sm font-semibold transition-colors duration-150 hover:bg-primary-500 hover:text-white"
        >
          <svg
            className="mr-2 h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          Download PDF
        </button> */}

        <Link
          href={VIEW_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-lg border border-primary-500 bg-transparent px-3 py-1.5 text-sm font-semibold transition-colors duration-150 hover:bg-primary-500 hover:text-white"
        >
          <svg
            className="mr-2 h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
          Open in New Tab
        </Link>
      </div>

      <div className="container mx-auto px-4 py-8">
        <iframe
          src={VIEW_URL}
          className="h-[calc(100vh-120px)] w-full rounded-lg border-0"
          allow="autoplay"
          title="Resume"
        />
      </div>
    </div>
  );
}
