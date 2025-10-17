"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// A trimmed set of SVG paths for performance. Add more for denser beams.
const PATHS = [
  "M-380 -189C-380 -189 -312 216 152 343C616 470 684 875 684 875",
  "M-359 -213C-359 -213 -291 192 173 319C637 446 705 851 705 851",
  "M-338 -237C-338 -237 -270 168 194 295C658 422 726 827 726 827",
  "M-317 -261C-317 -261 -249 144 215 271C679 398 747 803 747 803",
  "M-296 -285C-296 -285 -228 120 236 247C700 374 768 779 768 779",
  "M-275 -309C-275 -309 -207 96 257 223C721 350 789 755 789 755",
  "M-254 -333C-254 -333 -186 72 278 199C742 326 810 731 810 731",
  "M-233 -357C-233 -357 -165 48 299 175C763 302 831 707 831 707"
];

export function BackgroundBeams({ className }) {
  // Stagger durations/delays for a flowing effect
  const baseDuration = 6;
  return (
    <div className={cn("pointer-events-none absolute inset-0", className)}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 704 400"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        <defs>
          <linearGradient id="beamGradient" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#18CCFC" stopOpacity="0" />
            <stop offset="15%" stopColor="#18CCFC" />
            <stop offset="60%" stopColor="#6344F5" />
            <stop offset="100%" stopColor="#AE48FF" stopOpacity="0" />
          </linearGradient>
          <radialGradient
            id="vignette"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(352 34) rotate(90) scale(555 1560)"
          >
            <stop offset="0.07" stopColor="rgba(212,212,216,0.5)" />
            <stop offset="0.24" stopColor="rgba(212,212,216,0.35)" />
            <stop offset="0.44" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <rect width="100%" height="100%" fill="url(#vignette)" />

        {PATHS.map((d, i) => {
          const length = 2200; // large enough for dash array
          const duration = baseDuration + i * 0.2;
          const delay = i * 0.12;
          return (
            <motion.path
              key={i}
              d={d}
              fill="none"
              stroke="url(#beamGradient)"
              strokeWidth={2}
              strokeLinecap="round"
              filter="url(#glow)"
              strokeDasharray={length}
              initial={{ pathLength: 0, pathOffset: 0 }}
              animate={{ pathLength: 1, pathOffset: -0.5 }}
              transition={{
                duration,
                delay,
                ease: "linear",
                repeat: Infinity
              }}
            />
          );
        })}
      </svg>
    </div>
  );
}