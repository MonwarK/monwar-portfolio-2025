"use client";

import Navbar from "@/components/navigation/Navbar";
import Particles from "@/components/Particles";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Introduction from "@/components/sections/Introduction";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  // Refs for sections
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  // Observer
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);
        if (visibleEntry) {
          const sectionId = visibleEntry.target.getAttribute("data-section");
          if (sectionId) {
            setActiveSection(sectionId);
          }
        }
      },
      {
        threshold: 0.5, // fire when 50% of section is visible
      }
    );

    Object.entries(refs).forEach(([key, ref]) => {
      if (ref.current) {
        ref.current.setAttribute("data-section", key); // tag the DOM node
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(refs).forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  const refs = { homeRef, aboutRef, skillsRef, projectsRef, contactRef };

  return (
    <div>
      {/* Particle Background */}
      <Particles />

      {/* Navbar */}
      <Navbar refs={refs} activeSection={activeSection} />

      {/* Introduction */}
      <div ref={homeRef}>
        <Introduction
          scrollToAbout={() =>
            aboutRef.current?.scrollIntoView({ behavior: "smooth" })
          }
        />
      </div>

      {/* About Me */}
      <div ref={aboutRef}>
        <About />
      </div>

      {/* Skills */}
      <div ref={skillsRef}>
        <Skills />
      </div>

      {/* Project */}
      <div ref={projectsRef}>
        <Projects />
      </div>

      {/* Contact */}
      <div ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
}
