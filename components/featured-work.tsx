"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { ProjectCard } from "@/components/project-card";

// Dynamically import Sheet components (only loads when user interacts with projects)
const DynamicSheet = dynamic(
  () => import("@/components/ui/sheet").then((mod) => mod.Sheet),
  { ssr: false }
);
const DynamicSheetContent = dynamic(
  () => import("@/components/ui/sheet").then((mod) => mod.SheetContent),
  { ssr: false }
);
const DynamicSheetHeader = dynamic(
  () => import("@/components/ui/sheet").then((mod) => mod.SheetHeader),
  { ssr: false }
);
const DynamicSheetTitle = dynamic(
  () => import("@/components/ui/sheet").then((mod) => mod.SheetTitle),
  { ssr: false }
);
const DynamicSheetDescription = dynamic(
  () => import("@/components/ui/sheet").then((mod) => mod.SheetDescription),
  { ssr: false }
);

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  gradient: string;
  heroImage?: string;
  heroImageAlt?: string;
  fullDescription: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
    description?: string;
  }[];
  techStack: string[];
}

const projects: Project[] = [
  {
    id: "fintech-platform",
    title: "FINTECH PLATFORM FOR NYC STARTUP",
    subtitle: "Secured SIM",
    description: "Enterprise-grade financial platform with real-time transaction processing.",
    gradient: "from-primary/20 to-primary/5",
    heroImage: "/FinTechBinaryByte.png",
    heroImageAlt: "FinTech Platform Dashboard",
    fullDescription: "A comprehensive fintech platform built for a New York-based startup, handling real-time transactions, compliance, and scaling to support 100,000+ concurrent users.",
    challenge: "The client's existing MVP was buckling under user growth, experiencing 3+ second load times, and technical debt was preventing them from closing their Series A round. The platform needed to handle real-time transaction processing for 100,000+ concurrent users while maintaining PCI-DSS compliance and sub-200ms API response times.",
    solution: "We architected a complete rebuild using Next.js 14 for server-side rendering, Node.js with Express for microservices, and PostgreSQL with Prisma ORM. We chose AWS for its superior fintech compliance certifications. The infrastructure uses CloudFront CDN, RDS with read replicas, and ElastiCache for Redis-based session management. Security was paramount: we implemented Auth.js for OAuth 2.0, end-to-end encryption using AWS KMS, and rate limiting via CloudFlare.",
    results: [
      {
        metric: "Faster Load Times",
        value: "40%",
        description: "Reduced average page load from 3.2s to 1.9s",
      },
      {
        metric: "Series A Funding",
        value: "$2M",
        description: "Raised post-launch within 8 weeks",
      },
      {
        metric: "API Response Time",
        value: "180ms",
        description: "Average response time (target: <200ms)",
      },
      {
        metric: "Concurrent Users",
        value: "150K+",
        description: "Platform now handles without degradation",
      },
    ],
    techStack: ["React", "Next.js 14", "Node.js", "PostgreSQL", "AWS", "Prisma", "Auth.js", "Docker", "CloudFront", "ElastiCache"],
  },
  {
    id: "ecommerce-solution",
    title: "E-COMMERCE SOLUTION",
    subtitle: "Custom Web Apps",
    description: "Scalable marketplace platform handling millions of transactions daily.",
    gradient: "from-primary/15 to-primary/5",
    heroImage: "/E-comCaseStudyBinaryByte.png",
    heroImageAlt: "E-commerce Platform",
    fullDescription: "A headless e-commerce platform built for a high-growth marketplace, processing millions of transactions daily with seamless third-party integrations.",
    challenge: "The existing platform couldn't scale beyond 10,000 daily orders. Checkout abandonment rates were at 45% due to slow page loads. The client needed a solution that could handle Black Friday traffic spikes while maintaining sub-second load times.",
    solution: "We built a headless commerce solution using Shopify Hydrogen for the storefront, Stripe for payments, and a custom Node.js backend for order management. We implemented Redis caching, CDN optimization, and database sharding to handle traffic spikes. The platform uses WebSockets for real-time inventory updates and order tracking.",
    results: [
      {
        metric: "Transaction Volume",
        value: "5M+",
        description: "Daily transactions handled seamlessly",
      },
      {
        metric: "Load Time Improvement",
        value: "60%",
        description: "Reduced checkout page load from 2.8s to 1.1s",
      },
      {
        metric: "Abandonment Rate",
        value: "18%",
        description: "Reduced from 45% to 18%",
      },
      {
        metric: "Black Friday Traffic",
        value: "10x",
        description: "Handled 10x normal traffic without issues",
      },
    ],
    techStack: ["Shopify Hydrogen", "Stripe", "Node.js", "Redis", "PostgreSQL", "WebSockets", "Docker", "AWS"],
  },
  {
    id: "api-integration",
    title: "API INTEGRATION SUITE",
    subtitle: "Secured SIM Seed",
    description: "Seamless integration connecting 50+ third-party services.",
    gradient: "from-primary/20 to-primary/5",
    heroImage: "/APIintegrationBinaryByte.png",
    heroImageAlt: "API Integration Dashboard",
    fullDescription: "A comprehensive API integration platform that seamlessly connects 50+ third-party services, enabling real-time data synchronization and workflow automation.",
    challenge: "The client was managing 50+ API integrations manually, leading to data inconsistencies, failed webhooks, and hours of manual reconciliation daily. They needed a unified platform to manage all integrations with automatic retry logic, webhook validation, and real-time monitoring.",
    solution: "We built a microservices-based API gateway using Node.js and Express, with a Redis queue system for reliable webhook processing. Each integration is containerized and can scale independently. We implemented OAuth 2.0 flows, automatic token refresh, webhook signature validation, and a comprehensive monitoring dashboard using Grafana and Prometheus.",
    results: [
      {
        metric: "Integration Success Rate",
        value: "99.9%",
        description: "Up from 87% with automatic retry logic",
      },
      {
        metric: "Manual Hours Saved",
        value: "40hrs/week",
        description: "Eliminated manual reconciliation work",
      },
      {
        metric: "API Response Time",
        value: "120ms",
        description: "Average latency across all integrations",
      },
      {
        metric: "Uptime",
        value: "99.99%",
        description: "Platform availability with redundancy",
      },
    ],
    techStack: ["Node.js", "Express", "Redis", "PostgreSQL", "Docker", "Kubernetes", "Grafana", "Prometheus", "OAuth 2.0"],
  },
];

