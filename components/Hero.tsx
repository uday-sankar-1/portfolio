"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail, HiChevronDown } from "react-icons/hi";
import { fadeIn, staggerContainer, viewportConfig } from "@/lib/motion";
import { scrollToSection } from "@/lib/utils";
import { downloadFile } from "@/data/downloadFile";

const TYPING_ROLES = [
  "Full Stack .NET Developer",
  "Angular & React Developer",
  "Enterprise Software Engineer",
  "Open Source Enthusiast",
];

const SOCIAL_LINKS = [
  { icon: FaGithub,   href: "https://github.com/udaysankarobbu",                              label: "GitHub"   },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/uday-sankar-obbu-41885618a/",        label: "LinkedIn" },
  { icon: HiMail,     href: "mailto:udaysankarobbu@gmail.com",                                label: "Email"    },
];

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [roleIndex,   setRoleIndex]   = useState(0);
  const [charIndex,   setCharIndex]   = useState(0);
  const [isDeleting,  setIsDeleting]  = useState(false);

  useEffect(() => {
    const currentRole = TYPING_ROLES[roleIndex];
    const delay = isDeleting ? 50 : charIndex === currentRole.length ? 1800 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, charIndex + 1));
        if (charIndex + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        } else {
          setCharIndex((c) => c + 1);
        }
      } else {
        setDisplayText(currentRole.substring(0, charIndex - 1));
        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setRoleIndex((r) => (r + 1) % TYPING_ROLES.length);
          setCharIndex(0);
        } else {
          setCharIndex((c) => c - 1);
        }
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-transparent pt-20 md:pt-24"
    >
      {/* CSS-only blobs */}
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
      </div>

      {/* Subtle grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(59,130,246,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <motion.div
        variants={staggerContainer(0.08, 0.1)}
        initial="hidden"
        animate="show"
        className="relative z-10 text-center px-6 md:px-12 max-w-4xl mx-auto transform-gpu"
      >
        {/* Badge */}
        <motion.div variants={fadeIn("up", 0)} className="mb-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
            Tech Enthusiast & Problem Solver
          </span>
        </motion.div> 

        <motion.h1
          variants={fadeIn("up", 0.04)}
          className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl text-gray-900 dark:text-white mb-6 leading-tight"
        >
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            Uday Sankar
          </span>{" "}
          
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          variants={fadeIn("up", 0.08)}
          className="h-12 md:h-14 flex items-center justify-center mb-6"
        >
          <span className="font-heading text-2xl md:text-3xl text-blue-600 dark:text-blue-400 font-semibold">
            {displayText}
            <span className="cursor-blink inline-block w-0.5 h-7 md:h-8 bg-blue-600 dark:bg-blue-400 ml-1 align-middle" />
          </span>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          variants={fadeIn("up", 0.12)}
          className="text-gray-600 dark:text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Building scalable, enterprise-grade applications with{" "}
          <span className="text-gray-900 dark:text-white font-medium">.NET Core</span>,{" "}
          <span className="text-gray-900 dark:text-white font-medium">Angular</span> &amp;{" "}
          <span className="text-gray-900 dark:text-white font-medium">React</span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeIn("up", 0.16)}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <motion.button
            onClick={() => scrollToSection("projects")}
            className="btn-primary w-full sm:w-auto transform-gpu"
            whileHover={{ scale: 1.04, boxShadow: "0 0 24px rgba(59,130,246,0.4)" }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            View My Projects
          </motion.button>
           <motion.button
            className="btn-outline w-full sm:w-auto transform-gpu"
            onClick={() => downloadFile()}
            whileHover={{ scale: 1.04, boxShadow: "0 0 24px rgba(59,130,246,0.4)" }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            Get To More About Me
          </motion.button>
        </motion.div>

        {/* Social */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          className="flex items-center justify-center gap-5"
        >
          {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="p-3 rounded-xl bg-gray-100 dark:bg-white/[0.06] border border-gray-200 dark:border-white/[0.08] text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-400 transition-all duration-200 transform-gpu"
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-400 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.4 }}
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <HiChevronDown size={22} />
        </motion.div>
      </motion.button>

      <div className="section-divider" />
    </section>
  );
}
