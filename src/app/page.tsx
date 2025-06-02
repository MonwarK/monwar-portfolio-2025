"use client";

import Particles from "@/components/Particles";
import About from "@/components/sections/About";
import Introduction from "@/components/sections/Introduction";

export default function Home() {
  return (
    <div>
      {/* Interactive Particle Background */}
      <Particles />

      {/* Introduction */}
      <Introduction />

      {/* About Me */}
      <About />
    </div>
  );
}
