import React from "react";
import { containerVariants, itemVariants } from "../animations/motionVariants";
import { motion } from "framer-motion";

const skills = [
  {
    name: "Frontend",
    skills: [
      {
        name: "React",
        icon: "https://cdn.simpleicons.org/react",
      },
      {
        name: "NextJs",
        icon: "https://cdn.simpleicons.org/nextdotjs/white",
      },
      {
        name: "React Native",
        icon: "https://cdn.simpleicons.org/react/blue",
      },
      {
        name: "TypeScript",
        icon: "https://cdn.simpleicons.org/typescript",
      },
      {
        name: "TailwindCSS",
        icon: "https://cdn.simpleicons.org/tailwindcss",
      },
      {
        name: "Motion",
        icon: "https://cdn.simpleicons.org/framer",
      },
    ],
  },
  {
    name: "Backend",
    skills: [
      {
        name: "NodeJS",
        icon: "https://cdn.simpleicons.org/nodedotjs",
      },
      {
        name: ".NET",
        icon: "https://cdn.simpleicons.org/dotnet",
      },
      {
        name: "Firebase",
        icon: "https://cdn.simpleicons.org/firebase",
      },
      {
        name: "Supabase",
        icon: "https://cdn.simpleicons.org/supabase",
      },
      {
        name: "Clerk",
        icon: "https://cdn.simpleicons.org/clerk",
      },
    ],
  },
  {
    name: "Databases",
    skills: [
      {
        name: "MongoDB",
        icon: "https://cdn.simpleicons.org/mongodb",
      },
      {
        name: "PostgreSQL",
        icon: "https://cdn.simpleicons.org/postgresql",
      },
    ],
  },
  {
    name: "Other",
    skills: [
      {
        name: "Stripe",
        icon: "https://cdn.simpleicons.org/stripe",
      },
      {
        name: "Git",
        icon: "https://cdn.simpleicons.org/git",
      },
      {
        name: "C#",
        icon: "https://cdn.simpleicons.org/c",
      },
      {
        name: "Sanity",
        icon: "https://cdn.simpleicons.org/sanity",
      },
    ],
  },
];

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
        <div>
          {skills.map((skill, index) => (
            <div className="h-48 grid grid-cols-3">
              <div>
                <h4 className="text-4xl font-bold uppercase text-gray-400">
                  {skill.name}
                </h4>
              </div>
              <div className="relative col-span-2">
                <motion.div
                  className="flex flex-wrap gap-4"
                  variants={itemVariants}
                >
                  {skill.skills.map((skill) => (
                    <motion.div className="flex items-center bg-blur rounded-full py-2 px-5 gap-2 cursor-pointer hover:scale-110 delay-100 transition">
                      <img className="w-6" src={skill.icon} alt={skill.name} />
                      <p>{skill.name}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
