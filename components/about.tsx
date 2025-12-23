"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Zap,
  Shield,
  Globe,
  Target,
  Users,
  Award,
  Clock,
} from "lucide-react";

export function About() {
  const stats = [
    { value: "500+", label: "Projects Delivered", icon: Target },
    { value: "150+", label: "Happy Clients", icon: Users },
    { value: "10+", label: "Years Experience", icon: Award },
    { value: "24/7", label: "Support Available", icon: Clock },
  ];

  const values = [
    {
      icon: Code2,
      title: "The Binary Promise",
      description:
        "Clean code, maintainable architecture, and zero technical debt. We write software that scales with your business, not against it.",
    },
    {
      icon: Zap,
      title: "The Byte Delivery",
      description:
        "Agile speed without compromising quality. We ship fast, iterate faster, and maintain the highest standards throughout the process.",
    },
    {
      icon: Shield,
      title: "Security First",
      description:
        "Enterprise-grade security built into every solution. Your data and your users' data are protected with industry-leading practices.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description:
        "From London to San Francisco, we deliver seamlessly across time zones. Your project never sleeps, and neither do we.",
    },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-background/50">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-black mb-4 text-foreground">
            The Binary Byte Way
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            Building digital foundations for visionary founders since 2014
          </p>
        </motion.div>

        {/* Company Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-lg p-8 md:p-12 border border-border mb-16"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6 text-foreground">
              Our Story
            </h3>
            <p className="text-slate-400 text-lg leading-relaxed">
              Binary Byte is a global digital product consultancy bridging the
              gap between <span className="text-slate-200">Silicon Valley</span>{" "}
              innovation and{" "}
              <span className="text-slate-200">industrial-grade</span>{" "}
              engineering. We specialize in architecting high-performance
              software ecosystems—transforming complex business requirements
              into scalable, future-proof digital assets. From FinTech platforms
              to AI-driven enterprise solutions, we partner with{" "}
              <span className="text-slate-200">visionary</span> founders to
              build technology that doesn't just function, but dominates.
            </p>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass rounded-lg p-6 border border-border text-center"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-3xl font-black text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-secondary">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold mb-4 text-foreground">
              Our Core Values
            </h3>
            <p className="text-secondary text-lg max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass rounded-lg p-8 border border-border hover:border-primary transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-2xl font-bold mb-4 text-foreground">
                    {value.title}
                  </h4>
                  <p className="text-secondary text-lg leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-lg p-8 md:p-12 border border-border"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-8 text-center text-foreground">
              Why Choose Binary Byte?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">
                    Elite Engineering Team
                  </h4>
                  <p className="text-secondary">
                    Our developers have worked at top tech companies and bring
                    that expertise to every project.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">
                    Proven Track Record
                  </h4>
                  <p className="text-secondary">
                    Hundreds of successful projects delivered on time and within
                    budget.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">
                    Transparent Communication
                  </h4>
                  <p className="text-secondary">
                    Regular updates, clear timelines, and no surprises. You're
                    always in the loop.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">
                    Scalable Solutions
                  </h4>
                  <p className="text-secondary">
                    We build for growth. Your software will scale from startup
                    to enterprise seamlessly.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">
                    Modern Tech Stack
                  </h4>
                  <p className="text-secondary">
                    We use the latest technologies and best practices to
                    future-proof your investment.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">
                    Ongoing Support
                  </h4>
                  <p className="text-secondary">
                    Launch is just the beginning. We provide maintenance,
                    updates, and enhancements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
