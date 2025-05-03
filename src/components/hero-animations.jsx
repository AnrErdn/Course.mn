'use client';

import { useEffect } from 'react';
import { animate } from "@motionone/dom";

export function HeroAnimations() {
  useEffect(() => {
    // Animate hero content with a clean entrance
    animate(
      ".hero-badge",
      {
        opacity: [0, 1],
        y: [20, 0],
        scale: [0.8, 1],
        filter: ["blur(10px)", "blur(0px)"],
      },
      {
        duration: 0.8,
        easing: [0.16, 1, 0.3, 1],
      }
    );

    animate(
      ".hero-title",
      {
        opacity: [0, 1],
        y: [30, 0],
        scale: [0.9, 1],
        filter: ["blur(10px)", "blur(0px)"],
      },
      {
        duration: 1,
        delay: 0.2,
        easing: [0.16, 1, 0.3, 1],
      }
    );

    animate(
      ".hero-description",
      {
        opacity: [0, 1],
        y: [30, 0],
        scale: [0.9, 1],
        filter: ["blur(10px)", "blur(0px)"],
      },
      {
        duration: 1,
        delay: 0.4,
        easing: [0.16, 1, 0.3, 1],
      }
    );

    animate(
      ".hero-buttons",
      {
        opacity: [0, 1],
        y: [30, 0],
        scale: [0.9, 1],
        filter: ["blur(10px)", "blur(0px)"],
      },
      {
        duration: 1,
        delay: 0.6,
        easing: [0.16, 1, 0.3, 1],
      }
    );
  }, []);

  return null;
} 