// components/contact/ContactMap.tsx
"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { FiMaximize, FiMinimize } from "react-icons/fi";

export default function ContactMap() {
  const [isExpanded, setIsExpanded] = useState(false);

  // Kathmandu, Nepal coordinates
  const latitude = 27.7172;
  const longitude = 85.324;
  const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${longitude - 0.1}%2C${latitude - 0.1}%2C${longitude + 0.1}%2C${latitude + 0.1}&layer=mapnik&marker=${latitude}%2C${longitude}`;

  // Google Maps alternative (uncomment if you prefer Google Maps)
  // const googleMapsUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d226142.4777494911!2d85.24487245!3d27.70835465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1980c5d2c8f1%3A0x8f8c4e9c9d9c9d9c!2sKathmandu%2C%20Nepal!5e0!3m2!1sen!2s!4v1699999999999!5m2!1sen!2s`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="rounded-2xl bg-white shadow-lg dark:bg-gray-800"
    >
      <div className="flex items-center justify-between border-b border-gray-200 p-4 dark:border-gray-700">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
            Find Me Here
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Kathmandu, Nepal
          </p>
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="rounded-lg p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-700"
          aria-label={isExpanded ? "Minimize map" : "Expand map"}
        >
          {isExpanded ? (
            <FiMinimize className="h-5 w-5 text-gray-600 dark:text-gray-400" />
          ) : (
            <FiMaximize className="h-5 w-5 text-gray-600 dark:text-gray-400" />
          )}
        </button>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ${isExpanded ? "h-[600px]" : "h-[400px]"}`}
      >
        <iframe
          src={mapUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Location Map - Kathmandu, Nepal"
          className="rounded-b-2xl"
        />
      </div>

      {/* Map Info Footer */}
      <div className="border-t border-gray-200 p-4 dark:border-gray-700">
        <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
            <span className="text-gray-600 dark:text-gray-400">
              Based in Kathmandu, Nepal
            </span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="h-4 w-4 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-gray-600 dark:text-gray-400">
              UTC+5:45 (Nepal Time)
            </span>
          </div>
          <a
            href="https://maps.google.com/?q=Kathmandu+Nepal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-600 transition-colors hover:text-emerald-700 dark:text-emerald-400"
          >
            Get Directions →
          </a>
        </div>
      </div>
    </motion.div>
  );
}
