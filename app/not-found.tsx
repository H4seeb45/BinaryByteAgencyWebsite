"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 grid-background opacity-20" />
      
      {/* Glitch effect overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent animate-pulse" />
      </div>

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* Glitched 404 Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-8xl md:text-9xl font-black text-foreground mb-4 relative">
            <span className="font-mono" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              404
            </span>
            <span className="block text-4xl md:text-5xl mt-2 text-primary font-mono tracking-wider">
              CONNECTION SEVERED
            </span>
            
            {/* Glitch effect layers */}
            <span
              className="absolute top-0 left-0 text-8xl md:text-9xl font-black text-primary opacity-70 font-mono glitch-1"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              404
            </span>
            <span
              className="absolute top-0 left-0 text-8xl md:text-9xl font-black text-primary opacity-50 font-mono glitch-2"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              404
            </span>
          </h1>
        </motion.div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-secondary mb-12 leading-relaxed"
        >
          The node you are looking for has been terminated or relocated.
        </motion.p>

        {/* Return Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button
            asChild
            size="lg"
            className="bg-primary text-background font-bold hover:bg-primary/90 hover:brightness-110 transition-all group"
          >
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
              Return to Grid
            </Link>
          </Button>
        </motion.div>

        {/* Binary code effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 font-mono text-xs text-primary whitespace-pre"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          {Array.from({ length: 20 })
            .map(() => Math.random() > 0.5 ? "1" : "0")
            .join(" ")}
        </motion.div>
      </div>

    </div>
  );
}

