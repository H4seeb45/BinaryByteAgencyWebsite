"use client";

import { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Github, Twitter, MapPin } from "lucide-react";

interface TeamCardProps {
  name: string;
  role: string;
  bio: string;
  techStack: string[];
  successMetric: string;
  image?: string;
  isUKBased?: boolean;
  index: number;
}

export function TeamCard({
  name,
  role,
  bio,
  techStack,
  successMetric,
  image,
  isUKBased = false,
  index,
}: TeamCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // 3D tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-0.5, 0.5], [7.5, -7.5]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-7.5, 7.5]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    
    x.set((distanceX / (rect.width / 2)) * 0.5);
    y.set((distanceY / (rect.height / 2)) * 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <motion.div
      ref={cardRef}
      className="relative group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => setShowOverlay(!showOverlay)}
    >
      <div className="relative h-full rounded-xl overflow-hidden border border-border/50 bg-background/50 backdrop-blur-sm transition-all duration-500 group-hover:border-primary/50 group-hover:shadow-2xl group-hover:shadow-primary/20">
        {/* Image container with grayscale to color transition */}
        <div className="relative aspect-[3/4] overflow-hidden">
          {image ? (
            <motion.div
              className="relative w-full h-full"
              animate={{
                filter: isHovered ? "grayscale(0%)" : "grayscale(100%)",
              }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={image}
                alt={name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
              {/* Mint green glow on hover */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                animate={{
                  boxShadow: isHovered
                    ? "0 0 40px rgba(45, 226, 156, 0.4), inset 0 0 40px rgba(45, 226, 156, 0.1)"
                    : "none",
                }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
              <span className="text-6xl font-black text-primary/30">
                {name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </span>
            </div>
          )}

          {/* UK Badge */}
          {isUKBased && (
            <motion.div
              className="absolute top-4 right-4 z-10"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.1 + 0.3 }}
            >
              <Badge
                variant="default"
                className="bg-primary/20 border-primary/40 text-primary backdrop-blur-sm flex items-center gap-1.5"
              >
                <MapPin className="h-3 w-3" />
                <span className="text-xs font-semibold">London-Based</span>
              </Badge>
            </motion.div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div>
            <h3 className="text-xl font-black text-foreground mb-1">{name}</h3>
            <p className="text-primary text-sm font-semibold mb-3">{role}</p>
          </div>

          {/* Tech DNA Badges */}
          <motion.div
            className="flex flex-wrap gap-2"
            animate={{
              y: isHovered ? -4 : 0,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          >
            {techStack.map((tech, techIndex) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: 1,
                  y: isHovered ? -2 : 0,
                }}
                transition={{
                  delay: index * 0.1 + techIndex * 0.05,
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
              >
                <Badge
                  variant="outline"
                  className="bg-primary/5 border-primary/20 text-primary text-xs"
                >
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </motion.div>

          {/* Success Metric */}
          <p className="text-secondary text-xs font-medium">{successMetric}</p>

          {/* Social Links */}
          <div className="flex gap-3 pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <Linkedin className="h-4 w-4 text-primary" />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="h-4 w-4 text-primary" />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <Twitter className="h-4 w-4 text-primary" />
            </a>
          </div>
        </div>

        {/* Glassmorphism Overlay */}
        {showOverlay && (
          <motion.div
            className="absolute inset-0 bg-background/95 backdrop-blur-md border border-primary/20 rounded-xl p-6 z-20 flex flex-col justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-secondary hover:text-foreground transition-colors"
              onClick={() => setShowOverlay(false)}
            >
              ✕
            </button>
            <h4 className="text-2xl font-black text-foreground mb-3">{name}</h4>
            <p className="text-primary font-semibold mb-4">{role}</p>
            <p className="text-secondary leading-relaxed mb-4">{bio}</p>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <Badge key={tech} variant="outline" className="bg-primary/5">
                  {tech}
                </Badge>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

