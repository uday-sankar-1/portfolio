"use client";

import { motion } from "framer-motion";
import { skills, skillCategories, SkillCategory } from "@/data/skills";
import { fadeIn, staggerContainer, cardVariant, viewportConfig } from "@/lib/motion";

export default function Skills() {
  return (
    <section id="skills" className="relative bg-transparent py-24">
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
            What I work with
          </motion.p>
          <motion.h2 variants={fadeIn("up", 0.04)} className="section-title font-heading text-gray-900 dark:text-white">
            Technical{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Skills</span>
          </motion.h2>
          <motion.div
            variants={fadeIn("up", 0.08)}
            className="mx-auto mt-3 h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 to-blue-400"
          />
        </motion.div>

        {/* Category groups */}
        <div className="space-y-14">
          {skillCategories.map((category: SkillCategory) => {
            const categorySkills = skills.filter((s) => s.category === category);
            return (
              <motion.div
                key={category}
                variants={staggerContainer(0.04, 0)}
                initial="hidden"
                whileInView="show"
                viewport={viewportConfig}
              >
                <motion.div variants={fadeIn("right", 0)} className="flex items-center gap-4 mb-6">
                  <h3 className="font-heading font-semibold text-xl text-gray-700 dark:text-gray-300">{category}</h3>
                  <div className="flex-1 h-px bg-gradient-to-r from-blue-500/40 to-transparent" />
                </motion.div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                  {categorySkills.map((skill) => {
                    const Icon = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        variants={cardVariant}
                        whileHover={{ scale: 1.06, y: -4, boxShadow: `0 8px 30px ${skill.color}30`, borderColor: skill.color }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="transform-gpu bg-white dark:bg-white/[0.04] border border-gray-200 dark:border-white/[0.08] rounded-xl p-4 flex flex-col items-center gap-3 cursor-default group hover:bg-gray-50 dark:hover:bg-white/[0.06] transition-colors duration-300"
                      >
                        <div
                          className="p-3 rounded-xl transition-all duration-200 group-hover:scale-110"
                          style={{ backgroundColor: `${skill.color}20` }}
                        >
                          <Icon size={28} style={{ color: skill.color }} />
                        </div>
                        <span className="text-sm font-medium text-gray-800 dark:text-gray-200 text-center leading-tight">
                          {skill.name}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      <div className="section-divider" />
    </section>
  );
}
