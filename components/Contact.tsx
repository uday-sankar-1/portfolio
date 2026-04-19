/*
  EMAILJS SETUP STEPS:

  1. Go to https://www.emailjs.com and create a free account

  2. ADD EMAIL SERVICE:
     - Dashboard → Email Services → Add New Service
     - Choose Gmail (or any provider)
     - Connect your Gmail account: udaysankarobbu@gmail.com
     - Give it a name, click Connect Account
     - Copy the Service ID → paste into .env.local as NEXT_PUBLIC_EMAILJS_SERVICE_ID

  3. CREATE EMAIL TEMPLATE:
     - Dashboard → Email Templates → Create New Template
     - Set Template Name: Portfolio Contact Form
     - Set To Email: udaysankarobbu@gmail.com
     - Set Subject: New Message from {{from_name}}
     - Set Body:
         Name    : {{from_name}}
         Email   : {{from_email}}
         Message : {{message}}
     - Click Save
     - Copy the Template ID → paste into .env.local as NEXT_PUBLIC_EMAILJS_TEMPLATE_ID

  4. GET PUBLIC KEY:
     - Dashboard → Account → General
     - Copy the Public Key
     - Paste into .env.local as NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

  5. UPDATE .env.local with your real values:
     NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
     NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
     NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxxxxx

  6. Restart dev server: npm run dev
*/

"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail, HiPhone, HiLocationMarker, HiCheckCircle, HiXCircle } from "react-icons/hi";
import { fadeIn, staggerContainer, viewportConfig } from "@/lib/motion";

interface ContactFormData {
  from_name: string;
  from_email: string;
  message: string;
}

const CONTACT_INFO = [
  { icon: HiMail,           label: "Email",    value: "udaysankarobbu@gmail.com", href: "mailto:udaysankarobbu@gmail.com" },
  { icon: HiPhone,          label: "Phone",    value: "+91 6303396511",           href: "tel:+916303396511"               },
  { icon: HiLocationMarker, label: "Location", value: "Bengaluru, Karnataka",     href: "#"                               },
];

const SOCIAL_LINKS = [
  { icon: FaGithub,   href: "https://github.com/udaysankarobbu",                       label: "GitHub"   },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/uday-sankar-obbu-41885618a/", label: "LinkedIn" },
  { icon: HiMail,     href: "mailto:udaysankarobbu@gmail.com",                         label: "Email"    },
];

