// components/contact/ContactDetails.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import { useSiteInfo } from "@/hooks/context/SiteInfoContext";
import { SiGithub, SiInstagram, SiThreads } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { FiMail, FiMapPin, FiGlobe } from "react-icons/fi";
import Link from "next/link";

function ContactDetails() {
  const { siteInfo } = useSiteInfo();
  const social = siteInfo?.[0]?.social;
  const author = siteInfo?.[0]?.author;

  const socialLinks = [
    {
      name: "Email",
      icon: FiMail,
      href: `mailto:${social?.email}`,
      color: "hover:bg-red-500",
    },
    {
      name: "GitHub",
      icon: SiGithub,
      href: social?.github,
      color: "hover:bg-gray-700",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedinIn,
      href: social?.linkedin,
      color: "hover:bg-blue-600",
    },
    {
      name: "Instagram",
      icon: SiInstagram,
      href: social?.instagram,
      color: "hover:bg-pink-600",
    },
    {
      name: "Threads",
      icon: SiThreads,
      href: social?.threads,
      color: "hover:bg-black",
    },
  ].filter((link) => link.href);

  return (
    <motion.div
      initial={{ x: 20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800 md:p-8"
    >
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          Connect with me
        </h2>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
          Find me on these platforms or reach out directly
        </p>
      </div>

      {/* Contact Info */}
      <div className="mb-8 space-y-4">
        <div className="flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-gray-50 dark:hover:bg-gray-700">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">
            <FiMail className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-400">Email</p>
            <a
              href={`mailto:${social?.email}`}
              className="text-sm font-medium text-gray-700 transition-colors hover:text-emerald-600 dark:text-gray-300"
            >
              {social?.email}
            </a>
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-gray-50 dark:hover:bg-gray-700">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">
            <FiMapPin className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-400">Location</p>
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Glen Eden, Aukland, New Zealand
            </p>
          </div>
        </div>

        {author?.url && (
          <div className="flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-gray-50 dark:hover:bg-gray-700">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">
              <FiGlobe className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Portfolio
              </p>
              <a
                href={author.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-emerald-600 dark:text-gray-300"
              >
                ashishrijal.com.np
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Social Links */}
      <div>
        <h3 className="mb-4 text-lg font-semibold text-gray-800 dark:text-white">
          Social Profiles
        </h3>
        <div className="flex flex-wrap gap-3">
          {socialLinks.map((social) => (
            <Link
              key={social.name}
              href={social.href || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex h-12 flex-1 items-center justify-center gap-2 rounded-lg border border-gray-200 bg-gray-50 text-gray-600 transition-all hover:scale-105 hover:text-white dark:border-gray-700 dark:bg-gray-700 dark:text-gray-400 ${social.color}`}
            >
              <social.icon className="h-5 w-5" />
              <span className="text-sm font-medium">{social.name}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Availability Badge */}
      {siteInfo?.[0]?.isOpenToWork && (
        <div className="mt-6 rounded-lg bg-emerald-50 p-3 text-center dark:bg-emerald-900/20">
          <p className="text-sm font-medium text-emerald-700 dark:text-emerald-400">
            🟢 Available for work
          </p>
          <p className="mt-1 text-xs text-emerald-600 dark:text-emerald-500">
            Open to new opportunities and collaborations
          </p>
        </div>
      )}
    </motion.div>
  );
}

export default ContactDetails;
