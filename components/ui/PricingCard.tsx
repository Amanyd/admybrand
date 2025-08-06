"use client"

import { Check } from "lucide-react"
import Button from "./Button"
import Card from "./Card"

interface PricingCardProps {
  title: string
  price: string
  period: string
  description: string
  features: string[]
  isPopular?: boolean
  buttonText: string
  onSelect: () => void
  height?: "sm" | "md" | "lg"
}

export default function PricingCard({
  title,
  price,
  period,
  description,
  features,
  isPopular = false,
  buttonText,
  onSelect,
  height = "md",
}: PricingCardProps) {
  const heightClasses = {
    sm: "min-h-[500px]",
    md: "min-h-[550px]",
    lg: "min-h-[600px]",
  }

  return (
    <div className="relative">
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
          <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      <Card
        variant="glass"
        className={`${heightClasses[height]} flex flex-col ${isPopular ? "ring-2 ring-cyan-500" : ""}`}
      >
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <div className="mb-2">
            <span className="text-4xl font-bold text-white">{price}</span>
            <span className="text-white/70">/{period}</span>
          </div>
          <p className="text-white/80">{description}</p>
        </div>

        <ul className="space-y-3 mb-8 flex-grow">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-white/90">
              <Check className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>

        <Button variant={isPopular ? "primary" : "glass"} className="w-full mt-auto" onClick={onSelect}>
          {buttonText}
        </Button>
      </Card>
    </div>
  )
}
