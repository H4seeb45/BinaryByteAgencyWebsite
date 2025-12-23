"use client";

import { motion } from "framer-motion";
import { BinaryWatermark } from "./binary-watermark";
import { TeamCard } from "./team-card";
import { TeamMemberCard } from "./team-member-card";

// Type definitions for architect data
interface CustomCardArchitect {
  name: string;
  role: string;
  bio: string;
  skills: string[];
  image?: string;
  linkedinUrl?: string;
  email?: string;
  imagePosition?: string;
  useCustomCard: true;
}

interface StandardCardArchitect {
  name: string;
  role: string;
  bio: string;
  techStack: string[];
  successMetric: string;
  image?: string;
  isUKBased?: boolean;
  useCustomCard?: false;
}

type Architect = CustomCardArchitect | StandardCardArchitect;

// Type guard function
function isCustomCardArchitect(
  architect: Architect
): architect is CustomCardArchitect {
  return architect.useCustomCard === true;
}

const architects: Architect[] = [
  {
    name: "Haseeb Ahmed",
    role: "CEO & Founder",
    bio: "An engineering leader bridging the gap between visionary product strategy and zero-compromise technical execution. A veteran architect of high-scale enterprise platforms and rapid-growth consumer apps, ensuring our digital foundations are unbreakable.",
    skills: [
      "System Architecture",
      "Full-Stack Engineering",
      "Enterprise Scaling",
      "Cloud Infrastructure",
      "Product Strategy",
    ],
    image: "/PrPicHaseebAhmed.jpg",
    linkedinUrl: "#",
    email: "ceo@binarybyte.com",
    imagePosition: "35%",
    useCustomCard: true,
  },
  {
    name: "Ali Haider",
    role: "CFO & Brand Director",
    bio: "Merging fiscal precision with creative intuition. Ali architects brand systems that are not just visually stunning, but mathematically scalable. He ensures every pixel contributes to the bottom line.",
    skills: [
      "Brand Identity",
      "Financial Strategy",
      "Unit Economics",
      "Art Direction",
      "Growth Modeling",
    ],
    image: "/PrPicAliHaiderBinaryByte.jpeg",
    linkedinUrl: "#",
    email: "ali@binarybyte.com",
    imagePosition: "5%",
    useCustomCard: true,
  },
  {
    name: "Salman Hassan",
    role: "Executive Coordinator",
    bio: "The central nervous system of our delivery pipeline. With deep roots in the SaaS industry, Salman orchestrates complex project lifecycles, ensuring seamless alignment between client vision and engineering execution for flawless product delivery.",
    skills: [
      "SaaS Operations",
      "Agile Management",
      "Stakeholder Relations",
      "Workflow Optimization",
      "Strategic Planning",
    ],
    image: undefined,
    linkedinUrl: "#",
    email: "salman@binarybyte.com",
    useCustomCard: true,
  },
  {
    name: "Zeeshan",
    role: "Product Manager & Engineer",
    bio: "A hybrid product leader who speaks both business and code. Zeeshan translates ambitious market requirements into precise technical specifications, leveraging his engineering background to drive product roadmaps that are as feasible as they are innovative.",
    skills: [
      "Product Lifecycle",
      "Technical Scoping",
      "User Experience (UX)",
      "Agile Development",
      "Market Analysis",
    ],
    image: undefined,
    linkedinUrl: "#",
    email: "zeeshan@binarybyte.com",
    useCustomCard: true,
  },
];

export function Team() {
  return (
    <section
      id="team"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden"
    >
      {/* Binary Code Watermark */}
      <BinaryWatermark />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 text-foreground">
            Architects of Binary Byte
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            UK heritage, global delivery standards. Our elite team combines
            Silicon Valley expertise with London precision to build software
            that scales.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {architects.map((architect, index) => {
            // Use custom card for members with useCustomCard flag
            if (isCustomCardArchitect(architect)) {
              return (
                <TeamMemberCard
                  key={`${architect.name}-${architect.role}`}
                  name={architect.name}
                  role={architect.role}
                  bio={architect.bio}
                  skills={architect.skills}
                  image={architect.image}
                  linkedinUrl={architect.linkedinUrl || "#"}
                  email={architect.email || "#"}
                  imagePosition={architect.imagePosition}
                />
              );
            }
            // Use standard TeamCard for others
            return (
              <TeamCard
                key={architect.name}
                name={architect.name}
                role={architect.role}
                bio={architect.bio}
                techStack={architect.techStack}
                successMetric={architect.successMetric}
                image={architect.image}
                isUKBased={architect.isUKBased || false}
                index={index}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
