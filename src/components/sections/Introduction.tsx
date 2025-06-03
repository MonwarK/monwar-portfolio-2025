import React from "react";
import { motion } from "framer-motion";
import { ChevronDown, Terminal } from "lucide-react";
import { containerVariants, itemVariants } from "../animations/motionVariants";
import { socialIcons } from "../../../data/socialLinks";

interface Props {
  scrollToAbout: () => null;
}

export default function Introduction({ scrollToAbout }: Props) {
  return (
    <motion.section
      key="home"
      className="min-h-screen flex items-center justify-center relative z-10"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <div className="text-center max-w-4xl mx-auto px-6">
        <motion.div className="mb-8" variants={itemVariants}>
          <motion.div
            className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 p-1"
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
              <Terminal className="w-16 h-16 text-cyan-400" />
            </div>
          </motion.div>
        </motion.div>

        <motion.h1
          className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-400 to-purple-400 bg-clip-text text-transparent"
          variants={itemVariants}
        >
          Monwar Khan
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-8"
          variants={itemVariants}
        >
          Full-Stack Developer
        </motion.p>

        <motion.div
          className="flex justify-center space-x-6 mb-12"
          variants={itemVariants}
        >
          {socialIcons.map(({ link, icon: Icon }, index) => (
            <motion.a
              key={index}
              href={link}
              target="_blank"
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
              whileHover={{ scale: 1.2, rotate: 360 }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon className="w-6 h-6" />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          onClick={scrollToAbout}
          className="animate-bounce cursor-pointer"
          variants={itemVariants}
        >
          <ChevronDown className="w-8 h-8 mx-auto text-gray-400" />
        </motion.div>
      </div>
    </motion.section>
  );
}
