"use client";

import { motion } from "framer-motion";

const techStack = ["React", "Node.js", "AWS", "Shopify Plus", "TypeScript", "Next.js", "PostgreSQL", "Docker"];

export function ProofBar() {
  return (
    <section className="py-12 border-y border-border overflow-hidden">
      <div className="flex">
        <motion.div
          className="flex gap-12 items-center"
          animate={{
            x: [0, -50 * techStack.length * 2],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-12">
              {techStack.map((tech, index) => (
                <div
                  key={`${i}-${index}`}
                  className="text-2xl font-bold text-secondary whitespace-nowrap"
                >
                  {tech}
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

