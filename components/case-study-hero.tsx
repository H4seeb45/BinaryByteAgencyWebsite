"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface CaseStudyHeroProps {
  title: string;
  heroImage: string;
  heroImageAlt: string;
}

export function CaseStudyHero({ title, heroImage, heroImageAlt }: CaseStudyHeroProps) {
  return (
    <section className="relative w-full h-[60vh] min-h-[500px] overflow-hidden">
      <motion.div
        className="relative w-full h-full"
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image
          src={heroImage}
          alt={heroImageAlt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background" />
      </motion.div>
      
      {/* Title overlay */}
      <div className="absolute inset-0 flex items-end">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-foreground max-w-4xl leading-tight"
          >
            {title}
          </motion.h1>
        </div>
      </div>
    </section>
  );
}

