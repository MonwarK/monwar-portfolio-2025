import React from "react";
import { containerVariants, itemVariants } from "../animations/motionVariants";
import { motion } from "framer-motion";

const skills = [
  {
    name: "Frontend",
    skills: "React, NextJs, React Native, HTML, CSS, JavaScript, TypeScript",
  },
  {
    name: "Backend",
    skills: "Node.js, .NET, Firebase, Supabase, Auth Libraries",
  },
  {
    name: "Databases",
    skills: "MongoDB, PostgreSQL, SQL",
  },
  {
    name: "Other",
    skills: "Stripe, Git, Java, C#",
  },
];

export default function About() {
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
          className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
          variants={itemVariants}
        >
          About Me
        </motion.h2>

        <div className="grid gap-16">
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-6 text-cyan-400">
              Background
            </h3>
            <div className="text-gray-300 text-lg leading-relaxed space-y-4">
              <p>
                Hi, I'm Monwar — a Software Developer with a strong interest in
                building sleek, performant web and mobile applications.
              </p>
              <p>
                I recently completed my BSc in Computer Science with Software
                Development (with a Year in Industry) at the University of
                Liverpool. During my studies and 2 years of industrial
                experience, I worked on a range of real-world projects using
                modern tech like React, React Native, .NET, and Next.js.
              </p>
              <p>
                I’m passionate about crafting smooth user experiences, learning
                new frameworks, and writing clean, maintainable code. Whether
                it's building dashboards, mobile apps, or full-stack platforms,
                I enjoy solving problems through code and bringing ideas to
                life. Let’s build something great.
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-6 text-cyan-400">Skills</h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="relative"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="mb-10">
                    <h4 className="text-gray-400 text-xl mb-2">{skill.name}</h4>
                    <p>{skill.skills}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
