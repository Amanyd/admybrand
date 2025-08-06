"use client"
import { Star } from "lucide-react"
import Card from "./Card"

interface TestimonialCardProps {
  name: string
  role: string
  company: string
  content: string
  rating: number
  avatar: string
  isCenter?: boolean
}

export default function TestimonialCard({
  name,
  role,
  company,
  content,
  rating,
  avatar,
  isCenter = false,
}: TestimonialCardProps) {
  return (
    <div className="w-full max-w-md mx-auto">
      <Card
        variant="glass"
        className={`h-full transition-all duration-300 ${
          isCenter ? "ring-2 ring-cyan-500/50 shadow-2xl shadow-cyan-500/20" : ""
        }`}
      >
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`w-5 h-5 ${i < rating ? "text-cyan-400 fill-current" : "text-gray-600"}`} />
          ))}
        </div>

        <blockquote className="text-gray-200 mb-6 leading-relaxed">"{content}"</blockquote>

        <div className="flex items-center">
          <img
            src={avatar || "/placeholder.svg"}
            alt={name}
            className="w-12 h-12 rounded-full mr-4 object-cover border border-white/20"
          />
          <div>
            <div className="font-semibold text-white">{name}</div>
            <div className="text-cyan-300/80 text-sm">
              {role} at {company}
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
