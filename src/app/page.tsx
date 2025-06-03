"use client";

import Navbar from "@/components/navigation/Navbar";
import Particles from "@/components/Particles";
import About from "@/components/sections/About";
import Introduction from "@/components/sections/Introduction";
import Skills from "@/components/sections/Skills";

export default function Home() {
  return (
    <div>
      {/* Interactive Particle Background */}
      <Particles />

      {/* Navbar */}
      <Navbar />

      {/* Introduction */}
      <Introduction />

      {/* About Me */}
      <About />

      {/* Skills */}
      <Skills />
    </div>
  );
}
