"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

interface DataBlock {
  id: number;
  x: number;
  y: number;
  width: number;
  height: number;
  connections: number[];
  driftX: number;
  driftY: number;
}

// Generate data blocks with grid-like structure bias
const generateDataBlocks = (): DataBlock[] => {
  const blockCount = 24;
  const blocks: DataBlock[] = [];
  
  // Create a grid-like structure with some randomness
  const gridCols = 6;
  const gridRows = 4;
  const cellWidth = 100 / gridCols;
  const cellHeight = 100 / gridRows;
  
  for (let i = 0; i < blockCount; i++) {
    const row = Math.floor(i / gridCols);
    const col = i % gridCols;
    
    // Base position on grid with some randomness
    const baseX = col * cellWidth + cellWidth / 2;
    const baseY = row * cellHeight + cellHeight / 2;
    
    // Add randomness but keep grid-like structure
    const x = baseX + (Math.random() - 0.5) * (cellWidth * 0.4);
    const y = baseY + (Math.random() - 0.5) * (cellHeight * 0.4);
    
    // Vary sizes - some squares, some rectangles
    const isSquare = Math.random() > 0.4;
    const baseSize = 1.2 + Math.random() * 0.8;
    const width = isSquare ? baseSize : baseSize * (0.8 + Math.random() * 0.4);
    const height = isSquare ? baseSize : baseSize * (0.8 + Math.random() * 0.4);
    
    blocks.push({
      id: i,
      x: Math.max(5, Math.min(95, x)), // Keep within bounds
      y: Math.max(5, Math.min(95, y)),
      width,
      height,
      connections: [],
      driftX: (Math.random() - 0.5) * 0.8,
      driftY: (Math.random() - 0.5) * 0.8,
    });
  }
  
  // Create orthogonal connections (horizontal and vertical only)
  blocks.forEach((block, i) => {
    const connections: number[] = [];
    
    blocks.forEach((otherBlock, j) => {
      if (i !== j && i < j) {
        const dx = Math.abs(block.x - otherBlock.x);
        const dy = Math.abs(block.y - otherBlock.y);
        
        // Connect if aligned horizontally or vertically (with tolerance)
        const isHorizontal = dy < 8 && dx > 8 && dx < 25;
        const isVertical = dx < 8 && dy > 8 && dy < 25;
        
        if ((isHorizontal || isVertical) && Math.random() > 0.5) {
          connections.push(j);
        }
      }
    });
    
    // Ensure each block has at least 1-2 connections
    if (connections.length === 0) {
      // Find nearest horizontal or vertical neighbor
      const candidates = blocks
        .map((b, idx) => {
          const dx = Math.abs(block.x - b.x);
          const dy = Math.abs(block.y - b.y);
          const isAligned = (dx < 8 && dy > 8) || (dy < 8 && dx > 8);
          return { idx, dist: Math.sqrt(dx * dx + dy * dy), isAligned };
        })
        .filter(n => n.idx !== i && n.idx > i && n.isAligned)
        .sort((a, b) => a.dist - b.dist)
        .slice(0, 2)
        .map(n => n.idx);
      
      block.connections = candidates;
    } else {
      block.connections = connections.slice(0, 2);
    }
  });
  
  return blocks;
};

