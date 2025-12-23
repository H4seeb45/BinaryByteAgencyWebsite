"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, TrendingUp, Zap, Shield } from "lucide-react";
import type { LucideIcon } from "lucide-react";

// Icon mapping
const iconMap: Record<string, LucideIcon> = {
  CheckCircle2,
  TrendingUp,
  Zap,
  Shield,
};

interface CaseStudyData {
  projectName: string;
  niche: string;
  metaDescription: string;
  heroImage: string;
  heroImageAlt: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
    description?: string;
  }[];
  technicalSpecs: {
    clientRegion: string;
    industry: string;
    projectDuration: string;
    stack: string[];
  };
  lessonsLearned: {
    title: string;
    description: string;
    icon: string; // Icon name as string
  }[];
}

interface CaseStudyTemplateProps {
  data: CaseStudyData;
}

export function CaseStudyTemplate({ data }: CaseStudyTemplateProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
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
          <div className="w-full h-full bg-gradient-to-br from-primary/20 via-background to-background flex items-center justify-center">
            <div className="text-center px-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-foreground mb-4">
                {data.projectName}
              </h1>
              <p className="text-xl md:text-2xl text-secondary">
                {data.niche} Case Study
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-5xl">
        {/* The Challenge */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-12 bg-primary rounded-full" />
            <h2 className="text-3xl md:text-4xl font-black text-foreground">
              The Challenge
            </h2>
          </div>
          <Card className="glass border-border">
            <CardContent className="p-8">
              <p className="text-lg md:text-xl text-secondary leading-relaxed">
                {data.challenge}
              </p>
            </CardContent>
          </Card>
        </motion.section>

        {/* Technical Specifications */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6">
            Technical Specifications
          </h2>
          <Card className="glass border-border overflow-hidden">
            <Table>
              <TableBody>
                <TableRow>
                  <TableHead className="w-[200px] text-primary font-semibold">
                    Client Region
                  </TableHead>
                  <TableCell className="text-secondary">
                    {data.technicalSpecs.clientRegion}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableHead className="text-primary font-semibold">
                    Industry
                  </TableHead>
                  <TableCell className="text-secondary">
                    {data.technicalSpecs.industry}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableHead className="text-primary font-semibold">
                    Project Duration
                  </TableHead>
                  <TableCell className="text-secondary">
                    {data.technicalSpecs.projectDuration}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableHead className="text-primary font-semibold">
                    Tech Stack
                  </TableHead>
                  <TableCell>
                    <div className="flex flex-wrap gap-2">
                      {data.technicalSpecs.stack.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="bg-primary/5 border-primary/20 text-primary"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Card>
        </motion.section>

        {/* The Solution */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-12 bg-primary rounded-full" />
            <h2 className="text-3xl md:text-4xl font-black text-foreground">
              The Solution
            </h2>
          </div>
          <Card className="glass border-border">
            <CardContent className="p-8">
              <p className="text-lg md:text-xl text-secondary leading-relaxed">
                {data.solution}
              </p>
            </CardContent>
          </Card>
        </motion.section>

        {/* The Results */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-12 bg-primary rounded-full" />
            <h2 className="text-3xl md:text-4xl font-black text-foreground">
              The Results
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.results.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="glass border-primary/20 hover:border-primary/40 transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="text-4xl font-black text-primary mb-2">
                      {result.value}
                    </div>
                    <div className="text-lg font-bold text-foreground mb-2">
                      {result.metric}
                    </div>
                    {result.description && (
                      <p className="text-sm text-secondary">
                        {result.description}
                      </p>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Lessons Learned */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-8 text-center">
            Lessons Learned
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.lessonsLearned.map((lesson, index) => {
              const Icon = iconMap[lesson.icon] || CheckCircle2;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="glass border-border hover:border-primary/30 transition-all duration-300 h-full group">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl font-bold text-foreground">
                        {lesson.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-secondary leading-relaxed">
                        {lesson.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
