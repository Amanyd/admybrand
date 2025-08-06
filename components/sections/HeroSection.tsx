"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Play, Sparkles, Zap } from "lucide-react"
import Button from "@/components/ui/Button"
import Modal from "@/components/ui/Modal"

export default function HeroSection() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-15">
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-gray-900/80 to-transparent" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-cyan-500/5 rounded-full blur-xl"
        />
        <motion.div
          animate={{ y: [20, -20, 20] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
          className="absolute top-1/3 right-1/4 w-48 h-48 bg-purple-500/5 rounded-full blur-xl"
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-8">
        {/* AI Dashboard Image - Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen pt-32">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center px-4 py-2 bg-black/30 backdrop-blur-sm border border-white/20 rounded-full text-white/90 text-sm mb-8">
              <Sparkles className="w-4 h-4 mr-2 text-cyan-400" />
              Introducing ADmyBRAND AI Suite 2.0
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight"
            >
              Supercharge Your
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {" "}
                Marketing{" "}
              </span>
              with AI
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed"
            >
              ADmyBRAND AI Suite helps you plan, launch, and optimize campaigns with data-driven precision.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" className="min-w-[200px]">
                <Zap className="w-5 h-5 mr-2" />
                Start Free Trial
              </Button>
              <Button variant="glass" size="lg" onClick={() => setIsVideoModalOpen(true)} className="min-w-[200px]">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </motion.div>
          </motion.div>

          {/* Right side - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="relative"
          >
            <div className="relative  lg:ml-16 lg:mr-0">
            {/* max-w-md */}
              <img
                src="/ai-dashboard-hero.png"
                alt="ADmyBRAND AI Suite Dashboard"
                className="w-full h-auto rounded-2xl border border-white/20 "
              />
              {/* Subtle blue glow */}
              <div className="absolute inset-0 bg-blue-500/20 rounded-2xl blur-xl -z-10 scale-110"></div>
            </div>
          </motion.div>
        </div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto text-center"
        >
          {[
            { number: "10M+", label: "Campaigns Created" },
            { number: "500%", label: "Average ROI Increase" },
            { number: "50K+", label: "Happy Customers" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Demo Video Modal */}
      <Modal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        title="Product Demo"
        className="max-w-4xl"
      >
        <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center">
          <div className="text-center text-white">
            <Play className="w-16 h-16 mx-auto mb-4 opacity-50" />
            <p className="text-white/70">Demo video would be embedded here</p>
          </div>
        </div>
      </Modal>

      {/* Bottom gradient merge */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-gray-900/60 to-black/80 pointer-events-none" />
    </section>
  )
}
