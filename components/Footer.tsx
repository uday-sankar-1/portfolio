"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const SOCIAL_LINKS = [
  { icon: FaGithub,   href: "https://github.com/udaysankarobbu",                       label: "GitHub"   },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/uday-sankar-obbu-41885618a/", label: "LinkedIn" },
  { icon: HiMail,     href: "mailto:udaysankarobbu@gmail.com",                         label: "Email"    },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-transparent py-8 px-6 md:px-12 lg:px-20">
      {/* Animated gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left */}
        <p className="text-gray-500 dark:text-gray-400 text-sm text-center sm:text-left">
          &copy; {year}{" "}
          <span className="text-gray-700 dark:text-gray-300 font-medium">Uday Sankar Obbu</span>. Built with{" "}
          <span className="text-blue-600 dark:text-blue-400 font-medium">Next.js</span> &amp;{" "}
          <span className="text-red-500">&#10084;&#65039;</span>
        </p>

        {/* Right */}
        <div className="flex items-center gap-4">
          {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 transform-gpu"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
}
