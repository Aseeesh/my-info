// app/contact/page.tsx
"use client";

import ContactDetails from "@/components/contact/ContactDetails";
import ContactForm from "@/components/contact/ContactForm";
import ContactMap from "@/components/contact/ContactMap";
import { motion } from "framer-motion";
import { useSiteInfo } from "@/hooks/context/SiteInfoContext";
import { FiMail, FiMapPin, FiPhone, FiClock } from "react-icons/fi";

export default function ContactPage() {
  const { siteInfo, isLoading } = useSiteInfo();

  if (isLoading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center">
          <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-4 border-emerald-500 border-t-transparent"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4 py-12 md:py-20">
        {/* Header Section */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-12 text-center"
        >
          <h1 className="mb-4 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
            Let's Connect
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            Have a project in mind or just want to say hello? I'd love to hear
            from you.
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-4"
        >
          <div className="group rounded-2xl bg-white p-6 text-center shadow-lg transition-all hover:shadow-xl dark:bg-gray-800">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 transition-all group-hover:scale-110 dark:bg-emerald-900/30 dark:text-emerald-400">
              <FiMail className="h-6 w-6" />
            </div>
            <h3 className="mb-2 font-semibold text-gray-800 dark:text-white">
              Email Me
            </h3>
            <a
              href={`mailto:${siteInfo?.[0]?.social.email}`}
              className="text-sm text-gray-600 transition-colors hover:text-emerald-600 dark:text-gray-400"
            >
              {siteInfo?.[0]?.social.email}
            </a>
          </div>

          <div className="group rounded-2xl bg-white p-6 text-center shadow-lg transition-all hover:shadow-xl dark:bg-gray-800">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 transition-all group-hover:scale-110 dark:bg-emerald-900/30 dark:text-emerald-400">
              <FiMapPin className="h-6 w-6" />
            </div>
            <h3 className="mb-2 font-semibold text-gray-800 dark:text-white">
              Location
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Kathmandu, Nepal
            </p>
          </div>

          <div className="group rounded-2xl bg-white p-6 text-center shadow-lg transition-all hover:shadow-xl dark:bg-gray-800">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 transition-all group-hover:scale-110 dark:bg-emerald-900/30 dark:text-emerald-400">
              <FiClock className="h-6 w-6" />
            </div>
            <h3 className="mb-2 font-semibold text-gray-800 dark:text-white">
              Response Time
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Usually within 24 hours
            </p>
          </div>

          <div className="group rounded-2xl bg-white p-6 text-center shadow-lg transition-all hover:shadow-xl dark:bg-gray-800">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 transition-all group-hover:scale-110 dark:bg-emerald-900/30 dark:text-emerald-400">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <h3 className="mb-2 font-semibold text-gray-800 dark:text-white">
              Contact
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              +977 9800000000
            </p>
          </div>
        </motion.div>

        {/* Contact Form and Details */}
        <div className="grid gap-8 lg:grid-cols-2">
          <ContactForm />
          <ContactDetails />
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="mb-12"
        >
          <ContactMap />
        </motion.div>
      </div>
    </motion.div>
  );
}
