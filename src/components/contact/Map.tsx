// components/contact/Map.tsx
"use client";
import { motion } from "framer-motion";

export default function Map() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="mt-8 overflow-hidden rounded-2xl shadow-lg"
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.274287230869!2d174.649437!3d-36.907565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d47b5f5b4f4b3%3A0x3b9c8a7e9d3f4c5d!2sGlen%20Eden%2C%20Auckland%2C%20New%20Zealand!5e0!3m2!1sen!2s!4v1699999999999!5m2!1sen!2s"
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Location Map"
        className="rounded-2xl"
      />
    </motion.div>
  );
}
