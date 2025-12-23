"use client";

import { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, useScroll, useInView } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Rocket, Building2, ShoppingBag, ArrowRight } from "lucide-react";

const expertiseCards = [
  {
    id: 1,
    headline: "From Zero to Series A",
    body: "We architect production-ready MVPs that don't just 'work'—they scale. We handle the full technical debt-free lifecycle from database schema design to cloud infrastructure, ensuring your vision survives the first 100k users without a rewrite.",
    techTags: ["Next.js 14", "PostgreSQL", "Prisma", "Auth.js"],
    icon: Rocket,
    gradient: "from-primary/20 via-primary/10 to-background",
    span: "col-span-1 md:col-span-2",
    height: "min-h-[400px]",
  },
  {
    id: 2,
    headline: "Mission-Critical Systems",
    body: "Custom-built internal tools and SaaS platforms engineered for high-security environments. We focus on low-latency state management and real-time data synchronization to streamline your business operations.",
    techTags: ["TanStack Query", "Redux Toolkit", "WebSockets", "Docker"],
    icon: Building2,
    gradient: "from-primary/15 via-background to-primary/10",
    span: "col-span-1",
    height: "min-h-[400px]",
  },
  {
    id: 3,
    headline: "Digital Commerce at Scale",
    body: "A fusion of elite engineering and conversion science. We build headless commerce experiences and manage the technical launch of your brand on TikTok Shop, ensuring a seamless bridge between social discovery and final checkout.",
    techTags: ["Shopify Hydrogen", "Stripe", "TikTok API", "Tailwind"],
    icon: ShoppingBag,
    gradient: "from-background via-primary/10 to-primary/15",
    span: "col-span-1 md:col-span-2",
    height: "min-h-[400px]",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background mesh gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5 opacity-50 pointer-events-none" />
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 text-foreground">
            OUR EXPERTISE
          </h2>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            UK-registered firm delivering global standards. Elite engineering for visionary founders.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {expertiseCards.map((card, index) => (
            <ExpertiseCard key={card.id} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExpertiseCard({ card, index }: { card: typeof expertiseCards[0]; index: number }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const Icon = card.icon;

  // Magnetic button effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 700 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  // Sticky scroll reveal with tilt
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 5]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [0, -5]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.7, 1, 0.7]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    setMousePosition({
      x: e.clientX - centerX,
      y: e.clientY - centerY,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePosition({ x: 0, y: 0 });
    x.set(0);
    y.set(0);
  };

  const handleButtonMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    
    x.set(distanceX * 0.3);
    y.set(distanceY * 0.3);
  };

  const handleButtonMouseLeave = () => {
    x.set(0);
    y.set(0);
  };


  return (
    <motion.div
      ref={cardRef}
      className={`${card.span} ${card.height}`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      style={{
        rotateX,
        rotateY,
        opacity,
        perspective: 1000,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Card className="relative h-full group overflow-hidden border-white/10 backdrop-blur-xl bg-gradient-to-br from-background/80 via-background/60 to-background/80 hover:border-primary/30 transition-all duration-500">
        {/* Mesh gradient background */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-30 group-hover:opacity-50 transition-opacity duration-500`}
        />

        {/* Border beam effect - follows cursor */}
        {isHovered && (
          <motion.div
            className="absolute inset-0 pointer-events-none overflow-hidden rounded-lg"
            style={{
              background: `radial-gradient(800px circle at ${50 + (mousePosition.x / 20)}% ${50 + (mousePosition.y / 20)}%, rgba(45, 226, 156, 0.2), transparent 50%)`,
            }}
            animate={{
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        )}

        {/* Shine effect on border */}
        <motion.div
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `linear-gradient(90deg, transparent, rgba(45, 226, 156, 0.1), transparent)`,
            backgroundSize: "200% 100%",
          }}
          animate={{
            backgroundPosition: isHovered ? ["0% 0%", "200% 0%"] : "0% 0%",
          }}
          transition={{
            duration: 2,
            repeat: isHovered ? Infinity : 0,
            ease: "linear",
          }}
        />

        <CardHeader className="relative z-10 pb-4">
          {/* Glowing icon */}
          <motion.div
            className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-sm border border-primary/20 flex items-center justify-center mb-6 group-hover:border-primary/40 transition-all duration-500 relative overflow-hidden"
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-primary/20 blur-xl group-hover:bg-primary/30 transition-colors duration-500" />
            <Icon className="h-8 w-8 text-primary relative z-10" />
          </motion.div>

          <CardTitle className="text-2xl md:text-3xl font-black mb-4 text-foreground leading-tight">
            {card.headline}
          </CardTitle>
        </CardHeader>

        <CardContent className="relative z-10 flex flex-col h-full">
          <CardDescription className="text-base md:text-lg text-secondary/90 leading-relaxed mb-6 flex-grow">
            {card.body}
          </CardDescription>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {card.techTags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="bg-primary/5 border-primary/20 text-primary hover:bg-primary/10 transition-colors"
              >
                {tag}
              </Badge>
            ))}
          </div>

          {/* Magnetic button */}
          <motion.a
            href="#work"
            className="inline-flex items-center gap-2 text-primary font-semibold group/btn self-start"
            style={{
              x: xSpring,
              y: ySpring,
            }}
            onMouseMove={handleButtonMouseMove}
            onMouseLeave={handleButtonMouseLeave}
          >
            <span>View Case Study</span>
            <motion.div
              animate={{
                x: isHovered ? [0, 5, 0] : 0,
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ArrowRight className="h-4 w-4" />
            </motion.div>
          </motion.a>
        </CardContent>
      </Card>
    </motion.div>
  );
}
