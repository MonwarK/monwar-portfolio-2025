import React from "react";
import { containerVariants, itemVariants } from "../animations/motionVariants";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="py-40 relative z-10 min-h-[60vh]"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
          variants={itemVariants}
        >
          About Me
        </motion.h2>

        <div className="grid gap-16">
          <motion.div variants={itemVariants}>
            <div className="text-gray-300 text-lg leading-relaxed space-y-4">
              <p>
                Hi, I&apos;m Monwar — a Software Developer with a strong
                interest in building sleek, performant web and mobile
                applications.
              </p>
              <p>
                I recently completed my BSc in Computer Science with Software
                Development (with a Year in Industry) at the University of
                Liverpool. During my studies and 2 years of industrial
                experience, I worked on a range of real-world projects using
                modern tech like React, React Native, .NET, and Next.js.
              </p>
              <p>
                I&apos;m passionate about crafting smooth user experiences,
                learning new frameworks, and writing clean, maintainable code.
                Whether it&apos;s building dashboards, mobile apps, or
                full-stack platforms, I enjoy solving problems through code and
                bringing ideas to life. Let&apos;s build something great.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
