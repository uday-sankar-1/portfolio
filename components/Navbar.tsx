"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { HiSun, HiMoon, HiMenuAlt3, HiX } from "react-icons/hi";
import { scrollToSection } from "@/lib/utils";
import { mobileMenuVariant, navbarVariant, staggerContainer, fadeIn } from "@/lib/motion";

const navLinks = [
  { label: "Home",       id: "home"       },
  { label: "About",      id: "about"      },
  { label: "Skills",     id: "skills"     },
  { label: "Projects",   id: "projects"   },
  { label: "Experience", id: "experience" },
  { label: "Contact",    id: "contact"    },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted,     setMounted]     = useState(false);
  const [isMenuOpen,  setIsMenuOpen]  = useState(false);
  const [isVisible,   setIsVisible]   = useState(true);
  const [scrolled,    setScrolled]    = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => {
      const current = window.scrollY;
      setScrolled(current > 50);
      if (current > lastScrollY && current > 80) {
        setIsVisible(false);
        setIsMenuOpen(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScrollY]);

  const handleNavClick = (id: string) => {
    setIsMenuOpen(false);
    scrollToSection(id);
  };

  const glassClasses = scrolled
    ? "backdrop-blur-md bg-white/90 dark:bg-black/40 border-b border-gray-200 dark:border-white/10 shadow-sm dark:shadow-lg"
    : "bg-transparent border-transparent";

  return (
    <motion.nav
      variants={navbarVariant}
      animate={isVisible ? "visible" : "hidden"}
      initial="visible"
      className={`fixed top-0 left-0 right-0 z-[100] px-6 md:px-12 lg:px-20 transition-all duration-300 ${glassClasses}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.button
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-1 font-heading font-bold text-xl text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            Uday Sankar
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 inline-block ml-0.5 mt-3" />
          </motion.button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="relative text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200
                  after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-blue-600 dark:after:bg-blue-400
                  after:transition-all after:duration-200 hover:after:w-full"
                whileHover={{ y: -1 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                {link.label}
              </motion.button>
            ))}

            {mounted && (
              <motion.button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-lg bg-gray-100 dark:bg-white/10 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-400 transition-all duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <HiSun size={18} /> : <HiMoon size={18} />}
              </motion.button>
            )}
          </div>

          {/* Mobile Controls */}
          <div className="flex md:hidden items-center gap-3">
            {mounted && (
              <motion.button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-lg bg-gray-100 dark:bg-white/10 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <HiSun size={18} /> : <HiMoon size={18} />}
              </motion.button>
            )}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-white/10 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <HiX size={20} /> : <HiMenuAlt3 size={20} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={mobileMenuVariant}
            initial="closed"
            animate="open"
            exit="closed"
            className="md:hidden absolute top-16 left-0 right-0 bg-white/95 dark:bg-[#0d0d18]/95 backdrop-blur-md border-b border-gray-200 dark:border-white/10"
          >
            <motion.div
              variants={staggerContainer(0.04, 0.05)}
              initial="hidden"
              animate="show"
              className="flex flex-col px-6 py-6 gap-4"
            >
              {navLinks.map((link) => (
                <motion.button
                  key={link.id}
                  variants={fadeIn("right", 0)}
                  onClick={() => handleNavClick(link.id)}
                  className="text-left text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 py-2 border-b border-gray-200 dark:border-white/10"
                >
                  {link.label}
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
