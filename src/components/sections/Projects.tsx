import React from "react";
import { containerVariants, itemVariants } from "../animations/motionVariants";
import { motion } from "framer-motion";
import { Code, Database, ExternalLink, Globe, Smartphone } from "lucide-react";

const projects = [
  {
    title: "Project 1",
    tech: ["React", "TailwindCSS"],
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam provident ipsum fugit itaque eius ut quos optio voluptates!",
    icon: <Database className="w-6 h-6" />,
  },
  {
    title: "Project 2",
    tech: ["React", "TailwindCSS"],
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam provident ipsum fugit itaque eius ut quos optio voluptates!",
    icon: <Database className="w-6 h-6" />,
  },
  {
    title: "Project 3",
    tech: ["React", "TailwindCSS"],
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam provident ipsum fugit itaque eius ut quos optio voluptates!",
    icon: <Database className="w-6 h-6" />,
  },
  {
    title: "Project 4",
    tech: ["React", "TailwindCSS"],
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam provident ipsum fugit itaque eius ut quos optio voluptates!",
    icon: <Database className="w-6 h-6" />,
  },
];

export default function Projects() {
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
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:shadow-lg shadow-white-500 transition-colors group"
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center mb-4">
                <motion.div
                  className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center mr-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {project.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
              </div>

              <p className="text-gray-300 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-white/10 rounded-full text-sm text-cyan-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <motion.button
                className="flex items-center text-purple-400 hover:text-white transition-colors"
                whileHover={{ x: 5 }}
              >
                View Project <ExternalLink className="w-4 h-4 ml-2" />
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