export function HeroAnimatedBackground() {
  const blocks = useMemo(() => generateDataBlocks(), []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      {/* Radial gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-background/50 to-background/85 z-10" />
      
      {/* SVG Container */}
      <svg
        className="absolute inset-0 w-full h-full opacity-45"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Glow filter for blocks and paths */}
          <filter id="blockGlow">
            <feGaussianBlur stdDeviation="0.4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          
          {/* Stronger glow for data flow */}
          <filter id="dataFlowGlow">
            <feGaussianBlur stdDeviation="0.6" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          
          {/* Linear gradient for paths */}
          <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2DE29C" stopOpacity="0.25" />
            <stop offset="50%" stopColor="#2DE29C" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#2DE29C" stopOpacity="0.25" />
          </linearGradient>
        </defs>

        {/* Static Orthogonal Connecting Paths */}
        {blocks.map((block) =>
          block.connections.map((targetId) => {
            const targetBlock = blocks[targetId];
            const pathId = `path-${block.id}-${targetId}`;
            
            // Create orthogonal path (horizontal then vertical or vice versa)
            const midX = block.x;
            const midY = targetBlock.y;
            
            return (
              <motion.path
                key={pathId}
                d={`M ${block.x} ${block.y} L ${midX} ${midY} L ${targetBlock.x} ${targetBlock.y}`}
                stroke="url(#pathGradient)"
                strokeWidth="0.1"
                fill="none"
                filter="url(#blockGlow)"
                initial={{ opacity: 0.12 }}
                animate={{
                  opacity: [0.12, 0.3, 0.12],
                }}
                transition={{
                  duration: 4 + Math.random() * 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            );
          })
        )}

        {/* Data Flow Animation - Animated dashes traveling along orthogonal paths */}
        {blocks.map((block) =>
          block.connections.map((targetId, pathIndex) => {
            const targetBlock = blocks[targetId];
            const pathId = `flow-${block.id}-${targetId}`;
            
            // Create orthogonal path
            const midX = block.x;
            const midY = targetBlock.y;
            const pathLength = Math.abs(block.x - midX) + Math.abs(block.y - midY) + 
                              Math.abs(midX - targetBlock.x) + Math.abs(midY - targetBlock.y);
            
            return (
              <motion.path
                key={pathId}
                d={`M ${block.x} ${block.y} L ${midX} ${midY} L ${targetBlock.x} ${targetBlock.y}`}
                stroke="#2DE29C"
                strokeWidth="0.15"
                fill="none"
                filter="url(#dataFlowGlow)"
                strokeDasharray="0.6 1.2"
                strokeLinecap="round"
                initial={{
                  strokeDashoffset: 0,
                  opacity: 0,
                }}
                animate={{
                  strokeDashoffset: [0, -pathLength * 0.3],
                  opacity: [0, 1, 0.9, 0],
                }}
                transition={{
                  strokeDashoffset: {
                    duration: 1.8 + Math.random() * 1.2,
                    repeat: Infinity,
                    ease: "linear",
                    delay: pathIndex * 0.3 + Math.random() * 0.6,
                  },
                  opacity: {
                    duration: 1.8 + Math.random() * 1.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: pathIndex * 0.3 + Math.random() * 0.6,
                  },
                }}
              />
            );
          })
        )}

        {/* Animated Data Blocks with Drift */}
        {blocks.map((block, index) => (
          <motion.g
            key={`block-group-${block.id}`}
            animate={{
              x: [0, block.driftX, 0, -block.driftX, 0],
              y: [0, block.driftY, 0, -block.driftY, 0],
            }}
            transition={{
              duration: 12 + Math.random() * 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.15,
            }}
          >
            {/* Outer glow rectangle */}
            <motion.rect
              x={block.x - block.width / 2 - 0.3}
              y={block.y - block.height / 2 - 0.3}
              width={block.width + 0.6}
              height={block.height + 0.6}
              fill="#2DE29C"
              filter="url(#blockGlow)"
              opacity="0.3"
              rx="0.2"
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 3.5 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.12,
              }}
            />
            {/* Main data block */}
            <motion.rect
              x={block.x - block.width / 2}
              y={block.y - block.height / 2}
              width={block.width}
              height={block.height}
              fill="#2DE29C"
              filter="url(#blockGlow)"
              rx="0.15"
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.6, 0.95, 0.6],
              }}
              transition={{
                duration: 2.5 + Math.random() * 1.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.08,
              }}
            />
            {/* Inner core (smaller rectangle) */}
            <motion.rect
              x={block.x - block.width / 3}
              y={block.y - block.height / 3}
              width={block.width * 0.66}
              height={block.height * 0.66}
              fill="#2DE29C"
              opacity="0.9"
              rx="0.1"
              animate={{
                opacity: [0.7, 1, 0.7],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 1.8 + Math.random() * 0.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.06,
              }}
            />
          </motion.g>
        ))}
      </svg>
    </div>
  );
}
