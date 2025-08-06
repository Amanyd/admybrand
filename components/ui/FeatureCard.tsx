"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"
import Card from "./Card"

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  delay?: number
  direction?: "left" | "right"
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  delay = 0,
  direction = "left",
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: direction === "left" ? -50 : 50,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Card variant="glass" className="h-full text-center group hover:bg-black/50 transition-all duration-300">
        <div className="mb-4 flex justify-center">
          <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl">
            <Icon className="w-8 h-8 text-white" />
          </div>
        </div>
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-white/80 leading-relaxed">{description}</p>
      </Card>
    </motion.div>
  )
}
