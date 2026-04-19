"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "@/data/projects";
import { fadeIn, staggerContainer, cardVariant, viewportConfig } from "@/lib/motion";

export default function Projects() {
  return (
    <section id="projects" className="relative bg-transparent py-24">
      <div className="section-wrapper">
        {/* Heading */}
        <motion.div
          variants={staggerContainer(0.04, 0)}
          initial="hidden"
          whileInView="show"
          viewport={viewportConfig}
          className="text-center mb-16"
        >
          <motion.p variants={fadeIn("up", 0)} className="text-blue-600 dark:text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">
            What I&apos;ve built
          </motion.p>
          <motion.h2 variants={fadeIn("up", 0.04)} className="section-title font-heading text-gray-900 dark:text-white">
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Projects</span>
          </motion.h2>
          <motion.div
            variants={fadeIn("up", 0.08)}
            className="mx-auto mt-3 h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 to-blue-400"
          />
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={staggerContainer(0.04, 0.05)}
          initial="hidden"
          whileInView="show"
          viewport={viewportConfig}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariant}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative transform-gpu bg-white dark:bg-white/[0.04] border border-gray-200 dark:border-white/[0.08] rounded-2xl p-7 flex flex-col gap-5 group hover:bg-gray-50 dark:hover:bg-white/[0.06] hover:border-blue-300 dark:hover:border-blue-500/30 transition-colors duration-300"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl bg-gradient-to-r from-blue-600 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Number + Title */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-blue-500/60 dark:text-blue-400/50 text-sm font-mono font-bold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-heading font-bold text-xl text-gray-900 dark:text-white mt-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                    {project.title}
                  </h3>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} GitHub`}
                    className="p-2.5 rounded-lg bg-gray-100 dark:bg-white/[0.06] border border-gray-200 dark:border-white/[0.08] text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-400 transition-all duration-200"
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    <FaGithub size={17} />
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} Live Demo`}
                    className="p-2.5 rounded-lg bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-200"
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    <FaExternalLinkAlt size={15} />
                  </motion.a>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed flex-1">{project.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-200 dark:border-white/[0.06]">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 rounded-full px-3 py-1 text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="section-divider" />
    </section>
  );
}
