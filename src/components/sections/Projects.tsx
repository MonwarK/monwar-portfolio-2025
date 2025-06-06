import React from "react";
import { containerVariants, itemVariants } from "../animations/motionVariants";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { projects } from "../../../data/projects";
import Link from "next/link";

export default function Projects() {
  return (
    <motion.section
      className="min-h-screen py-20 relative z-10"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
          variants={itemVariants}
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:shadow-lg shadow-white-500 transition-colors group space-y-8 flex flex-col"
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center">
                <motion.div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center mr-4">
                  {project.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
              </div>

              <div>
                <img
                  className="rounded-xl border border-gray-800"
                  src={project.thumbnail}
                  alt={project.title}
                />
              </div>

              <div className="flex-1">
                <p className="text-gray-300">{project.description}</p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/10 rounded-full text-sm text-cyan-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-3 lg:space-y-0 lg:flex lg:space-x-7">
                {project.link?.map((link) => (
                  <div key={link.link}>
                    <Link target="_blank" href={link.link}>
                      <button className="flex items-center bg-gray-950/40 hover:bg-gray-950/20 rounded-lg px-7 py-3 transition-colors cursor-pointer text-sm font-semibold w-full">
                        {link.logo} {link.caption}
                      </button>
                    </Link>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
