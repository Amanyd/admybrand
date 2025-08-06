"use client"

import { motion } from "framer-motion"
import { Brain, Target, BarChart3, Palette, MessageSquare, Shield, Zap, Globe } from "lucide-react"
import FeatureCard from "@/components/ui/FeatureCard"

const features = [
  {
    icon: Brain,
    title: "AI Content Generation",
    description:
      "Create compelling copy, headlines, and creative assets with our advanced AI engine trained on millions of successful campaigns.",
  },
  {
    icon: Target,
    title: "Smart Audience Targeting",
    description:
      "Identify and reach your ideal customers with precision using machine learning algorithms that analyze behavior patterns.",
  },
  {
    icon: BarChart3,
    title: "Predictive Analytics",
    description:
      "Forecast campaign performance and optimize your marketing spend with real-time insights and predictive modeling.",
  },
  {
    icon: Palette,
    title: "Brand Consistency",
    description:
      "Maintain perfect brand alignment across all channels with AI-powered brand guidelines and asset management.",
  },
  {
    icon: MessageSquare,
    title: "Multi-Channel Campaigns",
    description:
      "Deploy synchronized campaigns across social media, email, web, and mobile platforms from a single dashboard.",
  },
  {
    icon: Shield,
    title: "Compliance & Security",
    description:
      "Enterprise-grade security with automated compliance checking for GDPR, CCPA, and industry regulations.",
  },
  {
    icon: Zap,
    title: "Real-Time Optimization",
    description:
      "Automatically adjust campaigns in real-time based on performance data to maximize ROI and engagement.",
  },
  {
    icon: Globe,
    title: "Global Localization",
    description:
      "Adapt your campaigns for international markets with AI-powered translation and cultural optimization.",
  },
]

export default function FeaturesSection() {
  // Function to determine animation direction based on grid position
  const getAnimationDirection = (index: number) => {
    // In a 4-column grid: 0,1,4,5 are left side, 2,3,6,7 are right side
    const leftSideIndices = [0, 1, 4, 5]
    return leftSideIndices.includes(index) ? "left" : "right"
  }

  return (
    <section id="features" className="py-24 relative bg-gradient-to-b from-black/80 via-gray-900/40 to-transparent">
      <div className="container mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Powerful Features for
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {" "}
              Modern Marketers
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Everything you need to create, manage, and optimize your marketing campaigns with the power of artificial
            intelligence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
              direction={getAnimationDirection(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
