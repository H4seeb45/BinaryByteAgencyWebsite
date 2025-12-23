import { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { CaseStudyTemplate } from "@/components/case-study-template";

// Example case study data - replace with dynamic data from CMS/API
const caseStudyData = {
  projectName: "FinTech Platform for NYC Startup",
  niche: "FinTech / SaaS",
  metaDescription: "How Binary Byte engineered a production-ready fintech platform for a NYC startup, achieving 40% faster load times and $2M Series A funding using React, Next.js, Node.js, and AWS.",
  heroImage: "/case-study-hero.jpg",
  heroImageAlt: "FinTech Platform Dashboard",
  challenge: "A New York-based fintech startup approached Binary Byte with a critical challenge: their existing MVP was buckling under user growth, experiencing 3+ second load times, and technical debt was preventing them from closing their Series A round. The platform needed to handle real-time transaction processing for 100,000+ concurrent users while maintaining PCI-DSS compliance and sub-200ms API response times. Legacy code written in PHP was creating a bottleneck that threatened to derail their fundraising timeline.",
  solution: "We architected a complete rebuild using Next.js 14 for server-side rendering and optimal Core Web Vitals, Node.js with Express for microservices architecture, and PostgreSQL with Prisma ORM for type-safe database operations. We chose AWS over GCP for its superior fintech compliance certifications (SOC 2, PCI-DSS Level 1). The infrastructure uses CloudFront CDN, RDS with read replicas, and ElastiCache for Redis-based session management. Security was paramount: we implemented Auth.js for OAuth 2.0, end-to-end encryption using AWS KMS, and rate limiting via CloudFlare. The entire system was containerized with Docker and deployed via AWS ECS for zero-downtime deployments.",
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
  technicalSpecs: {
    clientRegion: "New York, USA",
    industry: "FinTech / SaaS",
    projectDuration: "12 Weeks",
    stack: ["React", "Next.js 14", "Node.js", "PostgreSQL", "AWS", "Prisma", "Auth.js", "Docker"],
  },
  lessonsLearned: [
    {
      title: "Why Clean Code Was the Catalyst",
      description: "Clean, maintainable architecture wasn't just a preference—it was the difference between closing Series A and losing investor confidence. Our type-safe Prisma schema and modular microservices allowed the client to onboard new engineers in days, not weeks, proving scalability to investors.",
      icon: "CheckCircle2",
    },
    {
      title: "Performance as a Business Metric",
      description: "The 40% load time improvement directly correlated with a 25% increase in user retention. We proved that technical excellence translates to business outcomes—users don't wait for slow software, and neither do investors.",
      icon: "TrendingUp",
    },
    {
      title: "Security-First Architecture",
      description: "By choosing AWS and implementing enterprise-grade security from day one, we eliminated the need for a costly security audit later. This saved the client $150K+ and accelerated their compliance timeline by 6 months.",
      icon: "Shield",
    },
    {
      title: "The MVP-to-Scale Transition",
      description: "Most startups rebuild after Series A. We architected this platform to scale from day one, eliminating the need for a costly rewrite. The client's technical debt went from a liability to an asset in investor presentations.",
      icon: "Zap",
    },
  ],
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `${caseStudyData.projectName} - ${caseStudyData.niche} Case Study | Binary Byte`,
    description: caseStudyData.metaDescription,
    openGraph: {
      title: `${caseStudyData.projectName} - ${caseStudyData.niche} Case Study`,
      description: caseStudyData.metaDescription,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${caseStudyData.projectName} - ${caseStudyData.niche} Case Study`,
      description: caseStudyData.metaDescription,
    },
  };
}

export default function CaseStudyPage() {
  return (
    <main className="relative">
      <Navigation />
      <CaseStudyTemplate data={caseStudyData} />
      <Footer />
    </main>
  );
}

