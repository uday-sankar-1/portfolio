"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeIn, staggerContainer, zoomIn, viewportConfig } from "@/lib/motion";

const HIGHLIGHTS = [
  "3.5+ Years Experience",
  "2 Companies",
  "Co-Inventor on Patent",
  "Enterprise Scale Apps",
];

export default function About() {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="about" className="relative bg-transparent py-24">
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
            Get to know me
          </motion.p>
          <motion.h2 variants={fadeIn("up", 0.04)} className="section-title font-heading text-gray-900 dark:text-white">
            About{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Me</span>
          </motion.h2>
          <motion.div
            variants={fadeIn("up", 0.08)}
            className="mx-auto mt-3 h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 to-blue-400"
          />
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left – Profile Image */}
          <motion.div
            variants={fadeIn("right", 0.08)}
            initial="hidden"
            whileInView="show"
            viewport={viewportConfig}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* CSS rotating border */}
              <div className="rotating-border" />
              {/* Offset decorative frame */}
              <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border-2 border-blue-500/20" />

              {/* Image or fallback */}
              <div className="absolute inset-[4px] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-[#1A1A1A] dark:to-[#242424]">
                {!imgError ? (
                  <Image
                    src="/images/profile.jpg"
                    alt="Uday Sankar Obbu"
                    fill
                    className="object-cover object-top"
                    onError={() => setImgError(true)}
                    priority
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="font-heading font-bold text-6xl text-blue-500/40">US</span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Right – Bio */}
          <motion.div
            variants={fadeIn("left", 0.08)}
            initial="hidden"
            whileInView="show"
            viewport={viewportConfig}
            className="space-y-6"
          >
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              I&apos;m a{" "}
              <span className="text-gray-900 dark:text-white font-semibold">Full Stack .NET Developer</span> based in{" "}
              <span className="text-blue-600 dark:text-blue-400 font-medium">Bengaluru, Karnataka</span>, with{" "}
              <span className="text-gray-900 dark:text-white font-semibold">3.5+ years</span> of professional experience
              designing and delivering enterprise-grade software solutions.
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              I specialize in backend development with{" "}
              <span className="text-gray-900 dark:text-white font-semibold">C# and .NET Core</span>, real-time systems
              using <span className="text-gray-900 dark:text-white font-semibold">SignalR and RabbitMQ</span>, and
              frontend development with{" "}
              <span className="text-gray-900 dark:text-white font-semibold">Angular and React</span>. Currently at{" "}
              <span className="text-blue-600 dark:text-blue-400 font-semibold">Light &amp; Wonder</span>, I architect and
              deliver scalable casino platform features end-to-end — from API design to CI/CD deployment.
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              I&apos;m also a{" "}
              <span className="text-gray-900 dark:text-white font-semibold">co-inventor on a granted patent</span> for
              the DMX Platform architecture.
            </p>

            {/* Highlight Tags */}
            <motion.div
              variants={staggerContainer(0.04, 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={viewportConfig}
              className="flex flex-wrap gap-3 pt-2"
            >
              {HIGHLIGHTS.map((tag, i) => (
                <motion.span
                  key={tag}
                  variants={zoomIn(i * 0.04, 0.3)}
                  className="px-4 py-2 rounded-full text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-white/[0.05] border border-gray-200 dark:border-white/[0.1] text-sm font-medium hover:bg-gray-200 dark:hover:bg-white/[0.1] transition-colors duration-200 cursor-default"
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
      <div className="section-divider" />
    </section>
  );
}
