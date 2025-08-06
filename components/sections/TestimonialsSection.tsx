"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import TestimonialCard from "@/components/ui/TestimonialCard"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Marketing Director",
    company: "TechFlow Inc",
    content:
      "ADmyBRAND AI Suite transformed our marketing strategy completely. We saw a 400% increase in engagement within the first month. The AI-generated content is incredibly sophisticated.",
    rating: 5,
    avatar: "/professional-woman-diverse.png",
  },
  {
    name: "Marcus Rodriguez",
    role: "CEO",
    company: "GrowthLab",
    content:
      "The predictive analytics feature alone saved us thousands in ad spend. The platform pays for itself within weeks. Absolutely revolutionary for small businesses.",
    rating: 5,
    avatar: "/professional-man.png",
  },
  {
    name: "Emily Watson",
    role: "Brand Manager",
    company: "Stellar Brands",
    content:
      "Managing campaigns across multiple channels used to be a nightmare. Now everything is seamless and automated. The brand consistency tools are game-changing.",
    rating: 5,
    avatar: "/professional-woman-glasses.png",
  },
  {
    name: "David Kim",
    role: "Digital Marketing Lead",
    company: "InnovateCorp",
    content:
      "The AI content generation is scary good. It understands our brand voice perfectly and creates content that converts better than our human-written copy.",
    rating: 5,
    avatar: "/professional-asian-man.png",
  },
  {
    name: "Lisa Thompson",
    role: "CMO",
    company: "NextGen Solutions",
    content:
      "ROI tracking and optimization features are incredible. We can see exactly which campaigns are working and why. The insights have revolutionized our strategy.",
    rating: 5,
    avatar: "/professional-woman-executive.png",
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [direction, setDirection] = useState(0) // 1 for next (right to left), -1 for prev (left to right)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToTestimonial = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  const getVisibleTestimonials = () => {
    const visible = []
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + testimonials.length) % testimonials.length
      visible.push({
        ...testimonials[index],
        position: i, // -1 = left, 0 = center, 1 = right
        key: `${currentIndex}-${i}`,
        id: index,
      })
    }
    return visible
  }

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 400 : -400, // Enter from right (400px) for next, left (-400px) for prev
      opacity: 0,
      scale: 0.8,
    }),
    center: (position: number) => ({
      x: position * 350, // Final position: left (-350), center (0), right (350)
      opacity: 1, // All cards are fully visible
      scale: position === 0 ? 1.1 : 0.85, // Center is larger, sides are smaller
      zIndex: position === 0 ? 10 : 1, // Center is on top
    }),
    exit: (direction: number) => ({
      x: direction > 0 ? -400 : 400, // Exit to left (-400px) for next, right (400px) for prev
      opacity: 0,
      scale: 0.8,
    }),
  }

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Loved by
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {" "}
              Marketing Teams
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join thousands of marketers who have transformed their campaigns with AI
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Carousel testimonials with smooth sliding */}
          <div className="min-h-[450px] mb-8 relative flex items-center justify-center overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              {getVisibleTestimonials().map((testimonial) => (
                <motion.div
                  key={testimonial.key}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    duration: 0.6,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="absolute w-80"
                  style={{
                    // Pass position to the animate state
                    ["--position" as any]: testimonial.position,
                  }}
                  animate={{
                    x: testimonial.position * 350,
                    opacity: 1, // All cards stay fully visible
                    scale: testimonial.position === 0 ? 1.1 : 0.85,
                    zIndex: testimonial.position === 0 ? 10 : 1,
                  }}
                >
                  <TestimonialCard {...testimonial} isCenter={testimonial.position === 0} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Navigation controls */}
          <div className="flex items-center justify-center space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-3 bg-black/25 backdrop-blur-md border border-white/20 text-white hover:bg-black/35 rounded-full transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex ? "bg-cyan-500" : "bg-gray-600 hover:bg-gray-500"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-3 bg-black/25 backdrop-blur-md border border-white/20 text-white hover:bg-black/35 rounded-full transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
