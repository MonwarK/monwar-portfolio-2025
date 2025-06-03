import React from "react";
import { containerVariants, itemVariants } from "../animations/motionVariants";
import { motion } from "motion/react";

export default function Contact() {
  return (
    <motion.section
      className="min-h-screen py-20 relative z-10 flex items-center"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          className="text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
          variants={itemVariants}
        >
          Let's Connect
        </motion.h2>

        <motion.p
          className="text-xl text-gray-300 mb-12"
          variants={itemVariants}
        >
          Ready to bring your next project to life? Let's discuss how we can
          work together.
        </motion.p>

        <motion.div
          className="flex justify-center space-x-8"
          variants={itemVariants}
        >
          <motion.a
            href="mailto:monwar259@gmail.com"
            className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-cyan-400/25 transition-shadow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Email
          </motion.a>

          <motion.a
            href="#"
            className="px-8 py-4 border border-cyan-400 rounded-full text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download CV
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}
