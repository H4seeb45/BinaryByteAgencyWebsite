"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Linkedin, Mail } from "lucide-react";

interface TeamMemberCardProps {
  name: string;
  role: string;
  bio: string;
  skills: string[];
  image?: string;
  linkedinUrl?: string;
  email?: string;
  imagePosition?: string;
}

export function TeamMemberCard({
  name,
  role,
  bio,
  skills,
  image,
  linkedinUrl = "#",
  email = "#",
  imagePosition = "10%",
}: TeamMemberCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Get initials for fallback
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <motion.div
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      {/* Container with glassmorphism */}
      <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-slate-900/50 backdrop-blur-md border border-white/10">
        {/* Top gradient border */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent z-10" />

        {/* Image Section - Top 60% */}
        <div className="relative h-[60%] overflow-hidden">
          {image ? (
            <motion.div
              className="relative w-full h-full"
              animate={{
                filter: isHovered ? "grayscale(0%)" : "grayscale(100%)",
              }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <Image
                src={image}
                alt={name}
                fill
                className="object-cover"
                style={{ objectPosition: `center ${imagePosition}` }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
              {/* Inner shadow at bottom of image for text readability */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent pointer-events-none" />
            </motion.div>
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
              <span className="text-6xl font-black text-primary/30">{initials}</span>
            </div>
          )}
        </div>

        {/* Content Section - Bottom 40% */}
        <div className="absolute bottom-0 left-0 right-0 p-6 space-y-3 bg-gradient-to-t from-slate-900/95 via-slate-900/90 to-transparent">
          {/* Name */}
          <h3 className="text-xl font-black text-white tracking-tight text-left">{name}</h3>

          {/* Role */}
          <p className="text-xs uppercase tracking-wider text-primary font-semibold text-left">{role}</p>

          {/* Bio - Limited to 3 lines */}
          <p className="text-sm text-slate-400 line-clamp-3 leading-relaxed text-left">{bio}</p>

          {/* Skill Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-2.5 py-1 text-xs bg-slate-800/40 text-slate-300 rounded-full border border-slate-700/30 hover:bg-slate-800/60 hover:border-primary/30 hover:text-primary transition-all duration-300"
              >
                {skill}
              </motion.span>
            ))}
          </div>

          {/* Social Links - Slide up on hover */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="flex gap-3 pt-2"
              >
                <motion.a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 group/social"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="h-4 w-4 text-slate-300 group-hover/social:text-primary transition-colors" />
                </motion.a>
                <motion.a
                  href={`mailto:${email}`}
                  className="w-10 h-10 rounded-full bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 group/social"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="h-4 w-4 text-slate-300 group-hover/social:text-primary transition-colors" />
                </motion.a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

