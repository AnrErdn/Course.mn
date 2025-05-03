'use client';

import { useEffect } from 'react';
import { animate, stagger } from "@motionone/dom";

const dotPositions = [
  { left: "5%", top: "10%" },
  { left: "15%", top: "30%" },
  { left: "25%", top: "50%" },
  { left: "35%", top: "70%" },
  { left: "45%", top: "90%" },
  { left: "55%", top: "20%" },
  { left: "65%", top: "40%" },
  { left: "75%", top: "60%" },
  { left: "85%", top: "80%" },
  { left: "95%", top: "30%" },
  { left: "10%", top: "60%" },
  { left: "20%", top: "80%" },
  { left: "30%", top: "20%" },
  { left: "40%", top: "40%" },
  { left: "50%", top: "60%" },
  { left: "60%", top: "80%" },
  { left: "70%", top: "20%" },
  { left: "80%", top: "40%" },
  { left: "90%", top: "60%" },
  { left: "5%", top: "80%" },
  { left: "15%", top: "20%" },
  { left: "25%", top: "40%" },
  { left: "35%", top: "60%" },
  { left: "45%", top: "80%" },
  { left: "55%", top: "10%" },
  { left: "65%", top: "30%" },
  { left: "75%", top: "50%" },
  { left: "85%", top: "70%" },
  { left: "95%", top: "90%" },
  { left: "10%", top: "50%" }
];

export function BackgroundAnimations() {
  useEffect(() => {
    const startBackgroundAnimations = () => {
      // First gradient animation
      animate(
        ".gradient-1",
        {
          backgroundPosition: ["0% 0%", "100% 100%"],
          opacity: [0.25, 0.35, 0.25],
          scale: [1, 1.1, 1],
        },
        {
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse",
          easing: "linear",
        }
      );

      // Second gradient animation
      animate(
        ".gradient-2",
        {
          backgroundPosition: ["100% 100%", "0% 0%"],
          opacity: [0.25, 0.3, 0.25],
          scale: [1, 1.05, 1],
        },
        {
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
          easing: "linear",
        }
      );

      // Grid lines animation
      animate(
        ".grid-line",
        {
          opacity: [0.15, 0.25, 0.15],
          scale: [1, 1.02, 1],
        },
        {
          duration: 2.5,
          repeat: Infinity,
          delay: stagger(0.1),
          easing: "ease-in-out",
        }
      );

      // Floating dots animation
      animate(
        ".floating-dot",
        {
          y: [0, -40, 0],
          opacity: [0.2, 0.35, 0.2],
          scale: [1, 1.3, 1],
        },
        {
          duration: 3,
          repeat: Infinity,
          delay: stagger(0.15),
          easing: "ease-in-out",
        }
      );
    };

    startBackgroundAnimations();
    const interval = setInterval(startBackgroundAnimations, 300000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* GitHub-like background effects */}
      <div className="gradient-1 absolute inset-0 bg-gradient-to-br from-primary/25 via-transparent to-primary/20" />
      <div className="gradient-2 absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-primary/25" />
      
      {/* Grid lines */}
      <div className="absolute inset-0 grid grid-cols-12 gap-4 opacity-25">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="grid-line border-r border-primary/50" />
        ))}
      </div>

      {/* Floating dots */}
      <div className="absolute inset-0">
        {dotPositions.map((pos, i) => (
          <div
            key={i}
            className="floating-dot absolute w-2 h-2 rounded-full bg-primary/40"
            style={pos}
          />
        ))}
      </div>

      <style jsx global>{`
        .gradient-1, .gradient-2 {
          background-size: 200% 200%;
          background-position: 0% 0%;
          transition: all 0.3s ease;
          mix-blend-mode: overlay;
          transform-origin: center;
          will-change: transform, opacity, background-position;
        }

        .grid-line {
          height: 100%;
          transition: all 0.3s ease;
          transform-origin: center;
          will-change: transform, opacity;
        }

        .floating-dot {
          transition: all 0.3s ease;
          transform-origin: center;
          will-change: transform, opacity;
          filter: blur(0.5px);
        }
      `}</style>
    </>
  );
} 