"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { HiBriefcase, HiAcademicCap } from "react-icons/hi";
import { experiences } from "@/data/experience";
import { fadeIn, staggerContainer, viewportConfig, pathDrawVariant } from "@/lib/motion";

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.08 });

  return (
    <section id="experience" className="relative bg-transparent py-24">
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
            My journey
          </motion.p>
          <motion.h2 variants={fadeIn("up", 0.04)} className="section-title font-heading text-gray-900 dark:text-white">
            Experience &amp;{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Education</span>
          </motion.h2>
          <motion.div
            variants={fadeIn("up", 0.08)}
            className="mx-auto mt-3 h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 to-blue-400"
          />
        </motion.div>

        {/* Timeline */}
        <div ref={containerRef} className="relative max-w-4xl mx-auto">
          {/* Desktop vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2">
            <svg className="w-full h-full" viewBox="0 0 2 100" preserveAspectRatio="none" fill="none">
              <motion.path
                d="M1 0 L1 100"
                stroke="url(#timelineGrad)"
                strokeWidth="2"
                variants={pathDrawVariant}
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
              />
              <defs>
                <linearGradient id="timelineGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.1" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Mobile left line */}
          <div className="md:hidden absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/60 to-blue-500/10" />

          <motion.div
            variants={staggerContainer(0.08, 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={viewportConfig}
            className="space-y-12"
          >
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              const Icon = exp.type === "work" ? HiBriefcase : HiAcademicCap;

              return (
                <div key={exp.company + exp.role} className="relative">
                  {/* Desktop */}
                  <div className="hidden md:flex items-center">
                    <div className={`w-5/12 ${isLeft ? "pr-10" : "pl-10 order-last"}`}>
                      <motion.div
                        initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.08 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        whileHover={{ y: -4 }}
                        className="transform-gpu bg-white dark:bg-white/[0.04] border border-gray-200 dark:border-white/[0.08] rounded-2xl p-6 hover:bg-gray-50 dark:hover:bg-white/[0.06] hover:border-blue-300 dark:hover:border-blue-500/30 transition-all duration-200"
                      >
                        <ExperienceCard exp={exp} />
                      </motion.div>
                    </div>

                    {/* Center dot */}
                    <div className="w-2/12 flex justify-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, ease: "easeOut", delay: index * 0.08 }}
                        className="transform-gpu w-10 h-10 rounded-full bg-white dark:bg-[#0d0d18] border-2 border-blue-500 flex items-center justify-center shadow-glow-blue z-10"
                      >
                        <Icon size={16} className="text-blue-600 dark:text-blue-400" />
                      </motion.div>
                    </div>

                    <div className={`w-5/12 ${isLeft ? "pl-10 order-last" : "pr-10"}`} />
                  </div>

                  {/* Mobile */}
                  <div className="md:hidden flex gap-6">
                    <div className="flex flex-col items-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="transform-gpu w-9 h-9 rounded-full bg-white dark:bg-[#0d0d18] border-2 border-blue-500 flex items-center justify-center shadow-glow-blue flex-shrink-0 z-10"
                      >
                        <Icon size={14} className="text-blue-600 dark:text-blue-400" />
                      </motion.div>
                    </div>
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.08 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className="bg-white dark:bg-white/[0.04] border border-gray-200 dark:border-white/[0.08] rounded-2xl p-5 flex-1"
                    >
                      <ExperienceCard exp={exp} />
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
      <div className="section-divider" />
    </section>
  );
}

interface ExperienceCardProps {
  exp: (typeof experiences)[0];
}

function ExperienceCard({ exp }: ExperienceCardProps) {
  const Icon = exp.type === "work" ? HiBriefcase : HiAcademicCap;
  return (
    <div className="space-y-3">
      <div>
        <span className="text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-widest">
          {exp.duration}
        </span>
        <h3 className="font-heading font-bold text-lg text-gray-900 dark:text-white mt-1">{exp.role}</h3>
        <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm">{exp.company}</p>
        <p className="text-gray-500 dark:text-gray-400 text-xs mt-0.5">{exp.location}</p>
      </div>
      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{exp.description}</p>
      <div className="flex flex-wrap gap-1.5 pt-1">
        {exp.tags.map((tag) => (
          <span
            key={tag}
            className="text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 rounded-full px-3 py-1 text-xs"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
