"use client"

import type React from "react"
import { forwardRef } from "react"
import { cn } from "@/lib/utils"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "glass" | "gradient"
  children: React.ReactNode
}

const Card = forwardRef<HTMLDivElement, CardProps>(({ className, variant = "default", children, ...props }, ref) => {
  const variants = {
    default: "bg-white/5 border border-white/10 shadow-lg",
    glass: "bg-black/20 backdrop-blur-md border border-white/20 shadow-xl",
    gradient: "bg-gradient-to-br from-gray-900/30 to-black/20 backdrop-blur-md border border-white/20 shadow-xl",
  }

  return (
    <div ref={ref} className={cn("rounded-2xl p-6", variants[variant], className)} {...props}>
      {children}
    </div>
  )
})

Card.displayName = "Card"

export default Card