export function FeaturedWork() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll when sheet is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    // Small delay to allow animation to complete
    setTimeout(() => {
      setSelectedProject(null);
    }, 300);
  };

  return (
    <>
      <section id="work" className="py-24 px-4 sm:px-6 lg:px-8 bg-background/50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-black mb-4 text-foreground">
              FEATURED WORK
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => handleProjectClick(project)}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Slide-Over Panel */}
      <DynamicSheet open={isOpen} onOpenChange={setIsOpen}>
        <DynamicSheetContent
          side="right"
          className="w-full sm:max-w-2xl overflow-y-auto border-l border-slate-800 bg-slate-900/90 backdrop-blur-2xl"
        >
          {selectedProject && (
            <div className="space-y-8">
              {/* Header */}
              <DynamicSheetHeader className="text-left">
                <DynamicSheetTitle className="text-3xl md:text-4xl font-black text-foreground mb-2">
                  {selectedProject.title}
                </DynamicSheetTitle>
                <DynamicSheetDescription className="text-primary font-semibold text-lg">
                  {selectedProject.subtitle}
                </DynamicSheetDescription>
              </DynamicSheetHeader>

              {/* Hero Image */}
              {selectedProject.heroImage && (
                <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
                  <Image
                    src={selectedProject.heroImage}
                    alt={selectedProject.heroImageAlt || selectedProject.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  />
                </div>
              )}

              {/* Full Description */}
              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Overview
                </h3>
                <p className="text-secondary leading-relaxed">
                  {selectedProject.fullDescription}
                </p>
              </div>

              {/* The Challenge */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1 h-8 bg-primary rounded-full" />
                  <h3 className="text-2xl font-bold text-foreground">
                    The Challenge
                  </h3>
                </div>
                <p className="text-secondary leading-relaxed">
                  {selectedProject.challenge}
                </p>
              </div>

              {/* The Solution */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1 h-8 bg-primary rounded-full" />
                  <h3 className="text-2xl font-bold text-foreground">
                    The Solution
                  </h3>
                </div>
                <p className="text-secondary leading-relaxed">
                  {selectedProject.solution}
                </p>
              </div>

              {/* Key Results */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Key Results
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {selectedProject.results.map((result, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="glass rounded-lg p-6 border border-primary/20"
                    >
                      <div className="text-4xl font-black text-primary mb-2">
                        {result.value}
                      </div>
                      <div className="text-lg font-bold text-foreground mb-1">
                        {result.metric}
                      </div>
                      {result.description && (
                        <p className="text-sm text-secondary">
                          {result.description}
                        </p>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="bg-primary/5 border-primary/20 text-primary text-sm py-1.5 px-3"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          )}
        </DynamicSheetContent>
      </DynamicSheet>
    </>
  );
}
