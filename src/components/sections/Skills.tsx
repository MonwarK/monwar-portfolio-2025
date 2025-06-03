import React from "react";
import { containerVariants, itemVariants } from "../animations/motionVariants";
import { motion } from "framer-motion";
import { skills } from "../../../data/skills";

export default function Skills() {
  return (
    <motion.section
      className="min-h-screen py-20 relative z-10"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-5xl font-bold text-center mb-28 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
          variants={itemVariants}
        >
          Skills
        </motion.h2>
        <div className="space-y-14 md:space-y-0">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="md:h-48 grid md:grid-cols-3 gap-8"
              variants={itemVariants}
            >
              <div>
                <h4 className="text-4xl font-bold uppercase text-gray-400">
                  {skill.name}
                </h4>
              </div>
              <div className="relative col-span-2">
                <div className="flex flex-wrap gap-4">
                  {skill.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      className="flex items-center bg-blur backdrop-blur-sm rounded-full py-2 px-5 gap-2 cursor-pointer hover:scale-110 delay-100 transition"
                    >
                      <img className="w-6" src={skill.icon} alt={skill.name} />
                      <p>{skill.name}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
