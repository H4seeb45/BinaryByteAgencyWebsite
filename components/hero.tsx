"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Dynamically import heavy background animation component
const HeroHighEndBackground = dynamic(
  () => import("./hero-high-end-background").then((mod) => ({ default: mod.HeroHighEndBackground })),
  {
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 w-full h-full bg-slate-900 pointer-events-none" />
    ),
  }
);

export function Hero() {
  const [londonTime, setLondonTime] = useState("");
  const [sfTime, setSfTime] = useState("");

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();
      
      // London time (UTC+0 or UTC+1 depending on DST)
      const london = new Date(now.toLocaleString("en-US", { timeZone: "Europe/London" }));
      setLondonTime(london.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", hour12: false }));
      
      // San Francisco time
      const sf = new Date(now.toLocaleString("en-US", { timeZone: "America/Los_Angeles" }));
      setSfTime(sf.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: false }));
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* High-End Background Animation */}
      <HeroHighEndBackground />

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight text-foreground"
              >
                ENGINEERING<br />
                <span className="text-primary">SCALABLE DIGITAL</span><br />
                FOUNDATIONS
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl text-foreground mb-6 font-medium"
              >
                For Visionary Founders in the US, UK & Beyond
              </motion.p>

              {/* Time zones */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex gap-6 mb-8"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-lg text-secondary font-mono">LONDON {londonTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-lg text-secondary font-mono">SAN FRANCISCO {sfTime}</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Button
                  size="lg"
                  className="group"
                  onClick={() => {
                    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  BOOK A TECHNICAL AUDIT
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </div>

            {/* Right side - Binary Blocks Animation (visible on larger screens) */}
            <div className="hidden lg:block relative h-[600px]">
              {/* Binary blocks are positioned absolutely in HeroHighEndBackground */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

