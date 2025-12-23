"use client";

import { motion } from "framer-motion";

export function BinaryWatermark() {
  const binaryChars = ["0", "1"];
  const rows = 15;

  return (
    <div className="absolute inset-0 overflow-hidden opacity-[0.05] pointer-events-none">
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <motion.div
          key={rowIndex}
          className="absolute left-0 right-0 flex gap-3 text-primary font-mono text-xs whitespace-nowrap"
          style={{
            top: `${(rowIndex * 100) / rows}%`,
          }}
          animate={{
            x: [0, -1000, 0],
          }}
          transition={{
            duration: 30 + rowIndex * 2,
            repeat: Infinity,
            ease: "linear",
            delay: rowIndex * 1.5,
          }}
        >
          {Array.from({ length: 50 }).map((_, colIndex) => (
            <span key={colIndex}>
              {binaryChars[Math.floor(Math.random() * binaryChars.length)]}
            </span>
          ))}
        </motion.div>
      ))}
    </div>
  );
}

