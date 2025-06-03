import React from "react";
import { useEffect, useState } from "react";
import { MousePosition, Particle } from "../../types/Particle";
import { motion } from "framer-motion";

export default function Particles() {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const initializeParticles = (): Particle[] => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      return Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 3 + 2,
        speedX: (Math.random() - 0.5) * 1,
        speedY: (Math.random() - 0.5) * 1,
        opacity: Math.random() * 0.4 + 0.3,
      }));
    };

    setParticles(initializeParticles());

    const handleMouseMove = (e: MouseEvent): void => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleResize = (): void => {
      setParticles(initializeParticles());
    };

    const animateParticles = (): void => {
      setParticles((prev) =>
        prev.map((particle) => {
          const width = window.innerWidth;
          const height = window.innerHeight;

          let newX = particle.x + particle.speedX;
          let newY = particle.y + particle.speedY;
          let newSpeedX = particle.speedX;
          let newSpeedY = particle.speedY;

          // Bounce off edges with proper boundary checking
          if (newX <= 0 || newX >= width) {
            newSpeedX *= -1;
            newX = newX <= 0 ? 0 : width;
          }
          if (newY <= 0 || newY >= height) {
            newSpeedY *= -1;
            newY = newY <= 0 ? 0 : height;
          }

          return {
            ...particle,
            x: newX,
            y: newY,
            speedX: newSpeedX,
            speedY: newSpeedY,
          };
        })
      );
    };

    const interval = setInterval(animateParticles, 50);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      clearInterval(interval);
    };
  }, []);

  const calculateDistance = (
    x1: number,
    y1: number,
    x2: number,
    y2: number
  ): number => {
    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
  };

  return (
    <div className="fixed inset-0 pointer-events-none">
      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
              linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)
            `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Animated Particles */}
      {particles.map((particle) => {
        const distanceToMouse = calculateDistance(
          particle.x,
          particle.y,
          mousePosition.x,
          mousePosition.y
        );
        const isNearMouse = distanceToMouse < 150;

        return (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-white"
            style={{
              left: particle.x,
              top: particle.y,
              width: particle.size,
              height: particle.size,
            }}
            animate={{
              scale: isNearMouse ? 2 : 1,
              opacity: isNearMouse ? 0.8 : particle.opacity,
              x: isNearMouse ? (mousePosition.x - particle.x) * 0.1 : 0,
              y: isNearMouse ? (mousePosition.y - particle.y) * 0.1 : 0,
            }}
            transition={{ type: "spring", stiffness: 150, damping: 15 }}
          />
        );
      })}

      {/* Connection Lines */}
      <svg className="absolute inset-0 w-full h-full">
        {particles.map((particle, i) => {
          return particles.slice(i + 1).map((otherParticle, j) => {
            const distance = calculateDistance(
              particle.x,
              particle.y,
              otherParticle.x,
              otherParticle.y
            );

            if (distance < 120) {
              return (
                <motion.line
                  key={`${i}-${j}`}
                  x1={particle.x}
                  y1={particle.y}
                  x2={otherParticle.x}
                  y2={otherParticle.y}
                  stroke="rgba(255, 255, 255, 0.3)"
                  strokeWidth="1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.3 - distance / 400 }}
                />
              );
            }
            return null;
          });
        })}
      </svg>

      {/* Mouse Glow Effect */}
      <motion.div
        className="absolute w-96 h-96 rounded-full pointer-events-none"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          background:
            "radial-gradient(circle, rgba(150, 150, 150, 0.2) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
