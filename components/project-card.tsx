"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    heroImage?: string;
    heroImageAlt?: string;
    techStack: string[];
  };
  onClick: () => void;
  index: number;
}

export function ProjectCard({ project, onClick, index }: ProjectCardProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePosition({ x: 0, y: 0 });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`View ${project.title} case study`}
    >
      <div className="relative h-full rounded-xl overflow-hidden border border-white/10 bg-background/40 backdrop-blur-xl transition-all duration-500 cursor-pointer noise-texture">
        {/* Spotlight Effect */}
        {isHovered && (
          <motion.div
            className="absolute inset-0 pointer-events-none z-10"
            style={{
              background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(45, 226, 156, 0.15), transparent 40%)`,
            }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 20,
            }}
          />
        )}

        {/* Border glow on hover */}
        <motion.div
          className="absolute inset-0 pointer-events-none z-20 rounded-xl"
          style={{
            border: isHovered ? "1px solid rgba(45, 226, 156, 0.3)" : "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: isHovered
              ? `0 0 30px rgba(45, 226, 156, 0.2), inset 0 0 30px rgba(45, 226, 156, 0.05)`
              : "none",
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Image Container - 16:9 Aspect Ratio */}
        <div className="relative w-full aspect-video overflow-hidden bg-gradient-to-br from-primary/10 to-background">
          {project.heroImage ? (
            <>
              <motion.div
                className="relative w-full h-full"
                animate={{
                  scale: isHovered ? 1.05 : 1,
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <Image
                  src={project.heroImage}
                  alt={project.heroImageAlt || project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 30vw"
                />
              </motion.div>
              {/* Overlay that fades on hover */}
              <motion.div
                className="absolute inset-0 bg-background/60 z-10"
                animate={{
                  opacity: isHovered ? 0.3 : 0.6,
                }}
                transition={{ duration: 0.5 }}
              />
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-6xl opacity-20">📊</div>
            </div>
          )}

          {/* Tech Stack Badges - Slide up on hover */}
          <motion.div
            className="absolute bottom-4 left-4 right-4 z-20 flex flex-wrap gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              y: isHovered ? 0 : 20,
            }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            {project.techStack.slice(0, 3).map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="bg-background/80 backdrop-blur-sm border-primary/30 text-primary text-xs py-1 px-2"
              >
                {tech}
              </Badge>
            ))}
          </motion.div>
        </div>

        {/* Content */}
        <div className="relative z-10 p-6 space-y-3">
          {/* Title */}
          <h3 className="text-xl font-black text-foreground tracking-tight leading-tight">
            {project.title}
          </h3>

          {/* Description - Truncated to 2 lines */}
          <p className="text-sm text-secondary line-clamp-2 leading-relaxed">
            {project.description}
          </p>

          {/* Explore Link */}
          <motion.div
            className="flex items-center gap-2 text-sm font-semibold"
            animate={{
              color: isHovered ? "rgb(45, 226, 156)" : "rgb(148, 163, 184)",
            }}
            transition={{ duration: 0.3 }}
          >
            <span>Explore Case Study</span>
            <motion.div
              animate={{
                x: isHovered ? 4 : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              <ArrowRight className="h-4 w-4" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

