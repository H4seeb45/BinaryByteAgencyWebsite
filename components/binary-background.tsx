"use client";

import { motion } from "framer-motion";

export function BinaryBackground() {
  const binaryChars = ["0", "1"];
  const rows = 20;
  const cols = 40;

  return (
    <div className="absolute inset-0 overflow-hidden opacity-20">
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <motion.div
          key={rowIndex}
          className="absolute left-0 right-0 flex gap-2 text-primary font-mono text-xs"
          style={{
            top: `${(rowIndex * 100) / rows}%`,
          }}
          animate={{
            x: [0, -100, 0],
          }}
          transition={{
            duration: 20 + rowIndex * 2,
            repeat: Infinity,
            ease: "linear",
            delay: rowIndex * 0.5,
          }}
        >
          {Array.from({ length: cols }).map((_, colIndex) => (
            <span key={colIndex} className="opacity-30">
              {binaryChars[Math.floor(Math.random() * binaryChars.length)]}
            </span>
          ))}
        </motion.div>
      ))}
    </div>
  );
}

