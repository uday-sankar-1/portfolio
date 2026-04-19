"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

const Timeline = dynamic(() => import("@/components/Timeline"), {
  ssr: false,
  loading: () => <div className="h-96" />,
});

const Contact = dynamic(() => import("@/components/Contact"), {
  ssr: false,
  loading: () => <div className="h-96" />,
});

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="relative overflow-hidden"
    >
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Timeline />
      <Contact />
      <Footer />
    </motion.main>
  );
}
