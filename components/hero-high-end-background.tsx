"use client";

import { useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface BinaryBlock {
  id: number;
  x: number;
  y: number;
  width: number;
  height: number;
  opacityVariation: number;
  delay: number;
}

// Generate binary blocks in a cluster
const generateBinaryBlocks = (): BinaryBlock[] => {
  const blockCount = 20;
  const blocks: BinaryBlock[] = [];
  const centerX = 50; // Centered in the container
  const centerY = 50;
  const spread = 18; // Increased spread

  for (let i = 0; i < blockCount; i++) {
    const angle = (i / blockCount) * Math.PI * 2;
    const distance = Math.random() * spread;
    const x = centerX + Math.cos(angle) * distance;
    const y = centerY + Math.sin(angle) * distance;

    // Vary sizes - some squares, some rectangles - BIGGER
    const isSquare = Math.random() > 0.4;
    const baseSize = 3.5 + Math.random() * 3.5; // Increased from 2.5-5.0 to 3.5-7.0
    const width = isSquare ? baseSize : baseSize * (0.7 + Math.random() * 0.3);
    const height = isSquare ? baseSize : baseSize * (0.7 + Math.random() * 0.3);

    blocks.push({
      id: i,
      x,
      y,
      width,
      height,
      opacityVariation: 0.4 + Math.random() * 0.5,
      delay: Math.random() * 3,
    });
  }

  return blocks;
};

export function HeroHighEndBackground() {
  const { scrollY } = useScroll();
  const blocks = useMemo(() => generateBinaryBlocks(), []);

  // Parallax transforms for scroll reactivity
  const clusterY = useTransform(scrollY, [0, 500], [0, -100]);
  const clusterRotateX = useTransform(scrollY, [0, 500], [0, 8]);
  const gridX = useTransform(scrollY, [0, 500], [0, -50]);
  const gridY = useTransform(scrollY, [0, 500], [0, -30]);
  
  // Position cluster to the right side (where globe was)
  const clusterX = useTransform(scrollY, [0, 500], [0, -30]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      {/* Layer A: Substrate Grid */}
      <motion.div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(45, 226, 156, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(45, 226, 156, 0.15) 1px, transparent 1px),
            linear-gradient(45deg, rgba(45, 226, 156, 0.05) 1px, transparent 1px),
            linear-gradient(-45deg, rgba(45, 226, 156, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px, 80px 80px, 113px 113px, 113px 113px",
          backgroundPosition: "0 0, 0 0, 0 0, 0 0",
          x: gridX,
          y: gridY,
        }}
        animate={{
          backgroundPosition: [
            "0px 0px",
            "-200px -200px",
            "-400px -400px",
            "-600px -600px",
          ],
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Layer B: Binary Blocks Cluster - Positioned at top */}
      <motion.div
        className="absolute right-0 top-0 w-[600px] h-[600px] xl:w-[800px] xl:h-[800px] hidden lg:flex items-center justify-center"
        style={{
          y: clusterY,
          x: clusterX,
          rotateX: clusterRotateX,
          transformStyle: "preserve-3d",
          perspective: "1000px",
        }}
      >
        <motion.div
          className="relative"
          style={{
            width: "100%",
            height: "100%",
            transform: "translateZ(0)",
          }}
          animate={{
            scale: [0.92, 1.08, 0.92],
            rotateZ: [0, 2, -2, 0],
          }}
          transition={{
            scale: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            },
            rotateZ: {
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <filter id="blockGlow">
                <feGaussianBlur stdDeviation="1.2" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {blocks.map((block) => (
              <motion.g key={block.id}>
                {/* Glass-like block with glow */}
                <motion.rect
                  x={block.x - block.width / 2}
                  y={block.y - block.height / 2}
                  width={block.width}
                  height={block.height}
                  fill="rgba(26, 43, 52, 0.7)"
                  stroke="#2DE29C"
                  strokeWidth="0.25"
                  rx="0.4"
                  filter="url(#blockGlow)"
                  style={{
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                  }}
                  animate={{
                    opacity: [
                      0.5 + block.opacityVariation * 0.3,
                      0.9 + block.opacityVariation * 0.1,
                      0.5 + block.opacityVariation * 0.3,
                    ],
                    scale: [1, 1.1, 1],
                    x: [
                      block.x - block.width / 2,
                      block.x - block.width / 2 + (Math.random() - 0.5) * 0.5,
                      block.x - block.width / 2,
                    ],
                    y: [
                      block.y - block.height / 2,
                      block.y - block.height / 2 + (Math.random() - 0.5) * 0.5,
                      block.y - block.height / 2,
                    ],
                  }}
                  transition={{
                    opacity: {
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: block.delay,
                    },
                    scale: {
                      duration: 4 + Math.random() * 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: block.delay + 0.3,
                    },
                    x: {
                      duration: 5 + Math.random() * 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: block.delay,
                    },
                    y: {
                      duration: 5 + Math.random() * 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: block.delay + 0.5,
                    },
                  }}
                />
                {/* Inner highlight - more prominent */}
                <motion.rect
                  x={block.x - block.width / 3}
                  y={block.y - block.height / 3}
                  width={block.width * 0.66}
                  height={block.height * 0.66}
                  fill="rgba(45, 226, 156, 0.15)"
                  rx="0.3"
                  animate={{
                    opacity: [0.15, 0.4, 0.15],
                    scale: [1, 1.15, 1],
                  }}
                  transition={{
                    opacity: {
                      duration: 2.5 + Math.random() * 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: block.delay + 0.5,
                    },
                    scale: {
                      duration: 3 + Math.random() * 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: block.delay + 0.8,
                    },
                  }}
                />
                {/* Outer glow ring */}
                <motion.rect
                  x={block.x - block.width / 2 - 0.8}
                  y={block.y - block.height / 2 - 0.8}
                  width={block.width + 1.6}
                  height={block.height + 1.6}
                  fill="none"
                  stroke="#2DE29C"
                  strokeWidth="0.1"
                  rx="0.5"
                  opacity="0.3"
                  animate={{
                    opacity: [0.2, 0.5, 0.2],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 4 + Math.random() * 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: block.delay + 1,
                  }}
                />
              </motion.g>
            ))}
          </svg>
        </motion.div>
        
        {/* Mobile: Simplified cluster - bigger */}
        <motion.div
          className="relative md:hidden"
          style={{
            width: "85%",
            height: "85%",
            transform: "translateZ(0)",
          }}
          animate={{
            scale: [0.94, 1.06, 0.94],
            rotateZ: [0, 1.5, -1.5, 0],
          }}
          transition={{
            scale: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            },
            rotateZ: {
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <filter id="blockGlowMobile">
                <feGaussianBlur stdDeviation="1.0" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Reduced blocks for mobile - but bigger */}
            {blocks.slice(0, 12).map((block) => (
              <motion.g key={`mobile-${block.id}`}>
                <motion.rect
                  x={block.x - block.width / 2}
                  y={block.y - block.height / 2}
                  width={block.width}
                  height={block.height}
                  fill="rgba(26, 43, 52, 0.6)"
                  stroke="#2DE29C"
                  strokeWidth="0.2"
                  rx="0.4"
                  filter="url(#blockGlowMobile)"
                  animate={{
                    opacity: [
                      0.4 + block.opacityVariation * 0.4,
                      0.8 + block.opacityVariation * 0.2,
                      0.4 + block.opacityVariation * 0.4,
                    ],
                    scale: [1, 1.08, 1],
                  }}
                  transition={{
                    opacity: {
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: block.delay,
                    },
                    scale: {
                      duration: 4 + Math.random() * 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: block.delay + 0.3,
                    },
                  }}
                />
                {/* Inner highlight for mobile */}
                <motion.rect
                  x={block.x - block.width / 3}
                  y={block.y - block.height / 3}
                  width={block.width * 0.66}
                  height={block.height * 0.66}
                  fill="rgba(45, 226, 156, 0.12)"
                  rx="0.3"
                  animate={{
                    opacity: [0.12, 0.35, 0.12],
                  }}
                  transition={{
                    duration: 2.5 + Math.random() * 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: block.delay + 0.5,
                  }}
                />
              </motion.g>
            ))}
          </svg>
        </motion.div>
      </motion.div>

      {/* Layer D: Atmosphere Overlay */}
      {/* Noise texture */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      {/* Radial gradient mask - darker edges, lighter center */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-background/20 to-background/70 pointer-events-none" />
    </div>
  );
}

