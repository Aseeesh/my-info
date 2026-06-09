// app/page.tsx
"use client";

import Introduction from "@/components/Introduction";
import { motion } from "framer-motion";

import iconImage from "./images/profile.png";

export default function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <Introduction iconImage={iconImage} />
        </div>
      </div>
    </motion.div>
  );
}
