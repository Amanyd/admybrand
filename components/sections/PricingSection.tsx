"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import PricingCard from "@/components/ui/PricingCard"
import Button from "@/components/ui/Button"

const pricingPlans = [
  {
    title: "Starter",
    price: "$29",
    period: "month",
    description: "Perfect for small businesses and startups",
    features: [
      "Up to 5 campaigns per month",
      "Basic AI content generation",
      "Email support",
      "1 user account",
      "Standard templates",
      "Basic analytics",
    ],
    buttonText: "Start Free Trial",
    height: "sm" as const,
  },
  {
    title: "Professional",
    price: "$99",
    period: "month",
    description: "Ideal for growing marketing teams",
    features: [
      "Unlimited campaigns",
      "Advanced AI features",
      "Priority support",
      "Up to 10 user accounts",
      "Custom templates",
      "Advanced analytics",
      "A/B testing",
      "Multi-channel deployment",
    ],
    buttonText: "Get Started",
    isPopular: true,
    height: "md" as const,
  },
  {
    title: "Enterprise",
    price: "$299",
    period: "month",
    description: "For large organizations with complex needs",
    features: [
      "Everything in Professional",
      "Custom AI model training",
      "Dedicated account manager",
      "Unlimited user accounts",
      "White-label options",
      "API access",
      "Custom integrations",
      "SLA guarantee",
      "24/7 phone support",
      "Custom onboarding",
    ],
    buttonText: "Contact Sales",
    height: "lg" as const,
  },
]

export default function PricingSection() {
  const [seats, setSeats] = useState(5)

  const calculatePrice = (basePrice: number) => {
    if (basePrice === 299) return basePrice // Enterprise is fixed
    return Math.round(basePrice + (seats - 1) * (basePrice * 0.1))
  }

  return (
    <section id="pricing" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Choose Your
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {" "}
              Perfect Plan
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Scale your marketing efforts with flexible pricing that grows with your business.
          </p>

          {/* Interactive Pricing Calculator */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-black/25 backdrop-blur-md border border-white/20 rounded-2xl p-6 max-w-md mx-auto mb-12"
          >
            <h3 className="text-white font-semibold mb-4">Team Size Calculator</h3>
            <div className="flex items-center space-x-4">
              <label className="text-gray-300 flex-shrink-0">Seats:</label>
              <div className="relative flex-1 px-2">
                <input
                  type="range"
                  min="1"
                  max="50"
                  value={seats}
                  onChange={(e) => setSeats(Number(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                  style={{
                    background: `linear-gradient(to right, rgb(6, 182, 212) 0%, rgb(6, 182, 212) ${
                      ((seats - 1) / 49) * 100
                    }%, rgb(55, 65, 81) ${((seats - 1) / 49) * 100}%, rgb(55, 65, 81) 100%)`,
                  }}
                />
              </div>
              <span className="text-white font-semibold w-8 text-center flex-shrink-0">{seats}</span>
            </div>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-end">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <PricingCard
                title={plan.title}
                price={
                  plan.title === "Enterprise"
                    ? plan.price
                    : `$${calculatePrice(Number.parseInt(plan.price.replace("$", "")))}`
                }
                period={plan.period}
                description={plan.description}
                features={plan.features}
                isPopular={plan.isPopular}
                buttonText={plan.buttonText}
                height={plan.height}
                onSelect={() => console.log(`Selected ${plan.title} plan`)}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-6">All plans include a 14-day free trial. No credit card required.</p>
          <Button variant="glass">Compare All Features</Button>
        </motion.div>
      </div>
    </section>
  )
}