type FormStatus = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");

  const SERVICE_ID  = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
  const PUBLIC_KEY  = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name:  data.from_name,
          from_email: data.from_email,
          message:    data.message,
        },
        PUBLIC_KEY
      );
      setStatus("success");
      reset();
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact" className="relative bg-transparent py-24">
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
            Let&apos;s connect
          </motion.p>
          <motion.h2 variants={fadeIn("up", 0.04)} className="section-title font-heading text-gray-900 dark:text-white">
            Get In{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Touch</span>
          </motion.h2>
          <motion.div
            variants={fadeIn("up", 0.08)}
            className="mx-auto mt-3 h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 to-blue-400"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left */}
          <motion.div
            variants={fadeIn("right", 0.08)}
            initial="hidden"
            whileInView="show"
            viewport={viewportConfig}
            className="space-y-8"
          >
            <div>
              <h3 className="font-heading font-bold text-2xl text-gray-900 dark:text-white mb-3">
                Let&apos;s work together
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                I&apos;m always open to discussing new opportunities, interesting projects, or just a
                friendly chat about technology. Feel free to reach out!
              </p>
            </div>

            {/* Contact details */}
            <div className="space-y-4">
              {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  className="flex items-center gap-4 group"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <div className="w-11 h-11 rounded-xl bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:bg-blue-100 dark:group-hover:bg-blue-500/20 transition-all duration-200 flex-shrink-0">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-widest font-medium">{label}</p>
                    <p className="text-gray-700 dark:text-gray-200 font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                      {value}
                    </p>
                  </div>
                </motion.a>
              ))}

              {/* LinkedIn */}
              <motion.a
                href="https://www.linkedin.com/in/uday-sankar-obbu-41885618a/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <div className="w-11 h-11 rounded-xl bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:bg-blue-100 dark:group-hover:bg-blue-500/20 transition-all duration-200 flex-shrink-0">
                  <FaLinkedin size={18} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-widest font-medium">LinkedIn</p>
                  <p className="text-gray-700 dark:text-gray-200 font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                    linkedin.com/in/uday-sankar-obbu-41885618a
                  </p>
                </div>
              </motion.a>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-4 pt-2">
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
            </div>
          </motion.div>

          {/* Right – Form */}
          <motion.div
            variants={fadeIn("left", 0.08)}
            initial="hidden"
            whileInView="show"
            viewport={viewportConfig}
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-white dark:bg-white/[0.04] border border-gray-200 dark:border-white/[0.08] rounded-2xl p-7 md:p-8 space-y-5"
            >
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                  Your Name <span className="text-blue-600 dark:text-blue-400">*</span>
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  {...register("from_name", { required: "Name is required", minLength: { value: 2, message: "Name must be at least 2 characters" } })}
                  className={`bg-gray-50 dark:bg-white/[0.05] border text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 rounded-xl px-4 py-3 w-full focus:border-blue-500 focus:outline-none transition-colors duration-200
                    ${errors.from_name ? "border-red-400" : "border-gray-300 dark:border-white/[0.1]"}`}
                />
                {errors.from_name && <p className="mt-1.5 text-red-500 dark:text-red-400 text-xs">{errors.from_name.message}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                  Email Address <span className="text-blue-600 dark:text-blue-400">*</span>
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  {...register("from_email", {
                    required: "Email is required",
                    pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email address" },
                  })}
                  className={`bg-gray-50 dark:bg-white/[0.05] border text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 rounded-xl px-4 py-3 w-full focus:border-blue-500 focus:outline-none transition-colors duration-200
                    ${errors.from_email ? "border-red-400" : "border-gray-300 dark:border-white/[0.1]"}`}
                />
                {errors.from_email && <p className="mt-1.5 text-red-500 dark:text-red-400 text-xs">{errors.from_email.message}</p>}
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                  Message <span className="text-blue-600 dark:text-blue-400">*</span>
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell me about your project or just say hello..."
                  {...register("message", { required: "Message is required", minLength: { value: 10, message: "Message must be at least 10 characters" } })}
                  className={`bg-gray-50 dark:bg-white/[0.05] border text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 rounded-xl px-4 py-3 w-full focus:border-blue-500 focus:outline-none resize-none transition-colors duration-200
                    ${errors.message ? "border-red-400" : "border-gray-300 dark:border-white/[0.1]"}`}
                />
                {errors.message && <p className="mt-1.5 text-red-500 dark:text-red-400 text-xs">{errors.message.message}</p>}
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={status === "loading"}
                className="bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 text-white font-semibold rounded-xl px-8 py-3 w-full disabled:opacity-60 disabled:cursor-not-allowed transition-colors duration-200 transform-gpu"
                whileHover={status !== "loading" ? { scale: 1.02 } : {}}
                whileTap={status !== "loading" ? { scale: 0.98 } : {}}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                {status === "loading" ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </motion.button>

              {/* Status */}
              <AnimatePresence>
                {(status === "success" || status === "error") && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className={`flex items-center gap-3 p-4 rounded-xl text-sm font-medium ${
                      status === "success"
                        ? "bg-green-50 dark:bg-green-500/10 border border-green-300 dark:border-green-500/30 text-green-700 dark:text-green-400"
                        : "bg-red-50 dark:bg-red-500/10 border border-red-300 dark:border-red-500/30 text-red-700 dark:text-red-400"
                    }`}
                  >
                    {status === "success" ? <HiCheckCircle size={20} className="flex-shrink-0" /> : <HiXCircle size={20} className="flex-shrink-0" />}
                    {status === "success"
                      ? "Message sent! I'll get back to you soon. "
                      : "Something went wrong. Please try again or email me directly."}
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
      <div className="section-divider" />
    </section>
  );
}
