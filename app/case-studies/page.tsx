import { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Case Studies - Binary Byte | Software Engineering Success Stories",
  description: "Explore how Binary Byte has helped startups and enterprises achieve technical excellence. Real results, real architecture, real ROI.",
};

const caseStudies = [
  {
    slug: "fintech-platform",
    title: "FinTech Platform for NYC Startup",
    description: "How Binary Byte engineered a production-ready fintech platform achieving 40% faster load times and $2M Series A funding.",
    industry: "FinTech / SaaS",
    duration: "12 Weeks",
    stack: ["React", "Next.js", "Node.js", "AWS"],
  },
  // Add more case studies here
];

export default function CaseStudiesPage() {
  return (
    <main className="relative">
      <Navigation />
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 text-foreground">
              Case Studies
            </h1>
            <p className="text-xl text-secondary max-w-3xl mx-auto">
              Real results from real projects. See how Binary Byte transforms technical challenges into business wins.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <Link key={study.slug} href={`/case-studies/${study.slug}`}>
                <Card className="glass border-border hover:border-primary/40 transition-all duration-300 h-full group">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <Badge variant="outline" className="bg-primary/5">
                        {study.industry}
                      </Badge>
                      <span className="text-xs text-secondary">{study.duration}</span>
                    </div>
                    <CardTitle className="text-2xl font-black mb-2 text-foreground">
                      {study.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {study.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {study.stack.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="bg-primary/5 border-primary/20 text-primary text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-primary group-hover:gap-4 transition-all">
                      <span className="text-sm font-semibold">Read Full Case Study</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

